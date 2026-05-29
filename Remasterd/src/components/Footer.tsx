/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ELIXPO_LINKS } from "../types";

export function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
        <span className="text-neutral-600 font-mono">
          © 2026 Elixpo Chapter · GNU GPL-3.0
        </span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2 md:mt-0">
          <a 
            href={ELIXPO_LINKS.generate} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#E1E0CC] transition-colors"
          >
            elixpo.com
          </a>
          <a 
            href={ELIXPO_LINKS.blog} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#E1E0CC] transition-colors"
          >
            Blog
          </a>
          <a 
            href={ELIXPO_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-[#E1E0CC] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
