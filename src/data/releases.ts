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
  // "blu" → featured sub-page; "giovani-baroni" → GB page; "sukya-porno" → sukya page
  project: "blu" | "sukya-porno" | "giovani-baroni";
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
    projectDisplayName: "GIOVANI BARONI",
    type: "album",
    year: 2026,
    coverImage: "/images/blu/cover-placeholder.jpg",
    shortDescription:
      "Upcoming debut solo album — TBD.",
    longDescription: `bLU is Giovani Baroni's debut solo album — a conceptual, narrative record designed to be listened to as a single continuous journey, from beginning to end.

The album began taking shape after Baroni moved to Mexico City, where daily life in a new language and a new continent pushed him toward a deeper introspection. Drawing from psychedelic rock, shoegaze, Brazilian indie, prog, and emo, bLU uses the ocean as both metaphor and sonic texture — fish, water, waves, and the abyss running throughout its lyrics and production.

Each track flows into the next. Themes of internal transformation, generational trauma, love, ego, eastern philosophy, and the persistence of the inner child connect the ten pieces into one immersive whole.

Produced independently — vocals, guitars, and keys recorded in Mexico City; bass, mixing, and mastering by Pedro Serapicos in Berlin; drums by Bianca Predieri in São Paulo. The album also features guest vocals from Jorge Sultzer (Mexico City) and co-writing from Ricardo Baroni and Mardem Humberto.`,
    links: {
      spotify: "", // UPDATE: add Spotify album link when released
      bandcamp: "",
      youtube: "",
      appleMusic: "",
    },
    featured: true,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Vocals, guitars, keys, writing, and production — Giovani Baroni (Mexico City)",
      "Bass, mixing, and mastering — Pedro Serapicos (Berlin)",
      "Drums — Bianca Predieri (São Paulo)",
      'Guest vocals on "Efervescente" — Jorge Sultzer (Mexico City)',
      "Video production — Léo Lopes (Recife) and Luca Tornato (The Hague)",
      '"Fishy Boy" co-written with Ricardo Baroni (São Paulo) and Mardem Humberto (Goiânia)',
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
    project: "giovani-baroni",
    projectDisplayName: "giovani-baroni",
    type: "ep",
    year: 2023,
    coverImage: "/images/projects/stop-and-go-cover-placeholder.jpg",
    shortDescription:
      "Stop & Go Station is an intimate, lo-fi and dreamy EP consisting of 4 tracks, shaped by home-recorded textures, and references to 90s video games. Blending Brazilian influences, indie rock, and nostalgia, Giovani Baroni builds a playful yet intricate sound world with echoes of Super Mario 64, Alceu Valença, and The Strokes.",
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
    project: "giovani-baroni",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2024,
    coverImage: "/images/projects/ruido-branco-placeholder.jpg",
    shortDescription: "Ruído Branco is about wanting everything at once: every dream, every place, every possible version of everything. The idea comes from white noise itself, all frequencies sounding together, and turns it into a digital nostalgic metaphor like the loud static of an old tube TV.",
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
    project: "giovani-baroni",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2024,
    coverImage: "/images/projects/sleep-placeholder.jpg",
    shortDescription: "Sleep is a downer single wrapped in a dreamlike haze between emo, shoegaze, and lo-fi Rock Triste. Washed-out guitars, lethargic vocals, half-awake vocals, and jungle-inspired beats.",
    longDescription: ` `,
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
    year: 2019,
    coverImage: "/images/projects/talassofobia-placeholder.jpg",
    shortDescription:
      "The debut EP from sukya || porno — noisy, experimental, and visceral.",
    longDescription: ` .

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
    year: 2017,
    coverImage: "/images/projects/urbe-placeholder.jpg",
    shortDescription:
      "Born out of São Paulo’s concrete, rain, crowds and quiet frustration, the record sounds like a dialogue between city life and inner turbulence. The band mixes regional Brazilian influences, progressive rock and experimental ideas without trying to fit neatly into one place.",
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

/** Get releases for a project slug */
export function getReleasesByProject(
  projectSlug: Release["project"]
): Release[] {
  return releases.filter((r) => r.project === projectSlug);
}

/**
 * Get all GIOVANI BARONI releases: includes both the "giovani-baroni"
 * releases and the "blu" album (which lives on its own featured sub-page).
 */
export function getGiovaniBaroniReleases(): Release[] {
  return releases
    .filter((r) => r.project === "giovani-baroni" || r.project === "blu")
    .sort((a, b) => b.year - a.year);
}

/** Get the most recent release (by year) */
export const latestRelease = releases.reduce((a, b) =>
  a.year > b.year ? a : b
);
