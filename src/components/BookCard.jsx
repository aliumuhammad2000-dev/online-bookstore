import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { formatNaira } from '../utils/currency'

export default function BookCard({ id, title, author, price, cover }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const saved = isInWishlist(id)

  return (
    <article className="motion-hover-lift flex h-full w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <div className="relative">
        <Link
        to={`/books/${id}`}
        aria-label={`View details for ${title}`}
        className="flex h-60 shrink-0 items-center justify-center bg-[#eee7d9] p-6"
      >
        <img src={cover} alt={`${title} book cover`} width="360" height="520" loading="lazy" className="h-full w-auto max-w-full rounded-r-sm object-contain shadow-lg" />
        </Link>
        <button
          type="button"
          aria-label={saved ? `Remove ${title} from wishlist` : `Save ${title} to wishlist`}
          aria-pressed={saved}
          onClick={() => toggleWishlist({ id, title, author, price, cover })}
          className={`absolute right-3 top-3 flex size-10 items-center justify-center rounded-full border bg-white/95 shadow-sm transition hover:scale-105 ${saved ? 'border-amber-700 text-amber-700' : 'border-stone-300 text-stone-500'}`}
        >
          <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-serif text-xl font-bold leading-snug text-[#243e36]">
          <Link to={`/books/${id}`} className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-700">
            {title}
          </Link>
        </h2>
        <p className="mt-2 text-sm text-stone-600">by {author}</p>
        <p className="mt-auto pt-5 text-lg font-semibold text-[#243e36]">{formatNaira(price)}</p>
        <button
          type="button"
          onClick={() => addToCart({ id, title, author, price, cover })}
          title="Add this book to your cart"
          className="mt-4 min-h-11 w-full rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-[#243e36] hover:bg-stone-100"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
