/**
 * SITE CONFIGURATION
 *
 * This is the main config file for the site. Edit this file to update:
 *   - Your name and tagline
 *   - Social media links
 *   - Email
 *   - Press kit URL (Google Drive link)
 *   - Which project is featured on the homepage
 *   - Site domain (important for SEO and sitemap)
 *
 * No coding knowledge required — just update the values in quotes.
 */

export const site = {
  // ── Artist Identity ──────────────────────────────────────────────────────
  name: "Giovani Baroni",
  tagline: "Musician · Songwriter · Producer",
  description:
    "Giovani Baroni is a Brazilian musician, songwriter, vocalist, and producer. Exploring psychedelia, water, and the vast territories between dream and memory.",

  // ── Domain ───────────────────────────────────────────────────────────────
  // UPDATE THIS when you have a real domain.
  // Also update astro.config.mjs → site: "https://yourdomain.com"
  domain: "https://giovanibaroni.com",

  // ── Featured Project ─────────────────────────────────────────────────────
  // Controls which project is highlighted on the homepage.
  // Must match a project slug in src/content/projects/
  featuredProject: "blu",

  // ── Social Links ─────────────────────────────────────────────────────────
  // Leave empty string "" for links you don't have yet.
  social: {
    instagram: "https://instagram.com/giovanibaroni", // UPDATE: your Instagram handle
    spotify: "https://open.spotify.com/artist/PLACEHOLDER", // UPDATE: your Spotify artist ID
    youtube: "https://youtube.com/@giovanibaroni", // UPDATE: your YouTube channel
    bandcamp: "https://giovanibaroni.bandcamp.com", // UPDATE: your Bandcamp URL
    soundcloud: "",
    tiktok: "",
    twitter: "",
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  email: "contact@giovanibaroni.com", // UPDATE: your email

  // ── Press Kit ────────────────────────────────────────────────────────────
  // Link to a Google Drive folder with your press kit.
  // Update this link whenever you update your press kit.
  pressKitUrl: "https://drive.google.com/PLACEHOLDER", // UPDATE: your Google Drive link

  // ── SEO Defaults ─────────────────────────────────────────────────────────
  // Used when a page doesn't provide its own OG image.
  defaultOgImage: "/images/og-default.jpg", // Add this image to public/images/
};

export type Site = typeof site;
