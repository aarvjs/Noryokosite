import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import TechMarquee from "@/components/sections/TechMarquee";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import PinnedProductShowcase from "@/components/sections/PinnedProductShowcase";
import SelectedWork from "@/components/sections/SelectedWork";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "NORYOKO | Digital Engineering Studio & Product Architect",
  description: "We engineer digital products, platforms, and AI systems that help businesses grow. Software, web, mobile, AI, cloud, and digital growth.",
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#F9F9FB]">
      <HeroSection />
      <TechMarquee />
      <WhatWeBuild />
      <PinnedProductShowcase />
      <SelectedWork />
      <ProcessSection />
      <IndustriesSection />
      <FinalCTA />
    </main>
  );
}
