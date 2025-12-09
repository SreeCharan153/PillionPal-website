"use client";

import { motion } from "framer-motion";
import { MapPin, Bike, SplitSquareHorizontal } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Set Your Route",
    desc: "Enter where you're heading. Riders and bike owners nearby get matched instantly.",
  },
  {
    icon: Bike,
    title: "Share the Ride",
    desc: "Hop on with a trusted rider or take someone along. Save time and beat traffic.",
  },
  {
    icon: SplitSquareHorizontal,
    title: "FairSplit Pricing",
    desc: "No bargaining. No confusion. Costs are automatically split based on distance and bike mileage.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
        relative py-28 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        overflow-hidden
      "
    >
      {/* pattern */}
      <div className="
        absolute inset-0 opacity-[0.05] pointer-events-none
        bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
        bg-cover bg-center
      " />

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
          How{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            PillionPal Works
          </span>
        </motion.h2>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="
                p-8 rounded-2xl text-center
                bg-white/70 dark:bg-[#101715]/60
                border border-[#008955]/20 dark:border-[#3DD68C]/20
                shadow-sm backdrop-blur-xl
                hover:shadow-md hover:scale-[1.02]
                transition-all
              "
            >
              <div className="
                w-16 h-16 rounded-full flex items-center justify-center 
                bg-[#008955]/15 dark:bg-[#3DD68C]/15 mb-6 mx-auto
              ">
                <step.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              <h3 className="
                text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3
              ">
                {step.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
