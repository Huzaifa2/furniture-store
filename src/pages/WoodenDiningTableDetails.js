import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WoodenDiningTableDetails = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('natural-oak');
  const [selectedDimension, setSelectedDimension] = useState('standard');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} Artisan Solid Oak Dining Table (${selectedMaterial}) to cart!`);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
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

      <main className="pt-32 max-w-7xl mx-auto px-8 pb-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Images Section */}
          <section className="lg:col-span-7 space-y-6">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-2xl shadow-sm tilt-card">
              <div className="tilt-card-inner w-full h-full">
                <img
                  className="tilt-card-img w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80"
                  alt="Artisan solid oak dining table in a sunlit room"
                  loading="eager"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=400&q=80" alt="Oak wood grain detail" loading="lazy" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=400&q=80" alt="Joinery detail" loading="lazy" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=400&q=80" alt="Dining table setting" loading="lazy" />
              </div>
              <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-stone-200 cursor-pointer hover:shadow-md transition-shadow relative">
                <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=400&q=80" alt="More angles of the table" loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center text-label-sm font-label-sm">+4 More</div>
              </div>
            </div>
          </section>

          {/* Product Details Section */}
          <section className="lg:col-span-5 flex flex-col justify-start">
            <div className="sticky top-32">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">The Heritage Collection</span>
              <h1 className="font-display-xl text-display-xl text-primary mb-4">Artisan Solid Oak Dining Table</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="font-headline-md text-headline-md text-primary">$2,450.00</span>
                <div className="flex items-center text-on-secondary-fixed-variant">
                  {[1, 2, 3, 4].map((i) => (
                    <span key={i} className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  ))}
                  <span className="material-symbols-outlined text-sm">star_half</span>
                  <span className="ml-2 font-label-sm text-label-sm">(48 Reviews)</span>
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
                    <button 
                      onClick={() => setSelectedMaterial('natural-oak')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedMaterial === 'natural-oak' 
                          ? 'border-primary bg-surface-container' 
                          : 'border-stone-200 bg-surface-container-low'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#D2B48C]"></div>
                      <span className="font-label-sm text-label-sm">Natural Oak</span>
                    </button>
                    <button 
                      onClick={() => setSelectedMaterial('dark-walnut')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                        selectedMaterial === 'dark-walnut' 
                          ? 'border-primary bg-surface-container' 
                          : 'border-stone-200 bg-surface-container-low'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-[#4B3621]"></div>
                      <span className="font-label-sm text-label-sm">Dark Walnut</span>
                    </button>
                  </div>
                </div>

                {/* Dimensions Selection */}
                <div>
                  <span className="font-label-sm text-label-sm uppercase mb-4 block">Dimensions</span>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setSelectedDimension('standard')}
                      className={`p-4 rounded-xl border transition-all ${
                        selectedDimension === 'standard'
                          ? 'bg-surface-container border-primary'
                          : 'bg-surface-container-low border-stone-200'
                      }`}
                    >
                      <span className="block font-label-sm text-stone-500 mb-1">Standard</span>
                      <span className="font-body-md">220 x 100 cm</span>
                    </button>
                    <button
                      onClick={() => setSelectedDimension('grand')}
                      className={`p-4 rounded-xl border transition-all ${
                        selectedDimension === 'grand'
                          ? 'bg-surface-container border-primary'
                          : 'bg-surface-container-low border-stone-200 opacity-60'
                      }`}
                    >
                      <span className="block font-label-sm text-stone-500 mb-1">Grand</span>
                      <span className="font-body-md">280 x 110 cm</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center border border-stone-200 rounded-xl px-4 py-3 bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:opacity-50">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="mx-6 font-body-md font-semibold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="hover:opacity-50">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-white font-label-sm py-4 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  ADD TO CART
                </button>
              </div>

              <button className="w-full border border-stone-300 font-label-sm py-4 rounded-xl hover:bg-stone-50 transition-all mb-12">
                BUY IT NOW
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
              </div>
            </div>
          </section>
        </div>

        {/* Specifications Section */}
        <section className="mt-section-gap">
          <div className="border-b border-stone-200 flex gap-12 mb-12">
            <button className="pb-4 border-b-2 border-primary font-label-sm text-label-sm">SPECIFICATIONS</button>
            <button className="pb-4 border-b-2 border-transparent font-label-sm text-label-sm text-stone-400 hover:text-stone-600">REVIEWS (48)</button>
            <button className="pb-4 border-b-2 border-transparent font-label-sm text-label-sm text-stone-400 hover:text-stone-600">CARE GUIDE</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="font-headline-md text-headline-md">The Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">MATERIAL</span>
                  <span className="font-body-md">Solid European Oak, Steel supports</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">FINISH</span>
                  <span className="font-body-md">Matte UV-Hardened Oil</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">SEATING</span>
                  <span className="font-body-md">8 - 10 Persons</span>
                </div>
                <div className="flex justify-between border-b border-stone-100 pb-2">
                  <span className="text-stone-500 font-label-sm">WEIGHT</span>
                  <span className="font-body-md">112 kg</span>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl flex flex-col justify-center">
              <p className="font-headline-md italic text-stone-600 mb-4">"The craftsmanship is unparalleled. It truly is the heart of our dining room now."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-200"></div>
                <div>
                  <span className="block font-label-sm font-bold">Eleanor M.</span>
                  <span className="text-xs text-stone-400">Verified Purchase, London</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete the Look Section */}
        <section className="mt-section-gap mb-20">
          <h2 className="font-display-xl text-headline-lg mb-12 text-center">Complete the look</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              { title: 'Woven Nordic Chair', price: '$480.00', img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80' },
              { title: 'Eclipse Pendant Light', price: '$320.00', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80' },
              { title: 'Tidal Ceramic Vase', price: '$125.00', img: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80' },
              { title: 'Desert Loom Rug', price: '$890.00', img: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=600&q=80' }
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer tilt-card">
                <div className="tilt-card-inner aspect-[3/4] bg-surface-container rounded-2xl overflow-hidden mb-4 relative">
                  <img className="tilt-card-img w-full h-full object-cover" src={product.img} alt={product.title} loading="lazy" />
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <h3 className="font-body-md font-semibold">{product.title}</h3>
                <p className="font-label-sm text-stone-500">{product.price}</p>
              </div>
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
          <div className="flex items-center border border-stone-200 rounded-xl ml-auto">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-2 hover:opacity-50">
              <span className="material-symbols-outlined text-base">remove</span>
            </button>
            <span className="px-2 font-body-md font-semibold w-6 text-center text-sm">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-2 hover:opacity-50">
              <span className="material-symbols-outlined text-base">add</span>
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-primary text-on-primary font-label-sm px-5 py-3 rounded-xl text-xs uppercase tracking-widest"
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
