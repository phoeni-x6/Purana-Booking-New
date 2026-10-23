
import {
  OnlineHero,
  ConsultationSection,
  DetoxProgrammes,
  EbooksSection,
  MembershipBanner,
  HowItWorks,
} from "@/components/online";

export default function OnlineConsultationPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE5]">
      <OnlineHero />
      <ConsultationSection />
      <DetoxProgrammes />
      <EbooksSection />
      <MembershipBanner />
      <HowItWorks />
    </main>
  );
}
