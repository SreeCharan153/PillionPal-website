"use client";

import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Bike, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Sign Up in Minutes",
    desc: "Create your PillionPal account with basic details and quick verification.",
  },
  {
    icon: ShieldCheck,
    title: "Verify Your Profile",
    desc: "Secure identity check ensures only trusted riders and pillions join the community.",
  },
  {
    icon: Bike,
    title: "Start Sharing Rides",
    desc: "Whether you're riding or hopping on, share your daily commute and start saving automatically.",
  },
];

export default function JoinSteps() {
  return (
    <section
      className="
        relative py-24 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* subtle bg texture */}
      <div
        className="
          absolute inset-0 opacity-[0.05] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
        "
      />

      <div className="relative max-w-6xl mx-auto z-10">

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
          How to{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Join PillionPal
          </span>
        </motion.h2>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* 3 Steps */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="
                text-center p-8 rounded-2xl
                bg-white/80 dark:bg-[#111A18]/70 
                backdrop-blur-xl
                border border-[#008955]/20 dark:border-[#3DD68C]/20
                shadow-sm
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-300
              "
            >
              <div
                className="
                  w-16 h-16 rounded-full mx-auto mb-6
                  flex items-center justify-center
                  bg-[#008955]/15 dark:bg-[#3DD68C]/15
                "
              >
                <step.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              <h3
                className="
                  text-xl font-semibold mb-3
                  text-gray-900 dark:text-gray-100
                "
              >
                {step.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
