"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, Translations, parseProperties, interpolate } from "@/lib/i18n";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale | null>(null);
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  // Set initial locale on mount - defaults to Spanish for LATAM market
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (
      savedLocale &&
      (savedLocale === "en" || savedLocale === "es" || savedLocale === "zh")
    ) {
      setLocaleState(savedLocale);
    } else {
      // Default to Spanish for LATAM market
      setLocaleState("es");
      localStorage.setItem("locale", "es");
    }
  }, []);

  // Load translations when locale changes
  useEffect(() => {
    if (!locale) return;

    async function loadTranslations() {
      setIsLoading(true);
      try {
        const response = await fetch(`/locales/${locale}.properties`);
        const content = await response.text();
        const parsed = parseProperties(content);
        setTranslations(parsed);
      } catch (error) {
        console.error("Failed to load translations:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadTranslations();
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    const translation = translations[key] || key;

    if (params) {
      return interpolate(translation, params);
    }

    return translation;
  };

  // Don't render children until locale is set and translations are loaded
  if (!locale || isLoading) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{ locale: locale as Locale, setLocale, t, isLoading }}
    >
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
