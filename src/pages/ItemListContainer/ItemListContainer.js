import { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', "==", categoryId))
            : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(productsAdapted)
        })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <>

            <div className=" flex justify-center ">
                <h1 className="text-white text-5xl lg:text-7xl mt-10">{greeting}</h1>
            </div>
            <div>

                <ItemList products={products} />
            </div>


        </>
    )
}

export default ItemListContainer;