import React, { createContext, useState, useEffect } from 'react'

import { addItemToCart, removeItemFromCart } from './cart.utils'

const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0
})

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const toggleHidden = () => setHidden(!hidden)

  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartContext
