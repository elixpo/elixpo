import partnersData from "@/data/partners.json";

export default function Partners() {
  return (
    <div className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-8 md:gap-12 overflow-x-auto">
        {partnersData.partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-6 md:h-7 w-auto flex-shrink-0"
            title={partner.name}
          />
        ))}
      </div>
    </div>
  );
}
