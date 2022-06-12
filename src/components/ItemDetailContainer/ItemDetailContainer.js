import '../NavBar/NavBar.css'
import { useState, useEffect } from "react";
import { getProductsById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    
    const {productId} = useParams()
    

    useEffect(() =>{
        getProductsById(productId).then(response =>{
           setProduct(response)
        })  
    }, [productId])

    return (
        <div>
            <h2>Detalle producto</h2>
            <ItemDetail {...product}  />            
        </div>
    )
}

export default ItemDetailContainer