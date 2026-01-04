"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLangCode } from "@/lib/metadata";

/**
 * Client component that dynamically updates the HTML lang attribute
 * when the user changes their language preference
 */
export default function DynamicLang() {
  const { locale } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute when locale changes
    const langCode = getLangCode(locale);
    document.documentElement.lang = langCode;
  }, [locale]);

  return null;
}
