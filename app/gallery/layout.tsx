import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Terelj Resort Renders & Architectural Visuals",
  description:
    "Explore aerial, exterior, interior, and architectural renders of Terelj Resort — a luxury hospitality development in Terelj National Park, Mongolia.",
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
    title: "Gallery — Terelj Resort Architectural Renders",
    description:
      "Visual showcase of Terelj Resort — aerial views, exterior, interior, and architectural model renders of this luxury Mongolia resort development.",
    url: "https://www.terelj-wellness.com/gallery",
    images: [
      {
        url: "/renders/Scene 222.png",
        width: 1200,
        height: 630,
        alt: "Terelj Resort gallery — architectural renders of luxury resort in Mongolia",
      },
    ],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
