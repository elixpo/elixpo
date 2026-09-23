import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ECOSYSTEM_PRODUCTS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Products and Open-Source Projects",
  description: "Explore LixBlogs, LixSketch, Elixpo Search, Portfolio, Accounts, Lixrl, and Elixpo Packages—open-source tools for creating, researching, publishing, and building.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Elixpo Products and Open-Source Projects",
    description: "Explore Elixpo's publishing, canvas, search, identity, portfolio, links, and Linux package services.",
    url: "/projects",
    images: ["/og-image.webp"],
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Elixpo products",
    itemListElement: ECOSYSTEM_PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://elixpo.com/projects/${product.slug}`,
      name: product.name,
    })),
  };

  return (
    <main className="bg-black text-[#E1E0CC] pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-7xl mx-auto">
        <header className="mb-14 sm:mb-20 max-w-4xl">
          <span className="text-[10px] uppercase tracking-widest font-mono text-primary/80 block mb-3">
            The Elixpo Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif italic text-white tracking-tight mb-6">
            Products built in the open.
          </h1>
          <p className="text-base sm:text-lg text-[#DEDBC8]/70 leading-relaxed max-w-3xl">
            Creative tools, research experiments, shared infrastructure, and developer packages—designed as one connected ecosystem and maintained in public.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {ECOSYSTEM_PRODUCTS.map((product, index) => (
            <article key={product.slug} className="rounded-2xl border border-white/10 bg-[#111] p-6 sm:p-8 flex flex-col min-h-[320px] hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-10">
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary/70 font-mono">{product.eyebrow}</span>
                <span className="text-[10px] text-white/35 font-mono">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-4">{product.name}</h2>
              <p className="text-sm text-[#DEDBC8]/70 leading-relaxed mb-8 flex-1">{product.shortDescription}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={`/projects/${product.slug}`} className="inline-flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                  Full overview <ArrowRight size={14} />
                </Link>
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#DEDBC8]/50 hover:text-white transition-colors">
                  Visit product <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
