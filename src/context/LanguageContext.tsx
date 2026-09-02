import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  /**
   * Bengali is deliberately optional: per the PRD, English and Hindi are
   * complete and Bengali is partial. Where a Bengali string is missing the
   * fallback is English, never Hindi — a Bengali reader is far more likely to
   * read English than Devanagari.
   */
  t: (en: string, hi: string, bn?: string) => string;
  /** Same resolution rule, for pre-translated data objects. */
  pick: <T>(value: { en: T; hi: T; bn?: T }) => T;
}

export const LANGUAGES: { code: Language; short: string; full: string }[] = [
  { code: 'en', short: 'EN', full: 'English' },
  { code: 'hi', short: 'हिं', full: 'हिन्दी' },
  { code: 'bn', short: 'বাং', full: 'বাংলা' },
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Keep the document language in step with the toggle, so assistive tech and
  // search engines read the page in the right language.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (en: string, hi: string, bn?: string) => {
    if (language === 'hi') return hi;
    if (language === 'bn') return bn ?? en;
    return en;
  };

  const pick = <T,>(value: { en: T; hi: T; bn?: T }): T => {
    if (language === 'hi') return value.hi;
    if (language === 'bn') return value.bn ?? value.en;
    return value.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
