import { Metadata } from "next";
import { Locale } from "./i18n";

interface MetadataTranslations {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  schemaDescription: string;
  schemaPrice: string;
  schemaCurrency: string;
}

// Metadata translations for each locale
const metadataTranslations: Record<Locale, MetadataTranslations> = {
  en: {
    title:
      "Dialogato - Custom Conversational Systems for Messaging Platforms | WhatsApp Business & More",
    description:
      "Professional conversational system engineering for messaging platforms. Specialized in WhatsApp Business, with support for Telegram, Messenger, and SMS. Custom-designed solutions that qualify leads and handle customer interactions with precision. Built by software engineers, not templates.",
    keywords:
      "conversational systems, WhatsApp Business automation, custom AI implementation, messaging platform integration, Telegram automation, Messenger bots, SMS automation, lead qualification system, conversational system engineering, custom business automation, professional AI development",
    ogTitle:
      "Dialogato - Professional Conversational Systems for Messaging Platforms",
    ogDescription:
      "Custom-engineered conversational systems for messaging platforms. Specialized in WhatsApp Business, also supporting Telegram, Messenger, and SMS. Professional implementation designed for your specific operational needs. Built and maintained by software engineers.",
    twitterTitle: "Dialogato - Custom Conversational Systems for Messaging",
    twitterDescription:
      "Professional conversational system engineering. Specialized in WhatsApp Business, supporting multiple messaging platforms. Custom implementation, not templates.",
    schemaDescription:
      "Professional conversational system engineering for messaging platforms. Specialized in WhatsApp Business with multi-platform support. Custom-designed solutions built and maintained by software engineers for operational reliability.",
    schemaPrice: "1400",
    schemaCurrency: "USD",
  },
  es: {
    title:
      "Dialogato - Sistemas Conversacionales Personalizados para Plataformas de Mensajería | WhatsApp Business y Más",
    description:
      "Ingeniería profesional de sistemas conversacionales para plataformas de mensajería. Especializados en WhatsApp Business, con soporte para Telegram, Messenger y SMS. Soluciones personalizadas que califican leads y gestionan interacciones con precisión. Construidos por ingenieros de software, no plantillas.",
    keywords:
      "sistemas conversacionales, automatización WhatsApp Business, implementación IA personalizada, integración plataformas mensajería, automatización Telegram, bots Messenger, automatización SMS, sistema calificación leads, ingeniería sistemas conversacionales, automatización empresarial personalizada, desarrollo IA profesional",
    ogTitle:
      "Dialogato - Sistemas Conversacionales Profesionales para Plataformas de Mensajería",
    ogDescription:
      "Sistemas conversacionales diseñados a medida para plataformas de mensajería. Especializados en WhatsApp Business, también soportamos Telegram, Messenger y SMS. Implementación profesional adaptada a tus necesidades operacionales específicas. Construidos y mantenidos por ingenieros de software.",
    twitterTitle:
      "Dialogato - Sistemas Conversacionales Personalizados para Mensajería",
    twitterDescription:
      "Ingeniería profesional de sistemas conversacionales. Especializados en WhatsApp Business, soportando múltiples plataformas. Implementación personalizada, no plantillas.",
    schemaDescription:
      "Ingeniería profesional de sistemas conversacionales para plataformas de mensajería. Especializados en WhatsApp Business con soporte multiplataforma. Soluciones diseñadas a medida, construidas y mantenidas por ingenieros de software para confiabilidad operacional.",
    schemaPrice: "700000",
    schemaCurrency: "CRC",
  },
  zh: {
    title: "Dialogato - 消息平台定制对话系统 | WhatsApp Business专业服务",
    description:
      "消息平台专业对话系统工程。专注于WhatsApp Business，支持Telegram、Messenger和SMS。定制设计的解决方案，精准筛选潜在客户并处理客户互动。由软件工程师构建，非模板。",
    keywords:
      "对话系统, WhatsApp Business自动化, 定制AI实施, 消息平台集成, Telegram自动化, Messenger机器人, SMS自动化, 潜在客户筛选系统, 对话系统工程, 定制业务自动化, 专业AI开发",
    ogTitle: "Dialogato - 消息平台专业对话系统",
    ogDescription:
      "为消息平台定制工程的对话系统。专注于WhatsApp Business，也支持Telegram、Messenger和SMS。根据您的具体运营需求进行专业实施。由软件工程师构建和维护。",
    twitterTitle: "Dialogato - 消息平台定制对话系统",
    twitterDescription:
      "专业对话系统工程。专注于WhatsApp Business，支持多平台。定制实施，非模板。",
    schemaDescription:
      "消息平台专业对话系统工程。专注于WhatsApp Business并支持多平台。由软件工程师构建和维护的定制设计解决方案，确保运营可靠性。",
    schemaPrice: "9999",
    schemaCurrency: "CNY",
  },
};

// Language code mapping for HTML lang attribute and hreflang
const langCodes: Record<Locale, string> = {
  en: "en-US",
  es: "es-CR",
  zh: "zh-CN",
};

export function generateMetadata(locale: Locale = "es"): Metadata {
  const meta = metadataTranslations[locale];
  const langCode = langCodes[locale];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
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
        "en-US": "/",
        "es-CR": "/",
        "zh-CN": "/",
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: "https://dialogato.com",
      siteName: "Dialogato",
      locale: langCode,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
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
  };
}

export function generateStructuredData(locale: Locale = "es") {
  const meta = metadataTranslations[locale];

  return {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Dialogato",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: meta.schemaPrice,
        priceCurrency: meta.schemaCurrency,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "47",
      },
      description: meta.schemaDescription,
    },
    organization: {
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
