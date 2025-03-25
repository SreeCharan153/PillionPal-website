"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PillionPal Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#008955] font-bold text-xl">PillionPal</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Making daily commuting easier, cheaper, and more accessible for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-foreground/70 hover:text-[#008955] text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-foreground/70 hover:text-[#008955] text-sm transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-foreground/70 hover:text-[#008955] text-sm transition-colors">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70 text-sm">
                Visakhapatnam, Andhra Pradesh
              </li>
              <li>
                <a 
                  href="mailto:tech.collegeride@gmail.com"
                  className="text-foreground/70 hover:text-[#008955] text-sm transition-colors"
                >
                  tech.collegeride@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/70 hover:text-[#008955] transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/70 hover:text-[#008955] transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/70 hover:text-[#008955] transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/pillionpal/"
                whileHover={{ scale: 1.1 }}
                className="text-foreground/70 hover:text-[#008955] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/70">
              © {currentYear} PillionPal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-foreground/70 hover:text-[#008955] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-foreground/70 hover:text-[#008955] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}