import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import NavBar from '../NavBar/NavBar'
import { Link, NavLink } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from '../../services/firebase'


const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, getQuantity, removeItem, removeAll, totalPrice} = useContext(CartContext)

    const createOrder = () => {
        console.log('crear orden')
        setLoading(true)

        const objOrder = {
            buyer: {
                name:'Peter Parker',
                email:'peter@parker.com',
                phone:'123654987',
                address: 'direccion 123456'
            },
            Items: cart,
            total: totalPrice()
        }

        const ids = cart.map(prod => prod.id)

        const batch= writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQueantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQueantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQueantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection (db, 'orders')
                    
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es: ${id}`)
                alert('compra hecha')
                removeAll()
            }).catch(error => {
                console.log(error)
                alert(`el producto seleccionado no tiene stock suficiente`)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <h2>Generando orden...</h2>
    }

    if(getQuantity() === 0) {
        return (
            <><h2 className="sinItem">No agregó productos al carrito</h2>
            <Link to="/"><button className="boton2">Ir a productos de la tienda</button></Link></>
        )
    }

    return(
    <div className="altura">
        <h1>Cart</h1>
        <div>
            {cart.map(prod => {
                return(
                    <div key={prod.id} className='listaCompra'>
                        <div className='listaItems' >{prod.name}</div>
                        <div className='listaItems'> Cantidad: {prod.quantity}</div>
                        <div className='listaItems'> Precio: $ {prod.price}</div>
                        <div className='listaItems'> Subtotal: $ {prod.price*prod.quantity}</div>
                        <button className="botonRemove"onClick={() => removeItem(prod.id)}>Remover</button>
                    </div>
                )})
            }
            <div className="bottonFotter">
                <div><button onClick = {() => removeAll()}className="boton2">Vaciar Carrito</button></div>
                <div><button className="boton2" onClick={createOrder}>Crear Orden</button></div>
            </div>            
            <div className="totalCompra"> Total: ${totalPrice()}</div>
        </div>
    </div>
    )
}

export default Cart

