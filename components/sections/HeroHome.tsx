"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function HeroHome() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ---------------------- BACKGROUND ANIMATION ----------------------
  useEffect(() => {
    const nodes: any[] = [];
    const mouse = { x: -100, y: -100 };
    const isMobile = window.innerWidth < 768;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const totalNodes = isMobile ? 40 : 90;
    const linkDistance = isMobile ? 70 : 130;
    const cursorLinkDistance = isMobile ? 90 : 140;

    for (let i = 0; i < totalNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (isMobile ? 1.2 : 1.8) + 0.8,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      });
    }

    const updateMouse = (e: MouseEvent | TouchEvent) => {
      if ("clientX" in e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const draw = () => {
      if (!ctx) return;

      ctx.fillStyle = isDarkMode ? "#0B0F0E" : "#F5F7F4";
      ctx.fillRect(0, 0, width, height);

      // Node movement
      nodes.forEach((node) => {
        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > width) node.speedX *= -1;
        if (node.y < 0 || node.y > height) node.speedY *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode
          ? "rgba(61, 214, 140, 0.6)" // mint
          : "rgba(0, 137, 85, 0.6)";  // brand green
        ctx.fill();
      });

      // Node linking
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(61, 214, 140, ${1 - distance / linkDistance})`
              : `rgba(0, 90, 61, ${1 - distance / linkDistance})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Cursor linking
      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < cursorLinkDistance) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDarkMode
            ? `rgba(61, 214, 140, ${1 - dist / cursorLinkDistance})`
            : `rgba(0, 90, 61, ${1 - dist / cursorLinkDistance})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("touchmove", updateMouse);
    draw();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("touchmove", updateMouse);
    };
  }, [isDarkMode]);

  // ---------------------- UI ----------------------
  return (
    <section
      className={`
        relative min-h-screen flex items-center justify-center overflow-hidden 
        pt-24 pb-20 transition-colors duration-500
        ${isDarkMode ? "bg-[#0B0F0E]" : "bg-[#F5F7F4]"}
      `}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className={isDarkMode ? "text-[#3DD68C]" : "text-[#008955]"}>
            PillionPal
          </span>
          <span className="block text-gray-900 dark:text-gray-200">
            Cut Cost, Not Convenience
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className={`
            text-lg md:text-xl max-w-2xl mx-auto
            ${isDarkMode ? "text-gray-300" : "text-gray-700"}
          `}
        >
          Affordable & reliable bike rides powered by{" "}
          <span
            className={`font-semibold ${
              isDarkMode ? "text-[#3DD68C]" : "text-[#008955]"
            }`}
          >
            FairSplit Pricing
          </span>
          . The smarter way to move across your city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <Button
            className="
              px-10 py-4 text-lg rounded-full shadow-lg
              bg-[#008955] hover:bg-[#007144] text-white
              dark:bg-[#3DD68C] dark:hover:bg-[#32c07d] dark:text-black
            "
            onClick={() => window.location.assign("/about")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
