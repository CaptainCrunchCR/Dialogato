"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Wrench, Clock, Calendar } from "lucide-react";
import Navbar from "./Navbar";

export default function MaintenanceMode() {
  const { t } = useLanguage();

  const maintenanceEndDate = new Date("2026-02-02T00:00:00");
  const now = new Date();
  const daysRemaining = Math.ceil(
    (maintenanceEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar simplified />

      {/* Maintenance Content */}
      <div className="flex items-center justify-center p-4 pt-32 min-h-screen">
        <div className="max-w-2xl w-full">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-50 animate-pulse"></div>
                <Wrench className="w-20 h-20 text-blue-400 relative animate-bounce" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              {t("maintenance.title")}
            </h1>

            <p className="text-xl text-blue-200 text-center mb-8">
              {t("maintenance.subtitle")}
            </p>

            <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-semibold text-white">
                  {t("maintenance.eta.title")}
                </h2>
              </div>
              <p className="text-center text-3xl font-bold text-blue-400 mb-2">
                {t("maintenance.eta.date")}
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Clock className="w-5 h-5" />
                <p className="text-lg">
                  {t("maintenance.eta.countdown", { days: daysRemaining })}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-blue-100">{t("maintenance.reason1")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-blue-100">{t("maintenance.reason2")}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p className="text-blue-100">{t("maintenance.reason3")}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
              <p className="text-center text-white font-medium mb-2">
                {t("maintenance.contact.title")}
              </p>
              <p className="text-center text-blue-200">
                {t("maintenance.contact.email")}:{" "}
                <a
                  href={`mailto:${t("maintenance.contact.emailaddress")}`}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {t("maintenance.contact.emailaddress")}
                </a>
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-blue-300">
                {t("maintenance.thankyou")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
