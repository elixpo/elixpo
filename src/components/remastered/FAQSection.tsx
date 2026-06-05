"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { ELIXPO_LINKS } from "@/lib/elixpo-links";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What is Elixpo Chapter and the broader ecosystem?",
      answer: (
        <span>
          Elixpo Chapter is our collaborative open-source ecosystem, consisting of 9+ integrated projects. It brings together over 35 global contributors to build and maintain copyleft tools, AI generative integrations, developer packages, and community automation bots.
        </span>
      ),
    },
    {
      question: "Are all Elixpo tools and projects free to use?",
      answer: (
        <span>
          Absolutely. Keeping our work free, fully open-source, and copyleft is a core part of our philosophy. All packages, widgets, and generative projects are available on GitHub and completely free of any sign-up requirements or usage paywalls.
        </span>
      ),
    },
    {
      question: "What are Elixpo Sketch and Elixpo Editor?",
      answer: (
        <span>
          These are lightweight, modular visual editor packages built for developers. Available as native npm packages (
          <code className="text-primary font-mono text-xs bg-white/5 py-0.5 px-1 rounded">@elixpo/lixsketch</code> and{" "}
          <code className="text-primary font-mono text-xs bg-white/5 py-0.5 px-1 rounded">@elixpo/lixeditor</code>
          ) and VS Code extension marketplace equivalents, they allow you to embed canvas drafting and style workspaces directly into custom web setups.
        </span>
      ),
    },
    {
      question: "How can I contribute to or support Elixpo?",
      answer: (
        <span>
          As a fully community-driven initiative, we welcome developers, designers, and creators of all backgrounds! You can fork our repositories on GitHub, join our chat channels, star our initiatives, or consider sponsoring our open-source research to keep public APIs stable and running.
        </span>
      ),
    },
    {
      question: "Does Elixpo store any prompt history or personal files?",
      answer: (
        <span>
          No. Elixpo operates under a strict privacy-first framework. Our client-side tools and public generation integrations proxy requests transparently, without storing prompt logs or building intrusive diagnostic tracking records.
        </span>
      ),
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-black text-[#E1E0CC] py-24 px-4 sm:px-6 lg:px-8 select-none relative overflow-hidden"
    >
      {/* Background cinematic accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <HelpCircle size={14} className="text-primary/70" />
            <span className="text-[10px] uppercase tracking-widest text-[#DEDBC8] font-medium font-mono">
              Knowledge Base
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#E1E0CC] font-serif italic"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#DEDBC8]/60 text-xs sm:text-sm max-w-lg mx-auto mt-4 font-mono leading-relaxed"
          >
            Everything you need to know about our tools, licensing, and community guidelines.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={`faq-item-${idx}`}
                id={`faq-card-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-[#101010] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10 noise-overlay"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left p-6 sm:p-8 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none group select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-light text-[#E1E0CC]/90 group-hover:text-primary transition-colors duration-200 pr-4">
                    {item.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#DEDBC8]/40 transition-colors duration-200"
                  >
                    <ChevronDown size={16} className="text-[#DEDBC8]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 sm:px-8 text-xs sm:text-sm text-[#DEDBC8]/70 leading-relaxed font-light border-t border-white/[0.02] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom micro-card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-[#DEDBC8]/40 font-mono">
            Have another question? Reach out in our public{" "}
            <a
              href={ELIXPO_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-0.5 hover:text-white transition-colors duration-150"
            >
              <span>Discord Community</span>
              <ArrowUpRight size={10} />
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
