export type CabinetColor = "white" | "black";

export type AquariumStatus = "ready" | "placeholder";

export type AquariumVariant = {
  image: string | null;
  imageAlt: string;
};

export type AquariumProduct = {
  slug: string;
  name: string;
  series: string;
  groupSlug: string;
  featured?: boolean;
  volume?: string;
  status: AquariumStatus;
  source?: {
    status: "provided-text" | "verified" | "placeholder";
    note?: string;
    url?: string;
  };
  shortDescription: string;
  longDescription?: string;
  highlights?: string[];
  variants: Record<CabinetColor, AquariumVariant>;
  specs: Array<{ label: string; value: string }>;
};

export type AquariumGroup = {
  slug: string;
  name: string;
  source?: {
    status: "provided-text" | "verified" | "placeholder";
    note?: string;
    url?: string;
  };
  sidebarSummary: string;
  fullDescription: string;
  products: AquariumProduct[];
};

const MAX_NANO_DESCRIPTION =
  "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky. Jsou vybavené veškerou potřebnou technikou. Led světlo, čerpadlo i odpěňovač. Jsou připraveny i pro použití ReefAto i NanoMat, které k nim lze přikoupit.";

const MAX_NANO_GROUP_SIDEBAR_SUMMARY = "Akvária této skupiny mají filtraci umístěnou v zadní komoře.";

const MAX_NANO_GROUP_FULL_DESCRIPTION =
  "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky. Jsou vybavené veškerou potřebnou technikou. Led světlo, čerpadlo i odpěňovač. Jsou připraveny i pro použití ReefAto i NanoMat, které k nim lze přikoupit.";

const REEFER_G3_GROUP_FULL_DESCRIPTION = "Akvarijní designové komplety se vyznačují nejen dokonalým vzhledem, ale i snadnou obsluhovatelností.";

const maxNanoProducts: AquariumProduct[] = [
  {
    slug: "max-nano-g2-cube",
    name: "MAX NANO G2 cube",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "75 l",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky.",
    variants: {
      white: {
        image: "/assets/aquariums/max-nano-g2-cube-white.webp",
        imageAlt: "MAX NANO G2 cube with white cabinet",
      },
      black: {
        image: "/assets/aquariums/max-nano-g2-cube-black.webp",
        imageAlt: "MAX NANO G2 cube with black cabinet",
      },
    },
    specs: [{ label: "Volume", value: "75 l" }],
  },
  {
    slug: "max-nano-g2-peninsula",
    name: "MAX NANO G2 peninsula",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "100 l",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky.",
    variants: {
      white: {
        image: "/assets/aquariums/max-nano-g2-peninsula-white.webp",
        imageAlt: "MAX NANO G2 peninsula with white cabinet",
      },
      black: {
        image: "/assets/aquariums/max-nano-g2-peninsula-black.webp",
        imageAlt: "MAX NANO G2 peninsula with black cabinet",
      },
    },
    specs: [{ label: "Volume", value: "100 l" }],
  },
  {
    slug: "max-nano-g2-xl",
    name: "MAX NANO G2 XL",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "125 l",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky.",
    variants: {
      white: {
        image: "/assets/aquariums/max-nano-xl-white.webp",
        imageAlt: "MAX NANO G2 XL with white cabinet",
      },
      black: {
        image: "/assets/aquariums/max-nano-xl-black.webp",
        imageAlt: "MAX NANO G2 XL with black cabinet",
      },
    },
    specs: [{ label: "Volume", value: "125 l" }],
  },
  {
    slug: "max-nano-g2-xxl",
    name: "MAX NANO G2 XXL",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "200 l",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky.",
    variants: {
      white: {
        image: "/assets/aquariums/max-nano-g2-xxl-white.webp",
        imageAlt: "MAX NANO G2 XXL with white cabinet",
      },
      black: {
        image: "/assets/aquariums/max-nano-g2-xxl-black.webp",
        imageAlt: "MAX NANO G2 XXL with black cabinet",
      },
    },
    specs: [{ label: "Volume", value: "200 l" }],
  },
];

const reefMaxG3_60_90Products: AquariumProduct[] = [
  {
    slug: "reefer-max-170-g3",
    name: "REEFER MAX 170 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-60-90",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and shared 170/200 image asset.",
    },
    shortDescription: "Oblíbené modely: (délka 60–90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-170-200-g3-white.webp",
        imageAlt: "REEFER MAX 170 G3 shared white image with REEFER MAX 200 G3",
      },
      black: {
        image: "/assets/aquariums/reefer-max-170-200-g3-black.webp",
        imageAlt: "REEFER MAX 170 G3 shared black image with REEFER MAX 200 G3",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-200-g3",
    name: "REEFER MAX 200 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-60-90",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and shared 170/200 image asset.",
    },
    shortDescription: "Oblíbené modely: (délka 60–90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-170-200-g3-white.webp",
        imageAlt: "REEFER MAX 200 G3 shared white image with REEFER MAX 170 G3",
      },
      black: {
        image: "/assets/aquariums/reefer-max-170-200-g3-black.webp",
        imageAlt: "REEFER MAX 200 G3 shared black image with REEFER MAX 170 G3",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-250-g3",
    name: "REEFER MAX 250 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-60-90",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60–90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-250-g3-white.webp",
        imageAlt: "REEFER MAX 250 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-250-g3-black.webp",
        imageAlt: "REEFER MAX 250 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-300-g3",
    name: "REEFER MAX 300 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-60-90",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60–90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-300-g3-white.webp",
        imageAlt: "REEFER MAX 300 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-300-g3-black.webp",
        imageAlt: "REEFER MAX 300 G3 with black cabinet",
      },
    },
    specs: [],
  },
];

const reefMaxG3_120_150Products: AquariumProduct[] = [
  {
    slug: "reefer-max-350-g3",
    name: "REEFER MAX 350 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-120-150",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Dlouhé modely (délka 120–150 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-350-g3-white.webp",
        imageAlt: "REEFER MAX 350 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-350-g3-black.webp",
        imageAlt: "REEFER MAX 350 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-425-g3",
    name: "REEFER MAX 425 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-120-150",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Dlouhé modely (délka 120–150 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-425-g3-white.webp",
        imageAlt: "REEFER MAX 425 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-425-g3-black.webp",
        imageAlt: "REEFER MAX 425 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-525-g3",
    name: "REEFER MAX 525 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-120-150",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Dlouhé modely (délka 120–150 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-525-g3-white.webp",
        imageAlt: "REEFER MAX 525 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-525-g3-black.webp",
        imageAlt: "REEFER MAX 525 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-625-g3",
    name: "REEFER MAX 625 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-120-150",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Dlouhé modely (délka 120–150 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-625-g3-white.webp",
        imageAlt: "REEFER MAX 625 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-625-g3-black.webp",
        imageAlt: "REEFER MAX 625 G3 with black cabinet",
      },
    },
    specs: [],
  },
];

const reefMaxG3_180Products: AquariumProduct[] = [
  {
    slug: "reefer-max-750-g3",
    name: "REEFER MAX 750 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3-180",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Extra dlouhé modely (délka 180 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-750-g3-white.webp",
        imageAlt: "REEFER MAX 750 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-750-g3-black.webp",
        imageAlt: "REEFER MAX 750 G3 with black cabinet",
      },
    },
    specs: [],
  },
];

const reefMaxSProducts: AquariumProduct[] = [
  {
    slug: "reefer-max-s-550-g3",
    name: "REEFER MAX S-550 G3",
    series: "REEFER MAX S G3",
    groupSlug: "reefer-max-s-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-550-g3-white.webp",
        imageAlt: "REEFER MAX S-550 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-550-g3-black.webp",
        imageAlt: "REEFER MAX S-550 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-s-700-g3",
    name: "REEFER MAX S-700 G3",
    series: "REEFER MAX S G3",
    groupSlug: "reefer-max-s-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-700-g3-white.webp",
        imageAlt: "REEFER MAX S-700 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-700-g3-black.webp",
        imageAlt: "REEFER MAX S-700 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-s-850-g3",
    name: "REEFER MAX S-850 G3",
    series: "REEFER MAX S G3",
    groupSlug: "reefer-max-s-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-850-g3-white.webp",
        imageAlt: "REEFER MAX S-850 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-850-g3-black.webp",
        imageAlt: "REEFER MAX S-850 G3 with black cabinet",
      },
    },
    specs: [],
  },
  {
    slug: "reefer-max-s-1000-g3",
    name: "REEFER MAX S-1000 G3",
    series: "REEFER MAX S G3",
    groupSlug: "reefer-max-s-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-1000-g3-white.webp",
        imageAlt: "REEFER MAX S-1000 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-1000-g3-black.webp",
        imageAlt: "REEFER MAX S-1000 G3 with black cabinet",
      },
    },
    specs: [],
  },
];

const reefMaxPeninsulaProducts: AquariumProduct[] = [
  {
    slug: "reefer-max-peninsula-350-g3",
    name: "REEFER MAX Peninsula 350 G3",
    series: "REEFER MAX Peninsula G3",
    groupSlug: "reefer-max-peninsula-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-peninsula-350-g3-white.webp",
        imageAlt: "REEFER MAX Peninsula 350 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-peninsula-350-g3-black.webp",
        imageAlt: "REEFER MAX Peninsula 350 G3 with black cabinet",
      },
    },
    specs: [{ label: "Length", value: "96 cm" }],
  },
  {
    slug: "reefer-max-peninsula-500-g3",
    name: "REEFER MAX Peninsula 500 G3",
    series: "REEFER MAX Peninsula G3",
    groupSlug: "reefer-max-peninsula-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-peninsula-500-g3-white.webp",
        imageAlt: "REEFER MAX Peninsula 500 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-peninsula-500-g3-black.webp",
        imageAlt: "REEFER MAX Peninsula 500 G3 with black cabinet",
      },
    },
    specs: [{ label: "Length", value: "125 cm" }],
  },
];

const reefMaxSPeninsulaProducts: AquariumProduct[] = [
  {
    slug: "reefer-max-peninsula-s-700-g3",
    name: "REEFER MAX Peninsula S-700 G3",
    series: "REEFER MAX S Peninsula G3",
    groupSlug: "reefer-max-s-peninsula-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "Oblíbené modely: (délka 60-90 cm)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-700-g3-white.webp",
        imageAlt: "REEFER MAX S-700 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-700-g3-black.webp",
        imageAlt: "REEFER MAX S-700 G3 with black cabinet",
      },
    },
    specs: [{ label: "Length", value: "151 cm" }],
  },
  {
    slug: "reefer-max-peninsula-s-950-g3",
    name: "REEFER MAX Peninsula S-950 G3",
    series: "REEFER MAX S Peninsula G3",
    groupSlug: "reefer-max-s-peninsula-g3",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    shortDescription: "REEFER MAX S -Peninsula (průhledová akvária, hliníkový rám)",
    variants: {
      white: {
        image: "/assets/aquariums/reefer-max-s-peninsula-950-g3-white.webp",
        imageAlt: "REEFER MAX Peninsula S-950 G3 with white cabinet",
      },
      black: {
        image: "/assets/aquariums/reefer-max-s-peninsula-950-g3-black.webp",
        imageAlt: "REEFER MAX Peninsula S-950 G3 with black cabinet",
      },
    },
    specs: [{ label: "Length", value: "200 cm" }],
  },
];

export const AQUARIUM_GROUPS: AquariumGroup[] = [
  {
    slug: "max-nano-g2",
    name: "MAX NANO G2",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    sidebarSummary: MAX_NANO_GROUP_SIDEBAR_SUMMARY,
    fullDescription: MAX_NANO_GROUP_FULL_DESCRIPTION,
    products: maxNanoProducts,
  },
  {
    slug: "reefer-max-g3-60-90",
    name: "REEFER MAX G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    sidebarSummary: "Oblíbené modely: (délka 60–90 cm)",
    fullDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    products: reefMaxG3_60_90Products,
  },
  {
    slug: "reefer-max-g3-120-150",
    name: "REEFER MAX G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and source-mapped image assets.",
    },
    sidebarSummary: "Dlouhé modely (délka 120–150 cm)",
    fullDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    products: reefMaxG3_120_150Products,
  },
  {
    slug: "reefer-max-g3-180",
    name: "REEFER MAX G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "Extra dlouhé modely (délka 180 cm)",
    fullDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    products: reefMaxG3_180Products,
  },
  {
    slug: "reefer-max-s-g3",
    name: "REEFER MAX S G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "Prémiová hliníková konstrukce s vyměnitelnými panely.",
    fullDescription:
      "Je navržen jako prémiový formát. Využívá robustní hliníkovou konstrukci (super-structure) s vyměnitelnými vnějšími panely, což je odolnější a modernější řešení než klasická překližka.",
    products: reefMaxSProducts,
  },
  {
    slug: "reefer-max-peninsula-g3",
    name: "REEFER MAX Peninsula G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "REEFER MAX Peninsula (průhledová akvária)",
    fullDescription: "REEFER MAX Peninsula (průhledová akvária)",
    products: reefMaxPeninsulaProducts,
  },
  {
    slug: "reefer-max-s-peninsula-g3",
    name: "REEFER MAX S Peninsula G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "REEFER MAX S -Peninsula (průhledová akvária, hliníkový rám)",
    fullDescription: "REEFER MAX S -Peninsula (průhledová akvária, hliníkový rám)",
    products: reefMaxSPeninsulaProducts,
  },
];

export const AQUARIUM_CATALOG = AQUARIUM_GROUPS.flatMap((group) => group.products);
