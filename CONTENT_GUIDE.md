# Content Guide

**A practical guide for Giovani Baroni.**

This guide explains exactly how to update every piece of content on the site without touching any code. If something is unclear, reach out before editing — but most changes listed here are safe and straightforward.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [The site is trilingual — read this first](#the-site-is-trilingual--read-this-first)
3. [Change Your Name, Links, or Email](#change-your-name-links-or-email)
4. [Add or Update a Release](#add-or-update-a-release)
5. [Edit Your Bio (About Page)](#edit-your-bio-about-page)
6. [Edit the bLU Album Page](#edit-the-blu-album-page)
7. [Edit the sukya || porno Page](#edit-the-sukya--porno-page)
8. [Adding a Brand-New Flagship Page](#adding-a-brand-new-flagship-page)
9. [Update Images and Photos](#update-images-and-photos)
10. [Add a YouTube Video](#add-a-youtube-video)
11. [Add a Music Player Embed](#add-a-music-player-embed)
12. [Add a New /listen Smart-Link Page](#add-a-new-listen-smart-link-page)
13. [Update the Press Kit Link](#update-the-press-kit-link)
14. [After Making Changes](#after-making-changes)

---

## Before You Start

**How the site works:**
- Text content is stored in `.md` files (Markdown) and `.ts` files (TypeScript data)
- Images are stored in `public/images/`
- To preview changes locally: run `npm run dev` in the terminal
- To deploy: `git add . && git commit -m "update content" && git push`

**What is Markdown?**
Markdown is plain text with some simple formatting:
- `# Heading` → big heading
- `## Smaller heading` → smaller heading
- `**bold**` → **bold**
- `_italic_` → _italic_
- `[link text](https://url.com)` → clickable link
- A blank line = new paragraph

---

## The site is trilingual — read this first

Every real page shows Portuguese, English, and Spanish at the same time and hides two of them with CSS, switching instantly when someone clicks PT/EN/ES in the header. Portuguese is the default.

**What this means for you:** almost every piece of text on the site exists in **three copies**. If you edit the English bio and stop there, Portuguese and Spanish visitors won't see your change. The three copies are usually one of:
- Three separate files: `about.md` (EN), `about-pt.md` (PT), `about-es.md` (ES) — same pattern for `blu.md`, `fishyboy.md`, `mecanicadosfluidos.md`, and the `sukya-porno.md` project file.
- Three `<span>` blocks side by side inside the same `.astro` file, labeled `lang-en`, `lang-pt`, `lang-es`.

When a section below says "edit this file," check whether there are `-pt.md`/`-es.md` siblings and update all three.

---

## Change Your Name, Links, or Email

**File:** `src/data/site.ts`

This file has two parts:

1. The top-level `site` object — name, description, domain, and a `social` block used by the footer and the `/listen` pages' Instagram link.
2. The `projects` object — one entry for `giovani-baroni`, one for `sukya-porno`. Each has its **own** email, press kit link, portrait photo, and social links. The actual project pages read from here, not from the top-level fields, so when updating your email or press kit link, update it inside `projects` too.

```typescript
export const site = {
  name: "Giovani Baroni",
  email: "press@giovanibaroni.com",
  pressKitUrl: "https://drive.google.com/...",
  social: {
    instagram: "https://instagram.com/YOURHANDLE",
    spotify: "https://open.spotify.com/artist/XXXX",
    youtube: "https://youtube.com/@YOURCHANNEL",
  },
};

export const projects = {
  "giovani-baroni": {
    email: "press@giovanibaroni.com",       // ← used on /giovani-baroni, /blu, /fishyboy, /mecanicadosfluidos
    pressKitUrl: "https://drive.google.com/...",
    social: { instagram: "...", spotify: "...", youtube: "...", bandcamp: "..." },
  },
  "sukya-porno": {
    email: "press@giovanibaroni.com",       // ← used on /sukyaporno
    pressKitUrl: "https://drive.google.com/...",
    social: { instagram: "...", spotify: "...", youtube: "..." },
  },
};
```

**How to find your Spotify artist URL:**
1. Open Spotify → your artist profile
2. Click the three dots → Share → Copy link to artist
3. Paste it here

---

## Add or Update a Release

**File:** `src/data/releases.ts`

Each release is a block of data. The full list of fields (including newer ones used by the `/listen` pages, like `released`, `preReleaseLinks`, `preReleaseCta`) is documented in the comments directly above `export type Release = {` at the top of the file — check there first, since that's the one place this can't go out of date.

A typical release looks like this:

```typescript
{
  id: "blu-album",                    // unique ID — no spaces, no special chars
  title: "bLU",                       // release title
  project: "blu",                     // must match a project value listed in the Release type comment
  projectDisplayName: "bLU",          // how the project name is shown
  type: "album",                      // "album", "ep", "single", "live", or "compilation"
  year: 2025,                         // release year (no quotes)
  coverImage: "/images/blu/cover.jpg", // path to the cover image
  shortDescription: "One sentence.",  // short description for cards (also shortDescriptionPt / shortDescriptionEs)
  longDescription: `Longer text.`,    // longer description (use backticks)
  links: { spotify: "...", bandcamp: "...", youtube: "..." },
  featured: true,                     // true = shown on homepage sections; false = not featured
  embedCode: `<iframe ...></iframe>`, // embed code (see "Add a Music Player Embed" below)
  credits: ["Written by Giovani Baroni", "Mixed by ..."],
  tracklist: ["1. Track Name", "2. Track Name"],
},
```

**To add a new release:** copy an existing block, paste it after the last release, update every field.

**To edit an existing release:** find it by `id` and change the field you want.

---

## Edit Your Bio (About Page)

**Files:** `src/content/pages/about.md` (English), `about-pt.md` (Portuguese), `about-es.md` (Spanish)

Open all three. Below the `---` frontmatter block at the top, it's plain Markdown — edit the paragraphs directly. Keep the same meaning across all three files; they don't need to be word-for-word translations, but they should say the same things.

**Important:** the lines between the `---` at the very top are "frontmatter" (title, excerpt, etc.). Don't delete them — you can safely ignore the fields you're not using.

---

## Edit the bLU Album Page

**Files:** `src/content/pages/blu.md` (+ `blu-pt.md`, `blu-es.md`)

Same idea as the About page. The two headings in the file are:
- `## short album description` — the summary shown near the top
- `## long album description` — the full multi-paragraph story of the record

**Note:** the tracklist and credits shown in the sidebar of the `/blu` page come from `src/data/releases.ts` (the `blu-album` release object), **not** from this Markdown file. Same goes for Fishy Boy and Mecânica dos Fluidos — their `.md` files (`fishyboy.md`, `mecanicadosfluidos.md`, each with `-pt`/`-es` versions) hold the written bio/description text; the release info sidebar comes from `releases.ts`.

---

## Edit the sukya || porno Page

**Files:** `src/content/projects/sukya-porno.md` (+ `sukya-porno-pt.md`, `sukya-porno-es.md`)

Each file has:
- A **frontmatter** section at the top with structured data (`tagline`, `status`, `links`, `members`)
- A **body** below with the band description in plain Markdown

This is currently the only page that uses the `content/projects/` collection — bLU, Fishy Boy, and Mecânica dos Fluidos each have their own dedicated page instead (see above).

---

## Adding a Brand-New Flagship Page

There's no generic "add a project and get a page for free" mechanism today — each flagship page (`/blu`, `/fishyboy`, `/mecanicadosfluidos`) is its own `.astro` file. To add a new one (say, for the next single after bLU):

1. Copy `src/pages/fishyboy.astro` to a new file, e.g. `src/pages/newsingle.astro`, and update the text/links inside to point at the new song.
2. Copy `src/content/pages/fishyboy.md` (+ `-pt`/`-es`) to matching files for the new song, and write the real copy.
3. Add a release entry in `src/data/releases.ts`.
4. If it's part of the bLU family, add it to `src/data/bluWorld.ts` so the cross-navigation strip picks it up.

This is a good one to ask Claude to do for you — just point it at an existing single page as the template.

---

## Update Images and Photos

Images live in `public/images/`. Replace the placeholder files with real ones.

| Folder | What goes here |
|--------|----------------|
| `public/images/artist/` | Your artist portraits and photos |
| `public/images/blu/` | bLU album artwork, stills, promo images |
| `public/images/fishyboy/`, `public/images/mecanicadosfluidos/` | Artwork/photos for each single |
| `public/images/projects/` | Cover art for older EPs and singles |
| `public/images/press/` | Hi-resolution press photos |

**Rules:**
- Keep the same filename if you want the simplest swap (replace the file, keep the name)
- Or use a new filename and update the path in the relevant data file (`releases.ts`, or the `.md` frontmatter)

**Recommended sizes:**
- Release covers: at least 800×800px, square
- Artist portraits: at least 800×800px
- Press photos: at least 2000px wide (hi-res for download)
- bLU hero/OG image: 1200×630px (standard OG ratio)

---

## Add a YouTube Video

There are two separate places videos show up:

**1. The "videos" section on a project/album page** (the row of embedded YouTube videos near the bottom of `/giovani-baroni`, `/sukyaporno`, `/blu`, `/fishyboy`, `/mecanicadosfluidos`):

Edit **`src/data/videos.ts`**. Add an entry:
```typescript
{
  id: "fb-2",
  project: "fishyboy",   // which page(s) it shows up on — see the comment at the top of the file
  embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>`,
},
```
To get the embed code: open the YouTube video → Share → Embed → copy the `<iframe>` code.

**2. A one-off video embed directly on a release** (rare — used for the Spotify/Bandcamp-style player at the top of a page):

Set `embedCode` on the release in `src/data/releases.ts` (see "Add a Music Player Embed" below).

---

## Add a Music Player Embed

### Spotify

1. Open Spotify → album or track → three dots → **Share** → **Embed**
2. Copy the `<iframe>` code
3. Paste it into the `embedCode` field in `src/data/releases.ts`

### Bandcamp

1. Open Bandcamp → album page → **Share / Embed**
2. Click **Embed this album**
3. Copy the `<iframe>` code
4. Paste it into the `embedCode` field in `src/data/releases.ts`

---

## Add a New /listen Smart-Link Page

The `/listen/<slug>` pages (the fast, minimal "pick your platform" pages used for ads and bio links) are all generated from one template — you don't need a new file for a new one.

**File:** `src/data/listenPages.ts`

1. Make sure the song has a release entry in `src/data/releases.ts` (with an `id`).
2. Add an entry to the `listenPages` array — copy the closest existing example (a track with no dedicated page, like `norte`, is the simplest template) and update `slug`, `releaseId`, and `relatedReleaseIds`.
3. That's it — `src/pages/listen/[slug].astro` picks it up automatically and the new page appears at `/listen/<slug>`.

Streaming platform icons/colors used on these pages live in `src/data/platformIcons.ts` — you shouldn't need to touch that unless adding a brand-new platform (e.g. Tidal).

---

## Update the Press Kit Link

**File:** `src/data/site.ts`

Update it in **two places** — the top-level `pressKitUrl` and inside each `projects` entry (`giovani-baroni` and `sukya-porno`), since the actual pages read the project-specific one:

```typescript
pressKitUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
```

How to get a shareable Google Drive link:
1. Upload your press kit folder to Google Drive
2. Right-click the folder → **Share**
3. Change access to **Anyone with the link can view**
4. Click **Copy link**
5. Paste it in

---

## After Making Changes

**Preview locally:**
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

**Deploy to production:**
```bash
git add .
git commit -m "describe what you changed"
git push
```
Cloudflare Pages automatically builds and deploys within 1–2 minutes.

**Check your changes live:**
Go to your Cloudflare Pages dashboard to see the build status. Once complete, visit your site.

---

## Something Broken?

If you broke something and want to undo:
```bash
git revert HEAD
git push
```

This undoes your last commit and redeploys the previous version.

If you're not sure what you changed:
```bash
git diff
```
Shows everything you changed since the last commit.
