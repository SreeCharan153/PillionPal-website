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
            A transparent overview of PillionPal’s legal identity, mission, operations,
            and development — curated for institutional partners, colleges, and AICTE.
          </p>
        </motion.div>

        {/* LEGAL SECTION */}
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
              <li><strong>Email:</strong> tech.collegeride@gmail.com</li>
            </ul>
          </Card>
        </motion.div>

        {/* ABOUT SECTION */}
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
              PillionPal is a mobility-tech startup focused on solving the daily commuting
              challenges faced by students and working individuals. The platform connects
              riders and pillions who share similar routes and calculates fair, transparent
              trip costs using our proprietary <strong>FairSplit</strong> engine — a pricing
              model based on bike mileage, model, and travel distance.
            </p>

            <p className="text-foreground/80 leading-relaxed mt-4">
              The product ecosystem includes backend APIs, a ride-matching engine,
              FairSplit pricing logic, and the upcoming mobile app for real-time ride
              coordination.
            </p>
          </Card>
        </motion.div>

        {/* PRODUCT DEVELOPMENT STATUS */}
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
              <li>• Backend APIs (Auth, Rides, FairSplit Engine): <strong>In progress</strong></li>
              <li>• Mobile App UI/UX: <strong>Design phase</strong></li>
              <li>• Web Dashboard (Admin/Operations): <strong>Planned</strong></li>
            </ul>
          </Card>
        </motion.div>

        {/* INTERNSHIP STRUCTURE */}
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
              PillionPal offers <strong>project-based internships</strong> where interns
              work directly on real platform modules, following sprint-based development
              and GitHub-driven workflows.
            </p>

            <ul className="space-y-3 text-foreground/80 leading-relaxed">
              <li>• Weekly sprints & GitHub task delivery</li>
              <li>• Code reviews & evaluation checkpoints</li>
              <li>• Contribution to live modules (APIs, Matching Engine, UI/UX)</li>
              <li>• Direct mentorship from founder & core engineers</li>
              <li>
                • Certificates Provided:
                <ul className="ml-6 list-disc">
                  <li>PillionPal Experience Certificate</li>
                  <li>AICTE Internship Certificate (AICTE Portal)</li>
                </ul>
              </li>
            </ul>
          </Card>
        </motion.div>

        {/* MISSION & VISION */}
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
              Our mission is to make commuting safer, cheaper, and more accessible through
              transparent technology. Our vision is to become India’s most reliable campus
              and city ride-sharing network, powered by FairSplit and ethical cost sharing.
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
              PillionPal was founded by <strong>Jagadeesh Potela</strong>, a Computer Science
              Engineering student and backend developer. He oversees platform development,
              backend architecture, intern programs, and the long-term vision for PillionPal.
            </p>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
