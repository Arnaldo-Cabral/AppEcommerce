import { useState } from "react";
import '../NavBar/NavBar.css'

const ItemCount = () => {
    const [count, setCount] = useState (0)

    const decrement = () => {
        setCount ((count ) => count -1)

    }

    const increment = () => {
        setCount (count +1)
    }

    return(
        <div className='contador'>
            <button className='botonCarrito' onClick={decrement}>-</button>
            <h2 className='contadorCarrito'>{count}</h2>
            <button className='botonCarrito' onClick={increment}>+</button>
        </div>
    )

}



export default ItemCount