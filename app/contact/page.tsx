"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Name, email, and message are required.");
      return;
    }

    const mailSubject =
      subject.trim() || "PillionPal Contact Form Enquiry";

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ];

    const mailto = `mailto:support@pillionpal.in?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-[#F5F7F4] dark:bg-[#0B0F0E] transition-colors">
        <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#008955] dark:text-[#3DD68C]">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Questions, feedback, or partnerships — we&apos;re listening.  
            Drop us a message and we&apos;ll get back as soon as we can.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[2fr,1.3fr] gap-10 items-start">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 rounded-2xl bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject (optional)</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="min-h-[140px]"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                )}

                {sent && !error && (
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Opening your email client… you can review and send the mail.
                  </p>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="
                      px-8 py-3 rounded-full
                      bg-[#008955] hover:bg-[#006d44]
                      dark:bg-[#3DD68C] dark:hover:bg-[#32c07d]
                      dark:text-black
                    "
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Side Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-7 rounded-2xl bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-md space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Contact Details
              </h2>

              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[#008955] dark:text-[#3DD68C]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:support@pillionpal.in"
                      className="text-[#008955] dark:text-[#3DD68C] hover:underline"
                    >
                      support@pillionpal.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#008955] dark:text-[#3DD68C]" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p>Visakhapatnam, Andhra Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[#008955] dark:text-[#3DD68C]" />
                  <div>
                    <p className="font-medium">Support</p>
                    <a href="callto:+919390891684">+91 9390891684</a>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 pt-2">
                For internship verification or certificates, please use the{" "}
                <span className="font-medium">Certificate Verification</span> page.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
