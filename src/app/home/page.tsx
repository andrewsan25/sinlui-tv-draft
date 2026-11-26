import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { KineticShowcaseSection } from "@/components/home/KineticShowcaseSection";
import { DivisionBentoSection } from "@/components/home/DivisionBentoSection";
import { HomeCtaSection } from "@/components/home/HomeCtaSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Beranda resmi Sinlui TV — organisasi dokumentasi, videografi, fotografi, dan broadcasting sekolah.",
};

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <KineticShowcaseSection />
      <DivisionBentoSection />
      <HomeCtaSection />
    </PageTransition>
  );
}
