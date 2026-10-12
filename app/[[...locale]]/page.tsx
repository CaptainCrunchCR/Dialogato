import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StormAnimation from "@/components/StormAnimation";
import Platforms from "@/components/Platforms";
import PerfectFor from "@/components/PerfectFor";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-transition">
      <Hero />
      <Features />
      <StormAnimation />
      <Platforms />
      <PerfectFor />
      <Benefits />
      <Pricing />
      <Guarantee />
      <CTA />
      <Footer />
    </main>
  );
}
