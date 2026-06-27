"use client";

import { useEffect, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  id?: string;
}

/**
 * Renders a Mermaid diagram themed to match the site (dark + cream), laid out
 * spaciously and scaled to fill its frame so it feels embedded in the page.
 * Mermaid is lazy-imported so its weight only loads on routes that use it.
 */
export function MermaidDiagram({ chart, id = "diagram" }: MermaidDiagramProps) {
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: "base",
          themeVariables: {
            background: "transparent",
            primaryColor: "#161616",
            primaryTextColor: "#E1E0CC",
            primaryBorderColor: "#DEDBC8",
            secondaryColor: "#141414",
            tertiaryColor: "#0d0d0d",
            lineColor: "#7a7a7a",
            fontFamily: "Almarai, ui-sans-serif, system-ui, sans-serif",
            fontSize: "14px",
            clusterBkg: "rgba(255,255,255,0.02)",
            clusterBorder: "rgba(255,255,255,0.14)",
            edgeLabelBackground: "#0d0d0d",
          },
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: "basis",
            padding: 18,
            nodeSpacing: 46,
            rankSpacing: 64,
          },
        });
        const { svg } = await mermaid.render(`mmd-${id}`, chart);
        if (active) setSvg(svg);
      } catch (err) {
        console.error("Mermaid render failed:", err);
        if (active) setFailed(true);
      }
    })();
    return () => {
      active = false;
    };
  }, [chart, id]);

  if (failed) {
    return (
      <pre className="text-xs text-[#DEDBC8]/60 font-mono overflow-x-auto whitespace-pre-wrap">
        {chart}
      </pre>
    );
  }

  if (!svg) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20">
        <span className="w-6 h-6 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#DEDBC8]/40">
          Rendering topology
        </span>
      </div>
    );
  }

  return (
    <div
      className="mermaid-wrap w-full overflow-x-auto animate-fade-in [&_svg]:w-full [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto [&_.cluster_rect]:rounded-xl [&_.node_rect]:rounded-lg [&_.edgeLabel]:text-[11px]"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
