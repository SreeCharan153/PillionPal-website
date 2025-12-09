"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import ThemeToggle from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Why PillionPal", href: "/why-choose" },
    { label: "Safety", href: "/safety" },
    { label: "Riders", href: "/riders" },
    { label: "Careers", href: "/careers" },
    { label: "Certificate Verification", href: "/certificate-verification" },
    { label: "Company Info", href: "/company-info" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          backdrop-blur-xl bg-white/85 dark:bg-[#0C1311]/90
          border-b border-gray-200 dark:border-white/10
          transition-all duration-300
        "
      >
        <nav
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            h-16 flex items-center justify-between
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="PillionPal Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-extrabold tracking-tight text-[#008955] dark:text-[#3DD68C]">
              PillionPal
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "text-[#008955] dark:text-[#3DD68C] font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#008955] dark:hover:text-[#3DD68C]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Button */}
          <button className="md:hidden p-2" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/30 backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* RIGHT SIDE DRAWER */}
      <div
        className={cn(
          `
            fixed top-0 right-0 h-full w-72
            bg-white dark:bg-[#0C1311]
            border-l border-gray-200 dark:border-white/10
            z-50 p-6 flex flex-col gap-6
            transform transition-transform duration-300
          `,
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              alt="PillionPal Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[#008955] dark:text-[#3DD68C]">
              PillionPal
            </span>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-base px-1 py-1 rounded-md transition-colors",
                  isActive
                    ? "text-[#008955] dark:text-[#3DD68C] font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#008955] dark:hover:text-[#3DD68C]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="mt-auto pt-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
