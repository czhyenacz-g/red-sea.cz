export type ReefbeatImage = {
  src: string;
  alt: string;
  label?: string;
  sourceNote?: string;
};

export type ReefbeatProduct = {
  slug: string;
  title: string;
  text: string;
  images: ReefbeatImage[];
};

export const REEFBEAT_INTRO =
  "Zařízení z této skupiny se dají ovládat přes aplikaci The ReefBeat Ecosystem na mobilních telefonech či tabletech a uživatel je tak může ovládat či kontrolovat na dálku.";

export const REEFBEAT_APP_SCREENSHOTS: ReefbeatImage[] = [
  {
    src: "/assets/reefbeat/reefbeat-app-homepage.webp",
    alt: "ReefBeat App homepage",
    label: "Homepage",
  },
  {
    src: "/assets/reefbeat/reefbeat-app-dashboard.webp",
    alt: "ReefBeat App dashboard",
    label: "Dashboard",
  },
  {
    src: "/assets/reefbeat/reefbeat-app-library.webp",
    alt: "ReefBeat App library",
    label: "Library",
  },
  {
    src: "/assets/reefbeat/reefbeat-app-acclimation.webp",
    alt: "ReefBeat App acclimation",
    label: "Acclimation",
  },
];

export const REEFBEAT_HERO_IMAGE: ReefbeatImage = {
  src: "/assets/reefbeat/reefbeat-app-hero.webp",
  alt: "ReefBeat App group photo",
};

export const REEFBEAT_PRODUCTS: ReefbeatProduct[] = [
  {
    slug: "reefled-g2",
    title: "ReefLed G2",
    text: "Chytrá (smart) programovatelná LED světla o výkonu 60, 115 a 170 Watů.",
    images: [
      {
        src: "/assets/reefbeat/reefled-g2-170.webp",
        alt: "ReefLED G2 170",
        label: "170 W",
      },
    ],
  },
  {
    slug: "reefmat",
    title: "ReefMat",
    text: "Pásový mechanický filtr ovládaný pomocí aplikace. Dodává se ve třech provedeních pro různě velké nádrže – 250, 500 a 1200",
    images: [
      {
        src: "/assets/reefbeat/reefmat.webp",
        alt: "ReefMat",
      },
    ],
  },
  {
    slug: "reefato-plus",
    title: "ReefAto+ 3 v 1",
    text: "Toto zařízení je určeno k doplňování odpařené vody a hlídání optimální teploty vody. Zařízení disponuje ještě čidlem monitorujícím případné úniky vody na podlahu.",
    images: [
      {
        src: "/assets/reefbeat/reefato-plus.webp",
        alt: "ReefATO+ 3 v 1",
      },
    ],
  },
  {
    slug: "reefwave",
    title: "ReefWave",
    text: "Vnitřní čerpadla vytvářející mohutné a zároveň jemné proudění různých frekvencí vln. Dodávají se dle výkonu 25 a 45. Tato čerpadla mají dvoje řízení přes aplikaci a také pomoci ovládacího panelu.",
    images: [
      {
        src: "/assets/reefbeat/reefwave-45-front.webp",
        alt: "ReefWave45 Front",
      },
    ],
  },
  {
    slug: "reefrun-g2-dc-pump",
    title: "Reef Run G2 DC pump",
    text: "Tlačná říditelná čerpadla o výkonu 4 000, 6 000, 8 000 a 12 000 l/h. Tato čerpadla mají dvoje řízení — přes aplikaci po připojení na duální kontroler anebo přímo tlačítky na průtokovém regulátoru.",
    images: [
      {
        src: "/assets/reefbeat/reefrun-g2-family.webp",
        alt: "ReefRun G2 family",
      },
    ],
  },
  {
    slug: "reefer-dc-skimmer",
    title: "REEFER DC Skimmer",
    text: "REEFER DC Skimmer - vysoce účinný odpěňovač v provedení podle výkonu 300,600,900 odlišující se od základních AC modelů samonastavitelnou výškou hladiny pěny v komoře odpěňovače. Toto zařízení se ovládá pomoci ReefRun Dual Controller (není součástí balení), který zároveň může ovládat i čerpadlo Reef Run G2 Pump",
    images: [
      {
        src: "/assets/reefbeat/reefer-dc-skimmer.webp",
        alt: "REEFER DC Skimmer",
      },
    ],
  },
  {
    slug: "reefdose",
    title: "ReefDose",
    text: "Dávkovací čerpadla pro přesné dávkování přípravků. Jsou k dispozici dvě provedení podle počtu dávkovacích hlav. ReefDose2 a ReefDose4.",
    images: [
      {
        src: "/assets/reefbeat/reefdose-2.webp",
        alt: "ReefDose 2",
        label: "ReefDose 2",
      },
      {
        src: "/assets/reefbeat/reefdose-4.webp",
        alt: "ReefDose 4",
        label: "ReefDose 4",
      },
    ],
  },
];
