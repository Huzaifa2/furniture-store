import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';

const FALLBACK_MESSAGES = [
  'Complimentary white-glove delivery worldwide',
  'Spring Edit · 15% off the Heritage Collection with code SPRING15',
  'Free 30-day returns, in-home pickup included',
  'Hand-built in Roskilde · 4–6 week lead time',
  '10-year structural warranty on every piece',
  'New: The Atelier Collection — limited release this season',
  'Book a private showroom visit by appointment',
];

const TICKER_BY_LANG = {
  es: [
    'Entrega premium gratuita en todo el mundo',
    'Edición Primavera · 15% de descuento con el código SPRING15',
    'Devoluciones gratuitas de 30 días',
    'Hecho a mano en Roskilde · 4-6 semanas de entrega',
    'Garantía estructural de 10 años en cada pieza',
    'Nuevo: Colección Atelier — edición limitada',
    'Reserve una visita privada al showroom',
  ],
  fr: [
    'Livraison gants blancs gratuite dans le monde entier',
    'Édition Printemps · -15% avec le code SPRING15',
    'Retours gratuits sous 30 jours',
    'Fait main à Roskilde · 4-6 semaines de délai',
    'Garantie structurelle de 10 ans sur chaque pièce',
    'Nouveau : Collection Atelier — édition limitée',
    'Réservez une visite privée du showroom',
  ],
  de: [
    'Kostenfreie Premium-Lieferung weltweit',
    'Frühlingsedition · 15% Rabatt mit Code SPRING15',
    'Kostenlose 30-Tage-Rückgabe',
    'Handgefertigt in Roskilde · 4-6 Wochen Lieferzeit',
    '10 Jahre Strukturgarantie auf jedes Stück',
    'Neu: Die Atelier-Kollektion — limitierte Edition',
    'Privaten Showroom-Besuch buchen',
  ],
  it: [
    'Consegna premium gratuita in tutto il mondo',
    'Edizione Primavera · 15% di sconto con codice SPRING15',
    'Resi gratuiti entro 30 giorni',
    'Fatto a mano a Roskilde · 4-6 settimane di consegna',
    'Garanzia strutturale di 10 anni su ogni pezzo',
    'Novità: Collezione Atelier — edizione limitata',
    'Prenota una visita privata allo showroom',
  ],
  pt: [
    'Entrega premium gratuita em todo o mundo',
    'Edição Primavera · 15% de desconto com código SPRING15',
    'Devoluções gratuitas em 30 dias',
    'Feito à mão em Roskilde · 4-6 semanas',
    'Garantia estrutural de 10 anos em cada peça',
    'Novo: Coleção Atelier — edição limitada',
    'Marque uma visita privada ao showroom',
  ],
  nl: [
    'Gratis premium levering wereldwijd',
    'Lente-editie · 15% korting met code SPRING15',
    'Gratis retourneren binnen 30 dagen',
    'Met de hand gemaakt in Roskilde · 4-6 weken levertijd',
    '10 jaar structuurgarantie op elk stuk',
    'Nieuw: De Atelier Collectie — beperkte oplage',
    'Boek een privé showroom-bezoek',
  ],
  pl: [
    'Bezpłatna dostawa premium na całym świecie',
    'Edycja Wiosenna · 15% zniżki z kodem SPRING15',
    'Bezpłatny zwrot w ciągu 30 dni',
    'Wykonane ręcznie w Roskilde · 4-6 tygodni',
    '10-letnia gwarancja konstrukcji każdego mebla',
    'Nowość: Kolekcja Atelier — limitowana edycja',
    'Zarezerwuj prywatną wizytę w showroomie',
  ],
  sv: [
    'Kostnadsfri premium-leverans över hela världen',
    'Vårens Edit · 15% rabatt med koden SPRING15',
    'Fri retur inom 30 dagar',
    'Handgjord i Roskilde · 4-6 veckors leveranstid',
    '10 års strukturgaranti på varje möbel',
    'Nytt: Atelier-kollektionen — begränsad upplaga',
    'Boka ett privat showroombesök',
  ],
  ru: [
    'Бесплатная премиальная доставка по всему миру',
    'Весенняя Коллекция · 15% скидка по коду SPRING15',
    'Бесплатный возврат в течение 30 дней',
    'Ручная работа в Роскилле · 4-6 недель',
    '10 лет структурной гарантии на каждое изделие',
    'Новое: Коллекция Atelier — ограниченный выпуск',
    'Забронируйте приватный визит в шоурум',
  ],
};

const SaleTicker = () => {
  const { lang } = useLanguage();
  const messages = TICKER_BY_LANG[lang] || FALLBACK_MESSAGES;

  return (
    <div className="fixed top-0 inset-x-0 z-[60] bg-primary text-on-primary h-9 border-b border-zinc-800/40 select-none">
      <div className="relative w-full h-full overflow-hidden">
        <div key={lang} className="ticker-track flex items-center h-full whitespace-nowrap pr-32">
          {[...messages, ...messages].map((m, i) => (
            <span
              key={i}
              className="font-label-sm uppercase tracking-widest text-[11px] px-8 flex items-center opacity-90"
            >
              <span
                className="material-symbols-outlined text-[14px] mr-3 opacity-70"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              {m}
            </span>
          ))}
        </div>
        <div className="absolute top-0 right-0 h-full bg-primary pl-6 pr-3 flex items-center shadow-[-12px_0_16px_-4px_rgba(23,24,24,0.9)]">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default SaleTicker;
