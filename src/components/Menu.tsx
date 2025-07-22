"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/data/menuItems";

type Category = {
  id:
    | "antipasti"
    | "antipasti-warmes"
    | "pasta"
    | "pizza"
    | "risotto"
    | "pesce"
    | "carne"
    | "beilagen";
  name: string;
  description: string;
};

const categories: Category[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    description: "Traditionelle Vorspeisen aus der mediterranen Küche",
  },
  {
    id: "antipasti-warmes",
    name: "Warmes Antipasti",
    description: "Warme Vorspeisen und Salate",
  },
  {
    id: "pasta",
    name: "Pasta",
    description: "Hausgemachte Pasta-Spezialitäten",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Mit San Marzano Tomatensauce & Fior di Latte Mozzarella",
  },
  {
    id: "risotto",
    name: "Risotto",
    description: "Cremige Risotto-Variationen",
  },
  {
    id: "pesce",
    name: "Pesce",
    description: "Fangfrische Fischgerichte",
  },
  {
    id: "carne",
    name: "Carne",
    description: "Ausgewählte Fleischspezialitäten",
  },
  {
    id: "beilagen",
    name: "Beilagen",
    description: "Side Dishes",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("antipasti");

  // Get filtered menu items
  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  // Get current category
  const currentCategory =
    categories.find((cat) => cat.id === selectedCategory) || categories[0];

  // PDF menu links
  const pdfMenus = [
    {
      id: "desserts",
      name: "Desserts & Grappa",
      description: "Hausgemachte Desserts und erlesene Grappa-Auswahl",
      url: "https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/Dessert_und_Grappa_-_7-11-24.pdf?Expires=1753290971&Signature=jQThxG7eNpadD3paneOm14E0AspshHJ-9ascod~Ay8mS2uk5k05efHiN0l0LNkKYDqMb2bkWFUeVhBK-wP9LjpqSRrhbvkMSGk5HSXjP6eeWUleYxi94vgAilEL~owGQ6gBUWTEfm3-5qHl2dRYdqYcUs69M83fRynSTTnThxS4Fu6a~EL3WGIhP4sINM5QKR~~HlWOeYtiTDwFkeu4w4MqAVMKtx9sMAZEbubg~BxAUTn0TYlNFqD83DxvX3eKaUnqaZDHynGUNqnITgZA0ItNiDj2rHXKkDpGeh7AkgPySy4qkp6caW4BCBe8hS-~qRJviJg7gcLKvI5foJAtGxg__&Key-Pair-Id=K2NXBXLF010TJW",
    },
    {
      id: "tagesempfehlungen",
      name: "Tagesempfehlungen",
      description: "Täglich wechselnde Spezialitäten unserer Küche",
      url: "https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/29.03.25-3.pdf?Expires=1753290971&Signature=UDYmkafE6vW14BKL-RC-P4ojLAPf2WCT1HCQwFXzloncv9r-y7Dj73BR2dbzZBGHqge7Cv5~UP3417BPc9aCGSZWgxCFT4lZmSLXvGMmzGtp7jtwwhyt4emUiylOFT~iiau~r1~u9s-4iEaWPYBuDTnnmqMiwiVmwl1UqQmEQSKgdy3DfdNWubZdwhRVzuh2vteZVRW9q0GbYY~VrSJXqLQ~Xc8JfGwCSKc15YAqcmkS7v3u549i2I1d~6XBOszBRGfNa91WTxX~20qANqIP8XRSItlX8k1Mqbc3BzElFKkUddUbwzhbtygyv78YpYM8zsL6RDBotNLnePJu~RcJbw__&Key-Pair-Id=K2NXBXLF010TJW",
    },
    {
      id: "mittag-del-mare",
      name: "Mittag del Mare",
      description: "Unsere Mittagskarte mit frischen Meeresspezialitäten",
      url: "https://cdn.website-editor.net/s/9ac4331451a84393a6206256715af4cf/files/uploaded/29.03.25-3.pdf?Expires=1753290971&Signature=UDYmkafE6vW14BKL-RC-P4ojLAPf2WCT1HCQwFXzloncv9r-y7Dj73BR2dbzZBGHqge7Cv5~UP3417BPc9aCGSZWgxCFT4lZmSLXvGMmzGtp7jtwwhyt4emUiylOFT~iiau~r1~u9s-4iEaWPYBuDTnnmqMiwiVmwl1UqQmEQSKgdy3DfdNWubZdwhRVzuh2vteZVRW9q0GbYY~VrSJXqLQ~Xc8JfGwCSKc15YAqcmkS7v3u549i2I1d~6XBOszBRGfNa91WTxX~20qANqIP8XRSItlX8k1Mqbc3BzElFKkUddUbwzhbtygyv78YpYM8zsL6RDBotNLnePJu~RcJbw__&Key-Pair-Id=K2NXBXLF010TJW",
    },
  ];

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
              Unser <span className="font-normal text-[#dfbf5b]">Menü</span>
            </h2>
            <motion.div
              className="mt-4 h-[1px] bg-[#dfbf5b] mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <p className="mt-6 text-base leading-7 text-stone-500 max-w-xl mx-auto">
              Eine Reise durch die mediterrane Küche, inspiriert von
              traditionellen Rezepten und modernen Interpretationen.
            </p>
          </div>
        </motion.div>

        {/* Modern Category Navigation - Horizontal Scrollable */}
        <div className="mb-12 relative">
          <div className="flex justify-center overflow-x-auto pb-2 hide-scrollbar">
            <div className="relative z-10 inline-flex bg-white rounded-lg p-1 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)]">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      relative px-6 py-2.5 rounded-md text-sm font-medium tracking-wide whitespace-nowrap
                      ${
                        isActive
                          ? "text-[#dfbf5b]"
                          : "text-stone-500 hover:text-stone-700"
                      }
                      transition-colors duration-200 z-10
                    `}
                    whileHover={{ scale: isActive ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-[#dfbf5b]/10 rounded-md"
                        layoutId="activeTab"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Category Description */}
        <motion.div
          key={`desc-${selectedCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-light text-stone-800">
            {currentCategory.name}
          </h3>
          <p className="mt-2 text-stone-500 max-w-2xl mx-auto text-sm">
            {currentCategory.description}
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`menu-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 lg:gap-x-16">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  className="relative border-b border-stone-100 pb-5 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <h4 className="text-base font-medium text-stone-800 pr-4">
                      {item.name}
                    </h4>
                    <span className="text-base font-medium text-[#dfbf5b] whitespace-nowrap">
                      {item.price} €
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Item options */}
                  {item.options && item.options.length > 0 && (
                    <div className="mt-2">
                      {item.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className="flex justify-between text-sm text-stone-600 italic"
                        >
                          <span>{option.name}</span>
                          <span>{option.price} €</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional PDF Menus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-stone-800">
              Weitere Speisekarten
            </h3>
            <div className="mt-2 h-[1px] bg-[#dfbf5b] w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pdfMenus.map((menu) => (
              <motion.a
                key={menu.id}
                href={menu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-8 bg-white rounded-lg overflow-hidden"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Filling background effect */}
                <div className="absolute inset-0 bg-[#dfbf5b]/10 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-medium text-stone-800 group-hover:text-[#dfbf5b] transition-colors duration-300">
                      {menu.name}
                    </h4>
                    <div className="ml-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm group-hover:bg-[#dfbf5b]/10 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-stone-400 group-hover:text-[#dfbf5b]"
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

                  {/* Bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-100 group-hover:bg-[#dfbf5b] transition-colors duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
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
