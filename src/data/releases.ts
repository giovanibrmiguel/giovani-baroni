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
    year: 2025, // UPDATE: actual release year
    coverImage: "/images/blu/cover-placeholder.jpg",
    shortDescription:
      "An upcoming debut album exploring psychedelia, water, and memory. Sonic landscapes drifting between the unconscious and the surface.",
    longDescription: `bLU is Giovani Baroni's debut solo album — a psychedelic journey through water, memory, and transformation.

The album draws from Brazilian musical roots, alternative rock, shoegaze, and experimental songwriting. It is an attempt to map the internal — dreams, grief, love, and the perpetual motion of water.

Recorded and produced independently in São Paulo, bLU is a deeply personal document and an invitation to submerge.

[UPDATE: Replace this with actual album description and context]`,
    links: {
      spotify: "", // UPDATE: Spotify album link
      bandcamp: "", // UPDATE: Bandcamp album link
      youtube: "", // UPDATE: YouTube album playlist or release video
      appleMusic: "", // UPDATE: Apple Music link
    },
    featured: true,
    // UPDATE: Replace with actual embed code from Spotify
    // Go to Spotify → Album → Share → Embed
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Written and produced by Giovani Baroni",
      "Mixed by [UPDATE: mixer name]",
      "Mastered by [UPDATE: mastering engineer]",
      "Artwork by [UPDATE: artist name]",
    ],
    tracklist: [
      "1. [Track title] — UPDATE",
      "2. [Track title] — UPDATE",
      "3. [Track title] — UPDATE",
      "4. [Track title] — UPDATE",
      "5. [Track title] — UPDATE",
    ],
  },

  // ── Stop & Go Station ────────────────────────────────────────────────────
  {
    id: "stop-and-go-ep",
    title: "Stop & Go Station",
    project: "stop-and-go-station",
    projectDisplayName: "Stop & Go Station",
    type: "ep",
    year: 2022, // UPDATE: actual release year
    coverImage: "/images/projects/stop-and-go-cover-placeholder.jpg",
    shortDescription:
      "A solo EP from an earlier chapter — transient, searching, and quietly intimate.",
    longDescription: `Stop & Go Station is an early solo EP by Giovani Baroni. A collection of songs written during a period of transit and uncertainty.

The EP is sparse and introspective, shaped by acoustic textures, layered vocals, and the ambience of in-between places.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "", // UPDATE: Spotify EP link
      bandcamp: "", // UPDATE: Bandcamp EP link
      youtube: "", // UPDATE: YouTube link
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER_STOP_GO" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
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

  // ── sukya || porno — EP #1 ───────────────────────────────────────────────
  {
    id: "sukya-porno-ep1",
    title: "EP I", // UPDATE: actual EP title if it has one
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2021, // UPDATE: actual release year
    coverImage: "/images/projects/sukya-ep1-cover-placeholder.jpg",
    shortDescription:
      "The debut EP from sukya || porno — noisy, experimental, and visceral.",
    longDescription: `The first EP from sukya || porno, the collaborative project between Giovani Baroni and [UPDATE: bandmate name].

Raw and immediate, the debut EP established the band's sonic identity: distorted guitars, fractured rhythms, and an emotional directness that resists easy categorization.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "", // UPDATE
      bandcamp: "", // UPDATE
      youtube: "", // UPDATE
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER_SUKYA_EP1" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
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

  // ── sukya || porno — EP #2 ───────────────────────────────────────────────
  {
    id: "sukya-porno-ep2",
    title: "EP II", // UPDATE: actual EP title if it has one
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2023, // UPDATE: actual release year
    coverImage: "/images/projects/sukya-ep2-cover-placeholder.jpg",
    shortDescription:
      "The second EP from sukya || porno — more expansive, weirder, and more precise.",
    longDescription: `The second EP from sukya || porno. More expansive than the first, the band pushes further into texture, atmosphere, and the complicated space between noise and melody.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "", // UPDATE
      bandcamp: "", // UPDATE
      youtube: "", // UPDATE
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER_SUKYA_EP2" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
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
