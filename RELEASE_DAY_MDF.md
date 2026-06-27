# 🎵 Release Day Instructions — Mecânica dos Fluidos

**Release date:** 10 de Julho, 2026  
**How to use this file:** On release day, open a new Cursor chat and say:  
> *"Read @RELEASE_DAY_MDF.md and do the flip."*

---

## What "the flip" does

Switches `giovanibaroni.com/listen` from:
- "EM BREVE – 10 DE JULHO, 2026" + Follow links (artist profiles)

To:
- "Out Now" + Listen links (track URLs on each platform)

And activates the streaming buttons on `giovanibaroni.com/mecanicadosfluidos`.

---

## Step 1 — Collect track URLs on release day

Go to each platform and grab the link to the **Mecânica dos Fluidos track** (not the album, not the artist page — the specific track):

| Platform | Where to find it | Paste URL here |
|---|---|---|
| Spotify | Share → Copy Song Link | _(paste)_ |
| Apple Music | Share → Copy Link | _(paste)_ |
| YouTube Music | Share → Copy Link | _(paste)_ |
| Amazon Music | Share → Copy Link | _(paste)_ |
| Deezer | Share → Copy Link | _(paste)_ |
| YouTube | Your music video URL (if exists) | _(paste)_ |

---

## Step 2 — Edit `src/data/releases.ts`

Find the `mecanicadosfluidos-single` entry and make these changes:

### 2a. Set `released: true`
```ts
released: true,   // ← was: false
```

### 2b. Fill in `links` with the track URLs from Step 1
```ts
links: {
  spotify:      "https://open.spotify.com/track/REPLACE_WITH_REAL_ID",
  youtubeMusic: "https://music.youtube.com/watch?v=REPLACE_WITH_REAL_ID",
  appleMusic:   "https://music.apple.com/...",
  amazonMusic:  "https://music.amazon.com/...",
  deezer:       "https://www.deezer.com/en/track/REPLACE_WITH_REAL_ID",
  // youtube:   "https://youtu.be/REPLACE" ← add if there's a music video
},
```

### 2c. Update the Spotify embed code
Replace `PLACEHOLDER` with the real Spotify track ID in `embedCode`:
```ts
embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/REAL_TRACK_ID" ...></iframe>`,
```
The track ID is the string after `/track/` in the Spotify URL.

---

## Step 3 — Remove the pre-save iframe (optional, recommended)

In `src/pages/mecanicadosfluidos.astro`, remove or comment out this block:
```astro
<!-- PRE-SAVE campaign -->
<div class="mb-10">
  <p class="label-mono text-base text-ocean-500 mb-3">pre-save</p>
  <iframe src="https://show.co/social-unlock/..." ...></iframe>
</div>
```

---

## Step 4 — Verify the build

Run `npm run build` and confirm zero errors. Then `npm run dev` and check:
- [ ] `giovanibaroni.com/listen` shows "Out Now" and Listen links
- [ ] `giovanibaroni.com/mecanicadosfluidos` shows streaming buttons (not the /listen CTA)
- [ ] Spotify embed plays the actual track (not a placeholder)

---

## Step 5 — Deploy

Push to git. Cloudflare Pages will auto-deploy.

---

## After MDF — moving to Fishy Boy pre-release

When you're ready to promote Fishy Boy, do this in a Cursor chat:
> *"Move the /listen page to Fishy Boy pre-release. Link the pre-release buttons to the MDF track URLs."*

What that involves:
1. `src/data/site.ts` → change `listenPageReleaseId` to `"fishyboy-single"`
2. Uncomment the Fishy Boy entry in `src/data/releases.ts`
3. Fill in Fishy Boy's `preReleaseLinks` with the MDF track URLs (from Step 2 above)
4. Set `preReleaseCta: "listen"` and `preReleaseSubtitle: "enquanto você espera — ouça Mecânica dos Fluidos"`
5. Set Fishy Boy's `releaseDateLabel` to its actual release date
