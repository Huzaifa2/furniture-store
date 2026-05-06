import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';
import { useLanguage } from '../i18n/LanguageContext';

const CATEGORIES = ['Living', 'Dining', 'Office', 'Décor'];
const MATERIALS = ['Oak', 'Walnut', 'Stone', 'Leather', 'Cane', 'Linen'];

const formatPrice = (n) => {
  const num = Number(n);
  if (!num || Number.isNaN(num)) return '—';
  return `$${num.toLocaleString()}`;
};

const SellerDashboardAddProduct = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    title: '',
    category: 'Living',
    material: 'Oak',
    price: '',
    description: '',
    images: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const onUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map((f) => URL.createObjectURL(f));
    setForm((prev) => ({ ...prev, images: [...prev.images, ...urls].slice(0, 4) }));
  };

  const removeImage = (idx) => {
    setForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2400);
  };

  const previewImg = form.images[0];

  return (
    <div className="min-h-screen bg-surface">
      <SaleTicker />
      <header className="fixed top-9 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">{t('nav.living')}</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/wooden-dining-table-details">{t('nav.dining')}</Link>
            <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/seller-dashboard">{t('nav.office')}</Link>
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
            <span className="text-on-surface">Seller</span>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface">New listing</span>
          </nav>
          <h1 className="font-display-xl text-display-xl text-primary mb-2">Add a Product</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Compose a new listing. The card on the right updates as you type — see exactly how your piece will appear in the storefront.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <section className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-stone-200/60 rounded-2xl p-8 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] space-y-6">
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Product name</label>
                <input
                  value={form.title}
                  onChange={setField('title')}
                  placeholder="e.g. Atelier Dining Table"
                  className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg p-4 font-body-md transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Category</label>
                  <select
                    value={form.category}
                    onChange={setField('category')}
                    className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg p-4 font-body-md transition-colors"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Material</label>
                  <select
                    value={form.material}
                    onChange={setField('material')}
                    className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg p-4 font-body-md transition-colors"
                  >
                    {MATERIALS.map((m) => <option key={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Price (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">$</span>
                  <input
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={setField('price')}
                    placeholder="1850"
                    className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg p-4 pl-8 font-body-md transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Description</label>
                <textarea
                  rows={5}
                  value={form.description}
                  onChange={setField('description')}
                  placeholder="A foundational piece for the modern dining room…"
                  className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:outline-none rounded-lg p-4 font-body-md transition-colors resize-none"
                />
                <p className="text-xs text-stone-400">{form.description.length}/240 characters</p>
              </div>

              <div className="space-y-3">
                <label className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Images</label>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-stone-200 rounded-xl p-10 cursor-pointer hover:border-primary hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-4xl text-stone-400 mb-3">add_photo_alternate</span>
                  <span className="font-body-md text-on-surface mb-1">Drop images or click to upload</span>
                  <span className="text-xs text-stone-400">Up to 4 photos · JPG or PNG</span>
                  <input type="file" accept="image/*" multiple className="hidden" onChange={onUpload} />
                </label>
                {form.images.length > 0 && (
                  <div className="grid grid-cols-4 gap-3">
                    {form.images.map((src, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden border border-stone-200 group">
                        <img src={src} alt={`upload ${idx}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1 right-1 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                        >
                          <span className="material-symbols-outlined text-base">close</span>
                        </button>
                        {idx === 0 && (
                          <span className="absolute bottom-1 left-1 text-[10px] uppercase tracking-widest bg-primary text-on-primary px-2 py-0.5 rounded-full">Cover</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="font-label-sm text-label-sm uppercase tracking-widest text-stone-500 hover:text-primary transition-colors">
                Cancel
              </Link>
              <div className="flex gap-3">
                <button type="button" className="px-6 py-4 border border-stone-300 rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:bg-stone-50 transition">
                  Save draft
                </button>
                <button
                  type="submit"
                  className="px-10 py-4 bg-primary text-on-primary rounded-xl font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-zinc-900/10"
                >
                  {submitted ? 'Published ✓' : 'Publish listing'}
                </button>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Live preview</span>
                <span className="text-xs text-stone-400">As shown in storefront</span>
              </div>

              <div className="bg-white border border-stone-200/60 rounded-2xl p-8 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
                <div className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative mb-6 rounded-lg">
                    {previewImg ? (
                      <img alt="Preview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={previewImg} />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-stone-300">
                        <span className="material-symbols-outlined text-5xl mb-2">photo_library</span>
                        <span className="text-xs uppercase tracking-widest">Cover image</span>
                      </div>
                    )}
                    <button type="button" className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {form.title || 'Your product name'}
                      </h3>
                      <span className="font-body-md font-semibold whitespace-nowrap">{formatPrice(form.price)}</span>
                    </div>
                    <p className="text-on-surface-variant font-body-md text-sm line-clamp-2">
                      {form.description || 'A short, evocative description will appear here.'}
                    </p>
                    <p className="text-xs text-stone-400 uppercase tracking-widest pt-1">
                      {form.category} · {form.material}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-low rounded-xl p-5 text-xs text-stone-500 leading-relaxed">
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-2">Tip</p>
                Listings with at least three photos and a description over 80 characters convert <span className="text-primary font-medium">~3× better</span>.
              </div>
            </div>
          </aside>
        </form>
      </main>

      <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SellerDashboardAddProduct;
