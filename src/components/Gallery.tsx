"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  {
    src: "/images/Due_Frattelli_22.jpg",
  },
  {
    src: "/images/Due_Frattelli_12.jpg",
  },
  {
    src: "/images/Due_Frattelli_13.jpg",
  },
  {
    src: "/images/Due_Frattelli_14.jpg",
  },
  {
    src: "/images/Due_Frattelli_15.jpg",
  },
  {
    src: "/images/Due_Frattelli_17.jpg",
  },
  {
    src: "/images/Due_Frattelli_01.jpg",
  },
  {
    src: "/images/Due_Frattelli_03.jpg",
  },
  {
    src: "/images/Due_Frattelli_06.jpg",
  },
  {
    src: "/images/Due_Frattelli_34.jpg",
  },
  {
    src: "/images/Due_Frattelli_32.jpg",
  },
  {
    src: "/images/Due_Frattelli_31.jpg",
  },
  {
    src: "/images/Due_Frattelli_29.jpg",
  },
  {
    src: "/images/Due_Frattelli_23.jpg",
  },
  {
    src: "/images/Due_Frattelli_24.jpg",
  },
  {
    src: "/images/Due_Frattelli_25.jpg",
  },
  {
    src: "/images/Due_Frattelli_26.jpg",
  },
  {
    src: "/images/Due_Frattelli_27.jpg",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-stone-50/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-stone-50" />

      <div className="container mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-light text-stone-200 uppercase tracking-wider"
          >
            Momente
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#dfbf5b] font-light -mt-16 md:-mt-20 lg:-mt-24 relative z-10"
          >
            Zeit steht still
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square bg-white"
            >
              <div
                className="group w-full h-full cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1080px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-5xl bg-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={images[selectedImage].src}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white border border-white/20"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
