"use client";

import { Check, Sparkles, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            {t("pricing.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-light">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {/* Base Implementation */}
          <div className="card group hover:scale-[1.02] active:scale-100 transform transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <Sparkles
                    size={18}
                    className="sm:w-5 sm:h-5 text-accent-400"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {t("pricing.base.title")}
                  </h3>
                </div>
                <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                    {t("pricing.base.price")}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-400 font-light">
                  {t("pricing.base.desc")}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-white/[0.05] mt-0.5">
                      <Check className="text-accent-400" size={16} />
                    </div>
                    <span className="text-slate-300 font-light text-sm">
                      {t(`pricing.base.feature${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Custom Features */}
          <div className="card group hover:scale-[1.02] transform transition-all duration-500 border-accent-500/10">
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {t("pricing.custom.title")}
                </h3>
                <p className="text-slate-400 font-light">
                  {t("pricing.custom.desc")}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-accent-500/10 mt-0.5">
                      <Check className="text-accent-400" size={16} />
                    </div>
                    <span className="text-slate-300 font-light text-sm">
                      {t(`pricing.custom.feature${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ongoing Support */}
          <div className="card group hover:scale-[1.02] transform transition-all duration-500">
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {t("pricing.maintenance.title")}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-black text-white">
                    {t("pricing.maintenance.price")}
                  </span>
                </div>
                <p className="text-slate-400 font-light">
                  {t("pricing.maintenance.desc")}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-white/[0.05] mt-0.5">
                      <Check className="text-accent-400" size={16} />
                    </div>
                    <span className="text-slate-300 font-light text-sm">
                      {t(`pricing.maintenance.feature${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Pricing Note */}
        <div className="text-center mb-8">
          <div className="inline-block glass px-8 py-6 rounded-2xl border border-accent-500/20 max-w-3xl">
            <div className="flex items-start gap-4">
              <MessageSquare
                className="text-accent-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div className="text-left">
                <p className="text-slate-300 font-light text-lg leading-relaxed">
                  {t("pricing.note")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="text-center">
          <p className="text-slate-400 font-light">
            {t("pricing.payment.note")}
          </p>
        </div>
      </div>
    </section>
  );
}
