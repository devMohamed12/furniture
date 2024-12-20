import { createContext } from "react";

export const CartContext = createContext("");


export const CartProvider = ({ children }) => {
    const a7a = "fgf"
  return (
      <CartContext.Provider value={a7a}>
          {children}
    </CartContext.Provider>
  )
}

export default CartProvider