import Link from "next/link";
import heroData from "@/data/hero.json";

function NodeIcon({ icon, color }: { icon: string; color: string }) {
  const bg = color + "15";
  const iconMap: Record<string, JSX.Element> = {
    brain: (
      <svg className="w-6 h-6" style={{ color }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a9 9 0 00-9 9c0 3.03 1.53 5.82 4 7.47V22h2v-2h2v2h2v-2h2v-2h-1v-1.03A9 9 0 0012 2zm-1 14h-1v-2h2v2h-1zm4-4H9v-2h6v2zm0-4H9V6h6v2z"/>
      </svg>
    ),
    code: (
      <svg className="w-6 h-6" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    palette: (
      <svg className="w-6 h-6" style={{ color }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    search: (
      <svg className="w-6 h-6" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    chat: (
      <svg className="w-6 h-6" style={{ color }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
      </svg>
    ),
    bolt: (
      <svg className="w-6 h-6" style={{ color }} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51L12.96 17.55 11 21z"/>
      </svg>
    ),
  };

  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border border-white/50"
      style={{ backgroundColor: bg }}
    >
      {iconMap[icon] || null}
    </div>
  );
}

export default function Hero() {
  const nodePositions = [
    "left-[8%] top-[20%]",
    "left-[25%] top-[5%]",
    "left-[18%] top-[60%]",
    "right-[25%] top-[5%]",
    "right-[8%] top-[20%]",
    "right-[18%] top-[60%]",
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Floating Nodes */}
        <div className="relative h-56 md:h-72 mb-8">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 280" fill="none" preserveAspectRatio="xMidYMid meet">
            <line x1="130" y1="80" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="250" y1="40" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="200" y1="200" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="550" y1="40" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="670" y1="80" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
            <line x1="600" y1="200" x2="400" y2="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="6 4" />
          </svg>

          {/* Center Elixpo logo node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-xl shadow-accent/25">
              <span className="text-white font-bold text-lg">E</span>
            </div>
          </div>

          {/* Surrounding nodes */}
          {heroData.nodes.map((node, i) => (
            <div
              key={node.icon}
              className={`absolute ${nodePositions[i]} ${i % 2 === 0 ? "animate-float-slow" : "animate-float-medium"} hidden md:block`}
            >
              <NodeIcon icon={node.icon} color={node.color} />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            {heroData.headline}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {heroData.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={heroData.primaryCta.href}
              className="px-8 py-3.5 rounded-full bg-accent text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
            >
              {heroData.primaryCta.label}
            </Link>
            <a
              href={heroData.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              {heroData.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
