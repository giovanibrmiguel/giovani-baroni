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
  description: "Giovani Baroni is a Brazilian musician based in Mexico City.",
  domain: "https://giovanibaroni.com",
  featuredProject: "blu",
  email: "contact@giovanibaroni.com",
  pressKitUrl:
    "https://drive.google.com/drive/u/2/folders/1wdE8OCj8gry5UlX25IxuXEJXubEP0IjX",
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
    email: "contact@giovanibaroni.com",
    pressKitUrl:
      "https://drive.google.com/drive/u/2/folders/1wdE8OCj8gry5UlX25IxuXEJXubEP0IjX",
    social: {
      instagram: "https://www.instagram.com/giovanibaroni/",
      spotify: "https://open.spotify.com/artist/6qme9zfWubX4UWQQV8pVPY",
      youtube: "https://www.youtube.com/@sukyarecords",
    },
  },
  "sukya-porno": {
    displayName: "sukya || porno",
    slug: "sukya",
    portrait: "/images/artist/sukya-placeholder.jpg",
    email: "contact@giovanibaroni.com",
    pressKitUrl:
      "https://drive.google.com/drive/u/2/folders/1wdE8OCj8gry5UlX25IxuXEJXubEP0IjX",
    social: {
      instagram: "https://www.instagram.com/sukyap/",
      spotify: "https://open.spotify.com/artist/7ndXsfZrZViNKKJB2LWXz5",
      youtube: "https://www.youtube.com/@sukyarecords",
    },
  },
} as const;

export type ProjectKey = keyof typeof projects;
export type ProjectConfig = (typeof projects)[ProjectKey];
export type Site = typeof site;
