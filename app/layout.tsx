import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Braoma — Intelligent technology that simplifies life";
const description =
  "Braoma builds AI-powered solutions that improve how people live, work, travel, and connect — grounded in real industry expertise.";

export const metadata: Metadata = {
  metadataBase: new URL("https://braoma.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://braoma.com",
    siteName: "Braoma",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-braoma-navy font-sans text-braoma-cream antialiased">
        {children}
      </body>
    </html>
  );
}
