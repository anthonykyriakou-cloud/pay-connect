import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import store from 'storejs';

// Import your translation files
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  },
  fr: {
    translation: fr
  },
  de: {
    translation: de
  }
};

// Custom language detector using store.js
const customLanguageDetector = {
  name: 'customLanguageDetector',
  lookup() {
    // Check localStorage first, then fallback to browser language
    const storedLang = store.get('preferredLanguage');
    if (storedLang && resources[storedLang]) {
      return storedLang;
    }
    return undefined;
  },
  cacheUserLanguage(lng: string) {
    store.set('preferredLanguage', lng);
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['customLanguageDetector', 'navigator', 'htmlTag'],
      caches: [], // We handle caching ourselves with store.js
    }
  });

  // Add this event listener
i18n.on('languageChanged', () => {
  // Force a re-render by dispatching a custom event
  window.dispatchEvent(new Event('languageChanged'));
});


export default i18n;