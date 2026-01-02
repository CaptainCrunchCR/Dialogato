"use client";

import { useLanguage } from "@/contexts/LanguageContext";

// Original Brand Logo Components
const WhatsAppLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const MessengerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z" />
  </svg>
);

const iOSSMSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="12" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
  </svg>
);

export default function Platforms() {
  const { t } = useLanguage();

  const platforms = [
    {
      LogoComponent: WhatsAppLogo,
      nameKey: "platforms.whatsapp.name",
      descKey: "platforms.whatsapp.desc",
      color: "from-green-500 to-green-600",
      hoverColor: "group-hover:from-green-400 group-hover:to-green-500",
    },
    {
      LogoComponent: TelegramLogo,
      nameKey: "platforms.telegram.name",
      descKey: "platforms.telegram.desc",
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:from-blue-400 group-hover:to-blue-500",
    },
    {
      LogoComponent: MessengerLogo,
      nameKey: "platforms.messenger.name",
      descKey: "platforms.messenger.desc",
      color: "from-blue-600 to-purple-600",
      hoverColor: "group-hover:from-blue-500 group-hover:to-purple-500",
    },
    {
      LogoComponent: iOSSMSLogo,
      nameKey: "platforms.sms.name",
      descKey: "platforms.sms.desc",
      color: "from-green-500 to-emerald-600",
      hoverColor: "group-hover:from-green-400 group-hover:to-emerald-500",
    },
  ];

  return (
    <section
      id="platforms"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 to-primary-900"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            {t("platforms.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            {t("platforms.subtitle")}
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {platforms.map((platform, index) => {
            const Logo = platform.LogoComponent;
            return (
              <div
                key={index}
                className="card group hover:scale-[1.02] active:scale-100 transform transition-all duration-500 text-center"
              >
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${platform.color} ${platform.hoverColor} text-white mb-4 sm:mb-6 transition-all duration-500 shadow-glow`}
                  >
                    <Logo />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
                    {t(platform.nameKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                    {t(platform.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            {t("platforms.additional")}
          </p>
        </div>
      </div>
    </section>
  );
}
