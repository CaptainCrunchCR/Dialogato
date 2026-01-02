"use client";

import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered:", registration);
          })
          .catch((error) => {
            console.log("SW registration failed:", error);
          });
      });
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if already installed
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    setIsStandalone(standalone);

    // Listen for install prompt (Android)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Show install prompt after 3 seconds if not dismissed before
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-install-dismissed");
        if (!dismissed && !standalone) {
          setShowInstallPrompt(true);
        }
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Show iOS prompt if on iOS and not standalone
    if (iOS && !standalone) {
      setTimeout(() => {
        const dismissed = localStorage.getItem("pwa-install-dismissed");
        if (!dismissed) {
          setShowInstallPrompt(true);
        }
      }, 3000);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt && !isIOS) {
      return;
    }

    if (deferredPrompt) {
      // Android installation
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      }

      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };

  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <AnimatePresence>
      {showInstallPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          <div className="relative bg-gradient-to-br from-primary-900 to-primary-950 border-2 border-accent-400/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-400 to-secondary-500 rounded-xl flex items-center justify-center">
                <Download className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Instalar Dialogato
                </h3>
                <p className="text-sm text-slate-300">
                  {isIOS
                    ? "Agrega a tu pantalla de inicio para acceso rápido"
                    : "Instala la app para una mejor experiencia"}
                </p>
              </div>
            </div>

            {isIOS ? (
              // iOS Instructions
              <div className="bg-primary-950/50 rounded-xl p-4 mb-4 text-sm text-slate-300">
                <p className="mb-2">Para instalar en iOS:</p>
                <ol className="list-decimal list-inside space-y-1 text-xs">
                  <li>
                    Toca el botón de compartir{" "}
                    <span className="inline-block">⎋</span>
                  </li>
                  <li>Selecciona &ldquo;Agregar a pantalla de inicio&rdquo;</li>
                  <li>Toca &ldquo;Agregar&rdquo;</li>
                </ol>
              </div>
            ) : (
              // Android Install Button
              <button
                onClick={handleInstallClick}
                className="w-full bg-gradient-to-r from-accent-500 to-secondary-500 text-white font-bold py-3 px-6 rounded-xl hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Instalar Ahora
              </button>
            )}

            {/* Benefits */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
              <span>✓ Acceso rápido</span>
              <span>✓ Sin navegador</span>
              <span>✓ Offline</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
