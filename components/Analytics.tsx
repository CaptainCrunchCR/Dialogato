"use client";

import {
  BarChart3,
  PieChart,
  Activity,
  Target,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Analytics() {
  const { t } = useLanguage();

  const analyticsFeatures = [
    {
      icon: BarChart3,
      titleKey: "analytics.track.title",
      descKey: "analytics.track.desc",
    },
    {
      icon: PieChart,
      titleKey: "analytics.trends.title",
      descKey: "analytics.trends.desc",
    },
    {
      icon: Activity,
      titleKey: "analytics.bot.title",
      descKey: "analytics.bot.desc",
    },
    {
      icon: Target,
      titleKey: "analytics.roi.title",
      descKey: "analytics.roi.desc",
    },
  ];

  return (
    <section
      id="analytics"
      className="section-padding bg-gradient-to-br from-primary-600 to-blue-700 text-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              {t("analytics.title")}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t("analytics.subtitle")}
            </p>

            <div className="space-y-6">
              {analyticsFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {t(feature.titleKey)}
                      </h3>
                      <p className="text-blue-100">{t(feature.descKey)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                {/* Mock Analytics Cards */}
                <div className="bg-white rounded-xl p-6 text-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      {t("analytics.card1.label")}
                    </span>
                    <TrendingUp className="text-green-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    {t("analytics.card1.value")}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {t("analytics.card1.trend")}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 text-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      {t("analytics.card2.label")}
                    </span>
                    <Activity className="text-blue-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    {t("analytics.card2.value")}
                  </div>
                  <div className="text-sm text-blue-600 font-medium">
                    {t("analytics.card2.trend")}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 text-gray-900">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      {t("analytics.card3.label")}
                    </span>
                    <Target className="text-purple-500" size={20} />
                  </div>
                  <div className="text-3xl font-bold mb-1">
                    {t("analytics.card3.value")}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {t("analytics.card3.trend")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
