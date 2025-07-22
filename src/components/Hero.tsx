"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as FM from "framer-motion";
import Button from "./Button";
import ReservationModal from "./ReservationModal";

const { motion, useScroll, useTransform } = FM;

const Hero = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  // Parallax effects for different elements
  const { scrollY } = useScroll();

  // Main background image parallax (slower)
  const mainImageY = useTransform(scrollY, [0, 500], [0, 150], { clamp: true });

  // Floating image parallax (faster, opposite direction)
  const floatingImageY = useTransform(scrollY, [0, 500], [0, -100], {
    clamp: true,
  });

  // Text elements parallax (subtle)
  const titleY = useTransform(scrollY, [0, 500], [0, -50], { clamp: true });

  return (
    <>
      <section className="relative w-full min-h-[100vh] lg:h-screen flex items-center overflow-y-visible lg:overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Circular design element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -top-[30%] -right-[20%] w-[70%] aspect-square rounded-full border border-[#dfbf5b]/10 hidden sm:block"
          >
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="absolute inset-0 border border-[#dfbf5b]/5 rounded-full"
            />
          </motion.div>

          {/* Background Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-[20%] -left-10 w-full hidden sm:block"
          >
            <div className="text-[25vw] font-bold text-stone-900/[0.02] leading-none tracking-tighter">
              MARE
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-[10%] -right-10 w-full text-right hidden sm:block"
          >
            <div className="text-[20vw] font-bold text-[#dfbf5b]/[0.02] leading-none tracking-tighter">
              GUSTO
            </div>
          </motion.div>

          {/* Abstract wave pattern */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            className="absolute bottom-[15%] left-[10%] w-[30%] h-[1px] hidden sm:block"
          >
            <svg
              viewBox="0 0 200 2"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 1 C50 1 50 1 100 1 C150 1 150 1 200 1"
                stroke={`#dfbf5b`}
                strokeWidth="0.2"
                strokeOpacity="0.2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Main content container */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ y: titleY }}
            className="relative z-10 flex items-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-20 pb-32 lg:py-0"
          >
            <div className="max-w-[600px] relative">
              {/* Location tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 lg:mb-16"
              >
                <span className="text-xs lg:text-sm tracking-[0.2em] uppercase text-black/50">
                  Lübeck-Travemünde
                </span>
              </motion.div>

              {/* Main title group */}
              <div className="relative space-y-8 lg:space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-9xl font-light tracking-tight fjalla-one-regular relative">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute -top-6 lg:-top-8 text-lg lg:text-2xl text-[#dfbf5b]/70 tracking-[0.2em] uppercase"
                    >
                      Ristorante
                    </motion.span>
                    <span className="font-normal text-[#dfbf5b] relative uppercase">
                      Due Fratelli
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#dfbf5b]/20 origin-left"
                      />
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-6 lg:space-y-8"
                >
                  <div className="space-y-3">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-light italic tracking-wide text-black/80">
                      Hier fließt die Trave hinein.
                    </p>
                    <div className="h-[1px] w-12 lg:w-16 bg-[#dfbf5b] opacity-50" />
                  </div>

                  <div className="space-y-3 lg:space-y-4">
                    <p className="text-base lg:text-lg text-black/60 leading-relaxed tracking-wide">
                      Wo das Mittelmeer auf die Ostsee trifft.
                    </p>
                    <p className="text-base lg:text-lg font-light text-black/60 leading-relaxed tracking-wide">
                      Mediterrane Küche in Lübeck-Travemünde.
                    </p>
                  </div>
                </motion.div>

                {/* Buttons with creative layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="relative mt-8 lg:mt-0"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
                    <Button
                      variant="outline"
                      fillDirection="right"
                      className="w-full sm:w-auto"
                    >
                      Speisekarte
                    </Button>
                    <Button
                      variant="primary"
                      fillDirection="left"
                      onClick={() => setIsReservationOpen(true)}
                      className="w-full sm:w-auto"
                    >
                      Reservierung
                    </Button>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -right-12 top-1/2 w-8 h-[1px] bg-[#dfbf5b] opacity-30 hidden sm:block" />
                </motion.div>
              </div>

              {/* Bottom tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 lg:bottom-12 hidden lg:block lg:-left-14"
              >
                <span className="text-[10px] lg:text-xs tracking-[0.3em] uppercase text-black/40 rotate-[-90deg] block origin-left">
                  Seit 2020
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right image section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative h-[50vh] lg:h-full w-full order-first lg:order-last"
          >
            {/* Main large image with parallax effect */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/10 to-transparent z-10" />

              {/* Parallax image container */}
              <motion.div
                className="absolute inset-0 h-[120%] -top-[10%]"
                style={{ y: mainImageY }}
              >
                <Image
                  src="/images/Due_Frattelli_18.jpg"
                  alt="Due Fratelli restaurant by the sea"
                  fill
                  style={{ objectFit: "cover" }}
                  className="object-center"
                  priority
                  sizes="(max-width: 1920px) 100vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Floating image with reveal effect and parallax */}
            <motion.div
              style={{ y: floatingImageY }}
              className="absolute -left-24 bottom-24 w-60 h-80 hidden lg:block overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative w-full h-full rounded-sm shadow-2xl overflow-hidden"
              >
                {/* Image */}
                <Image
                  src="/images/Due_Frattelli_06.jpg"
                  alt="Mediterrane Küche"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-sm"
                />

                {/* Reveal overlay */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.2,
                    delay: 1.2,
                    ease: [0.6, 0, 0.2, 1],
                  }}
                  className="absolute inset-0 bg-[#dfbf5b] transform origin-left"
                />

                {/* Border accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="absolute top-0 left-0 w-full h-[2px] bg-[#dfbf5b]/20 transform origin-left"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
};

export default Hero;
