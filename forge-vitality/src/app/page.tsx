import HeroSection from "@/components/home/HeroSection";
import DualConceptSection from "@/components/home/DualConceptSection";
import TrustSection from "@/components/home/TrustSection";
import CoachesPreview from "@/components/home/CoachesPreview";
import MembershipCTA from "@/components/home/MembershipCTA";
import AtmosphericSection from "@/components/home/AtmosphericSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DualConceptSection />
      <TrustSection />
      <CoachesPreview />
      <AtmosphericSection />
      <MembershipCTA />
      <FinalCTA />
    </>
  );
}
