import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, query, where, writeBatch, Timestamp, documentId, addDoc, getDocs } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from '../CheckoutForm/CheckoutForm'



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, email, phone }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email                     ,
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity


                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })

                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }

            })


            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                console.log('Order Added:', orderAdded);
                setOrderId(orderAdded.id)
                clearCart()

            } else {
                console.error('hay productos fuera de stock')
            }

        } catch (error) {
            console.error('error al crear el pedido', error)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <h1 className='text-white text-3xl'>Se esta generando su orden...</h1>

    }

    if (orderId) {
        return <h1 className='text-white text-3xl'> El id de su orden es: {orderId}</h1>
    }

    return (
        <div className='w-full flex flex-col justify-center items-center my-16'>
            <h1 className='text-white text-4xl'>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )

}

export default Checkout;