'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Category = {
  id: string;
  name: string;
  description?: string;
  pdfUrl: string;
};

const Menu = () => {
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string | null>(null);
  const [selectedMenuName, setSelectedMenuName] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );
      setIsMobile(mobile || window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Main menu categories - organized as requested
  const categories: Category[] = [
    {
      id: 'mittag-del-mare',
      name: 'Mittagskarte',
      description: 'Unsere Mittagskarte mit frischen Meeresspezialitäten und saisonalen Gerichten',
      pdfUrl: '/pdf/mittagskarte-due.pdf',
    },
    {
      id: 'hauptspeisekarte',
      name: 'Hauptspeisekarte',
      description:
        'Unsere komplette Speisekarte mit Antipasti, Pasta, Pizza, Fleisch- und Fischgerichten',
      pdfUrl: '/pdf/hauptspeisekarte-due.pdf', // You'll need to provide the actual URL for the main menu
    },
    {
      id: 'desserts',
      name: 'Dessertkarte',
      description: 'Hausgemachte Desserts und erlesene Grappa-Auswahl',
      pdfUrl: '/pdf/desserkarte-due.pdf',
    },
  ];

  // Additional menu items (restored from original)
  // const additionalMenus = [
  //   {
  //     id: 'desserts-additional',
  //     name: 'Desserts & Grappa',
  //     description: 'Hausgemachte Desserts und erlesene Grappa-Auswahl',
  //     url: 'https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/Dessert_und_Grappa_-_7-11-24.pdf?Expires=1753290971&Signature=jQThxG7eNpadD3paneOm14E0AspshHJ-9ascod~Ay8mS2uk5k05efHiN0l0LNkKYDqMb2bkWFUeVhBK-wP9LjpqSRrhbvkMSGk5HSXjP6eeWUleYxi94vgAilEL~owGQ6gBUWTEfm3-5qHl2dRYdqYcUs69M83fRynSTTnThxS4Fu6a~EL3WGIhP4sINM5QKR~~HlWOeYtiTDwFkeu4w4MqAVMKtx9sMAZEbubg~BxAUTn0TYlNFqD83DxvX3eKaUnqaZDHynGUNqnITgZA0ItNiDj2rHXKkDpGeh7AkgPySy4qkp6caW4BCBe8hS-~qRJviJg7gcLKvI5foJAtGxg__&Key-Pair-Id=K2NXBXLF010TJW',
  //   },
  //   {
  //     id: 'tagesempfehlungen',
  //     name: 'Tagesempfehlungen',
  //     description: 'Täglich wechselnde Spezialitäten unserer Küche',
  //     url: 'https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/29.03.25-3.pdf?Expires=1753290971&Signature=UDYmkafE6vW14BKL-RC-P4ojLAPf2WCT1HCQwFXzloncv9r-y7Dj73BR2dbzZBGHqge7Cv5~UP3417BPc9aCGSZWgxCFT4lZmSLXvGMmzGtp7jtwwhyt4emUiylOFT~iiau~r1~u9s-4iEaWPYBuDTnnmqMiwiVmwl1UqQmEQSKgdy3DfdNWubZdwhRVzuh2vteZVRW9q0GbYY~VrSJXqLQ~Xc8JfGwCSKc15YAqcmkS7v3u549i2I1d~6XBOszBRGfNa91WTxX~20qANqIP8XRSItlX8k1Mqbc3BzElFKkUddUbwzhbtygyv78YpYM8zsL6RDBotNLnePJu~RcJbw__&Key-Pair-Id=K2NXBXLF010TJW',
  //   },
  //   {
  //     id: 'mittag-del-mare-additional',
  //     name: 'Mittag del Mare',
  //     description: 'Unsere Mittagskarte mit frischen Meeresspezialitäten',
  //     url: 'https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/29.03.25-3.pdf?Expires=1753290971&Signature=UDYmkafE6vW14BKL-RC-P4ojLAPf2WCT1HCQwFXzloncv9r-y7Dj73BR2dbzZBGHqge7Cv5~UP3417BPc9aCGSZWgxCFT4lZmSLXvGMmzGtp7jtwwhyt4emUiylOFT~iiau~r1~u9s-4iEaWPYBuDTnnmqMiwiVmwl1UqQmEQSKgdy3DfdNWubZdwhRVzuh2vteZVRW9q0GbYY~VrSJXqLQ~Xc8JfGwCSKc15YAqcmkS7v3u549i2I1d~6XBOszBRGfNa91WTxX~20qANqIP8XRSItlX8k1Mqbc3BzElFKkUddUbwzhbtygyv78YpYM8zsL6RDBotNLnePJu~RcJbw__&Key-Pair-Id=K2NXBXLF010TJW',
  //   },
  // ];

  const openPdfModal = (pdfUrl: string, menuName: string) => {
    // On mobile, open PDF in new tab instead of modal
    if (isMobile) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    setSelectedPdfUrl(pdfUrl);
    setSelectedMenuName(menuName);
  };

  const closePdfModal = () => {
    setSelectedPdfUrl(null);
    setSelectedMenuName('');
  };

  return (
    <section id="menu" className="bg-white py-24 sm:py-32 overflow-x-hidden">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Text - Oversized */}
          <div className="absolute -top-8 md:-top-12 lg:-top-16 left-0 w-full overflow-hidden pointer-events-none">
            <div className="text-[20vw] leading-none font-bold text-stone-900/[0.03] select-none tracking-tighter">
              MENÜ
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-light text-stone-800 sm:text-5xl tracking-wide">
              Unser <span className="font-normal text-yellow-600">Menü</span>
            </h2>
            <motion.div
              className="mt-4 h-[1px] bg-yellow-600 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="mt-6 text-base leading-7 text-stone-500 max-w-xl mx-auto">
              Eine Reise durch die mediterrane Küche, inspiriert von traditionellen Rezepten und
              modernen Interpretationen.
            </p>
          </div>
        </motion.div>

        {/* Main Menu Items Grid - 3 columns */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => openPdfModal(category.pdfUrl, category.name)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="group cursor-pointer border-0 relative block w-full p-8 bg-white rounded-lg overflow-hidden border border-stone-100 hover:border-yellow-600/20 transition-all duration-300"
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Filling background effect */}
                  <div className="absolute inset-0 bg-yellow-600/5 transform origin-bottom transition-transform duration-300 ease-out scale-y-0 group-hover:scale-y-100" />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <h4 className="text-xl font-medium text-stone-800 group-hover:text-yellow-600 transition-colors duration-300">
                        {category.name}
                      </h4>
                      {/* Mobile indicator */}
                      {isMobile && (
                        <div className="flex items-center text-yellow-600 ml-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {category.description && (
                      <p className="text-sm text-stone-500 group-hover:text-stone-600 transition-colors duration-300 leading-relaxed mb-4">
                        {category.description}
                      </p>
                    )}

                    <div className="text-xs text-yellow-600 font-medium uppercase tracking-wide">
                      {isMobile ? 'PDF öffnen' : 'Menü anzeigen'}
                    </div>

                    {/* Highlight for main menu */}
                    {/* {category.id === 'hauptspeisekarte' && (
                      <div className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">
                        Hauptmenü
                      </div>
                    )} */}

                    {/* Bottom border */}
                    <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-stone-100 group-hover:bg-yellow-600 transition-colors duration-300" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* PDF Modal - Only show on desktop */}
        <AnimatePresence>
          {selectedPdfUrl && !isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closePdfModal}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-stone-200">
                  <h3 className="text-xl font-medium text-stone-800">{selectedMenuName}</h3>
                  <div className="flex items-center gap-4">
                    {/* Download button */}
                    <a
                      href={selectedPdfUrl}
                      download
                      className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download
                    </a>
                    {/* Open in new tab button */}
                    <a
                      href={selectedPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-600 hover:text-yellow-700 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Neuer Tab
                    </a>
                    {/* Close button */}
                    <button
                      onClick={closePdfModal}
                      className="p-2 rounded-full hover:bg-stone-100 transition-colors duration-200"
                    >
                      <svg
                        className="w-6 h-6 text-stone-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* PDF Iframe with enhanced mobile support */}
                <div className="h-[calc(100%-80px)]">
                  <iframe
                    src={`${selectedPdfUrl}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
                    title={selectedMenuName}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allow="fullscreen"
                    style={{
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Menus Section */}
{/*         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-stone-800">Weitere Speisekarten</h3>
            <div className="mt-2 h-[1px] bg-yellow-600 w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalMenus.map((menu) => (
              <motion.a
                key={menu.id}
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-8 bg-white rounded-lg overflow-hidden border border-stone-100 hover:border-yellow-600/20"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-yellow-600/10 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-medium text-stone-800 group-hover:text-yellow-600 transition-colors duration-300">
                      {menu.name}
                    </h4>
                    <div className="ml-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm group-hover:bg-yellow-600/10 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-stone-400 group-hover:text-yellow-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-stone-500 group-hover:text-stone-600 transition-colors duration-300">
                    {menu.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-100 group-hover:bg-yellow-600 transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Menu;
