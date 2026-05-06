import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';

const INITIAL_ITEMS = [
  {
    id: 1,
    title: 'Bastille Lounge Chair',
    variant: 'Walnut · Sand Linen',
    price: 1250,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Ether Side Table',
    variant: 'Natural Oak',
    price: 480,
    qty: 1,
    img: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=400&q=80',
  },
];

const formatPrice = (n) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const YourShoppingCart = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [promo, setPromo] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
    );
  };
  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const { subtotal, discount, tax, total } = useMemo(() => {
    const sub = items.reduce((s, it) => s + it.price * it.qty, 0);
    const disc = appliedPromo === 'WELCOME10' ? sub * 0.1 : 0;
    const tx = (sub - disc) * 0.0825;
    return { subtotal: sub, discount: disc, tax: tx, total: sub - disc + tx };
  }, [items, appliedPromo]);

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === 'WELCOME10') setAppliedPromo('WELCOME10');
    else setAppliedPromo('invalid');
  };

  const isEmpty = items.length === 0;

  return (
    <div className="min-h-screen bg-surface">
      <SaleTicker />
      <header className="fixed top-9 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/seller-dashboard">Office</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/timeless-hearth">About</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/your-shopping-cart" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined text-zinc-800">shopping_bag</span>
            </Link>
            <Link to="/checkout-shipping" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined text-zinc-800">person</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-section-gap max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <nav className="flex items-center space-x-2 text-label-sm text-on-surface-variant uppercase mb-4">
            <Link to="/">Home</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface">Cart</span>
          </nav>
          <h1 className="font-display-xl text-display-xl text-primary mb-2">Your Bag</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {isEmpty ? 'Your bag is currently empty.' : `${items.length} ${items.length === 1 ? 'piece' : 'pieces'} reserved for you.`}
          </p>
        </div>

        {isEmpty ? (
          <div className="bg-white rounded-2xl border border-stone-200/60 p-16 text-center">
            <span className="material-symbols-outlined text-6xl text-stone-300 mb-6 inline-block">shopping_bag</span>
            <p className="font-headline-md text-headline-md text-primary mb-2">Nothing here yet</p>
            <p className="font-body-md text-on-surface-variant mb-8">Discover pieces designed to outlast trends.</p>
            <Link to="/browse-our-collection" className="inline-flex items-center justify-center rounded-xl bg-primary text-on-primary px-10 py-4 font-label-sm uppercase tracking-widest hover:opacity-90 transition-all">
              Browse Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <section className="lg:col-span-7 space-y-6">
              {items.map((item) => (
                <article key={item.id} className="bg-white border border-stone-200/60 rounded-2xl p-6 flex gap-6 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-surface-container-low rounded-xl overflow-hidden shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-primary">{item.title}</h3>
                        <p className="text-sm text-stone-500 mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-stone-400 hover:text-primary transition-colors"
                        aria-label="Remove"
                      >
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    </div>
                    <div className="flex items-end justify-between mt-auto pt-6 gap-4 flex-wrap">
                      <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="px-3 py-2 hover:bg-stone-50 disabled:opacity-30"
                          disabled={item.qty === 1}
                        >
                          <span className="material-symbols-outlined text-base">remove</span>
                        </button>
                        <span className="px-4 font-body-md font-semibold w-8 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="px-3 py-2 hover:bg-stone-50">
                          <span className="material-symbols-outlined text-base">add</span>
                        </button>
                      </div>
                      <span className="font-headline-md text-headline-md">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  </div>
                </article>
              ))}

              <Link to="/browse-our-collection" className="inline-flex items-center gap-2 text-stone-500 hover:text-primary transition-colors mt-4">
                <span className="material-symbols-outlined">arrow_back</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">Continue shopping</span>
              </Link>
            </section>

            <aside className="lg:col-span-5">
              <div className="bg-white border border-stone-200/60 rounded-2xl p-8 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] lg:sticky lg:top-32">
                <h2 className="font-headline-md text-headline-md mb-8">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-body-md text-stone-500">
                    <span>Subtotal</span>
                    <span className="text-primary">{formatPrice(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between font-body-md text-stone-500">
                      <span>Discount (WELCOME10)</span>
                      <span className="text-primary">−{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-body-md text-stone-500">
                    <span>Shipping</span>
                    <span className="text-primary font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-body-md text-stone-500">
                    <span>Estimated tax</span>
                    <span className="text-primary">{formatPrice(tax)}</span>
                  </div>
                </div>

                <div className="border-t border-stone-100 pt-6 mb-8">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Promo code"
                      className="flex-1 bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg px-4 py-3 text-sm transition-colors uppercase tracking-widest"
                    />
                    <button onClick={applyPromo} className="px-5 py-3 border border-stone-300 rounded-lg text-xs uppercase tracking-widest hover:bg-stone-50 transition">
                      Apply
                    </button>
                  </div>
                  {appliedPromo === 'WELCOME10' && <p className="text-xs text-green-700">10% off applied.</p>}
                  {appliedPromo === 'invalid' && <p className="text-xs text-red-600">Code not recognized.</p>}
                </div>

                <div className="border-t border-stone-100 pt-6 flex justify-between mb-8">
                  <span className="font-headline-md text-headline-md">Total</span>
                  <span className="font-headline-md text-headline-md">{formatPrice(total)}</span>
                </div>

                <Link to="/checkout-shipping" className="block bg-primary text-on-primary text-center px-8 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-zinc-900/10">
                  Checkout
                </Link>
                <p className="text-xs text-stone-400 text-center mt-4">Secure checkout · Free returns within 30 days</p>
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
            <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Sustainability</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Material Care</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Shipping &amp; Returns</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YourShoppingCart;
