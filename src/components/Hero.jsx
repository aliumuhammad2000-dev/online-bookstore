export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden border-b border-stone-200">
      {/* One column on mobile; two equal columns from 1024px upward. */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
            Find your next favourite
          </p>
          <h1 id="hero-heading" className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Good books.
            <br />
            <span className="text-amber-800">Great company.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Discover stories, fresh perspectives, and books you’ll want to keep.
          </p>

          {/* Enable this when the book catalogue is ready. */}
          <button
            type="button"
            disabled
            title="Book browsing is coming soon"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#243e36] px-7 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed"
          >
            Browse Books
            <span aria-hidden="true">&rarr;</span>
          </button>
          <p className="mt-5 text-xs tracking-wide text-stone-500">A little escape. A lasting impression.</p>
        </div>

        {/* Decorative book illustrations made with HTML and Tailwind, not product listings. */}
        <div aria-hidden="true" className="relative mx-auto flex h-80 w-full max-w-lg items-center justify-center sm:h-96 lg:h-[440px]">
          <div className="absolute inset-x-2 inset-y-5 rounded-[50%] bg-[#eee7d9] sm:inset-x-4" />
          <div className="absolute bottom-9 h-6 w-3/4 rounded-[50%] bg-stone-400/20 blur-xl" />

          <div className="absolute left-[3%] top-[21%] flex h-52 w-[34%] -rotate-12 flex-col justify-between rounded-r-md border-l-8 border-[#934932] bg-[#b96346] p-3 text-[#fff4db] shadow-xl sm:h-64 sm:p-5">
            <p className="text-[8px] uppercase tracking-[0.18em] sm:text-[10px]">Louisa May Alcott</p>
            <div className="border-y border-[#fff4db]/40 py-5 text-center font-serif text-xl leading-tight sm:text-3xl">
              Little<br />Women
            </div>
            <p className="text-center text-[8px] uppercase tracking-[0.2em]">A timeless classic</p>
          </div>

          <div className="absolute right-[3%] top-[21%] flex h-52 w-[34%] rotate-12 flex-col justify-between rounded-r-md border-l-8 border-[#a78035] bg-[#c5a157] p-3 text-[#263d35] shadow-xl sm:h-64 sm:p-5">
            <p className="text-center text-[8px] uppercase tracking-[0.15em] sm:text-[10px]">Frances Hodgson Burnett</p>
            <div className="border-y border-[#263d35]/40 py-4 text-center font-serif text-xl leading-tight sm:text-3xl">
              The<br />Secret<br />Garden
            </div>
            <p className="text-center text-[8px] uppercase tracking-[0.2em]">Let wonder grow</p>
          </div>

          <div className="relative z-10 flex h-60 w-[39%] -rotate-3 flex-col justify-between rounded-r-md border-l-8 border-[#172f29] bg-[#294d40] p-4 text-[#f5e7c5] shadow-2xl sm:h-72 sm:p-5">
            <p className="text-center text-[9px] uppercase tracking-[0.2em] sm:text-xs">Jane Austen</p>
            <div className="rounded-t-full border border-[#f5e7c5]/40 px-1 py-7 text-center font-serif text-2xl leading-tight sm:text-3xl">
              Pride<br /><span className="text-lg italic">and</span><br />Prejudice
            </div>
            <p className="text-center text-[8px] uppercase tracking-[0.18em]">The classics collection</p>
          </div>
        </div>
      </div>
    </section>
  )
}
