"use client";

import { useEffect, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  id?: string;
}

/**
 * Renders a Mermaid diagram, themed to match the site (dark + cream). Mermaid
 * is lazy-imported so its weight only loads on routes that use it.
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
            background: "#000000",
            primaryColor: "#161616",
            primaryTextColor: "#E1E0CC",
            primaryBorderColor: "#DEDBC8",
            secondaryColor: "#141414",
            tertiaryColor: "#0d0d0d",
            lineColor: "#9a9a9a",
            fontFamily: "Almarai, ui-sans-serif, system-ui, sans-serif",
            fontSize: "14px",
            clusterBkg: "rgba(255,255,255,0.02)",
            clusterBorder: "rgba(255,255,255,0.12)",
            edgeLabelBackground: "#0d0d0d",
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
      <div className="flex items-center justify-center py-16 text-xs font-mono text-[#DEDBC8]/40">
        Rendering diagram…
      </div>
    );
  }

  return (
    <div
      className="mermaid-wrap w-full overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
