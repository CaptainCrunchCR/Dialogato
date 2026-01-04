"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";

// SVG Flag Components with Circle
const USFlag = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/20"
  >
    <circle cx="16" cy="16" r="16" fill="#B22234" />
    <path
      d="M0 4h32M0 8h32M0 12h32M0 16h32M0 20h32M0 24h32M0 28h32"
      stroke="#fff"
      strokeWidth="2.5"
    />
    <rect fill="#3C3B6E" width="12.8" height="13.6" />
  </svg>
);

const SpainFlag = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/20"
  >
    <circle cx="16" cy="16" r="16" fill="#AA151B" />
    <rect fill="#AA151B" width="32" height="8" />
    <rect fill="#F1BF00" y="8" width="32" height="16" />
    <rect fill="#AA151B" y="24" width="32" height="8" />
  </svg>
);

const ChinaFlag = () => (
  <svg
    viewBox="0 0 32 32"
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/20"
  >
    <circle cx="16" cy="16" r="16" fill="#DE2910" />
    <g fill="#FFDE00">
      <path d="M8 6l1.5 4.5L6 8h4l-3.5 2.5z" />
      <path d="M14 4l.5 1.5-1.5-.5 1.5.5-.5 1.5.5-1.5 1.5.5-1.5-.5.5-1.5-.5 1.5z" />
      <path d="M16 7l.5 1.5-1.5-.5 1.5.5-.5 1.5.5-1.5 1.5.5-1.5-.5.5-1.5-.5 1.5z" />
      <path d="M16 11l.5 1.5-1.5-.5 1.5.5-.5 1.5.5-1.5 1.5.5-1.5-.5.5-1.5-.5 1.5z" />
      <path d="M14 14l.5 1.5-1.5-.5 1.5.5-.5 1.5.5-1.5 1.5.5-1.5-.5.5-1.5-.5 1.5z" />
    </g>
  </svg>
);

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    {
      code: "en" as Locale,
      label: "EN",
      name: "English",
      FlagComponent: USFlag,
    },
    {
      code: "es" as Locale,
      label: "ES",
      name: "Español",
      FlagComponent: SpainFlag,
    },
    {
      code: "zh" as Locale,
      label: "中文",
      name: "简体中文",
      FlagComponent: ChinaFlag,
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="backdrop-blur-xl bg-gradient-to-r from-accent-500/10 to-secondary-500/10 flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 rounded-lg sm:rounded-xl border border-accent-400/30 hover:border-accent-400/50 transition-all duration-300 group hover:shadow-glow min-w-[70px] sm:min-w-[90px] h-9 sm:h-10"
        aria-label="Switch language"
      >
        <span className="flex-shrink-0">
          <currentLanguage.FlagComponent />
        </span>
        <span className="font-semibold text-slate-200 group-hover:text-white transition-colors text-xs sm:text-sm flex-1 text-center">
          {currentLanguage.label}
        </span>
        <ChevronDown
          size={10}
          className={`sm:w-3 sm:h-3 text-accent-300 group-hover:text-accent-400 transition-all duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 backdrop-blur-2xl bg-gradient-to-b from-primary-950/98 to-secondary-900/98 border border-accent-400/30 rounded-lg sm:rounded-xl shadow-neon overflow-hidden w-[160px] sm:w-[200px] animate-slide-up z-50">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-accent-500/10 hover:to-secondary-500/10 transition-all duration-300 flex items-center gap-3 group/item ${
                locale === lang.code
                  ? "bg-gradient-to-r from-accent-500/10 to-secondary-500/10"
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="w-8 flex justify-center flex-shrink-0">
                <lang.FlagComponent />
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors block truncate">
                  {lang.name}
                </span>
              </div>
              {locale === lang.code && (
                <div className="w-2 h-2 rounded-full bg-accent-400 shadow-glow flex-shrink-0 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
