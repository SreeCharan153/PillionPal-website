"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes"; // ✅ Import Next.js Theme Hook

export default function HeroSection() {
  const { theme, setTheme } = useTheme(); // ✅ Use Global Theme
  const isDarkMode = theme === "dark"; // ✅ Sync with Global Theme
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    const totalNodes = isMobile ? 50 : 100;
    const linkDistance = isMobile ? 80 : 140;
    const cursorLinkDistance = isMobile ? 100 : 150;

    for (let i = 0; i < totalNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (isMobile ? 1.5 : 2) + 1,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3,
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

      ctx.fillStyle = isDarkMode ? "#121212" : "#f0fdf4";
      ctx.fillRect(0, 0, width, height);

      for (let node of nodes) {
        node.x += node.speedX;
        node.y += node.speedY;

        if (node.x < 0 || node.x > width) node.speedX *= -1;
        if (node.y < 0 || node.y > height) node.speedY *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? "rgba(0, 255, 153, 0.7)" : "rgba(0, 137, 85, 0.7)";
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          let nodeA = nodes[i];
          let nodeB = nodes[j];
          let distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);

          if (distance < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(0, 255, 255, ${1 - distance / linkDistance})`
              : `rgba(0, 100, 63, ${1 - distance / linkDistance})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (let node of nodes) {
        let dx = mouse.x - node.x;
        let dy = mouse.y - node.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < cursorLinkDistance) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isDarkMode
            ? `rgba(0, 255, 255, ${1 - distance / cursorLinkDistance})`
            : `rgba(0, 100, 63, ${1 - distance / cursorLinkDistance})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

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

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-[#121212]" : "bg-[#f0fdf4]"
      } pt-16 overflow-hidden`}
    >
      {/* 🧠 Neural Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* 🌟 Hero Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <h1 className={`text-5xl md:text-6xl font-bold text-[#00ff99]`}>
            PillionPal – Cut Cost, Not Convenience
          </h1>

          <p className={`text-lg md:text-xl ${isDarkMode ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto`}>
            <span className={isDarkMode ? "text-[#00ff99] font-semibold" : "text-[#008955] font-semibold"}>Affordable</span> &{" "}
            <span className={isDarkMode ? "text-[#00b36b] font-semibold" : "text-[#005c3d] font-semibold"}>reliable</span> bike rides at your fingertips.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#007144] text-white px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-xl">
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
