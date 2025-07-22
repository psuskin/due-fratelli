import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import ImageSlider from "@/components/ImageSlider";
import OurChef from "@/components/OurChef";
import Values from "@/components/Values";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import OpeningHours from "@/components/OpeningHours";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <About />
      <Menu />
      <ImageSlider />
      <OurChef />
      <Values />
      <Gallery />
      <Events />
      <OpeningHours />
      <FAQ />
      <Contact />
    </main>
  );
}
