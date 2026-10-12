"use client";

import { ArrowRight, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-accent-400/20 to-secondary-500/20 rounded-full blur-3xl top-1/4 right-1/4 animate-float"></div>
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-secondary-400/15 to-accent-500/15 rounded-full blur-3xl bottom-1/4 left-1/4 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Punchy Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 border border-accent-400/30 px-4 py-2 rounded-full mb-4 sm:mb-6 backdrop-blur-xl animate-rise">
            <Zap
              size={16}
              className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              fill="currentColor"
            />
            <span className="text-sm font-semibold text-accent-300">
              {t("hero.badge")}
            </span>
          </div>

          {/* Powerful Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[1.1] tracking-tight animate-rise"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-white">{t("hero.headline.part1")}</span>
            <span className="block mt-2 bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text animate-pulse-glow">
              {t("hero.headline.part2")}
            </span>
          </h1>

          {/* Short Punchy Subheadline */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-rise px-4 sm:px-0"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subheadline")}
          </p>

          {/* Single Powerful CTA */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-10 animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#cta"
              className="group relative bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 shadow-neon hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">{t("hero.cta.trial")}</span>
              <ArrowRight
                className="relative z-10 group-hover:translate-x-2 transition-transform"
                size={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </a>
          </div>

          {/* Compact Stats - Inline */}
          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center animate-rise"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="group">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text mb-1">
                {t("hero.stat1.value")}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {t("hero.stat1.label")}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text mb-1">
                {t("hero.stat2.value")}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {t("hero.stat2.label")}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text mb-1">
                {t("hero.stat3.value")}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {t("hero.stat3.label")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
