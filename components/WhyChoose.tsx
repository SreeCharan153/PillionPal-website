"use client";

import { motion } from "framer-motion";
import { Wallet, Leaf, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Wallet,
    title: "Student & Office Friendly Pricing",
    description: "Affordable rates tailored for daily commuters, making transportation accessible for everyone.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Sustainable Rides",
    description: "Reduce your carbon footprint while saving money with our bike-sharing solution.",
  },
  {
    icon: Clock,
    title: "Faster Than Public Transport",
    description: "Skip the traffic and reach your destination quickly with our reliable bike rides.",
  },
];

export default function WhyChoose() {
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
            Why Choose PillionPal?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <Card className="p-6 text-center h-full hover:shadow-xl transition-shadow bg-card">
                  <div className="inline-block p-3 bg-[#008955] rounded-full mb-6">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#008955] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}