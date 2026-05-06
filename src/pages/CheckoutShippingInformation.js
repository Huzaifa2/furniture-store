import React from 'react';
import { Link } from 'react-router-dom';
import SaleTicker from '../components/SaleTicker';

const CheckoutShippingInformation = () => (
  <div className="font-body-md text-body-md antialiased">
    <SaleTicker />
    {/* TopNavBar */}
    <header className="fixed top-9 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center gap-12">
          <Link className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900" to="/">LUMIÈRE</Link>
          <nav className="hidden md:flex space-x-8 font-serif text-lg tracking-tight">
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/seller-dashboard">Office</Link>
            <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/timeless-hearth">About</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/your-shopping-cart" className="text-zinc-800 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
          </Link>
          <Link to="/checkout-shipping" className="text-zinc-800 hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined" data-icon="person">person</span>
          </Link>
        </div>
      </div>
    </header>

    <main className="pt-32 pb-section-gap max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Checkout Flow */}
        <div className="lg:col-span-7">
          {/* Progress Indicator */}
          <nav className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">1</div>
              <span className="font-label-sm text-label-sm uppercase text-primary">Shipping</span>
            </div>
            <div className="h-px bg-surface-container flex-1 mx-4"></div>
            <div className="flex items-center gap-4 flex-1 opacity-40">
              <div className="w-10 h-10 rounded-full border-2 border-outline text-outline flex items-center justify-center font-bold text-sm">2</div>
              <span className="font-label-sm text-label-sm uppercase text-outline">Payment</span>
            </div>
            <div className="h-px bg-surface-container flex-1 mx-4"></div>
            <div className="flex items-center gap-4 flex-1 opacity-40">
              <div className="w-10 h-10 rounded-full border-2 border-outline text-outline flex items-center justify-center font-bold text-sm">3</div>
              <span className="font-label-sm text-label-sm uppercase text-outline">Summary</span>
            </div>
          </nav>

          <div className="space-y-8">
            <header>
              <h1 className="font-headline-lg text-headline-lg mb-2">Shipping Information</h1>
              <p className="text-on-surface-variant font-body-md">Please provide your details for delivery.</p>
            </header>

            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-2 space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300" placeholder="e.g. Eleanor Rigby" type="text"/>
              </div>
              <div className="col-span-2 space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Shipping Address</label>
                <input className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300" placeholder="Street name and house number" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">City</label>
                <input className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300" placeholder="New York" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Postal Code</label>
                <input className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300" placeholder="10001" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Country</label>
                <select className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-sm text-label-sm uppercase text-on-surface-variant">Phone Number</label>
                <input className="w-full bg-surface-container-low border border-stone-200 focus:border-primary focus:ring-0 rounded-lg p-4 font-body-md transition-all duration-300" placeholder="+1 (555) 000-0000" type="tel"/>
              </div>
              <div className="col-span-2 pt-8 flex justify-between items-center">
                <Link className="font-body-md text-stone-500 hover:text-primary transition-colors flex items-center gap-2" to="/your-shopping-cart">
                  <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                  Return to bag
                </Link>
                <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10" type="submit">
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <aside className="lg:col-span-5">
          <div className="bg-white border border-stone-200/60 rounded-2xl p-8 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] sticky top-32">
            <h2 className="font-headline-md text-headline-md mb-8">Order Summary</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=300&q=80" alt="Bastille lounge chair" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="font-body-md font-semibold">Bastille Lounge Chair</h3>
                  <p className="text-sm text-stone-500">Walnut / Sand Linen</p>
                  <p className="font-body-md mt-1">$1,250.00</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-surface-container-low rounded-lg overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=300&q=80" alt="Ether side table" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="font-body-md font-semibold">Ether Side Table</h3>
                  <p className="text-sm text-stone-500">Natural Oak</p>
                  <p className="font-body-md mt-1">$480.00</p>
                </div>
              </div>
            </div>
            <div className="border-t border-stone-100 pt-6 space-y-4">
              <div className="flex justify-between font-body-md text-stone-500">
                <span>Subtotal</span>
                <span>$1,730.00</span>
              </div>
              <div className="flex justify-between font-body-md text-stone-500">
                <span>Shipping</span>
                <span className="text-primary font-medium">Free</span>
              </div>
              <div className="flex justify-between font-body-md text-stone-500">
                <span>Estimated Tax</span>
                <span>$142.70</span>
              </div>
              <div className="border-t border-stone-100 pt-4 flex justify-between">
                <span className="font-headline-md text-headline-md">Total</span>
                <span className="font-headline-md text-headline-md">$1,872.70</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>

    {/* Footer */}
    <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-serif text-lg text-zinc-800">LUMIÈRE</span>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Sustainability</button>
          <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Material Care</button>
          <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Shipping &amp; Returns</button>
          <button type="button" className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors">Privacy Policy</button>
        </div>
      </div>
    </footer>
  </div>
);

export default CheckoutShippingInformation;
