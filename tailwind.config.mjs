/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Ocean-inspired dark palette
        ocean: {
          950: "#050a0e", // base background — deep abyss
          900: "#0a1520", // card / section backgrounds
          800: "#0c1e30",
          700: "#0e2a40",
          600: "#1a3f5c",
          500: "#245e7e",
          400: "#4a9bb5",
          300: "#72bdd4",
          200: "#a8d8ea",
          100: "#d4eef6",
        },
        foam: "#e8f4f8",   // near-white text
        algae: "#2d6a4f",  // muted green accent
        biolum: "#7fffd4", // aquamarine highlight (use sparingly)
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(180deg, #050a0e 0%, #0a1520 60%, #0c1e30 100%)",
        "hero-gradient": "linear-gradient(135deg, #050a0e 0%, #0e2a40 50%, #050a0e 100%)",
        "blu-gradient": "linear-gradient(180deg, #050a0e 0%, #071825 40%, #0a2233 80%, #050a0e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: (theme) => ({
        ocean: {
          css: {
            "--tw-prose-body": theme("colors.ocean[200]"),
            "--tw-prose-headings": theme("colors.foam"),
            "--tw-prose-links": theme("colors.ocean[400]"),
            "--tw-prose-bold": theme("colors.foam"),
            "--tw-prose-counters": theme("colors.ocean[400]"),
            "--tw-prose-bullets": theme("colors.ocean[500]"),
            "--tw-prose-hr": theme("colors.ocean[700]"),
            "--tw-prose-quotes": theme("colors.ocean[200]"),
            "--tw-prose-quote-borders": theme("colors.ocean[500]"),
            "--tw-prose-captions": theme("colors.ocean[400]"),
            "--tw-prose-code": theme("colors.biolum"),
            "--tw-prose-pre-code": theme("colors.ocean[200]"),
            "--tw-prose-pre-bg": theme("colors.ocean[900]"),
            "--tw-prose-th-borders": theme("colors.ocean[600]"),
            "--tw-prose-td-borders": theme("colors.ocean[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
