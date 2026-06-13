"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PingPongVideo } from "./PingPongVideo";
import { ELIXPO_LINKS } from "@/lib/elixpo-links";
import { VIDEOS } from "@/lib/media";

// Product cards — only the products that ship a clip are listed here.
// `pos` = object-position for the panda subject, `aspect` = card ratio (drives
// the masonry rhythm). They link out to the deployed sites.
const projectCards = [
  {
    title: "LixSketch.",
    cta: "Explore Sketch",
    href: ELIXPO_LINKS.sketch,
    video: VIDEOS.sketch,
    pos: "object-center",
    aspect: "aspect-[16/9]",
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
    aspect: "aspect-[16/9]",
    badge: "03",
  },
  {
    title: "Elixpo URL.",
    cta: "Shorten a URL",
    href: ELIXPO_LINKS.urlShortener,
    video: VIDEOS.url,
    pos: "object-center",
    aspect: "aspect-[16/9]",
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
    aspect: "aspect-[16/9]",
    badge: "06",
  },
];

// Responsive column count for the masonry.
function useColumnCount() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setCols(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return cols;
}

// Relative height (per unit width) from a Tailwind aspect class like "aspect-[16/9]".
function relHeight(aspect: string): number {
  const m = aspect.match(/\[(\d+)\/(\d+)\]/);
  if (!m) return 1;
  return Number(m[2]) / Number(m[1]);
}

interface ProjectCardProps {
  card: (typeof projectCards)[number];
  index: number;
}

function ProjectCard({ card, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.85, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden bg-[#141414] border border-white/10 hover:border-primary/20 transition-colors duration-300 group ${card.aspect} flex flex-col justify-between`}
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

/** Balanced, tightly-packed masonry of the product cards (mixes 9:16 & 16:9). */
export function ProjectsGrid() {
  const colCount = useColumnCount();
  const columns: { card: (typeof projectCards)[number]; index: number }[][] =
    Array.from({ length: colCount }, () => []);
  const heights = new Array(colCount).fill(0);
  projectCards.forEach((card, index) => {
    let shortest = 0;
    for (let i = 1; i < colCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push({ card, index });
    heights[shortest] += relHeight(card.aspect);
  });

  return (
    <div className="flex items-start gap-3 sm:gap-4">
      {columns.map((col, ci) => (
        <div key={ci} className="flex-1 min-w-0 flex flex-col gap-3 sm:gap-4">
          {col.map(({ card, index }) => (
            <ProjectCard key={card.title} card={card} index={index} />
          ))}
        </div>
      ))}
    </div>
  );
}
