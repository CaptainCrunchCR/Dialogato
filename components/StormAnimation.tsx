"use client";

import { useEffect, useRef } from "react";
import { Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StormAnimation() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // FREESTYLE: Energy Crystal Shards Rain
    const crystalCount = 30;
    const crystals: HTMLDivElement[] = [];

    for (let i = 0; i < crystalCount; i++) {
      const crystal = document.createElement("div");

      const startX = Math.random() * 100;
      const delay = Math.random() * 6;
      const duration = 3 + Math.random() * 4;
      const size = 20 + Math.random() * 40;
      const rotationSpeed = 2 + Math.random() * 4;
      const colorType = Math.random();

      // Color variations: Electric Yellow, Neon Cyan, Plasma Purple
      let gradient, glow;
      if (colorType < 0.4) {
        // Electric Yellow
        gradient = `
          linear-gradient(135deg, 
            #fef08a 0%, #fde047 25%, #facc15 50%, #eab308 75%, #ca8a04 100%
          ),
          linear-gradient(45deg,
            rgba(250, 204, 21, 0.3) 0%, transparent 100%
          )
        `;
        glow = `
          0 0 20px #fde047,
          0 0 40px #facc15,
          0 0 60px #eab308,
          0 0 80px rgba(250, 204, 21, 0.5)
        `;
      } else if (colorType < 0.7) {
        // Neon Cyan
        gradient = `
          linear-gradient(135deg,
            #a5f3fc 0%, #67e8f9 25%, #22d3ee 50%, #06b6d4 75%, #0891b2 100%
          ),
          linear-gradient(45deg,
            rgba(34, 211, 238, 0.3) 0%, transparent 100%
          )
        `;
        glow = `
          0 0 20px #67e8f9,
          0 0 40px #22d3ee,
          0 0 60px #06b6d4,
          0 0 80px rgba(34, 211, 238, 0.5)
        `;
      } else {
        // Plasma Purple
        gradient = `
          linear-gradient(135deg,
            #e9d5ff 0%, #d8b4fe 25%, #c084fc 50%, #a855f7 75%, #9333ea 100%
          ),
          linear-gradient(45deg,
            rgba(168, 85, 247, 0.3) 0%, transparent 100%
          )
        `;
        glow = `
          0 0 20px #d8b4fe,
          0 0 40px #c084fc,
          0 0 60px #a855f7,
          0 0 80px rgba(168, 85, 247, 0.5)
        `;
      }

      crystal.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: -100px;
        width: ${size}px;
        height: ${size}px;
        background: ${gradient};
        background-blend-mode: overlay;
        clip-path: polygon(
          50% 0%, 
          80% 20%, 
          100% 50%, 
          80% 80%, 
          50% 100%, 
          20% 80%, 
          0% 50%, 
          20% 20%
        );
        box-shadow: ${glow};
        filter: brightness(1.5) saturate(1.4) contrast(1.2);
        will-change: transform, opacity, filter;
        animation: 
          crystalFall ${duration}s linear ${delay}s infinite,
          crystalSpin ${rotationSpeed}s linear infinite,
          crystalPulse 2s ease-in-out infinite;
        opacity: 0;
        pointer-events: none;
        transform-style: preserve-3d;
      `;

      canvasRef.current.appendChild(crystal);
      crystals.push(crystal);
    }

    return () => {
      crystals.forEach((crystal) => crystal.remove());
    };
  }, []);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
    >
      {/* Storm Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-secondary-900/50 to-primary-950"></div>

      {/* Animated 3D Rays Container */}
      <div
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      ></div>

      {/* Lightning Flashes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-yellow-400/0 via-yellow-400/60 to-yellow-400/0 animate-lightning"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-accent-400/0 via-accent-400/50 to-accent-400/0 animate-lightning"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-secondary-400/0 via-secondary-400/40 to-secondary-400/0 animate-lightning"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Center Content - Freestyle */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 3D Floating Icon */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative animate-float">
              {/* Outer glow rings */}
              <div className="absolute inset-0 -m-12">
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-accent-400/30 animate-ping-slow"></div>
              </div>
              <div className="absolute inset-0 -m-8">
                <div
                  className="w-24 h-24 mx-auto rounded-full border-2 border-secondary-400/30 animate-ping-slow"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>

              {/* Center 3D icon */}
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-secondary-500 rounded-2xl blur-xl opacity-60 animate-pulse-glow"></div>
                <div className="relative bg-gradient-to-br from-accent-500 to-secondary-600 rounded-2xl p-6 shadow-neon transform rotate-12 hover:rotate-0 transition-transform duration-700">
                  <Zap
                    className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,1)]"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Powerful Text */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white drop-shadow-lg">
              {t("storm.title.part1")}
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-accent-400 to-secondary-400 text-transparent bg-clip-text animate-pulse-glow">
              {t("storm.title.part2")}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("storm.description")}
          </p>

          {/* Energy Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-accent-400 text-transparent bg-clip-text mb-2 animate-pulse-glow">
                ⚡ {t("storm.stat1.value")}
              </div>
              <div className="text-slate-400 font-medium">
                {t("storm.stat1.label")}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-accent-400 to-secondary-400 text-transparent bg-clip-text mb-2 animate-pulse-glow">
                {t("storm.stat2.value")}
              </div>
              <div className="text-slate-400 font-medium">
                {t("storm.stat2.label")}
              </div>
            </div>
            <div className="group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-secondary-400 to-yellow-400 text-transparent bg-clip-text mb-2 animate-pulse-glow">
                {t("storm.stat3.value")}
              </div>
              <div className="text-slate-400 font-medium">
                {t("storm.stat3.label")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-950 to-transparent"></div>
    </section>
  );
}
