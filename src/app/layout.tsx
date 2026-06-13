import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import { Geist, Geist_Mono, Almarai, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MegaNavbar } from "@/components/MegaNavbar";
import { Footer } from "@/components/Footer";

// Global dark shell - overrides the semantic theme tokens to dark so every
// route matches, and applies the design font.
const darkShell = {
  "--background": "#000000",
  "--foreground": "#E1E0CC",
  "--card": "#161616",
  "--card-hover": "#1d1d1d",
  "--muted": "#9a988c",
  "--border": "rgba(255,255,255,0.12)",
  "--accent": "#DEDBC8",
  "--accent-light": "#E1E0CC",
  fontFamily: "var(--font-almarai), sans-serif",
} as CSSProperties;

export const viewport: Viewport = {
  themeColor: "#000000",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display fonts for the revamped homepage design.
const almarai = Almarai({
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SITE_URL = "https://elixpo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elixpo - Enhanced Learning and Intelligence Process Optimization",
    template: "%s | Elixpo",
  },
  description:
    "A developer-first open-source ecosystem of 13+ interconnected projects - AI art, intelligent search, collaborative sketching, and more. 100% free, forever.",
  keywords: [
    "Elixpo",
    "open source",
    "AI",
    "developer tools",
    "art generation",
    "search engine",
    "collaborative canvas",
    "discord bot",
    "URL shortener",
    "Next.js",
    "Cloudflare",
    "Pollinations AI",
    "Hacktoberfest",
  ],
  authors: [{ name: "Ayushman Bhattacharya", url: "https://github.com/Circuit-Overtime" }],
  creator: "Elixpo",
  publisher: "Elixpo",
  icons: {
    icon: [
      { url: "/logos/base_logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logos/base_logo.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Elixpo",
    title: "Elixpo - Developer-First Open Source Ecosystem",
    description:
      "13+ interconnected open-source projects spanning AI, web, and developer tools. Built by a global community of 45+ contributors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elixpo - Enhanced Learning and Intelligence Process Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elixpo - Developer-First Open Source Ecosystem",
    description:
      "13+ interconnected open-source projects spanning AI, web, and developer tools. 100% free, forever.",
    images: ["/og-image.png"],
    creator: "@elixpo",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${almarai.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <div
          className="bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-primary selection:text-black"
          style={darkShell}
        >
          <MegaNavbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
