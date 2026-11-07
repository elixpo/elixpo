import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import history from "../../../content/history.json";
import organization from "../../../content/organization.json";
import people from "../../../content/people.json";
import { DIRECTORY_ENTRIES, familyPath, type Lifecycle } from "@/lib/directory";
import { RESEARCH_RECORDS, researchRecordPath } from "@/lib/research";
import { createPageMetadata, serializeJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Elixpo — encyclopedic overview",
  description: "A neutral, referenced overview of Elixpo: an open-source project foundry founded in 2023, its history, operating model, projects, services, research, and people.",
  path: "/wiki",
});

// Every claim on this page cites a public record; references are numbered in first-use order.
const references: { label: string; url: string }[] = [];
function cite(label: string, url: string) {
  const existing = references.findIndex((reference) => reference.url === url);
  if (existing !== -1) return existing + 1;
  references.push({ label, url });
  return references.length;
}

const Ref = ({ n }: { n: number }) => <sup className="wiki-ref"><a href={`#ref-${n}`}>[{n}]</a></sup>;

const LIFECYCLE_ORDER: Lifecycle[] = ["active", "maintenance", "incubating", "paused", "completed", "archived"];
const entries = DIRECTORY_ENTRIES.filter((entry) => entry.repository !== "elixpo_chapter");
const current = entries.filter((entry) => entry.lifecycle !== "archived").sort((a, b) => LIFECYCLE_ORDER.indexOf(a.lifecycle) - LIFECYCLE_ORDER.indexOf(b.lifecycle) || a.name.localeCompare(b.name));
const archived = entries.filter((entry) => entry.lifecycle === "archived");
const papers = RESEARCH_RECORDS.filter((record) => record.paperUrl && record.releasedAt).sort((a, b) => b.releasedAt!.localeCompare(a.releasedAt!));
const founders = people.currentTeam.filter((person) => /found/i.test(person.role));

const refOrigin = cite("OctaBit repository, earliest surviving Elixpo project record (26 December 2023)", "https://github.com/elixpo/octabit");
const refOrg = cite("Elixpo GitHub organization", organization.urls.github.url);
const refAbout = cite("About Elixpo", "https://elixpo.com/about");
const refPeople = cite("Elixpo people record", "https://elixpo.com/people");
const refPollinations = cite("search.elixpo hosted under the Pollinations GitHub organization", "https://github.com/pollinations/search.elixpo");
const historyRefs = history.entries.map((item) => cite(item.evidence[0].label, item.evidence[0].url));
const refFlappy = cite("6502.org Homebuilt Projects", "https://6502.org/homebuilt/");
const paperRefs = papers.map((record) => cite(record.title, record.paperUrl!));

const sections = [["history", "History"], ["model", "Operating model"], ["projects", "Projects and services"], ["research", "Research"], ["people", "People"], ["see-also", "See also"], ["references", "References"]] as const;

export default function WikiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://elixpo.com/#organization",
    name: organization.name,
    url: organization.urls.website.url,
    description: organization.fullDescription,
    foundingDate: "2023",
    founder: founders.map((person) => ({ "@type": "Person", name: person.name, url: person.github })),
    email: organization.urls.contact.url.replace("mailto:", ""),
    sameAs: [organization.urls.github.url],
  };

  return <main className="page-shell wiki-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
    <header className="page-intro"><p className="eyebrow">Encyclopedic overview / every claim referenced</p><h1>Elixpo</h1></header>

    <div className="wiki-layout">
      <aside className="wiki-infobox" aria-label="Elixpo at a glance">
        <h2>Elixpo</h2>
        <dl>
          <dt>Type</dt><dd>Open-source project foundry</dd>
          <dt>Founded</dt><dd>2023 (earliest project record)<Ref n={refOrigin} /><br />GitHub organization: 24 February 2024<Ref n={refOrg} /></dd>
          <dt>Founders</dt><dd>{founders.map((person) => person.name).join(", ")}<Ref n={refPeople} /></dd>
          <dt>Focus</dt><dd>Open software, reproducible research, open hardware, operated services</dd>
          <dt>Programmes</dt><dd>{organization.programs.map((program) => program.name).join(", ")}</dd>
          <dt>Public projects</dt><dd>{current.length} current, {archived.length} archived</dd>
          <dt>Public papers</dt><dd>{papers.length}</dd>
          <dt>Infrastructure partner</dt><dd>Pollinations.AI<Ref n={refPollinations} /></dd>
          <dt>Website</dt><dd><a href={organization.urls.website.url}>elixpo.com</a></dd>
          <dt>Source</dt><dd><a href={organization.urls.github.url} target="_blank" rel="noreferrer">github.com/elixpo</a></dd>
        </dl>
      </aside>

      <article className="wiki-body">
        <p className="wiki-lead"><strong>Elixpo</strong> is an open-source project foundry that works with active maintainers to build and release software, reproducible research, open hardware, and publicly operated services in public.<Ref n={refAbout} /> Work is organized into time-bounded <em>Chapters</em> with a defined release objective, and projects that continue beyond a Chapter may become <em>Member Projects</em> while their original maintainers keep authority over them.<Ref n={refAbout} /> Its earliest surviving project dates from December 2023<Ref n={refOrigin} />, and its GitHub organization was created in February 2024.<Ref n={refOrg} /></p>

        <nav className="wiki-contents" aria-label="Contents"><p className="eyebrow">Contents</p><ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

        <section id="history"><h2>History</h2>
          <p>Elixpo began as a series of college-era projects, the earliest surviving one being the OctaBit breadboard computer, before those projects were gathered under a shared GitHub organization.<Ref n={refOrigin} /> The timeline below lists milestones with the precision the public record supports; the full ledger is on the <Link href="/history">history page</Link>.</p>
          <ul className="wiki-timeline">{history.entries.map((item, index) => <li key={`${item.period}-${item.title}`}><span>{item.period}</span>{item.title}<Ref n={historyRefs[index]} /></li>)}</ul>
        </section>

        <section id="model"><h2>Operating model</h2>
          <p>{organization.fullDescription}<Ref n={refAbout} /></p>
          <ul>{organization.programs.map((program) => <li key={program.name}><strong>{program.name}</strong>: {program.purpose}</li>)}</ul>
          <p>Participation does not require transferring a repository, and lifecycle states (active, maintenance, incubating, paused, completed, archived) are recorded for every public project, so retired work stays visible without being presented as supported.<Ref n={refAbout} /></p>
        </section>

        <section id="projects"><h2>Projects and services</h2>
          <p>The public registry lists {current.length} current projects, services, and research workstreams, plus {archived.length} archived records. Flappy6502, a Flappy Bird port for a breadboard R6502 computer, is listed in 6502.org&apos;s Homebuilt Projects.<Ref n={refFlappy} /></p>
          <div className="wiki-table-wrap"><table className="wiki-table">
            <thead><tr><th scope="col">Name</th><th scope="col">Kind</th><th scope="col">Status</th><th scope="col">Description</th></tr></thead>
            <tbody>{current.map((entry) => <tr key={entry.repository}><th scope="row"><Link href={`${familyPath(entry.family)}/${entry.slug}`}>{entry.name}</Link></th><td>{entry.family}</td><td>{entry.lifecycle}</td><td>{entry.summary}</td></tr>)}</tbody>
          </table></div>
          <p className="wiki-note">Archived: {archived.map((entry) => entry.name).join(", ")}.</p>
        </section>

        <section id="research"><h2>Research</h2>
          <p>Elixpo publishes papers and technical reports with their review status stated; none of the records below has been independently peer reviewed unless noted.</p>
          <ul className="wiki-papers">{papers.map((record, index) => <li key={record.slug}><Link href={researchRecordPath(record)}>{record.title}</Link> — {record.authors.map((author) => author.name).join(", ")} ({record.releasedAt!.slice(0, 4)}), {record.researchStatus.replace("-", " ")}, {record.reviewStatus.replaceAll("-", " ")}.<Ref n={paperRefs[index]} /></li>)}</ul>
        </section>

        <section id="people"><h2>People</h2>
          <ul>{people.currentTeam.map((person) => <li key={person.handle}><a href={person.github} target="_blank" rel="noreferrer">{person.name}</a> — {person.role}</li>)}</ul>
          <p>Contributors are credited individually on the <Link href="/contributors">contributor records</Link>.<Ref n={refPeople} /></p>
        </section>

        <section id="see-also"><h2>See also</h2>
          <ul className="wiki-inline"><li><Link href="/about">About</Link></li><li><Link href="/history">History</Link></li><li><Link href="/chapter">Chapter model</Link></li><li><Link href="/research">Research</Link></li><li><Link href="/packages">Packages</Link></li><li><Link href="/people">People</Link></li></ul>
        </section>

        <section id="references"><h2>References</h2>
          <ol className="wiki-references">{references.map((reference, index) => <li key={reference.url} id={`ref-${index + 1}`}><a href={reference.url} target="_blank" rel="noreferrer">{reference.label}<ArrowUpRight size={11} /></a></li>)}</ol>
        </section>
      </article>
    </div>
  </main>;
}
