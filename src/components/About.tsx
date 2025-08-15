"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section id="about" className="relative bg-white py-32 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[800px]">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[120%] lg:-mt-32"
          >
            {/* Main Image Container */}
            <div className="relative h-full min-h-[600px] lg:min-h-[800px]">
              <motion.div
                style={{ scale }}
                className="absolute inset-0 rounded-none lg:rounded-br-[200px]"
              >
                <Image
                  src="/images/Due_Frattelli_10.jpg"
                  alt="Chef at Ristorante Due Fratelli"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1920px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Overlapping Year Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-0 right-0 lg:-right-20 backdrop-blur-sm bg-white/80 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transform translate-y-1/2"
            >
              <div className="relative">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] text-stone-400 uppercase"
                >
                  Est.
                </motion.span>
                <span className="block text-7xl font-extralight text-stone-800 tracking-tighter">
                  2020
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ y }}
            className="lg:pl-20 xl:pl-32 pt-32 lg:pt-0 relative"
          >
            {/* Restaurant Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-20 relative"
            >
              {/* Background Text - Oversized */}
              <div className="absolute -top-16 -left-8 w-full overflow-hidden pointer-events-none">
                <div className="text-[15vw] leading-none font-bold text-stone-900/[0.03] select-none tracking-tighter">
                  DUE
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-8xl font-light text-stone-800 leading-none">
                  Due
                  <span className="block mt-4 text-[#dfbf5b] italic">
                    Fratelli
                  </span>
                </h2>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="space-y-16">
              {/* Introduction */}
              <div>
                <h3 className="text-4xl font-light text-stone-700 mb-8">
                  Buongiorno <span className="text-[#dfbf5b]">a tutti!</span>
                </h3>
                <div className="text-xl text-stone-600 leading-relaxed">
                  <p>
                    Wir sind das{" "}
                    <span className="font-medium italic">
                      Ristorante Due Fratelli – il gusto del mare
                    </span>{" "}
                    und sind in Travemünde seit Mai 2020.
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="relative">
                <div className="text-xl text-stone-600 leading-relaxed">
                  <p className="pl-8 border-l-4 border-[#dfbf5b]">
                    In einer hervorragenden Lage am Trave, bereiten wir Ihnen
                    täglich frische Fischgerichte und mediterrane Spezialitäten
                    zu. Von Meeresfrüchten bis hin zu klassischen Pasta und
                    Pizza erzählt jedes Gericht eine Geschichte unserer
                    kulinarischen Leidenschaft.
                  </p>
                </div>
              </div>

              {/* Location Banner */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-stone-50 p-8 -mx-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl font-light text-stone-800">
                      Travemünde
                    </h4>
                    <p className="text-[#dfbf5b] mt-1">Baltic Sea</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
