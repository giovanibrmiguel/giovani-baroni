/**
 * LYRICS & CHORDS DATA
 *
 * Each entry maps to a song with optional external links.
 * `project` must match a project slug.
 * `release` is a display label (EP/album name shown as a group header).
 * `genius`  → full lyrics on Genius
 * `cifra`   → chords/tab on CifraClub
 */

export type LyricEntry = {
  title: string;
  project: "sukya-porno" | "giovani-baroni";
  release: string;
  genius?: string;
  cifra?: string;
};

export const lyrics: LyricEntry[] = [
  // ── TALASSOFOBIA (2019) ──────────────────────────────────────────────────
  {
    title: "Elos Atemporais",
    project: "sukya-porno",
    release: "TALASSOFOBIA",
    genius: "https://genius.com/Sukya-porno-elos-atemporais-lyrics",
  },
  {
    title: "Um Retalho",
    project: "sukya-porno",
    release: "TALASSOFOBIA",
    genius: "https://genius.com/Sukya-porno-um-retalho-lyrics",
  },
  {
    title: "APORIA",
    project: "sukya-porno",
    release: "TALASSOFOBIA",
    genius: "https://genius.com/Sukya-porno-aporia-lyrics",
  },

  // ── Stop & Go Station (2023) ─────────────────────────────────────────────
  {
    title: "Jova Haze",
    project: "giovani-baroni",
    release: "Stop & Go Station",
    genius: "https://www.letras.mus.br/giovani-baroni/jova-haze/",
  },
  {
    title: "Polinômios (File Select)",
    project: "giovani-baroni",
    release: "Stop & Go Station",
    genius: "https://www.letras.mus.br/giovani-baroni/polinomios-file-select/",
  },
  {
    title: "Kebab",
    project: "giovani-baroni",
    release: "Stop & Go Station",
    genius: "https://www.letras.mus.br/giovani-baroni/kebab/",
  },

  // ── Singles ───────────────────────────────────────────────────────────────
  {
    title: "Ruído Branco",
    project: "giovani-baroni",
    release: "Singles",
    genius: "https://www.letras.mus.br/giovani-baroni/ruido-branco/",
  },
  {
    title: "Sleep",
    project: "giovani-baroni",
    release: "Singles",
    genius: "https://www.letras.mus.br/giovani-baroni/sleep/",
  },

  // ── Quando a Urbe Vira Mangue (2017) ─────────────────────────────────────
  {
    title: "Rua",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    genius: "https://genius.com/Sukya-porno-rua-lyrics",
    cifra: "https://www.cifraclub.com/sukya/rua/",
  },
  {
    title: "Desmoronar: Intro, Pt. I e II",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    genius: "https://genius.com/Sukya-porno-desmoronar-intro-pt-i-e-ii-lyrics",
  },
  {
    title: "Fótons",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    genius: "https://www.cifraclub.com/sukya/fotons/letra/original.html",
  },
  {
    title: "Interlúdio",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    genius: "https://www.cifraclub.com/sukya/interludio/letra/original.html",
  },
  {
    title: "Canvas",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    cifra: "https://www.cifraclub.com/sukya/canvas/",
  },
  {
    title: "Desmoronar: Pt. III e IV",
    project: "sukya-porno",
    release: "Quando a Urbe Vira Mangue",
    genius: "https://www.cifraclub.com/sukya/desmoronar-intro-ptiii-e-iv/letra/original.html",
  },
];

export function getLyricsByProject(project: LyricEntry["project"]) {
  return lyrics.filter((l) => l.project === project);
}
