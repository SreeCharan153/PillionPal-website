"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodes: any[] = [];
  let mouse = { x: -100, y: -100 };
  let isMobile = window.innerWidth < 768; // 📱 Check if mobile

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // 🌐 Adjust the number of nodes based on screen size
    const totalNodes = isMobile ? 50 : 100; // 📱 Reduce nodes for mobile
    const linkDistance = isMobile ? 80 : 140; // 📱 Smaller link range
    const cursorLinkDistance = isMobile ? 100 : 150; // 📱 Reduce cursor link range

    for (let i = 0; i < totalNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (isMobile ? 1.5 : 2) + 1, // 📱 Smaller dots on mobile
        speedX: Math.random() * 0.6 - 0.3, // 📱 Slower movement
        speedY: Math.random() * 0.6 - 0.3,
      });
    }

    // 🎯 Cursor Tracking
    const updateMouse = (e: MouseEvent | TouchEvent) => {
      if ("clientX" in e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      } else {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    // 🧠 Draw Neural Network with Mobile Optimizations
    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let node of nodes) {
        // 🏃 Nodes Move Freely
        node.x += node.speedX;
        node.y += node.speedY;

        // 🌌 Keep Nodes Inside the Canvas
        if (node.x < 0 || node.x > width) node.speedX *= -1;
        if (node.y < 0 || node.y > height) node.speedY *= -1;

        // 🟢 Draw Nodes
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 153, 0.7)";
        ctx.fill();
      }

      // 🔗 Draw Dynamic Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          let nodeA = nodes[i];
          let nodeB = nodes[j];
          let distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);

          if (distance < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(0, 255, 153, ${1 - distance / linkDistance})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 🖱️ Neural Connection with Cursor
      for (let node of nodes) {
        let dx = mouse.x - node.x;
        let dy = mouse.y - node.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < cursorLinkDistance) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${1 - distance / cursorLinkDistance})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("touchmove", updateMouse); // 📱 Support touch devices
    draw();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("touchmove", updateMouse);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#121212] pt-16 overflow-hidden">
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
          {/* ✨ Title with Neural Glow */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff99] to-[#00b36b] bg-clip-text text-transparent drop-shadow-lg">
            PillionPal – Cut Cost Not Convenience
          </h1>

          {/* 🏍️ Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Affordable & reliable bike rides at your fingertips. Save money while reaching your destination faster.
          </p>

          {/* 🎯 Call-to-Action Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#008955] px-10 py-4 text-lg rounded-full text-white shadow-lg backdrop-blur-md transition-all duration-300 transform hover:shadow-xl hover:bg-[#007144]"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More About Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
