import React from 'react';
import { Link } from 'react-router-dom';

const YourShoppingCart = () => (
  <div className="min-h-screen bg-surface">
    {/* TopNavBar */}
    <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
        <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
          <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
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
      <h1 className="font-display-xl text-display-xl text-primary mb-12">Your Shopping Cart</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Review your items and proceed to checkout when ready.</p>
      
      <div className="bg-white rounded-2xl border border-stone-200/60 p-12 shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] text-center">
        <p className="font-body-md text-on-surface-variant mb-6">Cart page content from your project is ready to be displayed here.</p>
        <Link to="/checkout-shipping" className="inline-flex items-center justify-center rounded-xl bg-primary text-on-primary px-8 py-4 text-body-md font-semibold transition hover:opacity-90">
          Proceed to Checkout
        </Link>
      </div>
    </main>

    {/* Footer */}
    <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4">
          <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
);

export default YourShoppingCart;
