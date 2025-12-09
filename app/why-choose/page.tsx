import WhyGrid from "@/components/why/WhyGrid";
import RiderPillionBenefits from "@/components/riders/RiderPillionBenefits";
import SafetyGrid from "@/components/safety/SafetyGrid";
import SafetyStats from "@/components/safety/SafetyStats";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhyChoosePage() {
  return (
    <main className="min-h-screen bg-[#F5F7F4] dark:bg-[#0B0F0E]">
        <Navbar />
      <section className="max-w-6xl mx-auto px-6 pt-28">
        <WhyGrid />
      </section>

      <RiderPillionBenefits />
      <SafetyGrid />
      <SafetyStats />
        <Footer />
    </main>
  );
}
