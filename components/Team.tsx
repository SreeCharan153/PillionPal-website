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
    <div className="py-24 bg-background relative overflow-hidden">
      {/* 🌟 Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-10%] left-[10%] w-[250px] h-[250px] bg-[#008955] rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1.1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-[-10%] right-[10%] w-[200px] h-[200px] bg-[#00b36b] rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ✨ Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#008955] text-center mb-16">
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
                <Card className="h-[300px] p-6 flex flex-col items-center justify-between rounded-xl bg-white dark:bg-[#1E1E1E] shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                  
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
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#008955] mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Core Team Member</p>
                  </div>

                  {/* 🔗 LinkedIn Button */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#008955] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin size={18} />
                    <span>View Profile</span>
                  </motion.a>

                  {/* ✨ Hover Glow Effect */}
                  <div className="absolute inset-0 bg-[#008955]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
