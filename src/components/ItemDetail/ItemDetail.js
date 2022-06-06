import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail =({name, img, price, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        console.log(count)
        setQuantity(count)
    }   

    return(
        <div className="cardDetalle">
            <img className="imgCarrito" src={img} />
            <div className="containerDetail">
                <h4 className="nombreProductoDetail">{name}</h4>
                <p className="descriptionDetail">{description}</p>
                <h4 className="precioDetail">${price}</h4>
                <h4 className="stockDetail">Stock {stock}</h4>
                {quantity > 0 ? <Link to='/cart' className="boton2">Finalizar Compra</Link> : <ItemCount stock={stock} onConfirm={handleOnAdd}/>}
            </div>
            
        </div>    
    )
}

export default ItemDetail