"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookiesConsentModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-white pointer-events-none" />

              {/* Content */}
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#dfbf5b]/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#dfbf5b]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 10V14M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 16V16.01"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-stone-800 mb-2">
                      Wir verwenden Cookies
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung
                      auf unserer Website zu bieten. Diese helfen uns dabei, die
                      Website zu verbessern und Ihnen relevante Inhalte
                      anzuzeigen. Weitere Informationen finden Sie in unserer
                      Datenschutzerklärung.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors duration-200"
                    >
                      Ablehnen
                    </button>
                    <button
                      onClick={handleAccept}
                      className="px-6 py-2.5 bg-[#dfbf5b] hover:bg-[#dfbf5b]/90 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      Akzeptieren
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiesConsentModal;
