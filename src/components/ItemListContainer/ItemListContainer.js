import {useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams} from 'react-router-dom'
import {getDocs, collection, query, where} from 'firebase/firestore'
import { db } from "../../services/firebase"



const ItemListContainer = (props) => {
 const [products, setProducts] = useState([])
 const [loading, setLoading] = useState(true)

 const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId 
      ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setProducts(products)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })

    /* if(!categoryId) {
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
    } */
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