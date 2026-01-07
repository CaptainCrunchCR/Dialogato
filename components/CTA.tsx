"use client";

import { Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

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
