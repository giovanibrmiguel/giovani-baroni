/**
 * LISTEN PAGES CONFIG
 *
 * One entry per /listen/<slug> smart-link landing page. This is the only
 * thing that differs between those pages — the actual page markup lives
 * once in src/components/listen/ListenPageLayout.astro and is rendered by
 * src/pages/listen/[slug].astro for every entry below.
 *
 * To add a new /listen page for a future single: add an entry here (and its
 * release in releases.ts). No new .astro file needed.
 */

export type ListenMoreAbout =
  // A single anchor. `textOverride` replaces the default "leia mais sobre
  // {release.title}"; `withUtm` appends the listen_more_about UTM tag.
  | { kind: "single"; withUtm: boolean; textOverride?: string }
  // The two-line "isso é uma música de bLU, um álbum conceitual aquático..."
  // paragraph used on the singles that have their own dedicated page.
  | { kind: "trackOfAlbum" };

export type ListenPageConfig = {
  /** URL slug — the page renders at /listen/<slug> */
  slug: string;
  /** Matches a `Release.id` in src/data/releases.ts */
  releaseId: string;
  /** Where "the artist/album" links on this page point to */
  releasePagePath: string;
  /** True for the ads-only track pages — excluded from search indexing */
  noindex?: boolean;
  /**
   * true = render every platform button, disabled/greyed-out if this
   * release has no link for it (used on bLU and the ads-only track pages).
   * false = only render platforms that actually have a link (used on the
   * two singles that have their own dedicated page).
   */
  showAllPlatforms: boolean;
  /** Text inside the "released" badge — some pages show "JÁ SAIU", others leave it blank */
  badgeOutText: string;
  moreAbout: ListenMoreAbout;
  /** Release ids to show as "more releases" cards, in display order */
  relatedReleaseIds: string[];
  /** Subset of relatedReleaseIds to render as a disabled "Em Breve" card instead of a link */
  disabledReleaseIds?: string[];
};

const UTM_MORE_ABOUT = "listen_more_about";

export const listenPages: ListenPageConfig[] = [
  {
    slug: "blu",
    releaseId: "blu-album",
    releasePagePath: "/blu",
    showAllPlatforms: true,
    badgeOutText: "",
    moreAbout: { kind: "single", withUtm: false },
    relatedReleaseIds: ["fishyboy-single", "mecanicadosfluidos-single"],
  },
  {
    slug: "fishyboy",
    releaseId: "fishyboy-single",
    releasePagePath: "/fishyboy",
    showAllPlatforms: false,
    badgeOutText: "",
    moreAbout: { kind: "trackOfAlbum" },
    relatedReleaseIds: ["mecanicadosfluidos-single", "blu-album"],
  },
  {
    slug: "mecanicadosfluidos",
    releaseId: "mecanicadosfluidos-single",
    releasePagePath: "/mecanicadosfluidos",
    showAllPlatforms: false,
    badgeOutText: "",
    moreAbout: { kind: "trackOfAlbum" },
    relatedReleaseIds: ["fishyboy-single", "blu-album"],
  },
  {
    slug: "efervescente",
    releaseId: "efervescente-single",
    releasePagePath: "/blu",
    noindex: true,
    showAllPlatforms: true,
    badgeOutText: "",
    moreAbout: { kind: "single", withUtm: true, textOverride: "leia mais sobre o álbum bLU" },
    relatedReleaseIds: ["fishyboy-single", "mecanicadosfluidos-single", "blu-album"],
  },
  {
    slug: "norte",
    releaseId: "norte-single",
    releasePagePath: "/blu",
    noindex: true,
    showAllPlatforms: true,
    badgeOutText: "",
    moreAbout: { kind: "single", withUtm: true, textOverride: "leia mais sobre o álbum bLU" },
    relatedReleaseIds: ["fishyboy-single", "mecanicadosfluidos-single", "blu-album"],
  },
  {
    slug: "paseolargo",
    releaseId: "paseolargo-single",
    releasePagePath: "/blu",
    noindex: true,
    showAllPlatforms: true,
    badgeOutText: "",
    moreAbout: { kind: "single", withUtm: true, textOverride: "leia mais sobre o álbum bLU" },
    relatedReleaseIds: ["fishyboy-single", "mecanicadosfluidos-single", "blu-album"],
  },
  {
    slug: "peixesestranhos",
    releaseId: "peixesestranhos-single",
    releasePagePath: "/blu",
    noindex: true,
    showAllPlatforms: true,
    badgeOutText: "",
    moreAbout: { kind: "single", withUtm: true, textOverride: "leia mais sobre o álbum bLU" },
    relatedReleaseIds: ["fishyboy-single", "mecanicadosfluidos-single", "blu-album"],
  },
];

export { UTM_MORE_ABOUT };

/** releaseId -> its own /listen/<slug>, so related-release cards can link correctly. */
export const slugByReleaseId: Record<string, string> = Object.fromEntries(
  listenPages.map((p) => [p.releaseId, p.slug])
);
