export type SupplementImage = {
  src: string;
  alt: string;
  sourceNote?: string;
};

export type SupplementItem = {
  slug: string;
  title: string;
  text: string;
  image?: SupplementImage;
};

export const SUPPLEMENTS_TITLE = "Přípravky";

export const SUPPLEMENTS_INTRO = [
  "V útesových (rifových) systémech bez refugií je růst korálů nejdominantnějším biologickým procesem, který ovlivňuje chemii vody a obsah 36 prvků, včetně složek zásaditosti, které jsou spotřebovány v relativně pevném poměru.",
  "Vzhledem k tomu, že vápník je klíčovým ukazatelem růstu korálů, lze všechny prvky doplňovat podle naměřených hodnot vstřebávání vápníku. Stačí týdenní měření obsahu vápníku (Ca) v domácích podmínkách, a proto není nutné vzorky vody kamkoli posílat. Na základě naměřených údajů nastavíme dávkování ostatních prvků z 4 či 7dílné sestavy doplňkového programu.",
] as const;

export const SUPPLEMENTS_ITEMS: SupplementItem[] = [
  {
    slug: "complete-4-part-supplement-program",
    title: "Complete 4-part Supplement Program",
    text: "Kompletní čtyř dílný sytém doplňování makro a mikro prvků",
    image: {
      src: "/assets/supplements/reef-foundation-abc-bucket.webp",
      alt: "Reef Foundation ABC bucket",
    },
  },
  {
    slug: "complete-7-part-supplement-program",
    title: "Complete 7-part Supplement Program",
    text: "Kompletní sedmi dílný sytém doplňování makro a mikro prvků",
    image: {
      src: "/assets/supplements/trace-colors-abcd-pack.webp",
      alt: "Trace Colors ABCD Complete Pack",
    },
  },
  {
    slug: "starter-pack",
    title: "Starter pack",
    text: "Startovací třídílné balení – obsahuje základní stavební prvky korálnatců",
    image: {
      src: "/assets/supplements/foundation-abc-250x3.webp",
      alt: "Foundation ABC 250X3",
    },
  },
  {
    slug: "colors-starter-pack",
    title: "Colors starter pack",
    text: "Startovací balení – obsahuje 31 mikroprvků v čtyřech lahvičkách, ideální pro nano akvária",
  },
  {
    slug: "skeletal-elements",
    title: "Skeletal elements",
    text: "Obsahuje základní stavební prvky korálnatců v práškovém stavu.",
    image: {
      src: "/assets/supplements/skeletal-elements-abc-plus-powder.webp",
      alt: "Skeletal elements Reef Foundation ABC Plus Powder",
    },
  },
];
