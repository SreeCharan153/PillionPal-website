"use client";

import { motion } from "framer-motion";
import { Wallet, Clock, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const items = [
  {
    icon: Wallet,
    title: "Affordable Pricing",
    text: "Because commuting shouldn’t drain your wallet. FairSplit ensures transparent, fair travel costs.",
  },
  {
    icon: Clock,
    title: "Faster Daily Commutes",
    text: "Beat the rush and reach your destination quicker with bike-friendly urban mobility.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Rides",
    text: "Choose a sustainable transport option that helps reduce congestion and emissions.",
  },
];

export default function WhyChooseHome() {
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
            Built for Better Daily Travel
          </span>
        </motion.h2>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="group relative p-8 rounded-2xl shadow-md border-gray-200 dark:border-white/10 bg-white dark:bg-[#111A18] transition-all duration-300 hover:shadow-xl">

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#008955]/10 dark:bg-[#3DD68C]/10 mb-6">
                  <item.icon className="h-8 w-8 text-[#008955] dark:text-[#3DD68C]" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-[#008955] dark:text-[#3DD68C]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#008955]/5 dark:bg-[#3DD68C]/5 rounded-2xl transition-opacity pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to full page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link
            href="/why-choose"
            className="
              text-[#008955] dark:text-[#3DD68C] font-semibold 
              hover:underline underline-offset-4 transition
            "
          >
            Learn more about our values →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
