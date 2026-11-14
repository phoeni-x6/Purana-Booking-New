
import Hero from "./Hero";
import BookingFinder from "./BookingFinder";
import Services from "./Services";
import Locations from "./Locations";
import OnlineWellness from "./OnlineWellness";
import Retreats from "./Retreats";
import FeatureCards from "./FeatureCards";
import Membership from "./Membership";
import FloatingActions from "./FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#193b30]">
      {/* Hero */}
      <div className="relative z-0 bg-[#193b30]">
        <Hero />
      </div>

      {/* Full-width booking section */}
      <div className="relative z-10 -mt-12 w-full">
        <BookingFinder />
      </div>

      {/* Homepage sections */}
      <Services />
      <Locations />
      <OnlineWellness />
      <Retreats />
      <FeatureCards />
      <Membership />

      {/* Floating actions */}
      <FloatingActions />
    </main>
  );
}
