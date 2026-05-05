import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Artisan solid oak dining table in a sunlit room',
  },
  {
    src: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1400&q=80',
    alt: 'Close-up of European oak grain and finish',
  },
  {
    src: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1400&q=80',
    alt: 'Dining table set for an evening meal',
  },
  {
    src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=80',
    alt: 'Mortise-and-tenon joinery detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=1400&q=80',
    alt: 'Dining table in an open dining room',
  },
];

const REVIEWS = [
  { name: 'Eleanor M.', city: 'London', rating: 5, date: '3 weeks ago', body: 'The craftsmanship is unparalleled. It truly is the heart of our dining room now. The matte finish feels alive — never glossy, never dull.' },
  { name: 'Anders P.', city: 'Stockholm', rating: 5, date: '2 months ago', body: 'Worth every krone. Three years of dinners and the surface still looks like the day it arrived. The white-glove delivery team was meticulous.' },
  { name: 'Mei L.', city: 'Singapore', rating: 4, date: '4 months ago', body: 'Beautiful piece. Slight delay on delivery — six weeks rather than four — but the quality made up for the wait.' },
  { name: 'Joaquín R.', city: 'Madrid', rating: 5, date: '6 months ago', body: 'A statement without being loud. The grain on our top is unique and we love that it ages with us.' },
];

const CARE_STEPS = [
  { icon: 'cleaning_services', title: 'Daily', body: 'Wipe with a soft, slightly damp cloth. Dry immediately with a lint-free towel — standing moisture is the enemy of solid wood.' },
  { icon: 'auto_fix_high', title: 'Monthly', body: 'Apply a thin coat of our supplied hardwax oil along the grain. Buff after twenty minutes for a renewed matte finish.' },
  { icon: 'do_not_disturb_on', title: 'Avoid', body: 'Direct sunlight for prolonged periods, alcohol-based cleaners, and unprotected hot dishes (always use a trivet at 60°C+).' },
  { icon: 'build', title: 'Repair', body: 'Light scratches lift with our included sandpaper kit. For deeper damage, we offer in-home restoration globally — contact your account.' },
];

const renderStars = (n) =>
  Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className="material-symbols-outlined text-sm"
      style={i < n ? { fontVariationSettings: "'FILL' 1" } : undefined}
    >
      star
    </span>
  ));

const WoodenDiningTableDetails = () => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('natural-oak');
  const [selectedDimension, setSelectedDimension] = useState('standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [toast, setToast] = useState(null);

  const handleAddToCart = () => {
    setToast(`Added ${quantity} × Artisan Oak Table to bag`);
    setTimeout(() => {
      setToast(null);
      navigate('/your-shopping-cart');
    }, 900);
  };

  const handleBuyNow = () => {
    navigate('/checkout-shipping');
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Toast */}
      {toast && (
        <div className="fixed top-24 right-8 z-[60] bg-primary text-on-primary px-6 py-4 rounded-xl shadow-2xl shadow-zinc-900/20 flex items-center gap-3 reveal">
          <span className="material-symbols-outlined">check_circle</span>
          <span className="font-label-sm uppercase tracking-widest text-xs">{toast}</span>
        </div>
      )}

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900 hover:opacity-70 transition-opacity duration-300">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors duration-300" to="/seller-dashboard">Office</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-colors duration-300" to="/timeless-hearth">About</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/your-shopping-cart" aria-label="Cart" className="text-zinc-800 hover:text-primary hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>
            <Link to="/checkout-shipping" aria-label="Account" className="text-zinc-800 hover:text-primary hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 max-w-7xl mx-auto px-8 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Image Gallery */}
          <section className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl shadow-sm tilt-card">
              <div key={activeImage} className="tilt-card-inner w-full h-full fade-in">
                <img
                  className="tilt-card-img w-full h-full object-cover"
                  src={GALLERY[activeImage].src}
                  alt={GALLERY[activeImage].alt}
                  loading="eager"
                />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {GALLERY.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  aria-label={`View ${img.alt}`}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === idx
                      ? 'border-primary shadow-lg scale-[1.02]'
                      : 'border-transparent hover:border-stone-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img className="w-full h-full object-cover" src={img.src} alt={img.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </section>

          {/* Product Details */}
          <section className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">The Heritage Collection</span>
              <h1 className="font-display-xl text-display-xl text-primary mb-4">Artisan Solid Oak Dining Table</h1>

              <div className="flex items-center gap-4 mb-8">
                <span className="font-headline-md text-headline-md text-primary">$2,450.00</span>
                <div className="flex items-center text-on-secondary-fixed-variant">
                  {renderStars(4)}
                  <span className="material-symbols-outlined text-sm">star_half</span>
                  <button
                    type="button"
                    onClick={() => setActiveTab('reviews')}
                    className="ml-2 font-label-sm text-label-sm hover:text-primary underline-offset-4 hover:underline transition-colors"
                  >
                    (48 Reviews)
                  </button>
                </div>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                A celebration of raw nature and refined design. Each table is individually crafted from sustainably sourced European Oak, preserving the natural edge and unique character of the wood for a piece that lives and breathes with your home.
              </p>

              <div className="space-y-8 mb-12">
                {/* Material Selection */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase mb-4 block">Select Material</span>
                  <div className="flex gap-4">
                    {[
                      { key: 'natural-oak', label: 'Natural Oak', swatch: '#D2B48C' },
                      { key: 'dark-walnut', label: 'Dark Walnut', swatch: '#4B3621' },
                    ].map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => setSelectedMaterial(m.key)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                          selectedMaterial === m.key
                            ? 'border-primary bg-surface-container shadow-md'
                            : 'border-stone-200 bg-surface-container-low hover:border-stone-400'
                        }`}
                      >
                        <span className="w-4 h-4 rounded-full ring-1 ring-stone-300" style={{ backgroundColor: m.swatch }}></span>
                        <span className="font-label-sm text-label-sm">{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dimensions Selection */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase mb-4 block">Dimensions</span>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: 'standard', label: 'Standard', size: '220 × 100 cm' },
                      { key: 'grand', label: 'Grand', size: '280 × 110 cm' },
                    ].map((d) => (
                      <button
                        key={d.key}
                        type="button"
                        onClick={() => setSelectedDimension(d.key)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                          selectedDimension === d.key
                            ? 'bg-surface-container border-primary shadow-md'
                            : 'bg-surface-container-low border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <span className="block font-label-sm text-stone-500 mb-1 uppercase tracking-widest text-xs">{d.label}</span>
                        <span className="font-body-md">{d.size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity === 1}
                    className="px-4 py-3 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="px-4 font-body-md font-semibold w-8 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 hover:bg-stone-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full border border-stone-300 font-label-sm uppercase tracking-widest py-4 rounded-xl mb-12 hover:bg-primary hover:text-on-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                Buy It Now
              </button>

              {/* Shipping Info */}
              <div className="border-t border-stone-200 pt-8 space-y-4">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">local_shipping</span>
                  <span className="font-body-md">Free white-glove delivery within 4-6 weeks</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  <span className="font-body-md">10-year structural warranty</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">replay</span>
                  <span className="font-body-md">30-day return guarantee</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Tabs */}
        <section className="mt-section-gap">
          <div className="border-b border-stone-200 flex gap-2 sm:gap-12 mb-12 overflow-x-auto">
            {[
              { key: 'specs', label: 'Specifications' },
              { key: 'reviews', label: `Reviews (${REVIEWS.length})` },
              { key: 'care', label: 'Care Guide' },
            ].map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={`pb-4 px-2 border-b-2 font-label-sm text-label-sm uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  activeTab === t.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-stone-400 hover:text-primary hover:border-stone-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal">
              <div className="space-y-6">
                <h3 className="font-headline-md text-headline-md">The Details</h3>
                <div className="space-y-4">
                  {[
                    ['Material', 'Solid European Oak, Steel supports'],
                    ['Finish', 'Matte UV-Hardened Oil'],
                    ['Seating', '8 – 10 Persons'],
                    ['Weight', '112 kg'],
                    ['Origin', 'Hand-built in Roskilde, Denmark'],
                    ['Lead time', '4 – 6 weeks'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-stone-100 pb-2">
                      <span className="text-stone-500 font-label-sm uppercase tracking-widest text-xs">{k}</span>
                      <span className="font-body-md text-right">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 p-8 rounded-2xl flex flex-col justify-center">
                <p className="font-headline-md italic text-stone-700 mb-4 leading-snug">"The craftsmanship is unparalleled. It truly is the heart of our dining room now."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-semibold">E</div>
                  <div>
                    <span className="block font-label-sm font-bold">Eleanor M.</span>
                    <span className="text-xs text-stone-400">Verified Purchase, London</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reveal">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display-xl text-4xl text-primary">4.7</span>
                    <div className="flex flex-col">
                      <div className="flex text-on-secondary-fixed-variant">{renderStars(5)}</div>
                      <span className="text-xs text-stone-500 mt-1">Based on {REVIEWS.length} verified reviews</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="px-6 py-3 border border-primary rounded-xl font-label-sm uppercase tracking-widest text-xs hover:bg-primary hover:text-on-primary hover:-translate-y-0.5 transition-all duration-300"
                >
                  Write a review
                </button>
              </div>
              <div className="space-y-8">
                {REVIEWS.map((r, idx) => (
                  <article key={idx} className="bg-white border border-stone-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                    <header className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-semibold text-stone-600">
                          {r.name[0]}
                        </div>
                        <div>
                          <span className="block font-label-sm font-bold">{r.name}</span>
                          <span className="text-xs text-stone-400">Verified Purchase, {r.city}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex text-on-secondary-fixed-variant">{renderStars(r.rating)}</div>
                        <span className="text-xs text-stone-400">{r.date}</span>
                      </div>
                    </header>
                    <p className="font-body-md text-on-surface-variant italic">"{r.body}"</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'care' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              {CARE_STEPS.map((step) => (
                <div
                  key={step.title}
                  className="bg-white border border-stone-100 p-8 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-2xl text-secondary">{step.icon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{step.title}</h3>
                  <p className="font-body-md text-on-surface-variant">{step.body}</p>
                </div>
              ))}
              <div className="md:col-span-2 bg-primary text-on-primary p-10 rounded-2xl text-center">
                <span className="material-symbols-outlined text-3xl mb-3 inline-block opacity-70">support_agent</span>
                <p className="font-headline-md text-headline-md mb-3">Need restoration?</p>
                <p className="opacity-80 max-w-xl mx-auto mb-6">
                  Every Lumière piece comes with a lifetime restoration commitment. Our atelier travels worldwide for in-home repairs.
                </p>
                <Link
                  to="/timeless-hearth"
                  className="inline-flex items-center gap-2 border border-white/30 px-8 py-3 rounded-xl font-label-sm uppercase tracking-widest text-xs hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Contact the Atelier
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Complete the Look */}
        <section className="mt-section-gap mb-20">
          <h2 className="font-display-xl text-headline-lg mb-12 text-center">Complete the look</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { title: 'Woven Nordic Chair', price: '$480.00', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' },
              { title: 'Eclipse Pendant Light', price: '$320.00', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80' },
              { title: 'Tidal Ceramic Vase', price: '$125.00', img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80' },
              { title: 'Desert Loom Rug', price: '$890.00', img: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80' },
            ].map((product, idx) => (
              <Link key={idx} to="/browse-our-collection" className="group cursor-pointer tilt-card">
                <div className="tilt-card-inner aspect-[3/4] bg-surface-container rounded-2xl overflow-hidden mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <img className="tilt-card-img w-full h-full object-cover" src={product.img} alt={product.title} loading="lazy" />
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); navigate('/your-shopping-cart'); }}
                    aria-label={`Add ${product.title}`}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <h3 className="font-body-md font-semibold group-hover:text-secondary transition-colors duration-300">{product.title}</h3>
                <p className="font-label-sm text-stone-500">{product.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Mobile sticky add-to-cart */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-[0_-4px_20px_-5px_rgba(44,44,44,0.1)]">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-stone-400">Artisan Solid Oak</span>
            <span className="font-headline-md text-lg leading-none text-primary">$2,450</span>
          </div>
          <div className="flex items-center border border-stone-200 rounded-xl ml-auto overflow-hidden">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity === 1}
              className="px-2 py-2 hover:bg-stone-50 disabled:opacity-30 transition-colors"
              aria-label="Decrease"
            >
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <span className="px-2 font-body-md font-semibold w-6 text-center text-sm">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-2 hover:bg-stone-50 transition-colors"
              aria-label="Increase"
            >
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-primary text-on-primary font-label-sm px-5 py-3 rounded-xl text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
          <div className="flex gap-8">
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Sustainability</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Material Care</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Shipping &amp; Returns</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Privacy Policy</button>
          </div>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WoodenDiningTableDetails;
