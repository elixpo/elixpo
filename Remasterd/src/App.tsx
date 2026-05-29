/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "lenis";
import { MegaNavbar } from "./components/MegaNavbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { NominationSection } from "./components/NominationSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PackagesSection } from "./components/PackagesSection";
import { NewsletterSection } from "./components/NewsletterSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Instantiate Lenis scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-[#E1E0CC] min-h-screen overflow-x-hidden antialiased selection:bg-primary selection:text-black">
      <MegaNavbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PackagesSection />
      <NewsletterSection />
      <NominationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

