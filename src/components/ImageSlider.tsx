"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  easeIn,
  easeOut,
  Variants,
} from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/Due_Frattelli_19.jpg",
    title: "Benvenuti im Due",
    description:
      'Willkommen im Ristorante Due Fratelli in Lübeck-Travemünde. "Il gusto del mare" – wo könnte der Geschmack des Meeres authentischer sein als direkt an der Küste? In unserem Restaurant erwarten Sie liebevoll zubereitete mediterrane Gerichte auf Basis frischer regionaler Zutaten.',
    accent: "Buon appetito!",
  },
  {
    image: "/images/Due_Frattelli_01.jpg",
    title: "Essen gehen in Travemünde",
    description:
      "Setzen Sie sich mit einem leckeren Aperitif oder einem Glas Wein auf unsere Sonnenterrasse und entspannen Sie sich. Die Schiffe gleiten vorbei, die Möwen kreischen in der Ferne und Sie genießen die maritime Atmosphäre hier in Travemünde.",
    accent: "Maritime Atmosphäre",
  },
  {
    image: "/images/Due_Frattelli_30.jpg",
    title: "Panoramablick & Genuss",
    description:
      "Bei norddeutschem Schietwetter setzen Sie sich einfach an unser Panoramafenster und genießen doppelt: Ihr Essen und den Ausblick! Hier mündet die Trave in die Ostsee – und Ihr Besuch in einem besonderen kulinarischen Erlebnis.",
    accent: "Doppelter Genuss",
  },
  {
    image: "/images/Due_Frattelli_03.jpg",
    title: "Mediterrane Küche",
    description:
      "Unsere Küche vereint das Beste aus der italienischen und mediterranen Tradition. Frische Pasta, knackige Salate und erlesene Weine – bei uns finden Sie authentische Geschmackserlebnisse in entspannter Atmosphäre.",
    accent: "Cucina Italiana",
  },
  {
    image: "/images/Due_Frattelli_31.jpg",
    title: "Frische Meeresfrüchte",
    description:
      "Genießen Sie unsere Spezialitäten aus dem Meer: Von frischen Muscheln bis hin zu fangfrischem Fisch – wir verwöhnen Sie mit Köstlichkeiten direkt von der Küste, zubereitet nach traditionellen Rezepten.",
    accent: "Frutti di Mare",
  },
  {
    image: "/images/Due_Frattelli_32.jpg",
    title: "Gemütliche Atmosphäre",
    description:
      "In unserem Restaurant erwartet Sie eine einladende Atmosphäre, die zum Verweilen einlädt. Das warme Ambiente, kombiniert mit aufmerksamem Service, macht Ihren Besuch zu einem besonderen Erlebnis.",
    accent: "Herzlich Willkommen",
  },
  {
    image: "/images/Due_Frattelli_33.jpg",
    title: "Pasta & Pizza",
    description:
      "Erleben Sie die Vielfalt unserer hausgemachten Pasta und traditionellen Pizzen. Jedes Gericht wird mit Liebe zubereitet und mit ausgewählten Zutaten verfeinert – ein Geschmackserlebnis, das Sie begeistern wird.",
    accent: "Fatto a Mano",
  },
  {
    image: "/images/Due_Frattelli_28.jpg",
    title: "Familiäre Gastlichkeit",
    description:
      "Bei uns sind Sie nicht nur Gast, sondern Teil der Familie. Genießen Sie italienische Gastfreundschaft in ihrer schönsten Form, während Sie den atemberaubenden Blick auf die Ostsee genießen.",
    accent: "Come in Famiglia",
  },
  {
    image: "/images/Due_Frattelli_13.jpg",
    title: "Kulinarische Highlights",
    description:
      "Lassen Sie sich von unseren saisonalen Spezialitäten überraschen. Unser Küchenchef kreiert regelmäßig neue Gerichte, die traditionelle Rezepte mit modernen Einflüssen verbinden.",
    accent: "Sapori Speciali",
  },
  {
    image: "/images/Due_Frattelli_29.jpg",
    title: "Dolce Vita",
    description:
      "Krönen Sie Ihr Dinner mit unseren hausgemachten Desserts. Von klassischem Tiramisu bis zu raffinierten Kreationen – unsere süßen Versuchungen sind der perfekte Abschluss für einen gelungenen Abend.",
    accent: "Dolci Momenti",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants: Variants = {
    enter: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    center: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: easeIn,
      },
    },
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + slides.length) % slides.length
    );
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  // Reset auto-play on user interaction
  const handleManualNavigation = (newDirection: number) => {
    setIsAutoPlaying(false); // Pause auto-play
    paginate(newDirection);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[80vh] max-h-[900px]">
          {/* Left Column - Image */}
          <div className="relative h-[50vh] lg:h-full">
            {/* Progress Numbers - Moved to top left */}
            <div className="absolute top-8 left-8 z-20 flex items-baseline gap-3">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-7xl font-extralight text-white tracking-tighter"
              >
                {String(currentIndex + 1).padStart(2, "0")}
              </motion.span>
              <span className="text-xl text-white/60 font-light">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Image Navigation */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4 z-10">
                  <button
                    onClick={() => handleManualNavigation(-1)}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white border border-white/20"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleManualNavigation(1)}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white border border-white/20"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-white origin-left"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Content */}
          <div className="relative bg-stone-50 p-12 lg:p-20 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="max-w-xl"
              >
                <span className="text-[#dfbf5b] uppercase tracking-widest text-sm font-medium">
                  {slides[currentIndex].accent}
                </span>
                <motion.h2
                  className="text-5xl font-light text-stone-800 mt-6 mb-8"
                  variants={textVariants}
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p
                  className="text-xl text-stone-600 leading-relaxed"
                  variants={textVariants}
                >
                  {slides[currentIndex].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
