export default function BookDetails({ book }) {
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(book.price)

  return (
    <section aria-labelledby="book-details-heading" className="border-y border-stone-200 bg-[#eee7d9]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-16">
        <div className="flex justify-center">
          <img
            src={book.cover}
            alt={`${book.title} book cover`}
            width="360"
            height="520"
            className="max-h-104 w-auto rounded-r-md shadow-xl"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Featured read</p>
          <h2 id="book-details-heading" className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {book.title}
          </h2>
          <p className="mt-3 text-lg text-stone-600">by {book.author}</p>
          <p className="mt-6 text-base leading-8 text-stone-700">{book.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-5 border-y border-stone-300 py-5 text-sm">
            <div>
              <dt className="text-stone-500">Format</dt>
              <dd className="mt-1 font-semibold text-[#243e36]">{book.format}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Availability</dt>
              <dd className="mt-1 font-semibold text-[#243e36]">{book.inStock ? 'In stock' : 'Out of stock'}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <p className="text-2xl font-semibold text-[#243e36]">{formattedPrice}</p>
            <button
              type="button"
              disabled
              title="Shopping cart is coming soon"
              className="min-h-12 rounded-full bg-[#243e36] px-7 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Add to Cart
            </button>
          </div>
          <p className="mt-4 text-xs text-stone-500">Cart functionality is coming soon.</p>
        </div>
      </div>
    </section>
  )
}
