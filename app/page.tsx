"use client";

import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import Team from "@/components/Team";
import WhyChoose from "@/components/WhyChoose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../public/logo.png";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="PillionPal Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#008955] font-bold text-xl">PillionPal</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-[#008955]">About</a>
              <a href="#mission" className="text-foreground hover:text-[#008955]">Mission</a>
              <a href="#team" className="text-foreground hover:text-[#008955]">Team</a>
              <a href="#why" className="text-foreground hover:text-[#008955]">Why Us</a>
              <a href="#contact" className="text-foreground hover:text-[#008955]">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNextSection}
          className="rounded-full"
        >
          <ChevronDown className="h-6 w-6 text-[#008955]" />
        </Button>
      </div>

      <div id="about">
        <AboutUs />
      </div>
      
      <div id="mission">
        <MissionVision />
      </div>
      
      <div id="team">
        <Team />
      </div>
      
      <div id="why">
        <WhyChoose />
      </div>
      
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}