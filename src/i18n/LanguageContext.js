import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getTranslation } from './translations';

const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: (k) => k });

const STORAGE_KEY = 'lumiere.lang';

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    const browser = (window.navigator.language || 'en').split('-')[0];
    return browser;
  });

  const setLang = useCallback((next) => {
    setLangState(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const t = useCallback((key) => getTranslation(lang, key), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
