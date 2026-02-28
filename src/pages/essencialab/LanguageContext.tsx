
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('essencialab_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('essencialab_lang') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es')) {
      setLanguage(savedLang);
    } else {
      // Auto-detection logic
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        setLanguage('pt');
      } else if (browserLang.startsWith('es')) {
        setLanguage('es');
      } else if (browserLang.startsWith('en')) {
        setLanguage('en');
      } else {
        // Default to English if no match
        setLanguage('en');
      }
    }
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        return key; // Return the key if not found
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
