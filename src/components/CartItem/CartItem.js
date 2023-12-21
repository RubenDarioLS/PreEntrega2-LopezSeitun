import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ title, price, id, quantity }) => {

  const { removeItem } = useContext(CartContext)


  return (
    <div className="text-white flex justify-around m-4  items-center lg:my-10  lg:mx-24 ">

      <h2 className="w-14 mr-5 text-sm lg:text-lg lg:w-32 font-bold " >{title}</h2>
      <p className="flex flex-col justify-center items-center text-sm lg:flex-row lg:mx-auto lg:text-lg ">Price:&#160; <span>${price}</span></p>
      <p className="flex flex-col justify-center items-center text-sm lg:flex-row lg:mx-auto lg:text-lg ">Quantity:&#160; <span>{quantity}</span></p>
      <p className="flex flex-col justify-center items-center text-sm lg:flex-row lg:mx-auto lg:text-lg ">Subtotal:&#160; <span>${price * quantity}</span></p>
      <button className="text-white text-sm rounded px-2 h-7 bg-violet-600 lg:p-4 items-center flex lg:hover:scale-110" onClick={() => removeItem(id)}><span className=" bg-violet-600 lg:hidden ">X</span> <span className="bg-violet-600 text-lg hidden lg:block">Delete</span></button>

    </div>
  )
}

export default CartItem;