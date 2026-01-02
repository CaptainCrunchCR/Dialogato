"use client";

import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppLogo = ({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 175.216 175.552"
    width={size}
    height={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient
        id="whatsapp-gradient"
        x1="85.915"
        x2="86.535"
        y1="32.567"
        y2="137.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#57d163" />
        <stop offset="1" stopColor="#23b33a" />
      </linearGradient>
      <filter id="whatsapp-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <path
      fill="url(#whatsapp-gradient)"
      filter="url(#whatsapp-shadow)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
    />
  </svg>
);

export default function CTA() {
  const { t } = useLanguage();
  const [isLaunching, setIsLaunching] = useState(false);

  // WhatsApp number - update with your actual number
  const whatsappNumber = "50688888888"; // Format: country code + number (no + or spaces)
  const whatsappMessage = encodeURIComponent(t("cta.whatsapp.message"));

  const handleLaunch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLaunching(true);

    // Open WhatsApp after animation
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );
      setTimeout(() => setIsLaunching(false), 1000);
    }, 1500);
  };

  return (
    <section id="cta" className="relative section-padding overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-accent-900/20 to-secondary-900/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Attention-Grabbing Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              {t("cta.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("cta.subtitle")}
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* WhatsApp Logo */}
                    <div className="relative flex-shrink-0">
                      <div className="bg-[#25D366] rounded-2xl p-4 shadow-md">
                        <WhatsAppLogo size={48} />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-semibold text-green-700">
                          {t("cta.whatsapp.online")}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                        {t("cta.whatsapp.button")}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t("cta.whatsapp.subtitle")}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <div className="bg-gray-100 rounded-full p-3 group-hover:bg-[#25D366] transition-colors duration-300">
                        <ArrowRight
                          className="text-gray-600 group-hover:text-white transition-colors duration-300"
                          size={24}
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Live Experience Message */}
          <div className="glass p-8 sm:p-10 rounded-3xl border-2 border-accent-400/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="text-yellow-400" size={32} fill="currentColor" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t("cta.experience.title")}
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              {t("cta.experience.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
