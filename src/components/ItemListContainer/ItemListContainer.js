import { useState, useEffect } from 'react'
import { getProducts } from './../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams} from 'react-router-dom'
import { getProductsByCategory } from "../asyncmock"




function ItemListContainer(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
   
    console.log('antes de montar')


    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer