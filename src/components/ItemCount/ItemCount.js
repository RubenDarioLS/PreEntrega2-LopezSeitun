import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    const handleSuma = () => {
        count < stock && setCount(count + 1)

    }

    const handleResta = () => {
        count > 0 && setCount(count - 1);

    }

    

    return (
        <>
            <div className="flex flex-col w-44 border border-violet-700 bg-violet-700 m-5">


                <div className="flex text-white justify-between items-center w-40 mx-auto py-3 my-4 bg-violet-700 ">
                    <button className="px-5 py-1 bg-violet-500 hover:bg-violet-400 font-bold rounded-full" onClick={handleResta}>-</button>
                    <p className="bg-violet-700 text-xl ">{count}</p>
                    <button className="px-5 py-1 bg-violet-500 hover:bg-violet-400 font-bold rounded-full" onClick={handleSuma}>+</button>
                </div>

                <button className="text-white p-1 bg-violet-500 hover:bg-violet-400 rounded-xl" onClick={() => onAdd(count)} disabled={!stock}>Add to shopping cart</button>
            </div>
        </>
    )
}

export default ItemCount;