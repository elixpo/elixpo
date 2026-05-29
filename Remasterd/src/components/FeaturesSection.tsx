/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { ELIXPO_LINKS, Segment } from "../types";

interface CardProps {
  children: React.ReactNode;
  index: number;
}

function CardAnimate({ children, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.85,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#253535] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-primary/20 transition-colors duration-300 relative overflow-hidden min-h-[380px] sm:min-h-[440px]"
    >
      {children}
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

  const storyboardItems = [
    "WYSIWYG Canvas for presentations",
    "Open-source SVG whiteboard engine",
    "LixSketch NPM package integrated",
    "VS Code offline canvas extension",
  ];

  const critiqueItems = [
    "Write & publish technical blogs",
    "BlockNote with LaTeX equations",
    "Support for Mermaid & Code syntax",
    "LixEditor NPM & VS Code engines",
  ];

  const immersionItems = [
    "3-tier caching search architecture",
    "AI Web Chat powered by lixSearch",
    "Tommy Discord Issues orchestrator",
    "100% open-source GPL-3.0",
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

        {/* 4-column grid (responsively switching from 1-col mobile, 2-col tablet, to 4-col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          
          {/* Card 1 - Pure Video Background card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[480px] rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group min-h-[380px] sm:min-h-[440px] flex flex-col justify-end"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            >
              <source 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4" 
                type="video/mp4" 
              />
            </video>
            
            {/* Gradient mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 noise-overlay opacity-[0.2] pointer-events-none" />
            
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <p className="text-xl font-medium text-[#E1E0CC] mb-2">
                Elixpo Art Generator.
              </p>
              <a 
                href={ELIXPO_LINKS.generate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary transition-colors"
              >
                <span>Generate now</span>
                <ArrowRight size={12} className="transform -rotate-45" />
              </a>
            </div>
          </motion.div>

          {/* Card 2 - Project Storyboard */}
          <CardAnimate index={1}>
            <div>
              {/* Header Icon */}
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" 
                alt="Storyboard Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-neutral-800"
              />
              <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-[#E1E0CC]">LixSketch Canvas.</h3>
                <span className="text-xs font-mono text-neutral-500">01</span>
              </div>
              <ul className="space-y-3">
                {storyboardItems.map((item, id) => (
                  <li key={`storyboard-item-${id}`} className="flex items-start gap-2 text-xs sm:text-xs">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={ELIXPO_LINKS.sketch}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-white transition-colors pt-6 border-t border-neutral-800/80 mt-6"
            >
              <span>Explore Sketch</span>
              <ArrowRight size={12} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </CardAnimate>

          {/* Card 3 - Smart Critiques */}
          <CardAnimate index={2}>
            <div>
              {/* Header Icon */}
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" 
                alt="Critiques Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-neutral-800"
              />
              <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-[#E1E0CC]">Elixpo Blogs.</h3>
                <span className="text-xs font-mono text-neutral-500">02</span>
              </div>
              <ul className="space-y-3">
                {critiqueItems.map((item, id) => (
                  <li key={`critique-item-${id}`} className="flex items-start gap-2 text-xs sm:text-xs">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={ELIXPO_LINKS.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-white transition-colors pt-6 border-t border-neutral-800/80 mt-6"
            >
              <span>Explore Blogs</span>
              <ArrowRight size={12} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </CardAnimate>

          {/* Card 4 - Immersion Capsule */}
          <CardAnimate index={3}>
            <div>
              {/* Header Icon */}
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" 
                alt="Immersion Icon"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-neutral-800"
              />
              <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-[#E1E0CC]">AI Chat & Search.</h3>
                <span className="text-xs font-mono text-neutral-500">03</span>
              </div>
              <ul className="space-y-3">
                {immersionItems.map((item, id) => (
                  <li key={`immersion-item-${id}`} className="flex items-start gap-2 text-xs sm:text-xs">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href={ELIXPO_LINKS.chat}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-white transition-colors pt-6 border-t border-neutral-800/80 mt-6"
            >
              <span>Explore Chat</span>
              <ArrowRight size={12} className="transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </CardAnimate>

        </div>



      </div>
    </section>
  );
}
