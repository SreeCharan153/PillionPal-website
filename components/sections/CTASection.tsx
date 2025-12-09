"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="
        py-24 px-6 
        bg-white dark:bg-[#0B0F0E] 
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold mb-6"
        >
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Ride Smarter with PillionPal
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            max-w-2xl mx-auto mb-10 
            text-gray-700 dark:text-gray-300 
            text-lg leading-relaxed
          "
        >
          Join thousands of commuters choosing a faster, more affordable, and eco-friendly way to travel.  
          Your daily rides just got smarter.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Button
            className="
              px-10 py-4 text-lg rounded-full 
              bg-[#008955] hover:bg-[#007144] text-white
              dark:bg-[#3DD68C] dark:hover:bg-[#32c07d] dark:text-black
              shadow-lg
            "
            onClick={() => window.location.assign("/about")}
          >
            Learn More About Us
          </Button>
        </motion.div>

        {/* Optional App store placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {/* Replace these when app launches */}
          <div className="opacity-60 text-sm text-gray-500 dark:text-gray-400">
            App coming soon to Play Store & App Store
          </div>
        </motion.div>

      </div>
    </section>
  );
}
