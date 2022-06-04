import { useState } from 'react'
import NavBar from "../NavBar/NavBar.css"

export const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count - 1)

    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className='contador' >
            <button className="botonCarrito" onClick={decrement}>-</button>
            <h3 className='numContador'>{count}</h3>
            <button className="botonCarrito" onClick={increment}>+</button>
        </div>
    )
}


