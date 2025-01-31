import HeroSection from "./_components/HeroSection";
import WhatIsTC from "./_components/WhatIsTC";
import VisionMision from "./_components/VisionMision";
import Activities from "./_components/Activities";
import WhyJoin from "./_components/WhyJoin";
import Target from "./_components/Target";
import Requirement from "./_components/Requirement";
import TimeLocation from "./_components/TimeLocation";
import Documentation from "./_components/Documentation";
import Testimoni from "./_components/Testimoni";
import "./tcStyle.css";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 overflow-hidden lg:gap-32">
      <HeroSection />
      <WhatIsTC />
      <VisionMision />
      <Activities />
      <WhyJoin />
      <Target />
      <Requirement />
      <TimeLocation />
      <Documentation />
      <Testimoni />
    </div>
  );
}
