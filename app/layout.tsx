import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const BASE_URL = "https://www.terelj-wellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Terelj Resort — Luxury Investment Opportunity in Mongolia",
    template: "%s | Terelj Resort",
  },
  description:
    "Terelj Resort is a premier luxury hospitality investment in Terelj National Park, Mongolia. 5-hectare development with hotel, spa, onsen & private villas. 60 min from Ulaanbaatar. Open to VC and institutional investors.",
  keywords: [
    // English — investment focus
    "Mongolia luxury resort investment",
    "Terelj National Park resort",
    "Mongolia hospitality investment",
    "Mongolia real estate venture capital",
    "luxury resort development Asia",
    "Mongolia tourism investment opportunity",
    "Ulaanbaatar resort hotel investment",
    "emerging market hospitality investment",
    // Japanese
    "モンゴル リゾート投資",
    "テレルジ国立公園 ホテル",
    "モンゴル 観光投資",
    "モンゴル 不動産投資",
    // Chinese (Simplified)
    "蒙古豪华度假村投资",
    "特勒勒吉国家公园度假村",
    "蒙古旅游投资机会",
  ],
  authors: [{ name: "Terelj Wellness Resort" }],
  creator: "Terelj Wellness Resort",
  publisher: "Terelj Wellness Resort",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": `${BASE_URL}`,
      "ja-JP": `${BASE_URL}?lang=ja`,
      "zh-CN": `${BASE_URL}?lang=zh`,
      "x-default": BASE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP", "zh_CN"],
    url: BASE_URL,
    siteName: "Terelj Resort",
    title: "Terelj Resort — Luxury Investment Opportunity in Mongolia",
    description:
      "Premier luxury resort development in Terelj National Park, Mongolia. Hotel, spa, onsen & private villas on 5 hectares. 60 minutes from Ulaanbaatar. Seeking strategic investors.",
    images: [
      {
        url: `/renders/Scene 2.png`,
        width: 1200,
        height: 630,
        alt: "Terelj Resort aerial view — luxury resort in Terelj National Park, Mongolia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terelj Resort — Luxury Investment Opportunity in Mongolia",
    description:
      "Premier luxury resort development in Terelj National Park, Mongolia. Hotel, spa, onsen & private villas. Open to VC and institutional investors.",
    images: [`/renders/Scene 2.png`],
  },
  verification: {
    // Add Google Search Console and Bing verification tokens here when available
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    // other: { "msvalidate.01": "YOUR_BING_VERIFICATION_TOKEN" },
  },
  category: "real estate investment",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${BASE_URL}/#resort`,
      name: "Terelj Resort",
      alternateName: ["テレルジリゾート", "特勒勒吉度假村"],
      url: BASE_URL,
      description:
        "Luxury resort development in Terelj National Park, Mongolia. Hotel, spa, onsen, restaurant, private villas, and wellness center on 5 hectares. 60 minutes from Ulaanbaatar.",
      image: `${BASE_URL}/renders/Scene 2.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Terelj",
        addressRegion: "Töv Province",
        addressCountry: "MN",
        streetAddress: "Terelj National Park",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.8535,
        longitude: 107.4512,
      },
      // Authority links help AI engines establish entity identity
      sameAs: [
        "https://maps.app.goo.gl/terelj",
        "https://en.wikipedia.org/wiki/Gorkhi-Terelj_National_Park",
      ],
      numberOfRooms: "Multiple — hotel rooms and private villas",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
        { "@type": "LocationFeatureSpecification", name: "Onsen (Hot Spring)", value: true },
        { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
        { "@type": "LocationFeatureSpecification", name: "Event Hall", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pilates Studio", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private Villas", value: true },
        { "@type": "LocationFeatureSpecification", name: "High-Speed Internet", value: true },
      ],
      containsPlace: [
        { "@type": "Hotel", name: "Terelj Resort Hotel" },
        { "@type": "HealthClub", name: "Terelj Wellness & Spa" },
        { "@type": "FoodEstablishment", name: "Terelj Resort Restaurant" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "tserenbal.g@gmail.com",
        telephone: "+97699194118",
        contactType: "investor relations",
        availableLanguage: ["English", "Japanese", "Chinese"],
      },
    },
    {
      // Investment opportunity node — picked up by AI engines answering
      // "where can I invest in Mongolia hospitality"
      "@type": "Organization",
      "@id": `${BASE_URL}/#investment`,
      name: "Terelj Resort Investment Opportunity",
      url: BASE_URL,
      description:
        "5-hectare luxury resort development in Terelj National Park, Mongolia seeking VC and institutional investment. Multiple revenue streams: hotel, spa, onsen, restaurant, event hall, and private villas. 846,103 international tourists visited Mongolia in 2025, a 46% YoY increase. First luxury resort of its kind in the region.",
      areaServed: [
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "China" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: [
        "Luxury resort development",
        "Mongolia tourism investment",
        "Terelj National Park",
        "Hospitality real estate",
        "Emerging market investment",
      ],
      foundingLocation: {
        "@type": "Place",
        name: "Terelj National Park, Mongolia",
      },
    },
    {
      // FAQPage schema — the highest-value GEO signal.
      // AI engines surface FAQ content verbatim in answers.
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Terelj Resort?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terelj Resort is a luxury hospitality and wellness development located in Terelj National Park, Mongolia, 60 minutes from Ulaanbaatar. The 5-hectare project includes a hotel, restaurant, spa, onsen, event hall, pilates studio, and private villas in studio, 1-bedroom, and 2-bedroom configurations.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Terelj Resort located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terelj Resort is located in Terelj National Park (Gorkhi-Terelj National Park), Töv Province, Mongolia — approximately 60 minutes by car or 20 minutes by helicopter from Chinggis Khaan International Airport in Ulaanbaatar.",
          },
        },
        {
          "@type": "Question",
          name: "Is Terelj Resort open for investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Terelj Resort is actively seeking VC and institutional investors. The project targets investors from Japan, China, and the United States. An investment deck is available on request by emailing tserenbal.g@gmail.com or calling +976 9919 4118.",
          },
        },
        {
          "@type": "Question",
          name: "Why invest in Mongolia's tourism sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mongolia's tourism sector recorded 846,103 international arrivals in 2025, a 46% year-over-year increase. Terelj National Park is the country's most visited national park. Despite growing demand, there is a significant shortage of luxury accommodation outside Ulaanbaatar. Mongolia has a stable political environment and is strategically positioned between China and Russia. The government has identified tourism as a core economic diversification strategy.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Terelj National Park a good resort location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While cities across Asia reach 35–40°C in summer, Terelj National Park maintains a comfortable 20–25°C. It is Mongolia's most visited national park, features stunning rock formations and natural landscapes, is only 60 minutes from the capital, and has very limited luxury accommodation — creating a clear market gap for a premium resort offering.",
          },
        },
        {
          "@type": "Question",
          name: "What facilities does Terelj Resort include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terelj Resort's facilities include a boutique hotel, restaurant, event hall, spa, onsen (hot spring), pilates studio, wellness center, and private villas in studio, 1-bedroom, and 2-bedroom configurations for 2–5 guests each.",
          },
        },
        {
          "@type": "Question",
          name: "How far is Terelj Resort from Ulaanbaatar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terelj Resort is approximately 60 minutes from Ulaanbaatar by car and 20 minutes by helicopter from Chinggis Khaan International Airport.",
          },
        },
        {
          "@type": "Question",
          name: "What languages is the Terelj Resort website available in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Terelj Resort website (terelj-wellness.com) is available in English, Japanese (日本語), and Simplified Chinese (简体中文) to serve investors and guests from the US, Japan, and China.",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Terelj Resort",
      description:
        "Official website of Terelj Resort — a luxury hospitality investment opportunity in Terelj National Park, Mongolia.",
      inLanguage: ["en", "ja", "zh"],
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* llms.txt — machine-readable summary for AI crawlers (Perplexity, ChatGPT, Gemini, Claude) */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site overview" />
        {/* Citation-friendly description for generative AI */}
        <meta name="citation_title" content="Terelj Resort — Luxury Hospitality Investment, Mongolia" />
        <meta name="citation_author" content="Terelj Wellness Resort" />
        <meta name="citation_online_date" content="2025" />
        <meta name="citation_language" content="en" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://o8qobnfpcwag5t2l.public.blob.vercel-storage.com" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
