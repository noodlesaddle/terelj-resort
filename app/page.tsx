import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Terelj Resort — Luxury Investment Opportunity in Mongolia",
  description:
    "Discover Terelj Resort: a 5-hectare luxury hospitality development in Terelj National Park, Mongolia. Hotel, spa, onsen, private villas & event hall. 60 minutes from Ulaanbaatar. Seeking VC and institutional investors from Japan, China, Taiwan, and the US.",
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
    title: "Terelj Resort — Luxury Investment Opportunity in Mongolia",
    description:
      "5-hectare luxury resort development in Mongolia's premier national park. Hotel, spa, onsen, restaurant & private villas. Open to strategic investors.",
    url: "https://www.terelj-wellness.com",
    images: [
      {
        url: "/renders/Scene 2.png",
        width: 1200,
        height: 630,
        alt: "Terelj Resort — aerial view of luxury resort in Mongolia",
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
      <FloorPlan />
      <PropertySpecs />
      <WhyMongolia />
      <Investment />
      <Location />
      <ContactCTA />
    </main>
  );
}
