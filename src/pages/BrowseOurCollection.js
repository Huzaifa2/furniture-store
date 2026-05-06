import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';
import { useLanguage } from '../i18n/LanguageContext';

const ALL_PRODUCTS = [
  { title: 'Atelier Dining Table', price: 1850, category: 'Dining', material: 'Oak', color: 'Natural', desc: 'A foundational piece for the modern dining room, carved from sustainably sourced European White Oak.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80' },
  { title: 'Søren Lounge Chair', price: 920, category: 'Living', material: 'Walnut', color: 'Linen', desc: 'Hand-finished walnut paired with organic linen, designed for lingering conversations.', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80' },
  { title: 'Modulus Work Desk', price: 1400, category: 'Office', material: 'Oak', color: 'Charcoal', desc: 'An industrial silhouette refined for the home office, featuring integrated cable management.', img: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=900&q=80' },
  { title: 'Cane Back Side Chair', price: 450, category: 'Dining', material: 'Cane', color: 'Natural', desc: 'Lightweight yet durable, these chairs celebrate traditional weaving techniques in a modern form.', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=80' },
  { title: 'Monolith Coffee Table', price: 2100, category: 'Living', material: 'Stone', color: 'Ivory', desc: 'A sculptural statement carved from a single block of Italian travertine marble.', img: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=900&q=80' },
  { title: 'Apex Bar Stool', price: 380, category: 'Dining', material: 'Leather', color: 'Charcoal', desc: 'Elevated seating featuring top-grain leather and precision-welded steel frames.', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80' },
];

const CATEGORIES = ['All', 'Living', 'Dining', 'Office'];
const MATERIALS = ['Oak', 'Walnut', 'Stone', 'Leather', 'Cane'];
const COLORS = [
  { name: 'Natural', swatch: '#D2B48C' },
  { name: 'Walnut', swatch: '#4B3621' },
  { name: 'Charcoal', swatch: '#36373A' },
  { name: 'Ivory', swatch: '#F2EBDC' },
  { name: 'Linen', swatch: '#E8DFCE' },
];

const formatPrice = (n) => `$${n.toLocaleString()}`;

const BrowseOurCollection = () => {
  const { t } = useLanguage();
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2500);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [sort, setSort] = useState('featured');

  const toggle = (list, value) =>
    list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

  const filtered = useMemo(() => {
    let items = ALL_PRODUCTS.filter((p) => {
      if (category !== 'All' && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (materials.length && !materials.includes(p.material)) return false;
      if (colors.length && !colors.includes(p.color)) return false;
      return true;
    });
    if (sort === 'low') items = [...items].sort((a, b) => a.price - b.price);
    if (sort === 'high') items = [...items].sort((a, b) => b.price - a.price);
    return items;
  }, [category, maxPrice, materials, colors, sort]);

  const clearAll = () => {
    setCategory('All');
    setMaxPrice(2500);
    setMaterials([]);
    setColors([]);
  };

  return (
    <div className="font-body-md text-on-surface">
      <SaleTicker />
      <header className="fixed top-9 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/browse-our-collection">{t('nav.living')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/wooden-dining-table-details">{t('nav.dining')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/seller-dashboard">{t('nav.office')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/timeless-hearth">{t('nav.about')}</Link>
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
            <span className="text-on-surface">Collections</span>
          </nav>
          <h1 className="font-display-xl text-display-xl text-primary mb-2">Our Essentials</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Refined objects for domestic permanence. Every piece is crafted with structural integrity and an unwavering commitment to material truth.</p>
        </div>

        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 -mx-2 px-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`shrink-0 px-5 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-widest border transition-all ${
                category === c
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-white text-on-surface border-stone-200 hover:border-stone-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-10">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest">Filters</span>
                <button onClick={clearAll} className="text-xs text-stone-500 hover:text-primary underline underline-offset-4">Clear all</button>
              </div>

              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Price</span>
                <input
                  type="range"
                  min={300}
                  max={2500}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-zinc-900"
                />
                <div className="flex justify-between mt-2 text-sm text-stone-500">
                  <span>$300</span>
                  <span className="font-medium text-primary">Up to {formatPrice(maxPrice)}</span>
                </div>
              </div>

              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Material</span>
                <div className="space-y-2">
                  {MATERIALS.map((m) => (
                    <label key={m} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={materials.includes(m)}
                        onChange={() => setMaterials(toggle(materials, m))}
                        className="w-4 h-4 accent-zinc-900"
                      />
                      <span className="font-body-md text-on-surface group-hover:text-primary transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest mb-4 block">Color</span>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((c) => {
                    const active = colors.includes(c.name);
                    return (
                      <button
                        key={c.name}
                        onClick={() => setColors(toggle(colors, c.name))}
                        title={c.name}
                        className={`w-9 h-9 rounded-full border-2 transition-all ${active ? 'border-primary scale-110' : 'border-stone-200 hover:border-stone-400'}`}
                        style={{ backgroundColor: c.swatch }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-stone-500">{filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</span>
              <div className="flex items-center gap-3">
                <label className="text-xs uppercase tracking-widest text-stone-500">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price: low to high</option>
                  <option value="high">Price: high to low</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-stone-200 rounded-2xl">
                <p className="font-headline-md text-headline-md text-stone-400 mb-4">Nothing matches those filters.</p>
                <button onClick={clearAll} className="text-primary underline underline-offset-4 text-sm uppercase tracking-widest">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-gutter">
                {filtered.map((product, idx) => (
                  <div key={idx} className="group tilt-card">
                    <Link to="/wooden-dining-table-details" className="block">
                      <div className="tilt-card-inner aspect-[4/5] overflow-hidden bg-surface-container-low relative mb-6 rounded-2xl shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                        <img alt={product.title} className="tilt-card-img w-full h-full object-cover" src={product.img} loading="lazy" />
                        <button
                          onClick={(e) => { e.preventDefault(); }}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
                          aria-label="Save"
                        >
                          <span className="material-symbols-outlined text-xl">favorite</span>
                        </button>
                        <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <button
                            onClick={(e) => { e.preventDefault(); }}
                            className="flex-1 bg-white/95 backdrop-blur-sm py-3 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:bg-white shadow-md"
                          >
                            Quick view
                          </button>
                          <button
                            onClick={(e) => { e.preventDefault(); }}
                            className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 shadow-md"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-headline-md text-headline-md text-primary">{product.title}</h3>
                        <span className="font-body-md font-semibold whitespace-nowrap">{formatPrice(product.price)}</span>
                      </div>
                      <p className="text-on-surface-variant font-body-md text-sm line-clamp-2">{product.desc}</p>
                      <p className="text-xs text-stone-400 uppercase tracking-widest pt-1">{product.material} · {product.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
            <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Sustainability</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Material Care</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Shipping &amp; Returns</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-stone-200">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BrowseOurCollection;
