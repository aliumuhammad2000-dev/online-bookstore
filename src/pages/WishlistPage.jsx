import { Link } from 'react-router-dom'
import BookGrid from '../components/BookGrid'
import { useWishlist } from '../context/WishlistContext'

export default function WishlistPage() {
  const { wishlistItems } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <main id="main-content" className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Your wishlist</p>
        <h1 className="mt-3 font-serif text-4xl text-[#243e36]">Save books for later</h1>
        <p className="mt-4 text-stone-600">Tap the heart on a book to add it to your wishlist.</p>
        <Link to="/#books-heading" className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white hover:bg-[#31584c]">
          Browse books
        </Link>
      </main>
    )
  }

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">Your wishlist</p>
          <h1 className="mt-3 font-serif text-4xl text-[#243e36] sm:text-5xl">Books to remember</h1>
        </div>
        <p className="text-sm text-stone-500">{wishlistItems.length} saved {wishlistItems.length === 1 ? 'book' : 'books'}</p>
      </div>
      <div className="mt-10">
        <BookGrid books={wishlistItems} />
      </div>
    </main>
  )
}
