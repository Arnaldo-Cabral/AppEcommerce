import '../NavBar/NavBar.css'
import { useState, useEffect } from "react";
import { getProductsById } from "../asyncmock"
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({productos}) => {
    const [product, setProduct] = useState()

    useEffect(() =>{
        getProductsById('3').then(response =>{
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