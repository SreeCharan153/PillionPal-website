"use client";

import { motion } from "framer-motion";
import { Timer, Leaf, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Wallet,
    title: "Affordable Commutes",
    desc: "Cut your travel costs with FairSplit Pricing—pay only your fair share, nothing more.",
  },
  {
    icon: Timer,
    title: "Faster Than Public Transport",
    desc: "Skip traffic, avoid delays, and reach your destination on time—every time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Mobility",
    desc: "Reduce your carbon footprint by choosing a smarter and greener way to commute.",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-white dark:bg-[#0B0F0E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-extrabold mb-16"
        >
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Why Ride With PillionPal?
          </span>
        </motion.h2>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card className="group p-8 rounded-2xl shadow-md border-gray-200 dark:border-white/10 bg-white dark:bg-[#111A18] transition-all duration-300 hover:shadow-xl">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full
                              bg-[#008955]/10 dark:bg-[#3DD68C]/10 mb-6">
                  <item.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-[#008955] dark:text-[#3DD68C]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#008955]/5 dark:bg-[#3DD68C]/5 rounded-2xl transition-opacity pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
