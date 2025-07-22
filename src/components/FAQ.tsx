"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ReservationModal from "./ReservationModal";

const FAQ = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // FAQ items
  const faqItems = [
    {
      question: "Wie reserviere ich einen Tisch?",
      answer: (
        <div className="space-y-4">
          <p>
            Ganz einfach per OpenTable.{" "}
            <button
              onClick={() => setIsReservationModalOpen(true)}
              className="text-[#dfbf5b] hover:underline font-medium"
            >
              Jetzt reservieren
            </button>
          </p>
          <p>
            Wenn Sie mit einer größeren Gruppe kommen möchten, rufen Sie uns
            einfach während unserer Öffnungszeiten an oder schreiben Sie uns
            eine E-Mail.
          </p>
          <p className="text-red-600">
            Wichtiger Hinweis: Reservierungen per E-Mail werden unter Umständen
            nicht rechtzeitig bearbeitet!
          </p>
          <div>
            <p>
              Freitags, samstags und sonntags können Sie abends zu folgenden
              Zeiten reservieren:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>18 Uhr</li>
              <li>20 Uhr</li>
              <li>20:30 Uhr</li>
              <li>21 Uhr</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "Bieten Sie einen Lieferdienst an?",
      answer: "Nein, momentan bieten wir keinen Lieferdienst an.",
    },
    {
      question: "Kann ich mein Essen bestellen und abholen?",
      answer: (
        <div className="space-y-2">
          <p>
            Ja, Sie können alle Gerichte auf der regulären Karte auch als
            Take-Away bestellen.
          </p>
          <p className="text-red-600">
            Wichtiger Hinweis: Bestellungen NUR telefonisch!
          </p>
        </div>
      ),
    },
    {
      question: "Wo kann ich parken?",
      answer: (
        <div className="space-y-4">
          <p>
            Nutzen Sie gern einen unserer 6 Parkplätze direkt hinter dem
            Restaurant. Den Parkplatz erreichen Sie über die Kurgartenstraße.
          </p>
          <p>
            Ansonsten parken Sie einfach auf einem Parkplatz in der Nähe, zum
            Beispiel auf dem &quot;Fährvorplatz&quot; oder dem
            &quot;Leuchtenfeld&quot;. Von den Bahnhöfen Lübeck-Travemünde Hafen
            und Lübeck-Travemünde Strand erreichen Sie unser Restaurant
            ebenfalls nach einem kurzen Spaziergang.
          </p>
        </div>
      ),
    },
    {
      question: "Darf ich meinen Hund mitbringen?",
      answer: "Auch Vierbeiner sind bei uns herzlich willkommen.",
    },
    {
      question: "Haben Sie glutenfreie Gerichte?",
      answer: (
        <div className="space-y-4">
          <p>
            Ja, außer Pasta und Bruschetta sind unsere Gerichte alle glutenfrei.
          </p>
          <p className="italic">
            Sprechen Sie uns gern direkt an, da sich die Speisekarte regelmäßig
            ändert.
          </p>
        </div>
      ),
    },
    {
      question: "Wie kann ich mich über Neuigkeiten informieren?",
      answer: (
        <div className="space-y-4">
          <p>Ganz einfach - folgen Sie uns auf Facebook und Instagram!</p>
          <div>
            <p>Hat Ihnen Ihr Besuch bei uns gefallen?</p>
            <p>
              Dann würden wir uns sehr über eine Bewertung auf Tripadvisor oder
              Google Business freuen.
            </p>
          </div>
        </div>
      ),
    },
  ];

  // Toggle function for FAQ items
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
            FAQ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-[#dfbf5b] font-light -mt-16 md:-mt-20 lg:-mt-24 relative z-10"
          >
            Häufig gestellte Fragen
          </motion.p>
        </motion.div>

        {/* Enhanced Layout with Image */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-32 space-y-6">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Due_Frattelli_30.jpg"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="bg-white px-6 py-5 rounded-xl border border-gray-200">
                  <p className="text-stone-600 mb-2 text-sm">
                    Haben Sie weitere Fragen?
                  </p>
                  <p className="text-[#dfbf5b] font-medium">
                    Rufen Sie uns an:{" "}
                    <span className="underline">04502 3640</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b border-stone-100 last:border-b-0 ${
                    activeIndex === index ? "bg-[#dfbf5b]/50" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between focus:outline-none"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-medium text-stone-800 pr-8">
                      {item.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        activeIndex === index
                          ? "bg-[#dfbf5b]/20"
                          : "bg-stone-100"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 text-[#dfbf5b] transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 text-stone-600 leading-relaxed border-t border-stone-100/50 pt-4 mt-1">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
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

export default FAQ;
