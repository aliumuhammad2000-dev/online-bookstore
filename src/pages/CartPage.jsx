import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems } = useCart()
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <main id="main-content" className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-serif text-4xl text-[#243e36]">Your cart is empty</h1>
        <p className="mt-4 text-stone-600">Add a book to your cart and it will appear here.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white">Continue shopping</Link>
      </main>
    )
  }

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
            Your selection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[#243e36] sm:text-5xl">
            Shopping cart
          </h1>
        </div>
        <Link
          to="/"
          className="text-sm font-semibold text-[#243e36] underline decoration-amber-700 underline-offset-4"
        >
          Continue shopping
        </Link>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <div className="rounded-2xl border border-stone-200 bg-white px-5 sm:px-8">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary subtotal={subtotal} />
      </div>
    </main>
  )
}
