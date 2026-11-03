# AGENTS.md — The Manor of the Dungeon in Kent

## Mandatory First Read

Read this root `AGENTS.md` before any analysis, editing, content creation, testing, review, branch operation, or deployment. It governs the full repository. Read the README and relevant local documentation before changing implementation. Explicit instructions from the site owner take precedence.

## GitHub Flow

- `main` is the one permanent integration branch and must remain deployable.
- No permanent `dev`, `develop`, `staging`, or long-lived work branches.
- For every subsequent change, branch freshly from the latest `main` with a descriptive `feature/`, `fix/`, `content/`, `docs/`, `chore/`, or `deps/` name.
- Keep the change focused. Do not bundle unrelated refactoring, dependency upgrades, redesigns, or editorial rewrites.
- Test locally, open a pull request into `main`, review the diff and required CI, then merge when ready. Prefer squash merge for normal single-topic work.
- Delete the temporary branch once merged; close and prune obsolete PRs/branches explicitly, never merge abandoned work just to tidy up.
- No direct commits to `main`, apart from a specifically authorized bootstrap/administrative exception.
- Do not force-push, rewrite `main`, bypass failed checks, or claim validations passed if they did not run.

## General Preservation Rules

- Preserve published URLs, aliases, redirects, dates, canonical domains, metadata, search, feeds, sitemaps, source attributions, and public records.
- Preserve navigation, responsive layouts, accessibility, semantic headings, visible focus, reduced-motion preferences, and useful operation without JavaScript where feasible.
- Preserve any cookie-consent choices and Global Privacy Control behavior. No optional analytics or trackers before valid affirmative consent; never weaken privacy to improve metrics.
- Never commit secrets or sensitive personal data; do not introduce third-party scripts or dependencies without reason.
- Historical publications should remain historical. Correct factual errors transparently rather than silently rewriting the record.
- Keep research evidence separate from inference, uncertain attribution, tradition, or speculation. Never invent citations, image rights, credentials, titles, genealogy, claims, or publication metadata.
- New public writing should respect James's clear, explanatory, evidence-led, conversational style with concrete examples and occasional dry humor; avoid generic AI promotional prose.
- Preserve existing design systems rather than cloning the appearance of another JHCU site.

## Completion

Review the final diff, run the repository-specific checks below and relevant browser checks, verify routes and critical user paths, then report exactly what changed, tests run, PR/merge, and deployment state. Never silently alter hosting, DNS, site ownership, or public policy.

## Site-Specific Rules

- Canonical site: https://dungeonmanor.uk/.
- Jekyll/Ruby site; preserve its current Gemfile, Rakefile, layouts, YAML data, and GitHub workflow unless a migration is expressly authorized.
- Separate documentary evidence, archival transcription, scholarly inference, tradition, and modern claims concerning the manor. Do not imply legal title, entitlement, ownership, or jurisdiction without evidence.
- Preserve citations, source images and transcripts, chronology, historic routes, glossary, archives, maps, and legal caveats.
- Preserve cookie-consent and accessibly rendered content. Verify the site's documented Jekyll build and existing workflow checks before merge. Do not introduce unrelated content changes.
