"use client";

import { motion } from "framer-motion";
import { Wallet, Leaf, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Wallet,
    title: "Budget-Friendly Rides",
    description: "Enjoy cost-effective rides designed for students and office-goers without breaking the bank.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Eco-Friendly",
    description: "Choose a greener way to commute and contribute to a cleaner environment.",
  },
  {
    icon: Clock,
    title: "Beat the Traffic",
    description: "Reach your destination faster than public transport with our reliable bike-sharing service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-background transition-colors duration-300">
      {/* Subtle Pattern Overlay (Light/Dark Mode Aware) */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 dark:opacity-5 pointer-events-none"></div>

      {/* Light Mode Glow Effect */}
      <div className="absolute -top-20 left-1/2 w-96 h-96 bg-[#008955] opacity-20 blur-3xl rounded-full transform -translate-x-1/2 dark:opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#008955] text-center mb-12 dark:text-green-400">
            Why Choose PillionPal?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card
                  className="relative p-8 text-center bg-card rounded-2xl transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl border border-transparent hover:border-[#008955] overflow-hidden group 
                  dark:bg-[#121212] dark:hover:border-green-400 dark:shadow-none"
                >
                  {/* Gradient Hover Effect (Different in Dark Mode) */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#008955] to-transparent opacity-0 
                    group-hover:opacity-20 transition-opacity duration-500 dark:from-green-400 dark:to-transparent dark:opacity-5"
                  />
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#008955] rounded-full mb-6 
                    transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg dark:bg-green-400">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#008955] mb-3 transition-all duration-300 group-hover:scale-105 dark:text-green-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:opacity-90 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
