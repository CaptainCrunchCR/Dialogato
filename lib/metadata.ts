import { Metadata } from "next";
import { Locale, defaultLocale, localePath, locales } from "./i18n";
import { dictionaries } from "./dictionaries";

export const siteUrl = "https://dialogato.com";

export const absoluteUrl = (path: string) => new URL(path, siteUrl).href;

// Language code mapping for the HTML lang attribute and og:locale
const langCodes: Record<Locale, string> = {
  en: "en-US",
  es: "es-CR",
  zh: "zh-CN",
};

// Open Graph expects "es_CR" rather than "es-CR"
const ogLocale = (locale: Locale) => langCodes[locale].replace("-", "_");

export function generateMetadata(locale: Locale = "es"): Metadata {
  const t = dictionaries[locale];

  return {
    title: t["meta.title"],
    description: t["meta.description"],
    keywords: t["meta.keywords"],
    authors: [{ name: "Dialogato" }],
    creator: "Dialogato",
    publisher: "Dialogato",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: localePath(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l)])),
        "x-default": localePath(defaultLocale),
      },
    },
    openGraph: {
      title: t["meta.og.title"],
      description: t["meta.og.description"],
      url: localePath(locale),
      siteName: "Dialogato",
      locale: ogLocale(locale),
      alternateLocale: locales.filter((l) => l !== locale).map(ogLocale),
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t["meta.twitter.title"],
      description: t["meta.twitter.description"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStructuredData(locale: Locale = "es") {
  const t = dictionaries[locale];

  return {
    service: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Dialogato",
      description: t["meta.schema.description"],
      url: absoluteUrl(localePath(locale)),
      provider: { "@type": "Organization", name: "Dialogato", url: siteUrl },
      offers: {
        "@type": "Offer",
        price: t["meta.schema.price"],
        priceCurrency: t["meta.schema.currency"],
        availability: "https://schema.org/InStock",
      },
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dialogato",
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+506-6262-4735",
        contactType: "Customer Service",
        areaServed: "CR",
        availableLanguage: ["Spanish", "English", "Chinese"],
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "CR",
        addressLocality: "San José",
      },
    },
  };
}

export function getLangCode(locale: Locale = "es"): string {
  return langCodes[locale];
}
