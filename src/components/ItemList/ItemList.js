
import Item from "../Item/Item"

export const ItemList = ({ products }) => {
    return (
        <div className="flex m-10 flex-wrap justify-center ">

            {products.map(product => <Item key={product.id} {...product} />)}

        </div>
    )
}
