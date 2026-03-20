import architectureData from "@/data/architecture.json";

export default function Architecture() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {architectureData.headline}
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            {architectureData.subheadline}
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-6">
          {architectureData.layers.map((layer, layerIndex) => (
            <div key={layer.label}>
              {/* Layer */}
              <div className="rounded-2xl border border-border bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                    {layer.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-xl text-sm font-medium border border-border bg-gray-50 hover:bg-white transition-colors"
                      style={{ borderLeftColor: layer.color, borderLeftWidth: 3 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connector arrows between layers */}
              {layerIndex < architectureData.layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg className="w-6 h-6 text-border" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
