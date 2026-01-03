"use client";

import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-4">Dialogato</h3>
            <p className="text-gray-400 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.product")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.product.features")}
                </a>
              </li>
              <li>
                <a
                  href="#platforms"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.product.platforms")}
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.product.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#guarantee"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.product.guarantee")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="flex-shrink-0 mt-1 text-primary-400"
                />
                <a
                  href="mailto:hello@dialogato.com"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  size={20}
                  className="flex-shrink-0 mt-1 text-primary-400"
                />
                <span>{t("footer.contact.chat")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 pb-2">
          <div className="flex flex-col items-center gap-8">
            {/* Costa Rica Flag and Location - Enhanced Design */}
            <div className="flex flex-col items-center gap-4">
              {/* Flag with clean styling */}
              <svg
                width="96"
                height="64"
                viewBox="0 0 5 3.6"
                className="rounded shadow-lg"
              >
                {/* Blue stripe - top */}
                <rect width="5" height="0.6" y="0" fill="#002B7F" />
                {/* White stripe */}
                <rect width="5" height="0.6" y="0.6" fill="#FFFFFF" />
                {/* Red stripe - center (double width) */}
                <rect width="5" height="1.2" y="1.2" fill="#CE1126" />
                {/* White stripe */}
                <rect width="5" height="0.6" y="2.4" fill="#FFFFFF" />
                {/* Blue stripe - bottom */}
                <rect width="5" height="0.6" y="3.0" fill="#002B7F" />
              </svg>

              {/* Location Text with better styling */}
              <div className="flex flex-col items-center gap-1">
                <p className="text-slate-300 text-base font-semibold tracking-wide">
                  {t("footer.contact.location")}
                </p>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              {t("footer.copyright", { year: currentYear.toString() })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
