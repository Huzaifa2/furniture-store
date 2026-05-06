import React from 'react';
import { Link } from 'react-router-dom';
import SaleTicker from './SaleTicker';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMG = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80';

const CATEGORIES = [
  {
    name: 'Living',
    tag: 'Lounge & Sofas',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Dining',
    tag: 'Tables & Seating',
    img: 'https://images.unsplash.com/photo-1615875605825-5eb9bb5d52ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Office',
    tag: 'Desks & Chairs',
    img: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=900&q=80',
  },
];

const FEATURED = [
  {
    title: 'Nordic Lounge Chair',
    sub: 'American Walnut',
    price: '$850',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=80',
    alt: 'Nordic lounge chair in walnut and ivory boucle',
  },
  {
    title: 'Elowen Dining Table',
    sub: 'White Oak',
    price: '$2,400',
    img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
    alt: 'Elowen white oak dining table',
  },
  {
    title: 'Artisanal Desk Chair',
    sub: 'Cognac Leather',
    price: '$1,100',
    img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=80',
    alt: 'Artisanal desk chair in cognac leather',
  },
  {
    title: 'Sculptural Side Table',
    sub: 'Basalt Stone',
    price: '$450',
    img: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=900&q=80',
    alt: 'Sculptural basalt stone side table',
  },
];

const STORY_IMG = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80';

const TESTIMONIAL_AVATARS = {
  sarah: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80',
  marc: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=200&h=200&q=80',
};

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="font-body-md text-body-md antialiased">
      <SaleTicker />
      {/* Top Navigation Bar */}
      <nav className="fixed top-9 w-full z-50 border-b border-stone-200/60 dark:border-zinc-800/60 bg-stone-50/95 dark:bg-zinc-950/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)] transition-all duration-300 ease-in-out h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          <div className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900 dark:text-zinc-50">LUMIÈRE</div>
          <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
            <Link className="text-zinc-900 dark:text-zinc-50 border-b-2 border-zinc-900 dark:border-zinc-50 pb-1 hover:opacity-80 transition-opacity duration-300" to="/browse-our-collection">{t('nav.living')}</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/wooden-dining-table-details">{t('nav.dining')}</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/seller-dashboard">{t('nav.office')}</Link>
            <Link className="text-stone-500 dark:text-stone-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:opacity-80 transition-opacity duration-300" to="/timeless-hearth">{t('nav.about')}</Link>
          </div>
          <div className="flex items-center space-x-6 text-zinc-800 dark:text-zinc-200">
            <Link to="/your-shopping-cart" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined">shopping_bag</span>
            </Link>
            <Link to="/login" aria-label="Account" className="hover:opacity-80 transition-opacity duration-300">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[921px] overflow-hidden flex items-center pt-[116px]">
        <div className="absolute inset-0 z-0">
          <img
            alt="Sun-drenched minimalist living room with sculptural oak dining table"
            className="w-full h-full object-cover parallax-slow fade-in"
            src={HERO_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 via-zinc-900/10 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl bg-surface/85 backdrop-blur-md p-12 rounded-2xl shadow-2xl shadow-zinc-900/10 reveal">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">{t('hero.eyebrow')}</span>
            <h1 className="font-display-xl text-display-xl text-primary mb-6">{t('hero.title.1')} <br/>{t('hero.title.2')}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/browse-our-collection" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/20 text-center">
                {t('hero.cta.shop')}
              </Link>
              <Link to="/timeless-hearth" className="border border-outline text-primary px-10 py-4 rounded-xl font-body-md font-semibold hover:bg-surface-container hover:-translate-y-0.5 transition-all duration-300 text-center">
                {t('hero.cta.explore')}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-white/80 float-slow">
          <span className="material-symbols-outlined text-base">expand_more</span>
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </header>

      {/* Benefits Section (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-8 py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-container p-10 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-500">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary">verified</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">Built for Durability</h3>
            <p className="text-on-surface-variant font-body-md">Precision-engineered with solid hardwoods and high-grade materials that age beautifully over time.</p>
          </div>
          <div className="bg-secondary-container p-10 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-500">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary">eco</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">Sustainably Crafted</h3>
            <p className="text-on-secondary-fixed-variant font-body-md">Every piece is responsibly sourced and hand-finished by master artisans using organic oils.</p>
          </div>
          <div className="bg-surface-container p-10 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-500">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <span className="material-symbols-outlined text-3xl text-secondary">local_shipping</span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-3">White Glove Delivery</h3>
            <p className="text-on-surface-variant font-body-md">Fast, secure shipping and professional assembly in your home, handled with the utmost care.</p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-8 pb-section-gap">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">Shop by Room</span>
            <h2 className="font-headline-lg text-headline-lg">Featured Categories</h2>
          </div>
          <Link to="/browse-our-collection" className="font-label-sm text-label-sm text-primary underline underline-offset-8 uppercase tracking-widest hover:text-secondary transition-colors hidden sm:inline">{t('common.browse_all')}</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to="/browse-our-collection"
              className="tilt-card group relative block overflow-hidden rounded-2xl aspect-[4/5] shadow-md hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="tilt-card-inner absolute inset-0">
                <img
                  src={cat.img}
                  alt={`${cat.name} collection — ${cat.tag.toLowerCase()}`}
                  className="tilt-card-img absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-80 mb-1 block">{cat.tag}</span>
                  <h3 className="font-headline-lg text-headline-lg">{cat.name}</h3>
                  <span className="inline-flex items-center gap-2 mt-3 text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    {t('common.discover')} <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-8 pb-section-gap">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-2 block">Curated Selection</span>
            <h2 className="font-headline-lg text-headline-lg">Signature Pieces</h2>
          </div>
          <Link to="/browse-our-collection" className="font-label-sm text-label-sm text-primary underline underline-offset-8 uppercase tracking-widest hover:text-secondary transition-colors">{t('common.explore_all')}</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {FEATURED.map((p) => (
            <Link key={p.title} to="/wooden-dining-table-details" className="tilt-card group">
              <div className="tilt-card-inner aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-surface-container-low relative shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                <img
                  alt={p.alt}
                  src={p.img}
                  className="tilt-card-img w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Save to favorites"
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
                >
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-body-lg text-body-lg font-semibold text-primary">{p.title}</h4>
                  <p className="font-body-md text-on-surface-variant">{p.sub}</p>
                </div>
                <span className="font-body-lg text-body-lg">{p.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Philosophy / Story */}
      <section className="bg-primary text-on-primary py-section-gap">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={STORY_IMG}
              alt="Master artisan hand-finishing oak in the Lumière atelier"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60 mb-4 block">Our Philosophy</span>
            <h2 className="font-display-xl text-display-xl mb-8 leading-[1.1]">Made slowly. Built to remain.</h2>
            <p className="font-body-lg text-body-lg opacity-80 mb-6 max-w-lg">
              In our atelier, every joint is hand-cut, every grain considered. We work with a single belief: that furniture should outlast its trend cycle — and ideally, the maker.
            </p>
            <p className="font-body-lg text-body-lg opacity-80 mb-10 max-w-lg">
              No shortcuts. No fast finishes. Just material truth, structural integrity, and a quiet dedication to permanence.
            </p>
            <Link to="/timeless-hearth" className="inline-flex items-center gap-3 border border-white/30 text-on-primary px-8 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:bg-white/10 hover:-translate-y-0.5 transition-all">
              Read Our Story <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
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
            <div className="bg-white p-12 rounded-2xl shadow-sm relative hover:-translate-y-1 transition-transform duration-500">
              <span className="material-symbols-outlined text-5xl text-primary-fixed opacity-20 absolute top-8 left-8">format_quote</span>
              <p className="font-headline-md text-headline-md mb-8 relative z-10 italic">"The Elowen table is the centerpiece of our home. You can feel the quality in the weight of the wood and the smoothness of the finish. Truly exceptional."</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="Sarah Jenkins" className="w-full h-full object-cover" src={TESTIMONIAL_AVATARS.sarah} loading="lazy" />
                </div>
                <div>
                  <p className="font-body-md font-semibold text-primary">Sarah Jenkins</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Interior Designer, NYC</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm relative hover:-translate-y-1 transition-transform duration-500">
              <span className="material-symbols-outlined text-5xl text-primary-fixed opacity-20 absolute top-8 left-8">format_quote</span>
              <p className="font-headline-md text-headline-md mb-8 relative z-10 italic">"Finally, a furniture brand that understands both aesthetics and durability. My Nordic chairs look as good as the day they arrived."</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="Marc Anderson" className="w-full h-full object-cover" src={TESTIMONIAL_AVATARS.marc} loading="lazy" />
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
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Sustainability</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Material Care</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Shipping &amp; Returns</button>
            <button type="button" className="font-sans text-xs tracking-wide text-stone-400 dark:text-stone-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy Policy</button>
          </div>
          <div className="flex gap-4">
            <button type="button" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:text-primary hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-sm">social_leaderboard</span>
            </button>
            <button type="button" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-stone-500 hover:text-primary hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
