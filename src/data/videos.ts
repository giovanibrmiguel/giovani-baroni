/**
 * VIDEOS DATA
 *
 * Add YouTube embeds here.
 *
 * project: "sukya-porno" → shows on /sukya
 *          "giovani-baroni" → shows on /giovani-baroni
 *          "blu" → shows on /blu AND automatically on /giovani-baroni
 *
 * To add a video:
 *   1. Open the YouTube video → Share → Embed
 *   2. Copy the <iframe> code
 *   3. Add a new entry below with the correct project
 */

export type Video = {
  id: string;
  project: "sukya-porno" | "giovani-baroni" | "blu";
  embedCode: string;
};

export const videos: Video[] = [
  // ── sukya || porno ───────────────────────────────────────────────────────
  {
    id: "sukya-1",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/626VwxbaZx0?si=WpcnauiJs7ukRIdH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-2",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tsCRSSCWKwM?si=E8ISgaTr0C1_VPHe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-3",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/f92d5FxFfXc?si=1evjT6XQsBGHOLCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-4",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PK3zquaa8s4?si=YQkzzzj2KHKG-bXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-5",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/M24LAfQ9VYo?si=3PBZurJR5wEIkfih" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-6",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/66en-J211dA?si=ZPoELP1ci14OShCK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "sukya-7",
    project: "sukya-porno",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SNpif1bF4bU?si=gjqMKR2YhnFryR8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },

  // ── GIOVANI BARONI ───────────────────────────────────────────────────────
  {
    id: "gb-1",
    project: "giovani-baroni",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/iZDwSOr1UPQ?si=49aKtGwNThJtogoL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "gb-2",
    project: "giovani-baroni",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XIQ3pElHSe8?si=JsSmCiiUFyi4jdOt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "gb-3",
    project: "giovani-baroni",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/v-lJmkOrp0I?si=9ORC2NUvP71I_13E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
  {
    id: "gb-4",
    project: "giovani-baroni",
    embedCode: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Yv_68xEEi2s?si=drG0H02XsUm5RfpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },

  // ── bLU ─────────────────────────────────────────────────────────────────
  // Videos added here automatically appear on /giovani-baroni as well.
];
