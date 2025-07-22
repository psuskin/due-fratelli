"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wheat, Heart, Fish, GlassWater } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: <Wheat className="w-full h-full" />,
      title: "Mit frischen Zutaten für große Taten",
      description:
        "Wir verwenden nur die besten regionalen Produkte für unsere Gerichte. Wir können uns auf unsere Lieferanten verlassen.",
    },
    {
      icon: <Heart className="w-full h-full" />,
      title: "Kochen mit Herz und Leidenschaft",
      description:
        "Unser Team liebt es zu kochen und findet immer neue Wege, um mediterrane Gerichte mit frischen norddeutschen Zutaten zu kombinieren.",
    },
    {
      icon: <Fish className="w-full h-full" />,
      title: "Mediterran + Ostsee = mehr Geschmack",
      description:
        "Wir arbeiten mit frisch gefangenem Fisch und bieten Ihnen täglich wechselnde Spezialitäten aus dem Meer.",
    },
    {
      icon: <GlassWater className="w-full h-full" />,
      title: "Das Due Fratelli-Gefühl-Gut-Atmosphäre",
      description:
        "Lecker essen in einer gemütlichen Atmosphäre – es sind die schönen Momente, die zählen. Lasst uns zusammen feiern!",
    },
  ];

  return (
    <section className="relative py-32 bg-stone-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-stone-50" />

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-light text-stone-200 uppercase tracking-wider">
            Werte
          </h2>
          <p className="text-2xl md:text-3xl text-[#dfbf5b] font-light -mt-16 md:-mt-20 lg:-mt-24">
            Was treibt uns voran
          </p>
        </motion.div>

        {/* Values Layout */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8 lg:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative w-full lg:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? "lg:translate-y-16" : "lg:-translate-y-16"
                }`}
              >
                {/* Main Card */}
                <div className="relative bg-white/30 backdrop-blur-sm p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  {/* Decorative Line */}
                  <div className="absolute -inset-x-1 -inset-y-1 border border-[#dfbf5b]/20 rounded-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" />

                  {/* Icon and Content Container */}
                  <div className="flex items-start gap-6">
                    {/* Icon Container */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/80 p-4 backdrop-blur-sm relative z-10 group-hover:scale-110 transition-transform duration-500">
                        <div className="w-full h-full text-amber-600 group-hover:text-amber-700 transition-colors duration-500">
                          {value.icon}
                        </div>
                      </div>
                      <div className="absolute -inset-2 bg-amber-100/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        className="text-xl md:text-2xl font-light text-[#dfbf5b] mb-4 group-hover:text-[#dfbf5b]/80 transition-colors duration-300"
                      >
                        {value.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        className="text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300"
                      >
                        {value.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Background Accent */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-amber-50/5 to-amber-100/5 rounded-3xl -rotate-1 z-[-1]" />
                </div>

                {/* Connecting Elements */}
                <div
                  className="absolute hidden lg:block w-24 h-px bg-gradient-to-r from-amber-200/30 to-transparent"
                  style={{
                    top: "50%",
                    [index % 2 === 0 ? "-right-24" : "-left-24"]: 0,
                  }}
                />
              </motion.div>
            ))}
          </div>



          {/* Additional Decorative Blobs */}
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-amber-50/20 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-amber-100/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Values;
