import { Link } from 'react-router-dom'

export default function CartSummary({ subtotal }) {
  const delivery = subtotal > 0 ? 1500 : 0
  const total = subtotal + delivery
  const formatNaira = (amount) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount)

  return (
    <aside className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-[#243e36]">Order summary</h2>
      <dl className="mt-6 space-y-4 text-sm"><div className="flex justify-between gap-4"><dt className="text-stone-600">Subtotal</dt><dd className="font-semibold">{formatNaira(subtotal)}</dd></div><div className="flex justify-between gap-4"><dt className="text-stone-600">Delivery</dt><dd className="font-semibold">{formatNaira(delivery)}</dd></div><div className="flex justify-between gap-4 border-t border-stone-200 pt-4 text-base"><dt className="font-semibold">Total</dt><dd className="font-bold text-[#243e36]">{formatNaira(total)}</dd></div></dl>
      <Link to="/checkout" className="mt-7 flex min-h-12 items-center justify-center rounded-full bg-[#243e36] px-6 py-3 text-sm font-semibold text-white hover:bg-[#31584c]">Proceed to checkout</Link>
    </aside>
  )
}

