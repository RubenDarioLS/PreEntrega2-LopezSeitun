import ItemCount from "../../components/ItemCount/ItemCount"
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, image, description, price, stock, category }) => {

    return (
        <>
            <article className=" flex justify-center w-full my-24 ">
                <div className="bg-violet-700 rounded-lg m-5 w-full flex flex-col items-center md:flex-row md:justify-center md:w-3/4 md:py-5">

                    <div className="flex flex-col justify-center items-center bg-violet-700 rounded-md md:w-1/2">
                        <h2 className="text-white font-bold text-2xl bg-violet-700 mt-12 mb-5 text-center md:text-3xl ">{title}</h2>
                        <img src={image} alt={title} className="h-80 w-72 m-4 rounded-lg" />
                        <p className="text-white text-xl  bg-violet-700 text-center m-6">{description}</p>
                    </div>
                    <div className="flex flex-col justify-center  items-center bg-violet-700 md:w-1/2 md:h-full md:relative ">

                        <p className="bg-violet-700 text-white text-lg  ">Price: ${price}</p>
                        <p className="bg-violet-700 text-white text-lg  ">Stock: {stock}</p>
                        <p className="bg-violet-700 text-white text-lg  ">category: {category}</p>

                        <ItemCount initial={0} stock={stock} onAdd={(count) => console.log('Cantidad agregada:', count)} />
                        <Link to={'/'} className="text-white bg-violet-500 hover:bg-violet-400 w-32 my-8 p-1 text-center rounded-lg text-bold text-xl md:absolute md:bottom-8 ">Back</Link>
                    </div>


                </div>
            </article>
        </>
    )
}

export default ItemDetail;