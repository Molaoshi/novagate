import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Language } from './translations';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyTranslations = any;

interface I18nContextType {
  lang: Language;
  t: AnyTranslations;
  setLang: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
  dir: 'ltr',
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem('nova-gate-lang');
    return (stored as Language) || 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const t = translations[lang];

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('nova-gate-lang', newLang);
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.classList.remove('lang-en', 'lang-zh', 'lang-ar');
    document.body.classList.add(`lang-${lang}`);
  }, [lang, dir]);

  return (
    <I18nContext.Provider value={{ lang, t, setLang, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
