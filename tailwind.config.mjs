/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Dark navy base — bLU album palette
        ocean: {
          950: "#000d1a", // page background — deep dark navy
          900: "#041527", // card / section backgrounds
          800: "#062040", // slightly lighter cards
          700: "#024873", // borders, dividers
          600: "#0d5a8c", // less-muted navy
          500: "#b0105b", // dark magenta — label text (most labels site-wide)
          400: "#e85fa8", // light pink/magenta — accent labels, interactive elements
          300: "#c8d4de", // light blue-gray — secondary body text
          200: "#dce6ee", // lighter — primary body text
          100: "#eef3f8", // near-white
        },
        foam: "#c9d0d6",      // slightly grey main text / headings
        crimson: {
          700: "#730237",     // dark crimson
          500: "#BF0449",     // primary crimson — hover states, accents
          400: "#d4055a",     // lighter crimson hover
        },
        gold: "#BFB304",      // amber/gold — use very sparingly
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        body:    ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        mono:    ['"Hanken Grotesk"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(180deg, #000d1a 0%, #041527 60%, #062040 100%)",
        "hero-gradient":  "linear-gradient(135deg, #000d1a 0%, #024873 50%, #000d1a 100%)",
        "blu-gradient":   "linear-gradient(180deg, #000d1a 0%, #041527 40%, #062040 80%, #000d1a 100%)",
      },
      animation: {
        "fade-in":    "fadeIn 0.8s ease-in-out forwards",
        "slide-up":   "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: (theme) => ({
        ocean: {
          css: {
            "--tw-prose-body":         theme("colors.ocean[200]"),
            "--tw-prose-headings":     theme("colors.foam"),
            "--tw-prose-links":        theme("colors.ocean[400]"),
            "--tw-prose-bold":         theme("colors.foam"),
            "--tw-prose-counters":     theme("colors.ocean[400]"),
            "--tw-prose-bullets":      theme("colors.ocean[500]"),
            "--tw-prose-hr":           theme("colors.ocean[700]"),
            "--tw-prose-quotes":       theme("colors.ocean[200]"),
            "--tw-prose-quote-borders":theme("colors.ocean[500]"),
            "--tw-prose-captions":     theme("colors.ocean[400]"),
            "--tw-prose-code":         theme("colors.gold"),
            "--tw-prose-pre-code":     theme("colors.ocean[200]"),
            "--tw-prose-pre-bg":       theme("colors.ocean[900]"),
            "--tw-prose-th-borders":   theme("colors.ocean[600]"),
            "--tw-prose-td-borders":   theme("colors.ocean[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
