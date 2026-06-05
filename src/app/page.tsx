import { SmoothScroll } from "@/components/remastered/SmoothScroll";
import { MegaNavbar } from "@/components/remastered/MegaNavbar";
import { HeroSection } from "@/components/remastered/HeroSection";
import { AboutSection } from "@/components/remastered/AboutSection";
import { FeaturesSection } from "@/components/remastered/FeaturesSection";
import { PackagesSection } from "@/components/remastered/PackagesSection";
import { NewsletterSection } from "@/components/remastered/NewsletterSection";
import { NominationSection } from "@/components/remastered/NominationSection";
import { Contributors } from "@/components/remastered/Contributors";
import { FAQSection } from "@/components/remastered/FAQSection";
import { Footer } from "@/components/remastered/Footer";

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
        <FeaturesSection />
        <PackagesSection />
        <NewsletterSection />
        <NominationSection />
        <Contributors />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
