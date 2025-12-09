"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
  index?: number; // for staggered animation
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  badge,
  highlight = false,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "relative p-7 rounded-2xl border shadow-sm backdrop-blur-xl transition-all duration-300",
          "bg-white/85 dark:bg-[#111A18]/80",
          "hover:shadow-md hover:-translate-y-1 hover:scale-[1.01]",
          highlight
            ? "border-[#008955]/50 dark:border-[#3DD68C]/60"
            : "border-[#008955]/18 dark:border-[#3DD68C]/20"
        )}
      >
        {/* Optional badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-[#008955]/10 text-[#008955] dark:bg-[#3DD68C]/15 dark:text-[#3DD68C]">
              {badge}
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 bg-[#008955]/12 dark:bg-[#3DD68C]/15">
          <Icon className="h-6 w-6 text-[#008955] dark:text-[#3DD68C]" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
