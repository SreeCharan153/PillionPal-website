"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative py-24 bg-[#f0fdfa] dark:bg-[#001a13] text-gray-900 dark:text-gray-200 transition-colors duration-500 ease-in-out">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl font-extrabold text-center mb-16 text-[#008955] dark:text-[#00ff99] transition-colors"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Email Card */}
          <a href="mailto:tech.collegeride@gmail.com" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-8 text-center rounded-2xl shadow-xl transition-all duration-300 ease-in-out border backdrop-blur-lg bg-white dark:bg-[#002a1d]/40 border-[#008955]/40 dark:border-[#00ff99]/50 hover:bg-[#008955]/10 dark:hover:bg-[#00b36b]/20"
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-[#008955] dark:text-[#00ff99] transition-colors" />
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <p className="text-lg transition-all hover:underline">
                tech.collegeride@gmail.com
              </p>
            </motion.div>
          </a>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-8 text-center rounded-2xl shadow-xl transition-all duration-300 ease-in-out border backdrop-blur-lg bg-white dark:bg-[#002a1d]/40 border-[#008955]/40 dark:border-[#00ff99]/50 hover:bg-[#008955]/10 dark:hover:bg-[#00b36b]/20"
          >
            <MapPin className="h-12 w-12 mx-auto mb-4 text-[#008955] dark:text-[#00ff99] transition-colors" />
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-lg">Visakhapatnam, Andhra Pradesh</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
