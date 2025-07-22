import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CookiesConsentModal } from "@/components/CookiesConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla-one",
});

export const metadata: Metadata = {
  title: "Due Fratelli - Italian Restaurant",
  description:
    "Savor moments of bliss with authentic Italian cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fjallaOne.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <CookiesConsentModal />
      </body>
    </html>
  );
}
