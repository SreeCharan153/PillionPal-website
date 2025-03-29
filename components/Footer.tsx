"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background text-foreground transition-colors duration-300">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008955]/10 via-background to-background dark:from-[#008955]/20 dark:via-background dark:to-background pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-[#008955]/5 dark:bg-[#008955]/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-[#008955]/5 dark:bg-[#008955]/10 blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#008955]/20 dark:bg-[#008955]/30 blur-lg rounded-full" />
                  <Image
                    src="/logo.png"
                    alt="PillionPal Logo"
                    width={48}
                    height={48}
                    className="rounded-full relative"
                  />
                </div>
                <span className="text-[#008955] font-bold text-2xl">PillionPal</span>
              </motion.div>
              <p className="text-foreground/70 dark:text-foreground/60 text-sm leading-relaxed">
                Making daily commuting easier, cheaper, and more accessible for everyone. Join us in revolutionizing the way people travel.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground dark:text-foreground/80 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "Our Mission", "Our Team"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <Link 
                      href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                      className="text-foreground/70 dark:text-foreground/60 hover:text-[#008955] dark:hover:text-[#00b374] text-sm transition-all hover:translate-x-1 inline-flex"
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground dark:text-foreground/80 text-lg">Contact</h3>
              <ul className="space-y-3">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: false }}
                  className="text-foreground/70 dark:text-foreground/60 text-sm flex items-center gap-2"
                >
                  <MapPin size={16} className="text-[#008955] dark:text-[#00b374]" />
                  Visakhapatnam, Andhra Pradesh
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <a 
                    href="mailto:tech.collegeride@gmail.com"
                    className="text-foreground/70 dark:text-foreground/60 hover:text-[#008955] dark:hover:text-[#00b374] text-sm transition-all hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    <Mail size={16} className="text-[#008955] dark:text-[#00b374]" />
                    tech.collegeride@gmail.com
                  </a>
                </motion.li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground dark:text-foreground/80 text-lg">Connect With Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/pillionpal/" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="bg-card hover:bg-[#008955]/10 dark:hover:bg-[#00b374]/20 p-2.5 rounded-full transition-colors group"
                  >
                    <social.icon size={20} className="text-foreground/70 dark:text-foreground/60 group-hover:text-[#008955] dark:group-hover:text-[#00b374] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mt-16 pt-8 border-t border-foreground/10 dark:border-foreground/20"
          >
            <p className="text-sm text-foreground/70 dark:text-foreground/60">
              © {currentYear} PillionPal. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
