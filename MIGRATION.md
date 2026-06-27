# Assets consolidation & migration

This document tracks folding the standalone **`elixpo/assets`** repository into
this repo and retiring it, and rolling out the new Elixpo standards (LICENSE,
NOTICE, CODE_OF_CONDUCT, README) across the ecosystem.

## Done (in this repo)

- ✅ **Brand-ready assets** consolidated and optimised to WebP:
  - `public/brand/marks/` - mascot mark, wordmark, lockup
  - `public/brand/icons/` - one icon per service
  - `brand/MASCOT.md` - the brand source of truth (mascot, palette, rules)
- ✅ **`/assets`** route - a browsable, downloadable brand kit (`elixpo.com/assets`).
- ✅ **`/architecture`** route - the ecosystem topology as a rendered Mermaid
  diagram (`elixpo.com/architecture`), also embedded in the README.
- ✅ **Licensing standard** - generic `LICENSE` + `LICENSES/` tree
  (`preferred/MIT`, `preferred/CC-BY-4.0`, `exceptions/Oreo-trademarks`) and the
  per-product **`NOTICE`** "notice board".
- ✅ **`CODE_OF_CONDUCT.md`** and **`CONTRIBUTING.md`** (ecosystem-wide).
- ✅ **Standard `README.md`** template that every Elixpo repo follows.

## To do manually (ops - cannot be safely automated)

### 1. Move the generation pipeline (optional)
The `elixpo/assets` repo also holds the asset-generation pipeline (`tools/`,
`prompts/`, `editing/`, and the `asset_generate_from_issue.py` workflow). Only
the **finished, brand-ready** assets were copied here to keep the site light.
Decide where the pipeline should live:
- **Recommended:** keep it in a dedicated `elixpo/brand` (or `elixpo/oreo`) repo
  rather than the website repo, so the static site stays lean. Transfer it with
  `git`/`gh repo transfer` to preserve history and contributions.
- If it must live here, move `tools/`, `prompts/`, `editing/` into a top-level
  `pipeline/` folder (do **not** bundle the 91 MB `stickers/` set into `public/`).

### 2. Migrate secrets (do NOT commit secret values)
Secrets in `elixpo/assets` (`.env`, `.env.local`, `.sops.yaml`,
`CI_AGENT_TOKEN`, `POLLINATIONS_KEY`, etc.) must be re-created in the new home,
never copied into git:
- GitHub Actions secrets: re-add under **Settings → Secrets and variables →
  Actions** of the target repo (or set them as **org-level** secrets so every
  Elixpo repo inherits them).
- SOPS: re-encrypt `.env` against the new repo's age/KMS key
  (`sops-reencrypt.sh`), and store the private key as a secret.

### 3. Preserve contributions when retiring `elixpo/assets`
To keep contributor credit and history:
- Prefer **transfer** over delete where possible (`gh api -X POST
  repos/elixpo/assets/transfer ...`) or archive the repo (Settings → Archive)
  instead of deleting, so history and the contributor graph survive.
- If files are copied (not transferred), use `git log`/`git shortlog -sne` from
  `elixpo/assets` to credit authors in a `CONTRIBUTORS` note.
- Open issues / asset requests: move the **"Asset request"** issue template and
  redirect requests to Discussions or the new pipeline repo before archiving.

### 4. Update cross-references
- Point any links that referenced `elixpo/assets` at the new location.
- The contributor roster bot already reads from `elixpo/elixpo_chapter`; update
  `CONTRIB_SOURCE_REPO` if the canonical source changes.

## Rollout to other repos (the standard)
Copy these to every Elixpo repository and adapt only the **Exclusive** /
**NOTICE** sections:
`LICENSE`, `LICENSES/`, `NOTICE`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, and
the `README.md` template.
