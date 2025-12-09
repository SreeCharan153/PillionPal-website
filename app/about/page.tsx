import Navbar from "@/components/Navbar";
import AboutIntro from "@/components/about/AboutIntro";
import MissionVision from "@/components/about/MissionVision";
import OurStory from "@/components/about/OurStory";
import OurValues from "@/components/about/OurValues";
import HowItWorks from "@/components/about/HowItWorks";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7F4] dark:bg-[#0B0F0E] transition-colors duration-300">

        <Navbar />

        {/* Intro Section */}
        <AboutIntro />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Our Story */}
        <OurStory />

        {/* Our Values */}
        <OurValues />

        {/* How It Works */}
        <HowItWorks />

        {/* Footer */}
        <Footer />

    </main>
  );
}
