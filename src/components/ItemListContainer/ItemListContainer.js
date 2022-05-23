import {useState, useEffect } from "react"
import { getProducts } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (props) => {
 const [products, setProducts] = useState([])

  useEffect(() => {
      getProducts().then(response => {
      setProducts(response)
      })
  }, [])
   
    

  return (<div>
    <h2>{props.greeting}</h2> 
    <ItemList products={products}/>
    
    </div>    
  )
}

export default ItemListContainer