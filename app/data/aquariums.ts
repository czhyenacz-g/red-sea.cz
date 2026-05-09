export type CabinetColor = "white" | "black";

export type AquariumSpecs = Array<{
  label: string;
  value: string;
}>;

export type AquariumStatus = "ready" | "placeholder";

export type AquariumVariant = {
  image: string | null;
  imageAlt: string;
};

export type AquariumProduct = {
  slug: string;
  name: string;
  series: string;
  volume?: string;
  featured?: boolean;
  dimensions?: string;
  glassThickness?: string;
  cabinetColors?: string[];
  suitableFor?: string[];
  status: AquariumStatus;
  source?: {
    status: "verified" | "unverified" | "placeholder";
    note?: string;
    url?: string;
  };
  shortDescription: string;
  longDescription?: string;
  variants: Record<CabinetColor, AquariumVariant>;
  specs: AquariumSpecs;
};

export const AQUARIUM_CATALOG: AquariumProduct[] = [
  {
    slug: "max-nano-xl",
    name: "MAX NANO XL",
    series: "MAX NANO G2",
    volume: "Compact",
    featured: true,
    dimensions: "60 x 55 x 55 cm [i]",
    glassThickness: "10 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Compact reef [i]", "Showroom demo [i]"],
    status: "ready",
    source: {
      status: "unverified",
      note: "Only the product name and cabinet image variants are currently backed by converted source assets.",
    },
    shortDescription: "Kompaktní reef setup pro menší prostory a showroom prezentace. [i]",
    longDescription:
      "Demonstrační produkt s připravenými white/black variantami. Další modely mohou být doplněny stejným datovým formátem bez změny UI. [i]",
    variants: {
      white: {
        image: "/assets/aquariums/max-nano-xl-white.webp",
        imageAlt: "MAX NANO XL with white cabinet",
      },
      black: {
        image: "/assets/aquariums/max-nano-xl-black.webp",
        imageAlt: "MAX NANO XL with black cabinet",
      },
    },
    specs: [
      { label: "Series", value: "MAX NANO G2 [i]" },
      { label: "Use", value: "Compact reef display [i]" },
      { label: "Cabinets", value: "White / Black" },
    ],
  },
  {
    slug: "max-nano-cube",
    name: "MAX NANO Cube",
    series: "MAX NANO G2",
    volume: "Nano [i]",
    dimensions: "55 x 55 x 55 cm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Starter reef [i]"],
    status: "placeholder",
    source: {
      status: "placeholder",
      note: "Placeholder entry without verified product data yet.",
    },
    shortDescription: "Kostkový formát s placeholder vizuálem pro budoucí assety. [i]",
    variants: {
      white: { image: null, imageAlt: "MAX NANO Cube white cabinet placeholder" },
      black: { image: null, imageAlt: "MAX NANO Cube black cabinet placeholder" },
    },
    specs: [
      { label: "Series", value: "MAX NANO G2 [i]" },
      { label: "Use", value: "Starter reef aquarium [i]" },
    ],
  },
  {
    slug: "max-nano-xxl",
    name: "MAX NANO XXL",
    series: "MAX NANO G2",
    volume: "Large nano [i]",
    dimensions: "90 x 60 x 55 cm [i]",
    glassThickness: "12 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Advanced nano reef [i]", "Premium display [i]"],
    status: "placeholder",
    source: {
      status: "placeholder",
      note: "Placeholder entry without verified product data yet.",
    },
    shortDescription: "Větší all-in-one varianta s dostatkem prostoru pro prezentaci. [i]",
    variants: {
      white: { image: null, imageAlt: "MAX NANO XXL white cabinet placeholder" },
      black: { image: null, imageAlt: "MAX NANO XXL black cabinet placeholder" },
    },
    specs: [
      { label: "Series", value: "MAX NANO G2 [i]" },
      { label: "Use", value: "Premium nano reef [i]" },
    ],
  },
  {
    slug: "reefer-170",
    name: "REEFER 170",
    series: "REEFER G3",
    volume: "170 [i]",
    dimensions: "62 x 58 x 53 cm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Desktop reef [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro kompaktní REEFER model. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 170 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 170 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-250",
    name: "REEFER 250",
    series: "REEFER G3",
    volume: "250 [i]",
    dimensions: "90 x 57 x 55 cm [i]",
    glassThickness: "10 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Home reef [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro střední model v katalogu. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 250 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 250 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-350",
    name: "REEFER 350",
    series: "REEFER G3",
    volume: "350 [i]",
    dimensions: "100 x 60 x 55 cm [i]",
    glassThickness: "12 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Home reef [i]", "Retail display [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro větší domácí reef systém. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 350 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 350 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-425",
    name: "REEFER 425",
    series: "REEFER G3",
    volume: "425 [i]",
    dimensions: "120 x 55 x 57 cm [i]",
    glassThickness: "12 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Showroom reef [i]", "Advanced hobbyist [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro oblíbený objem s širší sestavou. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 425 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 425 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-525",
    name: "REEFER 525",
    series: "REEFER G3",
    volume: "525 [i]",
    dimensions: "150 x 55 x 60 cm [i]",
    glassThickness: "12 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Showroom reef [i]", "B2B presentation [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro velký reef setup do showroomu. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 525 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 525 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-625",
    name: "REEFER 625",
    series: "REEFER G3",
    volume: "625 [i]",
    dimensions: "160 x 60 x 60 cm [i]",
    glassThickness: "15 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Large reef display [i]", "Retail showroom [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro špičkovou prezentaci s větším sklem. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 625 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 625 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
  {
    slug: "reefer-750",
    name: "REEFER 750",
    series: "REEFER G3",
    volume: "750 [i]",
    dimensions: "180 x 60 x 60 cm [i]",
    glassThickness: "15 mm [i]",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Flagship reef [i]", "Large showroom [i]"],
    status: "placeholder",
    source: { status: "placeholder", note: "Placeholder entry without verified product data yet." },
    shortDescription: "Placeholder pro vlajkový model v katalogu. [i]",
    variants: {
      white: { image: null, imageAlt: "REEFER 750 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 750 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
];
