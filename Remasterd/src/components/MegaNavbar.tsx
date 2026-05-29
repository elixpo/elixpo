/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, ArrowUpRight, X, Menu,
  BookOpen, Globe, Link2, Palette, MessageSquare, Search, 
  LayoutDashboard, User, Cpu, FileText, Terminal, Code2, 
  Building2, Monitor, Database, Atom, Megaphone, 
  History, HelpCircle, Newspaper, Tag
} from "lucide-react";
import { ELIXPO_LINKS } from "../types";

export function MegaNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<any>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
      setActiveMenu(null);
      setMobileMenuOpen(false);
    }
  };

  const toggleMenu = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const productEcosystem = [
    { name: "Elixpo Blogs", href: ELIXPO_LINKS.blog, desc: "Rich block blogging layout", icon: BookOpen },
    { name: "Elixpo Accounts SEO", href: ELIXPO_LINKS.accounts, desc: "Smarter profile SEO mapping", icon: Globe },
    { name: "Elixpo URL Shortener", href: ELIXPO_LINKS.urlShortener, desc: "Custom dynamic URL shorter", icon: Link2 },
    { name: "Elixpo Sketch Platform", href: ELIXPO_LINKS.sketch, desc: "Hand-drawn SVG whiteboards", icon: Palette },
    { name: "Elixpo Chat", href: ELIXPO_LINKS.chat, desc: "Fluid, real-time message stream", icon: MessageSquare },
  ];

  const productInfrastructure = [
    { name: "Elixpo Search", href: ELIXPO_LINKS.search, desc: "Decentralized search indices", icon: Search },
    { name: "Elixpo Core Hub", href: ELIXPO_LINKS.homepage, desc: "Ecosystem main interface portal", icon: LayoutDashboard },
    { name: "Personal Portfolios", href: ELIXPO_LINKS.portfolio, desc: "Custom brand identity showcases", icon: User },
    { name: "Tommy Orchestrator", href: ELIXPO_LINKS.tommy, desc: "Ecosystem workflow scheduler", icon: Cpu },
  ];

  const productPackages = [
    { name: "@elixpo/lixsketch", href: ELIXPO_LINKS.npmLixSketch, desc: "SVG Whiteboard NPM library", icon: Palette },
    { name: "@elixpo/lixeditor", href: ELIXPO_LINKS.npmLixEditor, desc: "Rich WYSIWYG BlockNote editor", icon: FileText },
    { name: "LixSketch VS Code", href: ELIXPO_LINKS.vsLixSketch, desc: "Canvas drawing extension", icon: Terminal },
    { name: "LixEditor VS Code", href: ELIXPO_LINKS.vsLixEditor, desc: "Markdown & LaTeX equation solver", icon: Code2 },
  ];

  const useCasesList = [
    { label: "Enterprise Scale", href: "#about", desc: "Collaborative canvas configurations", icon: Building2 },
    { label: "Frontend Craft", href: "#nominate", desc: "Aesthetic interfaces & design structures", icon: Monitor },
    { label: "Fullstack Integrity", href: "#nominate", desc: "Robust data flow & integrations", icon: Database },
    { label: "Scientific Content", href: "#about", desc: "LaTeX typesetting & editor formulas", icon: Atom },
    { label: "SEO & Growth", href: "#features", desc: "Organic system discoverability & marketing", icon: Megaphone }
  ];

  const resourcesList = [
    { label: "Developer Docs", href: ELIXPO_LINKS.githubChapter, desc: "System specifications and APIs manuals", icon: FileText },
    { label: "Core Changelog", href: ELIXPO_LINKS.githubChapter, desc: "Continuous releases activity log", icon: History },
    { label: "Ecosystem Support", href: ELIXPO_LINKS.sponsors, desc: "Sponsor or query system builders", icon: HelpCircle },
    { label: "Press Publications", href: ELIXPO_LINKS.blog, desc: "Official product feature updates", icon: Newspaper },
    { label: "Container Builds", href: ELIXPO_LINKS.githubChapter, desc: "Production-ready builds tagged", icon: Tag }
  ];

  return (
    <div ref={menuRef} className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4 mt-4">
      {/* Centered Minimalist Capsule Container */}
      <nav className="flex items-center justify-between mx-auto bg-black/90 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 shadow-xl select-none">
        
        {/* Navigation Tabs List */}
        <div className="flex items-center justify-center gap-1 sm:gap-3 flex-1">
          {/* About */}
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "#about")}
            className="px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#E1E0CC]/80 hover:text-white transition-colors duration-200"
          >
            About
          </a>

          {/* Product Dropdown trigger */}
          <button
            onClick={() => toggleMenu("product")}
            className={`px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono inline-flex items-center gap-1.5 transition-colors duration-200 ${
              activeMenu === "product" ? "text-primary" : "text-[#E1E0CC]/80 hover:text-white"
            }`}
          >
            <span>Product</span>
            <ChevronDown size={10} className={`transform transition-transform duration-300 ${activeMenu === "product" ? "rotate-180" : ""}`} />
          </button>

          {/* Use Case Dropdown trigger */}
          <button
            onClick={() => toggleMenu("usecases")}
            className={`px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono inline-flex items-center gap-1.5 transition-colors duration-200 ${
              activeMenu === "usecases" ? "text-primary" : "text-[#E1E0CC]/80 hover:text-white"
            }`}
          >
            <span>Use Case</span>
            <ChevronDown size={10} className={`transform transition-transform duration-300 ${activeMenu === "usecases" ? "rotate-180" : ""}`} />
          </button>

          {/* Pricing Custom trigger */}
          <button
            onClick={() => toggleMenu("pricing")}
            className={`px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono inline-flex items-center gap-1.5 transition-colors duration-200 ${
              activeMenu === "pricing" ? "text-primary" : "text-[#E1E0CC]/80 hover:text-white"
            }`}
          >
            <span>Pricing</span>
            <ChevronDown size={10} className={`transform transition-transform duration-300 ${activeMenu === "pricing" ? "rotate-180" : ""}`} />
          </button>

          {/* Blog (Direct link) */}
          <a
            href={ELIXPO_LINKS.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#E1E0CC]/80 hover:text-white transition-colors duration-200 hidden sm:inline-block"
          >
            Blog
          </a>

          {/* Resources Dropdown trigger */}
          <button
            onClick={() => toggleMenu("resources")}
            className={`px-2.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-widest font-mono inline-flex items-center gap-1.5 transition-colors duration-200 ${
              activeMenu === "resources" ? "text-primary" : "text-[#E1E0CC]/80 hover:text-white"
            }`}
          >
            <span>Resources</span>
            <ChevronDown size={10} className={`transform transition-transform duration-300 ${activeMenu === "resources" ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* Small screen mobile trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-1.5 text-[#E1E0CC] hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
        </button>

      </nav>

      {/* Dropdown Mega Panels rendering below floating capsule */}
      <AnimatePresence>
        
        {/* Backdrop overlay */}
        {activeMenu && (
          <motion.div 
            key="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] bg-black/40 z-[-1] pointer-events-auto backdrop-blur-[2px]"
            onClick={() => setActiveMenu(null)}
          />
        )}

        {/* MENU PANEL: PRODUCT */}
        {activeMenu === "product" && (
          <motion.div
            key="nav-panel-product"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-[-20px] right-[-20px] md:left-[-60px] md:right-[-60px] lg:left-[-110px] lg:right-[-110px] z-10 mt-2"
          >
            <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Ecosystem */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-primary block mb-3 pl-2">Platforms</span>
                  <div className="flex flex-col gap-1.5">
                    {productEcosystem.map((p, i) => (
                      <a 
                        key={`nav-desktop-prod-eco-${i}`} 
                        href={p.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.03] transition-all group"
                      >
                        <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[#E1E0CC]/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                          <p.icon size={13} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-semibold text-white/90 group-hover:text-primary transition-colors truncate">{p.name}</span>
                            <ArrowUpRight size={8} className="opacity-0 group-hover:opacity-60 text-primary transition-opacity shrink-0" />
                          </div>
                          <p className="text-[10px] text-neutral-500 leading-normal line-clamp-1 mt-0.5">{p.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 2: Infrastructure */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-primary block mb-3 pl-2">Infrastructure</span>
                  <div className="flex flex-col gap-1.5">
                    {productInfrastructure.map((p, i) => (
                      <a 
                        key={`nav-desktop-prod-inf-${i}`} 
                        href={p.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.03] transition-all group"
                      >
                        <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[#E1E0CC]/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                          <p.icon size={13} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-semibold text-white/90 group-hover:text-primary transition-colors truncate">{p.name}</span>
                            <ArrowUpRight size={8} className="opacity-0 group-hover:opacity-60 text-primary transition-opacity shrink-0" />
                          </div>
                          <p className="text-[10px] text-neutral-500 leading-normal line-clamp-1 mt-0.5">{p.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Column 3: Packages */}
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-primary block mb-3 pl-2">Packages & Dev</span>
                  <div className="flex flex-col gap-1.5">
                    {productPackages.map((pkg, i) => (
                      <a 
                        key={`nav-desktop-pkg-${i}`} 
                        href={pkg.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/[0.03] transition-all group"
                      >
                        <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-[#E1E0CC]/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                          <pkg.icon size={13} strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-semibold text-white/90 group-hover:text-primary transition-colors truncate">{pkg.name}</span>
                            <ArrowUpRight size={8} className="opacity-0 group-hover:opacity-60 text-primary transition-opacity shrink-0" />
                          </div>
                          <p className="text-[10px] text-neutral-500 leading-normal line-clamp-1 mt-0.5">{pkg.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* MENU PANEL: USE CASE */}
        {activeMenu === "usecases" && (
          <motion.div
            key="nav-panel-usecases"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-[-20px] right-[-20px] z-10 mt-2"
          >
            <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-primary block mb-3.5 pl-2">Solutions Network</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {useCasesList.map((uc, i) => (
                  <a
                    key={`nav-desktop-uc-${i}`}
                    href={uc.href}
                    onClick={(e) => handleLinkClick(e, uc.href)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[#E1E0CC]/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                      <uc.icon size={14} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold text-white/90 group-hover:text-primary transition-colors block">{uc.label}</span>
                      <p className="text-[10px] text-neutral-500 leading-normal line-clamp-1 mt-1">{uc.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* MENU PANEL: RESOURCES */}
        {activeMenu === "resources" && (
          <motion.div
            key="nav-panel-resources"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-[-20px] right-[-20px] z-10 mt-2"
          >
            <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-primary block mb-3.5 pl-2">System Support Assets</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {resourcesList.map((res, i) => (
                  <a
                    key={`nav-desktop-res-${i}`}
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-[#E1E0CC]/70 group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all shrink-0">
                      <res.icon size={14} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-white/90 group-hover:text-primary transition-colors block">{res.label}</span>
                        <ArrowUpRight size={8} className="opacity-0 group-hover:opacity-60 text-primary transition-opacity shrink-0" />
                      </div>
                      <p className="text-[10px] text-neutral-500 leading-normal line-clamp-1 mt-1">{res.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* MENU PANEL: PRICING (Sponsorship parameters) */}
        {activeMenu === "pricing" && (
          <motion.div
            key="nav-panel-pricing"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm z-10 mt-2"
          >
            <div className="bg-[#0b0b0b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] font-mono uppercase tracking-widest text-[#DEDBC8]/40">Copyleft</span>
                <span className="text-[9px] font-mono text-primary bg-primary/10 px-1 py-0.5 rounded">GPL-3.0</span>
              </div>
              <p className="text-[11px] text-[#DEDBC8]/70 leading-relaxed mb-3">
                All software services, databases, editors and models are entirely free.
              </p>
              <a
                href={ELIXPO_LINKS.sponsors}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-1.5 text-[10px] font-mono bg-primary text-black rounded hover:opacity-90 transition-colors"
              >
                Become Sponsor
              </a>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* MOBILE EXPANSION LAYER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="nav-mobile-expansion"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="sm:hidden absolute top-[52px] inset-x-0 bg-[#070707] border border-white/10 rounded-2xl p-4 mt-2 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, "#about")}
                className="text-xs uppercase font-mono text-[#DEDBC8] py-1 block"
              >
                About
              </a>

              <div className="py-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-primary uppercase block mb-2 pl-1">Products</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {[...productEcosystem, ...productInfrastructure, ...productPackages].map((p, idx) => (
                    <a 
                      key={`nav-mobile-prod-${idx}`} 
                      href={p.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-1.5 py-1 rounded-lg hover:bg-white/5 text-slate-300 text-xs font-mono"
                    >
                      <p.icon size={12} className="text-primary/70 shrink-0" strokeWidth={1.5} />
                      <span className="truncate">{p.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-primary uppercase block mb-2 pl-1">Use Cases</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {useCasesList.map((uc, idx) => (
                    <a
                      key={`nav-mobile-uc-${idx}`}
                      href={uc.href}
                      onClick={(e) => handleLinkClick(e, uc.href)}
                      className="flex items-center gap-2 px-1.5 py-1 rounded-lg hover:bg-white/5 text-slate-300 text-xs font-mono"
                    >
                      <uc.icon size={12} className="text-primary/70 shrink-0" strokeWidth={1.5} />
                      <span>{uc.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="py-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-primary uppercase block mb-2 pl-1">Resources</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {resourcesList.map((res, idx) => (
                    <a
                      key={`nav-mobile-res-${idx}`}
                      href={res.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-1.5 py-1 rounded-lg hover:bg-white/5 text-slate-300 text-xs font-mono"
                    >
                      <res.icon size={12} className="text-primary/70 shrink-0" strokeWidth={1.5} />
                      <span>{res.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a 
                href={ELIXPO_LINKS.blog} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase font-mono text-[#DEDBC8] py-1 block"
              >
                Blog
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
