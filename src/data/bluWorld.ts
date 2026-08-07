/**
 * bLU WORLD
 *
 * Shared shape of the bLU album world — the album plus its released singles —
 * used by BluWorldNav (hero strip), BluWorldFooter (continue exploring), and
 * tracklist maps on /blu and /giovani-baroni.
 *
 * To add a new single: give it a release entry in src/data/releases.ts, list it
 * in the bLU tracklist there, add its project to `singleProjects` below, and
 * drop a 160px cover crop at /images/thumbs/<project>.webp.
 */
import { releases } from "@/data/releases";

export type BluWorldId = "blu" | "mecanicadosfluidos" | "fishyboy";

export type BluWorldItem = {
  id: BluWorldId;
  href: string;
  title: string;
  thumb: string;
  /** Zero-padded position in the bLU tracklist, e.g. "05". Null for the album. */
  trackNumber: string | null;
};

const singleProjects: BluWorldId[] = ["mecanicadosfluidos", "fishyboy"];

const album = releases.find((r) => r.project === "blu");

/** "5. Mecânica dos Fluidos" → "05" */
function trackNumber(title: string): string | null {
  const entry = album?.tracklist?.find((t) => t.includes(title));
  const n = entry?.match(/^(\d+)\./)?.[1];
  return n ? n.padStart(2, "0") : null;
}

export const bluAlbumItem: BluWorldItem = {
  id: "blu",
  href: "/blu",
  title: "bLU",
  thumb: "/images/thumbs/blu.webp",
  trackNumber: null,
};

/** Released singles, ordered by their position on the album. */
export const bluSingleItems: BluWorldItem[] = singleProjects
  .flatMap((project) => {
    const release = releases.find((r) => r.project === project);
    if (!release) return [];
    return [
      {
        id: project,
        href: `/${project}`,
        title: release.title,
        thumb: `/images/thumbs/${project}.webp`,
        trackNumber: trackNumber(release.title),
      },
    ];
  })
  .sort((a, b) => (a.trackNumber ?? "").localeCompare(b.trackNumber ?? ""));

/** Album first, then singles in album order. */
export const bluWorldItems: BluWorldItem[] = [bluAlbumItem, ...bluSingleItems];

export const giovaniBaroniItem = {
  href: "/giovani-baroni",
  title: "GIOVANI BARONI",
  thumb: "/images/thumbs/giovani-baroni.webp",
};

/**
 * Resolve a bLU tracklist line (e.g. "5. Mecânica dos Fluidos") to its page.
 * Returns null for unreleased tracks — render those plain/dimmed.
 * Driven by bluSingleItems so newly released singles unlock automatically.
 */
export function resolveBluTrackHref(track: string): string | null {
  return bluSingleItems.find((s) => track.includes(s.title))?.href ?? null;
}
