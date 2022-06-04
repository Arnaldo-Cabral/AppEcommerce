import '../NavBar/NavBar.css'
import { useState, useEffect } from "react";
import { getProductsById } from "../asyncmock"
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({productos}) => {
    const [product, setProduct] = useState()

    useEffect(() =>{
        getProductsById(productId).then(response =>{
           setProduct(response)
        })
    }, [])

    return (
        <div>
            <h1>Detalle productos</h1>
            <ItemDetail {...product} />            
        </div>
    )
}

export default ItemDetailContainer