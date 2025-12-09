"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section
      className="
        relative py-28 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* Soft background wash */}
      <div
        className="
          absolute inset-0 opacity-[0.06] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-3xl md:text-4xl font-bold 
            text-gray-900 dark:text-gray-100
          "
        >
          Our{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Story
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "90px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            text-lg md:text-xl max-w-3xl mx-auto mt-10
            text-gray-700 dark:text-gray-300 
            leading-relaxed
          "
        >
          PillionPal started with a simple observation — thousands of students 
          and office commuters were traveling the same routes every day, 
          spending more money than necessary, and still wasting time in traffic. 
          At the same time, bike owners were covering these distances alone, 
          often with empty pillion seats.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="
            text-lg md:text-xl max-w-3xl mx-auto mt-6
            text-gray-700 dark:text-gray-300 
            leading-relaxed
          "
        >
          What began as a personal frustration quickly became a mission: 
          create a fair, community-driven way to share rides without the 
          complexity of commercial transport apps. This idea evolved into 
          <span className="font-semibold text-[#008955] dark:text-[#3DD68C]"> PillionPal</span> — a platform built for trust, simplicity, and 
          everyday affordability.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="
            text-lg md:text-xl max-w-3xl mx-auto mt-6
            text-gray-700 dark:text-gray-300 
            leading-relaxed
          "
        >
          Today, PillionPal continues to grow as a community-first mobility 
          solution — one that helps people move smarter, save more, and build 
          meaningful connections on the road.
        </motion.p>

      </div>
    </section>
  );
}
