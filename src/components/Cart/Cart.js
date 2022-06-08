import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import NavBar from '../NavBar/NavBar'

const Cart = () => {

    const { cart, removeItem, removeAll} = useContext(CartContext)

    return(
    <div>
        <h1>Cart</h1>
        <div>
            {cart.map(prod => {
                return(
                    <div key={prod.id} className='listaCompra'>
                        <div >{prod.name}</div>
                        <div> Cantidad: {prod.quantity}</div>
                        <div> Precio: $ {prod.price}</div>
                        <div> Subtotal: $ {prod.price*prod.quantity}</div>
                        <button onClick={() => removeItem(prod.id)}>Remover</button>
                    </div>
                )})
            }
            <div><button onClick = {() => removeAll()}className="boton2">Vaciar Carrito</button></div>
            
        </div>
    </div>
    )
}

export default Cart

