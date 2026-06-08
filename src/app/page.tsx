import { SmoothScroll } from "@/components/SmoothScroll";
import { MegaNavbar } from "@/components/MegaNavbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { NominationSection } from "@/components/NominationSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Contributors } from "@/components/Contributors";
import { FeatureProjectCTA } from "@/components/FeatureProjectCTA";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elixpo",
  url: "https://elixpo.com",
  logo: "/logo.png",
  description:
    "A developer-first open-source ecosystem of 13+ interconnected projects — AI art, intelligent search, collaborative sketching, and more.",
  founder: {
    "@type": "Person",
    name: "Ayushman Bhattacharya",
    url: "https://github.com/Circuit-Overtime",
  },
  sameAs: ["https://github.com/elixpo/elixpo_chapter"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <main
        className="bg-black text-[#E1E0CC] min-h-screen overflow-x-hidden antialiased selection:bg-primary selection:text-black"
        style={{ fontFamily: "var(--font-almarai), sans-serif" }}
      >
        <MegaNavbar />
        <HeroSection />
        <AboutSection />
        <NominationSection />
        <FeaturesSection />
        <PackagesSection />
        <NewsletterSection />
        <Contributors />
        <FeatureProjectCTA />
        <Footer />
      </main>
    </>
  );
}
