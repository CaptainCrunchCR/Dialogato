import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import {
  generateMetadata as genMeta,
  generateStructuredData,
  getLangCode,
} from "@/lib/metadata";
import type { Locale } from "@/lib/i18n";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Get default locale from browser or default to Spanish for LATAM market
function getDefaultLocale(): Locale {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && ["en", "es", "zh"].includes(saved)) {
      return saved;
    }
  }
  return "es"; // Default to Spanish for LATAM market
}

// Generate metadata with default locale (Spanish for LATAM)
export const metadata: Metadata = genMeta("es");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to Spanish for server-side rendering
  const defaultLocale: Locale = "es";
  const structuredData = generateStructuredData(defaultLocale);
  const langCode = getLangCode(defaultLocale);

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

        {/* PWA Configuration */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0f172a"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#0f172a"
        />

        {/* iOS PWA Support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Dialogato" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/icon-180x180.png"
        />

        {/* iOS Splash Screens */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone5_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphone6_splash.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphoneplus_splash.png"
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphonex_splash.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphonexr_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/iphonexsmax_splash.png"
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/ipad_splash.png"
          media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/ipadpro1_splash.png"
          media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/ipadpro2_splash.png"
          media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        />

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

        {/* Android PWA */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Microsoft */}
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta
          name="msapplication-TileImage"
          content="/icons/icon-144x144.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <FloatingWhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
