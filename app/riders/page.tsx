import Navbar from "@/components/Navbar";
import EarningsCalculator from "@/components/riders/SavingsCalculator";
import RiderPillionBenefits from "@/components/riders/RiderPillionBenefits";
import JoinSteps from "@/components/riders/JoinSteps";
import Footer from "@/components/Footer";

export default function RidersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F0E]">
        <Navbar />
        {/* other sections */}
        <EarningsCalculator />
        <RiderPillionBenefits />
        <JoinSteps />
        <Footer />
        {/* CTA section */}
    </main>
  );
}
