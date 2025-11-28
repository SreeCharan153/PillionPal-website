"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Mail } from "lucide-react";

// ----------------------
// JOB OPENINGS (Internship-based)
// ----------------------
const jobOpenings = [
  {
    title: "Backend Development Intern (Python/FastAPI)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Work on production-level APIs including authentication, FairSplit cost engine, ride matching logic, and trip management.",
    requirements: [
      "Basic Python knowledge",
      "Understanding of FastAPI or Flask",
      "SQL basics",
      "Git/GitHub familiarity",
      "Eagerness to learn and build real systems"
    ]
  },
  {
    title: "Frontend Intern (React/Next.js)",
    department: "Engineering",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Build UI screens for onboarding, dashboards, trip management, and integrate them with backend APIs.",
    requirements: [
      "React or Next.js basics",
      "API integration understanding",
      "Tailwind CSS familiarity",
      "Basic UI component experience"
    ]
  },
  {
    title: "UI/UX Design Intern",
    department: "Design",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Design clean, intuitive mobile app screens, flows, and experiences for the PillionPal platform.",
    requirements: [
      "Figma basics",
      "Understanding of UX flows",
      "Creativity and clean design sense",
      "Mobile-first mindset"
    ]
  },
  {
    title: "Data Analyst Intern",
    department: "Data",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Work on analyzing ride patterns, user behaviour, and matching accuracy to improve PillionPal’s engine.",
    requirements: [
      "Excel/Google Sheets proficiency",
      "SQL or Python basics (preferred)",
      "Attention to detail",
      "Ability to interpret and communicate insights"
    ]
  },
  {
    title: "Marketing Intern",
    department: "Marketing",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Assist with campus outreach, content creation, and launch marketing for PillionPal’s user base.",
    requirements: [
      "Communication skills",
      "Creativity in content",
      "Basic social media knowledge",
      "Interest in startup marketing"
    ]
  },
  {
    title: "Business Development Intern",
    department: "Business",
    location: "Remote",
    type: "Internship",
    experience: "0-1 years",
    description:
      "Help execute college partnerships, gather user feedback, and coordinate early-stage pilot operations.",
    requirements: [
      "Communication skills",
      "Community engagement interest",
      "Basic BD understanding",
      "Startup mindset"
    ]
  }
];

// ----------------------
// BENEFITS
// ----------------------
const benefits = [
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work with a passionate team of innovators transforming mobility."
  },
  {
    icon: Briefcase,
    title: "Skill Growth",
    description: "Real project-based learning with production exposure."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Remote-friendly workflow with flexible timings."
  },
  {
    icon: MapPin,
    title: "Real Impact",
    description: "Your work shapes the actual PillionPal platform."
  }
];

export default function Careers() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#008955] mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Help us build the future of two-wheeler ride-sharing with real, meaningful work.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#008955] text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center rounded-2xl border shadow-md hover:shadow-xl transition-all">
                  <div className="inline-block p-3 bg-[#008955] rounded-full mb-4">
                    <b.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#008955] mb-2">{b.title}</h3>
                  <p className="text-foreground/80">{b.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* JOB OPENINGS */}
        <section>
          <h2 className="text-3xl font-bold text-[#008955] text-center mb-12">
            Internship Roles (Jan 2025 Intake)
          </h2>

          <div className="space-y-6">
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#008955]">{job.title}</h3>

                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mt-3">
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
                      className="bg-[#008955] hover:bg-[#006d44] mt-4 lg:mt-0"
                      onClick={() =>
                        (window.location.href =
                          `mailto:tech.collegeride@gmail.com?subject=Application for ${job.title}`)
                      }
                    >
                      Apply Now
                    </Button>
                  </div>

                  <p className="text-foreground/80 mb-5">{job.description}</p>

                  <h4 className="font-semibold text-[#008955] mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, ridx) => (
                      <li key={ridx} className="flex gap-2">
                        <div className="w-2 h-2 bg-[#008955] rounded-full mt-2" />
                        <span className="text-foreground/80">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ----------------------- */}
        {/* INTERN STRUCTURE SECTION */}
        {/* ----------------------- */}
        <div className="mt-20 p-10 bg-card border rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#008955] mb-6">
            How Internships Work at PillionPal
          </h2>

          <ul className="space-y-4 text-foreground/80 leading-relaxed">
            <li>• Interns work on real modules of the PillionPal platform (backend APIs, matching logic, FairSplit engine, UI screens).</li>
            <li>• All internships are fully project-based, not training-based.</li>
            <li>• Weekly sprints with GitHub commits, standups and code reviews.</li>
            <li>• Direct mentorship from the founder and core engineers.</li>
            <li>• Duration: 4-8 weeks beginning January 2025.</li>
            <li>
              • Interns receive:
              <ul className="ml-6 list-disc mt-2">
                <li>PillionPal Experience Certificate</li>
                <li>AICTE Internship Certificate (via AICTE Portal after completion)</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <section className="mt-16">
          <Card className="p-8 text-center bg-muted rounded-2xl">
            <h2 className="text-2xl font-bold text-[#008955] mb-4">
              Don&apos;t See a Perfect Match?
            </h2>
            <p className="text-foreground/80 mb-6">
              We&apos;re always open to passionate contributors.  
              Send your resume if you want to be part of the mission.
            </p>

            <Button
              variant="outline"
              className="border-[#008955] text-[#008955] hover:bg-[#008955] hover:text-white"
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
