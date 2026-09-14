import { useCart } from '../context/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const itemTotal = item.price * item.quantity
  const formattedTotal = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(itemTotal)

  return (
    <article className="flex gap-4 border-b border-stone-200 py-5 sm:gap-6">
      <img src={item.cover} alt={`${item.title} book cover`} width="80" height="116" className="h-28 w-20 rounded-r-sm bg-[#eee7d9] object-contain shadow" />
      <div className="min-w-0 flex-1">
        <h2 className="font-serif text-xl font-bold text-[#243e36]">{item.title}</h2>
        <p className="mt-1 text-sm text-stone-600">by {item.author}</p>
        <p className="mt-3 text-sm font-semibold text-[#243e36]">{formattedTotal}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <label htmlFor={`quantity-${item.id}`} className="text-sm text-stone-500">Quantity</label>
          <input id={`quantity-${item.id}`} type="number" min="1" value={item.quantity} onChange={(event) => updateQuantity(item.id, Number(event.target.value))} className="h-9 w-16 rounded-md border border-stone-300 px-2 text-center text-sm" />
          <button type="button" onClick={() => removeFromCart(item.id)} className="text-sm font-semibold text-amber-800 underline underline-offset-4">Remove</button>
        </div>
      </div>
    </article>
  )
}
