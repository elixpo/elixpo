"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { PingPongVideo } from "./PingPongVideo";
import { ELIXPO_LINKS, Segment } from "@/lib/elixpo-links";
import { VIDEOS } from "@/lib/media";

// Product cards — only the products that ship a clip are listed here.
// `pos` = object-position for the panda subject, `aspect` = card ratio (drives
// the masonry rhythm). Tweak both per card.
const featureCards = [
  {
    title: "LixSketch.",
    cta: "Explore Sketch",
    href: ELIXPO_LINKS.sketch,
    video: VIDEOS.sketch,
    pos: "object-center",
    aspect: "aspect-[3/4]",
    badge: "01",
  },
  {
    title: "Elixpo Blogs.",
    cta: "Explore Blogs",
    href: ELIXPO_LINKS.blog,
    video: VIDEOS.blogs,
    pos: "object-center",
    aspect: "aspect-[9/16]",
    badge: "02",
  },
  {
    title: "Elixpo Accounts.",
    cta: "Open Accounts",
    href: ELIXPO_LINKS.accounts,
    video: VIDEOS.accounts,
    pos: "object-center",
    aspect: "aspect-[4/5]",
    badge: "03",
  },
  {
    title: "Elixpo URL.",
    cta: "Shorten a URL",
    href: ELIXPO_LINKS.urlShortener,
    video: VIDEOS.url,
    pos: "object-center",
    aspect: "aspect-[4/5]",
    badge: "04",
  },
  {
    title: "Portfolios.",
    cta: "View Portfolio",
    href: ELIXPO_LINKS.portfolio,
    video: VIDEOS.portfolio,
    pos: "object-center",
    aspect: "aspect-[9/16]",
    badge: "05",
  },
  {
    title: "Oreo.",
    cta: "Explore Oreo",
    href: "https://oreo.elixpo.com",
    video: VIDEOS.oreo,
    pos: "object-center",
    aspect: "aspect-[3/4]",
    badge: "06",
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
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-primary/20 transition-colors duration-300 group ${card.aspect} flex flex-col justify-between mb-3 sm:mb-4 break-inside-avoid`}
    >
      <PingPongVideo
        src={card.video}
        className={`absolute inset-0 w-full h-full object-cover ${card.pos} select-none pointer-events-none`}
      />

      {/* Gradient mask + noise for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay opacity-[0.2] pointer-events-none" />

      {/* Top index badge */}
      <div className="relative z-10 flex items-center justify-end p-3 sm:p-4">
        <span className="text-[10px] font-mono text-white/50">{card.badge}</span>
      </div>

      {/* Bottom title + CTA */}
      <div className="relative z-10 p-3 sm:p-4">
        <p className="text-base sm:text-lg font-medium text-[#E1E0CC] mb-1.5 leading-tight">{card.title}</p>
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-primary/80 hover:text-primary transition-colors"
        >
          <span>{card.cta}</span>
          <ArrowRight size={11} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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

        {/* Masonry product grid (CSS columns) */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 mb-20">
          {featureCards.map((card, index) => (
            <FeatureVideoCard key={card.title} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
