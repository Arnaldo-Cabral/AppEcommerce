import { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { ItemCount } from "../ItemCount/ItemCount"
import CartContext from '../../context/CartContext'


const ItemDetail =({id, name, img, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct} = useContext(CartContext)

    
        
    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({ id, name, price, quantity})
    }   

    return(
        <div className="cardDetalle">
            <img className="imgCarrito" src={img} />
            <div className="containerDetail">
                <h4 className="nombreProductoDetail">{name}</h4>
                <p className="descriptionDetail">{description}</p>
                <h4 className="precioDetail">${price}</h4>
                <h4 className="stockDetail">Stock {stock}</h4>
                {quantity > 0 ? <Link to='/cart' className="boton2">Finalizar Compra</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd} initial={getProduct(id)?.quantity}/>}
            </div>
            
        </div>    
    )
}

export default ItemDetail