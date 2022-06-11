import {useState, useEffect } from "react"
import { getProducts } from "../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom'
import { getProductsByCategory } from "../asyncmock"


const ItemListContainer = (props) => {
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(true)
 

 const {categoryId} = useParams()

 /* const onResize = () => console.log('cambio de tamaño')
  useEffect(() =>{
    window.addEventListener('resize', onResize)

    return () =>{
     window.removeEventListener('resize', onResize)
   }
 }, []) */

  /* useEffect(() => {
    if(!categoryId){
      getProducts().then(response => {
        setProducts(response)
        })
    } else {
      getProductsByCategory(categoryId).then(response => {
        setProducts(response)
      })
    }
      
  }, [categoryId]) */
  useEffect(() => {
    setLoading(true)

    if(!categoryId) {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    } else {
        getProductsByCategory(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
}, [categoryId])

  if(loading) {
    return <div class="spinner"></div>
  }

  return (<div>
    <h2>{props.greeting}</h2> 
    <ItemList products={products}/>
   
    </div>    
  )
}

export default ItemListContainer