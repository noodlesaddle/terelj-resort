import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terelj Resort - Exceptional Design, Extraordinary Living",
  description: "Discover exceptional residences designed for modern living in Terelj National Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
