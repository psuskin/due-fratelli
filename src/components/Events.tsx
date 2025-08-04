'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import ReservationModal from './ReservationModal';

const Events = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  return (
    <section id="events" className="relative py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-9xl font-light text-stone-200 uppercase tracking-wider"
          >
            Veranstaltungen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl text-[#dfbf5b] font-light -mt-10 sm:-mt-16 lg:-mt-24 relative z-10"
          >
            Schaffen Sie unvergessliche Momente
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/Due_Frattelli_18.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-12 sm:-bottom-16 -right-4 sm:-right-16 w-full max-w-[280px] sm:max-w-sm"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#dfbf5b]/30 to-[#dfbf5b]/70 backdrop-blur-xl rounded-2xl transform rotate-2" />
                <div className="relative bg-stone-900/90 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-[#dfbf5b]/20">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#dfbf5b]/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-[#dfbf5b]"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="absolute -inset-2 bg-[#dfbf5b]/20 rounded-xl blur-lg -z-10" />
                    </div>
                    <div>
                      <h3 className="text-[#dfbf5b] text-base sm:text-lg font-light mb-2">
                        Exklusive Räumlichkeiten
                      </h3>
                      <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
                        Zwei Etagen mit elegantem Raum für Ihre besonderen Anlässe. Reservieren Sie
                        das gesamte Restaurant für Ihre Veranstaltung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mt-16 lg:mt-0"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-stone-800 font-light mb-6 sm:mb-8">
              Ihre besonderen <span className="text-[#dfbf5b]">Anlässe</span>
            </h3>
            <p className="text-stone-600 leading-relaxed mb-8 sm:mb-12">
              Unsere Räumlichkeiten haben schon viele Feste und Feiern gesehen. Kein Wunder – bei
              uns finden Sie auf zwei Stockwerken viel Platz und Gemütlichkeit. Wenn Sie rechtzeitig
              reservieren und genügend Gäste mitbringen, stellen wir Ihnen unser Restaurant sogar
              exklusiv zur Verfügung!
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              {['Private Veranstaltungen', 'Firmenfeiern', 'Hochzeitsfeiern', 'Familienfeiern'].map(
                (feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1 h-4 bg-[#dfbf5b]/50 rounded-full" />
                    <span className="text-stone-600 text-sm font-medium">{feature}</span>
                  </motion.div>
                ),
              )}
            </div>

            {/* CTA Button */}
            <Button variant="outline" onClick={() => setIsReservationModalOpen(true)}>
              Event anfragen
            </Button>
          </motion.div>
        </div>
      </div>

      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </section>
  );
};

export default Events;
