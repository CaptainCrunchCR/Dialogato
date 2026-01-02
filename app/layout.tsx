import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Dialogato - Agentes IA para WhatsApp Business en Costa Rica | Automatización Inteligente",
  description:
    "Transforma tu negocio en Costa Rica con agentes de IA inteligentes para WhatsApp. Califica leads automáticamente, ahorra tiempo y aumenta ventas. Prueba sin riesgo.",
  keywords: [
    "WhatsApp Business Costa Rica",
    "automatización WhatsApp",
    "chatbot IA Costa Rica",
    "agentes inteligentes WhatsApp",
    "calificación de leads",
    "servicio al cliente automatizado",
    "IA conversacional",
    "chatbot para empresas",
    "automatización Costa Rica",
    "WhatsApp API Costa Rica",
  ].join(", "),
  authors: [{ name: "Dialogato" }],
  creator: "Dialogato",
  publisher: "Dialogato",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dialogato.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CR": "/es",
      "en-US": "/en",
      "zh-CN": "/zh",
    },
  },
  openGraph: {
    title: "Dialogato - Agentes IA para WhatsApp Business en Costa Rica",
    description:
      "Automatiza conversaciones, califica leads y ahorra tiempo con agentes de IA inteligentes para WhatsApp Business. Servicio especializado en Costa Rica.",
    url: "https://dialogato.com",
    siteName: "Dialogato",
    locale: "es_CR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dialogato - Agentes IA para WhatsApp Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dialogato - Agentes IA para WhatsApp Business en Costa Rica",
    description:
      "Automatiza conversaciones y califica leads con IA inteligente para WhatsApp Business.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CR" className="scroll-smooth">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Dialogato",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "CRC",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "47",
              },
              description:
                "Agentes de IA inteligentes para WhatsApp Business en Costa Rica. Automatiza conversaciones y califica leads.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dialogato",
              url: "https://dialogato.com",
              logo: "https://dialogato.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+506-8888-8888",
                contactType: "Customer Service",
                areaServed: "CR",
                availableLanguage: ["Spanish", "English"],
              },
              sameAs: [
                "https://www.linkedin.com/company/dialogato",
                "https://www.instagram.com/dialogato",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CR",
                addressLocality: "San José",
              },
            }),
          }}
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
        <link rel="icon" href="/favicon.ico" sizes="any" />

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
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
