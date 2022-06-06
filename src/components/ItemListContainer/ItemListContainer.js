import {useState, useEffect } from "react"
import { getProducts } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom'
import { getProductsByCategory } from "../asyncmock"


const ItemListContainer = (props) => {
 const [products, setProducts] = useState([])

 const {categoryId} = useParams()

 const onResize = () => console.log('cambio de tamaño')
  useEffect(() =>{
    window.addEventListener('resize', onResize)

    return () =>{
     window.removeEventListener('resize', onResize)
   }
 }, [])

  useEffect(() => {
    if(!categoryId){
      getProducts().then(response => {
        setProducts(response)
        })
    } else {
      getProductsByCategory(categoryId).then(response => {
        setProducts(response)
      })
    }
      
  }, [categoryId])
   
    

  return (<div>
    <h2>{props.greeting}</h2> 
    <ItemList products={products}/>
   
    </div>    
  )
}

export default ItemListContainer