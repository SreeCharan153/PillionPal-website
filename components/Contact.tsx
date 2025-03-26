"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008955] text-center mb-16">
            Contact Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
          href="mailto:tech.collegeride@gmail.com">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card">
              <Mail className="h-8 w-8 text-[#008955] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#008955] mb-2">
                Email Us
              </h3>
              <p className="text-foreground/80 hover:text-[#008955] transition-colors">
                tech.collegeride@gmail.com
              </p>
            </Card>
            </a>
            
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-card">
              <MapPin className="h-8 w-8 text-[#008955] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#008955] mb-2">
                Location
              </h3>
              <p className="text-foreground/80">
                Visakhapatnam, Andhra Pradesh
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}