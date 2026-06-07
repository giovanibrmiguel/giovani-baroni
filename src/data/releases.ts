/**
 * RELEASES DATA
 *
 * Add, edit, or remove releases here.
 *
 * To add a new release:
 *   1. Copy an existing release object
 *   2. Paste it inside the releases array
 *   3. Update all fields
 *   4. Set featured: true if it should appear on the homepage
 *
 * The "project" field must match a project slug in src/content/projects/
 */

export type StreamingLinks = {
  spotify?: string;
  bandcamp?: string;
  youtube?: string;
  appleMusic?: string;
  soundcloud?: string;
  tidal?: string;
};

export type Release = {
  id: string;
  title: string;
  // "blu" → featured sub-page; "giovani-baroni" → GB page; "sukya-porno" → sukya page
  project: "blu" | "sukya-porno" | "giovani-baroni";
  projectDisplayName: string;
  type: "album" | "ep" | "single" | "live" | "compilation";
  year: number;
  // Path relative to /public/ — e.g., "/images/projects/blu-cover.jpg"
  coverImage: string;
  shortDescription: string;
  shortDescriptionPt?: string;
  shortDescriptionEs?: string;
  longDescription: string;
  links: StreamingLinks;
  // If true, appears in featured sections on homepage and music page
  featured: boolean;
  // Raw iframe embed HTML from Spotify, Bandcamp, or YouTube
  // Get this from the platform's "Share → Embed" option
  embedCode?: string;
  credits?: string[];
  tracklist?: string[];
};

export const releases: Release[] = [
  // ── bLU ─────────────────────────────────────────────────────────────────
  {
    id: "blu-album",
    title: "bLU",
    project: "blu",
    projectDisplayName: "GIOVANI BARONI",
    type: "album",
    year: 2026,
    coverImage: "/images/blu/blu_v5_small.png",
    shortDescription:
      "Upcoming debut solo album — TBD.",
    shortDescriptionPt:
      "Álbum de estreia solo em breve — TBD.",
    shortDescriptionEs:
      "Álbum debut solista en camino — próximamente.",
    longDescription: `bLU is Giovani Baroni's debut solo album — a conceptual, narrative record designed to be listened to as a single continuous journey, from beginning to end.

The album began taking shape after Baroni moved to Mexico City, where daily life in a new language and a new continent pushed him toward a deeper introspection. Drawing from psychedelic rock, shoegaze, Brazilian indie, prog, and emo, bLU uses the ocean as both metaphor and sonic texture — fish, water, waves, and the abyss running throughout its lyrics and production.

Each track flows into the next. Themes of internal transformation, generational trauma, love, ego, eastern philosophy, and the persistence of the inner child connect the ten pieces into one immersive whole.

Produced independently — vocals, guitars, and keys recorded in Mexico City; bass, mixing, and mastering by Pedro Serapicos in Berlin; drums by Bianca Predieri in São Paulo. The album also features guest vocals from Jorge Sultzer (Mexico City) and co-writing from Ricardo Baroni and Mardem Humberto.`,
    links: {
      spotify: "", // UPDATE: add Spotify album link when released
      bandcamp: "",
      youtube: "",
      appleMusic: "",
    },
    featured: true,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/PLACEHOLDER" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Vocals, guitars, keys, writing, and production — Giovani Baroni (Mexico City)",
      "Bass, mixing, and mastering — Pedro Serapicos (Berlin)",
      "Drums — Bianca Predieri (São Paulo)",
      'Guest vocals on "Efervescente" — Jorge Sultzer (Mexico City)',
      "Video production — Léo Lopes (Recife) and Luca Tornato (The Hague)",
      '"Fishy Boy" co-written with Ricardo Baroni (São Paulo) and Mardem Humberto (Goiânia)',
    ],
    tracklist: [
      "1. Ambiência Aquática Nº 5",
      "2. Peixes Estranhos",
      "3. Norte",
      "4. O Mundo dos Sonhos",
      "5. Mecânica dos Fluidos",
      "6. Efervescente",
      "7. O Bicho que Sabia Demais",
      "8. Fishy Boy",
      "9. Paseo Largo",
      "10. O Rio",
    ],
  },

  // ── Stop & Go Station ────────────────────────────────────────────────────
  {
    id: "stop-and-go-ep",
    title: "Stop & Go Station",
    project: "giovani-baroni",
    projectDisplayName: "giovani-baroni",
    type: "ep",
    year: 2023,
    coverImage: "/images/projects/stop-and-go-cover-placeholder.jpg",
    shortDescription:
      "Stop & Go Station is an intimate, lo-fi and dreamy EP consisting of 4 tracks, shaped by home-recorded textures, and references to 90s video games. Blending Brazilian influences, indie rock, and nostalgia, Giovani Baroni builds a playful yet intricate sound world with echoes of Super Mario 64, Alceu Valença, and The Strokes. Closing track \"Transbordar\" features Luca Tornato.",
    shortDescriptionPt:
      "Stop & Go Station é um EP íntimo, lo-fi e onírico com 4 faixas, feito de texturas caseiras e referências a videogames dos anos 90. Mistura influências brasileiras, indie rock e nostalgia num universo sonoro brincalhão e intrincado, com ecos de Super Mario 64, Alceu Valença e The Strokes. A faixa final \"Transbordar\" tem Luca Tornato.",
    shortDescriptionEs:
      "Stop & Go Station es un EP íntimo, lo-fi y onírico de 4 tracks, hecho de texturas caseras y referencias a videojuegos de los 90. Mezcla influencias brasileñas, indie rock y nostalgia en un universo sonoro juguetón e intrincado, con ecos de Super Mario 64, Alceu Valença y The Strokes. El último track \"Transbordar\" tiene a Luca Tornato.",
    longDescription: `Stop & Go Station is an early solo EP by Giovani Baroni. A collection of songs written during a period of transit and uncertainty.

The EP is sparse and introspective, shaped by acoustic textures, layered vocals, and the ambience of in-between places.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/5le5q8tskih5LXdnAmK8cC",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5le5q8tskih5LXdnAmK8cC" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Written and produced by Giovani Baroni",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. Jova Haze",
      "2. Polinômios (File Select)",
      "3. Kebab",
      "4. Transbordar",
    ],
  },

  // ── Ruído Branco — Single ────────────────────────────────────────────────
  {
    id: "ruido-branco-single",
    title: "Ruído Branco",
    project: "giovani-baroni",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2024,
    coverImage: "/images/projects/ruido-branco-placeholder.jpg",
    shortDescription: "Ruído Branco is about wanting everything at once: every dream, every place, every possible version of everything. The idea comes from white noise itself, all frequencies sounding together, and turns it into a digital nostalgic metaphor like the loud static of an old tube TV.",
    shortDescriptionPt: "Ruído Branco é sobre querer tudo ao mesmo tempo: cada sonho, cada lugar, cada versão possível de tudo. A ideia vem do ruído branco em si — todas as frequências soando juntas — e vira uma metáfora digital e nostálgica, tipo o chiado de uma TV de tubo antiga.",
    shortDescriptionEs: "Ruído Branco es sobre querer todo al mismo tiempo: cada sueño, cada lugar, cada versión posible de todo. La idea viene del ruido blanco en sí — todas las frecuencias sonando juntas — y se convierte en una metáfora digital y nostálgica, como la estática de un televisor de tubo antiguo.",
    longDescription: `[UPDATE: Add description for Ruído Branco]`,
    links: {
      spotify: "https://open.spotify.com/album/5yBS1vVVYiVACkOwDZ8pv1",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/5yBS1vVVYiVACkOwDZ8pv1" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },

  // ── Sleep — Single ───────────────────────────────────────────────────────
  {
    id: "sleep-single",
    title: "Sleep",
    project: "giovani-baroni",
    projectDisplayName: "Giovani Baroni",
    type: "single",
    year: 2024,
    coverImage: "/images/projects/sleep-placeholder.jpg",
    shortDescription: "Sleep is a downer single wrapped in a dreamlike haze between emo, shoegaze, and lo-fi Rock Triste. Washed-out guitars, lethargic vocals, half-awake vocals, and jungle-inspired beats.",
    shortDescriptionPt: "Sleep é um single deprê envolto numa névoa onírica entre emo, shoegaze e lo-fi Rock Triste. Guitarras desbotadas, vocais letárgicos, meio adormecidos, e batidas com influência de jungle.",
    shortDescriptionEs: "Sleep es un single caído envuelto en una neblina onírica entre emo, shoegaze y lo-fi Rock Triste. Guitarras desteñidas, vocales letárgicos, medio dormidos, y beats con influencia de jungle.",
    longDescription: ` `,
    links: {
      spotify: "https://open.spotify.com/album/4ZRBXxx4bHWWcou1cHR1Zi",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4ZRBXxx4bHWWcou1cHR1Zi" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
  },

  // ── sukya || porno — TALASSOFOBIA ────────────────────────────────────────
  {
    id: "sukya-porno-ep1",
    title: "TALASSOFOBIA",
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2019,
    coverImage: "/images/projects/talassofobia-placeholder.jpg",
    shortDescription:
      "The second EP from sukya || porno: three tracks that push further into synthesizers and fractured instrumental passages with odd time signatures, opening space for Baroni's guitar and vocals to cut through. Love, despair, and the daily pressure of ordinary city life run through the record, filtered through a sound that fuses the sloppy grit of Pavement with the arrangement complexity of King Crimson.",
    shortDescriptionPt:
      "O segundo EP do sukya || porno: três faixas que aprofundam os sintetizadores e as passagens instrumentais com tempos quebrados, abrindo espaço para as guitarras e vocais de Baroni se exporem. Amor, desespero e a pressão do cotidiano são as temáticas, filtradas por um som que busca a fusão do desleixo sujo do Pavement com a complexidade de arranjos do King Crimson.",
    shortDescriptionEs:
      "TALASSOFOBIA es el segundo EP de sukya || porno — tres tracks que profundizan en los sintetizadores y pasajes instrumentales con tiempos rotos, abriendo espacio para las guitarras y la voz de Baroni. Amor, desesperación y la presión del día a día son las temáticas, filtradas por un sonido que busca la fusión del descuido sucio de Pavement con la complejidad de arreglos de King Crimson.",
    longDescription: ` .

Raw and immediate, the debut EP established the band's sonic identity: distorted guitars, fractured rhythms, and an emotional directness that resists easy categorization.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/1FIytwlVndlrmYbITk0Ibt",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1FIytwlVndlrmYbITk0Ibt" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "sukya || porno is Giovani Baroni and [UPDATE: bandmate name]",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. Elos Atemporais",
      "2. Um Retalho",
      "3. APORIA",
    ],
  },

  // ── sukya || porno — Quando a Urbe Vira Mange e Nosso Sangue, Lama ──────
  {
    id: "sukya-porno-ep2",
    title: "Quando a Urbe Vira Mange e Nosso Sangue, Lama",
    project: "sukya-porno",
    projectDisplayName: "sukya || porno",
    type: "ep",
    year: 2017,
    coverImage: "/images/projects/urbe-placeholder.jpg",
    shortDescription:
      "Born out of São Paulo’s concrete, rain, crowds and quiet frustration, the record sounds like a dialogue between city life and inner turbulence. The band mixes regional Brazilian influences, progressive rock and experimental ideas without trying to fit neatly into one place.",
    shortDescriptionPt:
      "Nascido do concreto, da chuva, das multidões e da frustração silenciosa de São Paulo, o disco soa como um diálogo entre a cidade e a turbulência interna. A banda mistura influências regionais brasileiras, rock progressivo e ideias experimentais sem se encaixar em lugar nenhum.",
    shortDescriptionEs:
      "Nacido del concreto, la lluvia, las multitudes y la frustración silenciosa de São Paulo, el disco suena como un diálogo entre la ciudad y la turbulencia interna. La banda mezcla influencias regionales brasileñas, rock progresivo e ideas experimentales sin encajar en ningún lado.",
    longDescription: `The second EP from sukya || porno. More expansive than the first, the band pushes further into texture, atmosphere, and the complicated space between noise and melody.

[UPDATE: Replace with actual EP description]`,
    links: {
      spotify: "https://open.spotify.com/album/3gsi2BJoBKdhXobj89XuYq",
      bandcamp: "",
      youtube: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/3gsi2BJoBKdhXobj89XuYq" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "sukya || porno is Giovani Baroni and [UPDATE: bandmate name]",
      "[UPDATE: additional credits]",
    ],
    tracklist: [
      "1. Rua",
      "2. Desmoronar: Intro, Pt. I e II",
      "3. Fótons",
      "4. Interlúdio",
      "5. Canvas",
      "6. Desmoronar: Pt. III e IV",
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Get all featured releases */
export const featuredReleases = releases.filter((r) => r.featured);

/** Get releases for a project slug */
export function getReleasesByProject(
  projectSlug: Release["project"]
): Release[] {
  return releases.filter((r) => r.project === projectSlug);
}

/**
 * Get all GIOVANI BARONI releases: includes both the "giovani-baroni"
 * releases and the "blu" album (which lives on its own featured sub-page).
 */
export function getGiovaniBaroniReleases(): Release[] {
  return releases
    .filter((r) => r.project === "giovani-baroni" || r.project === "blu")
    .sort((a, b) => b.year - a.year);
}

/** Get the most recent release (by year) */
export const latestRelease = releases.reduce((a, b) =>
  a.year > b.year ? a : b
);
