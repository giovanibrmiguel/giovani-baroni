import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Update this to your actual domain when deploying
// Also update src/data/site.ts with the same domain
const SITE_URL = "https://www.giovanibaroni.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) =>
        // Exclude stub pages — canonical versions live at /sukya and /blu
        !page.includes("/projects/sukya-porno") &&
        !page.includes("/projects/blu/"),
    }),
  ],
  output: "static",
});
