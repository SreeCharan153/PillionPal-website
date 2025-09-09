"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle, XCircle, Calendar, Mail, Phone, Clock } from "lucide-react";
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
      setError("Unable to connect to the verification service. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerification();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#008955] mb-4">
          Certificate Verification
        </h1>
        <p className="text-foreground/80 text-lg">
          Enter a certificate ID to verify its authenticity
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="p-8 mb-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="certificateId" className="text-lg font-medium">
                Certificate ID
              </Label>
              <div className="flex gap-4">
                <Input
                  id="certificateId"
                  type="number"
                  placeholder="Enter certificate ID (e.g., 678590)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 text-lg py-3"
                  disabled={loading}
                />
                <Button
                  onClick={handleVerification}
                  disabled={loading}
                  className="bg-[#008955] hover:bg-[#006d44] px-8 py-3"
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
            </div>
          </div>
        </Card>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800 mb-8">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-600 dark:text-red-400" size={24} />
                <div>
                  <h3 className="font-semibold text-red-800 dark:text-red-200">
                    Verification Failed
                  </h3>
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Success Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-green-200 dark:border-green-800">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={32} />
                  <div>
                    <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">
                      Certificate Valid
                    </h2>
                    <p className="text-green-700 dark:text-green-300">
                      This certificate has been successfully verified
                    </p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Certificate Holder
                      </h3>
                      <p className="text-xl font-bold text-[#008955]">
                        {result.data.name}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={18} className="text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-300">
                        {result.data.gmailid}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-300">
                        {result.data.mobile_no}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Internship Details
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock size={18} className="text-green-600 dark:text-green-400" />
                          <span className="text-green-700 dark:text-green-300">
                            Duration: {result.data.duration_of_internship}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-green-600 dark:text-green-400" />
                          <span className="text-green-700 dark:text-green-300">
                            {result.data.start_date} to {result.data.end_date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                      <p className="text-sm text-green-800 dark:text-green-200">
                        <strong>Certificate ID:</strong> {result.data.certificate_id}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}