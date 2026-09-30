
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from './translations';
import { getPublico, type Publico } from '@/lib/audience';

// Mesmo critério de antes: valor ausente ou vazio conta como "não encontrado".
const lookup = (root: any, keys: string[]): any => {
  let result = root;
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      return undefined;
    }
  }
  return result;
};

// Sobreposição da variante: objetos são mesclados chave a chave; arrays,
// posição a posição (null mantém o item da base); textos são substituídos.
const mergeDeep = (base: any, override: any): any => {
  if (override === null || override === undefined) return base;
  if (Array.isArray(base) && Array.isArray(override)) {
    return base.map((item, i) => mergeDeep(item, override[i]));
  }
  const isObject = (v: any) => v && typeof v === 'object' && !Array.isArray(v);
  if (isObject(base) && isObject(override)) {
    const merged: any = { ...base };
    for (const k of Object.keys(override)) merged[k] = mergeDeep(base[k], override[k]);
    return merged;
  }
  return override;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  audience: Publico;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pt');
  // ?publico=doterra|aroma (persistido na sessão); sem parâmetro, doterra
  const [audience] = useState<Publico>(() => getPublico());

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
    const base = lookup(translations[language], keys);
    // Variante aroma: translations[lang].aroma sobrepõe só as chaves que mudam
    if (audience === 'aroma') {
      const override = lookup((translations[language] as any).aroma, keys);
      if (override !== undefined) return mergeDeep(base, override);
    }
    return base === undefined ? key : base; // Return the key if not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, audience }}>
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
