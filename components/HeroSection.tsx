"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-background pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-muted">
        
        {/* Animated Circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-[#008955]/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-[#008955]/15"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#008955/2_1px,transparent_1px),linear-gradient(to_bottom,#008955/2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading with Gradient Text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#008955] to-[#00b36b] bg-clip-text text-transparent">
            PillionPal – Cut Cost, Not Convenience
          </h1>

          {/* Subtitle with Better Contrast */}
          <p className="text-xl sm:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
            Affordable & reliable bike rides at your fingertips.
          </p>

          {/* Enhanced Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-[#008955] hover:bg-[#006d44] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}