import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import NavBar from '../NavBar/NavBar'

const Cart = () => {

    const { cart } = useContext(CartContext)

    return(
    <div>
        <h1>Cart</h1>
        <div>
            {cart.map(prod => {
                return(
                    <div className='listaCompra'>
                    <div key={prod.id}>{prod.name}</div>
                    <div> Cantidad: {prod.quantity}</div>
                    <div> Precio: $ {prod.price}</div>
                    <div> Subtotal: $ {prod.price*prod.quantity}</div>
                    </div>
                )})
            }
        </div>
    </div>
    )
}

export default Cart

