"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Mail, Phone } from "lucide-react";

const jobOpenings = [
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Visakhapatnam, AP",
    type: "Full-time",
    experience: "2-4 years",
    description: "Join our team to build the next generation of our mobile application. Work with React Native, Flutter, or native development.",
    requirements: [
      "Experience with React Native or Flutter",
      "Knowledge of mobile app deployment",
      "Understanding of API integration",
      "Experience with state management"
    ]
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    location: "Visakhapatnam, AP",
    type: "Full-time",
    experience: "1-3 years",
    description: "Help us scale our backend infrastructure and build robust APIs that power our ride-sharing platform.",
    requirements: [
      "Experience with Python/FastAPI or Node.js",
      "Database design and optimization",
      "API development and documentation",
      "Cloud services experience (AWS/GCP)"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Visakhapatnam, AP",
    type: "Full-time",
    experience: "1-3 years",
    description: "Create intuitive and beautiful user experiences for our mobile and web applications.",
    requirements: [
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Understanding of mobile-first design",
      "Experience with user research",
      "Portfolio showcasing mobile app designs"
    ]
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Visakhapatnam, AP",
    type: "Full-time",
    experience: "1-2 years",
    description: "Drive user acquisition and engagement through digital marketing campaigns and community building.",
    requirements: [
      "Experience with digital marketing",
      "Social media management skills",
      "Content creation abilities",
      "Analytics and data-driven approach"
    ]
  },
  {
    title: "Business Development Intern",
    department: "Business",
    location: "Visakhapatnam, AP",
    type: "Internship",
    experience: "0-1 years",
    description: "Help expand our reach to colleges and universities. Perfect for students looking to gain real-world experience.",
    requirements: [
      "Strong communication skills",
      "Interest in startup environment",
      "Ability to work with student communities",
      "Basic understanding of business development"
    ]
  }
];

const benefits = [
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work with a passionate team of innovators"
  },
  {
    icon: Briefcase,
    title: "Growth Opportunities",
    description: "Advance your career in a fast-growing startup"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work-life balance with flexible scheduling"
  },
  {
    icon: MapPin,
    title: "Great Location",
    description: "Modern office space in Visakhapatnam"
  }
];

export default function Careers() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
            Help us revolutionize transportation and make daily commuting more accessible, 
            affordable, and sustainable for everyone.
          </p>
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#008955] text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-shadow bg-card">
                  <div className="inline-block p-3 bg-[#008955] rounded-full mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#008955] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/80 text-sm">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Openings */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#008955] text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#008955] mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="bg-[#008955] hover:bg-[#006d44] mt-4 lg:mt-0"
                      onClick={() => window.location.href = 'mailto:tech.collegeride@gmail.com?subject=Application for ' + job.title}
                    >
                      Apply Now
                    </Button>
                  </div>
                  
                  <p className="text-foreground/80 mb-6">
                    {job.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-[#008955] mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2 text-foreground/80">
                          <div className="w-2 h-2 bg-[#008955] rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 text-center bg-muted">
            <h2 className="text-2xl font-bold text-[#008955] mb-4">
              Don&apos;t See a Perfect Match?
            </h2>
            <p className="text-foreground/80 mb-6">
              We&apos;re always looking for talented individuals to join our team. 
              Send us your resume and let us know how you&apos;d like to contribute to PillionPal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline"
                className="border-[#008955] text-[#008955] hover:bg-[#008955] hover:text-white"
                onClick={() => window.location.href = 'mailto:tech.collegeride@gmail.com?subject=General Application'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Send Resume
              </Button>
              <div className="flex items-center gap-2 text-foreground/70">
                <Mail size={16} />
                <span>tech.collegeride@gmail.com</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}