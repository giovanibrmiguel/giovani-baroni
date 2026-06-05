import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Update this to your actual domain when deploying
// Also update src/data/site.ts with the same domain
const SITE_URL = "https://giovanibaroni.com";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
});
