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

// Generate metadata with default locale (Spanish for LATAM)
export const metadata: Metadata = genMeta("es");

// Build "/" (Spanish), "/en" and "/zh"; any other path is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale === defaultLocale ? [] : [locale],
  }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string[] };
}) {
  const locale = (params.locale?.[0] ?? defaultLocale) as Locale;
  const structuredData = generateStructuredData(locale);
  const langCode = getLangCode(locale);

  return (
    <html lang={langCode} className="scroll-smooth">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.software),
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

        {/* Standard Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-16x16.png"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
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
