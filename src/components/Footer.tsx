"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-stone-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-[#dfbf5b]/5" />
        <div className="absolute -left-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-[#dfbf5b]/5" />
      </div>

      {/* Large background text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0">
        <span className="font-serif font-bold text-[12vw] md:text-[12vw] lg:text-[16vw] text-[#dfbf5b] opacity-10 tracking-tight whitespace-nowrap">
          Due Fratelli
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-light">
                Due <span className="text-[#dfbf5b]">Fratelli</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Ristorante Due Fratelli - il gusto del mare. Authentische
              italienische Menüs in gemütlicher Atmosphäre. Genießen Sie
              handgemachte Pasta und traditionelle Gerichte aus hochwertigen
              Zutaten.
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-[#dfbf5b] font-light text-lg mb-4">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2 text-stone-400">
              <li className="flex justify-between items-center">
                <span>Montag - Donnerstag</span>
                <span>17:00 - 22:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Freitag - Sonntag</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#dfbf5b] font-light text-lg mb-4">Kontakt</h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a
                  href="tel:+494502/3640"
                  className="hover:text-white transition-colors"
                >
                  +49 4502/3640
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@due-fratelli-del-mare.de"
                  className="hover:text-white transition-colors"
                >
                  info@due-fratelli-del-mare.de
                </a>
              </li>
              <li className="pt-2">
                Vorderreihe 17
                <br />
                23570 Lübeck
                <br />
                Schleswig-Holstein
                <br />
                Deutschland
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#dfbf5b] font-light text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <Link
                  href="#menu"
                  className="hover:text-white transition-colors"
                >
                  Speisekarte
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-stone-500 text-sm">
              © {currentYear} Due Fratelli. Alle Rechte vorbehalten.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-stone-400 hover:text-[#dfbf5b] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
