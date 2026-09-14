import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const storageKey = 'thundey-bookstore-cart'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || [] } catch { return [] }
  })

  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(cartItems)) }, [cartItems])

  const addToCart = (book) => setCartItems((items) => {
    const existing = items.find((item) => item.id === book.id)
    return existing ? items.map((item) => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item) : [...items, { ...book, quantity: 1 }]
  })
  const updateQuantity = (id, quantity) => setCartItems((items) => quantity < 1 ? items.filter((item) => item.id !== id) : items.map((item) => item.id === id ? { ...item, quantity } : item))
  const removeFromCart = (id) => setCartItems((items) => items.filter((item) => item.id !== id))
  const cartCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [cartItems])

  return <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
