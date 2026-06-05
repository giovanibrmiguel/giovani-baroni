# giovanibaroni.com

Official website of Giovani Baroni — Brazilian musician, songwriter, vocalist, and producer.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deployed on [Cloudflare Pages](https://pages.cloudflare.com).

---

## Project Overview

A static artist website with:

- **Home** — Hero, featured project (bLU), artist intro, latest release
- **Music** — All releases grouped by project with streaming links and embeds
- **Projects** — Overview of all artistic projects
- **bLU** — Dedicated flagship page for the debut album
- **About** — Artist biography and artistic vision
- **Press** — Press kit, photos, streaming links, contact for media
- **Contact** — Email and social links

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

### Netlify (alternative)

Same process — Netlify also auto-detects Astro. Build command: `npm run build`, publish directory: `dist`.

### Vercel (alternative)

Connect repository to Vercel — it auto-detects Astro with zero config.

---

## Updating Content

For a detailed content guide written for non-developers, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).

### Quick Reference

| What to update | Where |
|----------------|-------|
| Name, tagline, social links | `src/data/site.ts` |
| Add/edit a release | `src/data/releases.ts` |
| Artist bio, influences | `src/content/pages/about.md` |
| bLU album content | `src/content/pages/blu.md` |
| Press bio, quotes | `src/content/pages/press.md` |
| Project descriptions | `src/content/projects/*.md` |
| Artist photos | `public/images/artist/` |
| Release cover art | `public/images/projects/` or `public/images/blu/` |
| Press photos | `public/images/press/` |
| Featured project | `src/data/site.ts` → `featuredProject` |

---

## Project Structure

```
giovani-baroni/
├── public/
│   ├── images/
│   │   ├── artist/          ← Artist photos (replace placeholders)
│   │   ├── blu/             ← bLU album artwork
│   │   ├── projects/        ← Project cover images
│   │   └── press/           ← Hi-res press photos
│   ├── favicon.svg          ← Site icon
│   └── robots.txt           ← Search engine crawl rules
│
├── src/
│   ├── components/
│   │   ├── layout/          ← BaseLayout, Header, Footer
│   │   ├── home/            ← Hero, FeaturedProject, ArtistIntro, LatestRelease
│   │   ├── music/           ← ReleaseCard, EmbedPlayer
│   │   ├── projects/        ← ProjectCard
│   │   └── shared/          ← SEO, GrainOverlay
│   │
│   ├── content/
│   │   ├── config.ts        ← Schemas for content files (don't edit unless adding fields)
│   │   ├── projects/        ← One .md per project (bLU, sukya, etc.)
│   │   └── pages/           ← Long-form page content (about, bLU, press)
│   │
│   ├── data/
│   │   ├── site.ts          ← MAIN CONFIG: name, links, domain, featured project
│   │   └── releases.ts      ← ALL RELEASES: titles, years, streaming links, embeds
│   │
│   ├── pages/               ← Astro pages (routes)
│   │   ├── index.astro      → /
│   │   ├── music.astro      → /music
│   │   ├── projects/
│   │   │   ├── index.astro  → /projects
│   │   │   └── [slug].astro → /projects/blu, /projects/sukya-porno, etc.
│   │   ├── blu.astro        → /blu
│   │   ├── about.astro      → /about
│   │   ├── press.astro      → /press
│   │   └── contact.astro    → /contact
│   │
│   └── styles/
│       └── global.css       ← Tailwind config, grain texture, typography
│
├── astro.config.mjs          ← Astro config (update site URL)
├── tailwind.config.mjs       ← Color palette, fonts, typography
├── tsconfig.json
├── package.json
├── README.md                 ← This file
└── CONTENT_GUIDE.md          ← Non-developer content guide
```

---

## How Astro Works (For Data Engineers)

Think of Astro like a build-time pipeline:

1. **Source:** `.astro` files (components + pages), `.md` files (content), `.ts` files (data)
2. **Build:** Astro reads all sources, renders everything to plain HTML
3. **Output:** `dist/` folder — pure static HTML, CSS, minimal JS
4. **Deploy:** Upload `dist/` to any static host (Cloudflare Pages, Netlify, S3, etc.)

**Routing** is file-based — the file path becomes the URL. No server, no routing config.

**Content Collections** work like typed schemas for Markdown files. Define the schema once in `config.ts`, and every `.md` file is validated at build time.

**Data files** (`site.ts`, `releases.ts`) are just TypeScript objects. They're imported directly into `.astro` files at build time.

---

## SEO

The `SEO.astro` component automatically generates:
- `<title>` (page title + artist name)
- `<meta name="description">`
- OpenGraph tags (for link previews on social media)
- Twitter/X card tags
- Canonical URL

The sitemap is auto-generated by `@astrojs/sitemap` on every build.

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
