'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import ReservationModal from './ReservationModal';

const OurChef = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-[140vh] bg-stone-50">
      {/* Reservation Modal */}
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Main Image Section - Full Width */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://le-cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/dms3rep/multi/opt/WhatsApp+Image+2024-07-08+at+15.50.13-1920w.jpeg?Expires=1756711519&Signature=Dp9JOIhcTu~yhhU3WVqhzlIOakVw2KpojF3lp4RzRgYPvU5ch-HWeZ~UzYwGw4fIV8NQqK9XAgicmQBx5PLxj1x9YBpwSBtTIqBch~I~NfUxOR0oTKuSJPT0GtkBAgCOK-ntVqLqc3qCJ5kEb4mhlnzFvkjnDF7TO3FwhFAoLcH069ATlaWHbeNHMDBL~2SPmJ0-5EczwzTZo2o5LtHaunnse3dQa3hB3LZIWd2XW69mJC1Ke4PqOT--8Sro2iPYD-nYiQPX59U0ws-1IzGaHFGodaS~06GbH7fB5dJTYowWkR7-uPUKC0Tbm2zOHllc~dNH4btxUzWH~kYoM6a-wA__&Key-Pair-Id=K2NXBXLF010TJW"
            alt="Our Executive Chef preparing a dish with precision and passion"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        {/* Creative Text Presentation - Half in image, half outside */}
        <div className="absolute top-0 left-0 right-0">
          <div className="container mx-auto px-4 pt-16 md:pt-24 lg:pt-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Background Text - Oversized */}
              <div className="absolute -top-8 md:-top-12 lg:-top-16 left-0 w-full overflow-hidden">
                <div className="text-[20vw] leading-none font-bold text-white/10 select-none tracking-tighter">
                  CHEF
                </div>
              </div>

              {/* Main Title */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 max-w-xl"
              >
                <div className="h-1 w-24 bg-[#dfbf5b]" />
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                  Ein Meister <br />
                  seines Berufs
                </h2>
                <p className="text-xl text-white/80 max-w-md mb-8">
                  Mit Leidenschaft und Präzision in jedes Gericht, unser Chef schafft kulinarische
                  Meisterwerke, die eine Geschichte erzählen.
                </p>

                {/* Reservation Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button variant="primary" onClick={openModal}>
                    Tisch reservieren
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Age Badge */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-[20%] right-[10%] backdrop-blur-sm rounded-full h-32 w-32 flex flex-col items-center justify-center shadow-lg bg-[#dfbf5b]"
        >
          <span className="text-4xl font-bold text-white">24</span>
          <span className="text-sm text-white/90 uppercase tracking-wider">
            Jahre alt
          </span>
        </motion.div> */}
      </div>

      {/* Content Section */}
      <div className="relative bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Story Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="h-px w-12" style={{ backgroundColor: '#dfbf5b' }} />
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Diese Geschichte beginnt in Albanien. Tirana, die Hauptstadt eines ehrwürdigen
                    Landes. Toni ist noch ein Teenager, aber sein kulinares Talent ist bereits
                    offensichtlich. Bald darauf arbeitet er für das beste Restaurant der Stadt.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-[#dfbf5b]">
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Im Jahr 2020, in der Wirbelsturm der Pandemie, wird er Teil unserer DUE-Familie.
                    Jeder erkennt sofort: &quot;Ein Glücksfall!&quot;
                  </p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <p className="text-lg text-stone-600 leading-relaxed">
                  Der Erste im Küche und der Letzte, der geht. Was passieren musste, ist passiert:
                  Im Jahr 2022 wurde Toni unser Chef. Es gibt keinen Zweifel: Er hat Due Fratelli
                  auf den nächsten Level gebracht.
                </p>

                {/* Values */}
                <div className="pt-8 space-y-4">
                  <div className="flex flex-col gap-4">
                    {['Leidenschaft', 'Harte Arbeit', 'Perfektion'].map((value, index) => (
                      <motion.div
                        key={value}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + index * 0.1,
                        }}
                        className="group flex items-center gap-4 cursor-default"
                      >
                        <span className="h-px w-8 group-hover:w-12 transition-all duration-300 bg-[#dfbf5b]" />
                        <span className="text-2xl font-light text-stone-800 group-hover:text-[#dfbf5b] transition-colors duration-300">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurChef;
