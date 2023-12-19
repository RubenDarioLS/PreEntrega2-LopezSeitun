import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-white text-2xl my-10">No hay items en el carrito</h1>
                <Link className=" w-36 flex justify-center text-white bg-violet-600 rounded p-2 " to="/">See Products</Link>
            </div>
        )
    }
    console.log(cart)

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}  {...p} />)}
            <button onClick={() => clearCart()} className="text-white p-2 bg-violet-700 rounded mx-auto flex" >Limpiar carrito</button>

            <div className="flex flex-col items-center my-12">
                <p className="text-white text-2xl" >Total: ${totalPrice()}</p>
                <Link to='/checkout' className="text-white text-xl p-2 bg-violet-700 rounded mt-5 ">checkout</Link>
            </div>
        </div>
    )
}

export default Cart