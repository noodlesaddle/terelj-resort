import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent embedding in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Block MIME type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Referrer info for analytics while protecting privacy
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 2 years, include subdomains
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Minimal permissions policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
  },
  // Content Security Policy — tightened for production
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inline scripts + JSON-LD
      "script-src 'self' 'unsafe-inline'",
      // Styles: Next.js injects inline styles
      "style-src 'self' 'unsafe-inline'",
      // Images: self + data URIs for Next/Image placeholders
      "img-src 'self' data: blob:",
      // Video hosted on Vercel blob storage
      "media-src 'self' https://o8qobnfpcwag5t2l.public.blob.vercel-storage.com",
      // Fonts served from self
      "font-src 'self'",
      // Connects: Next.js HMR in dev + Vercel analytics
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Canonical redirects: strip trailing slashes for clean URLs / SEO
  trailingSlash: false,

  // Compress responses
  compress: true,

  // Image optimisation — allow Vercel blob images if used as <img> src
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "o8qobnfpcwag5t2l.public.blob.vercel-storage.com",
      },
    ],
    // Serve modern formats to improve Core Web Vitals (LCP)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
