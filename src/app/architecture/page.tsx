import { KeyRound, Mail, CreditCard, Globe, Rocket, Activity } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { VIDEOS } from "@/lib/media";

export const metadata = {
  title: "Architecture",
  description:
    "How the Elixpo ecosystem fits together: shared SSO, mail, and payouts services back the SaaS products and the lixrl flagship, with standalone surfaces and ops dashboards, all on Cloudflare.",
  alternates: { canonical: "/architecture" },
  openGraph: {
    title: "Architecture | Elixpo",
    description: "How the Elixpo ecosystem fits together.",
    images: ["/og-image.webp"],
  },
};

const ARCH_CHART = `graph TB
  classDef shared fill:#1d1d1d,stroke:#DEDBC8,color:#E1E0CC;
  classDef saas fill:#141414,stroke:#9a9a9a,color:#E1E0CC;
  classDef flag fill:#2a2410,stroke:#FFBE1E,color:#ffffff;
  classDef solo fill:#141414,stroke:#00B4A5,color:#E1E0CC;
  classDef ops fill:#141414,stroke:#FF5D68,color:#E1E0CC;

  subgraph SHARED["Shared platform"]
    ACC["accounts.elixpo · SSO"]:::shared
    MAIL["mails.elixpo · Mail"]:::shared
    PAY["payouts.elixpo · Payments"]:::shared
  end

  subgraph PRODUCTS["SaaS products · require login"]
    BLOGS["blogs.elixpo"]:::saas
    ART["art.elixpo (under dev)"]:::saas
    CHAT["chat.elixpo (under dev)"]:::saas
    SKETCH["sketch.elixpo"]:::saas
    SEARCH["search.elixpo"]:::saas
  end

  LIXRL["lixrl.com · URL shortener · flagship"]:::flag

  subgraph SOLO["Standalone · no login"]
    HOME["elixpo.com"]:::solo
    OREO["oreo.elixpo"]:::solo
    ME["me.elixpo"]:::solo
  end

  subgraph OPS["Operations"]
    ADMIN["admin.elixpo · Dashboard"]:::ops
    STATUS["status.elixpo · Monitoring"]:::ops
  end

  BLOGS & ART & CHAT & SKETCH & SEARCH & LIXRL --> ACC
  BLOGS & ART & CHAT & SKETCH & SEARCH & LIXRL --> MAIL
  BLOGS & ART & CHAT & SKETCH & SEARCH & LIXRL --> PAY
  ADMIN -.- ACC
  STATUS -.- MAIL
`;

const layers = [
  {
    icon: KeyRound,
    title: "Shared platform",
    text: "accounts.elixpo (SSO), mails.elixpo (mail infra), and payouts.elixpo (payments) back the whole ecosystem.",
  },
  {
    icon: Globe,
    title: "SaaS products",
    text: "Blogs, Art, Chat, Sketch, and Search authenticate via Accounts and share the Mail and Payouts infrastructure.",
  },
  {
    icon: Rocket,
    title: "Flagship",
    text: "lixrl.com, our URL shortener, uses all three shared services - Accounts, Mail, and Payouts.",
  },
  {
    icon: Mail,
    title: "Standalone",
    text: "elixpo.com, oreo.elixpo, and me.elixpo are public, login-free surfaces that stand on their own.",
  },
  {
    icon: Activity,
    title: "Operations",
    text: "admin.elixpo is the operations dashboard and status.elixpo handles monitoring across the platform.",
  },
  {
    icon: CreditCard,
    title: "Edge",
    text: "Everything runs on Cloudflare - workers, storage, and pages - for fast, global delivery.",
  },
];

export default function ArchitecturePage() {
  return (
    <div className="bg-black text-[#E1E0CC] select-none">
      <PageHero
        eyebrow="How it fits together"
        title="Architecture"
        subtitle="Shared SSO, mail, and payouts back the SaaS products and the lixrl flagship. Standalone surfaces stand alone. All on Cloudflare."
        video={VIDEOS.sketch}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Diagram */}
        <div className="rounded-2xl bg-[#0d0d0d] border border-white/10 p-4 sm:p-8 mb-16 noise-overlay">
          <MermaidDiagram chart={ARCH_CHART} id="architecture" />
        </div>

        {/* Legend / layers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((l) => {
            const Icon = l.icon;
            return (
              <div key={l.title} className="rounded-2xl bg-[#141414] border border-white/10 p-6">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary w-fit mb-4">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium text-white mb-1.5">{l.title}</h3>
                <p className="text-xs text-[#DEDBC8]/65 leading-relaxed">{l.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
