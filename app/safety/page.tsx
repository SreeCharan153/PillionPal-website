import Navbar from "@/components/Navbar";
import SafetyGrid from "@/components/safety/SafetyGrid";
import SafetyStats from "@/components/safety/SafetyStats";
import Footer from "@/components/Footer";

export default function SafetyPage() {
  return (
    <main className="min-h-screen w-full bg-[#F5F7F4] dark:bg-[#0B0F0E] transition-colors duration-300">
        <Navbar />

        {/* Safety Grid Section */}
        <SafetyGrid />

        {/* Safety Stats Section */}
        <SafetyStats />

        <Footer />

    </main>
  );
}