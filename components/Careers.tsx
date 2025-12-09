"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Mail, Rocket, Target } from "lucide-react";
import { useTheme } from "next-themes";


// ----------------------
// JOB OPENINGS
// ----------------------
const jobOpenings = [
  {
    title: "Backend Development Intern (Python/FastAPI)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    experience: "0–1 years",
    description:
      "Work on real APIs — authentication, FairSplit pricing engine, ride matching logic, and rider-pillion flows.",
    requirements: [
      "Basic Python knowledge",
      "Understanding of FastAPI or Flask",
      "SQL basics",
      "Git/GitHub familiarity",
      "Strong desire to learn and ship"
    ]
  },
  {
    title: "Frontend Intern (React/Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    experience: "0–1 years",
    description:
      "Build fast, clean UI for onboarding, dashboards, rides, and connect them with our backend APIs.",
    requirements: [
      "React or Next.js basics",
      "API integration understanding",
      "Tailwind CSS familiarity",
      "Good eye for UI"
    ]
  },
  {
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    experience: "0–1 years",
    description:
      "Design modern, minimal digital experiences for PillionPal. Work on full app & web flows.",
    requirements: ["Figma basics", "Understanding of UX flows", "Creativity", "Mobile-first mindset"]
  },
  {
    title: "Data Analyst Intern",
    department: "Data",
    location: "Remote",
    type: "Internship",
    experience: "0–1 years",
    description:
      "Work on ride patterns, commuter behavior, matching accuracy, and optimize FairSplit outcomes.",
    requirements: [
      "Excel/Sheets proficiency",
      "SQL or Python basics",
      "Attention to detail",
      "Ability to derive insights"
    ]
  }
];

// ----------------------
// BENEFITS
// ----------------------
const benefits = [
  {
    icon: Rocket,
    title: "Real Startup Exposure",
    description: "Work in a fast-moving environment where your decisions actually matter."
  },
  {
    icon: Target,
    title: "Purpose-Driven Work",
    description: "You help reduce daily commute stress for students & professionals."
  },
  {
    icon: Clock,
    title: "Skill Acceleration",
    description: "Hands-on projects, reviews, sprints — no boring training sessions."
  },
  {
    icon: Users,
    title: "Work With the Core Team",
    description: "Direct mentorship from the founder & engineers building the platform."
  }
];

export default function Careers() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
        min-h-screen pb-24 pt-32
        transition-colors duration-300
        ${isDark ? "bg-[#0B0F0E]" : "bg-[#F5F7F4]"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h1
            className="
              text-4xl md:text-5xl font-extrabold 
              text-[#008955] dark:text-[#3DD68C] mb-6
            "
          >
            Build the Future of Daily Mobility
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join PillionPal and help shape a cleaner, smarter, and more affordable way for
            millions to commute every day.
          </p>
        </motion.div>

        {/* BENEFITS SECTION */}
        <section className="mb-20">
          <h2
            className="text-3xl font-bold text-[#008955] dark:text-[#3DD68C] text-center mb-12"
          >
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="
                    p-8 rounded-2xl shadow-lg hover:shadow-xl 
                    bg-white dark:bg-[#111A18]
                    border border-[#008955]/20 dark:border-[#3DD68C]/20
                    text-center transition-all
                  "
                >
                  <div
                    className="
                      p-4 rounded-full bg-[#008955] dark:bg-[#3DD68C] 
                      inline-block mb-4
                    "
                  >
                    <b.icon className="h-6 w-6 text-white dark:text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#008955] dark:text-[#3DD68C] mb-3">
                    {b.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{b.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>


        {/* INTERNSHIP OPENINGS */}
        <section>
          <h2
            className="text-3xl font-bold text-[#008955] dark:text-[#3DD68C] text-center mb-16"
          >
            Internship Roles — Jan 2025 Intake
          </h2>

          <div className="space-y-8">
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className="
                    p-10 rounded-2xl shadow-lg hover:shadow-xl
                    bg-white dark:bg-[#111A18]
                    border border-[#008955]/20 dark:border-[#3DD68C]/20
                    transition-all
                  "
                >
                  <div className="flex flex-col lg:flex-row justify-between mb-6">

                    <div>
                      <h3 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C]">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300 mt-3">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} /> {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={16} /> {job.experience}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="
                        bg-[#008955] hover:bg-[#006d44] 
                        dark:bg-[#3DD68C] dark:hover:bg-[#32c07d]
                        dark:text-black
                        mt-4 lg:mt-0
                      "
                      onClick={() =>
                        (window.location.href = `mailto:tech.collegeride@gmail.com?subject=Application for ${job.title}`)
                      }
                    >
                      Apply Now
                    </Button>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>

                  <h4 className="font-semibold text-[#008955] dark:text-[#3DD68C] mb-3">
                    Requirements:
                  </h4>

                  <ul className="space-y-2">
                    {job.requirements.map((req, ridx) => (
                      <li key={ridx} className="flex gap-2">
                        <div className="w-2 h-2 bg-[#008955] dark:bg-[#3DD68C] rounded-full mt-2" />
                        <span className="text-gray-700 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-20">
          <Card
            className="
              p-10 text-center rounded-2xl shadow-lg bg-white dark:bg-[#111A18]
              border border-[#008955]/20 dark:border-[#3DD68C]/20
            "
          >
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Don&apos;t See a Perfect Match?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We&apos;re always open to passionate contributors.  
              Send your resume and we&apos;ll explore the right fit for you.
            </p>

            <Button
              variant="outline"
              className="
                border-[#008955] text-[#008955] 
                hover:bg-[#008955] hover:text-white
                dark:border-[#3DD68C] dark:text-[#3DD68C]
                dark:hover:bg-[#3DD68C] dark:hover:text-black
              "
              onClick={() =>
                (window.location.href =
                  "mailto:tech.collegeride@gmail.com?subject=General Application")
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Resume
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}
