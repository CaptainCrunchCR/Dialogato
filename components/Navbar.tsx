"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localePath } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  simplified?: boolean;
}

export default function Navbar({ simplified = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale } = useLanguage();
  const home = localePath(locale);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: t("nav.features"), href: `${home}#features` },
    { name: t("nav.benefits"), href: `${home}#benefits` },
    { name: t("nav.pricing"), href: `${home}#pricing` },
    { name: t("nav.guarantee"), href: `${home}#guarantee` },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-gradient-to-r from-primary-950/95 via-primary-900/95 to-secondary-900/95 border-b border-accent-400/20 shadow-neon">
      <div className="container-custom">
        <div className="flex items-center h-16 sm:h-20">
          {/* Group 1: Logo (Left) */}
          <div className="flex-1 flex items-center">
            <Link href={home} className="group flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-400 to-secondary-500 flex items-center justify-center shadow-glow transform group-hover:scale-105 transition-transform flex-shrink-0">
                <span className="text-white font-black text-lg sm:text-xl">
                  D
                </span>
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight truncate">
                Dialogato
              </span>
            </Link>
          </div>

          {/* Group 2: Navigation Links (Center) - Desktop Only */}
          {!simplified ? (
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-2 xl:px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm xl:text-base group whitespace-nowrap text-slate-300 hover:text-accent-300"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 rounded-xl transition-opacity opacity-0 group-hover:opacity-100"></div>
                </Link>
              ))}
            </div>
          ) : null}

          {/* Group 3: Action Buttons (Right) */}
          {!simplified ? (
            <div className="hidden lg:flex flex-1 items-center justify-end gap-1 xl:gap-2">
              <LanguageSwitcher />
              <Link
                href={`${home}#cta`}
                className="relative bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-4 xl:px-6 rounded-xl hover:from-accent-400 hover:to-secondary-400 transition-all duration-300 font-semibold text-sm xl:text-base shadow-glow hover:shadow-neon overflow-hidden group h-10 flex items-center whitespace-nowrap"
              >
                <span className="relative z-10">{t("nav.getStarted")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>
          ) : (
            <div className="hidden lg:flex flex-1 items-center justify-end">
              <LanguageSwitcher />
            </div>
          )}

          {/* Mobile menu button */}
          {!simplified ? (
            <div className="lg:hidden flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <LanguageSwitcher />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-500/20 to-secondary-500/20 border border-accent-400/30 hover:border-accent-400/50 transition-all flex-shrink-0 h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X size={20} className="sm:w-6 sm:h-6 text-accent-300" />
                ) : (
                  <Menu size={20} className="sm:w-6 sm:h-6 text-accent-300" />
                )}
              </button>
            </div>
          ) : (
            <div className="lg:hidden flex-shrink-0">
              <LanguageSwitcher />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {!simplified && isOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden backdrop-blur-2xl bg-gradient-to-b from-primary-950/98 to-secondary-900/98 border-t border-accent-400/20 animate-slide-up shadow-neon"
        >
          <div className="container-custom py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-xl transition-all duration-300 font-medium text-slate-300 hover:text-accent-300 hover:bg-gradient-to-r hover:from-accent-500/10 hover:to-secondary-500/10"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`${home}#cta`}
              className="block bg-gradient-to-r from-accent-500 to-secondary-500 text-white px-6 py-3 rounded-xl hover:from-accent-400 hover:to-secondary-400 transition-all duration-300 font-semibold text-center shadow-glow mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.getStarted")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
