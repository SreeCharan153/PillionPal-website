"use client";

import HeroHome from "@/components/sections/HeroHome";
import Highlights from "@/components/sections/Highlights";
import WhyChooseHome from "@/components/sections/WhyChooseHome";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#0B0F0E] transition-colors duration-300">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroHome />

      {/* Highlights / Value Props */}
      <Highlights />

      {/* Why Choose Preview */}
      <WhyChooseHome />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
