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
      {/* Background pattern */}
      <div
        className="
          absolute inset-0 opacity-[0.06] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
        "
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
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
          PillionPal originated from a practical observation rather than a
          business trend. Across college campuses and urban neighborhoods,
          thousands of students and professionals were commuting along identical
          routes every day—often alone—while others nearby were spending
          disproportionately on the same journeys.
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
          Instead of treating this as a social inconvenience, it was approached
          as a systems problem: how to match compatible routes and distribute
          travel costs fairly without turning everyday commuting into a
          commercial transaction. This led to the design of a structured
          ride-matching flow and the FairSplit pricing logic.
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
          Today, <span className="font-semibold text-[#008955] dark:text-[#3DD68C]">PillionPal</span>{" "}
          is being built as a community-first mobility platform with a clear
          focus on transparency, accountability, and long-term usability—starting
          with campuses and expanding into broader urban commuting ecosystems.
        </motion.p>
      </div>
    </section>
  );
}
