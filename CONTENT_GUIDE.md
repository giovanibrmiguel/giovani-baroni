# Content Guide

**A practical guide for Giovani Baroni.**

This guide explains exactly how to update every piece of content on the site without touching any code. If something is unclear, reach out before editing — but most changes listed here are safe and straightforward.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Change Your Name, Links, or Email](#change-your-name-links-or-email)
3. [Add or Update a Release](#add-or-update-a-release)
4. [Edit Your Bio (About Page)](#edit-your-bio-about-page)
5. [Edit the bLU Album Page](#edit-the-blu-album-page)
6. [Edit the Press Page](#edit-the-press-page)
7. [Edit a Project Description](#edit-a-project-description)
8. [Add a New Project](#add-a-new-project)
9. [Update Images and Photos](#update-images-and-photos)
10. [Add a YouTube Video Embed](#add-a-youtube-video-embed)
11. [Add a Music Player Embed](#add-a-music-player-embed)
12. [Change the Featured Project](#change-the-featured-project)
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

## Change Your Name, Links, or Email

**File:** `src/data/site.ts`

Open the file. You'll see clearly labeled fields. Update the values inside the quotes:

```typescript
export const site = {
  name: "Giovani Baroni",           // ← Your display name
  tagline: "Musician · Songwriter · Producer",  // ← Your tagline
  email: "contact@giovanibaroni.com",  // ← Your contact email

  social: {
    instagram: "https://instagram.com/YOURHANDLE",   // ← Your Instagram URL
    spotify: "https://open.spotify.com/artist/XXXX", // ← Your Spotify artist URL
    youtube: "https://youtube.com/@YOURCHANNEL",     // ← Your YouTube channel
    bandcamp: "https://YOURNAME.bandcamp.com",        // ← Your Bandcamp URL
  },

  pressKitUrl: "https://drive.google.com/YOUR_LINK",  // ← Google Drive link
};
```

**How to find your Spotify artist URL:**
1. Open Spotify → your artist profile
2. Click the three dots → Share → Copy link to artist
3. Paste it here

---

## Add or Update a Release

**File:** `src/data/releases.ts`

Each release is a block of data that looks like this:

```typescript
{
  id: "blu-album",                    // unique ID — no spaces, no special chars
  title: "bLU",                       // release title
  project: "blu",                     // must be: "blu", "sukya-porno", or "stop-and-go-station"
  projectDisplayName: "bLU",          // how the project name is shown
  type: "album",                      // "album", "ep", "single", or "live"
  year: 2025,                         // release year (no quotes)
  coverImage: "/images/blu/cover.jpg", // path to the cover image
  shortDescription: "One sentence.",  // short description for cards
  longDescription: `Longer text.`,    // longer description (use backticks)
  links: {
    spotify: "https://...",
    bandcamp: "https://...",
    youtube: "https://...",
  },
  featured: true,                     // true = shown on homepage; false = not featured
  embedCode: `<iframe ...></iframe>`, // embed code (see section below)
  credits: [
    "Written by Giovani Baroni",
    "Mixed by ...",
  ],
  tracklist: [
    "1. Track Name",
    "2. Track Name",
  ],
},
```

**To add a new release:** Copy the entire block from `{` to `},`, paste it after the last release, and update all the fields.

**To edit an existing release:** Find it by `id` and change the field you want.

---

## Edit Your Bio (About Page)

**File:** `src/content/pages/about.md`

Open the file. It's plain Markdown. Everything below the `---` lines at the top is editable text.

The file has sections marked with comments like:
```
<!-- SHORT BIO (used in press, EPK, social bios) -->
```

Edit the text below each comment. Keep the `##` heading lines as they are (they define the structure).

**Important:** The lines between `---` at the very top are called "frontmatter". Don't delete them. You can safely ignore them.

---

## Edit the bLU Album Page

**File:** `src/content/pages/blu.md`

Same as the About page — plain Markdown below the frontmatter.

Sections include: The Concept, The Story, Themes, The Sound, Tracklist, Credits, Artwork, Videos, Press Quotes, Release Information, Notes & Lyrics.

Replace every `[UPDATE: ...]` placeholder with your real content.

**Note:** The tracklist and credits shown in the sidebar on the page come from `src/data/releases.ts` (the `blu-album` release object), not from this Markdown file.

---

## Edit the Press Page

**File:** `src/content/pages/press.md`

Edit the bios and press quotes here. To add a press quote:

```markdown
> "This is the quote text."
> — Publication Name, Reviewer Name
```

---

## Edit a Project Description

**Files:** `src/content/projects/blu.md`, `src/content/projects/sukya-porno.md`, `src/content/projects/stop-and-go-station.md`

Each file has:
- A **frontmatter** section at the top (between `---` lines) with structured data
- A **body** below with the project description in Markdown

**Frontmatter fields you might want to update:**
- `tagline` — the one-line tagline shown on project cards
- `status` — `"upcoming"`, `"released"`, `"active"`, or `"archived"`
- `links` — streaming links for the project

**Body** — write whatever you want about the project in plain Markdown.

---

## Add a New Project

1. Create a new file in `src/content/projects/` — name it `your-project-name.md`
2. Copy the frontmatter from an existing project file and update it:

```markdown
---
title: "New Project Name"
slug: "new-project-name"
tagline: "One line description"
coverImage: "/images/projects/new-project-cover.jpg"
status: "active"
order: 4
label: "Band · Description"
links:
  spotify: ""
  bandcamp: ""
seoDescription: "Description for search engines."
featured: true
---

Project description in Markdown here.
```

3. Add a cover image to `public/images/projects/`
4. Add the project to `src/data/releases.ts` if it has releases — add `"new-project-name"` as a valid project value in the `Release` type
5. The project will automatically appear at `/projects/new-project-name`

---

## Update Images and Photos

Images live in `public/images/`. Replace the placeholder files with real ones.

| Folder | What goes here |
|--------|----------------|
| `public/images/artist/` | Your artist portraits and photos |
| `public/images/blu/` | bLU album artwork, stills, promo images |
| `public/images/projects/` | Cover art for all projects and releases |
| `public/images/press/` | Hi-resolution press photos |

**Rules:**
- Keep the same filename as the placeholder if you want the simplest swap (e.g. replace `giovani-portrait-placeholder.jpg` with your photo, renamed to `giovani-portrait-placeholder.jpg`)
- Or use a new filename and update the path in the relevant data file

**For cover art:** Update the `coverImage` path in `src/data/releases.ts` or the project's `.md` frontmatter.

**Recommended sizes:**
- Release covers: at least 800×800px, square
- Artist portraits: at least 800×800px
- Press photos: at least 2000px wide (hi-res for download)
- bLU hero/OG image: 1200×630px (standard OG ratio)

---

## Add a YouTube Video Embed

To add a YouTube video to the bLU page or any release:

1. Open the YouTube video
2. Click **Share** → **Embed**
3. Copy the `<iframe ...>` code
4. In `src/data/releases.ts`, find the release and set:

```typescript
embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>`,
```

For the bLU page videos section, you can add them directly in `src/content/pages/blu.md` under the `## Videos` heading:

```markdown
## Videos

<div class="relative w-full" style="padding-bottom: 56.25%;">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen
  ></iframe>
</div>
```

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

## Change the Featured Project

**File:** `src/data/site.ts`

Change this line:
```typescript
featuredProject: "blu",
```

To any project slug:
- `"blu"` — bLU album
- `"sukya-porno"` — sukya || porno
- `"stop-and-go-station"` — Stop & Go Station

The homepage hero section will update automatically.

---

## Update the Press Kit Link

**File:** `src/data/site.ts`

```typescript
pressKitUrl: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID",
```

How to get a shareable Google Drive link:
1. Upload your press kit folder to Google Drive
2. Right-click the folder → **Share**
3. Change access to **Anyone with the link can view**
4. Click **Copy link**
5. Paste it here

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
