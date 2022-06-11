import '../NavBar/NavBar.css'
import { useContext} from 'react'
import CartContext  from '../../context/CartContext' 
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart'>
          <div className='logoCarrito'>
            <img className='carrito' src='../images/Cart.jpg' alt='cart-widget' />
            <div className='quantCarrito'>{ quantity }</div>
          </div>
        </Link>
    );
}

export default CartWidget