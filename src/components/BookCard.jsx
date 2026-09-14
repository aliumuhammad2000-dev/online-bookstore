import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../utils/currency'

export default function BookCard({ id, title, author, price, cover }) {
  const { addToCart } = useCart()

  return (
    <article className="motion-hover-lift flex h-full w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <Link
        to={`/books/${id}`}
        aria-label={`View details for ${title}`}
        className="flex h-60 shrink-0 items-center justify-center bg-[#eee7d9] p-6"
      >
        <img src={cover} alt={`${title} book cover`} width="360" height="520" loading="lazy" className="h-full w-auto max-w-full rounded-r-sm object-contain shadow-lg" />
      </Link>
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
