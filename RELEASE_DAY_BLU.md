# 🎵 Release Day Instructions — bLU (album)

**Release date:** 04 de Setembro, 2026
**How to use this file:** On release day, open a new Claude/Cursor chat and say:
> *"Read @RELEASE_DAY_BLU.md and do the flip."*

---

## What "the flip" does

This is the big one — it touches more than one page, because bLU isn't a single, it's the whole album plus four tracks that already have their own ad-only `/listen` pages.

- `giovanibaroni.com/blu` — "stream & download" section and sidebar streaming buttons go live (currently empty/hidden because `links` is blank)
- `giovanibaroni.com/listen/blu` — flips from "EM BREVE — volta aqui dia 04 de setembro" (follow links) to "JÁ SAIU" (play links)
- `giovanibaroni.com/listen/peixesestranhos`, `/listen/norte`, `/listen/paseolargo`, `/listen/efervescente` — same flip, one per track
- `giovanibaroni.com/listen/fishyboy` and `/listen/mecanicadosfluidos` — the greyed-out "bLU · Em Breve" card in their "more releases" row becomes a normal clickable card

`/giovani-baroni`, the Discography section, and the bLU tracklist sidebar all read from `src/data/releases.ts` automatically — nothing to touch there, they update themselves once the data below is filled in.

---

## Step 1 — Collect URLs on release day

### The album itself

Go to each platform and grab the link to the **bLU album** (not a single track, not the artist page):

| Platform | Where to find it | Paste URL here |
|---|---|---|
| Spotify | Album → Share → Copy Album Link | _(paste)_ |
| Apple Music | Album → Share → Copy Link | _(paste)_ |
| YouTube Music | Album → Share → Copy Link | _(paste)_ |
| Amazon Music | Album → Share → Copy Link | _(paste)_ |
| Deezer | Album → Share → Copy Link | _(paste)_ |
| Bandcamp | Album page URL (if you're using Bandcamp) | _(paste)_ |

You'll also need the **Spotify album ID** on its own (the string after `/album/` in the Spotify album URL) for Step 2.

### The four tracks that already have their own `/listen` ad page

These don't have a dedicated page like Fishy Boy does, but they do have a `/listen/<slug>` smart-link page each, reachable only through ads. Grab each **track's** link (not the album's):

| Track | `/listen` slug | Spotify | Apple Music | Notes |
|---|---|---|---|---|
| Peixes Estranhos | `peixesestranhos` | _(paste)_ | _(paste)_ | |
| Norte | `norte` | _(paste)_ | _(paste)_ | |
| Paseo Largo | `paseolargo` | _(paste)_ | _(paste)_ | |
| Efervescente | `efervescente` | _(paste)_ | _(paste)_ | |

Grab YouTube Music / Amazon Music / Deezer track links too if you want those buttons live — same pattern as the table above, just per-track instead of per-album.

### The rest of the tracklist (no page yet)

"Ambiência Aquática Nº 5", "O Mundo dos Sonhos", "O Bicho que Sabia Demais", and "O Rio" don't have a release entry or a `/listen` page at all today. That's fine — they don't need one to be part of the album. If you later want an ad-only landing page for one of them (same pattern as Peixes Estranhos etc., for running ads straight to that song), see [CONTENT_GUIDE.md § Add a New /listen Smart-Link Page](./CONTENT_GUIDE.md#add-a-new-listen-smart-link-page). Not a release-day requirement.

---

## Step 2 — Edit `src/data/releases.ts`

### 2a. The album — find the `blu-album` entry

```ts
released: true,   // ← add this line (it doesn't exist yet, defaults to false without it)
```

Fill in `links` with the album URLs from Step 1:
```ts
links: {
  spotify:     "https://open.spotify.com/album/REPLACE_WITH_REAL_ID",
  appleMusic:  "https://music.apple.com/...",
  youtube:     "https://...",       // only if there's a YouTube album/playlist
  bandcamp:    "https://...",       // only if using Bandcamp
},
```

Update the Spotify embed — replace `PLACEHOLDER` with the real Spotify **album** ID in `embedCode`:
```ts
embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/REAL_ALBUM_ID" ...></iframe>`,
```

### 2b. The four track entries

For each of `peixesestranhos-single`, `norte-single`, `paseolargo-single`, `efervescente-single`:

```ts
released: true,   // ← was: not set (defaults to false)
links: {
  spotify:     "https://open.spotify.com/track/REPLACE_WITH_REAL_ID",
  appleMusic:  "https://music.apple.com/...",
  // add youtube / deezer / amazonMusic / youtubeMusic if you grabbed those too
},
```

Optional but recommended (matches what was done for Mecânica dos Fluidos and Fishy Boy): swap `preReleaseSubtitle` for a short lyric snippet from that song — it's the italic line shown above the platform buttons, and it stops making sense once the "coming soon" framing is gone. It won't show once `released: true` anyway (that field is pre-release-only), so this is just cleanup, not required.

---

## Step 3 — Edit `src/data/listenPages.ts`

The "more releases" row on `/listen/fishyboy` and `/listen/mecanicadosfluidos` shows a greyed-out, unclickable bLU card today. Find both the `fishyboy` and `mecanicadosfluidos` entries in the `listenPages` array and **delete this line** from each:

```ts
disabledReleaseIds: ["blu-album"],   // ← delete this line from both entries
```

Without it, the bLU card in those two "more releases" rows becomes a normal clickable link to `/listen/blu`.

---

## Step 4 — Verify the build

Run `npm run build` and confirm zero errors. Then `npm run dev` and check:
- [ ] `giovanibaroni.com/blu` shows the "stream & download" section and the sidebar "stream" buttons (not blank/hidden)
- [ ] `giovanibaroni.com/blu` — the Spotify embed under "listen" plays the actual album (not a placeholder)
- [ ] `giovanibaroni.com/listen/blu` shows "JÁ SAIU" and Play links
- [ ] `giovanibaroni.com/listen/peixesestranhos`, `/listen/norte`, `/listen/paseolargo`, `/listen/efervescente` each show "JÁ SAIU" and Play links
- [ ] `giovanibaroni.com/listen/fishyboy` and `/listen/mecanicadosfluidos` — the bLU "more releases" card is no longer greyed out and links to `/listen/blu`
- [ ] `giovanibaroni.com/giovani-baroni` discography section shows bLU's streaming buttons

---

## Step 5 — Deploy

Push to git. Cloudflare Pages will auto-deploy.

---

## Optional — point the bare `/listen` link at the album

Right now, `giovanibaroni.com/listen` (the short link used in bio links, Instagram, etc.) redirects to `/listen/fishyboy/`. If you want that link to send people to the album instead once it's out, edit the redirect in **`astro.config.mjs`**:

```ts
redirects: {
  "/listen": "/listen/blu/",   // ← was: "/listen/fishyboy/"
},
```

This is the only place that redirect is controlled — there's no `site.ts` field for it (an old version of this doc mentioned one; it doesn't do anything, don't look for it).
