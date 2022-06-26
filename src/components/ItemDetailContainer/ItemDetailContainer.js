import '../NavBar/NavBar.css'
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom';
import { getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const {productId} = useParams()
    

    useEffect(() =>{

        getDoc(doc(db, 'products', productId)).then(response => {

            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [productId])

    if(loading) {
        return <div class="spinner"></div>
    }

    return (
        <div className='altura'>
            <h2>Detalle producto</h2>
            <ItemDetail {...product}  />            
        </div>
    )
}

export default ItemDetailContainer