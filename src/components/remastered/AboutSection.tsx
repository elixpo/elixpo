"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { AnimatedParagraph } from "./AnimatedParagraph";
import { ELIXPO_LINKS, Segment } from "@/lib/elixpo-links";

export function AboutSection() {
  // Headings segments
  const segments: Segment[] = [
    { text: "Welcome to Elixpo-Chapter,", className: "font-normal" },
    { text: "an Open Source Repository.", className: "italic font-serif text-primary" },
    { text: "Built over 9 projects, engaged a global community, and participated in numerous programs.", className: "font-normal" }
  ];

  const bodyText = "Begun in 2023 as a collegiate project, this series has grown into a collaborative workspace with 35+ global contributors. We empower developers and artists with fully copyleft tools, backed by Pollinations AI and Microsoft for Startups.";

  const ecoLinks = [
    { label: "Elixpo Art", href: ELIXPO_LINKS.generate },
    { label: "Elix Blogs", href: ELIXPO_LINKS.blog },
    { label: "Jackey Bot", href: ELIXPO_LINKS.discord },
    { label: "Chrome Ext", href: ELIXPO_LINKS.extension },
    { label: "Open GitHub", href: ELIXPO_LINKS.github },
  ];

  return (
    <section
      id="about"
      className="bg-black text-[#E1E0CC] py-20 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="bg-[#101010] border-t border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-8 sm:p-12 md:py-12 md:px-16 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Cinematic background highlight */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none select-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-950 rounded-full blur-[80px] pointer-events-none select-none" />

        {/* Side-by-side Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start text-left relative z-10 mb-12">

          {/* Left Column (flex-1) */}
          <div className="flex-1 w-full">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#DEDBC8] font-medium font-mono">
                Computer Science
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] max-w-2xl text-[#E1E0CC] font-normal tracking-tight">
              <WordsPullUpMultiStyle segments={segments} justify="flex-start" />
            </div>
          </div>

          {/* Right Column (w-1/3 on desktop) */}
          <div className="w-full lg:w-1/3 lg:pt-8 flex flex-col justify-start">
            <AnimatedParagraph
              text={bodyText}
              className="text-sm sm:text-base lg:text-lg text-[#E1E0CC]/85 leading-relaxed font-light tracking-wide text-left"
            />
          </div>

        </div>

        {/* Elixpo Ecosystem Labs section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/5 pt-10"
        >
          <p className="text-[10px] uppercase font-mono tracking-[0.15em] text-neutral-500 mb-6 text-center">
            Elixpo Labs · Open Source Innovations
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 sm:gap-y-5 max-w-4xl mx-auto">
            {ecoLinks.map((link, i) => (
              <motion.a
                key={`about-eco-link-${i}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold border border-white/10 bg-white/[0.03] backdrop-blur-md text-[#DEDBC8]/90 rounded-full hover:border-[#DEDBC8]/40 hover:text-black hover:bg-[#DEDBC8] transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(222,219,200,0.12)]"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={14}
                  className="transform -rotate-45 transition-transform duration-200 group-hover:rotate-0"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
