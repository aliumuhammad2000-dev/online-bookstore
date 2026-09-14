import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const storageKey = 'thundey-bookstore-cart'

function readStoredCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(storageKey))
    return Array.isArray(savedCart) ? savedCart : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart)

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(cartItems))
    } catch {
    }
  }, [cartItems])

  const addToCart = (book) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === book.id)

      if (existingItem) {
        return items.map((item) => (
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      }

      return [...items, { ...book, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setCartItems((items) => {
      if (!Number.isFinite(quantity) || quantity < 1) {
        return items.filter((item) => item.id !== id)
      }

      return items.map((item) => item.id === id ? { ...item, quantity } : item)
    })
  }

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
