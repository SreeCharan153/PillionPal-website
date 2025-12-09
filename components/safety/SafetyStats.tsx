"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Star, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Verified Community Members",
  },
  {
    icon: ShieldCheck,
    value: "4.8 / 5",
    label: "Average Safety Rating",
  },
  {
    icon: CheckCircle,
    value: "25,000+",
    label: "Successful Shared Rides",
  },
  {
    icon: Star,
    value: "98%",
    label: "Positive Ride Feedback",
  },
];

export default function SafetyStats() {
  return (
    <section
      className="
        relative py-24 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* faint texture */}
      <div
        className="
          absolute inset-0 opacity-[0.05] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl md:text-4xl font-bold
            text-gray-900 dark:text-gray-100
          "
        >
          Safety Backed by{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Real Numbers
          </span>
        </motion.h2>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className="
                  w-16 h-16 rounded-full flex items-center justify-center
                  bg-[#008955]/15 dark:bg-[#3DD68C]/15
                  mb-5
                "
              >
                <s.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              <p className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 max-w-[140px] leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
