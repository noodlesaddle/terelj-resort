import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Terelj Wellness Resort Design Visualisations",
  description:
    "Design-stage visualisations of Terelj Wellness Resort, a villa-led mountain wellness retreat in Gorkhi-Terelj National Park, Mongolia. Images may change through detailed design.",
  alternates: {
    canonical: "https://www.terelj-wellness.com/gallery",
    languages: {
      "en-US": "https://www.terelj-wellness.com/gallery",
      "ja-JP": "https://www.terelj-wellness.com/gallery?lang=ja",
      "zh-CN": "https://www.terelj-wellness.com/gallery?lang=zh",
      "x-default": "https://www.terelj-wellness.com/gallery",
    },
  },
  openGraph: {
    title: "Gallery — Terelj Wellness Resort Design Visualisations",
    description:
      "Aerial, exterior and interior design-stage visualisations of Terelj Wellness Resort in Gorkhi-Terelj National Park, Mongolia.",
    url: "https://www.terelj-wellness.com/gallery",
    images: [
      {
        url: "/renders/Scene 222.png",
        width: 1200,
        height: 630,
        alt: "Terelj Wellness Resort — design visualisation of the villa-led wellness retreat in Mongolia",
      },
    ],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
