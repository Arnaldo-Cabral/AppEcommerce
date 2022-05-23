import NavBar from "../NavBar/NavBar"

const Item = ({id, name, price,img}) => {
    return (
        <div className="card">
            <img className="imgCarrito" src={img} />
            <div className="container">
                <h4 className="nombreProducto"><b>{name}</b></h4>
                <p className="precio">${price}</p>
            </div>
        </div>    
    )
}

export default Item