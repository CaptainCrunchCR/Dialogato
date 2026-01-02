"use client";

import { Shield, Heart, CheckCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Guarantee() {
  const { t } = useLanguage();

  return (
    <section
      id="guarantee"
      className="relative section-padding overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-secondary-900/30 to-primary-950"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 backdrop-blur-xl rounded-3xl mb-8 border border-accent-400/30 shadow-glow animate-pulse-glow">
            <Shield className="text-accent-400" size={48} strokeWidth={2} />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            {t("guarantee.title")}
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
            {t("guarantee.subtitle")}
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* No Maintenance Option */}
          <div className="group card hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl border border-accent-400/30 shadow-glow">
                  <CheckCircle
                    className="text-accent-400"
                    size={32}
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t("guarantee.nomaintenance.title")}
                </h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t("guarantee.nomaintenance.desc")}
              </p>
            </div>
          </div>

          {/* With Maintenance Option */}
          <div className="group card hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 rounded-2xl border border-secondary-400/30 shadow-glow-accent">
                  <Sparkles
                    className="text-secondary-400"
                    size={32}
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {t("guarantee.withmaintenance.title")}
                </h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t("guarantee.withmaintenance.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Trust Message - Featured */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-xl"></div>
          <div className="relative glass p-10 sm:p-12 rounded-3xl border-2 border-accent-400/30 shadow-neon">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-400 rounded-full blur-2xl opacity-50 animate-pulse-glow"></div>
                <Heart
                  className="relative text-accent-400"
                  size={56}
                  strokeWidth={2}
                  fill="currentColor"
                />
              </div>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 leading-tight">
              {t("guarantee.trust")}
            </p>
            <p className="text-xl sm:text-2xl text-center text-slate-300 leading-relaxed">
              {t("guarantee.goal")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
