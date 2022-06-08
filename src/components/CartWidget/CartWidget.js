import '../NavBar/NavBar.css'
import { useContext} from 'react'
import CartContext  from '../../context/CartContext' 

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return (
      <div>
        <img className='carrito' src='./images/Cart.jpg' alt='cart-widget' />
        { quantity }
      </div>
    );
}

export default CartWidget