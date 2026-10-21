

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
      

      

      <div className="bg-[#193b30]">
        <Hero />
      </div>

      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-5">
        <BookingFinder />
      </div>

      <Services />
      <Locations />
      <OnlineWellness />
      <Retreats />
      <FeatureCards />
      <Membership />

     
      <FloatingActions />
    </main>
  );
}
