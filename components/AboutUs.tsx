"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
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
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <h3 className="text-2xl font-semibold text-[#008955] mb-4">
                What is PillionPal?
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                We provide a cost-effective and convenient ride-sharing solution for students and office commuters. Our platform connects riders with Pillions , who needs a quick rides to making daily transportation more accessible and affordable.
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow bg-card">
              <h3 className="text-2xl font-semibold text-[#008955] mb-4">
                Why We Started?
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Solving high transportation costs and unreliable public transport for daily commuters. We recognized the challenges faced by students and working professionals in their daily commute and created a solution that benefits both riders and bike owners.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}