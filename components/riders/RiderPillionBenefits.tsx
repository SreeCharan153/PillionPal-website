"use client";

import { motion } from "framer-motion";
import {
  WalletMinimal,
  Clock,
  Users,
  ShieldCheck,
  MapPin,
  Smile,
} from "lucide-react";

export default function RiderPillionBenefits() {
  const riderBenefits = [
    {
      icon: WalletMinimal,
      title: "Save Your Fuel Costs",
      desc: "Share your routine commute and reduce your daily fuel expenses through FairSplit.",
    },
    {
      icon: Clock,
      title: "Faster Daily Commute",
      desc: "Skip overcrowded buses and long waiting times. Enjoy smoother, faster rides.",
    },
    {
      icon: Users,
      title: "Trusted Community Travel",
      desc: "Ride with verified users from your campus or locality for safer shared mobility.",
    },
  ];

  const pillionBenefits = [
    {
      icon: MapPin,
      title: "Affordable Daily Travel",
      desc: "Travel for a fraction of the usual cost by sharing rides with nearby verified riders.",
    },
    {
      icon: Smile,
      title: "Comfort & Convenience",
      desc: "Avoid long waits, packed autos, and unreliable transport. Get reliable rides instantly.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Verified Profiles",
      desc: "Every rider is verified with safety, trust rating, and identity checks in the platform.",
    },
  ];

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
          absolute inset-0 opacity-[0.05]
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center pointer-events-none
        "
      />

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
          Benefits for{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Riders & Pillions
          </span>
        </motion.h2>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "180px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* 2-column card layout */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* Rider Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-2xl p-10 
              bg-white/80 dark:bg-[#111A18]/70 backdrop-blur-xl
              border border-[#008955]/20 dark:border-[#3DD68C]/20
              shadow-sm hover:shadow-md hover:scale-[1.01]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#3DD68C] mb-6 text-center">
              Rider Benefits
            </h3>

            <div className="space-y-8">
              {riderBenefits.map((b, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#008955]/15 dark:bg-[#3DD68C]/15">
                    <b.icon className="h-6 w-6 text-[#008955] dark:text-[#3DD68C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {b.title}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pillion Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              rounded-2xl p-10 
              bg-white/80 dark:bg-[#111A18]/70 backdrop-blur-xl
              border border-[#008955]/20 dark:border-[#3DD68C]/20
              shadow-sm hover:shadow-md hover:scale-[1.01]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#3DD68C] mb-6 text-center">
              Pillion Benefits
            </h3>

            <div className="space-y-8">
              {pillionBenefits.map((b, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#008955]/15 dark:bg-[#3DD68C]/15">
                    <b.icon className="h-6 w-6 text-[#008955] dark:text-[#3DD68C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {b.title}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
