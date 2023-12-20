import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)

    if (totalQuantity() === 0) {
        return (
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-white text-2xl my-10">There aren´t products in the card</h1>
                <Link className=" w-36 flex justify-center text-white bg-violet-600 rounded p-2 " to="/">See Products</Link>
            </div>
        )
    }
    console.log(cart)

    return (
        <div className="">
            {cart.map(p => <CartItem key={p.id}  {...p} />)}
            <button onClick={() => clearCart()} className="text-white mt-10 p-2 bg-violet-700 rounded mx-auto flex lg:mr-24 lg:mt-0   lg:hover:scale-110" >Clear Cart</button>

            <div className="flex flex-col items-center my-12 lg:flex-row lg:justify-end lg:items-center lg:mr-24 lg:ml-auto lg:border lg:w-80 lg:rounded">
                <p className="text-white text-2xl lg:mr-16 " >Total: ${totalPrice()}</p>
                <Link to='/checkout' className="text-white text-xl p-2 bg-violet-700 rounded mt-5 lg:mt-0 lg:hover:bg-violet-600">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart