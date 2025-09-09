"use client";

import Image from "next/image";
import Link from "next/link";
import CertificateVerification from "@/components/CertificateVerification";

export default function CertificateVerificationPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PillionPal Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-[#008955] font-bold text-xl">PillionPal</span>
            </Link>
            <Link 
              href="/"
              className="text-foreground hover:text-[#008955] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <CertificateVerification />
    </div>
  );
}