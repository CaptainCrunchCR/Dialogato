"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  Scissors,
  UtensilsCrossed,
  ShoppingBag,
  Dumbbell,
  Stethoscope,
  Home,
  Car,
  GraduationCap,
  Sparkles,
  Hotel,
  Wrench,
  Palette,
} from "lucide-react";

const businessTypes = [
  {
    icon: Scissors,
    key: "barber",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-cyan-400",
    glowColor: "shadow-[0_0_40px_rgba(34,211,238,0.3)]",
  },
  {
    icon: UtensilsCrossed,
    key: "restaurant",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    iconColor: "text-orange-400",
    glowColor: "shadow-[0_0_40px_rgba(251,146,60,0.3)]",
  },
  {
    icon: ShoppingBag,
    key: "shop",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-400",
    glowColor: "shadow-[0_0_40px_rgba(168,85,247,0.3)]",
  },
  {
    icon: Dumbbell,
    key: "gym",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
    glowColor: "shadow-[0_0_40px_rgba(34,197,94,0.3)]",
  },
  {
    icon: Stethoscope,
    key: "clinic",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-400",
    glowColor: "shadow-[0_0_40px_rgba(20,184,166,0.3)]",
  },
  {
    icon: Home,
    key: "realestate",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-400",
    glowColor: "shadow-[0_0_40px_rgba(99,102,241,0.3)]",
  },
  {
    icon: Car,
    key: "automotive",
    gradient: "from-slate-500 to-zinc-500",
    bgGradient: "from-slate-500/10 to-zinc-500/10",
    iconColor: "text-slate-400",
    glowColor: "shadow-[0_0_40px_rgba(148,163,184,0.3)]",
  },
  {
    icon: GraduationCap,
    key: "education",
    gradient: "from-yellow-500 to-amber-500",
    bgGradient: "from-yellow-500/10 to-amber-500/10",
    iconColor: "text-yellow-400",
    glowColor: "shadow-[0_0_40px_rgba(234,179,8,0.3)]",
  },
  {
    icon: Sparkles,
    key: "beauty",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400",
    glowColor: "shadow-[0_0_40px_rgba(236,72,153,0.3)]",
  },
  {
    icon: Hotel,
    key: "hotel",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-400",
    glowColor: "shadow-[0_0_40px_rgba(139,92,246,0.3)]",
  },
  {
    icon: Wrench,
    key: "repair",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-400",
    glowColor: "shadow-[0_0_40px_rgba(245,158,11,0.3)]",
  },
  {
    icon: Palette,
    key: "creative",
    gradient: "from-fuchsia-500 to-pink-500",
    bgGradient: "from-fuchsia-500/10 to-pink-500/10",
    iconColor: "text-fuchsia-400",
    glowColor: "shadow-[0_0_40px_rgba(217,70,239,0.3)]",
  },
];

export default function PerfectFor() {
  const { t } = useLanguage();

  return (
    <section
      id="perfect-for"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500/20 to-secondary-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent-400/30 mb-6">
              <Sparkles className="text-accent-400" size={20} />
              <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
                {t("perfectfor.badge")}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {t("perfectfor.title")}
            </h2>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t("perfectfor.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={business.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className={`relative h-full bg-gradient-to-br ${business.bgGradient} backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${business.glowColor}`}
                >
                  {/* Animated gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className={`absolute top-1/4 left-1/4 w-2 h-2 ${business.iconColor} rounded-full blur-sm`}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className={`absolute top-1/2 right-1/4 w-2 h-2 ${business.iconColor} rounded-full blur-sm`}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${business.gradient} rounded-2xl mb-6 shadow-2xl`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-white" size={40} strokeWidth={2} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent-400 transition-all duration-300">
                      {t(`perfectfor.${business.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {t(`perfectfor.${business.key}.description`)}
                    </p>

                    {/* Benefits list */}
                    <ul className="space-y-2">
                      {[1, 2, 3].map((num) => (
                        <li
                          key={num}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <div
                            className={`w-1.5 h-1.5 ${business.iconColor} rounded-full mt-1.5 flex-shrink-0`}
                          ></div>
                          <span>
                            {t(`perfectfor.${business.key}.benefit${num}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-xl sm:text-2xl text-slate-300 mb-8">
            {t("perfectfor.cta")}
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles size={24} />
            <span>{t("perfectfor.button")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
