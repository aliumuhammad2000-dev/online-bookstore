import { Link } from 'react-router-dom'

export default function BookCard({ id, title, author, price, cover }) {
  // Keep price as a number. Format it only when displaying it.
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price)

  return (
    <article className="flex h-full w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <Link to={`/books/${id}`} aria-label={`View details for ${title}`} className="flex h-60 shrink-0 items-center justify-center bg-[#eee7d9] p-6">
        <img
          src={cover}
          alt={`${title} book cover`}
          width="360"
          height="520"
          loading="lazy"
          className="h-full w-auto max-w-full rounded-r-sm object-contain shadow-lg transition-transform duration-200 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-bold leading-snug text-[#243e36]">
          <Link to={`/books/${id}`} className="underline decoration-transparent underline-offset-4 transition hover:decoration-amber-700">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-stone-600">by {author}</p>
        <p className="mt-auto pt-5 text-lg font-semibold text-[#243e36]">{formattedPrice}</p>

        <button
          type="button"
          disabled
          title="Shopping cart is coming soon"
          className="mt-4 min-h-11 w-full rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-stone-500 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </article>
  )
}
