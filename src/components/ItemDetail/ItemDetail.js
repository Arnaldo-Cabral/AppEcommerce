import '../NavBar/NavBar.css'

const ItemDetail =({name, img, price, description, stock}) => {
    return(
        <div className="cardDetalle">
            <img className="imgCarrito" src={img} />
            <div className="container">
                <h4 className="nombreProducto">{name}</h4>
                <p className="nombreProducto">{description}</p>
                <h4 className="precio"><b>${price}</b></h4>
                <h4 className="precio"><b>Stock{stock}</b></h4>
            </div>
        </div>    
    )
}

export default ItemDetail