import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-[#243e36] text-stone-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-serif text-2xl text-white">
            Thundey BookStore
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300">
            A calm place to discover physical books and build your next reading list.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Explore</h2>
          <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/" className="text-stone-300 transition hover:text-white">Home</Link>
            <Link to="/cart" className="text-stone-300 transition hover:text-white">Shopping cart</Link>
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-stone-300">
            <p>Lagos, Nigeria</p>
            <a href="mailto:hello@thundeybookstore.com" className="block transition hover:text-white">hello@thundeybookstore.com</a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-stone-400 sm:px-8">
          © {new Date().getFullYear()} Thundey BookStore. Store for learning.
        </p>
      </div>
    </footer>
  )
}
