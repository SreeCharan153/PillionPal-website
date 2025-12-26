"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [modalOpen, setModalOpen] = useState(false);

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Why PillionPal", href: "/why-choose" },
    { label: "Safety", href: "/safety" },
    { label: "Riders", href: "/riders" },
    { label: "Careers", href: "/careers" },
    { label: "Certificate Verification", href: "/certificate-verification" },
    { label: "Company Info", href: "/company-info" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { icon: Facebook, href: null },
    { icon: Twitter, href: null },
    { icon: Instagram, href: null },
    { icon: Linkedin, href: "https://www.linkedin.com/company/pillionpal/" },
  ];

  return (
    <>
      {/* FOOTER */}
      <footer className="bg-[#F5F7F4] dark:bg-[#0B0F0E] text-foreground transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="PillionPal Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C]">
                  PillionPal
                </span>
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed max-w-xs">
                PillionPal is a mobility-technology initiative focused on
                transparent and ethical cost sharing for everyday commuting.
              </p>

              <p className="mt-3 text-xs text-foreground/60 max-w-xs leading-relaxed">
                Registered organization on the AICTE National Internship Portal,
                operating in compliance with academic and institutional
                guidelines.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-foreground/70 hover:text-[#008955] dark:hover:text-[#3DD68C] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className="text-[#008955] dark:text-[#3DD68C]"
                  />
                  Visakhapatnam, Andhra Pradesh, India
                </li>
                <li>
                  <a
                    href="mailto:support@pillionpal.in"
                    className="flex items-center gap-2 hover:text-[#008955] dark:hover:text-[#3DD68C]"
                  >
                    <Mail
                      size={16}
                      className="text-[#008955] dark:text-[#3DD68C]"
                    />
                    support@pillionpal.in
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {socials.map((s, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      if (s.href) window.open(s.href, "_blank");
                      else setModalOpen(true);
                    }}
                    className="p-2 rounded-full border border-foreground/10 hover:border-[#008955] dark:hover:border-[#3DD68C] transition-colors"
                  >
                    <s.icon
                      size={20}
                      className="text-foreground/70 hover:text-[#008955] dark:hover:text-[#3DD68C]"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-6 border-t border-foreground/10">
            <p className="text-center text-sm text-foreground/60">
              © {currentYear} PillionPal. All rights reserved.
            </p>

            <p className="mt-2 text-center text-xs text-foreground/50 max-w-3xl mx-auto leading-relaxed">
              PillionPal does not charge any fees for internships listed via the
              AICTE National Internship Portal. Internship participation and
              certification are governed by AICTE guidelines and platform
              policies.
            </p>
          </div>
        </div>
      </footer>

      {/* COMING SOON MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-[#0B0F0E] rounded-2xl p-6 w-full max-w-sm shadow-xl border border-foreground/10 relative"
            >
              <button
                className="absolute top-3 right-3 text-foreground/60 hover:text-foreground"
                onClick={() => setModalOpen(false)}
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-bold text-[#008955] dark:text-[#3DD68C] mb-2">
                Coming Soon
              </h2>

              <p className="text-sm text-foreground/70 mb-5">
                We’re not active on this platform yet. Follow us on LinkedIn for
                official announcements and updates.
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-800"
                >
                  Close
                </button>

                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/pillionpal/",
                      "_blank"
                    )
                  }
                  className="px-4 py-2 text-sm rounded-lg bg-[#008955] text-white dark:bg-[#3DD68C] dark:text-black"
                >
                  LinkedIn
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
