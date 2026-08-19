import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Update this to your actual domain when deploying
// Also update src/data/site.ts with the same domain
const SITE_URL = "https://www.giovanibaroni.com";

export default defineConfig({
  site: SITE_URL,
  redirects: {
    "/listen": "/listen/fishyboy",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => {
        const allowed = [
          `${SITE_URL}/`,
          `${SITE_URL}/blu/`,
          `${SITE_URL}/giovani-baroni/`,
          `${SITE_URL}/sukya/`,
          `${SITE_URL}/mecanicadosfluidos/`,
          `${SITE_URL}/fishyboy/`,
          `${SITE_URL}/listen/fishyboy/`,
        ];
        return allowed.includes(page);
      },
    }),
  ],
  output: "static",
});
