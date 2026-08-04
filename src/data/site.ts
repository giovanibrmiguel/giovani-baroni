/**
 * SITE CONFIGURATION
 *
 * `site` — global SEO/domain defaults used by BaseLayout and legacy pages.
 * `projects` — per-project config: social links, email, press kit, portrait.
 *
 * To update social links or press kit for a project, edit the relevant
 * entry in the `projects` object below.
 */

export const site = {
  name: "Giovani Baroni",
  description: "Giovani Baroni is a Brazilian musician, songwriter, and producer based in Mexico City — known for prog-influenced indie rock and conceptual albums.",
  domain: "https://www.giovanibaroni.com",
  featuredProject: "blu",
  // Controls which release is shown on /listen. Change this to swap to the next single.
  listenPageReleaseId: "fishyboy-single",
  email: "press@giovanibaroni.com",
  pressKitUrl:
    "https://drive.google.com/drive/u/2/folders/1CZFK3o8dtHyRhNbWmWq0C7Bv8hOfl--B",
  defaultOgImage: "/images/og-default.jpg",
  // Legacy flat social block — kept for any legacy components that reference it.
  social: {
    instagram: "https://www.instagram.com/giovanibaroni/",
    spotify: "https://open.spotify.com/artist/6qme9zfWubX4UWQQV8pVPY",
    youtube: "https://www.youtube.com/@sukyarecords",
    bandcamp: "",
    soundcloud: "",
    tiktok: "",
    twitter: "",
  },
};

export const projects = {
  "giovani-baroni": {
    displayName: "GIOVANI BARONI",
    slug: "giovani-baroni",
    portrait: "/images/artist/giovani-portrait-placeholder.jpg",
    email: "press@giovanibaroni.com",
    pressKitUrl:
      "https://drive.google.com/drive/u/2/folders/1CZFK3o8dtHyRhNbWmWq0C7Bv8hOfl--B",
    social: {
      instagram: "https://www.instagram.com/giovanibaroni/",
      spotify: "https://open.spotify.com/artist/6qme9zfWubX4UWQQV8pVPY",
      youtube: "https://www.youtube.com/@sukyarecords",
      bandcamp: "https://giovanibaroni.bandcamp.com",
    },
  },
  "sukya-porno": {
    displayName: "sukya || porno",
    slug: "sukya",
    portrait: "/images/artist/sukya-placeholder.jpg",
    email: "press@giovanibaroni.com",
    pressKitUrl:
      "https://drive.google.com/drive/u/2/folders/1CZFK3o8dtHyRhNbWmWq0C7Bv8hOfl--B",
    social: {
      instagram: "https://www.instagram.com/sukyap/",
      spotify: "https://open.spotify.com/artist/7ndXsfZrZViNKKJB2LWXz5",
      youtube: "https://www.youtube.com/@sukyarecords",
      bandcamp: "https://sukyaporno.bandcamp.com/music",
    },
  },
} as const;

export type ProjectKey = keyof typeof projects;
export type ProjectConfig = (typeof projects)[ProjectKey];
export type Site = typeof site;
