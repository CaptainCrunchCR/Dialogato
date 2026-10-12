// Utility functions for i18n

export const locales = ["es", "en", "zh"] as const;
export type Locale = (typeof locales)[number];

// Spanish is always served at "/", other locales under "/<locale>"
export const defaultLocale: Locale = "es";

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export interface Translations {
  [key: string]: string;
}

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
