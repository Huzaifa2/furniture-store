import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-body-md text-body-md antialiased">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 dark:border-zinc-800/60 bg-stone-50/95 dark:bg-zinc-950/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] transition-all duration-300 ease-in-out h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          <div className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">LUMIÈRE</div>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50 pb-1 hover:opacity-80 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/seller-dashboard">Office</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/timeless-hearth">About</Link>
          </div>
          <div className="flex items-center space-x-6 text-zinc-800 dark:text-zinc-200">
            <Link to="/your-shopping-cart" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            </Link>
            <Link to="/checkout-shipping" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined" data-icon="person">person</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[921px] overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img alt="Hero Image" className="w-full h-full object-cover" data-alt="A sun-drenched, high-end minimalist living room featuring a sculptural solid oak dining table and handcrafted black wooden chairs. The space is filled with soft, warm afternoon light filtering through sheer linen curtains, creating a serene and domestic atmosphere. The aesthetic is premium and uncluttered, with clean lines and natural textures of wood and wool. The color palette is dominated by soft whites, warm wood tones, and subtle charcoal accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmheuyWiiSXo1DyE0b2JZ7cJU8V8qbek7gVKWvT83YM3hgGyGhRMkJlpjRdTO2b2e0BeWuEOf4PSHH97fdBVcxWJh5vR9_tzMWrEZtMBelQ0p2XcV2weYXbDtYT3AYQ_eFrZUHZDnXZqZnJ9N-991lcpowGLUgKwFUJaKYRLzQ34GOssr6wErWpAjdQwOGjDh1qyxgeFvl1W0yr-SSFSrOJ0tPc8IOCu3zeu-I_YA7rLBhV_NG0_YjCiJ_E7NOyZLS6QPMEEbKqz1s"/>
          <div className="absolute inset-0 bg-zinc-900/10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl bg-surface/80 backdrop-blur-md p-12 rounded-xl shadow-2xl shadow-zinc-900/5">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">New Collection 2024</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-6">The Art of Living <br/>Permanently.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              Discover furniture crafted for generations. We blend timeless design with modern durability to create spaces that feel like home.
            </p>
            <div className="flex space-x-4">
              <Link to="/browse-our-collection" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20">
                Shop Now
              </Link>
              <Link to="/timeless-hearth" className="border border-outline text-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:bg-surface-container transition-all duration-300">
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container p-10 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary" data-icon="verified">verified</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">Built for Durability</h3>
            <p className="text-on-surface-variant font-body-md">Precision-engineered with solid hardwoods and high-grade materials that age beautifully over time.</p>
          </div>
          <div className="bg-secondary-container p-10 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary" data-icon="eco">eco</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">Sustainably Crafted</h3>
            <p className="text-on-secondary-fixed-variant font-body-md">Every piece is responsibly sourced and hand-finished by master artisans using organic oils.</p>
          </div>
          <div className="bg-surface-container p-10 rounded-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary" data-icon="local_shipping">local_shipping</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">White Glove Delivery</h3>
            <p className="text-on-surface-variant font-body-md">Fast, secure shipping and professional assembly in your home, handled with the utmost care.</p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-section-gap">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">Curated Selection</span>
            <h2 className="font-headline-lg text-headline-lg">Signature Pieces</h2>
          </div>
          <a className="font-label-sm text-label-sm text-primary underline underline-offset-8 uppercase tracking-widest hover:text-secondary transition-colors" href="#">Explore All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Product 1 */}
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
              <img alt="Chair Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up of a minimalist accent chair made from warm walnut wood with an ivory boucle fabric seat. The chair is positioned in a bright, modern studio with soft shadows and high-key lighting. The overall style is clean and premium, focusing on the texture of the fabric and the grain of the wood. The color palette consists of neutral beiges, deep browns, and bright whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP01iGSvRgmDsINtF6_GmZIki7juylarfxUNjn_sjO7LEHIVBy1H5Ri0f34De7sBkysghX4aWeps1zTrcMTDzC1n6rL_YPJKScEdo7RDxs-utFZ6FW0j4OxITivmPLBnaejEvFpDzv5JIpTYnrbIglX6aYM-zXKaCInLD4zzHyTKrWCcUbzk5XcvOXUtCkg4LMf3Z_uTCYzM5aKxNBj7jWWa4XV4t-nAelX-dAZrfshRIl-jEOHremdjc21altXMPVL9ShoJoeQmq7"/>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body-lg text-body-lg font-semibold text-primary">Nordic Lounge Chair</h4>
                <p className="font-body-md text-on-surface-variant">American Walnut</p>
              </div>
              <span className="font-body-lg text-body-lg">$850</span>
            </div>
          </div>
          {/* Product 2 */}
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
              <img alt="Dining Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="An elegant, large rectangular dining table crafted from light white oak with smooth, rounded edges. The table is set in a spacious, airy dining room with expansive windows and a polished concrete floor. The lighting is diffused and natural, highlighting the premium craftsmanship and tactile quality of the wood. The aesthetic is serene, domestic, and high-end, utilizing a palette of soft greys, natural oak, and warm whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU8RVcAdXiNM6Ra4XMs62HC_NeljTkef_EUdwUIbS7Qd4zQfXsTfaEFSEwGD5CkjEdnR_Soxi5CsxI0JZ5BaVC9h6SrQhZjZMACJD64xRXpUkIafwVcVmkzRTaP9uCzwR8ctZ0fECOIEsgbjQx26DVHEYd0RiaCG4fAy7En2VPqvoGsOIYiqQnO98US9r-mvhpRS0oXo96LU6WC9w5quQZPzXYMwfZoqM1VTfC_0sjmtytQj6tx4xVSPTdA9n5bwui3HB3NKN1qMV1"/>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body-lg text-body-lg font-semibold text-primary">Elowen Dining Table</h4>
                <p className="font-body-md text-on-surface-variant">White Oak</p>
              </div>
              <span className="font-body-lg text-body-lg">$2,400</span>
            </div>
          </div>
          {/* Product 3 */}
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
              <img alt="Desk Chair" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A modern ergonomic desk chair with a sleek black frame and a tan leather seat. The chair is placed in a minimalist home office setting with a solid wood desk and a large green plant in the background. The lighting is soft and professional, creating a calm and focused environment. The style is premium and functional, with a palette of deep blacks, rich tans, and muted greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEJobhrB0IpMrs6__Sy4U5mmwDTcMmS_CSSZO-xZ4jg0IOkUtnokXZADER46RXa1ScpeETLN_7IUNheNwVjFi2iXtKek7ZguAVYKCA-uSCcON8bXaBMAQ03IEPRK3R94bwejNLCwPiC14ztvzOTQCKdr5YMoQCNl6kDYCzABMAwI0sJm2CJTfwoVKDWUBjWEHfmwP85yJruqqtvjAAIqrM_Rv7T2FFSxyt7OBZmgm4i711bu6ZY7KqDeafmgYdckq14saapbNt8v0"/>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body-lg text-body-lg font-semibold text-primary">Artisanal Desk Chair</h4>
                <p className="font-body-md text-on-surface-variant">Cognac Leather</p>
              </div>
              <span className="font-body-lg text-body-lg">$1,100</span>
            </div>
          </div>
          {/* Product 4 */}
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
              <img alt="Side Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A small, sculptural side table made from dark charcoal stone or textured ceramic. It sits on a high-pile cream rug next to a modern sofa. The lighting is low and atmospheric, creating deep shadows and highlighting the tactile, organic surface of the table. The mood is sophisticated and cozy, utilizing a palette of deep charcoals, creams, and warm ambient light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIi6f-byVypfEzbIS8xiR6w1BTxWVnBthrNnaCig3PbwcWsNR2vu3TvK9OeZGGvDbbBx-9jn9CndD_p3-F7bNoRmMsfE9nI64k46I2koQiVSoYtKwUQb8yf8ljLCpLL_JP349wHPqbEuO9bJ_dfO_u5963w_0gA0RbFvEDXrwiMKPeyY_1qVs0QAXmXA509W9EGKv9Ii6A19On6wz4iL3fBdevFECMag-6zJUWIPPGtDpF5AsSNVJ0lHmbU-JKu3tI4Sq2-H0w7Fv"/>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <span className="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-body-lg text-body-lg font-semibold text-primary">Sculptural Side Table</h4>
                <p className="font-body-md text-on-surface-variant">Basalt Stone</p>
              </div>
              <span className="font-body-lg text-body-lg">$450</span>
            </div>
          </div>
        </div>
      </section>

      {/* Page Links Section */}
      <section className="max-w-7xl mx-auto px-8 py-section-gap">
        <div className="mb-10 text-center">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Explore the Site</span>
          <h2 className="font-headline-lg text-headline-lg">Jump to any page</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <Link to="/browse-our-collection" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Browse Our Collection</h3>
            <p className="font-body-md text-on-surface-variant">Browse featured furniture and curated pieces in a clean shopping preview.</p>
          </Link>
          <Link to="/checkout-shipping" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Checkout & Shipping</h3>
            <p className="font-body-md text-on-surface-variant">Continue to the checkout experience and shipping information page.</p>
          </Link>
          <Link to="/your-shopping-cart" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Your Shopping Cart</h3>
            <p className="font-body-md text-on-surface-variant">Review your active cart items before completing your purchase.</p>
          </Link>
          <Link to="/seller-dashboard" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Seller Dashboard</h3>
            <p className="font-body-md text-on-surface-variant">View the seller dashboard page and add a new product listing.</p>
          </Link>
          <Link to="/timeless-hearth" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Timeless Hearth</h3>
            <p className="font-body-md text-on-surface-variant">Explore the warm lifestyle page and brand story section.</p>
          </Link>
          <Link to="/wooden-dining-table-details" className="rounded-3xl border border-surface-container p-10 bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-headline-md text-headline-md mb-3">Dining Table Details</h3>
            <p className="font-body-md text-on-surface-variant">Open the product detail page for the wooden dining table.</p>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-surface-container-high py-section-gap">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Testimonials</span>
            <h2 className="font-headline-lg text-headline-lg">Living with Lumière</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-xl shadow-sm relative">
              <span className="material-symbols-outlined text-5xl text-primary-fixed opacity-20 absolute top-8 left-8" data-icon="format_quote">format_quote</span>
              <p className="font-headline-md text-headline-md mb-8 relative z-10 italic">"The Elowen table is the centerpiece of our home. You can feel the quality in the weight of the wood and the smoothness of the finish. Truly exceptional."</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="Sarah J." className="w-full h-full object-cover" data-alt="A professional headshot of a woman in her 30s with a warm, authentic smile, set against a blurred indoor home background with soft, natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLOaat_pIdkVC6BYaGRr7t6h5wEbbX3tQrROgVaXS02i-zGPzzfCcRb4F9Bl5AL4L4ASSkFOiV-4PPCJK70zbkog3bpxjpx6_nygd2aEdgradyIHKua57ebXJ7rQaKUOteOw4-lj_--Ja3Xje_BqEwXchAS1uOO-S2Sdy84Ar9qLD0gbcCj5LcC7uWK8XeYddvFiEzcPzl7JtjBS7yuanuwIdTiEky28n5osmJk3SMd03Y07T5HYnLYLwJ6XX2cS0r-oFESemD4XKo"/>
                </div>
                <div>
                  <p className="font-body-md font-semibold text-primary">Sarah Jenkins</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Interior Designer, NYC</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-sm relative">
              <span className="material-symbols-outlined text-5xl text-primary-fixed opacity-20 absolute top-8 left-8" data-icon="format_quote">format_quote</span>
              <p className="font-headline-md text-headline-md mb-8 relative z-10 italic">"Finally, a furniture brand that understands both aesthetics and durability. My Nordic chairs look as good as the day they arrived."</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="Marc A." className="w-full h-full object-cover" data-alt="A professional headshot of a man in his late 30s with a clean-cut appearance and a friendly, confident expression, photographed in a bright, modern studio setting with soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tfQExAsY03xHSxyIwzrX5BfGJPBPkP63zpanZVSCoOG85Rp8goqKL88IAq-wbROiVJJMagxk1MeThC2mX2XVMYnv2vqXEYIoGSiSnRtStVLYn_sR5JbxvCSHSrg0dvjyMR9FFJ7vVemr15nQpAQFvByQZ15KOELjwaLobGhVVj6o4JDY97Z5ToRbFYdvqfsHgpvYE52f_Y8uAJMSrkelMGrYCqWQ6pwtmx__d5b8uHRcJrk9e-aezPkneM7pmuTZmSQvSwdSPK_i"/>
                </div>
                <div>
                  <p className="font-body-md font-semibold text-primary">Marc Anderson</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Architect, Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-stone-200 dark:border-zinc-800 mt-20 bg-stone-50 dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="font-serif text-lg text-zinc-800 dark:text-zinc-200">LUMIÈRE</div>
            <p className="font-sans text-xs tracking-wide text-stone-500 dark:text-stone-400">© 2024 Lumière Furniture. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Sustainability</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Material Care</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Shipping &amp; Returns</a>
            <a className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">Privacy Policy</a>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm" data-icon="facebook">social_leaderboard</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm" data-icon="photo_camera">photo_camera</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;