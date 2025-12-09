"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section
      className="
        relative py-32 px-6 
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        overflow-hidden
      "
    >
      {/* Soft background mesh */}
      <div className="
        absolute inset-0 opacity-[0.12] pointer-events-none
        bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
        bg-cover bg-center
      " />

      {/* Radial fade for premium depth */}
      <div className="
        absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0)_80%)]
        dark:bg-[radial-gradient(circle_at_center,rgba(11,15,14,0.75)_0%,rgba(11,15,14,0.35)_45%,rgba(11,15,14,0)_80%)]
      " />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            text-4xl md:text-5xl font-extrabold leading-tight
            text-gray-900 dark:text-gray-100
          "
        >
          About{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            PillionPal
          </span>
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "110px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C] 
            mx-auto mt-4 rounded-full
          "
        />

        {/* Subtitle / Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="
            text-lg md:text-xl max-w-2xl mx-auto mt-8
            text-gray-700 dark:text-gray-300 leading-relaxed
          "
        >
          We’re on a mission to make everyday commuting simpler, faster, and 
          more affordable. PillionPal connects riders and bike owners through 
          a safe, reliable and fair cost-sharing system built for real-world travel.
        </motion.p>

      </div>
    </section>
  );
}
