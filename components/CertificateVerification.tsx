"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Phone,
  Clock
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface CertificateData {
  certificate_id: number;
  name: string;
  mobile_no: string;
  gmailid: string;
  duration_of_internship: string;
  start_date: string;
  end_date: string;
}

interface ApiResponse {
  message: string;
  data: CertificateData;
}

export default function CertificateVerification() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerification = async () => {
    if (!certificateId.trim()) {
      setError("Please enter a certificate ID");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(
        `${API_URL}/certificate-verification/?id=${certificateId}`
      );

      if (response.ok) {
        const data: ApiResponse = await response.json();
        setResult(data);
      } else if (response.status === 404) {
        setError("Certificate not found. Please check the ID and try again.");
      } else {
        setError("An error occurred while verifying the certificate.");
      }
    } catch (err) {
      setError("Unable to connect to the verification service. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleVerification();
  };

  return (
    <div
      className="
        min-h-screen py-20
        bg-[#F5F7F4] dark:bg-[#0B0F0E]
        transition-colors
      "
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER — Hybrid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Image
            src="/logo.png"
            alt="PillionPal Logo"
            width={75}
            height={75}
            className="rounded-full mx-auto mb-4"
          />

          <h1 className="text-4xl font-bold text-[#008955] dark:text-[#3DD68C] mb-2">
            Certificate Verification
          </h1>

          <p className="text-foreground/80 max-w-xl mx-auto">
            Verify internship certificates issued by PillionPal using the unique certificate ID.
          </p>
        </motion.div>

        {/* SEARCH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card className="p-8 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg mb-10 rounded-2xl">
            <Label htmlFor="certificateId" className="text-lg font-medium">
              Certificate ID
            </Label>

            <div className="flex gap-4 mt-3">
              <Input
                id="certificateId"
                type="number"
                placeholder="Enter certificate ID (e.g., 678590)"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={loading}
                className="
                  flex-1 text-lg py-3
                  bg-white dark:bg-[#0F1614]
                  border border-[#008955]/30 dark:border-[#3DD68C]/30
                "
              />

              <Button
                onClick={handleVerification}
                disabled={loading}
                className="
                  px-8 py-3 rounded-full
                  bg-[#008955] hover:bg-[#006d44]
                  dark:bg-[#3DD68C] dark:hover:bg-[#32c07d]
                  dark:text-black
                "
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search size={20} />
                    Verify
                  </div>
                )}
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* ERROR STATE */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <Card className="
              p-6 rounded-2xl
              border border-red-300 dark:border-red-700
              bg-red-50 dark:bg-red-900/20
            ">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-600 dark:text-red-400" size={28} />
                <div>
                  <h3 className="font-semibold text-red-700 dark:text-red-300">
                    Verification Failed
                  </h3>
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* SUCCESS STATE */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12"
          >
            <Card className="
              p-8 rounded-2xl
              bg-green-50 dark:bg-green-900/20
              border border-green-300 dark:border-green-700
              shadow-lg
            ">
              {/* Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-green-200 dark:border-green-800">
                <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                <div>
                  <h2 className="text-2xl font-bold text-green-700 dark:text-green-300">
                    Certificate Verified
                  </h2>
                  <p className="text-green-700 dark:text-green-400">
                    This certificate is valid and issued by PillionPal.
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="grid md:grid-cols-2 gap-10 mt-6">

                {/* Holder */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-800 dark:text-green-200">
                    Certificate Holder
                  </h3>

                  <p className="text-xl font-bold text-[#008955] dark:text-[#3DD68C]">
                    {result.data.name}
                  </p>

                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Mail size={18} /> {result.data.gmailid}
                  </div>

                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Phone size={18} /> {result.data.mobile_no}
                  </div>
                </div>

                {/* Internship */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-800 dark:text-green-200">
                    Internship Details
                  </h3>

                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Clock size={18} />
                    Duration: {result.data.duration_of_internship}
                  </div>

                  <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                    <Calendar size={18} />
                    {result.data.start_date} → {result.data.end_date}
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="text-sm text-green-900 dark:text-green-200">
                      <strong>Certificate ID:</strong> {result.data.certificate_id}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* FOOTER */}
        <div className="text-center mt-16 text-sm text-foreground/70">
          <p>PillionPal © {new Date().getFullYear()}</p>
          <p className="mt-1">
            Registered MSME (Udyam):{" "}
            <span className="font-medium text-[#008955] dark:text-[#3DD68C]">
              UDYAM-AP-10-0114064
            </span>
          </p>
          <p>Visakhapatnam, Andhra Pradesh, India</p>

          <p className="mt-2">
            Contact:{" "}
            <span className="text-[#008955] dark:text-[#3DD68C] font-medium">
              founder@pillionpal.in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
