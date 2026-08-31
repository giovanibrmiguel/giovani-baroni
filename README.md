# giovanibaroni.com

Official website of Giovani Baroni — Brazilian musician, songwriter, vocalist, and producer.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deployed on [Cloudflare Pages](https://pages.cloudflare.com).

---

## Project Overview

A static artist website with:

- **Home** (`/`) — Minimal portal: choose between GIOVANI BARONI and sukya || porno
- **GIOVANI BARONI** (`/giovani-baroni`) — Bio, press kit, discography, lyrics, videos
- **sukya || porno** (`/sukyaporno`) — Same layout as above, for the band
- **bLU** (`/blu`) — Dedicated flagship page for the debut album
- **Fishy Boy** / **Mecânica dos Fluidos** (`/fishyboy`, `/mecanicadosfluidos`) — Dedicated pages for the two singles released ahead of bLU
- **Listen** (`/listen/<slug>`) — Fast, minimal smart-link landing pages for ad/social traffic, one per song
- **Privacy** (`/privacidade`) — Explains what Umami and Meta Pixel collect

Every real page is trilingual (Portuguese, English, Spanish) — see [Trilingual content](#trilingual-content) below.

**Content is managed through Markdown files and TypeScript data files** — no CMS, no database, no backend.

---

## Tech Stack

| Tool | Why |
|------|-----|
| [Astro](https://astro.build) | Static site generation, file-based routing, Content Collections |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling, custom ocean color palette |
| [TypeScript](https://typescriptlang.org) | Type-safe content data files |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Auto-generated sitemap |
| [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | Styled Markdown rendering |

---

## Installation

**Requirements:** Node.js 18+ and npm.

```bash
# Clone the repo
git clone https://github.com/giovanibaroni/giovani-baroni.git
cd giovani-baroni

# Install dependencies
npm install
```

---

## Local Development

```bash
npm run dev
```

Opens the site at [http://localhost:4321](http://localhost:4321).

Changes to `.astro`, `.md`, and `.ts` files hot-reload automatically.

---

## Build

```bash
npm run build
```

Generates the static site in the `dist/` folder. Preview the build locally:

```bash
npm run preview
```

---

## Deployment

### Cloudflare Pages (recommended)

1. Push this repository to GitHub
2. Go to [Cloudflare Pages dashboard](https://pages.cloudflare.com)
3. Click **Create a project** → **Connect to Git**
4. Select this repository
5. Cloudflare auto-detects Astro. Settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**

Every `git push` to `main` triggers a new deployment automatically.

**Custom domain:** In Cloudflare Pages → Custom Domains → add `giovanibaroni.com`. Then update your domain's DNS with the CNAME record Cloudflare provides. SSL is automatic and free.

> After setting up a real domain, update two files:
> 1. `astro.config.mjs` → `site: "https://yourdomain.com"`
> 2. `src/data/site.ts` → `domain: "https://yourdomain.com"`
> 3. `public/robots.txt` → update the sitemap URL

**Redirects:** `public/_redirects` holds real 301 redirects for old/renamed URLs (Cloudflare Pages reads this file directly). If you ever rename or remove a page, add a redirect line here so old links and search results don't 404.

### Netlify (alternative)

Same process — Netlify also auto-detects Astro. Build command: `npm run build`, publish directory: `dist`. Note: Netlify uses a different `_redirects` syntax than Cloudflare Pages, so double-check the redirect rules still work if you switch hosts.

### Vercel (alternative)

Connect repository to Vercel — it auto-detects Astro with zero config.

---

## Updating Content

For a detailed content guide written for non-developers, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).

### Quick Reference

| What to update | Where |
|----------------|-------|
| Site name, description, socials, press kit link | `src/data/site.ts` |
| Add/edit a release, single, or EP | `src/data/releases.ts` |
| Artist bio (EN/PT/ES) | `src/content/pages/about.md` (+ `about-pt.md`, `about-es.md`) |
| bLU album page copy (EN/PT/ES) | `src/content/pages/blu.md` (+ `-pt`, `-es`) |
| Fishy Boy / Mecânica dos Fluidos page copy | `src/content/pages/fishyboy.md`, `mecanicadosfluidos.md` (+ `-pt`, `-es`) |
| sukya || porno bio (EN/PT/ES) | `src/content/projects/sukya-porno.md` (+ `-pt`, `-es`) |
| YouTube video embeds | `src/data/videos.ts` |
| Lyrics/chords links (Genius, CifraClub) | `src/data/lyrics.ts` |
| Add a new `/listen/<slug>` smart-link page | `src/data/listenPages.ts` — no new file needed |
| Streaming platform icons/colors | `src/data/platformIcons.ts` |
| Artist/press photos | `public/images/` |

---

## Project Structure

```
giovani-baroni/
├── public/
│   ├── images/
│   │   ├── artist/          ← Artist portraits
│   │   ├── blu/             ← bLU album artwork
│   │   ├── fishyboy/        ← Fishy Boy artwork/photos
│   │   ├── mecanicadosfluidos/ ← Mecânica dos Fluidos artwork/photos
│   │   ├── projects/        ← Cover art for older EPs/singles
│   │   ├── press/           ← Press photos
│   │   ├── thumbs/          ← Small cover crops used in cross-navigation
│   │   └── cursors/         ← Custom cursor images
│   ├── favicon.svg          ← Site icon
│   ├── robots.txt           ← Search engine crawl rules
│   └── _redirects           ← Real 301 redirects (Cloudflare Pages)
│
├── src/
│   ├── components/
│   │   ├── layout/          ← BaseLayout, Header, Footer, EasterEggLayout
│   │   ├── project-page/    ← ProjectPage (shared by /giovani-baroni & /sukyaporno), DiscographySection, VideosSection, BluWorldNav, BluWorldFooter
│   │   ├── music/           ← EmbedPlayer
│   │   ├── listen/          ← ListenPageLayout — shared markup for every /listen/<slug> page
│   │   └── shared/          ← SEO, Analytics, MetaPixel, JsonLd, GrainOverlay, CursorPreload, LanguageSwitcher, Win95Button
│   │
│   ├── content/
│   │   ├── config.ts        ← Schemas for content files (don't edit unless adding fields)
│   │   ├── projects/        ← sukya-porno.md (+ -pt/-es) — bLU/Fishy Boy/Mecânica dos Fluidos each have their own dedicated page instead (see content/pages/)
│   │   └── pages/           ← Long-form page copy: about, blu, fishyboy, mecanicadosfluidos — each in EN/PT/ES
│   │
│   ├── data/
│   │   ├── site.ts          ← Site-wide config + per-project config (email, socials, press kit, portrait)
│   │   ├── releases.ts      ← ALL RELEASES: titles, years, streaming links, embeds — source of truth for the discography
│   │   ├── lyrics.ts        ← Lyrics/chords external links
│   │   ├── videos.ts        ← YouTube video embeds per project
│   │   ├── bluWorld.ts      ← Cross-navigation between bLU and its singles
│   │   ├── platformIcons.ts ← Shared streaming-platform SVG icons, brand colors, labels
│   │   └── listenPages.ts   ← Per-page config for every /listen/<slug> page
│   │
│   ├── pages/               ← Astro pages (routes)
│   │   ├── index.astro          → /
│   │   ├── giovani-baroni.astro → /giovani-baroni
│   │   ├── sukyaporno.astro     → /sukyaporno
│   │   ├── blu.astro            → /blu
│   │   ├── fishyboy.astro       → /fishyboy
│   │   ├── mecanicadosfluidos.astro → /mecanicadosfluidos
│   │   ├── listen/[slug].astro  → /listen/blu, /listen/fishyboy, /listen/mecanicadosfluidos, /listen/efervescente, /listen/norte, /listen/paseolargo, /listen/peixesestranhos (config-driven — see src/data/listenPages.ts)
│   │   ├── privacidade.astro    → /privacidade
│   │   ├── 404.astro
│   │   └── easter-egg*.astro, rei-pele.astro → hidden pages, not linked from navigation
│   │
│   └── styles/
│       └── global.css       ← Tailwind layers, grain texture, EN/PT/ES visibility rules
│
├── astro.config.mjs          ← Astro config (site URL, sitemap allowlist, /listen → /listen/fishyboy/ redirect)
├── tailwind.config.mjs       ← Color palette, fonts, typography
├── tsconfig.json
├── package.json
├── README.md                 ← This file
└── CONTENT_GUIDE.md          ← Non-developer content guide
```

**Other docs in this repo:** [ANALYTICS.md](./ANALYTICS.md) (UTM conventions, Umami/Meta Pixel setup) and [RELEASE_DAY_BLU.md](./RELEASE_DAY_BLU.md) (step-by-step for flipping the bLU album — and its four ad-only track pages — from pre-release to out-now).

---

## Trilingual content

Every real page (not the easter eggs) renders its text in Portuguese, English, and Spanish at the same time, and shows/hides the right one with CSS:

- Text is wrapped in `<span class="lang-pt">`, `<span class="lang-en">`, `<span class="lang-es">` (or full paragraphs/divs with the same classes).
- `src/styles/global.css` hides `.lang-en` and `.lang-es` by default — **Portuguese is the default language**, since the main audience is Brazil.
- An inline script in `BaseLayout.astro` sets a `data-lang` attribute on `<html>` based on `localStorage`, falling back to the visitor's browser language (Spanish browsers get ES, English browsers get EN, everything else — including Portuguese — gets PT).
- The header's PT/EN/ES buttons ([LanguageSwitcher.astro](src/components/shared/LanguageSwitcher.astro)) let a visitor override that and remember the choice.

**Practical consequence:** editing a page's text almost always means editing it in three places — the base `.md`/`.astro` file plus its `-pt` and `-es` counterparts (content collection pages) or three `<span class="lang-*">` blocks side by side (component markup).

---

## How Astro Works (For Data Engineers)

Think of Astro like a build-time pipeline:

1. **Source:** `.astro` files (components + pages), `.md` files (content), `.ts` files (data)
2. **Build:** Astro reads all sources, renders everything to plain HTML
3. **Output:** `dist/` folder — pure static HTML, CSS, minimal JS
4. **Deploy:** Upload `dist/` to any static host (Cloudflare Pages, Netlify, S3, etc.)

**Routing** is file-based — the file path becomes the URL, except `listen/[slug].astro`, which is a *dynamic* route: Astro calls its `getStaticPaths()` function at build time, which reads `src/data/listenPages.ts` and pre-renders one HTML page per entry. Adding a new `/listen/<slug>` page means adding a config entry, not a new file.

**Content Collections** work like typed schemas for Markdown files. Define the schema once in `config.ts`, and every `.md` file is validated at build time.

**Data files** (`site.ts`, `releases.ts`, etc.) are just TypeScript objects. They're imported directly into `.astro` files at build time.

---

## SEO

The `SEO.astro` component automatically generates:
- `<title>` (page title + artist name)
- `<meta name="description">`
- OpenGraph tags (for link previews on social media)
- Twitter/X card tags
- Canonical URL

The sitemap is auto-generated by `@astrojs/sitemap` on every build, filtered to the main pages (see `astro.config.mjs`) — the `/listen/*` ads-only track pages and easter eggs are intentionally excluded and marked `noindex`.

---

## Accessibility

- Semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- All images have `alt` text
- Keyboard navigation supported (`:focus-visible` styles)
- Proper heading hierarchy on every page
- `aria-label` on navigation landmarks
- Color contrast meets WCAG AA for body text

---

## v2 Ideas (Not Implemented)

- Astro DB or Notion CMS integration for release management
- Image optimization with `@astrojs/image`
- RSS feed for new releases
- Newsletter signup (Buttondown or Substack embed)
- Live show calendar section
- Animated page transitions with View Transitions API
- Light mode / theme toggle
- Search functionality across releases and projects
- Interactive lyric pages
- Photo gallery with lightbox
