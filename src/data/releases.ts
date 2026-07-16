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
  youtubeMusic?: string;
  appleMusic?: string;
  amazonMusic?: string;
  deezer?: string;
  bandcamp?: string;
  youtube?: string;
  soundcloud?: string;
  tidal?: string;
};

export type Release = {
  id: string;
  title: string;
  // "blu" → featured sub-page; "mecanicadosfluidos" → single sub-page; "fishyboy" → single sub-page; "giovani-baroni" → GB page; "sukya-porno" → sukya page
  project: "blu" | "mecanicadosfluidos" | "fishyboy" | "sukya-porno" | "giovani-baroni";
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
  // ── /listen page controls ─────────────────────────────────────────────────
  // Set to true on release day to flip the /listen page to stream links.
  released?: boolean;
  // Human-readable release date shown on /listen, e.g. "10 DE JULHO, 2026".
  // Displayed as "EM BREVE – [releaseDateLabel]" when released is false.
  releaseDateLabel?: string;
  // Links shown before release — use artist profile URLs (phase 1: "follow")
  // or a previous released track (phases 3, 5: "listen while you wait").
  preReleaseLinks?: StreamingLinks;
  // Controls button CTA on /listen during pre-release.
  preReleaseCta?: "follow" | "listen";
  // Optional subtitle shown above buttons on /listen during pre-release,
  // e.g. "segue ae, pra ouvir quando sair".
  preReleaseSubtitle?: string;
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

  // ── Mecânica dos Fluidos — Single ────────────────────────────────────────
  {
    id: "mecanicadosfluidos-single",
    title: "Mecânica dos Fluidos",
    project: "mecanicadosfluidos",
    projectDisplayName: "GIOVANI BARONI",
    type: "single",
    year: 2026,
    coverImage: "/images/mecanicadosfluidos/mecanicadosfluidos.jpg",
    shortDescription:
      "The first single from bLU: a tender two-minute piece of Brazilian Rock Triste shaped by aquatic shoegaze textures.",
    shortDescriptionPt:
      "O primeiro single de bLU: uma delicada canção de dois minutos de Rock Triste brasileiro, marcada por texturas de shoegaze aquático.",
    shortDescriptionEs:
      "El primer sencillo de bLU: una delicada pieza de dos minutos de Rock Triste brasileño, marcada por texturas de shoegaze aquatico.",
    longDescription: `"Mecânica dos Fluidos" is the first single from bLU, Giovani Baroni's debut solo album arriving in September 2026. At two minutes, it is the shortest and most immediate song on the record: a tender piece of Brazilian alternative rock shaped by shoegaze textures, soft melancholy, and the direct emotional language of Rock Triste.

The title comes from a fluid mechanics class Baroni took at university, where he became interested in the way invisible forces — currents, pressure, and movement — appear not only in physics, but in ordinary life. In the song, that image becomes a way to write about love as something innocent and transformative.`,
    links: {
      spotify: "https://open.spotify.com/album/31NS3tSydJaSED9iYEBVdV",
      appleMusic: "https://music.apple.com/us/song/mec%C3%A2nica-dos-fluidos/6783129020",
      // youtube: "https://youtu.be/iK4oo1eGhy4", // link to individual video
      youtube: "https://www.youtube.com/watch?v=iK4oo1eGhy4&list=PLQOQ2QTpOP7yOP7fq-XYHADFOKVjLBr27", // link to playlist
      deezer: "https://link.deezer.com/s/33MDXSb3XOFp0JZKi4XMW",
      amazonMusic: "https://music.amazon.com.au/albums/B0H6F9MY2W?marketplaceId=A39IBJ37TRP1C6&musicTerritory=AU&ref=dm_sh_Zsg7HKCFTlYE2TEh1oz8UoqR2",
      youtubeMusic: "https://music.youtube.com/watch?v=0vbe0cA9or8&si=LRLXR0xBs3IwokX1",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/PLACEHOLDER" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Vocals, guitars, keys, writing, and production — Giovani Baroni (Mexico City)",
      "Bass, mixing, and mastering — Pedro Serapicos (Berlin)",
      "Drums — Bianca Predieri (São Paulo)",
      "Inspiration — Juliana Morette (Rio de Janeiro)",
    ],
    // ── /listen page: pre-release state ─────────────────────────────────────
    // Flip to released: true on release day and fill in track URLs above.
    released: true,
    releaseDateLabel: "10 DE JULHO, 2026",
    preReleaseCta: "follow",
    preReleaseSubtitle: "escuta ae na moral, tá fera",
    preReleaseLinks: {
      spotify: "https://open.spotify.com/artist/6qme9zfWubX4UWQQV8pVPY",
      appleMusic: "https://music.apple.com/us/artist/giovani-baroni/1663980223",
      youtube: "https://www.youtube.com/@sukyarecords",
      deezer: "https://www.deezer.com/en/artist/196727277",
      amazonMusic: "https://music.amazon.com.mx/artists/B0BRYQLL26/giovani-baroni",
      youtubeMusic: "https://music.youtube.com/channel/UCinFYYohAKD0ENr6jxGmqMw",
    },
  },

  // ── Fishy Boy — Single ───────────────────────────────────────────────────
  // TODO: uncomment when promoting Fishy Boy
  /* {
    id: "fishyboy-single",
    title: "Fishy Boy",
    project: "fishyboy",
    projectDisplayName: "GIOVANI BARONI",
    type: "single",
    year: 2026,
    coverImage: "/images/fishyboy/fishyboy.jpg",
    shortDescription:
      "The second single from bLU: a progressive emo fish rock anthem about swimming.",
    shortDescriptionPt:
      "O segundo single de bLU: um hino de rock emo progressivo sobre nadar.",
    shortDescriptionEs:
      "El segundo sencillo de bLU: un himno de rock emo progresivo sobre nadar.",
    longDescription: `"Fishy Boy" is the second single from bLU, Giovani Baroni's debut solo album arriving in 2026. A progressive emo fish rock anthem about getting deep into your own head and somehow coming out weirder on the other side.`,
    links: {
      spotify: "",
      youtubeMusic: "",
      appleMusic: "",
      amazonMusic: "",
      deezer: "",
    },
    featured: false,
    embedCode: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/PLACEHOLDER" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
    credits: [
      "Vocals, guitars, keys, writing, and production — Giovani Baroni (Mexico City)",
      "Bass, mixing, and mastering — Pedro Serapicos (Berlin)",
      "Drums — Bianca Predieri (São Paulo)",
      "Writing — Mardem Humberto (Goiânia)",
      "Writing — Ricardo Baroni (São Paulo)",
    ],
  }, */

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
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_lxTD5H9m7DwsT5gWGt9XECZMDqGpjzLFE&si=xMH6bGqMiXp3zXBp",
      appleMusic: "https://music.apple.com/us/album/stop-go-station-ep/1663981616",
      amazonMusic: "https://music.amazon.com/albums/B0BRYT15ZK",
      deezer: "https://www.deezer.com/en/album/395219677",
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
      youtubeMusic: "https://music.youtube.com/watch?v=OFBGyIn83bQ",
      appleMusic: "https://music.apple.com/us/album/ruído-branco/1725066027?i=1725066028&at=1000lHKX&ct=linktree_http&itsct=lt_m&itscg=30200&ls=1",
      amazonMusic: "https://music.amazon.com/albums/B0CRXWHVSD?trackAsin=B0CRXXDBY9",
      deezer: "https://www.deezer.com/en/track/2616103732",
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
      youtubeMusic: "https://music.youtube.com/watch?v=FDPaR8rxo84",
      appleMusic: "https://music.apple.com/us/album/sleep/1754079916?i=1754079917",
      amazonMusic: "https://music.amazon.com/albums/B0D81K562P?trackAsin=B0D8278DG9",
      deezer: "https://www.deezer.com/en/track/2865365672",
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
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mBOJHn557KoyoC4OedA73O6fCWUuZ3ia8",
      appleMusic: "https://music.apple.com/us/album/talassofobia-single/1446440427",
      amazonMusic: "https://music.amazon.com/albums/B07LC38JYQ",
      deezer: "https://www.deezer.com/en/album/81716042",
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

  // ── sukya || porno — Quando a Urbe Vira Mangue e Nosso Sangue, Lama ─────
  {
    id: "sukya-porno-ep2",
    title: "Quando a Urbe Vira Mangue e Nosso Sangue, Lama",
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
      youtubeMusic: "https://music.youtube.com/playlist?list=OLAK5uy_mZ5UpqkOrnJEEvIoqNE541VL34sGzYsIk",
      appleMusic: "https://music.apple.com/us/album/quando-a-urbe-vira-mangue-e-nosso-sangue-lama-ep/1281169943?at=1000lHKX&ct=linktree_http&itsct=lt_m&itscg=30200&ls=1",
      amazonMusic: "https://music.amazon.com/albums/B0761WYQSS",
      deezer: "https://www.deezer.com/en/album/47822662",
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
 * Get all GIOVANI BARONI releases: includes "giovani-baroni", "blu",
 * and single sub-pages like "mecanicadosfluidos".
 */
export function getGiovaniBaroniReleases(): Release[] {
  return releases
    .filter(
      (r) =>
        r.project === "giovani-baroni" ||
        r.project === "blu" ||
        r.project === "mecanicadosfluidos" ||
        r.project === "fishyboy"
    )
    .sort((a, b) => b.year - a.year);
}

/** Get the most recent release (by year) */
export const latestRelease = releases.reduce((a, b) =>
  a.year > b.year ? a : b
);
