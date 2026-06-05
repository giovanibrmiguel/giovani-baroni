/**
 * RELEASES DATA
 *
 * Add, edit, or remove releases here.
 *
 * To add a new release:
 *   1. Copy an existing release object
 *   2. Paste it inside the releases array
 *   3. Update all fields
 *   4. Set featured: true if it should appear on the homepage
 *
 * The "project" field must match a project slug in src/content/projects/
 */

export type StreamingLinks = {
  spotify?: string;
  bandcamp?: string;
  youtube?: string;
  appleMusic?: string;
  soundcloud?: string;
  tidal?: string;
};

export type Release = {
  id: string;
  title: string;
  // Must match a project slug in src/content/projects/
  project: "blu" | "sukya-porno" | "stop-and-go-station";
  projectDisplayName: string;
  type: "album" | "ep" | "single" | "live" | "compilation";
  year: number;
  // Path relative to /public/ — e.g., "/images/projects/blu-cover.jpg"
  coverImage: string;
  shortDescription: string;
  longDescription: string;
  links: StreamingLinks;
  // If true, appears in featured sections on homepage and music page
  featured: boolean;
  // Raw iframe embed HTML from Spotify, Bandcamp, or YouTube
  // Get this from the platform's "Share → Embed" option
  embedCode?: string;
  credits?: string[];
  tracklist?: string[];
};

export const releases: Release[] = [
  // ── bLU ─────────────────────────────────────────────────────────────────
  {
    id: "blu-album",
    title: "bLU",
    project: "blu",
    projectDisplayName: "bLU",
    type: "album",
    year: 2026,
    coverImage: "/images/blu/cover-placeholder.jpg",
    shortDescription:
      "Debut solo album — progressive indie rock with ocean imagery, conceptual narrative, and psychedelic soundscapes.",
    longDescription: `bLU is Giovani Baroni's debut solo album — a conceptual, narrative record designed to be listened to as a single continuous journey, from beginning to end.

The album began taking shape after Baroni moved to Mexico City, where daily life in a new language and a new continent pushed him toward a deeper introspection. Drawing from psychedelic rock, shoegaze, Brazilian indie, prog, and emo, bLU uses the ocean as both metaphor and sonic texture — fish, water, waves, and the abyss running throughout its lyrics and production.

Each track flows into the next. Themes of internal transformation, generational trauma, love, ego, eastern philosophy, and the persistence of the inner child connect the ten pieces into one immersive whole.

Produced independently — vocals, guitars, and keys recorded in Mexico City; bass and mixing by Pedro Serapicos in Berlin; drums by Bianca Predieri in São Paulo. The album also features guest vocals from Jorge Sultzer (Mexico City) and co-writing from Ricardo Baroni and Mardem Humberto.`,
    links: {
      spotify: "", // UPDATE: add Spotify album link when released
      bandcamp: "",
      youtube: "",
      appleMusic: "",
    },
    featured: true,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Written and produced by Giovani Baroni",
      "Bass and mixing by Pedro Serapicos (Berlin)",
      "Drums by Bianca Predieri (São Paulo)",
      "Guest vocals on Efervescente: Jorge Sultzer",
      "Fishy Boy co-written with Ricardo Baroni and Mardem Humberto",
      "Piano developed with Eduardo [UPDATE: last name]",
      "Video production: Léo Lopes, Luca Tornato",
    ],
    tracklist: [
      "1. Ambiência Aquática No 5",
      "2. Peixes Estranhos",
      "3. Norte",
      "4. O Mundo dos Sonhos",
      "5. Mecânica dos Fluidos",
      "6. Efervescente",
      "7. O Bicho que Sabia Demais",
      "8. Fishy Boy",
      "9. Paseo Largo",
      "10. O Rio",
    ],
  },

  // ── Stop & Go Station ────────────────────────────────────────────────────
  {
    id: "stop-and-go-ep",
    title: "Stop & Go Station",
    project: "stop-and-go-station",
    projectDisplayName: "Stop & Go Station",
    type: "ep",
    year: 2022,
    coverImage: "/images/projects/stop-and-go-cover-placeholder.jpg",
    shortDescription:
      "A solo EP from an earlier chapter — transient, searching, and quietly intimate.",
    longDescription: `Stop & Go Station is an early solo EP by Giovani Baroni. A collection of songs written during a period of transit and uncertainty.

The EP is sparse and introspective, shaped by acoustic textures, layered vocals, and the ambience of in-between places.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/5le5q8tskih5LXdnAmK8cC",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5le5q8tskih5LXdnAmK8cC" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Written and produced by Giovani Baroni",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. [Track title] — UPDATE",
      "2. [Track title] — UPDATE",
      "3. [Track title] — UPDATE",
    ],
  },

  // ── Ruído Branco — Single ────────────────────────────────────────────────
  {
    id: "ruido-branco-single",
    title: "Ruído Branco",
    project: "stop-and-go-station",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2022,
    coverImage: "/images/projects/placeholder.jpg",
    shortDescription: "Solo single by Giovani Baroni.",
    longDescription: `[UPDATE: Add description for Ruído Branco]`,
    links: {
      spotify: "https://open.spotify.com/album/5yBS1vVVYiVACkOwDZ8pv1",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5yBS1vVVYiVACkOwDZ8pv1" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },

  // ── Sleep — Single ───────────────────────────────────────────────────────
  {
    id: "sleep-single",
    title: "Sleep",
    project: "stop-and-go-station",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2022,
    coverImage: "/images/projects/placeholder.jpg",
    shortDescription: "Solo single by Giovani Baroni.",
    longDescription: `[UPDATE: Add description for Sleep]`,
    links: {
      spotify: "https://open.spotify.com/album/4ZRBXxx4bHWWcou1cHR1Zi",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4ZRBXxx4bHWWcou1cHR1Zi" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },

  // ── sukya || porno — TALASSOFOBIA ────────────────────────────────────────
  {
    id: "sukya-porno-ep1",
    title: "TALASSOFOBIA",
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2021,
    coverImage: "/images/projects/sukya-ep1-cover-placeholder.png",
    shortDescription:
      "The debut EP from sukya || porno — noisy, experimental, and visceral.",
    longDescription: `The first EP from sukya || porno, the collaborative project between Giovani Baroni and [UPDATE: bandmate name].

Raw and immediate, the debut EP established the band's sonic identity: distorted guitars, fractured rhythms, and an emotional directness that resists easy categorization.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/1FIytwlVndlrmYbITk0Ibt",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1FIytwlVndlrmYbITk0Ibt" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "sukya || porno is Giovani Baroni and [UPDATE: bandmate name]",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. [Track title] — UPDATE",
      "2. [Track title] — UPDATE",
      "3. [Track title] — UPDATE",
    ],
  },

  // ── sukya || porno — Quando a Urbe Vira Mange e Nosso Sangue, Lama ──────
  {
    id: "sukya-porno-ep2",
    title: "Quando a Urbe Vira Mange e Nosso Sangue, Lama",
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2023,
    coverImage: "/images/projects/sukya-ep2-cover-placeholder.jpg",
    shortDescription:
      "The second EP from sukya || porno — more expansive, weirder, and more precise.",
    longDescription: `The second EP from sukya || porno. More expansive than the first, the band pushes further into texture, atmosphere, and the complicated space between noise and melody.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/3gsi2BJoBKdhXobj89XuYq",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3gsi2BJoBKdhXobj89XuYq" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "sukya || porno is Giovani Baroni and [UPDATE: bandmate name]",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. [Track title] — UPDATE",
      "2. [Track title] — UPDATE",
      "3. [Track title] — UPDATE",
      "4. [Track title] — UPDATE",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Get all featured releases */
export const featuredReleases = releases.filter((r) => r.featured);

/** Get releases grouped by project */
export function getReleasesByProject(
  projectSlug: Release["project"]
): Release[] {
  return releases.filter((r) => r.project === projectSlug);
}

/** Get the most recent release (by year) */
export const latestRelease = releases.reduce((a, b) =>
  a.year > b.year ? a : b
);
