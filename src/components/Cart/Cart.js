import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import NavBar from '../NavBar/NavBar'
import { Link, NavLink } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from '../../services/firebase'
import Formulario from '../Form/Form'
import swal from 'sweetalert'


const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, getQuantity, removeItem, removeAll, totalPrice} = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        nombre:'',
        apellido: '',
        direction: '',
        localidad: '',
        email: '',
        telefono: ''
    })

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer,
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

                swal({
                    title: "Su compra fue procesada",
                    text: "en breve nos estaremos comunicando",
                    icon: "success",
                    button: "Aceptar",
                    timer:"4000"
                  });
                removeAll()
            }).catch(error => {
                console.log(error)
                swal({
                    title: "No hay Stock",
                    text: "Corrobore el stock en la tarjeta del producto",
                    icon: "error",
                    button: "Aceptar",
                    timer:"5000"
                  });
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
            <Formulario setBuyer={setBuyer}/>
            <div className="bottonFotter">
                <div><button onClick = {() => removeAll()}className="boton2">Vaciar Carrito</button></div>
                <div><button className="boton2" onClick={createOrder } disabled={false}>Crear Orden</button></div>                
            </div>
            <div className="totalCompra"> Total: ${totalPrice()}</div>
        </div>
    </div>
    )
}

export default Cart

