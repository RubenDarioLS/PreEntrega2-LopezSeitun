import { Link } from 'react-router-dom'

const Item = ({ id, title, price, image, stock }) => {
    return (
        <>
            <article className="w-96 flex flex-col items-center bg-violet-700 rounded-lg m-5">

                <h2 className="text-white font-bold text-2xl bg-violet-700 mt-7 text-center h-16">{title}</h2>
                <img src={image} alt={title} className="h-72 m-4 rounded-xl" />

                <p className="bg-violet-700 text-white text-lg m-1">${price}</p>
                <p className="bg-violet-700 text-white text-lg ">Stock: {stock}</p>


                <Link to={`/item/${id}`} className="bg-white rounded-lg w-44 my-5 text-center">Detail</Link>

            </article>

        </>
    )
}
export default Item;