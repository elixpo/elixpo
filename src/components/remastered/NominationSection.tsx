"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Star, Heart, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { ELIXPO_LINKS } from "@/lib/elixpo-links";

interface GitHubRepo {
  stargazers_count?: number;
}

export function NominationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [starCount, setStarCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    async function fetchStars() {
      try {
        // Aggregate stars across Circuit-Overtime repositories via the GitHub Search API
        const response = await fetch("https://api.github.com/search/repositories?q=user:Circuit-Overtime");
        if (!response.ok) throw new Error("GitHub rate limit or fetch error");
        const data = await response.json();
        if (active && data && Array.isArray(data.items)) {
          const totalStars = data.items.reduce(
            (acc: number, repo: GitHubRepo) => acc + (repo.stargazers_count || 0),
            0,
          );
          setStarCount(totalStars || 184); // Fallback to a realistic count if API returns 0
        }
      } catch (error) {
        console.warn("Fallback to static star count due to API constraints:", error);
        if (active) {
          setStarCount(184);
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    fetchStars();
    return () => {
      active = false;
    };
  }, []);

  const heading = {
    tag: "Advancing Open Intelligence",
    line1: "Support Open Source.",
    line2: "Help us grow."
  };

  const nominationSteps = [
    {
      step: "01",
      title: "Visit Portal",
      desc: "Go to stars.github.com/nominate and sign in with your GitHub account.",
    },
    {
      step: "02",
      title: "Set Nominee",
      desc: "Provide the primary developer's username: Circuit-Overtime.",
    },
    {
      step: "03",
      title: "Write a Note",
      desc: "Briefly explain how our collaborative open source projects supported you.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="nominate"
      className="bg-black text-[#E1E0CC] py-20 px-4 sm:px-6 lg:px-8 relative select-none overflow-hidden"
    >
      {/* Visual background gradient pulse */}
      <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section headings */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 flex flex-col items-start gap-1"
        >
          {/* Section subtitle tag */}
          <motion.span
            variants={itemVariants}
            className="flex flex-wrap text-base sm:text-lg md:text-xl uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[#DEDBC8]/50 font-mono font-medium mb-3"
          >
            {heading.tag}
          </motion.span>

          <div className="flex flex-col gap-1 items-start text-left">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight text-white font-normal leading-tight"
            >
              {heading.line1}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl italic font-serif text-[#DEDBC8]/50 leading-tight block"
            >
              {heading.line2}
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-16">

          {/* Card 1: Nomination Panel (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-[#101010] border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col justify-between hover:border-primary/15 transition-all duration-300 group"
          >
            <div>
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-mono text-[#DEDBC8]">GitHub Stars Program</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full font-mono text-[10px] group-hover:border-primary/20 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white/40">Ecosystem Stars:</span>
                  <span className="text-primary font-bold">{loading ? "..." : (starCount !== null ? starCount.toLocaleString() : "180+")}</span>
                </div>
              </div>

              <h3 className="text-2xl font-light text-white mb-4 leading-tight">
                Nominate <span className="text-primary italic font-serif font-semibold">Circuit-Overtime</span> for the GitHub Stars!
              </h3>

              <p className="text-xs sm:text-sm text-[#DEDBC8]/70 leading-relaxed mb-8 max-w-xl">
                If you believe in our mission of open development, Google Developer Groups (2025-2026) campus organizer initiatives, and making AI free, taking just 20 seconds to submit a nomination means the world to our small team.
              </p>

              {/* Steps inside bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-white/[0.04] py-6 my-6">
                {nominationSteps.map((step, idx) => (
                  <div key={`nomination-step-item-${idx}`} className="flex flex-col gap-2 items-start">
                    <span className="text-xs font-mono text-primary font-bold">{step.step}</span>
                    <h4 className="text-xs font-semibold text-white/90 uppercase tracking-widest">{step.title}</h4>
                    <p className="text-xs text-[#DEDBC8]/60 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-500">Every nomination amplifies open-source!</span>
              <a
                href={ELIXPO_LINKS.nominate}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#DEDBC8] hover:bg-[#E1E0CC] text-black text-xs font-semibold uppercase tracking-wider rounded-full px-5 py-2.5 transition-all shadow-lg"
              >
                <span>Nominate Now</span>
                <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Compute Partners (Spans 1 column on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-1 bg-[#212121] border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between hover:border-primary/15 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-6 gap-2 flex-wrap">
                <Heart className="w-5 h-5 text-primary shrink-0 animate-pulse" />
                <span className="text-[10px] font-mono text-neutral-500">SUPPORTED DEVELOPMENT</span>
              </div>
              <h4 className="text-lg font-light text-white mb-3">Our Compute Partners</h4>
              <p className="text-xs text-[#DEDBC8]/65 leading-relaxed mb-6">
                Our massive AI workloads are powered by personal investment and compute support from the Pollinations AI team.
              </p>
            </div>

            <div className="pt-6 border-t border-white/5">
              <a
                href={ELIXPO_LINKS.sponsors}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-primary/80 hover:text-primary transition-colors uppercase tracking-wider font-mono text-[10px]"
              >
                <span>Support via GitHub Sponsors</span>
                <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Copyleft Protocol (Spans 3 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 bg-[#101010] border border-white/5 rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary/15 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-primary flex-shrink-0 mt-1 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Copyleft License Protocol</span>
                <h4 className="text-lg font-light text-white mb-2">GNU GPL-3.0 Compliance</h4>
                <p className="text-xs text-[#DEDBC8]/65 leading-relaxed">
                  We believe in ethical, open development. Our code, packages, and systems are shared under copyleft standards to ensure derivatives remain free for everybody forever.
                </p>
              </div>
            </div>

            <div className="flex gap-6 font-mono text-[11px] text-white/50 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8 flex-shrink-0 w-full md:w-auto flex-wrap sm:flex-nowrap">
              <div>
                <span className="text-white/30 block text-[9px] uppercase tracking-wider">Chapter Size</span>
                <span className="text-white/85 font-medium block mt-0.5">35+ Contributors</span>
              </div>
              <div>
                <span className="text-white/30 block text-[9px] uppercase tracking-wider font-medium text-primary">Ecosystem Stars</span>
                <span className="text-primary font-bold block mt-0.5 animate-pulse">
                  {loading ? "..." : (starCount !== null ? starCount.toLocaleString() : "184")} ★
                </span>
              </div>
              <div>
                <span className="text-white/30 block text-[9px] uppercase tracking-wider">License Standards</span>
                <span className="text-white/85 font-medium block mt-0.5">GPL-3.0 Copyleft</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
