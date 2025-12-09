"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Every feature we build is designed to make daily commuting safer, more transparent, and worry-free.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "PillionPal thrives on trust — connecting riders and bike owners through fairness and shared purpose.",
  },
  {
    icon: Leaf,
    title: "Sustainable Mobility",
    desc: "By sharing rides, we reduce traffic, cut fuel usage, and move towards a greener commuting culture.",
  },
];

export default function OurValues() {
  return (
    <section
      className="
        relative py-28 px-6 
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        overflow-hidden
      "
    >
      {/* Pattern */}
      <div className="
        absolute inset-0 opacity-[0.05] pointer-events-none
        bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
        bg-cover bg-center
      "/>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl md:text-4xl font-bold text-center
            text-gray-900 dark:text-gray-100
          "
        >
          Our{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Values
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="
                p-8 rounded-2xl bg-white/70 dark:bg-[#101715]/60 
                border border-[#008955]/20 dark:border-[#3DD68C]/20
                shadow-sm backdrop-blur-xl
                hover:shadow-md hover:scale-[1.02]
                transition-all
              "
            >
              <div className="
                w-14 h-14 rounded-full flex items-center justify-center
                bg-[#008955]/15 dark:bg-[#3DD68C]/15 
                mb-5 mx-auto
              ">
                <v.icon className="h-7 w-7 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              <h3 className="
                text-xl font-semibold text-center mb-3
                text-gray-900 dark:text-gray-100
              ">
                {v.title}
              </h3>

              <p className="
                text-center text-gray-700 dark:text-gray-300 leading-relaxed
              ">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
