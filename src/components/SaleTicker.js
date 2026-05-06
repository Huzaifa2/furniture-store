import React from 'react';

const MESSAGES = [
  'Complimentary white-glove delivery worldwide',
  'Spring Edit · 15% off the Heritage Collection with code SPRING15',
  'Free 30-day returns, in-home pickup included',
  'Hand-built in Roskilde · 4–6 week lead time',
  '10-year structural warranty on every piece',
  'New: The Atelier Collection — limited release this season',
  'Book a private showroom visit by appointment',
];

const SaleTicker = () => (
  <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-on-primary h-9 overflow-hidden border-b border-zinc-800/40 select-none">
    <div className="ticker-track flex items-center h-full whitespace-nowrap">
      {[...MESSAGES, ...MESSAGES].map((m, i) => (
        <span
          key={i}
          className="font-label-sm uppercase tracking-widest text-[11px] px-8 flex items-center opacity-90"
        >
          <span className="material-symbols-outlined text-[14px] mr-3 opacity-70" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_awesome
          </span>
          {m}
        </span>
      ))}
    </div>
  </div>
);

export default SaleTicker;
