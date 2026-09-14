import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const WishlistContext = createContext(null)
const storageKey = 'thundey-bookstore-wishlist'

function readStoredWishlist() {
  try {
    const savedWishlist = JSON.parse(localStorage.getItem(storageKey))
    return Array.isArray(savedWishlist) ? savedWishlist : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(readStoredWishlist)

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(wishlistItems))
    } catch {
    }
  }, [wishlistItems])

  const toggleWishlist = (book) => {
    setWishlistItems((items) => {
      const alreadySaved = items.some((item) => item.id === book.id)
      return alreadySaved ? items.filter((item) => item.id !== book.id) : [...items, book]
    })
  }

  const isInWishlist = (bookId) => wishlistItems.some((item) => item.id === bookId)
  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems])

  return (
    <WishlistContext.Provider value={{ wishlistItems, wishlistCount, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)

  if (!context) {
    throw new Error('useWishlist must be used inside WishlistProvider')
  }

  return context
}
