// Utility functions for i18n
import en from "@/locales/en.properties";
import es from "@/locales/es.properties";
import zh from "@/locales/zh.properties";

export type Locale = "en" | "es" | "zh";

export interface Translations {
  [key: string]: string;
}

// Parse .properties file content
export function parseProperties(content: string): Translations {
  const translations: Translations = {};
  const lines = content.split("\n");

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    // Find the first = sign
    const equalIndex = trimmed.indexOf("=");
    if (equalIndex === -1) {
      continue;
    }

    const key = trimmed.substring(0, equalIndex).trim();
    const value = trimmed.substring(equalIndex + 1).trim();

    translations[key] = value;
  }

  return translations;
}

// Translations bundled at build time so pages render with content
export const dictionaries: Record<Locale, Translations> = {
  en: parseProperties(en),
  es: parseProperties(es),
  zh: parseProperties(zh),
};

// Replace placeholders in translation strings
export function interpolate(
  text: string,
  params: Record<string, string | number>
): string {
  let result = text;

  for (const [key, value] of Object.entries(params)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), String(value));
  }

  return result;
}
