"use client";


import CertificateVerification from "@/components/CertificateVerification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CertificateVerificationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <CertificateVerification />

      <Footer />
    </div>
  );
}