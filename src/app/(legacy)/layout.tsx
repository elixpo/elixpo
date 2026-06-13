import type { CSSProperties } from "react";
import { MegaNavbar } from "@/components/MegaNavbar";
import { Footer } from "@/components/Footer";

// Shared shell for all non-home routes (/about, /community, /resources,
// /terms, /privacy, …). Uses the revamped MegaNavbar + Footer and overrides the
// semantic theme tokens to dark so token-based page content matches the homepage.
const darkTheme = {
  "--background": "#0a0a0a",
  "--foreground": "#E1E0CC",
  "--card": "#161616",
  "--card-hover": "#1d1d1d",
  "--muted": "#9a988c",
  "--border": "rgba(255,255,255,0.12)",
  "--accent": "#DEDBC8",
  "--accent-light": "#E1E0CC",
  fontFamily: "var(--font-almarai), sans-serif",
} as CSSProperties;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="bg-background text-foreground min-h-screen flex flex-col antialiased selection:bg-primary selection:text-black"
      style={darkTheme}
    >
      <MegaNavbar />
      <main className="flex-1 pt-28">{children}</main>
      <Footer />
    </div>
  );
}
