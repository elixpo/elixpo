import teamData from "@/data/team.json";

export default function Team() {
  return (
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {teamData.headline}
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            {teamData.subheadline}
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {teamData.values.map((value) => (
            <div
              key={value}
              className="rounded-2xl bg-white border border-border p-5 text-center"
            >
              <p className="text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>

        {/* Programs & Recognition */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-center mb-8">
            Featured In & Supported By
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {teamData.programs.map((program) => (
              <div
                key={program.name}
                className="px-6 py-3 rounded-full bg-white border border-border"
              >
                <span className="text-sm font-semibold">{program.name}</span>
                <span className="text-xs text-muted ml-2">{program.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white border border-border px-8 py-5">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">
              A
            </div>
            <div className="text-left">
              <p className="font-semibold">{teamData.founder.name}</p>
              <p className="text-xs text-muted">{teamData.founder.role}</p>
              <a
                href={`https://github.com/${teamData.founder.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline"
              >
                @{teamData.founder.github}
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={teamData.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-accent text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              {teamData.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
