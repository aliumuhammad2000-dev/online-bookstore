import { Link, useLocation } from 'react-router-dom'
import { formatNaira } from '../utils/currency'

export default function OrderConfirmationPage() {
  const { state: order } = useLocation()

  if (!order) {
    return <MissingOrder />
  }

  return (
    <main id="main-content" className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
          Order received
        </p>
        <h1 className="mt-3 font-serif text-4xl text-[#243e36] sm:text-5xl">
          Thank you, {order.customer.name}.
        </h1>
        <p className="mt-4 max-w-2xl text-stone-700">
          Your order has been recorded. We would deliver your physical books
          to the address below after payment is added.
        </p>
        <p className="mt-5 text-sm font-semibold text-[#243e36]">
          Order number: {order.orderNumber}
        </p>
      </section>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <DeliveryCard customer={order.customer} />
        <OrderCard order={order} />
      </div>

      <Link
        to="/"
        className="mt-10 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white"
      >
        Continue shopping
      </Link>
    </main>
  )
}

function DeliveryCard({ customer }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-[#243e36]">Delivery details</h2>
      <address className="mt-5 space-y-1 text-sm not-italic text-stone-600">
        <p className="font-semibold text-stone-900">{customer.name}</p>
        <p>{customer.address}</p>
        <p>
          {customer.city}, {customer.state}
        </p>
        <p>{customer.phone}</p>
        <p>{customer.email}</p>
      </address>
    </section>
  )
}

function OrderCard({ order }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-[#243e36]">Order summary</h2>
      <ul className="mt-5 space-y-3 text-sm">
        {order.items.map((item) => (
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
      <div className="mt-5 flex justify-between border-t border-stone-200 pt-4 font-semibold text-[#243e36]">
        <span>Total</span>
        <span>{formatNaira(order.subtotal + order.delivery)}</span>
      </div>
    </section>
  )
}

function MissingOrder() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-serif text-4xl text-[#243e36]">No order found</h1>
      <p className="mt-4 text-stone-600">
        Complete checkout first to view your confirmation.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white"
      >
        Return to bookstore
      </Link>
    </main>
  )
}
