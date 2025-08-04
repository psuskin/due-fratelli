'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReservationModal from './ReservationModal';

const ReservationButton = ({
  isScrolled,
  className = '',
  onClick,
}: {
  isScrolled: boolean;
  className?: string;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`
      bg-[#dfbf5b] cursor-pointer text-white rounded-full
      transition-all duration-200 hover:bg-[#dfbf5b]/90
      shadow-sm hover:shadow-md
      ${isScrolled ? 'py-2 px-6' : 'py-2 px-6'}
      ${className}
    `}
  >
    Reservieren
  </motion.button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#menu', label: 'Speisekarte' },
    { href: '#about', label: 'Über uns' },
    { href: '#events', label: 'Veranstaltungen' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: 0,
          height: isScrolled ? 56 : 64,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-sm shadow-lg'
              : 'bg-[#dfbf5b]/90 backdrop-blur-sm'
          }
          md:rounded-2xl
          w-[calc(100%-2rem)] md:w-[35%] md:min-w-[500px]
          overflow-hidden
        `}
      >
        <nav className="relative h-full">
          <motion.div
            className="flex items-center h-full px-5 gap-8"
            animate={{
              gap: isScrolled ? '1.5rem' : '2rem',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo */}
            <motion.div
              animate={{
                scale: isScrolled ? 0.95 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/"
                className={`
                  text-lg font-light tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap
                  ${isScrolled ? 'text-stone-800' : 'text-white'}
                `}
              >
                Due{' '}
                <span className={`font-normal ${isScrolled ? 'text-[#dfbf5b]' : 'text-white'}`}>
                  Fratelli
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm transition-colors duration-200 relative group
                    ${
                      isScrolled
                        ? 'text-stone-700 hover:text-[#dfbf5b]'
                        : 'text-white/90 hover:text-white'
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`
                    absolute -left-2 -right-2 top-1/2 -translate-y-1/2 h-[120%] rounded-lg opacity-0
                    group-hover:opacity-100 transition-opacity duration-300 -z-1
                    ${isScrolled ? 'bg-stone-50/80' : 'bg-white/10'}
                  `}
                  />
                </Link>
              ))}
            </div>

            {/* Reservation Button - Desktop */}
            <div className="hidden md:block">
              <ReservationButton
                isScrolled={isScrolled}
                onClick={() => setIsReservationModalOpen(true)}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden relative w-8 h-8 flex flex-col justify-center items-center group ml-auto"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <span
                  className={`
                    absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out
                    ${isScrolled ? 'bg-stone-800' : 'bg-white'}
                    ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}
                  `}
                />
                <span
                  className={`
                    absolute w-5 h-0.5 transform transition-all duration-300 ease-in-out
                    ${isScrolled ? 'bg-stone-800' : 'bg-white'}
                    ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}
                  `}
                />
              </div>
            </button>
          </motion.div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`
                fixed top-24 left-4 right-4 z-50 md:hidden
                overflow-hidden rounded-xl
                ${isScrolled ? 'bg-white' : 'bg-[#dfbf5b]'}
                shadow-lg
              `}
            >
              <motion.div
                className="py-4 px-4 space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block py-3 px-4 text-[15px] font-medium rounded-lg transition-all duration-200
                        ${
                          isScrolled
                            ? 'text-stone-700 hover:text-[#dfbf5b] hover:bg-stone-50/70'
                            : 'text-white hover:bg-white/10'
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="pt-3 px-4"
                >
                  <ReservationButton
                    isScrolled={isScrolled}
                    className="w-full py-3 text-[15px]"
                    onClick={() => setIsReservationModalOpen(true)}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
