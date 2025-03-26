"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jagadish Potela",
    //role: "Founder",
    image: "/jaga.jpg",
    linkedin: "https://www.linkedin.com/in/jagadish-potela-2b3621283/"
  },
  {
    name: "Sri Charan Machabhakthuni",
    //role: "Co-Founder",
    image: "/me.jpg",
    linkedin: "https://www.linkedin.com/in/sri-charan-machabhakthuni"
  },
  {
    name: "Nithin Pammi",
    //role: "Application Developer",
    image: "/nithin.jpg",
    linkedin: "https://www.linkedin.com/in/nithin-pammi/"
  },
  {
    name: "Govardhan Giri Dadi",
    //role: "Web Developer",
    image: "/gov.jpg",
    linkedin: "https://www.linkedin.com/in/dadi-govardhan-giri-a8bb872a4/"
  },
  {
    name: "Raj Kumar Varada",
    //role: "Web Developer",
    image: "/raj.jpg",
    linkedin: "https://www.linkedin.com/in/varada-raj-kumar"
  },
];

export default function Team() {
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
            Meet the Team
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <Card className="h-[280px] p-6 flex flex-col items-center justify-between hover:shadow-xl transition-all duration-300 group bg-card relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden relative group-hover:scale-95 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-[#008955] mb-1 line-clamp-2">
                      {member.name}
                    </h3>
                  </div>
                  
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-sm text-foreground/70 hover:text-[#008955] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Linkedin size={18} />
                    <span>View Profile</span>
                  </motion.a>

                  <div className="absolute inset-0 bg-[#008955]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}