import type { Metadata } from "next";
import { LegalHero } from "@/components/LegalHero";
import { ELIXPO_LINKS } from "@/lib/elixpo-links";
import { VIDEOS } from "@/lib/media";

export const metadata: Metadata = {
  title: "License",
  description:
    "Elixpo is open source under MIT and CC-BY-4.0 licenses. Learn how you can use our code and assets.",
  alternates: { canonical: "/license" },
};

export default function LicensePage() {
  return (
    <>
      <LegalHero
        title="License"
        subtitle="Elixpo is open source and publicly licensed. Here's exactly how you can use our code and assets."
        video={VIDEOS.sketch}
        updated="June 2026"
      />

      <article className="prose prose-invert max-w-3xl mx-auto px-6 py-16 prose-headings:font-serif prose-headings:text-white prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
        <h2>Dual-License Model</h2>
        <p>
          Elixpo is licensed under a <strong>dual-license model</strong>. Code and assets are treated separately to ensure maximum freedom while protecting the project's identity and brand.
        </p>

        <h2>Source Code: MIT License</h2>
        <p>
          All source code in this repository—including scripts, tools, configuration, and CI/CD—is provided under the <strong>MIT License with Oreo-trademarks exception</strong>.
        </p>
        <p>
          This means you can:
        </p>
        <ul>
          <li>Use the code for any purpose, including commercial projects</li>
          <li>Modify and distribute the code</li>
          <li>Include it in proprietary applications</li>
          <li>Sublicense the code</li>
        </ul>
        <p>
          <strong>The only requirement:</strong> include a copy of the original MIT license and copyright notice with your distribution.
        </p>

        <h2>Visual Assets: CC-BY-4.0</h2>
        <p>
          All visual assets and their prompts—including stickers, promotional art, banner graphics, and splash art—are licensed under <strong>Creative Commons Attribution 4.0 International (CC-BY-4.0)</strong>.
        </p>
        <p>
          This means you can:
        </p>
        <ul>
          <li>Use the assets for any purpose</li>
          <li>Share and adapt the assets</li>
          <li>Use in commercial work</li>
        </ul>
        <p>
          <strong>You must:</strong> provide appropriate credit to Elixpo and link to the license when distributing the assets.
        </p>

        <h2>Trademark Exception</h2>
        <p>
          Both MIT and CC-BY-4.0 grants carry an explicit <strong>trademark and naming exception</strong>. The following are reserved:
        </p>
        <ul>
          <li>The <strong>Oreo mascot character</strong> and design</li>
          <li>The <strong>chest E-badge</strong></li>
          <li>The <strong>&quot;Elixpo&quot; and &quot;Oreo&quot; names</strong></li>
          <li>The <strong>brand color palette</strong> as specified in our brand guidelines</li>
        </ul>
        <p>
          These trademarks are <strong>not granted for use outside Elixpo-aligned projects</strong>. If you're building an Elixpo-related project and want to use these brand elements, please reach out to discuss licensing.
        </p>

        <h2>Third-Party Dependencies</h2>
        <p>
          Elixpo relies on open-source dependencies, each with their own licenses. We respect and comply with all license terms. For a complete list of dependencies and their licenses, refer to:
        </p>
        <ul>
          <li><code>LICENSES/notices/notice-board</code> in the repository</li>
          <li><code>LICENSES/README.md</code> for detailed attribution</li>
        </ul>

        <h2>How to Comply</h2>
        <h3>Using Elixpo Code</h3>
        <ol>
          <li>Include the MIT license text in your project</li>
          <li>Include copyright notice: <code>© Elixpo Contributors</code></li>
          <li>Mention any modifications you made</li>
        </ol>

        <h3>Using Elixpo Assets</h3>
        <ol>
          <li>Include the CC-BY-4.0 license attribution</li>
          <li>Credit Elixpo and link to the original source</li>
          <li>Indicate if you modified the assets</li>
        </ol>

        <h3>Using Elixpo Brand</h3>
        <ol>
          <li>Do not use Oreo, E-badge, or "Elixpo" names without permission</li>
          <li>Do not use the brand color palette to misrepresent affiliation</li>
          <li>Contact us at <a href={`mailto:${ELIXPO_LINKS.email}`}>{ELIXPO_LINKS.email}</a> for brand use inquiries</li>
        </ol>

        <h2>Contributions to Elixpo</h2>
        <p>
          When you contribute code, documentation, or assets to Elixpo, you agree that your contributions will be licensed under the same terms as this project. You represent and warrant that:
        </p>
        <ul>
          <li>You own or have rights to the contributed material</li>
          <li>Your contribution does not infringe on third-party rights</li>
          <li>You grant Elixpo a perpetual, worldwide license to use your contribution</li>
        </ul>

        <h2>Derivative Works</h2>
        <p>
          If you create a derivative of an Elixpo project:
        </p>
        <ul>
          <li>Clearly indicate that your work is a derivative</li>
          <li>Preserve the original license and copyright notices</li>
          <li>Do not use the Elixpo or Oreo names or branding in a way that implies official affiliation</li>
          <li>Include a copy of the original LICENSE file</li>
        </ul>

        <h2>Commercial Use</h2>
        <p>
          Elixpo code and assets are free for commercial use under their respective licenses. You can:
        </p>
        <ul>
          <li>Build commercial products with Elixpo code</li>
          <li>Sell applications or services built on Elixpo</li>
          <li>Include Elixpo in proprietary distributions</li>
        </ul>
        <p>
          You must comply with the attribution requirements of each license.
        </p>

        <h2>Questions about Licensing?</h2>
        <p>
          If you have specific questions about how to use Elixpo code or assets, or if you need clarification on trademark usage, please reach out:
        </p>
        <ul>
          <li><a href={`mailto:${ELIXPO_LINKS.email}`}>Email us</a> at {ELIXPO_LINKS.email}</li>
          <li>Ask in our <a href={ELIXPO_LINKS.discussions}>GitHub Discussions</a></li>
          <li>Open an issue on <a href={ELIXPO_LINKS.github}>GitHub</a></li>
        </ul>

        <h2>Complete License Texts</h2>
        <p>
          The full license texts are available in the repository:
        </p>
        <ul>
          <li><code>LICENSE</code> – Complete licensing terms</li>
          <li><code>LICENSES/preferred/MIT</code> – MIT License text</li>
          <li><code>LICENSES/preferred/CC-BY-4.0</code> – CC-BY-4.0 License text</li>
          <li><code>LICENSES/exceptions/Oreo-trademarks</code> – Trademark exception details</li>
        </ul>

        <h2>Changes to License</h2>
        <p>
          We may update our licensing terms in the future. Such changes will be reflected with a new version and announced to the community. Contributions made under a previous license version will remain under that version's terms.
        </p>

        <hr />

        <p style={{ fontSize: "0.875rem", opacity: 0.75 }}>
          Last updated: June 2026. For the exact legal text of our licenses, please see the <code>LICENSE</code> file in the repository root.
        </p>
      </article>
    </>
  );
}
