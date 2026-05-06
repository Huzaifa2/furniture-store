import React, { useEffect, useRef, useState } from 'react';
import { LANGUAGES } from '../i18n/translations';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const active = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2 py-1 rounded-md text-on-primary hover:bg-white/10 transition-colors text-[11px] uppercase tracking-widest"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{active.flag}</span>
        <span className="font-semibold">{active.code.toUpperCase()}</span>
        <span className={`material-symbols-outlined text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-72 max-h-96 overflow-y-auto bg-white text-on-surface rounded-2xl shadow-2xl shadow-zinc-900/30 border border-stone-200 py-2 z-[80] reveal"
        >
          <div className="px-4 py-2 border-b border-stone-100 sticky top-0 bg-white">
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Choose your language</span>
          </div>
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => { setLang(l.code); setOpen(false); }}
              role="option"
              aria-selected={l.code === lang}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-surface-container-low transition-colors ${
                l.code === lang ? 'bg-surface-container' : ''
              }`}
            >
              <span className="text-xl leading-none flex-shrink-0">{l.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="font-body-md text-sm text-primary truncate">{l.native}</div>
                <div className="text-xs text-stone-400 uppercase tracking-widest">{l.name} · {l.code.toUpperCase()}</div>
              </div>
              {l.code === lang && <span className="material-symbols-outlined text-base text-primary">check</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
