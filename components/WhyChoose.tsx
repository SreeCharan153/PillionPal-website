"use client";

import { motion } from "framer-motion";
import { Wallet, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Budget-Friendly Rides",
    description:
      "Enjoy cost-effective rides designed for students and office commuters without breaking the bank.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Commuting",
    description:
      "Reduce carbon emissions and support a greener future with every shared ride.",
  },
  {
    icon: Clock,
    title: "Beat Traffic Jams",
    description:
      "Navigate through congestion and reach your destination faster using two-wheelers.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="relative py-24 bg-white dark:bg-[#0B0F0E] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-16"
        >
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Why Choose PillionPal?
          </span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl shadow-md border border-gray-200 
                         dark:border-white/10 bg-white dark:bg-[#111A18] 
                         transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 
                              rounded-full bg-[#008955]/10 dark:bg-[#3DD68C]/10 mb-6">
                <feature.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#008955] dark:text-[#3DD68C]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 
                           group-hover:opacity-100 transition-opacity 
                           bg-[#008955]/5 dark:bg-[#3DD68C]/5 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
