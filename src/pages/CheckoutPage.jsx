import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatNaira } from '../utils/currency'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
}
const deliveryFee = 1500

export default function CheckoutPage() {
  const { cartItems } = useCart()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isReady, setIsReady] = useState(false)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const delivery = subtotal > 0 ? deliveryFee : 0

  if (cartItems.length === 0) {
    return <EmptyCheckout />
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(
      Object.entries(form)
        .filter(([, value]) => !value.trim())
        .map(([name]) => [name, 'This field is required']),
    )

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsReady(true)
  }

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <PageIntro />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-[#243e36]">Where should we deliver?</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" value={form.name} error={errors.name} onChange={handleChange} />
            <Field label="Email address" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} />
            <Field label="Phone number" name="phone" type="tel" value={form.phone} error={errors.phone} onChange={handleChange} />
            <Field label="Street address" name="address" value={form.address} error={errors.address} wide onChange={handleChange} />
            <Field label="City" name="city" value={form.city} error={errors.city} onChange={handleChange} />
            <Field label="State" name="state" value={form.state} error={errors.state} onChange={handleChange} />
          </div>
          <button type="submit" className="mt-8 min-h-12 w-full rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white hover:bg-[#31584c]">Place order</button>
          {isReady && <p role="status" className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Details saved for the order.</p>}
        </form>
        <OrderSummary items={cartItems} subtotal={subtotal} delivery={delivery} />
      </div>
    </main>
  )
}

function PageIntro() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
          Demo checkout
        </p>
        <h1 className="mt-3 font-serif text-4xl text-[#243e36] sm:text-5xl">
          Delivery details
        </h1>
      </div>
      <Link
        to="/cart"
        className="text-sm font-semibold text-[#243e36] underline decoration-amber-700 underline-offset-4"
      >
        Back to cart
      </Link>
    </div>
  )
}

function EmptyCheckout() {
  return (
    <main
      id="main-content"
      className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8"
    >
      <h1 className="font-serif text-4xl text-[#243e36]">Your cart is empty</h1>
      <p className="mt-4 text-stone-600">Add a book before checking out.</p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white"
      >
        Continue shopping
      </Link>
    </main>
  )
}

function Field({ label, name, type = 'text', value, error, onChange, wide = false }) {
  const inputClassName = `mt-2 min-h-11 w-full rounded-lg border px-3 text-sm outline-none focus:ring-2 focus:ring-[#243e36]/20 ${error ? 'border-red-500' : 'border-stone-300'}`

  return (
    <div className={wide ? 'sm:col-span-2' : ''}>
      <label htmlFor={name} className="text-sm font-semibold text-[#243e36]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClassName}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

function OrderSummary({ items, subtotal, delivery }) {
  return (
    <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-[#243e36]">Order summary</h2>

      <ul className="mt-6 space-y-4 text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between gap-4">
            <span className="text-stone-600">
              {item.title} × {item.quantity}
            </span>
            <span className="font-semibold">
              {formatNaira(item.price * item.quantity)}
            </span>
          </li>
        ))}
      </ul>

      <dl className="mt-6 space-y-4 border-t border-stone-200 pt-5 text-sm">
        <div className="flex justify-between">
          <dt className="text-stone-600">Subtotal</dt>
          <dd className="font-semibold">{formatNaira(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-stone-600">Delivery</dt>
          <dd className="font-semibold">{formatNaira(delivery)}</dd>
        </div>
        <div className="flex justify-between border-t border-stone-200 pt-4 text-base">
          <dt className="font-semibold">Total</dt>
          <dd className="font-bold text-[#243e36]">
            {formatNaira(subtotal + delivery)}
          </dd>
        </div>
      </dl>
    </aside>
  )
}
