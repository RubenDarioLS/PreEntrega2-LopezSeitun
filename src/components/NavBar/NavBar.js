import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom'

const menuContect = [
    { name: 'T-shirts', link: '/category/t-shirts' },
    { name: 'Jackets', link: '/category/jackets' },
    { name: 'Backpacks', link: '/category/backpacks' },]



const NavBar = () => {

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible)
    }


    const [menuVisible, setMenuVisible] = useState(false)

    return (
        <>
            <nav className=" bg-violet-700 py-2 w-full lg:h-16 lg:flex lg:items-center ">
                <div className="flex bg-violet-700 items-center w-full ">
                    <LuMenu onClick={handleMenuClick} className="cursor-pointer text-white text-3xl ml-5 bg-violet-700 lg:hidden" />

                    <Link to={'/'} className="text-white font-bold text-2xl mx-auto bg-violet-700 lg:ml-7 2xl:ml-28">
                        <p className="bg-violet-700" >Clothes Store</p>
                    </Link>

                    <ul className="hidden lg:flex  2xl:mr-20 mr-16 bg-violet-700 ">{menuContect.map((menuContect) => <NavLink key={menuContect.name} className="bg-violet-700 w-20" to={menuContect.link}><li className=" text-lg text-white list-none bg-violet-700 hover:text-xl    text-center">{menuContect.name}</li></NavLink>)}</ul>

                    <CartWidget />

                </div>
                {menuVisible &&

                    <ul className="flex flex-col mt-4  justify-center lg:hidden bg-violet-700 ">{menuContect.map((menuContect) => <NavLink key={menuContect.name} to={menuContect.link}><li className=" text-xl text-white list-none bg-violet-700 hover:bg-violet-600 py-2 font-bold text-center">{menuContect.name}</li></NavLink>)}</ul>
                }


            </nav>

        </>
    )
}

export default NavBar;