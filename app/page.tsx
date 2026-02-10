import PropertyHero from "@/components/sections/PropertyHero";
import PropertyGallery from "@/components/sections/PropertyGallery";
import DarkIntro from "@/components/sections/DarkIntro";
import FloorPlan from "@/components/sections/FloorPlan";
import PropertySpecs from "@/components/sections/PropertySpecs";
import WhyMongolia from "@/components/sections/WhyMongolia";
import Investment from "@/components/sections/Investment";
import Location from "@/components/sections/Location";
import ContactCTA from "@/components/sections/ContactCTA";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PropertyHero />
      <PropertyGallery />
      <DarkIntro />
      <FloorPlan />
      <PropertySpecs />
      <WhyMongolia />
      <Investment />
      <Location />
      <ContactCTA />
    </main>
  );
}
