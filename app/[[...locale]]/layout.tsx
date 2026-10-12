import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";
import {
  generateMetadata as genMeta,
  generateStructuredData,
  getLangCode,
} from "@/lib/metadata";
import { Locale, defaultLocale, locales } from "@/lib/i18n";
import { dictionaries } from "@/lib/dictionaries";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

type Params = { locale?: string[] };

const localeFromParams = (params: Params) =>
  (params.locale?.[0] ?? defaultLocale) as Locale;

// Build "/" (Spanish), "/en" and "/zh"; any other path is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale === defaultLocale ? [] : [locale],
  }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  return genMeta(localeFromParams(params));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const locale = localeFromParams(params);
  const structuredData = generateStructuredData(locale);
  const langCode = getLangCode(locale);

  return (
    <html lang={langCode} className="scroll-smooth">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.service),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />
        {/* Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="gdqe5djkfbjao8bmtq4p0wozb6efe8"
        />

        <meta name="theme-color" content="#0f172a" />

        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <LanguageProvider locale={locale} translations={dictionaries[locale]}>
          <Navbar />
          {children}
          <FloatingWhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
