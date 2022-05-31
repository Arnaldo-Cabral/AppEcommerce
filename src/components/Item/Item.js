import React from "react"
import '../NavBar/NavBar.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({id, name, price, img}) => {
    return (
        <div className="card">
            <p className="idNumero">{id}</p>
            <img className="imgCarrito" src={img} />
            <div className="container">
                <h4 className="nombreProducto"><b>{name}</b></h4>
                <p className="precio">${price}</p>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
                <ItemCount />
             </div>
        </div>
    )
}

export default Item

