"use client";

import { Wallet, Leaf, Clock } from "lucide-react";
import FeatureCard from "@/components/why/FeatureCard";

export default function WhyGrid() {
  const features = [
    {
      icon: Wallet,
      title: "FairSplit Cost Sharing",
      description:
        "Travel without burning your wallet. Costs are split transparently between rider and pillion.",
      badge: "Core Feature",
      highlight: true,
    },
    {
      icon: Clock,
      title: "Built for Daily Commutes",
      description:
        "Optimized for routine college and office routes — not random, unpredictable rides.",
    },
    {
      icon: Leaf,
      title: "Greener Mobility",
      description:
        "Fewer solo rides means less congestion and lower emissions — every shared ride helps.",
    },
  ];

  return (
    
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Why{" "}
          <span className="text-[#008955] dark:text-[#3DD68C]">
            PillionPal
          </span>
          ?
        </h2>

        <div className="h-1 w-24 bg-[#008955] dark:bg-[#3DD68C] mx-auto mt-4 mb-12 rounded-full" />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              badge={f.badge}
              highlight={f.highlight}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
