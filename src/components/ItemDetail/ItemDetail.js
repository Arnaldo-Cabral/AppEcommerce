import '../NavBar/NavBar.css'
import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail =({name, img, price, description, stock}) => {
    return(
        <div className="cardDetalle">
            <img className="imgCarrito" src={img} />
            <div className="containerDetail">
                <h4 className="nombreProductoDetail">{name}</h4>
                <p className="descriptionDetail">{description}</p>
                <h4 className="precioDetail">${price}</h4>
                <h4 className="stockDetail">Stock{stock}</h4>
                <ItemCount />
            </div>
            
        </div>    
    )
}

export default ItemDetail