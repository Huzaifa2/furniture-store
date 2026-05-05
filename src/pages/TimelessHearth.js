import React from 'react';
import { Link } from 'react-router-dom';

const HERO_IMG = 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80';
const ATELIER_IMG = 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80';
const MATERIALS_IMG = 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80';
const ARTISAN_IMG = 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80';

const PRINCIPLES = [
  {
    icon: 'forest',
    title: 'Ethically sourced timber',
    body: 'Every plank is FSC-certified, traced from forest to finish. We work only with mills that practice selective harvesting and replantation.',
  },
  {
    icon: 'handyman',
    title: 'Hand joinery, no shortcuts',
    body: 'Mortise-and-tenon, dovetails, dowel pegs — the slow joints. No screws hidden under veneer. What you see is what holds it together.',
  },
  {
    icon: 'eco',
    title: 'Plant-based finishes',
    body: 'Hard-wax oils derived from linseed and carnauba. No solvent-based polyurethane, no formaldehyde. Safer for your home and ours.',
  },
  {
    icon: 'all_inclusive',
    title: 'Made to be repaired',
    body: 'We document every joint and supply replacement parts for life. A scratch is a story; a broken leg is fixable, not landfill.',
  },
];

const TIMELINE = [
  { year: '2014', title: 'A small workshop in Copenhagen', body: 'Founders Anya Holm and Marten Vasilev open a 40 sqm shop with three borrowed planers.' },
  { year: '2017', title: 'First commission: the Elowen table', body: 'A private commission becomes our debut piece — still in production today, unchanged.' },
  { year: '2020', title: 'Atelier expansion', body: 'We move to a converted granary in Roskilde. Fifteen artisans join the bench.' },
  { year: '2024', title: 'Lumière online', body: 'We open direct-to-customer for the first time, shipping worldwide with white-glove delivery.' },
];

const FOUNDERS = [
  {
    name: 'Anya Holm',
    role: 'Co-founder, Head of Design',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=3&w=400&h=400&q=80',
    bio: 'Trained at the Royal Danish Academy. Believes a chair is a sentence the room finishes.',
  },
  {
    name: 'Marten Vasilev',
    role: 'Co-founder, Master Joiner',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=400&h=400&q=80',
    bio: 'Third-generation cabinetmaker. Has never owned a piece of fast furniture.',
  },
];

const TimelessHearth = () => (
  <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
    {/* Top Nav */}
    <header className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/95 backdrop-blur-sm shadow-[0_4px_20px_-5px_rgba(44,44,44,0.05)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="text-2xl font-serif font-semibold tracking-tighter text-zinc-900">LUMIÈRE</Link>
        <div className="hidden md:flex items-center space-x-12 font-serif text-lg tracking-tight">
          <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/browse-our-collection">Living</Link>
          <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/wooden-dining-table-details">Dining</Link>
          <Link className="text-stone-500 hover:text-zinc-800 transition-opacity duration-300" to="/seller-dashboard">Office</Link>
          <Link className="text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:opacity-80 transition-opacity duration-300" to="/timeless-hearth">About</Link>
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

    {/* Hero */}
    <section className="relative w-full h-[680px] overflow-hidden flex items-end pt-20">
      <div className="absolute inset-0 z-0">
        <img src={HERO_IMG} alt="Lumière atelier in early morning light" className="w-full h-full object-cover parallax-slow fade-in" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/30 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full text-white reveal">
        <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-80 mb-4 block">About Lumière</span>
        <h1 className="font-display-xl text-display-xl mb-6 max-w-3xl leading-[1.05]">A workshop, not a warehouse.</h1>
        <p className="font-body-lg text-body-lg max-w-xl opacity-90">
          We've been making furniture by hand for ten years. Slowly, deliberately, and only as much as we can make well.
        </p>
      </div>
    </section>

    {/* Manifesto */}
    <section className="max-w-4xl mx-auto px-8 py-section-gap text-center">
      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6 block">Our Belief</span>
      <h2 className="font-display-xl text-display-xl text-primary mb-10 leading-[1.1]">
        Furniture should outlast the trend that made you buy it.
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        We started Lumière because too much of what we saw — even at the high end — was disposable in disguise. Veneered particleboard called "solid." Lacquer that yellowed in five years. Joints held by glue alone.
      </p>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        So we went the other direction. We make fewer pieces, from real wood, with the joints our grandfathers would have used. The kind of furniture you pass down, not throw out.
      </p>
    </section>

    {/* Atelier image strip */}
    <section className="max-w-7xl mx-auto px-8 pb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-md md:col-span-2 row-span-2">
          <img src={ATELIER_IMG} alt="Lumière atelier with timber drying racks" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden rounded-2xl shadow-md">
          <img src={MATERIALS_IMG} alt="European white oak grain" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
        </div>
        <div className="aspect-square overflow-hidden rounded-2xl shadow-md">
          <img src={ARTISAN_IMG} alt="Master joiner shaping a tenon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">How We Work</span>
          <h2 className="font-headline-lg text-headline-lg">Four principles, no exceptions.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500">
              <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-secondary">{p.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3 leading-tight">{p.title}</h3>
              <p className="font-body-md text-on-surface-variant">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="max-w-5xl mx-auto px-8 py-section-gap">
      <div className="text-center mb-16">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Our Timeline</span>
        <h2 className="font-headline-lg text-headline-lg">Ten years, one bench at a time.</h2>
      </div>
      <ol className="relative border-l-2 border-stone-200 ml-4">
        {TIMELINE.map((t, idx) => (
          <li key={t.year} className={`relative pl-10 ${idx === TIMELINE.length - 1 ? '' : 'pb-12'}`}>
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary ring-4 ring-stone-50"></div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1 block">{t.year}</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">{t.title}</h3>
            <p className="font-body-md text-on-surface-variant max-w-xl">{t.body}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* Founders */}
    <section className="bg-primary text-on-primary py-section-gap">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-60 mb-4 block">The Makers</span>
          <h2 className="font-headline-lg text-headline-lg">Founders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="text-center">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-white/10">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-1">{f.name}</h3>
              <p className="font-label-sm text-label-sm uppercase tracking-widest opacity-60 mb-4">{f.role}</p>
              <p className="font-body-md opacity-80 max-w-sm mx-auto italic">"{f.bio}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Numbers */}
    <section className="max-w-7xl mx-auto px-8 py-section-gap">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
        {[
          { num: '10+', label: 'Years in the workshop' },
          { num: '15', label: 'Master artisans on bench' },
          { num: '100%', label: 'FSC-certified timber' },
          { num: '2,800+', label: 'Pieces delivered' },
        ].map((s) => (
          <div key={s.label} className="bg-surface-container-low p-8 rounded-2xl">
            <div className="font-display-xl text-display-xl text-primary mb-2">{s.num}</div>
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="max-w-7xl mx-auto px-8 pb-section-gap">
      <div className="bg-secondary-container rounded-2xl p-16 text-center">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">Visit the Atelier</span>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">See the work, in person.</h2>
        <p className="font-body-lg text-body-lg text-on-secondary-fixed-variant max-w-xl mx-auto mb-10">
          Our Roskilde workshop welcomes visitors by appointment. Come watch a tenon get cut, or commission a piece in person.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/browse-our-collection" className="bg-primary text-on-primary px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
            Shop the Collection
          </Link>
          <Link to="/checkout-shipping" className="border border-primary text-primary px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">
            Book a Visit
          </Link>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="w-full border-t border-stone-200 mt-0 bg-stone-50">
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

export default TimelessHearth;
