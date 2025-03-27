"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jagadish Potela",
    image: "/jaga.jpg",
    linkedin: "https://www.linkedin.com/in/jagadish-potela-2b3621283/"
  },
  {
    name: "Sri Charan Machabhakthuni",
    image: "/me.jpg",
    linkedin: "https://www.linkedin.com/in/sri-charan-machabhakthuni"
  },
  {
    name: "Nithin Pammi",
    image: "/nithin.jpg",
    linkedin: "https://www.linkedin.com/in/nithin-pammi/"
  },
  {
    name: "Govardhan Giri Dadi",
    image: "/gov.jpg",
    linkedin: "https://www.linkedin.com/in/dadi-govardhan-giri-a8bb872a4/"
  },
  {
    name: "Raj Kumar Varada",
    image: "/raj.jpg",
    linkedin: "https://www.linkedin.com/in/rajkumar-varada/"
  },
];

export default function Team() {
  return (
    <div className="py-24 bg-background relative overflow-hidden transition-colors duration-500">
      {/* 🌟 Dynamic Background Animation (Adapts to Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-full transition-all duration-500 
            bg-gradient-to-br from-[#f0fdf4] to-[#ffffff] dark:from-[#042f22] dark:to-[#000000]"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🌟 Heading (Static, No Waving) */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#008955] dark:text-[#00d39f] text-center mb-16">
          Meet the Team
        </h2>

        {/* 📌 Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-[300px] p-6 flex flex-col items-center justify-between rounded-xl 
                  bg-white dark:bg-[#1E1E1E] shadow-md hover:shadow-xl dark:hover:shadow-[#00b36b]/50 transition-all duration-300 group relative overflow-hidden">
                  
                  {/* ✨ Glow Effect in Dark Mode */}
                  <motion.div
                    className="absolute inset-0 bg-[#008955]/10 dark:bg-[#00d39f]/20 opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300 blur-[80px]"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />

                  {/* 🎭 Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-24 h-24 rounded-full overflow-hidden shadow-md"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* 🏆 Name & Role */}
                  <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-[#00d39f] mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Core Team Member</p>
                  </motion.div>

                  {/* 🔗 LinkedIn Button */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium 
                      text-gray-800 dark:text-gray-300 hover:text-[#00663f] dark:hover:text-[#00b36b] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin size={18} />
                    <span>View Profile</span>
                  </motion.a>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}