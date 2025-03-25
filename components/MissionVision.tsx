"use client";

import { motion } from "framer-motion";
import { Target, Leaf } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#008955] text-center mb-16">
            Our Vision & Mission
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="inline-block p-4 bg-card rounded-full shadow-lg mb-6">
                <Target className="h-12 w-12 text-[#008955]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#008955] mb-4">
                Our Mission
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To make daily commuting easier, cheaper, and more accessible. We're committed to providing a reliable platform that connects riders with bike owners, creating a win-win situation for both parties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 bg-card rounded-full shadow-lg mb-6">
                <Leaf className="h-12 w-12 text-[#008955]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#008955] mb-4">
                Our Vision
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                To build a sustainable ride-sharing future while reducing traffic congestion and travel costs. We envision a world where transportation is not just about reaching destinations, but about building communities and promoting sustainability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}