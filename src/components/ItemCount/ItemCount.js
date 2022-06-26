import { useState } from 'react'
import NavBar from "../NavBar/NavBar.css"

export const ItemCount = ({onConfirm, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1)
        setCount((count) => count - 1)

    }

    const increment = () => {
       if(count < stock)
        setCount(count + 1)    
    }

    return(
        <div className='contador' >
            <button className="botonCarrito" onClick={decrement}>-</button>
            <h3 className='numContador'>{count}</h3>
            <button className="botonCarrito" onClick={increment}>+</button>
            <button onClick = {() => onConfirm(count)}className="boton2">Agregar producto</button>
        </div>
    )
}


