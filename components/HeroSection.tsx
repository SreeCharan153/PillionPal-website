"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#f4f4f4] dark:bg-[#121212] pt-16 overflow-hidden">
      {/* 🎨 Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circular Glows */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.2, scale: 1.2 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-30%] left-[10%] w-[300px] h-[300px] bg-[#008955] rounded-full blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1.1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-[-20%] right-[5%] w-[250px] h-[250px] bg-[#00b36b] rounded-full blur-[120px]"
        />

        {/* 🎭 Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#008955]/10 via-transparent to-[#000]/5" />

        {/* 📈 Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#008955/10_1px,transparent_1px),linear-gradient(to_bottom,#008955/10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      {/* 🔹 Content Section */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* 🌟 Title with Neon Glow */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff99] to-[#00b36b] bg-clip-text text-transparent drop-shadow-lg">
            PillionPal – Cut Cost, Not Convenience
          </h1>

          {/* 🏍️ Subtitle with Enhanced Readability */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Affordable & reliable bike rides at your fingertips. Save money while reaching your destination faster.
          </p>

          {/* 🎯 Call-to-Action Button with Glassmorphism */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#008955] px-10 py-4 text-lg rounded-full text-white shadow-lg backdrop-blur-md transition-all duration-300 transform hover:shadow-xl hover:bg-[#007144]"
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
