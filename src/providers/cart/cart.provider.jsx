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

export default CartContext
