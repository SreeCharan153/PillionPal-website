"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useTheme } from "next-themes";

export default function Contact() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark"; // Check if dark mode is enabled

  return (
    <div
      className={`relative py-24 transition-colors duration-500 ease-in-out ${
        isDarkMode
          ? "bg-[#001a13] text-gray-200" // Dark mode improved contrast
          : "bg-[#f0fdfa] text-gray-900" // Light mode background
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className={`text-4xl font-extrabold text-center mb-16 transition-colors ${
            isDarkMode ? "text-[#00ff99]" : "text-[#008955]"
          }`}
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
              className={`p-8 text-center rounded-2xl shadow-xl transition-all duration-300 ease-in-out border backdrop-blur-lg ${
                isDarkMode
                  ? "bg-[#002a1d]/40 border-[#00b36b]/50 hover:bg-[#00b36b]/20"
                  : "bg-white border-[#008955]/40 hover:bg-[#008955]/10"
              }`}
            >
              <Mail
                className={`h-12 w-12 mx-auto mb-4 transition-colors ${
                  isDarkMode ? "text-[#00ff99]" : "text-[#008955]"
                }`}
              />
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
            className={`p-8 text-center rounded-2xl shadow-xl transition-all duration-300 ease-in-out border backdrop-blur-lg ${
              isDarkMode
                ? "bg-[#002a1d]/40 border-[#00b36b]/50 hover:bg-[#00b36b]/20"
                : "bg-white border-[#008955]/40 hover:bg-[#008955]/10"
            }`}
          >
            <MapPin
              className={`h-12 w-12 mx-auto mb-4 transition-colors ${
                isDarkMode ? "text-[#00ff99]" : "text-[#008955]"
              }`}
            />
            <h3 className="text-2xl font-semibold mb-2">Visit Us</h3>
            <p className="text-lg">Visakhapatnam, Andhra Pradesh</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
