"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ReservationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ReservationModal = ({ isOpen, onClose }: ReservationModalProps) => {
  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-[150]"
          />

          {/* Modal Container with subtle scaling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              scale: {
                type: "spring",
                damping: 30,
                stiffness: 400,
              },
            }}
            className="fixed inset-4 lg:inset-8 z-[151] overflow-hidden"
          >
            {/* Inner container with border */}
            <div className="w-full h-full bg-white rounded-2xl shadow-[0_0_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden relative">
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-[152] flex items-center justify-between px-6 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#dfbf5b]" />
                  <h2 className="text-lg font-light tracking-wide">
                    Reservierung
                  </h2>
                </div>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="group relative w-8 h-8 flex items-center justify-center"
                >
                  <div className="absolute inset-0 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg
                    className="w-5 h-5 text-black/60 group-hover:text-black/80 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Iframe wrapper */}
              <div className="w-full h-full pt-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="w-full h-full"
                >
                  <iframe
                    src="https://reservation.dish.co/shortlink/335298"
                    className="w-full h-full"
                    frameBorder="0"
                    title="Reservation System"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
