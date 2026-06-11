export type CabinetColor = "white" | "black";

export type AquariumStatus = "ready" | "placeholder";

export type AquariumImage = {
  src: string;
  alt: string;
  label?: string;
  sourceNote?: string;
};

export type AquariumVariant = {
  images: AquariumImage[];
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
  "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky. Jsou vybavené veškerou potřebnou technikou. LED světlo, čerpadlo i odpěňovač. Jsou připraveny i pro použití ReefAto i NanoMat, které k nim lze přikoupit.";

const MAX_NANO_GROUP_SIDEBAR_SUMMARY = "Akvária této skupiny mají filtraci umístěnou v zadní komoře.";

const MAX_NANO_GROUP_FULL_DESCRIPTION =
  "Akvária této skupiny mají filtraci umístěnou v zadní komoře a proto se mohou prodávat i bez skříňky. Jsou vybavené veškerou potřebnou technikou. LED světlo, čerpadlo i odpěňovač. Jsou připraveny i pro použití ReefAto i NanoMat, které k nim lze přikoupit.";

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
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-cube-white.webp",
            alt: "MAX NANO G2 cube with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-cube-black.webp",
            alt: "MAX NANO G2 cube with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-peninsula-white.webp",
            alt: "MAX NANO G2 peninsula with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-peninsula-black.webp",
            alt: "MAX NANO G2 peninsula with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/max-nano-xl-white.webp",
            alt: "MAX NANO G2 XL with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/max-nano-xl-black.webp",
            alt: "MAX NANO G2 XL with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-xxl-white.webp",
            alt: "MAX NANO G2 XXL with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/max-nano-g2-xxl-black.webp",
            alt: "MAX NANO G2 XXL with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/170_w-doors.webp",
            alt: "REEFER MAX 170 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-170-200-g3-white.webp",
            alt: "REEFER MAX 170 G3 shared white image with REEFER MAX 200 G3",
            label: "Standard",
            sourceNote: "Shared source asset for REEFER MAX 170 G3 and REEFER MAX 200 G3.",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/170_b-doors_no-label.webp",
            alt: "REEFER MAX 170 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-170-200-g3-black.webp",
            alt: "REEFER MAX 170 G3 shared black image with REEFER MAX 200 G3",
            label: "Standard",
            sourceNote: "Shared source asset for REEFER MAX 170 G3 and REEFER MAX 200 G3.",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/200_w-doors.webp",
            alt: "REEFER MAX 200 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-170-200-g3-white.webp",
            alt: "REEFER MAX 200 G3 shared white image with REEFER MAX 170 G3",
            label: "Standard",
            sourceNote: "Shared source asset for REEFER MAX 170 G3 and REEFER MAX 200 G3.",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/200_b-doors_no-label.webp",
            alt: "REEFER MAX 200 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-170-200-g3-black.webp",
            alt: "REEFER MAX 200 G3 shared black image with REEFER MAX 170 G3",
            label: "Standard",
            sourceNote: "Shared source asset for REEFER MAX 170 G3 and REEFER MAX 200 G3.",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/250_w-doors.webp",
            alt: "REEFER MAX 250 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-250-g3-white.webp",
            alt: "REEFER MAX 250 G3 with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/250_b-doors_no-label.webp",
            alt: "REEFER MAX 250 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-250-g3-black.webp",
            alt: "REEFER MAX 250 G3 with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/300_w-doors.webp",
            alt: "REEFER MAX 300 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-300-g3-white.webp",
            alt: "REEFER MAX 300 G3 with white cabinet",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/300_b-doors_no-label.webp",
            alt: "REEFER MAX 300 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-300-g3-black.webp",
            alt: "REEFER MAX 300 G3 with black cabinet",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/350_w-doors.webp",
            alt: "REEFER MAX 350 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-350-g3-white.webp",
            alt: "REEFER MAX 350 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/350-g3-w.webp",
            alt: "REEFER MAX 350 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/350_b-doors_no-label.webp",
            alt: "REEFER MAX 350 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-350-g3-black.webp",
            alt: "REEFER MAX 350 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/350-g3-b.webp",
            alt: "REEFER MAX 350 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/425_w-doors.webp",
            alt: "REEFER MAX 425 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-425-g3-white.webp",
            alt: "REEFER MAX 425 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/425-g3-w.webp",
            alt: "REEFER MAX 425 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/425_b-doors_no-label.webp",
            alt: "REEFER MAX 425 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-425-g3-black.webp",
            alt: "REEFER MAX 425 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/425-g3-b.webp",
            alt: "REEFER MAX 425 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/525_w-doors.webp",
            alt: "REEFER MAX 525 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-525-g3-white.webp",
            alt: "REEFER MAX 525 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/525-g3-w.webp",
            alt: "REEFER MAX 525 G3 without doors and white cabinet",
            label: "Without Doors",
          },
          {
            src: "/assets/aquariums/reefer-525-g3-deluxe-white-incl-2-x-rl170-arms-doors.webp",
            alt: "REEFER MAX 525 G3 Deluxe Edition with white cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/525_b-doors_no-label.webp",
            alt: "REEFER MAX 525 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-525-g3-black.webp",
            alt: "REEFER MAX 525 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/525-g3-b.webp",
            alt: "REEFER MAX 525 G3 without doors and black cabinet",
            label: "Without Doors",
          },
          {
            src: "/assets/aquariums/reefer-525-g3-deluxe-black-incl-2-x-rl170-arms-doors.webp",
            alt: "REEFER MAX 525 G3 Deluxe Edition with black cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/625_w-doors.webp",
            alt: "REEFER MAX 625 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-625-g3-white.webp",
            alt: "REEFER MAX 625 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/625-g3-w.webp",
            alt: "REEFER MAX 625 G3 without doors and white cabinet",
            label: "Without Doors",
          },
          {
            src: "/assets/aquariums/reefer-625-g3-deluxe-white-incl-3-x-rl115-arms-doors.webp",
            alt: "REEFER MAX 625 G3 Deluxe Edition with white cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/625_b-doors_no-label.webp",
            alt: "REEFER MAX 625 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-625-g3-black.webp",
            alt: "REEFER MAX 625 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/625-g3-b.webp",
            alt: "REEFER MAX 625 G3 without doors and black cabinet",
            label: "Without Doors",
          },
          {
            src: "/assets/aquariums/reefer-625-g3-deluxe-black-incl-3-x-rl115-arms-doors.webp",
            alt: "REEFER MAX 625 G3 Deluxe Edition with black cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/750_w-doors.webp",
            alt: "REEFER MAX 750 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-white-standard.webp",
            alt: "REEFER MAX 750 G3 standard with white cabinet",
            label: "Standard",
            sourceNote: "Standard source asset from RMAX 750 G3_White.png.",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-white-without-doors.webp",
            alt: "REEFER MAX 750 G3 without doors and white cabinet",
            label: "Without Doors",
            sourceNote: "Source asset from 750 G3_W.png.",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-white-deluxe-doors.webp",
            alt: "REEFER MAX 750 G3 Deluxe Edition with white cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/750_b-doors_no-label.webp",
            alt: "REEFER MAX 750 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-black-standard.webp",
            alt: "REEFER MAX 750 G3 standard with black cabinet",
            label: "Standard",
            sourceNote: "Standard source asset from RMAX 750 G3_Black.png.",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-black-without-doors.webp",
            alt: "REEFER MAX 750 G3 without doors and black cabinet",
            label: "Without Doors",
            sourceNote: "Source asset from 750 G3_B.png.",
          },
          {
            src: "/assets/aquariums/reefer-max-750-g3-black-deluxe-doors.webp",
            alt: "REEFER MAX 750 G3 Deluxe Edition with black cabinet and doors",
            label: "Deluxe / With Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/s-550-g2-_w-doors.webp",
            alt: "REEFER MAX S-550 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-550-g3-white.webp",
            alt: "REEFER MAX S-550 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-550-g3-w.webp",
            alt: "REEFER MAX S-550 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/s-550-g2-_w-doors.webp",
            alt: "REEFER MAX S-550 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-550-g3-black.webp",
            alt: "REEFER MAX S-550 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-550-g3-b.webp",
            alt: "REEFER MAX S-550 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/s-700-g2-_w-doors.webp",
            alt: "REEFER MAX S-700 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-700-g3-white.webp",
            alt: "REEFER MAX S-700 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-700-g3-w.webp",
            alt: "REEFER MAX S-700 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/s-700-g2-_w-doors.webp",
            alt: "REEFER MAX S-700 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-700-g3-black.webp",
            alt: "REEFER MAX S-700 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-700-g3-b.webp",
            alt: "REEFER MAX S-700 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/s850_w-doors.webp",
            alt: "REEFER MAX S-850 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-850-g3-white.webp",
            alt: "REEFER MAX S-850 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-850-g3-white.webp",
            alt: "REEFER MAX S-850 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/s-850_b-doors_no-label.webp",
            alt: "REEFER MAX S-850 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-850-g3-black.webp",
            alt: "REEFER MAX S-850 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-850-g3-black.webp",
            alt: "REEFER MAX S-850 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/s1000_w-doors.webp",
            alt: "REEFER MAX S-1000 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-1000-g3-white.webp",
            alt: "REEFER MAX S-1000 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-1000-g3-white.webp",
            alt: "REEFER MAX S-1000 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/s-1000_b-doors_no-label.webp",
            alt: "REEFER MAX S-1000 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-1000-g3-black.webp",
            alt: "REEFER MAX S-1000 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/s-1000-g3-black.webp",
            alt: "REEFER MAX S-1000 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/p350_w-doors.webp",
            alt: "REEFER MAX Peninsula 350 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-peninsula-350-g3-white.webp",
            alt: "REEFER MAX Peninsula 350 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/p350-g3-w.webp",
            alt: "REEFER MAX Peninsula 350 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/p350_b-doors_no-label.webp",
            alt: "REEFER MAX Peninsula 350 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-peninsula-350-g3-black.webp",
            alt: "REEFER MAX Peninsula 350 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/p350-g3-b.webp",
            alt: "REEFER MAX Peninsula 350 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/p500_w-doors.webp",
            alt: "REEFER MAX Peninsula 500 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-peninsula-500-g3-white.webp",
            alt: "REEFER MAX Peninsula 500 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/p500-g3-w.webp",
            alt: "REEFER MAX Peninsula 500 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/p500_b-doors_no-label.webp",
            alt: "REEFER MAX Peninsula 500 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-peninsula-500-g3-black.webp",
            alt: "REEFER MAX Peninsula 500 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/p500-g3-b.webp",
            alt: "REEFER MAX Peninsula 500 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/ps-700_w-doors.webp",
            alt: "REEFER MAX Peninsula S-700 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-peninsula-700-g3-white.webp",
            alt: "REEFER MAX Peninsula S-700 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/ps-700-g3-w.webp",
            alt: "REEFER MAX Peninsula S-700 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/ps-700_b-doors_no-label.webp",
            alt: "REEFER MAX Peninsula S-700 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-peninsula-700-g3-black.webp",
            alt: "REEFER MAX Peninsula S-700 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/ps-700-g3-b.webp",
            alt: "REEFER MAX Peninsula S-700 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
        images: [
          {
            src: "/assets/aquariums/reefer-g3/white-doors/ps-950_w-doors.webp",
            alt: "REEFER MAX Peninsula S-950 G3 with closed white doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-peninsula-950-g3-white.webp",
            alt: "REEFER MAX Peninsula S-950 G3 with white cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/ps-950-g3-w.webp",
            alt: "REEFER MAX Peninsula S-950 G3 without doors and white cabinet",
            label: "Without Doors",
          },
        ],
      },
      black: {
        images: [
          {
            src: "/assets/aquariums/reefer-g3/black-doors/ps-950_b-doors_no-label.webp",
            alt: "REEFER MAX Peninsula S-950 G3 with closed black doors",
            label: "With Doors",
          },
          {
            src: "/assets/aquariums/reefer-max-s-peninsula-950-g3-black.webp",
            alt: "REEFER MAX Peninsula S-950 G3 with black cabinet",
            label: "Standard",
          },
          {
            src: "/assets/aquariums/ps-950-g3-b.webp",
            alt: "REEFER MAX Peninsula S-950 G3 without doors and black cabinet",
            label: "Without Doors",
          },
        ],
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
