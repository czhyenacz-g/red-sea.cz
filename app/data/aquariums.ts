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
    dimensions: "60 x 55 x 55 cm",
    glassThickness: "10 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Compact reef", "Showroom demo"],
    status: "ready",
    shortDescription: "Kompaktní reef setup pro menší prostory a showroom prezentace.",
    longDescription:
      "Demonstrační produkt s připravenými white/black variantami. Další modely mohou být doplněny stejným datovým formátem bez změny UI.",
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
      { label: "Series", value: "MAX NANO G2" },
      { label: "Use", value: "Compact reef display" },
      { label: "Cabinets", value: "White / Black" },
    ],
  },
  {
    slug: "max-nano-cube",
    name: "MAX NANO Cube",
    series: "MAX NANO G2",
    volume: "Nano",
    dimensions: "55 x 55 x 55 cm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Starter reef"],
    status: "placeholder",
    shortDescription: "Kostkový formát s placeholder vizuálem pro budoucí assety.",
    variants: {
      white: { image: null, imageAlt: "MAX NANO Cube white cabinet placeholder" },
      black: { image: null, imageAlt: "MAX NANO Cube black cabinet placeholder" },
    },
    specs: [
      { label: "Series", value: "MAX NANO G2" },
      { label: "Use", value: "Starter reef aquarium" },
    ],
  },
  {
    slug: "max-nano-xxl",
    name: "MAX NANO XXL",
    series: "MAX NANO G2",
    volume: "Large nano",
    dimensions: "90 x 60 x 55 cm",
    glassThickness: "12 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Advanced nano reef", "Premium display"],
    status: "placeholder",
    shortDescription: "Větší all-in-one varianta s dostatkem prostoru pro prezentaci.",
    variants: {
      white: { image: null, imageAlt: "MAX NANO XXL white cabinet placeholder" },
      black: { image: null, imageAlt: "MAX NANO XXL black cabinet placeholder" },
    },
    specs: [
      { label: "Series", value: "MAX NANO G2" },
      { label: "Use", value: "Premium nano reef" },
    ],
  },
  {
    slug: "reefer-170",
    name: "REEFER 170",
    series: "REEFER G3",
    volume: "170",
    dimensions: "62 x 58 x 53 cm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Desktop reef"],
    status: "placeholder",
    shortDescription: "Placeholder pro kompaktní REEFER model.",
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
    volume: "250",
    dimensions: "90 x 57 x 55 cm",
    glassThickness: "10 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Home reef"],
    status: "placeholder",
    shortDescription: "Placeholder pro střední model v katalogu.",
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
    volume: "350",
    dimensions: "100 x 60 x 55 cm",
    glassThickness: "12 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Home reef", "Retail display"],
    status: "placeholder",
    shortDescription: "Placeholder pro větší domácí reef systém.",
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
    volume: "425",
    dimensions: "120 x 55 x 57 cm",
    glassThickness: "12 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Showroom reef", "Advanced hobbyist"],
    status: "placeholder",
    shortDescription: "Placeholder pro oblíbený objem s širší sestavou.",
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
    volume: "525",
    dimensions: "150 x 55 x 60 cm",
    glassThickness: "12 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Showroom reef", "B2B presentation"],
    status: "placeholder",
    shortDescription: "Placeholder pro velký reef setup do showroomu.",
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
    volume: "625",
    dimensions: "160 x 60 x 60 cm",
    glassThickness: "15 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Large reef display", "Retail showroom"],
    status: "placeholder",
    shortDescription: "Placeholder pro špičkovou prezentaci s větším sklem.",
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
    volume: "750",
    dimensions: "180 x 60 x 60 cm",
    glassThickness: "15 mm",
    cabinetColors: ["White", "Black"],
    suitableFor: ["Flagship reef", "Large showroom"],
    status: "placeholder",
    shortDescription: "Placeholder pro vlajkový model v katalogu.",
    variants: {
      white: { image: null, imageAlt: "REEFER 750 white cabinet placeholder" },
      black: { image: null, imageAlt: "REEFER 750 black cabinet placeholder" },
    },
    specs: [{ label: "Series", value: "REEFER G3" }],
  },
];
