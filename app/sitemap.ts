import { MetadataRoute } from "next";

const BASE_URL = "https://www.terelj-wellness.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // Home — all language variants
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
      // hreflang alternates surfaced via metadata; listed here for crawlers
    },
    {
      url: `${BASE_URL}?lang=ja`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}?lang=zh`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Gallery — all language variants
    {
      url: `${BASE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery?lang=ja`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/gallery?lang=zh`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
