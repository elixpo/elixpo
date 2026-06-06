"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { ELIXPO_LINKS, Segment } from "@/lib/elixpo-links";

// Background clips per card. These reuse the three available Elixpo cloudfront
// renders as placeholders — swap any `video` URL to give a tool its own clip.
const featureCards = [
  {
    title: "Elixpo Art Generator.",
    cta: "Generate now",
    href: ELIXPO_LINKS.generate,
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
    badge: "00",
  },
  {
    title: "LixSketch Canvas.",
    cta: "Explore Sketch",
    href: ELIXPO_LINKS.sketch,
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
    badge: "01",
  },
  {
    title: "Elixpo Blogs.",
    cta: "Explore Blogs",
    href: ELIXPO_LINKS.blog,
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4",
    badge: "02",
  },
  {
    title: "AI Chat & Search.",
    cta: "Explore Chat",
    href: ELIXPO_LINKS.chat,
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
    badge: "03",
  },
];

interface FeatureVideoCardProps {
  card: (typeof featureCards)[number];
  index: number;
}

function FeatureVideoCard({ card, index }: FeatureVideoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 hover:border-primary/20 transition-colors duration-300 group min-h-[380px] sm:min-h-[440px] lg:h-[480px] flex flex-col justify-between"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Gradient mask + noise for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.2] pointer-events-none" />

      {/* Top index badge */}
      <div className="relative z-10 flex items-center justify-end p-4 sm:p-6 md:p-8">
        <span className="text-xs font-mono text-white/50">{card.badge}</span>
      </div>

      {/* Bottom title + CTA */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        <p className="text-xl font-medium text-[#E1E0CC] mb-2">{card.title}</p>
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors"
        >
          <span>{card.cta}</span>
          <ArrowRight size={12} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const heading1: Segment[] = [
    { text: "Enhanced Learning & Intelligence Process Optimization.", className: "font-normal text-primary" },
  ];

  const heading2: Segment[] = [
    { text: "An Open Source Project Series centered on Computer Science.", className: "font-normal text-neutral-500" },
  ];

  return (
    <section
      id="features"
      className="min-h-screen bg-black text-[#E1E0CC] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none"
    >
      {/* Subtle background noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay pointer-events-none z-0" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header containing multi-style headers */}
        <div className="mb-14 sm:mb-20 text-left max-w-4xl">
          <WordsPullUpMultiStyle
            segments={heading1}
            justify="flex-start"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-2"
          />
          <WordsPullUpMultiStyle
            segments={heading2}
            justify="flex-start"
            startDelay={0.2}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
          />
        </div>

        {/* 4-column video card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {featureCards.map((card, index) => (
            <FeatureVideoCard key={card.title} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
