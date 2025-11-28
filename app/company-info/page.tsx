"use client";

import Image from "next/image";
import Link from "next/link";

export default function CompanyInfoPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
        <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="PillionPal Logo"
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
              <span className="text-[#008955] font-bold text-xl">
                PillionPal
              </span>
            </Link>

            {/* Back Button */}
            <Link 
              href="/"
              className="text-sm font-medium text-foreground hover:text-[#008955] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#008955] mb-6 text-center">
          Company Information – PillionPal
        </h1>
        <p className="text-lg text-foreground/80 text-center mb-12 max-w-3xl mx-auto">
          A transparent overview of PillionPal’s legal identity, mission, operations,
          and product development — created to provide clarity to partners, institutions, 
          and organizations such as AICTE.
        </p>

        {/* Legal Information */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">Legal Registration</h2>
          <ul className="space-y-3 text-foreground/80">
            <li><strong>Registered Name:</strong> PillionPal</li>
            <li><strong>Business Type:</strong> MSME (Micro Enterprise)</li>
            <li><strong>Udyam Registration Number:</strong> UDYAM-AP-10-0114064</li>
            <li><strong>Date of Establishment:</strong> 01 September 2024</li>
            <li><strong>Location:</strong> Visakhapatnam, Andhra Pradesh, India</li>
            <li><strong>Email:</strong> tech.collegeride@gmail.com</li>
          </ul>
        </section>

        {/* Company Overview */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">About PillionPal</h2>
          <p className="text-foreground/80 leading-relaxed">
            PillionPal is a mobility-tech startup focused on solving the 
            last-mile commuting problem for students and daily travelers. 
            We connect riders and pillions who travel on the same route and 
            calculate fair trip costs using our innovative <strong>FairSplit</strong> engine, 
            which considers bike mileage, model, and distance.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Our platform is currently under active development, with ongoing work 
            on the backend APIs, matching engine, cost calculation logic, and the 
            mobile application interface.
          </p>
        </section>

        {/* Product Development Status */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">Product Development Status</h2>
          <ul className="space-y-3 text-foreground/80 leading-relaxed">
            <li>• Rider–pillion matching engine: <strong>In development</strong></li>
            <li>• FairSplit cost calculator: <strong>Prototype completed</strong></li>
            <li>• Backend APIs (auth, rides, cost engine): <strong>In progress</strong></li>
            <li>• Mobile App UI/UX: <strong>Design stage</strong></li>
            <li>• Web dashboard: <strong>Planned</strong></li>
          </ul>
        </section>

        {/* Internship Structure */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">Internship Structure</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            PillionPal provides <b>project-based internships</b> designed to give students
            real exposure to industry workflows. Interns contribute to actual modules 
            of our platform and participate in sprint-based development.
          </p>
          <ul className="space-y-3 text-foreground/80 leading-relaxed">
            <li>• Weekly sprints with tasks delivered via GitHub</li>
            <li>• Code reviews and progress evaluations</li>
            <li>• Work on live modules like APIs, UI/UX, matching engine</li>
            <li>• Direct mentorship from the founder and core developers</li>
            <li>• Interns receive: 
              <ul className="ml-6 list-disc">
                <li>PillionPal Experience Certificate</li>
                <li>AICTE Internship Certificate (via AICTE Portal)</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">Mission & Vision</h2>
          <p className="text-foreground/80 leading-relaxed">
            Our mission is to make commuting safer, cheaper, and more accessible 
            through technology. Our vision is to become India’s most trusted 
            campus-and-city ride-sharing network with zero exploitation and 
            transparent pricing powered by FairSplit.
          </p>
        </section>

        {/* Founder */}
        <section className="mb-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h2 className="text-2xl font-bold text-[#008955] mb-4">Founder</h2>
          <p className="text-foreground/80 leading-relaxed">
            PillionPal is founded by <strong>Sri Charan</strong>, a Computer Science 
            Engineering student and backend developer who leads product development, 
            backend architecture, intern management, and platform vision.
          </p>
        </section>

      </div>
    </div>
  );
}
