import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import NavBar from '../NavBar/NavBar'


const Cart = () => {

    const { cart, getQuantity, removeItem, removeAll, totalPrice, createOrder} = useContext(CartContext)
    if(getQuantity() === 0) {
        return (
            <h2 className="sinItem">No agregó productos al carrito</h2>
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
                <div><button onClick = {() => createOrder()}className="boton2">Crear Orden</button></div>
            </div>            
            <div className="totalCompra"> Total: ${totalPrice()}</div>
        </div>
    </div>
    )
}

export default Cart

