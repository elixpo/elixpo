"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import contributorsData from "@/data/contributors.json";

// The roster is refreshed by the @elixpoo bot (see
// .github/workflows/update-contributors.yml) and served raw from main.
// We read it live so new contributors show up without a redeploy, and fall
// back to the bundled copy for first paint / offline / rate-limited reads.
const RAW_ROSTER_URL =
  "https://raw.githubusercontent.com/elixpo/elixpo/main/src/data/contributors.json";

export function Contributors() {
  const [contributors, setContributors] = useState<string[]>(
    contributorsData.contributors,
  );
  const [subheadline, setSubheadline] = useState<string>(
    contributorsData.subheadline,
  );

  useEffect(() => {
    let active = true;
    fetch(RAW_ROSTER_URL, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data || !Array.isArray(data.contributors) || !data.contributors.length) {
          return;
        }
        setContributors(data.contributors);
        if (typeof data.subheadline === "string") setSubheadline(data.subheadline);
      })
      .catch(() => {
        /* keep the bundled fallback */
      });
    return () => {
      active = false;
    };
  }, []);

  // Split contributors into orbital rings
  const orbit1 = contributors.slice(0, 6);
  const orbit2 = contributors.slice(6, 15);
  const orbit3 = contributors.slice(15);

  return (
    <section
      id="contributors"
      className="bg-black text-[#E1E0CC] py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#DEDBC8] font-medium font-mono block mb-3">
            The People Behind Elixpo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Our <span className="italic font-serif text-primary">Contributors</span>
          </h2>
          <p className="text-[#DEDBC8]/60 max-w-xl mx-auto text-xs sm:text-sm font-mono leading-relaxed">
            {subheadline}
          </p>
        </div>

        {/* Solar System */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto">
          {/* Center - Founder avatar */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <Image
              src="https://github.com/Circuit-Overtime.png"
              alt="Circuit-Overtime"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-primary shadow-xl shadow-primary/30"
              unoptimized
            />
          </div>

          {/* Orbit 1 - innermost */}
          <div className="absolute inset-[25%] rounded-full border border-white/10">
            <div className="relative w-full h-full animate-orbit-slow">
              {orbit1.map((username, i) => {
                const angle = (i / orbit1.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                return (
                  <div
                    key={username}
                    className="absolute animate-counter-orbit-slow"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Image
                      src={`https://github.com/${username}.png`}
                      alt={username}
                      width={36}
                      height={36}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-[#DEDBC8]/40 shadow-md"
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Orbit 2 - middle */}
          <div className="absolute inset-[12%] rounded-full border border-white/[0.07]">
            <div className="relative w-full h-full animate-orbit-medium">
              {orbit2.map((username, i) => {
                const angle = (i / orbit2.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                return (
                  <div
                    key={username}
                    className="absolute animate-counter-orbit-medium"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Image
                      src={`https://github.com/${username}.png`}
                      alt={username}
                      width={32}
                      height={32}
                      className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-[#DEDBC8]/30 shadow-md"
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Orbit 3 - outermost */}
          <div className="absolute inset-0 rounded-full border border-white/[0.05]">
            <div className="relative w-full h-full animate-orbit-outer">
              {orbit3.map((username, i) => {
                const angle = (i / orbit3.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = 50 + 50 * Math.cos(rad);
                const y = 50 + 50 * Math.sin(rad);
                return (
                  <div
                    key={username}
                    className="absolute animate-counter-orbit-outer"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <Image
                      src={`https://github.com/${username}.png`}
                      alt={username}
                      width={28}
                      height={28}
                      className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-[#DEDBC8]/20 shadow-sm"
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contributor count */}
        <p className="text-center text-xs text-[#DEDBC8]/65 font-mono mt-8">
          45+ contributors and growing
        </p>
      </div>
    </section>
  );
}
