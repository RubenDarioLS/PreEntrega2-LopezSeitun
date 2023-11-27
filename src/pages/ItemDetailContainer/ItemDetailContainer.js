import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMonk";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();

  const { itemId } = useParams();

  useEffect(() => {
    const id = parseInt(itemId)
    getProductById(id)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.log(error)
      })
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;