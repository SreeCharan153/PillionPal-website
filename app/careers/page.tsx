"use client";

import Navbar from "@/components/Navbar";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      {/* Careers Section */}
      <main className="flex-1">
        <Careers />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
