"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  MessageSquare,
  UserCheck,
  Users,
  FileSearch,
  FileCheck,
  Settings,
  Rocket,
  RefreshCw,
  ArrowRight,
  CreditCard,
} from "lucide-react";

export default function HowItWorks() {
  const { t } = useLanguage();

  const phases = [
    {
      number: "1",
      icon: MessageSquare,
      titleKey: "howitworks.phase1.title",
      descKey: "howitworks.phase1.desc",
      whatHappensKey: "howitworks.phase1.whatHappens",
      businessExpectsKey: "howitworks.phase1.businessExpects",
      dialogatoDoesKey: "howitworks.phase1.dialogatoDoes",
      expectationKey: "howitworks.phase1.expectation",
      color: "accent",
    },
    {
      number: "2",
      icon: UserCheck,
      titleKey: "howitworks.phase2.title",
      descKey: "howitworks.phase2.desc",
      whatHappensKey: "howitworks.phase2.whatHappens",
      businessExpectsKey: "howitworks.phase2.businessExpects",
      dialogatoDoesKey: "howitworks.phase2.dialogatoDoes",
      expectationKey: "howitworks.phase2.expectation",
      color: "secondary",
    },
    {
      number: "3",
      icon: Users,
      titleKey: "howitworks.phase3.title",
      descKey: "howitworks.phase3.desc",
      whatHappensKey: "howitworks.phase3.whatHappens",
      businessExpectsKey: "howitworks.phase3.businessExpects",
      dialogatoDoesKey: "howitworks.phase3.dialogatoDoes",
      expectationKey: "howitworks.phase3.expectation",
      color: "accent",
    },
    {
      number: "4",
      icon: FileSearch,
      titleKey: "howitworks.phase4.title",
      descKey: "howitworks.phase4.desc",
      whatHappensKey: "howitworks.phase4.whatHappens",
      businessExpectsKey: "howitworks.phase4.businessExpects",
      dialogatoDoesKey: "howitworks.phase4.dialogatoDoes",
      expectationKey: "howitworks.phase4.expectation",
      color: "secondary",
    },
    {
      number: "5",
      icon: FileCheck,
      titleKey: "howitworks.phase5.title",
      descKey: "howitworks.phase5.desc",
      whatHappensKey: "howitworks.phase5.whatHappens",
      businessExpectsKey: "howitworks.phase5.businessExpects",
      dialogatoDoesKey: "howitworks.phase5.dialogatoDoes",
      expectationKey: "howitworks.phase5.expectation",
      paymentKey: "howitworks.phase5.payment",
      color: "accent",
    },
    {
      number: "6",
      icon: Settings,
      titleKey: "howitworks.phase6.title",
      descKey: "howitworks.phase6.desc",
      whatHappensKey: "howitworks.phase6.whatHappens",
      businessExpectsKey: "howitworks.phase6.businessExpects",
      dialogatoDoesKey: "howitworks.phase6.dialogatoDoes",
      expectationKey: "howitworks.phase6.expectation",
      color: "secondary",
    },
    {
      number: "7",
      icon: Rocket,
      titleKey: "howitworks.phase7.title",
      descKey: "howitworks.phase7.desc",
      whatHappensKey: "howitworks.phase7.whatHappens",
      businessExpectsKey: "howitworks.phase7.businessExpects",
      dialogatoDoesKey: "howitworks.phase7.dialogatoDoes",
      expectationKey: "howitworks.phase7.expectation",
      paymentKey: "howitworks.phase7.payment",
      color: "accent",
    },
    {
      number: "8",
      icon: RefreshCw,
      titleKey: "howitworks.phase8.title",
      descKey: "howitworks.phase8.desc",
      whatHappensKey: "howitworks.phase8.whatHappens",
      businessExpectsKey: "howitworks.phase8.businessExpects",
      dialogatoDoesKey: "howitworks.phase8.dialogatoDoes",
      expectationKey: "howitworks.phase8.expectation",
      color: "secondary",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark-900 min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4 sm:px-0">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20">
              <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">
                {t("howitworks.badge")}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 sm:mb-8 tracking-tight">
            {t("howitworks.title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
            {t("howitworks.subtitle")}
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="glass border border-slate-800/50 rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-4">
                {t("howitworks.intro.line1")}
              </p>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {t("howitworks.intro.line2")}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isAccent = phase.color === "accent";
            const gradientFrom = isAccent
              ? "from-accent-500"
              : "from-secondary-500";
            const gradientTo = isAccent ? "to-secondary-500" : "to-accent-500";
            const iconColor = isAccent
              ? "text-accent-400"
              : "text-secondary-400";
            const borderColor = isAccent
              ? "border-accent-500/30"
              : "border-secondary-500/30";
            const shadowColor = isAccent
              ? "shadow-accent-500/20"
              : "shadow-secondary-500/20";

            return (
              <div key={phase.number} className="relative">
                {/* Timeline Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-8 md:left-10 top-24 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-transparent hidden sm:block" />
                )}

                {/* Phase Card */}
                <div className="relative mb-16 md:mb-20">
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                    {/* Phase Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-black text-2xl md:text-3xl shadow-xl ${shadowColor}`}
                        >
                          {phase.number}
                        </div>
                        <div
                          className={`absolute -bottom-3 -right-3 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-dark-800 border-2 ${borderColor} flex items-center justify-center backdrop-blur-sm`}
                        >
                          <Icon
                            size={20}
                            className={iconColor}
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phase Content */}
                    <div className="flex-1">
                      <div
                        className={`relative group card border ${borderColor} hover:border-${
                          isAccent ? "accent" : "secondary"
                        }-500/50 transition-all duration-500 overflow-hidden`}
                      >
                        {/* Hover Glow Effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradientFrom}/5 ${gradientTo}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />

                        <div className="relative p-6 sm:p-8 md:p-10">
                          {/* Title & Description */}
                          <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                                {t(phase.titleKey)}
                              </h3>
                              {phase.paymentKey && (
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30">
                                  <CreditCard
                                    size={16}
                                    className="text-emerald-400"
                                    strokeWidth={2.5}
                                  />
                                  <span className="text-sm font-semibold text-emerald-300">
                                    {t(phase.paymentKey)}
                                  </span>
                                </div>
                              )}
                            </div>
                            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                              {t(phase.descKey)}
                            </p>
                          </div>

                          {/* Three Columns */}
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                            {/* What Happens */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-1.5 h-1.5 rounded-full bg-${
                                    isAccent ? "accent" : "secondary"
                                  }-400`}
                                />
                                <h4
                                  className={`text-xs font-bold ${iconColor} uppercase tracking-widest`}
                                >
                                  {t("howitworks.whatHappens")}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pl-3.5">
                                {t(phase.whatHappensKey)}
                              </p>
                            </div>

                            {/* Business Expects */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                                  {t("howitworks.businessExpects")}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pl-3.5">
                                {t(phase.businessExpectsKey)}
                              </p>
                            </div>

                            {/* Dialogato Does */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                                  {t("howitworks.dialogatoDoes")}
                                </h4>
                              </div>
                              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pl-3.5">
                                {t(phase.dialogatoDoesKey)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Clarification */}
        <div className="max-w-4xl mx-auto mt-20 px-4 sm:px-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative glass border border-accent-500/30 rounded-3xl p-8 sm:p-10 md:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {t("howitworks.clarification.title")}
              </h3>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                {t("howitworks.clarification.content")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
