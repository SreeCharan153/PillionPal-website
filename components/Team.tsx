"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Jagadish Potela",
    role: "Founder",
    image: "/jaga.jpg",
    linkedin: "https://www.linkedin.com/in/jagadish-potela-2b3621283/",
  },
  {
    name: "Sri Charan Machabhakthuni",
    role: "Co-Founder",
    image: "/me.jpg",
    linkedin: "https://www.linkedin.com/in/sri-charan-machabhakthuni",
  },
  {
    name: "Nithin Pammi",
    role: "Core Team Member",
    image: "/nithin.jpg",
    linkedin: "https://www.linkedin.com/in/nithin-pammi/",
  },
  {
    name: "Govardhan Giri Dadi",
    role: "Core Team Member",
    image: "/gov.jpg",
    linkedin: "https://www.linkedin.com/in/dadi-govardhan-giri-a8bb872a4/",
  },
  {
    name: "Raj Kumar Varada",
    role: "Core Team Member",
    image: "/raj.jpg",
    linkedin: "https://www.linkedin.com/in/rajkumar-varada/",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#008955] dark:text-[#3DD68C] text-center mb-16"
        >
          Meet the Team
        </motion.h2>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="
                  p-6 h-[300px] 
                  rounded-2xl border 
                  shadow-md hover:shadow-xl 
                  bg-white dark:bg-[#111A18]
                  border-[#008955]/20 dark:border-[#3DD68C]/20
                  transition-all duration-300 flex flex-col items-center justify-between
                "
              >
                {/* PROFILE IMAGE */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* NAME + ROLE */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-[#3DD68C]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>

                {/* LINKEDIN */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="
                    text-sm font-medium flex items-center gap-2 
                    text-[#008955] dark:text-[#3DD68C]
                    hover:underline
                    transition-colors
                  "
                >
                  <Linkedin size={18} />
                  View Profile
                </motion.a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
