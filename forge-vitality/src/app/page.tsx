import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import DualConceptSection from "@/components/home/DualConceptSection";
import TrustSection from "@/components/home/TrustSection";
import CoachesPreview from "@/components/home/CoachesPreview";
import MembershipCTA from "@/components/home/MembershipCTA";
import AtmosphericSection from "@/components/home/AtmosphericSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <DualConceptSection />
      <TrustSection />
      <CoachesPreview />
      <AtmosphericSection />
      <MembershipCTA />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}
