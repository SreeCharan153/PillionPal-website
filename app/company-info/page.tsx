"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyInfoPage() {
  return (
    <main
      className="
        min-h-screen 
        bg-[#F5F7F4] dark:bg-[#0B0F0E] 
        pt-40 pb-24 
        transition-colors
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        <Navbar />

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#008955] dark:text-[#3DD68C]">
            Company Information
          </h1>

          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A transparent overview of PillionPal’s legal identity, mission,
            operations, and development — curated for institutional partners
            and academic stakeholders.
          </p>
        </motion.div>

        {/* LEGAL REGISTRATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Legal Registration
            </h2>

            <ul className="space-y-3 text-foreground/80 text-[15px] leading-relaxed">
              <li><strong>Registered Name:</strong> PillionPal</li>
              <li><strong>Business Type:</strong> MSME (Micro Enterprise)</li>
              <li><strong>Udyam Registration Number:</strong> UDYAM-AP-10-0114064</li>
              <li><strong>Date of Establishment:</strong> 01 September 2024</li>
              <li><strong>Location:</strong> Visakhapatnam, Andhra Pradesh, India</li>
              <li><strong>Official Email:</strong> founder@pillionpal.com</li>
            </ul>
          </Card>
        </motion.div>

        {/* INSTITUTIONAL RECOGNITION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Institutional Recognition
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              PillionPal is a registered organization on the{" "}
              <strong>AICTE National Internship Portal</strong>, authorized to
              offer internship opportunities to eligible students across India
              in accordance with AICTE guidelines and norms.
            </p>
          </Card>
        </motion.div>

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              About PillionPal
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              PillionPal is a mobility-technology initiative focused on solving
              daily commuting challenges faced by students and working
              professionals. The platform connects riders and pillions traveling
              along similar routes and enables transparent cost sharing through
              its proprietary <strong>FairSplit</strong> pricing engine.
            </p>

            <p className="text-foreground/80 leading-relaxed mt-4">
              The FairSplit engine computes trip costs using factors such as
              vehicle mileage, bike model, and travel distance, ensuring ethical
              and explainable cost distribution for every ride.
            </p>
          </Card>
        </motion.div>

        {/* PRODUCT STATUS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Product Development Status
            </h2>

            <ul className="space-y-3 text-foreground/80 leading-relaxed">
              <li>• Rider–Pillion Matching Engine: <strong>In development</strong></li>
              <li>• FairSplit Cost Calculator: <strong>Prototype completed</strong></li>
              <li>• Backend APIs (Auth, Rides, FairSplit): <strong>In progress</strong></li>
              <li>• Mobile App UI/UX: <strong>Design phase</strong></li>
              <li>• Admin & Operations Dashboard: <strong>Planned</strong></li>
            </ul>
          </Card>
        </motion.div>

        {/* INTERNSHIPS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Internship Structure
            </h2>

            <p className="text-foreground/80 leading-relaxed mb-4">
              PillionPal offers structured, project-based internships where
              interns contribute directly to real platform modules using
              sprint-driven development and GitHub-based collaboration.
            </p>

            <ul className="space-y-3 text-foreground/80 leading-relaxed">
              <li>• Sprint-based task allocation and weekly reviews</li>
              <li>• Code reviews and technical evaluations</li>
              <li>• Contributions to live backend, frontend, and system modules</li>
              <li>• Direct mentorship from founder and core engineers</li>
              <li>
                • Certificates & Recognition:
                <ul className="ml-6 list-disc">
                  <li>PillionPal Experience Certificate</li>
                  <li>
                    Internship completion record generated via the AICTE
                    National Internship Portal (where applicable)
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Mission & Vision
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              Our mission is to make commuting safer, more affordable, and more
              transparent through technology. Our vision is to build a reliable,
              ethical ride-sharing ecosystem for campuses and urban communities
              across India.
            </p>
          </Card>
        </motion.div>

        {/* FOUNDER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 rounded-2xl mb-12 bg-white dark:bg-[#111A18] border border-[#008955]/20 dark:border-[#3DD68C]/20 shadow-lg">
            <h2 className="text-2xl font-bold text-[#008955] dark:text-[#3DD68C] mb-4">
              Founder
            </h2>

            <p className="text-foreground/80 leading-relaxed">
              PillionPal was founded by <strong>Jagadeesh Potela</strong>, a
              Computer Science Engineering student and backend developer. He
              leads platform architecture, product development, internship
              programs, and the long-term technical vision of PillionPal.
            </p>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
