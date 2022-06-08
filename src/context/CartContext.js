import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCar] = useState([])

    const addItem = (productToAdd) => {
      setCar([...cart, productToAdd])
      } 
      
      const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
          accu += prod.quantity
        })
        return accu
      }
    return(
      <CartContext.Provider value={{ cart, addItem, getQuantity }}>
          {children}
      </CartContext.Provider> 
    )
}

export default CartContext