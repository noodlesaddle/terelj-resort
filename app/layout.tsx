import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const BASE_URL = "https://www.terelj-wellness.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Terelj Wellness Resort — Villa-Led Wellness Retreat Investment in Mongolia",
    template: "%s | Terelj Wellness Resort",
  },
  description:
    "Terelj Wellness Resort is a villa-led mountain wellness retreat in Gorkhi-Terelj National Park, Mongolia: 47 private villas and 8 glamping pods on 5 hectares, built in three phases, 1.5–2 hours from Ulaanbaatar. Investment deck available on request.",
  keywords: [
    // English — investment focus
    "Terelj Wellness Resort",
    "Mongolia wellness resort investment",
    "Gorkhi-Terelj National Park resort",
    "Mongolia hospitality investment",
    "private villa wellness retreat Mongolia",
    "Mongolia tourism investment opportunity",
    "Ulaanbaatar weekend wellness retreat",
    "Mongolian traditional therapies",
    // Japanese
    "テレルジ・ウェルネスリゾート",
    "モンゴル ウェルネスリゾート 投資",
    "テレルジ国立公園 ヴィラ",
    "モンゴル 観光投資",
    // Chinese (Simplified)
    "特勒吉康养度假村",
    "蒙古康养度假村投资",
    "特勒吉国家公园别墅",
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
    siteName: "Terelj Wellness Resort",
    title: "Terelj Wellness Resort — Villa-Led Wellness Retreat Investment in Mongolia",
    description:
      "47 private wellness villas and 8 glamping pods on 5 hectares in Mongolia's most visited national park, built in three phases. 1.5–2 hours from Ulaanbaatar.",
    images: [
      {
        url: `/renders/Scene 2.png`,
        width: 1200,
        height: 630,
        alt: "Terelj Wellness Resort — design-stage aerial visualisation, Gorkhi-Terelj National Park, Mongolia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terelj Wellness Resort — Villa-Led Wellness Retreat Investment in Mongolia",
    description:
      "A villa-led mountain wellness retreat in Gorkhi-Terelj National Park, Mongolia: 47 private villas + 8 glamping pods, built in three phases.",
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
// Source of truth: Terelj Wellness Resort investment booklet (November 2026).
// Investment amount, deal structure and financial projections are intentionally omitted.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${BASE_URL}/#resort`,
      name: "Terelj Wellness Resort",
      alternateName: ["テレルジ・ウェルネスリゾート", "特勒吉康养度假村"],
      url: BASE_URL,
      description:
        "Planned villa-led mountain wellness retreat in Gorkhi-Terelj National Park, Mongolia: 47 private wellness villas and 8 glamping pods on 5 hectares, built in three phases over five years. 1.5–2 hours (50–76 km) by road from Ulaanbaatar. All images are design-stage visualisations.",
      image: `${BASE_URL}/renders/Scene 2.png`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Terelj",
        addressRegion: "Töv Province",
        addressCountry: "MN",
        streetAddress: "Gorkhi-Terelj National Park",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 47.87985,
        longitude: 107.405738,
      },
      // Authority links help AI engines establish entity identity
      sameAs: [
        "https://maps.app.goo.gl/zqn24hg8jnjqWhx47",
        "https://en.wikipedia.org/wiki/Gorkhi-Terelj_National_Park",
      ],
      numberOfRooms: "47 private villas + 8 glamping pods (planned, three phases)",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Private villas", value: true },
        { "@type": "LocationFeatureSpecification", name: "Private sauna in every villa", value: true },
        { "@type": "LocationFeatureSpecification", name: "Restaurant with juice and herbal tea bar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Pilates and yoga", value: true },
        { "@type": "LocationFeatureSpecification", name: "Traditional Mongolian therapies", value: true },
        { "@type": "LocationFeatureSpecification", name: "Glamping pods", value: true },
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
      name: "Terelj Wellness Resort Investment Opportunity",
      url: BASE_URL,
      description:
        "Villa-led wellness resort in Gorkhi-Terelj National Park, Mongolia, open to investment partners. Mongolia had a record 847,170 foreign visitors in 2025 (+16.5% on 2024, National Statistics Office of Mongolia) and tourism revenue of $1.6B (Ministry of Environment and Tourism); the government targets 2 million visitors a year by 2030. Investment deck available on request.",
      areaServed: [
        { "@type": "Country", name: "China" },
        { "@type": "Country", name: "South Korea" },
        { "@type": "Country", name: "Japan" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Country", name: "Australia" },
      ],
      knowsAbout: [
        "Wellness resort development",
        "Mongolia tourism investment",
        "Gorkhi-Terelj National Park",
        "Traditional Mongolian therapies",
        "Wellness tourism",
      ],
      foundingLocation: {
        "@type": "Place",
        name: "Gorkhi-Terelj National Park, Mongolia",
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
          name: "What is Terelj Wellness Resort?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terelj Wellness Resort is a planned villa-led mountain wellness retreat in Gorkhi-Terelj National Park, Mongolia. It comprises 47 private wellness villas and 8 glamping pods on 5 hectares, built in three phases over five years, with about 90% of the land kept as natural grassland.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Terelj Wellness Resort located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The resort is in Gorkhi-Terelj National Park, Töv Province, Mongolia, north-east of Ulaanbaatar — 50–76 km, about 1.5–2 hours by road from the city.",
          },
        },
        {
          "@type": "Question",
          name: "What will be built in each phase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Phase 1 (Year 1): 15 wellness villas with private sauna, a lobby, a reformer room, an 80-seat restaurant with juice and herbal tea bar, and an open-air platform for sunrise classes. Phase 2 (Years 2–3): 20 more villas, a traditional therapy centre with heated pool, and an organic greenhouse. Phase 3 (Years 4–5): 12 hot-spring villas, which depend on a planned geothermal well, and 8 solar-powered glamping pods. A main building with hotel rooms and an event hall is a separate later option, built only once villa demand is proven.",
          },
        },
        {
          "@type": "Question",
          name: "What does the wellness programme include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pilates and yoga, guided forest walks, breathwork, private villa saunas, Mongolian herbal steam with cold plunge, traditional Mongolian therapies (herbal oil massage, bone-setting by a bariachi, moxibustion and cupping, herbal baths), detox menus, morin khuur sound sessions, stargazing and meditation. Signature packages are City Reset (2–3 nights, for Ulaanbaatar residents on weekends), Steppe Detox (5 nights, summer) and Winter Sauna Retreat (7 nights, December–February). Traditional therapies are wellness services, not medical treatment.",
          },
        },
        {
          "@type": "Question",
          name: "Is Terelj Wellness Resort open for investment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The project is open to investment partners. The investment deck, including financial projections and the proposed partnership structure, is available on request by emailing tserenbal.g@gmail.com, calling +976 9919 4118, or on WeChat (wxid_wu6xn6p3tid412).",
          },
        },
        {
          "@type": "Question",
          name: "Why invest in Mongolia's tourism sector?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mongolia had a record 847,170 foreign visitors in 2025, up 16.5% on 2024 (National Statistics Office of Mongolia), and tourism revenue of $1.6B (Ministry of Environment and Tourism). The government targets 2 million visitors a year by 2030. Globally, wellness tourism grew 11.4% in 2024–25 and 15.6% in Asia (Global Wellness Institute). Gorkhi-Terelj is Mongolia's most visited national park, yet its accommodation is mostly camps and mid-range resorts, with one established luxury hotel.",
          },
        },
        {
          "@type": "Question",
          name: "Is the resort open year-round?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is planned for year-round operation: sunrise pilates, park walks and terrace dining in summer, and sauna and herbal therapy retreats in winter (December–February). Glazed galleries link the buildings so guests stay warm moving between spaces.",
          },
        },
        {
          "@type": "Question",
          name: "What languages is the Terelj Wellness Resort website available in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The website (terelj-wellness.com) is available in English, Japanese (日本語, ?lang=ja) and Simplified Chinese (简体中文, ?lang=zh).",
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Terelj Wellness Resort",
      description:
        "Official website of Terelj Wellness Resort — a villa-led mountain wellness retreat and investment opportunity in Gorkhi-Terelj National Park, Mongolia.",
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
        <meta name="citation_title" content="Terelj Wellness Resort — Villa-Led Wellness Retreat, Mongolia" />
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
