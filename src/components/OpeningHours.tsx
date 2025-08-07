"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";

const OpeningHours = () => {
  const hours = [
    { day: "Monday", hours: "12 - 22 Uhr" },
    { day: "Tuesday", hours: "12 - 22 Uhr" },
    { day: "Wednesday", hours: "Ruhetag" },
    { day: "Thursday", hours: "12 - 22 Uhr" },
    { day: "Friday", hours: "12 - 22 Uhr" },
    { day: "Saturday", hours: "12 - 22 Uhr" },
    { day: "Sunday", hours: "12 - 22 Uhr" },
  ];

  return (
    <section className="relative py-32 bg-stone-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-stone-50" />

      <div className="container mx-auto px-4 relative">
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
            Öffnungszeiten
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#dfbf5b] font-light -mt-16 md:-mt-20 lg:-mt-24 relative z-10"
          >
            Wann finden Sie uns?
          </motion.p>
        </motion.div>

        {/* Clean Minimal Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Side - Hours Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-md p-8 md:p-10"
          >
            {/* Clock Icon */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-stone-100">
              <div className="w-12 h-12 rounded-full bg-[#dfbf5b]/50 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#dfbf5b]" />
              </div>
              <h3 className="text-2xl font-light text-stone-800">
                Unsere Öffnungszeiten
              </h3>
            </div>

            {/* Hours List - Clean Design */}
            <div className="space-y-5">
              {hours.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-stone-700">{day.day}</span>
                  <span
                    className={
                      day.hours === "Ruhetag"
                        ? "text-[#dfbf5b] font-medium"
                        : "text-stone-500"
                    }
                  >
                    {day.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 pt-6 border-t border-stone-100">
              <p className="text-stone-500 text-sm mb-1">
                Rufen Sie uns an, um eine Reservierung zu machen
              </p>
              <p className="text-[#dfbf5b] text-2xl font-light">04502 3640</p>
              <p className="text-stone-500 text-sm mt-2">
                Vorderreihe 1A, Travemünde
              </p>
            </div>
          </motion.div>

          {/* Right Side - Images with Overlap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[24rem]"
          >
            {/* Main Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Due_Frattelli_12.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating Small Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 w-32 h-40 md:w-48 md:h-64 z-10"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-[#dfbf5b]/60 rounded-xl shadow-lg transform rotate-6"></div>
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src="/images/Due_Frattelli_35.jpg"
                    alt="Food Detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
