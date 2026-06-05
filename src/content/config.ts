/**
 * CONTENT COLLECTIONS CONFIG
 *
 * This file defines the shape (schema) of all Markdown content files.
 * Astro validates every .md file against these schemas at build time,
 * so you get a clear error if you forget a required field.
 *
 * Think of this as the "types" for your content files.
 * You generally don't need to edit this file unless you want to
 * add new fields to projects or pages.
 */

import { defineCollection, z } from "astro:content";

// ── Projects Collection ──────────────────────────────────────────────────────
// Files: src/content/projects/*.md
// Each file represents one artistic project (bLU, sukya || porno, etc.)
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Note: slug is auto-generated from the filename by Astro — don't add it here
    tagline: z.string(),
    coverImage: z.string().default("/images/projects/placeholder.jpg"),
    status: z.enum(["upcoming", "released", "active", "archived"]).default("active"),
    // Display order (lower = shown first)
    order: z.number().default(99),
    // Optional short label shown on project cards
    label: z.string().optional(),
    links: z
      .object({
        spotify: z.string().optional(),
        bandcamp: z.string().optional(),
        youtube: z.string().optional(),
        instagram: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    // Members, if it's a band
    members: z.array(z.string()).optional(),
    // Used in SEO meta description
    seoDescription: z.string().optional(),
    // Whether to show a dedicated /projects/[slug] page
    featured: z.boolean().default(true),
  }),
});

// ── Pages Collection ─────────────────────────────────────────────────────────
// Files: src/content/pages/*.md
// Long-form text content for About, Press, bLU, etc.
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Short excerpt for SEO meta description
    excerpt: z.string().optional(),
    // OG image override for this page
    ogImage: z.string().optional(),
    // Last updated date (shown in press / about)
    updatedAt: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  pages: pagesCollection,
};
