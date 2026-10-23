
import {
  MembershipHero,
  MembershipPlans,
  MembershipBenefits,
  MemberContent,
  MembershipRetreats,
  PhysicalMembershipCard,
  MembershipWaitlist,
} from "@/components/membership";

export default function MembershipPage() {
  return (
    <main>
      <MembershipHero />
      <MembershipPlans />
      <MembershipBenefits />
      <MemberContent />
      <MembershipRetreats />
      <PhysicalMembershipCard />
      <MembershipWaitlist />
    </main>
  );
}
