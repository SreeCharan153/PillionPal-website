"use client";

import { motion } from "framer-motion";
import { Target, Leaf } from "lucide-react";

export default function MissionVision() {
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
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative text-center p-8 shadow-lg transition-all duration-300 rounded-2xl bg-white/60 dark:bg-[#002a1d]/60 border border-[#008955]/40 dark:border-[#00ff99]/40 backdrop-blur-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#00ff99] to-[#008955] dark:from-[#00b36b] dark:to-[#002a1d]"></div>
              
              <div className="inline-block p-4 bg-[#008955]/10 dark:bg-[#00ff99]/10 rounded-full shadow-lg mb-6">
                <Target className="h-12 w-12 text-[#008955] dark:text-[#00ff99]" />
              </div>
              
              <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#00ff99] mb-4">
                Our Mission
              </h3>
              
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                To make daily commuting easier, cheaper, and more accessible. We&#39;re committed to providing a reliable platform that connects riders with bike owners, creating a win-win situation for both parties.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative text-center p-8 shadow-lg transition-all duration-300 rounded-2xl bg-white/60 dark:bg-[#002a1d]/60 border border-[#008955]/40 dark:border-[#00ff99]/40 backdrop-blur-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[#00ff99] to-[#008955] dark:from-[#00b36b] dark:to-[#002a1d]"></div>
              
              <div className="inline-block p-4 bg-[#008955]/10 dark:bg-[#00ff99]/10 rounded-full shadow-lg mb-6">
                <Leaf className="h-12 w-12 text-[#008955] dark:text-[#00ff99]" />
              </div>
              
              <h3 className="text-2xl font-semibold text-[#008955] dark:text-[#00ff99] mb-4">
                Our Vision
              </h3>
              
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                To build a sustainable ride-sharing future while reducing traffic congestion and travel costs. We envision a world where transportation is not just about reaching destinations, but about building communities and promoting sustainability.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
