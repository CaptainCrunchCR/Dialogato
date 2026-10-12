"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Locale, Translations, interpolate } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  locale: Locale;
  translations: Translations;
  children: ReactNode;
}

// Locale comes from the URL; translations are provided by the server per page
export function LanguageProvider({
  locale,
  translations,
  children,
}: LanguageProviderProps) {
  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = translations[key] || key;

    if (params) {
      return interpolate(translation, params);
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
