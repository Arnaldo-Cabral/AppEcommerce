import '../NavBar/NavBar.css'

const ItemDetail =({name, img, price, description, stock}) => {
    return(
        <div className="card">
            <img className="imgCarrito" src={img} />
            <div className="container">
                <h4 className="nombreProducto"><b>{name}</b></h4>
                <p className="nombreProducto">${description}</p>
                <p className="precio">${price}</p>
                <p className="precio">${stock}</p>                
            </div>
        </div>       
    )
}

export default ItemDetail