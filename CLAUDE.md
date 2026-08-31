# CLAUDE.md

Context for Claude Code (or any LLM) working in this repo. Read this before exploring the codebase — it should answer most "how does this work" and "where do I edit X" questions without needing to grep around.

## What this is

`giovanibaroni.com` — the official site for Giovani Baroni (solo artist) and his band sukya || porno. Static site: **Astro + Tailwind, no backend, no CMS, no database.** Content lives in Markdown files and TypeScript data files, gets built to plain HTML, and is deployed to Cloudflare Pages on every push to `main`. There is no server-side logic anywhere.

Full human-facing docs: [README.md](README.md) (architecture/dev setup) and [CONTENT_GUIDE.md](CONTENT_GUIDE.md) (non-developer content editing). This file is the condensed version for an LLM working session — start here, go to those two for detail.

## The site is trilingual — the single most important thing to know

Every real page (not the easter eggs) shows Portuguese, English, and Spanish at once and hides two of them with CSS. **Portuguese is the default language.** This means:

- Long-form page text usually exists in **three files**: `foo.md`, `foo-pt.md`, `foo-es.md` in `src/content/pages/`.
- Inline UI text (nav labels, buttons, headings) is usually **three `<span>`s side by side** in the same `.astro` file: `<span class="lang-en">`, `<span class="lang-pt">`, `<span class="lang-es">`.
- If you're asked to change a piece of text and only find one language's copy, **stop and check for the other two** before assuming you're done.
- The mechanism: `src/styles/global.css` hides `.lang-en`/`.lang-es` by default; an inline script in `BaseLayout.astro` sets `data-lang` on `<html>` from `localStorage`, falling back to browser language (ES→es, EN→en, everything else including PT→pt); `LanguageSwitcher.astro` is the PT/EN/ES header control.

## Where things actually live (and what's a decoy)

| You want to change... | Edit this |
|---|---|
| Site name, socials, press kit link | `src/data/site.ts` — has a top-level `site` object AND a `projects` object with per-project (giovani-baroni / sukya-porno) overrides. **Pages read the `projects` ones**, not the top-level `site.pressKitUrl`/`site.email`. |
| A release, single, or EP (links, cover, tracklist, credits) | `src/data/releases.ts` — single source of truth. Full field list is in the comment above `export type Release = {` at the top of the file; don't rely on this doc for that, it drifts, the type comment doesn't. |
| Artist bio | `src/content/pages/about.md` (+ `-pt`, `-es`) |
| bLU album page copy | `src/content/pages/blu.md` (+ `-pt`, `-es`). Tracklist/credits shown in the sidebar come from `releases.ts`, not this file. |
| Fishy Boy / Mecânica dos Fluidos page copy | `src/content/pages/fishyboy.md`, `mecanicadosfluidos.md` (+ `-pt`, `-es`) |
| sukya \|\| porno bio | `src/content/projects/sukya-porno.md` (+ `-pt`, `-es`) — **the only page still using the `content/projects/` collection.** bLU/Fishy Boy/Mecânica dos Fluidos each got their own dedicated `.astro` page instead, backed by `content/pages/`, not `content/projects/`. |
| Videos shown on a project/album page | `src/data/videos.ts` |
| Lyrics/chords external links | `src/data/lyrics.ts` |
| A `/listen/<slug>` smart-link page | `src/data/listenPages.ts` — add a config entry, **not** a new `.astro` file. See below. |
| Streaming platform icons/colors | `src/data/platformIcons.ts` |

**Two fields in `src/data/site.ts` are currently dead: `featuredProject` and `listenPageReleaseId`.** Neither is read anywhere in the code (confirmed by grep, not guessing) — the featured project and the current `/listen` push are hardcoded in `astro.config.mjs`'s `/listen` redirect and in `listenPages.ts` respectively. If you go looking for where changing one of these two fields takes effect, it won't — don't spend time on it, and don't assume "it's used somewhere I haven't found" without grepping `src/` for the field name first.

## Routes (all of `src/pages/`)

- `/` — `index.astro`, minimal portal (GIOVANI BARONI vs sukya || porno)
- `/giovani-baroni` — bio, discography, lyrics, videos (via shared `ProjectPage.astro`)
- `/sukyaporno` — same layout, for the band (renamed from `/sukya` — old URL 301s via `public/_redirects`)
- `/blu`, `/fishyboy`, `/mecanicadosfluidos` — dedicated flagship pages, each its own `.astro` file
- `/listen/<slug>` — **one dynamic route**, `src/pages/listen/[slug].astro`, generates all 7 smart-link pages (blu, fishyboy, mecanicadosfluidos, efervescente, norte, paseolargo, peixesestranhos) from `src/data/listenPages.ts` + `src/components/listen/ListenPageLayout.astro`. These are bare HTML documents (no header/footer) — fast landing pages for ad traffic. To add one: add a config entry, don't create a file.
- `/privacidade`, `/404`
- `/easter-egg`, `/easter-egg-2`, `/easter-egg-3`, `/easter-egg-4`, `/easter-egg-very-hidden`, `/rei-pele` — hidden, not linked from nav, low-stakes if broken

## Shared pieces worth knowing about (don't recreate these)

- `src/data/platformIcons.ts` — every streaming-platform SVG icon (Spotify, Apple Music, Amazon Music, Deezer, YouTube, YouTube Music), brand colors, and labels. Used by `DiscographySection.astro`, `blu.astro`, `fishyboy.astro`, `mecanicadosfluidos.astro`, and the `/listen/*` pages. If you need a platform icon anywhere, import from here — don't paste new inline SVG.
- `src/components/shared/Win95Button.astro` — the retro grey "download press-kit" style button (also used for a couple of easter-egg links). Takes `href`, optional `size="small"`, optional `target="_blank"`.
- `src/components/listen/ListenPageLayout.astro` + `src/data/listenPages.ts` — see Routes above.
- `src/data/bluWorld.ts` — drives the "explore the bLUverse" cross-navigation strip/footer shown on `/blu`, `/fishyboy`, `/mecanicadosfluidos`. Adding a new single to that family means updating this file too, plus dropping a thumbnail at `/images/thumbs/<project>.webp`.

## History worth knowing

This codebase was vibecoded solo, then went through a content-quality pass and an architecture cleanup pass (both with Claude). Two things from that history that might otherwise confuse you:

- **README.md and CONTENT_GUIDE.md used to describe a different, older site structure** (a `/music` page, generic `/projects/[slug]` routes, components like `ReleaseCard`/`ProjectCard` that never existed in this version of the code). Both docs were rewritten to match the current code as of this cleanup — if they ever drift again, trust the code over the docs and fix the docs.
- **The `/listen/*` pages used to be 7 separate ~560-line files**, copy-pasted from each other with a few small, undocumented behavioral differences between them (e.g. Fishy Boy/Mecânica dos Fluidos hide a streaming button entirely when there's no link, while the others grey it out instead; their "released" badge is blank instead of showing "JÁ SAIU"). These differences were preserved intentionally as per-page config in `listenPages.ts` rather than "fixed," since nobody had confirmed which behavior was correct. If you touch that file, know that the inconsistency is old and pre-existing, not a bug introduced during the cleanup.

## Conventions to follow

- Path alias is `@/*` → `src/*` only (e.g. `@/data/site`, `@/components/shared/SEO.astro`). There used to be extra `@data/*`/`@components/*` aliases in `tsconfig.json`; they were unused and have been removed — don't reintroduce them.
- Images live in `public/images/`, organized by project/purpose (`artist/`, `blu/`, `fishyboy/`, `mecanicadosfluidos/`, `projects/` for older EPs, `press/`, `thumbs/` for the bLUverse nav, `cursors/`, `secret_pics/` for easter eggs). File names should describe the asset, not its status — avoid naming a final, real image `something-placeholder.jpg`; it's been a source of confusion before.
- Before deleting or renaming any file, grep the whole `src/` tree (and `astro.config.mjs`) for its name/path — some references are template-literal-constructed (e.g. `` `/images/thumbs/${project}.webp` `` in `bluWorld.ts`) and won't show up in a naive filename search of the file itself.
- Don't add a test suite or CI — deliberately out of scope for this project's size, not an oversight.
