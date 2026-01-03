"use client";

import {
  Check,
  Sparkles,
  MessageSquare,
  Calendar,
  CreditCard,
  Plus,
} from "lucide-react";
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

        {/* Base Package - Featured */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="card border-2 border-accent-500/30 relative overflow-hidden">
            {/* Featured Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
              {t("pricing.base.badge")}
            </div>

            <div className="relative z-10 p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: Package Info */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Sparkles size={24} className="text-accent-400" />
                    <h3 className="text-3xl font-bold text-white tracking-tight">
                      {t("pricing.base.title")}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black text-white">
                      {t("pricing.base.price")}
                    </span>
                  </div>
                  <p className="text-slate-300 font-light mb-6">
                    {t("pricing.base.desc")}
                  </p>
                  <p className="text-sm text-slate-400 font-light">
                    {t("pricing.payment.note")}
                  </p>
                </div>

                {/* Right: Features Included */}
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-4 text-lg">
                    {t("pricing.base.included")}
                  </h4>
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-lg bg-accent-500/20 mt-0.5">
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
            </div>
          </div>
        </div>

        {/* Pro Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t("pricing.addons.title")}
            </h3>
            <p className="text-slate-400 font-light">
              {t("pricing.addons.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Smart Scheduling Add-on */}
            <div className="relative group">
              {/* Luxury glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/30 via-secondary-500/30 to-accent-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-accent-500/10 via-transparent to-secondary-500/10 backdrop-blur-xl rounded-3xl border-2 border-accent-500/30 p-8 hover:border-accent-500/50 transition-all duration-500 hover:scale-[1.03] transform">
                {/* Premium badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-accent-500 to-secondary-500 text-white text-xs font-black px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg shadow-accent-500/50">
                    <Plus size={14} strokeWidth={3} />
                    {t("pricing.addon.badge")}
                  </div>
                </div>

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-secondary-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    {/* Icon with glow */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-2xl mb-4 shadow-lg shadow-accent-500/30 group-hover:shadow-accent-500/50 transition-shadow duration-500">
                      <Calendar
                        size={24}
                        className="text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                      {t("pricing.scheduling.title")}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-black bg-gradient-to-r from-accent-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                        {t("pricing.scheduling.price")}
                      </span>
                      <span className="text-slate-400 text-sm font-semibold">
                        {t("pricing.addon.onetime")}
                      </span>
                    </div>

                    <p className="text-slate-300 font-light leading-relaxed">
                      {t("pricing.scheduling.desc")}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-gradient-to-br from-accent-500 to-secondary-500 flex items-center justify-center mt-0.5">
                          <Check
                            className="text-white"
                            size={14}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-slate-200 font-light text-sm leading-relaxed">
                          {t(`pricing.scheduling.feature${i}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Management Add-on */}
            <div className="relative group">
              {/* Luxury glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/30 via-accent-500/30 to-secondary-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

              <div className="relative bg-gradient-to-br from-secondary-500/10 via-transparent to-accent-500/10 backdrop-blur-xl rounded-3xl border-2 border-secondary-500/30 p-8 hover:border-secondary-500/50 transition-all duration-500 hover:scale-[1.03] transform">
                {/* Premium badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-secondary-500 to-accent-500 text-white text-xs font-black px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg shadow-secondary-500/50">
                    <Plus size={14} strokeWidth={3} />
                    {t("pricing.addon.badge")}
                  </div>
                </div>

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-accent-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    {/* Icon with glow */}
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl mb-4 shadow-lg shadow-secondary-500/30 group-hover:shadow-secondary-500/50 transition-shadow duration-500">
                      <CreditCard
                        size={24}
                        className="text-white"
                        strokeWidth={2.5}
                      />
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight mb-3 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                      {t("pricing.payment.title")}
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-black bg-gradient-to-r from-secondary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent">
                        {t("pricing.payment.price")}
                      </span>
                      <span className="text-slate-400 text-sm font-semibold">
                        {t("pricing.addon.onetime")}
                      </span>
                    </div>

                    <p className="text-slate-300 font-light leading-relaxed">
                      {t("pricing.payment.desc")}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center mt-0.5">
                          <Check
                            className="text-white"
                            size={14}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-slate-200 font-light text-sm leading-relaxed">
                          {t(`pricing.payment.feature${i}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Support */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card border border-secondary-500/20">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <MessageSquare size={24} className="text-secondary-400" />
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {t("pricing.maintenance.title")}
                    </h3>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-black text-white">
                      {t("pricing.maintenance.price")}
                    </span>
                  </div>
                  <p className="text-slate-400 font-light">
                    {t("pricing.maintenance.desc")}
                  </p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="p-1 rounded-lg bg-secondary-500/20 mt-0.5">
                          <Check className="text-secondary-400" size={16} />
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
          </div>
        </div>

        {/* Custom Pricing Note */}
        <div className="text-center">
          <div className="inline-block glass px-8 py-6 rounded-2xl border border-accent-500/20 max-w-3xl">
            <div className="flex items-start gap-4">
              <MessageSquare
                className="text-accent-400 flex-shrink-0 mt-1"
                size={24}
              />
              <div className="text-left">
                <p className="text-slate-300 font-light leading-relaxed">
                  {t("pricing.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
