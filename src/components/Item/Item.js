import React from "react"
import '../NavBar/NavBar.css'

const Item = ({id, name, price,img}) => {
    return (
        <div className="card">
            <p className="idNumero">{id}</p>
            <img className="imgCarrito" src={img} />
            <div className="container">
                <h4 className="nombreProducto"><b>{name}</b></h4>
                <p className="precio">${price}</p>
        </div>
    </div>
    )
}

export default Item

