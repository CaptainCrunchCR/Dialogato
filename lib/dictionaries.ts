// Server-only: each page passes only its own dictionary to the client,
// so the other locales are never shipped.
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import zh from "@/locales/zh.json";
import type { Locale } from "./i18n";

// Spanish is the reference: a key missing in any locale fails type-checking,
// which fails `next build`
type Dictionary = Record<keyof typeof es, string>;

export const dictionaries = { es, en, zh } satisfies Record<Locale, Dictionary>;
