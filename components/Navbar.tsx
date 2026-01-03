"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  simplified?: boolean;
}

export default function Navbar({ simplified = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { name: t("nav.features"), href: "#features" },
    { name: t("nav.benefits"), href: "#benefits" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.guarantee"), href: "#guarantee" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-r from-primary-950/95 via-primary-900/95 to-secondary-900/95 border-b border-accent-400/20 shadow-neon">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo with cyan-purple gradient */}
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-secondary-500 flex items-center justify-center shadow-glow transform group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Dialogato
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!simplified ? (
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative text-slate-300 hover:text-accent-300 px-4 py-2 rounded-xl transition-all duration-300 font-medium group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                ))}
                <div className="ml-4">
                  <LanguageSwitcher />
                </div>
                <a
                  href="#cta"
                  className="ml-4 relative bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-2.5 rounded-xl hover:from-accent-400 hover:to-secondary-400 transition-all duration-300 font-semibold shadow-glow hover:shadow-neon overflow-hidden group"
                >
                  <span className="relative z-10">{t("nav.getStarted")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          ) : (
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          )}

          {/* Mobile menu button */}
          {!simplified ? (
            <div className="md:hidden flex items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-gradient-to-br from-accent-500/20 to-secondary-500/20 border border-accent-400/30 hover:border-accent-400/50 transition-all"
              >
                {isOpen ? (
                  <X size={24} className="text-accent-300" />
                ) : (
                  <Menu size={24} className="text-accent-300" />
                )}
              </button>
            </div>
          ) : (
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {!simplified && isOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-gradient-to-b from-primary-950/98 to-secondary-900/98 border-t border-accent-400/20 animate-slide-up shadow-neon">
          <div className="container-custom py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-accent-300 px-4 py-3 rounded-xl transition-all duration-300 font-medium hover:bg-gradient-to-r hover:from-accent-500/10 hover:to-secondary-500/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#cta"
              className="block bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-3 rounded-xl hover:from-accent-400 hover:to-secondary-400 transition-all duration-300 font-semibold text-center shadow-glow mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.getStarted")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
