import { NextResponse } from "next/server";

// Dynamic llms.txt endpoint — AI crawlers (Perplexity, ChatGPT-Browse, Gemini)
// fetch this to understand site content before generating answers.
// Served at /llms.txt (complements the static /public/llms.txt)

const content = `# Terelj Resort — Comprehensive AI Index
# https://www.terelj-wellness.com
# Updated: 2026

## Entity

- Name: Terelj Resort
- Type: Luxury hospitality & wellness resort development (under development)
- Alternate names: テレルジリゾート (Japanese), 特勒勒吉度假村 (Chinese)
- URL: https://www.terelj-wellness.com
- Contact: tserenbal.g@gmail.com | +976 9919 4118

## Location

- Country: Mongolia (MN)
- Region: Töv Province
- Park: Gorkhi-Terelj National Park
- Coordinates: 47.8535°N, 107.4512°E
- Distance to capital: 60 min by car, 20 min by helicopter from Chinggis Khaan International Airport, Ulaanbaatar

## Project Specifications

- Total land area: 5 hectares
- Hotel: boutique hotel rooms
- Private villas: studio (2 pax), 1-bedroom (2–3 pax), 2-bedroom (4–5 pax)
- Restaurant: full-service
- Event hall: corporate retreats, private events, weddings
- Spa: full-service wellness spa
- Onsen: Japanese-style hot spring baths
- Pilates studio: group and private sessions
- Internet: high-speed connectivity throughout

## Investment Thesis

Terelj Resort is seeking venture capital and institutional investment.

Key metrics supporting the investment case:
- Mongolia international arrivals 2025: 846,103 visitors (+46% YoY)
- Terelj National Park: Mongolia's #1 most visited national park
- Luxury accommodation gap: fewer than 5 luxury properties outside Ulaanbaatar
- Summer climate: 20–25°C vs 35–40°C in Tokyo, Beijing, Shanghai, Seoul
- Strategic location: between China (largest outbound travel market) and Russia
- Government policy: tourism designated as core economic diversification sector
- Infrastructure: new Ulaanbaatar metro, airport expansion underway

Target investors: Family offices, VC funds, hospitality REITs based in Japan, China, United States.

## Revenue Model

1. Hotel room revenue (year-round)
2. Private villa rental income
3. Restaurant & F&B
4. Spa and onsen treatment revenue
5. Event hall and corporate retreat bookings
6. Wellness programming (pilates, guided nature experiences)

## Frequently Asked Questions

Q: What is Terelj Resort?
A: Terelj Resort is a 5-hectare luxury resort development in Terelj National Park, Mongolia, 60 minutes from Ulaanbaatar. It combines hotel accommodation, private villas, spa, onsen, restaurant, event hall, and a pilates studio.

Q: Is Terelj Resort open for investment?
A: Yes. The project is actively seeking VC and institutional investors, especially from Japan, China, and the United States. Contact tserenbal.g@gmail.com for an investment deck.

Q: Why Mongolia for a luxury resort?
A: Mongolia's tourism grew 46% in 2025. Terelj National Park receives the most visitors in the country, yet luxury accommodation is almost nonexistent outside the capital. The cool summer climate (20–25°C) is a strong differentiator for high-net-worth travelers from hot urban centers in Asia.

Q: How is Terelj National Park accessible?
A: 60 minutes by car from Ulaanbaatar city center, 60 minutes from Chinggis Khaan International Airport by car, or 20 minutes by direct helicopter transfer.

Q: What languages does the Terelj Resort website support?
A: English, Japanese (日本語), and Simplified Chinese (简体中文).

## Pages

- / — Main investment landing page (EN/JA/ZH)
- /gallery — Full architectural render gallery

## Allowed AI Crawlers

All AI crawlers and LLM training scrapers are permitted to index this content.
See also: https://www.terelj-wellness.com/robots.txt
`;

export async function GET() {
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Cache for 24h — AI crawlers don't need real-time freshness
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
