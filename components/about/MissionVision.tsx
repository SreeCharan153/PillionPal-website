"use client";

import { motion } from "framer-motion";
import { Target, Leaf } from "lucide-react";

export default function MissionVision() {
  return (
    <section
      className="
        relative py-24 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* Background pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.08] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
        "
      />

      {/* Radial fade */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.25)_45%,rgba(255,255,255,0)_80%)]
          dark:bg-[radial-gradient(circle_at_center,rgba(11,15,14,0.7)_0%,rgba(11,15,14,0.3)_45%,rgba(11,15,14,0)_80%)]
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            text-3xl md:text-4xl font-bold text-center
            text-gray-900 dark:text-gray-100
          "
        >
          Our{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Mission & Vision
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              p-8 rounded-2xl
              bg-white/70 dark:bg-[#101715]/60
              border border-[#008955]/20 dark:border-[#3DD68C]/20
              shadow-sm backdrop-blur-xl
              hover:shadow-md transition-all
            "
          >
            <div
              className="
                w-14 h-14 rounded-full flex items-center justify-center
                bg-[#008955]/15 dark:bg-[#3DD68C]/15
                mb-6
              "
            >
              <Target className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Mission
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To enable affordable and transparent daily commuting by connecting
              riders and pillions traveling along similar routes. PillionPal is
              designed to reduce individual travel costs while ensuring clarity,
              fairness, and accountability in cost sharing.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="
              p-8 rounded-2xl
              bg-white/70 dark:bg-[#101715]/60
              border border-[#008955]/20 dark:border-[#3DD68C]/20
              shadow-sm backdrop-blur-xl
              hover:shadow-md transition-all
            "
          >
            <div
              className="
                w-14 h-14 rounded-full flex items-center justify-center
                bg-[#008955]/15 dark:bg-[#3DD68C]/15
                mb-6
              "
            >
              <Leaf className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Our Vision
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To build a sustainable, shared mobility ecosystem that reduces
              traffic congestion and environmental impact while becoming a
              reliable commuting option for campuses and urban communities
              across India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
