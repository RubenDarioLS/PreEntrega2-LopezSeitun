import { useContext } from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    return (

        <>
            <Link to='/cart' className="  flex items-center  mr-5 bg-violet-700  lg:mr-11 2xl:mr-28" style={{ display: totalQuantity() > 0 ? 'flex' : 'none' }} >
                <RiShoppingCart2Fill className="text-white text-2xl mr-1 bg-violet-700" />
                <p className="text-xl text-white bg-violet-700">{totalQuantity()}</p>
            </Link>
        </>
    )
}
