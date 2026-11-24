import type { Metadata } from "next";
import PropertyHero from "@/components/sections/PropertyHero";
import PropertyGallery from "@/components/sections/PropertyGallery";
import DarkIntro from "@/components/sections/DarkIntro";
import FloorPlan from "@/components/sections/FloorPlan";
import PropertySpecs from "@/components/sections/PropertySpecs";
import Wellness from "@/components/sections/Wellness";
import WhyMongolia from "@/components/sections/WhyMongolia";
import Investment from "@/components/sections/Investment";
import Location from "@/components/sections/Location";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Terelj Wellness Resort — Villa-Led Wellness Retreat Investment in Mongolia",
  description:
    "Terelj Wellness Resort: 47 private wellness villas and 8 glamping pods on 5 hectares in Gorkhi-Terelj National Park, Mongolia, built in three phases. 1.5–2 hours (50–76 km) from Ulaanbaatar. Investment deck available on request.",
  alternates: {
    canonical: "https://www.terelj-wellness.com",
    languages: {
      "en-US": "https://www.terelj-wellness.com",
      "ja-JP": "https://www.terelj-wellness.com?lang=ja",
      "zh-CN": "https://www.terelj-wellness.com?lang=zh",
      "x-default": "https://www.terelj-wellness.com",
    },
  },
  openGraph: {
    title: "Terelj Wellness Resort — Villa-Led Wellness Retreat Investment in Mongolia",
    description:
      "A villa-led mountain wellness retreat in Mongolia's most visited national park: 47 private villas + 8 glamping pods on 5 hectares, with a wellness programme rooted in Mongolian tradition.",
    url: "https://www.terelj-wellness.com",
    images: [
      {
        url: "/renders/Scene 2.png",
        width: 1200,
        height: 630,
        alt: "Terelj Wellness Resort — design-stage aerial visualisation, Gorkhi-Terelj National Park, Mongolia",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PropertyHero />
      <PropertyGallery />
      <DarkIntro />
      <PropertySpecs />
      <Wellness />
      <FloorPlan />
      <WhyMongolia />
      <Investment />
      <Location />
      <ContactCTA />
      <Footer />
    </main>
  );
}
