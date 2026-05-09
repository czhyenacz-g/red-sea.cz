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

const REEFER_G3_COPY = [
  "Reef-ready systems with redesigned flow system.",
  "Hydrodynamically superior piping and up to 50% more circulation.",
  "Popular REEFER features with extended warranty up to 5 years.",
  "Customizable with preferred equipment.",
];

const REEFER_G3_HIGHLIGHTS = [
  "17 models ranging from 60 to 210 cm width",
  "Regular and Peninsula designs",
  "Redesigned flow system",
  "Hydrodynamically superior piping",
  "ReefMat-ready sumps",
  "Integrated smart ATO",
  "Marine-spec plywood cabinets with leveling feet",
  "Extended warranty up to 5 years",
];

const EMPTY_VARIANTS: Record<CabinetColor, AquariumVariant> = {
  white: { image: null, imageAlt: "Aquarium white cabinet placeholder" },
  black: { image: null, imageAlt: "Aquarium black cabinet placeholder" },
};

export const AQUARIUM_CATALOG: AquariumProduct[] = [
  {
    slug: "max-nano-g2-cube",
    name: "MAX NANO G2 cube",
    series: "MAX NANO G2",
    volume: "75 l",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription:
      "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories. [i]",
    longDescription:
      "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Volume", value: "75 l" }],
  },
  {
    slug: "max-nano-g2-peninsula",
    name: "MAX NANO G2 peninsula",
    series: "MAX NANO G2",
    volume: "100 l",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription:
      "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories. [i]",
    longDescription:
      "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Volume", value: "100 l" }],
  },
  {
    slug: "max-nano-g2-xl",
    name: "MAX NANO G2 XL",
    series: "MAX NANO G2",
    volume: "125 l",
    status: "ready",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and converted image assets.",
    },
    shortDescription:
      "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories. [i]",
    longDescription:
      "Available in four types and in white and black finish. [i]",
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
    volume: "200 l",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text.",
    },
    shortDescription:
      "Rear filtration chamber, can be sold without cabinet, equipped with LED light, pump and skimmer, prepared for ReefATO and NanoMat accessories. [i]",
    longDescription:
      "Available in four types and in white and black finish. [i]",
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Volume", value: "200 l" }],
  },
  {
    slug: "reefer-max-170-g3",
    name: "REEFER MAX 170 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-200-g3",
    name: "REEFER MAX 200 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-250-g3",
    name: "REEFER MAX 250 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-300-g3",
    name: "REEFER MAX 300 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-350-g3",
    name: "REEFER MAX 350 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-425-g3",
    name: "REEFER MAX 425 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: [...REEFER_G3_HIGHLIGHTS, "Eurobraced for 425 models and above"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-525-g3",
    name: "REEFER MAX 525 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: [...REEFER_G3_HIGHLIGHTS, "Eurobraced for 425 models and above"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-625-g3",
    name: "REEFER MAX 625 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: [...REEFER_G3_HIGHLIGHTS, "Eurobraced for 425 models and above"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-750-g3",
    name: "REEFER MAX 750 G3",
    series: "REEFER MAX G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: [...REEFER_G3_HIGHLIGHTS, "Eurobraced for 425 models and above"],
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-s-550-g3",
    name: "REEFER MAX S-550 G3",
    series: "REEFER MAX S G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-s-700-g3",
    name: "REEFER MAX S-700 G3",
    series: "REEFER MAX S G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-s-850-g3",
    name: "REEFER MAX S-850 G3",
    series: "REEFER MAX S G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-s-1000-g3",
    name: "REEFER MAX S-1000 G3",
    series: "REEFER MAX S G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [],
  },
  {
    slug: "reefer-max-peninsula-350-g3",
    name: "REEFER MAX Peninsula 350 G3",
    series: "REEFER MAX Peninsula G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "96 cm" }],
  },
  {
    slug: "reefer-max-peninsula-500-g3",
    name: "REEFER MAX Peninsula 500 G3",
    series: "REEFER MAX Peninsula G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "125 cm" }],
  },
  {
    slug: "reefer-max-peninsula-s-700-g3",
    name: "REEFER MAX Peninsula S-700 G3",
    series: "REEFER MAX S Peninsula G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "151 cm" }],
  },
  {
    slug: "reefer-max-peninsula-s-950-g3",
    name: "REEFER MAX Peninsula S-950 G3",
    series: "REEFER MAX S Peninsula G3",
    status: "placeholder",
    source: {
      status: "provided-text",
      note: "Based on supplied Czech source text and general REEFER G3 copy.",
    },
    shortDescription: REEFER_G3_COPY.join(" "),
    highlights: REEFER_G3_HIGHLIGHTS,
    variants: EMPTY_VARIANTS,
    specs: [{ label: "Length", value: "200 cm" }],
  },
];
