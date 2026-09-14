import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-stone-200 bg-[#faf7f0]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-white focus:p-3"
      >
        Skip to content
      </a>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
        <a href="/" aria-label="Thundey BookStore home" className="flex items-center gap-3">
          <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-lg bg-[#243e36] text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v15M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Z" />
            </svg>
          </span>
          <span className="font-serif text-xl font-bold tracking-tight sm:text-2xl">Thundey BookStore<span className="text-amber-700">.</span></span>
        </a>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md border border-stone-300 px-3 py-2 text-sm font-semibold hover:bg-stone-100 md:hidden"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsMenuOpen(false)
              document.querySelector('[aria-controls="main-navigation"]').focus()
            }
          }}
          className={`${isMenuOpen ? 'flex' : 'hidden'} w-full flex-col gap-2 border-t border-stone-200 pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:pt-0`}
        >
          <a href="/" aria-current="page" onClick={() => setIsMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold underline decoration-amber-700 decoration-2 underline-offset-8 md:px-0">
            Home
          </a>

          <button type="button" disabled title="Book browsing is coming soon" className="rounded-md px-3 py-3 text-left text-sm text-stone-500 disabled:cursor-not-allowed md:px-0">
            Browse Books
          </button>
          <button
            type="button"
            disabled
            aria-label="Shopping cart, 0 items"
            title="Shopping cart is coming soon"
            className="relative flex size-11 shrink-0 items-center justify-center self-start rounded-full border border-stone-300 text-stone-500 disabled:cursor-not-allowed md:self-auto"
          >
            <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l2.4 12h11.2l2-8H6" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span aria-hidden="true" className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#243e36] text-[10px] font-semibold text-white">0</span>
          </button>
        </nav>
      </div>
    </header>
  )
}


