import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMonk';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <>

            <div className=" flex justify-center ">
                <h1 className="text-white text-5xl lg:text-7xl mt-10">{greeting}</h1>
            </div>
            <div>

                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer;