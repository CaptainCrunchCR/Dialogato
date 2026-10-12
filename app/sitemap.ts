import { MetadataRoute } from "next";
import { defaultLocale, localePath, locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/metadata";

// One entry per locale, each listing every locale as an hreflang alternate
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(localePath(l))])),
    "x-default": absoluteUrl(localePath(defaultLocale)),
  };

  return locales.map((locale) => ({
    url: absoluteUrl(localePath(locale)),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
