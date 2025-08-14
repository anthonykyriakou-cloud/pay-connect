import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguageStore } from '@/hooks/useLanguageStore';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (languageCode: string) => void;
  getStoredLanguage: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const languageStore = useLanguageStore();

  return (
    <LanguageContext.Provider value={languageStore}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}