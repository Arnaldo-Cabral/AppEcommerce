import { useState } from 'react'
import NavBar from "../NavBar/NavBar.css"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount((count) => count - 1)

    }

    const increment = () => {
        setCount(count + 1)
    }

    return(
        <div className='contador' >
            <button class="btn btn-light" onClick={decrement}>-</button>
            <h2 className='numContador'>{count}</h2>
            <button class="btn btn-light" onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount