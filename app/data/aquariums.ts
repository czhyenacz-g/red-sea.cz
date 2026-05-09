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
  "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories. [i]";

const MAX_NANO_GROUP_SIDEBAR_SUMMARY = "Rear filtration chamber all-in-one systems. [i]";

const MAX_NANO_GROUP_FULL_DESCRIPTION =
  "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories, available in four types, in white and black finish. [i]";

const REEFER_G3_GROUP_SIDEBAR_SUMMARY = "Reef-ready systems with redesigned flow. [i]";

const REEFER_G3_GROUP_FULL_DESCRIPTION =
  "Reef-ready systems with redesigned flow system, hydrodynamically superior piping, up to 50% more water circulation, customizable with preferred equipment, extended warranty up to 5 years. [i]";

const REEFER_G3_HIGHLIGHTS = [
  "Reef-ready systems [i]",
  "Redesigned flow system [i]",
  "Hydrodynamically superior piping [i]",
  "Up to 50% more water circulation [i]",
  "Customizable with preferred equipment [i]",
  "Extended warranty up to 5 years [i]",
];

const REEFER_G3_SERIES_RULES = [
  "Regular and Peninsula designs",
  "Eurobraced for 425 models and above",
  "ReefMat-ready sumps",
  "Integrated smart ATO",
  "Marine-spec plywood cabinets with leveling feet",
];

const EMPTY_VARIANTS: Record<CabinetColor, AquariumVariant> = {
  white: { image: null, imageAlt: "Aquarium white cabinet placeholder" },
  black: { image: null, imageAlt: "Aquarium black cabinet placeholder" },
};

const maxNanoProducts: AquariumProduct[] = [
  {
    slug: "max-nano-g2-cube",
    name: "MAX NANO G2 cube",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "75 l",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Volume", value: "75 l" }],
  },
  {
    slug: "max-nano-g2-peninsula",
    name: "MAX NANO G2 peninsula",
    series: "MAX NANO G2",
    groupSlug: "max-nano-g2",
    volume: "100 l",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
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
      note: "Based on supplied Czech source text and converted image assets.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Available in four types and in white and black finish. [i]",
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
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription: MAX_NANO_DESCRIPTION,
    longDescription: "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Volume", value: "200 l" }],
  },
];

const reefMaxG3Products: AquariumProduct[] = [
  {
    slug: "reefer-max-170-g3",
    name: "REEFER MAX 170 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-200-g3",
    name: "REEFER MAX 200 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-250-g3",
    name: "REEFER MAX 250 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-300-g3",
    name: "REEFER MAX 300 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-350-g3",
    name: "REEFER MAX 350 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-425-g3",
    name: "REEFER MAX 425 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES, "Eurobraced applies here and above [i]"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-525-g3",
    name: "REEFER MAX 525 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES, "Eurobraced applies here and above [i]"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-625-g3",
    name: "REEFER MAX 625 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES, "Eurobraced applies here and above [i]"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-750-g3",
    name: "REEFER MAX 750 G3",
    series: "REEFER MAX G3",
    groupSlug: "reefer-max-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES, "Eurobraced applies here and above [i]"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
];

const reefMaxSProducts: AquariumProduct[] = [
  "REEFER MAX S-550 G3",
  "REEFER MAX S-700 G3",
  "REEFER MAX S-850 G3",
  "REEFER MAX S-1000 G3",
].map((name) => {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return {
    slug,
    name,
    series: "REEFER MAX S G3",
    groupSlug: "reefer-max-s-g3",
    status: "placeholder" as const,
    source: {
      status: "provided-text" as const,
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, ...REEFER_G3_SERIES_RULES],
    variants: EMPTY_VARIANTS,
    specs: [],
  };
});

const reefMaxPeninsulaProducts: AquariumProduct[] = [
  {
    slug: "reefer-max-peninsula-350-g3",
    name: "REEFER MAX Peninsula 350 G3",
    series: "REEFER MAX Peninsula G3",
    groupSlug: "reefer-max-peninsula-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, "Regular and Peninsula designs"],
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "96 cm" }],
  },
  {
    slug: "reefer-max-peninsula-500-g3",
    name: "REEFER MAX Peninsula 500 G3",
    series: "REEFER MAX Peninsula G3",
    groupSlug: "reefer-max-peninsula-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, "Regular and Peninsula designs"],
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "125 cm" }],
  },
];

const reefMaxSPeninsulaProducts: AquariumProduct[] = [
  {
    slug: "reefer-max-peninsula-s-700-g3",
    name: "REEFER MAX Peninsula S-700 G3",
    series: "REEFER MAX S Peninsula G3",
    groupSlug: "reefer-max-s-peninsula-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, "Regular and Peninsula designs"],
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "151 cm" }],
  },
  {
    slug: "reefer-max-peninsula-s-950-g3",
    name: "REEFER MAX Peninsula S-950 G3",
    series: "REEFER MAX S Peninsula G3",
    groupSlug: "reefer-max-s-peninsula-g3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    highlights: [...REEFER_G3_HIGHLIGHTS, "Regular and Peninsula designs"],
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "200 cm" }],
  },
];

export const AQUARIUM_GROUPS: AquariumGroup[] = [
  {
    slug: "max-nano-g2",
    name: "MAX NANO G2",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: MAX_NANO_GROUP_SIDEBAR_SUMMARY,
    fullDescription: MAX_NANO_GROUP_FULL_DESCRIPTION,
    products: maxNanoProducts,
  },
  {
    slug: "reefer-max-g3",
    name: "REEFER MAX G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: REEFER_G3_GROUP_SIDEBAR_SUMMARY,
    fullDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    products: reefMaxG3Products,
  },
  {
    slug: "reefer-max-s-g3",
    name: "REEFER MAX S G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: REEFER_G3_GROUP_SIDEBAR_SUMMARY,
    fullDescription: REEFER_G3_GROUP_FULL_DESCRIPTION,
    products: reefMaxSProducts,
  },
  {
    slug: "reefer-max-peninsula-g3",
    name: "REEFER MAX Peninsula G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "Peninsula REEFER MAX G3 designs. [i]",
    fullDescription: `${REEFER_G3_GROUP_FULL_DESCRIPTION} Regular and Peninsula designs. [i]`,
    products: reefMaxPeninsulaProducts,
  },
  {
    slug: "reefer-max-s-peninsula-g3",
    name: "REEFER MAX S Peninsula G3",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    sidebarSummary: "Peninsula REEFER MAX S G3 designs. [i]",
    fullDescription: `${REEFER_G3_GROUP_FULL_DESCRIPTION} Regular and Peninsula designs. [i]`,
    products: reefMaxSPeninsulaProducts,
  },
];

export const AQUARIUM_CATALOG = AQUARIUM_GROUPS.flatMap((group) => group.products);
