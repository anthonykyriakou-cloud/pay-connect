import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import store from 'storejs'; // Change this from 'storejs' to 'store'

const LANGUAGE_KEY = 'preferredLanguage';

export function useLanguageStore() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return store.get(LANGUAGE_KEY) || 'en';
  });

  useEffect(() => {
    if (currentLanguage !== i18n.language) {      
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  const changeLanguage = (languageCode: string) => {
    store.set(LANGUAGE_KEY, languageCode);
    setCurrentLanguage(languageCode);
    i18n.changeLanguage(languageCode);
  };

  const getStoredLanguage = () => store.get(LANGUAGE_KEY) || 'en';

  return {
    currentLanguage,
    changeLanguage,
    getStoredLanguage,
  };
}