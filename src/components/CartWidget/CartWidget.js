import { RiShoppingCart2Fill } from "react-icons/ri";

export const CartWidget = () => {
    return (
        <>
            <div className="flex items-center mr-5 bg-violet-700  lg:mr-11 2xl:mr-28">
                <RiShoppingCart2Fill className="text-white text-2xl mr-1 bg-violet-700" />
                <p className="text-xl text-white bg-violet-700">3</p>
            </div>
        </>
    )
}
