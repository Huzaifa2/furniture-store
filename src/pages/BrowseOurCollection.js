import React from 'react';
import { Link } from 'react-router-dom';

const BrowseOurCollection = () => (
  <div className="font-body-md text-on-surface">
    {/* TopNavBar */}
    <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 dark:border-zinc-800/60 bg-stone-50/95 dark:bg-zinc-950/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
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
      {/* Breadcrumbs & Title */}
      <div className="mb-12">
        <nav className="flex items-center space-x-2 text-label-sm text-on-surface-variant uppercase mb-4">
          <Link to="/">Home</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">Collections</span>
        </nav>
        <h1 className="font-display-xl text-display-xl text-primary mb-2">Our Essentials</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Refined objects for domestic permanence. Every piece is crafted with structural integrity and an unwavering commitment to material truth.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-gutter">
            {/* Product Cards */}
            {[
              { title: 'Atelier Dining Table', price: '$1,850', desc: 'A foundational piece for the modern dining room, carved from sustainably sourced European White Oak.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwsPQEjXXjE0oMejgic5rIItVy0KxqTBJmNLZibBmIE6OH23eqOyyO1pM1EkOY05YPpqxX4iZa-9CclPYJmApUHqW4DCinj2OSXU9Sa5noLjHd26r5MJW9ojtylToawhUZt7K350xWfZm-8Qf1RR05dk7ho9iphL7oCPqNY6mA5yIwZFf2GpoVtsOb-sd1ybHaBHgoDW-br3Q_BAoo5PJHXHY3ivbz_6_sf09E4TePCI02pbqlfa0qwVF8gx89GUbm9mQwsUbChKF3' },
              { title: 'Søren Lounge Chair', price: '$920', desc: 'Hand-finished walnut paired with organic linen, designed for lingering conversations.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMjpVyQmSbcs-0Pdr3X_hWGnvsaNmSFkHfMf-UszV_Re0PLmvfkka43B3Ndjgq9wF6FMulZZtNRJt249uqTlVoYxR5UaTe35dq8MhhnhscFy2ew3YPaevdEICuC6E7GNPM3Rjvp8t1R_ih56Bx2X_WEHfwoGphDDAby5Rj9XzJUYcBNz45TO3U09IX6WiZsFkQb8T9B5Cd5u6Lf4q6HYIHI1dWO6PvKc5-A6f_e10gKbrHdbdAOrWoTZKssOJ2Zxui9PubqfawyAkJ' },
              { title: 'Modulus Work Desk', price: '$1,400', desc: 'An industrial silhouette refined for the home office, featuring integrated cable management.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHq8BLK_eYXTtMHB8-vv01dNr_wuH3pwou5F0uat3EIsKbx9oAV1i1RejX9BbZ0JaIQ0jjlBsUYm-wq4WYZlk69GGC2PimN1YgUJxceHrLSs7yng80_Z-fjN2p6HmB-Ut8bhqabS5R-hsLkyzK0Gv3CCbKJQKkSxNzVBtUsvVT5uPcgeke0iIAkxCMJ3OX0DJDmPDGja2WBbx6Eip6tDy16QEoRqA15Q0qIEc5Zs6CcEb3jNTMmBlJ0jSB6xXXIBETngyGEq7KRwaM' },
              { title: 'Cane Back Side Chair', price: '$450', desc: 'Lightweight yet durable, these chairs celebrate traditional weaving techniques in a modern form.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQcj6cm0kkivZi6lV6_FAI_-bWEcieBPFfaeFNLo9AFQlx-362o5BHZySdzNoQX7fm-UrFSPN0CIcdVi81EqsZWprRsCTnx98LScaW8YVBJXbHLEsK76thwfPa-fwznlVyBHIP0Ow5fPxLF0Y5ejU77zlU1_DuRjVV9be6EYrl3A5VY8GZwVpB5DGYpHBrLow19I2YnrLhNP8Y5kluavNi73sljdTaKbGGH08pED3-6j0Cko_4Dq69kQHIcb8Hljxsf1niZC1Imp67' },
              { title: 'Monolith Coffee Table', price: '$2,100', desc: 'A sculptural statement carved from a single block of Italian travertine marble.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlCy1l_ErFdJuWvYv0iOQfvB1va4Dk5PrW0ZVXglc40R__uue2Ps5_3DDvSVBUGB5UAi7xP8Gc0P9mM5ZUKhtFYs73IR7OHm9TWEP_q0jbTwWomheiDTJABOH49LbPRFFPILF96SVuXtLZbtS1WnP968bDgqhovqped4M6kBEuh9WI_DQNBFEDO3neKxmi1DqHtFnYuAloULoF7uWyLLxW4cEC177SnXizW-XwLC5ssjyJS7G0TURyMP47xLGEUACFmUsMZsLj7-zO' },
              { title: 'Apex Bar Stool', price: '$380', desc: 'Elevated seating featuring top-grain leather and precision-welded steel frames.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8NeAdB29Ou3TQPk14dVYgFaGXF8hhJeMBuWG6QOIOFkivfr74n-kxC2-HU61_TkosGSfmCzX58dCkxWZZbWyoGybjMPoKiXEwiOQzKUFKu054gTSZMqmSUtWin95jUcgjBRMy_dc2_ogwHPpcsgAS6fQYn3Fhi1sJ2fKdKV0ruhHjkhu4f9rF2c8ay7UoM_a52V8q7GAasacNzxm3eIVB7EG_wi-lgbH2k2pZvIjHXyr5YBSiX4VY1LiWpPvxiWapVgYzPewsxlsF' },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative mb-6 rounded-lg shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <img alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={product.img} />
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-8 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 font-label-sm uppercase tracking-widest shadow-xl">
                    View Details
                  </button>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline-md text-headline-md text-primary">{product.title}</h3>
                    <span className="font-body-md font-semibold">{product.price}</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-sm line-clamp-2">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>

    {/* Footer */}
    <footer className="w-full border-t border-stone-200 mt-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <div className="font-serif text-lg text-zinc-800">LUMIÈRE</div>
          <p className="font-sans text-xs tracking-wide text-stone-500">© 2024 Lumière Furniture. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Sustainability</a>
          <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Material Care</a>
          <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a>
          <a className="font-sans text-xs tracking-wide text-stone-400 hover:text-zinc-900 transition-colors underline underline-offset-4 decoration-stone-200" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
);

export default BrowseOurCollection;
