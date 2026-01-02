"use client";

import { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

// Official WhatsApp Logo SVG
const WhatsAppLogo = ({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 175.216 175.552"
    width={size}
    height={size}
    className={className}
  >
    <defs>
      <linearGradient
        id="whatsapp-gradient"
        x1="85.915"
        x2="86.535"
        y1="32.567"
        y2="137.092"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#57d163" />
        <stop offset="1" stopColor="#23b33a" />
      </linearGradient>
    </defs>
    <path
      fill="url(#whatsapp-gradient)"
      d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
    />
    <path
      fill="#fff"
      d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
    />
  </svg>
);

export default function CTA() {
  const { t } = useLanguage();
  const [isLaunching, setIsLaunching] = useState(false);

  // WhatsApp number - update with your actual number
  const whatsappNumber = "50688888888"; // Format: country code + number (no + or spaces)
  const whatsappMessage = encodeURIComponent(t("cta.whatsapp.message"));

  const handleLaunch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLaunching(true);

    // Open WhatsApp after animation
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
        "_blank"
      );
      setTimeout(() => setIsLaunching(false), 1000);
    }, 1500);
  };

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

          {/* Massive WhatsApp CTA */}
          <div className="relative max-w-3xl mx-auto mb-12">
            {/* Epic Simplified Rocket Launch */}
            <AnimatePresence>
              {isLaunching && (
                <motion.div
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Massive Flash */}
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.3, times: [0, 0.1, 1] }}
                  />

                  {/* Giant Explosion Burst */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Core Blast */}
                    <motion.div
                      className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-white via-yellow-300 to-orange-500"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{ filter: "blur(40px)" }}
                    />
                  </motion.div>

                  {/* Particle Explosion - 40 particles */}
                  {[...Array(40)].map((_, i) => {
                    const angle = (i * 360) / 40;
                    const distance = 300 + (i % 3) * 100;
                    const size = 8 + (i % 4) * 4;
                    return (
                      <motion.div
                        key={`p-${i}`}
                        className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500"
                        style={{
                          width: size,
                          height: size,
                          boxShadow: `0 0 ${
                            size * 2
                          }px rgba(251, 191, 36, 0.8)`,
                        }}
                        initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                        animate={{
                          x: Math.cos((angle * Math.PI) / 180) * distance,
                          y: Math.sin((angle * Math.PI) / 180) * distance,
                          scale: [0, 1.5, 0],
                          opacity: [1, 1, 0],
                        }}
                        transition={{
                          duration: 1.2,
                          delay: i * 0.01,
                          ease: "easeOut",
                        }}
                      />
                    );
                  })}

                  {/* Shockwave Rings */}
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div
                      key={`sw-${i}`}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] rounded-full"
                      style={{
                        borderColor:
                          i === 0
                            ? "rgba(255,255,255,0.8)"
                            : i === 1
                            ? "rgba(251,191,36,0.6)"
                            : "rgba(249,115,22,0.4)",
                        width: "100%",
                        height: "100%",
                      }}
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 8, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: delay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              onClick={handleLaunch}
              className={`relative group block ${
                isLaunching ? "animate-rocket-launch" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Ultra Premium WhatsApp Button */}
              <div className="relative overflow-hidden rounded-[32px]">
                {/* Animated border gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] via-[#34E877] to-[#25D366] animate-gradient-x"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] via-[#34E877] to-[#25D366] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                {/* Inner container with padding for border effect */}
                <div className="relative m-[2px] bg-gradient-to-br from-[#25D366] to-[#1ea952] rounded-[30px] overflow-hidden">
                  {/* Animated background particles */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-32 h-32 bg-white rounded-full blur-3xl"
                        animate={{
                          x: [0, 100, 0],
                          y: [0, 50, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          delay: i * 1.3,
                        }}
                        style={{
                          left: `${i * 30}%`,
                          top: `${i * 20}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative px-8 py-10 sm:px-12 sm:py-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                      {/* Left: Logo + Text */}
                      <div className="flex items-center gap-6 sm:gap-8">
                        {/* WhatsApp Logo with pulse */}
                        <motion.div
                          className="relative flex-shrink-0"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {/* Pulsing rings */}
                          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl animate-ping"></div>
                          <div className="absolute inset-0 bg-white/30 rounded-3xl blur-xl"></div>

                          <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                            <WhatsAppLogo size={72} />
                          </div>

                          {/* Online indicator */}
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 border-4 border-white rounded-full shadow-lg">
                            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                          </div>
                        </motion.div>

                        {/* Text with badge */}
                        <div className="text-left space-y-2">
                          {/* "Online Now" badge */}
                          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                              En Línea Ahora
                            </span>
                          </div>

                          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                            {t("cta.whatsapp.button")}
                          </div>
                          <div className="text-base sm:text-lg text-white/90 font-semibold flex items-center gap-2">
                            <span>{t("cta.whatsapp.subtitle")}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Animated Arrow */}
                      <motion.div
                        className="relative flex-shrink-0"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl"></div>
                        <div className="relative bg-white/15 backdrop-blur-md rounded-full p-5 border-2 border-white/40 shadow-xl">
                          <ArrowRight
                            className="text-white"
                            size={40}
                            strokeWidth={3}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating shadow */}
              <div className="absolute inset-0 -z-10 bg-[#25D366] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity rounded-[32px]"></div>
            </motion.a>
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
