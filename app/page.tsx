import PropertyHero from "@/components/sections/PropertyHero";
import PropertyGallery from "@/components/sections/PropertyGallery";
import DarkIntro from "@/components/sections/DarkIntro";
import FloorPlan from "@/components/sections/FloorPlan";
import Location from "@/components/sections/Location";
import PropertySpecs from "@/components/sections/PropertySpecs";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PropertyHero />
      <PropertyGallery />
      <DarkIntro />
      <FloorPlan />
      <Location />
      <PropertySpecs />
    </main>
  );
}
