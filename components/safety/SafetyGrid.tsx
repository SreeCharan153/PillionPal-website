"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  IdCard,
  PhoneCall,
  Star,
} from "lucide-react";

const safetyItems = [
  {
    icon: IdCard,
    title: "Verified Profiles",
    desc: "Every rider and pillion completes identity verification to ensure a safe and trusted community.",
  },
  {
    icon: ShieldCheck,
    title: "Fair & Transparent System",
    desc: "Clear ride details, verified connections, and FairSplit ensure zero price manipulation or hidden charges.",
  },
  {
    icon: PhoneCall,
    title: "Emergency Support",
    desc: "Built-in emergency triggers allow quick reach-out to trusted contacts during any uncertain situation.",
  },
  {
    icon: Star,
    title: "Ratings & Trust Signals",
    desc: "Both riders and pillions maintain a public trust score based on behavior, punctuality, and previous rides.",
  },
];

export default function SafetyGrid() {
  return (
    <section
      className="
        relative py-24 px-6
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* background texture */}
      <div
        className="
          absolute inset-0 opacity-[0.05] pointer-events-none
          bg-[url('/pattern.svg')] dark:bg-[url('/pattern-dark.svg')]
          bg-cover bg-center
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
          Safety is Our{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            Top Priority
          </span>
        </motion.h2>

        {/* underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            h-1 bg-[#008955] dark:bg-[#3DD68C]
            mx-auto mt-4 rounded-full
          "
        />

        {/* Safety Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          {safetyItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="
                p-8 rounded-2xl
                bg-white/80 dark:bg-[#111A18]/70 
                backdrop-blur-xl
                border border-[#008955]/25 dark:border-[#3DD68C]/25
                shadow-sm hover:shadow-md hover:scale-[1.015]
                transition-all duration-300
                flex gap-5
              "
            >
              <div
                className="
                  w-14 h-14 rounded-full flex items-center justify-center
                  bg-[#008955]/15 dark:bg-[#3DD68C]/15 flex-shrink-0
                "
              >
                <item.icon className="h-7 w-7 text-[#008955] dark:text-[#3DD68C]" />
              </div>

              <div>
                <h3
                  className="
                    text-lg font-semibold mb-2
                    text-gray-900 dark:text-gray-100
                  "
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
