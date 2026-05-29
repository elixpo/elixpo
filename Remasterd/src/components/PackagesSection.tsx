/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  ArrowUpRight, Sparkle, Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome, Camera, Brush, Box, Wand2, ExternalLink
} from "lucide-react";
import { ELIXPO_LINKS } from "../types";

export function PackagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const row1Icons = [Figma, Framer, Palette, PenTool, Layers, Type, Aperture, Chrome];
  const row2Icons = [Camera, Brush, Box, Wand2, Figma, Framer, Type, Layers];

  return (
    <section 
      ref={sectionRef}
      id="packages" 
      className="bg-black text-[#E1E0CC] py-20 px-4 sm:px-6 lg:px-8 relative select-none overflow-hidden"
    >
      {/* Background visual highlight */}
      <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-neutral-500 block mb-1">Evolving Ecosystem</span>
            <h3 className="text-xl font-medium text-white">Our Extended Releases & Flagship Packages</h3>
          </div>
          <a
            href={ELIXPO_LINKS.githubChapter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#DEDBC8]/70 hover:text-[#DEDBC8] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore Chapter Monorepo</span>
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Bento Grid System (3 columns on lg, 2 on md, 1 on mobile, gap-4 md:gap-5) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 text-white"
        >
          {/* Column 1 - Background card (LixSketch NPM Package) */}
          <a
            href="https://www.npmjs.com/package/@elixpo/lixsketch"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-neutral-950 relative overflow-hidden flex flex-col justify-between p-6 h-[400px] md:h-[420px] lg:h-[450px] border border-white/5 hover:border-primary/25 hover:bg-[#111a1a]/40 transition-all duration-300 group"
          >
            {/* Subtle glow / light flare at the top */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#111a1a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5">
                <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
                <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-mono">
                  LixSketch NPM Package
                </span>
                <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
              </div>
              <ArrowUpRight className="text-white/40 group-hover:text-primary transition-colors duration-300" size={16} strokeWidth={1.5} />
            </div>

            <div className="relative z-10 w-full mb-1">
              <h4 className="text-2xl font-bold font-serif italic text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                LixSketch
              </h4>
              <p className="text-xs text-[#DEDBC8]/65 leading-relaxed mb-6 font-mono">
                Open-source SVG whiteboard engine with a hand-drawn aesthetic. The core drawing engine behind <span className="text-primary hover:underline group-hover:text-primary/90">LixSketch</span>.
              </p>

              <div className="grid grid-cols-[auto_auto_1fr_auto] gap-x-2 gap-y-2.5 font-mono text-[10px] sm:text-[11px] text-white/80 border-t border-white/5 pt-4">
                <span className="text-white/50">Core</span>
                <Sparkle className="h-2.5 w-2.5 self-center text-white/35" strokeWidth={1.5} />
                <span>Interactive Canvas</span>
                <span className="text-right text-white/40 font-light">SVG Whiteboard</span>

                <span className="text-white/50">Theme</span>
                <Sparkle className="h-2.5 w-2.5 self-center text-white/35" strokeWidth={1.5} />
                <span>Hand-Drawn Vector</span>
                <span className="text-right text-white/40 font-light">Copyleft Free</span>

                <span className="text-white/50">Docs</span>
                <Sparkle className="h-2.5 w-2.5 self-center text-white/35" strokeWidth={1.5} />
                <span>github.com/elixpo/lixsketch</span>
                <span className="text-right text-white/40 font-light">GPL-3.0</span>
              </div>
            </div>
          </a>

          {/* Column 2 - Stacked rows */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Top - Client Voice card (LixEditor NPM Package) */}
            <a
              href="https://www.npmjs.com/package/@elixpo/lixeditor"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-neutral-950 p-5 md:p-6 relative overflow-hidden flex flex-col justify-between min-h-[220px] h-full shadow-lg border border-white/5 hover:border-primary/25 hover:bg-[#111a1a]/40 transition-all duration-300 group"
            >
              {/* Subtle glow / light flare at the top */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111a1a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1.5">
                  <Sparkle className="h-3.5 w-3.5 text-white/70" strokeWidth={1.5} />
                  <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-mono">
                    LixEditor NPM Package
                  </span>
                </div>
                <ArrowUpRight className="text-white/40 group-hover:text-white transition-colors duration-300" size={16} strokeWidth={1.5} />
              </div>

              <div className="my-3 relative z-10">
                <h4 className="text-lg font-bold font-serif italic text-white mb-2 leading-tight">
                  LixEditor
                </h4>
                <p className="text-[12px] sm:text-[13px] leading-[1.6] text-white/85 relative z-10 font-mono">
                  "A rich WYSIWYG block editor and renderer built on BlockNote — with LaTeX equations, Mermaid diagrams, syntax-highlighted code blocks, and more."
                </p>
              </div>

              <div className="text-[11px] font-mono text-white/60 relative z-10 border-t border-white/5 pt-3">
                The core editor engine behind <span className="text-white hover:underline">LixBlogs</span> (github.com/elixpo/elixpoblogs)
              </div>
            </a>

            {/* Bottom - 10M+ card (LixSketch VS Code Extension) */}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=elixpo.lixsketch"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-neutral-950 relative overflow-hidden flex flex-col justify-between p-6 min-h-[200px] h-full shadow-lg border border-white/5 hover:border-primary/25 hover:bg-[#111a1a]/40 transition-all duration-300 group"
            >
              {/* Subtle glow / light flare at the top */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111a1a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="uppercase tracking-[0.22em] text-[10px] text-white/70 font-mono">
                  LixSketch Extension
                </span>
                <ArrowUpRight className="text-white/40 group-hover:text-primary transition-colors duration-300" size={16} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-2">
                <span className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white drop-shadow-md select-none font-mono group-hover:text-primary transition-all">
                  OFFLINE
                </span>
                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono mt-1">
                  VS Code Workspace
                </span>
              </div>

              <span className="relative z-10 text-center text-[#DEDBC8]/85 text-[11px] leading-relaxed font-mono">
                Open-source whiteboard diagrams inside VS Code — draw, sketch, and save .lixsketch files
              </span>
            </a>
          </div>

          {/* Column 3 - Stacked rows */}
          <div className="flex flex-col gap-4 md:gap-5 md:col-span-2 lg:col-span-1">
            {/* Top - Daily Software card (LixEditor VS Code Extension) */}
            <a
              href="https://marketplace.visualstudio.com/items?itemName=elixpo.lixeditor"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-neutral-950 relative overflow-hidden flex flex-col justify-between p-5 md:p-6 min-h-[290px] h-full shadow-lg border border-white/5 hover:border-primary/25 hover:bg-[#111a1a]/40 transition-all duration-300 group"
            >
              {/* Subtle glow / light flare at the top */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111a1a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between w-full">
                <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-mono">
                  LixEditor VS Code
                </span>
                <ArrowUpRight className="text-white/40 group-hover:text-primary transition-colors duration-300" size={16} strokeWidth={1.5} />
              </div>

              <div className="relative z-10 flex flex-col gap-3 py-4 overflow-hidden w-full select-none">
                {/* Marquee Row 1 */}
                <div 
                  className="flex gap-3 overflow-hidden relative w-full"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', 
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
                  }}
                >
                  <div className="flex gap-3 shrink-0 animate-marquee-left">
                    {[...row1Icons, ...row1Icons].map((Icon, idx) => (
                      <div key={`row1-icon-${idx}`} className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center liquid-glass border border-white/5 shadow-inner">
                        <Icon className="w-5 h-5 text-white/85" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marquee Row 2 */}
                <div 
                  className="flex gap-3 overflow-hidden relative w-full"
                  style={{ 
                    maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', 
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' 
                  }}
                >
                  <div className="flex gap-3 shrink-0 animate-marquee-right">
                    {[...row2Icons, ...row2Icons].map((Icon, idx) => (
                      <div key={`row2-icon-${idx}`} className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center liquid-glass border border-white/5 shadow-inner">
                        <Icon className="w-5 h-5 text-white/85" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="relative z-10 text-[11px] text-[#DEDBC8]/80 leading-relaxed font-mono">
                A rich block editor for .lixeditor files — LaTeX equations, Mermaid diagrams, syntax-highlighted code, and more.
              </p>
            </a>

            {/* Bottom - Reach Me card */}
            <div className="rounded-2xl bg-neutral-950 p-5 md:p-6 relative overflow-hidden flex flex-col justify-between min-h-[140px] shadow-lg border border-white/5 hover:border-primary/25 hover:bg-[#111a1a]/40 transition-all duration-300 group">
              {/* Subtle glow / light flare at the top */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111a1a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-mono relative z-10">
                DEVELOPER CONTACT
              </span>

              <a 
                href="mailto:vivektalent200@gmail.com"
                className="h-9 w-9 rounded-full bg-white/10 text-white flex items-center justify-center absolute top-5 right-5 hover:bg-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95 z-20"
              >
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </a>

              <div className="relative z-10 mt-4 space-y-1">
                <a 
                  href="mailto:vivektalent200@gmail.com" 
                  className="text-sm font-medium text-white/95 hover:text-white transition-colors block font-mono"
                >
                  vivektalent200@gmail.com
                </a>
                <span className="text-xs text-white/65 block font-mono">
                  github.com/Circuit-Overtime
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
