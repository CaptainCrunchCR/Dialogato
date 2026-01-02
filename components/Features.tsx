"use client";

import {
  MessageSquare,
  CreditCard,
  Filter,
  Calendar,
  Settings,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Filter,
      titleKey: "features.leads.title",
      descKey: "features.leads.desc",
    },
    {
      icon: MessageSquare,
      titleKey: "features.conversation.title",
      descKey: "features.conversation.desc",
    },
    {
      icon: Calendar,
      titleKey: "features.scheduling.title",
      descKey: "features.scheduling.desc",
    },
    {
      icon: Settings,
      titleKey: "features.custom.title",
      descKey: "features.custom.desc",
    },
    {
      icon: CreditCard,
      titleKey: "features.payment.title",
      descKey: "features.payment.desc",
    },
    {
      icon: Zap,
      titleKey: "features.multilingual.title",
      descKey: "features.multilingual.desc",
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            {t("features.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-light">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="card group hover:scale-[1.02] active:scale-100 transform transition-all duration-500 cursor-pointer"
              >
                <div className="relative z-10">
                  {/* Minimal Icon */}
                  <div className="inline-flex p-2.5 sm:p-3 rounded-2xl bg-white/[0.05] border border-white/[0.08] mb-4 sm:mb-6 group-hover:border-accent-500/30 transition-all duration-500">
                    <Icon
                      size={24}
                      className="sm:w-7 sm:h-7 text-slate-300 group-hover:text-accent-400 transition-colors duration-500"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                    {t(feature.titleKey)}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
