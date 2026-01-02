"use client";

import { Clock, TrendingUp, Users, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      titleKey: "benefits.time.title",
      descKey: "benefits.time.desc",
      statKey: "benefits.time.stat",
    },
    {
      icon: TrendingUp,
      titleKey: "benefits.conversion.title",
      descKey: "benefits.conversion.desc",
      statKey: "benefits.conversion.stat",
    },
    {
      icon: Users,
      titleKey: "benefits.customers.title",
      descKey: "benefits.customers.desc",
      statKey: "benefits.customers.stat",
    },
    {
      icon: Shield,
      titleKey: "benefits.scale.title",
      descKey: "benefits.scale.desc",
      statKey: "benefits.scale.stat",
    },
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("benefits.subtitle")}</p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-xl bg-primary-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t(benefit.descKey)}
                    </p>
                    <div className="inline-block px-4 py-2 bg-white rounded-lg text-primary-600 font-semibold text-sm shadow-sm">
                      {t(benefit.statKey)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
