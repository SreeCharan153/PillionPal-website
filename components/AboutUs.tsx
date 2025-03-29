"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="relative py-24 bg-[url('/background-pattern.svg')] bg-cover bg-center dark:bg-[url('/dark-pattern.svg')] transition-colors duration-500">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#c8fff4]/50 dark:from-[#001a13]/90 dark:to-[#003d29]/60 backdrop-blur-xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Centered Title */}
          <div className="flex justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#008955] dark:text-[#00ff99] text-center mb-16 relative after:absolute after:w-24 after:h-1 after:bg-[#00cc88] dark:after:bg-[#00ff99] after:rounded-full after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-2">
              About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* What is PillionPal? */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 shadow-lg transition-all duration-300 rounded-2xl bg-white/60 dark:bg-[#002a1d]/60 border border-[#008955]/40 dark:border-[#00ff99]/40 backdrop-blur-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#00ff99] to-[#008955] dark:from-[#00b36b] dark:to-[#002a1d]"></div>

              <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#00ff99] mb-4">
                What is PillionPal?
              </h3>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                We provide a cost-effective and convenient ride-sharing solution for students and office commuters. Our platform connects riders with pillions who need quick rides, making daily transportation more accessible and affordable.
              </p>
            </motion.div>

            {/* Why We Started? */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-8 shadow-lg transition-all duration-300 rounded-2xl bg-white/60 dark:bg-[#002a1d]/60 border border-[#008955]/40 dark:border-[#00ff99]/40 backdrop-blur-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#00ff99] to-[#008955] dark:from-[#00b36b] dark:to-[#002a1d]"></div>

              <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#00ff99] mb-4">
                Why We Started?
              </h3>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                Solving high transportation costs and unreliable public transport for daily commuters. We recognized the challenges faced by students and working professionals in their daily commute and created a solution that benefits both riders and bike owners.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
