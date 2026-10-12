// Server-only: translations parsed at build time. Each page passes only its
// own dictionary to the client, so the other locales are never shipped.
import en from "@/locales/en.properties";
import es from "@/locales/es.properties";
import zh from "@/locales/zh.properties";
import { Locale, Translations, parseProperties } from "./i18n";

export const dictionaries: Record<Locale, Translations> = {
  en: parseProperties(en),
  es: parseProperties(es),
  zh: parseProperties(zh),
};
