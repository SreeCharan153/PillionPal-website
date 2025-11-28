"use client";

import Image from "next/image";
import Link from "next/link";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PillionPal Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
              <span className="text-[#008955] font-bold text-xl">
                PillionPal
              </span>
            </Link>

            {/* Back Button */}
            <Link 
              href="/"
              className="text-sm font-medium text-foreground hover:text-[#008955] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Careers Section */}
      <main className="flex-1">
        <Careers />
      </main>
    </div>
  );
}
