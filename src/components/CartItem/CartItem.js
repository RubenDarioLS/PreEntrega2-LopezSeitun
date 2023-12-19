import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ title, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)


  return (
    <div className="text-white flex justify-around m-4  items-center">

      <h2 className="w-14 mr-5 text-lg" >{title}</h2>
      <p className="flex flex-col justify-center items-center text-sm">Precio: <span>${price}</span></p>
      <p className="flex flex-col justify-center items-center text-sm">Cantidad:<span>{quantity}</span></p>
      <p className="flex flex-col justify-center items-center text-sm">Subtotal:<span>${price * quantity}</span></p>
      <button className="text-white text-sm border rounded px-4 h-7 bg-violet-600 " onClick={() => removeItem(id)}>Eliminar</button>

    </div>
  )
}

export default CartItem;