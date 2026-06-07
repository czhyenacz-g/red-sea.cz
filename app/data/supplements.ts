export type SupplementImage = {
  src: string;
  alt: string;
  sourceNote?: string;
};

export type SupplementItem = {
  slug: string;
  title: string;
  text: string;
  image?: SupplementImage | SupplementImage[];
};

export type SupplementCatalogImage = {
  number: number;
  name: string;
  src: string;
};

export type SupplementTmpImage = SupplementCatalogImage;

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
    image: [
      { src: "/assets/supplements/rcp-4-part/rcp1234-3packs.webp", alt: "RCP1234 tři balení" },
      { src: "/assets/supplements/rcp-4-part/rcp1234-bottles.webp", alt: "RCP1234 lahvičky" },
    ],
  },
  {
    slug: "complete-7-part-supplement-program",
    title: "Complete 7-part Supplement Program",
    text: "Kompletní sedmi dílný sytém doplňování makro a mikro prvků",
    image: [
      {
        src: "/supplements_tmp/Foundation_ABC_250X3.webp",
        alt: "Foundation ABC 250X3",
      },
      {
        src: "/supplements_tmp/Trace_Colors_ABCD_Complete_Pack_4X100ml_box.webp",
        alt: "Trace Colors ABCD Complete Pack 4X100ml box",
      },
    ],
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
    image: {
      src: "/supplements_tmp/Trace_Colors_ABCD_Complete_Pack_4X100ml_box.webp",
      alt: "Trace Colors ABCD Complete Pack 4X100ml box",
    },
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

export const SUPPLEMENTS_CATALOG_IMAGES: SupplementCatalogImage[] = [
  { number: 1, name: "Reef Foundation ABC bucket", src: "/assets/supplements/reef-foundation-abc-bucket.webp" },
  { number: 2, name: "Trace Colors ABCD Complete Pack", src: "/assets/supplements/trace-colors-abcd-pack.webp" },
  { number: 3, name: "Foundation ABC 250X3", src: "/assets/supplements/foundation-abc-250x3.webp" },
  { number: 4, name: "Skeletal elements Reef Foundation ABC Plus Powder", src: "/assets/supplements/skeletal-elements-abc-plus-powder.webp" },
];

export type PackageView = {
  label: string;
  bottles?: SupplementImage[];
  image?: SupplementImage;
};

export type ProgramSubBlock = {
  title: string;
  badge: string;
  detail: string;
  image: SupplementImage;
  views: PackageView[];
  packageSizes: string[];
};

export type FourPartSize = {
  label: string;
  volume: string;
};

export const SEVEN_PART_FOUNDATION: ProgramSubBlock = {
  title: "Foundation ABC",
  badge: "Makroprvky",
  detail: "Reef Foundation A / B / C",
  image: { src: "/assets/supplements/foundation-abc-250x3.webp", alt: "Foundation ABC 250×3" },
  views: [
    {
      label: "Lahve 500 ml",
      bottles: [
        { src: "/assets/supplements/foundation-a-500ml.webp", alt: "Reef Foundation A 500 ml" },
        { src: "/assets/supplements/foundation-b-500ml.webp", alt: "Reef Foundation B 500 ml" },
        { src: "/assets/supplements/foundation-c-500ml.webp", alt: "Reef Foundation C 500 ml" },
      ],
    },
    {
      label: "1 L",
      bottles: [
        { src: "/assets/supplements/foundation-a-1l.webp", alt: "Reef Foundation A 1 L" },
        { src: "/assets/supplements/foundation-b-1l.webp", alt: "Reef Foundation B 1 L" },
        { src: "/assets/supplements/foundation-c-1l.webp", alt: "Reef Foundation C 1 L" },
      ],
    },
    {
      label: "5 L",
      bottles: [
        { src: "/assets/supplements/foundation-a-5l.webp", alt: "Reef Foundation A 5 L" },
        { src: "/assets/supplements/foundation-b-5l.webp", alt: "Reef Foundation B 5 L" },
        { src: "/assets/supplements/foundation-c-5l.webp", alt: "Reef Foundation C 5 L" },
      ],
    },
    {
      label: "Start pack 3×250 ml",
      image: { src: "/assets/supplements/foundation-abc-250x3.webp", alt: "Foundation ABC Start pack 3×250 ml" },
    },
  ],
  packageSizes: [],
};

export const SEVEN_PART_TRACE_COLORS: ProgramSubBlock = {
  title: "Trace Colors ABCD",
  badge: "Mikroprvky",
  detail: "Trace Colors A / B / C / D",
  image: { src: "/assets/supplements/trace-colors-abcd-pack.webp", alt: "Trace Colors ABCD Complete Pack" },
  views: [
    {
      label: "Lahve 500 ml",
      bottles: [
        { src: "/assets/supplements/trace-colors-a-500ml.webp", alt: "Trace Colors A 500 ml" },
        { src: "/assets/supplements/trace-colors-b-500ml.webp", alt: "Trace Colors B 500 ml" },
        { src: "/assets/supplements/trace-colors-c-500ml.webp", alt: "Trace Colors C 500 ml" },
        { src: "/assets/supplements/trace-colors-d-500ml.webp", alt: "Trace Colors D 500 ml" },
      ],
    },
    {
      label: "Start pack 4×100 ml",
      image: { src: "/assets/supplements/trace-colors-4x100ml-pack.webp", alt: "Trace Colors ABCD Start pack 4×100 ml" },
    },
  ],
  packageSizes: [],
};

export const FOUR_PART_SIZES: FourPartSize[] = [
  { label: "Size S", volume: "150 l" },
  { label: "Size M", volume: "300 l" },
  { label: "Size L", volume: "600 l" },
];

export const FOUR_PART_CLARIFICATION =
  "4dílný systém je ve velikostech podle velikosti akvária: Size S pro 150 l, Size M pro 300 l a Size L pro 600 l.";

export const SUPPLEMENTS_TMP_IMAGES: SupplementTmpImage[] = [
  { number: 1, name: "Algae Control Pro Multi TestKit", src: "/supplements_tmp/Algae_Control_Pro_Multi_TestKit.webp" },
  { number: 2, name: "Algae Control Pro Multi TestKit box", src: "/supplements_tmp/Algae_Control_Pro_Multi_TestKit_box.webp" },
  { number: 3, name: "Bioactive-Elements-Trace-Colors-D-500ml", src: "/supplements_tmp/Bioactive-Elements-Trace-Colors-D-500ml.webp" },
  { number: 4, name: "Bioactive Elements Trace Colors D 500ml box", src: "/supplements_tmp/Bioactive_Elements_Trace_Colors_D_500ml_box.webp" },
  { number: 5, name: "Calcium Pro TestKit", src: "/supplements_tmp/Calcium_Pro_TestKit.webp" },
  { number: 6, name: "Calcium Pro TestKit box", src: "/supplements_tmp/Calcium_Pro_TestKit_box.webp" },
  { number: 7, name: "Calcium Reef Foundation A 1000ml box", src: "/supplements_tmp/Calcium_Reef_Foundation_A_1000ml_box.webp" },
  { number: 8, name: "Calcium Reef Foundation A 500ml", src: "/supplements_tmp/Calcium_Reef_Foundation_A_500ml.webp" },
  { number: 9, name: "Calcium Reef Foundation A 500ml box", src: "/supplements_tmp/Calcium_Reef_Foundation_A_500ml_box.webp" },
  { number: 10, name: "Calcium Reef Foundation A 5L", src: "/supplements_tmp/Calcium_Reef_Foundation_A_5L.webp" },
  { number: 11, name: "Calcium Reef Foundation A Powder 1KG box", src: "/supplements_tmp/Calcium_Reef_Foundation_A_Powder_1KG_box.webp" },
  { number: 12, name: "Dosing cap Tube", src: "/supplements_tmp/Dosing_cap__Tube.webp" },
  { number: 13, name: "Foundation ABC 250X3", src: "/supplements_tmp/Foundation_ABC_250X3.webp" },
  { number: 14, name: "Foundation Pro multi TestKit", src: "/supplements_tmp/Foundation_Pro_multi_TestKit.webp" },
  { number: 15, name: "Foundation Pro multi TestKit box", src: "/supplements_tmp/Foundation_Pro_multi_TestKit_box.webp" },
  { number: 16, name: "Iodine-Trace-Colors-A-500ml", src: "/supplements_tmp/Iodine-Trace-Colors-A-500ml.webp" },
  { number: 17, name: "Iodine Pro TestKit", src: "/supplements_tmp/Iodine_Pro_TestKit.webp" },
  { number: 18, name: "Iodine Pro TestKit box", src: "/supplements_tmp/Iodine_Pro_TestKit_box.webp" },
  { number: 19, name: "Iodine Pro Test Refill", src: "/supplements_tmp/Iodine_Pro_Test_Refill.webp" },
  { number: 20, name: "Iodine Trace Colors A 500ml box", src: "/supplements_tmp/Iodine_Trace_Colors_A_500ml_box.webp" },
  { number: 21, name: "Iron-Trace-Colors-C-500ml", src: "/supplements_tmp/Iron-Trace-Colors-C-500ml.webp" },
  { number: 22, name: "Iron Pro Test Refill", src: "/supplements_tmp/Iron_Pro_Test_Refill.webp" },
  { number: 23, name: "Iron Trace Colors C 500ml box", src: "/supplements_tmp/Iron_Trace_Colors_C_500ml_box.webp" },
  { number: 24, name: "Magnesium Pro TestKit box", src: "/supplements_tmp/Magnesium_Pro_TestKit_box.webp" },
  { number: 25, name: "Magnesium Pro Testkit", src: "/supplements_tmp/Magnesium_Pro_Testkit.webp" },
  { number: 26, name: "Magnesium Reef Foundation C 1000ml box", src: "/supplements_tmp/Magnesium_Reef_Foundation_C_1000ml_box.webp" },
  { number: 27, name: "Magnesium Reef Foundation C 500ml", src: "/supplements_tmp/Magnesium_Reef_Foundation_C_500ml.webp" },
  { number: 28, name: "Magnesium Reef Foundation C 500ml box", src: "/supplements_tmp/Magnesium_Reef_Foundation_C_500ml_box.webp" },
  { number: 29, name: "Magnesium Reef Foundation C 5L", src: "/supplements_tmp/Magnesium_Reef_Foundation_C_5L.webp" },
  { number: 30, name: "Magnesium Reef Foundation C Powder 1KG box", src: "/supplements_tmp/Magnesium_Reef_Foundation_C_Powder_1KG_box.webp" },
  { number: 31, name: "Nitrate Pro Testkit", src: "/supplements_tmp/Nitrate_Pro_Testkit.webp" },
  { number: 32, name: "Nitrate Pro Testkit box", src: "/supplements_tmp/Nitrate_Pro_Testkit_box.webp" },
  { number: 33, name: "Nopox 1000ml box", src: "/supplements_tmp/Nopox_1000ml_box.webp" },
  { number: 34, name: "Nopox 100ml box", src: "/supplements_tmp/Nopox_100ml_box.webp" },
  { number: 35, name: "Nopox 500ml", src: "/supplements_tmp/Nopox_500ml.webp" },
  { number: 36, name: "Nopox 500ml box", src: "/supplements_tmp/Nopox_500ml_box.webp" },
  { number: 37, name: "Nopox 5L", src: "/supplements_tmp/Nopox_5L.webp" },
  { number: 38, name: "PR photo 1", src: "/supplements_tmp/PR_photo_1.webp" },
  { number: 39, name: "Phosphate Pro Testkit", src: "/supplements_tmp/Phosphate_Pro_Testkit.webp" },
  { number: 40, name: "Phosphate Pro Testkit box", src: "/supplements_tmp/Phosphate_Pro_Testkit_box.webp" },
  { number: 41, name: "Potassium-Trace-Colors-B-500ml", src: "/supplements_tmp/Potassium-Trace-Colors-B-500ml.webp" },
  { number: 42, name: "Potassium Pro TestKit box", src: "/supplements_tmp/Potassium_Pro_TestKit_box.webp" },
  { number: 43, name: "Potassium Pro Test Refill", src: "/supplements_tmp/Potassium_Pro_Test_Refill.webp" },
  { number: 44, name: "Potassium Trace Colors B 500ml box", src: "/supplements_tmp/Potassium_Trace_Colors_B_500ml_box.webp" },
  { number: 45, name: "Pottasium TK-black", src: "/supplements_tmp/Pottasium_TK-black.webp" },
  { number: 46, name: "R21406", src: "/supplements_tmp/R21406.webp" },
  { number: 47, name: "R21411", src: "/supplements_tmp/R21411.webp" },
  { number: 48, name: "R21416", src: "/supplements_tmp/R21416.webp" },
  { number: 49, name: "R21422", src: "/supplements_tmp/R21422.webp" },
  { number: 50, name: "R21426", src: "/supplements_tmp/R21426.webp" },
  { number: 51, name: "Recipe flipper pr photo", src: "/supplements_tmp/Recipe_flipper_pr_photo.webp" },
  { number: 52, name: "Reef Energy Plus 1000ml Box", src: "/supplements_tmp/Reef_Energy_Plus_1000ml_Box.webp" },
  { number: 53, name: "Reef Energy Plus 250ml Box", src: "/supplements_tmp/Reef_Energy_Plus_250ml_Box.webp" },
  { number: 54, name: "Reef Energy Plus 500ml", src: "/supplements_tmp/Reef_Energy_Plus_500ml.webp" },
  { number: 55, name: "Reef Energy Plus 500ml Box", src: "/supplements_tmp/Reef_Energy_Plus_500ml_Box.webp" },
  { number: 56, name: "Reef Energy Plus 5L", src: "/supplements_tmp/Reef_Energy_Plus_5L.webp" },
  { number: 57, name: "Reef Foundation ABC+black bucket - large", src: "/supplements_tmp/Reef_Foundation_ABC+black_bucket_-_large.webp" },
  { number: 58, name: "Skeletal Elements Reef Foundation ABC Plus Powder 1KG box", src: "/supplements_tmp/Skeletal_Elements_Reef_Foundation_ABC_Plus_Powder_1KG_box.webp" },
  { number: 59, name: "Trace Colors ABCD Complete Pack 4X100ml", src: "/supplements_tmp/Trace_Colors_ABCD_Complete_Pack_4X100ml.webp" },
  { number: 60, name: "Trace Colors ABCD Complete Pack 4X100ml box", src: "/supplements_tmp/Trace_Colors_ABCD_Complete_Pack_4X100ml_box.webp" },
  { number: 61, name: "Trace Colors Pro Multi TestKit", src: "/supplements_tmp/Trace_Colors_Pro_Multi_TestKit.webp" },
  { number: 62, name: "Trace Colors Pro Multi TestKit box", src: "/supplements_tmp/Trace_Colors_Pro_Multi_TestKit_box.webp" },
  { number: 63, name: "khAlkalinity Pro TestKit", src: "/supplements_tmp/khAlkalinity_Pro_TestKit.webp" },
  { number: 64, name: "khAlkalinity Pro TestKit box", src: "/supplements_tmp/khAlkalinity_Pro_TestKit_box.webp" },
  { number: 65, name: "khAlkalinity Reef Foundation B 1000ml box", src: "/supplements_tmp/khAlkalinity_Reef_Foundation_B_1000ml_box.webp" },
  { number: 66, name: "khAlkalinity Reef Foundation B 500m box", src: "/supplements_tmp/khAlkalinity_Reef_Foundation_B_500m_box.webp" },
  { number: 67, name: "khAlkalinity Reef Foundation B 500ml", src: "/supplements_tmp/khAlkalinity_Reef_Foundation_B_500ml.webp" },
  { number: 68, name: "khAlkalinity Reef Foundation B 5L", src: "/supplements_tmp/khAlkalinity_Reef_Foundation_B_5L.webp" },
  { number: 69, name: "khAlkalinity Reef Foundation B Powder 1KG box", src: "/supplements_tmp/khAlkalinity_Reef_Foundation_B_Powder_1KG_box.webp" },
];

export const NUTRITION_TITLE = "Výživa korálnatců";

export const NUTRITION_ITEMS: SupplementItem[] = [
  {
    slug: "reef-energy-plus",
    title: "Reef Energy Plus AB",
    text: "Koncentrovaná výživa korálnatců pro jejich lepší růst, odolnost a vybarvení. Skládá se z organického komplexu rozpuštěných a suspendovaných jednoduchých stavebních bloků uhlohydrátů, aminokyselin, mastných kyselin a vitamínů. Reef Energy Plus je absorbován a spotřebován přímo korály. Dodává se v balení 250, 500, 1 000 a 5 000 ml.",
    image: { src: "/supplements_tmp/Reef_Energy_Plus_500ml.webp", alt: "Reef Energy Plus 500 ml" },
  },
  {
    slug: "no3-po4-x",
    title: "Red Sea Algae Management NO3:PO4-X",
    text: "Obsahuje komplex látek zajišťujících výživu redukčních bakterií provádějících stálou redukci dusičnanů na plynný dusík a absorpci a zhodnocení fosfátů. Dodává se v balení 100, 500, 1 000 a 5 000 ml.",
    // source image #15 is a mismatch (Foundation Pro TestKit box); using #35 (Nopox_500ml)
    image: { src: "/supplements_tmp/Nopox_500ml.webp", alt: "NO3:PO4-X 500 ml" },
  },
  {
    slug: "kh-coralline-gro",
    title: "Red Sea KH Coralline Gro",
    text: "Přípravek podporuje růst vápenité řasy. Použití je zvláště vhodné u nových nádrží. Dodává se v balení 500 a 5 000 ml.",
  },
  {
    slug: "aiptasia-x",
    title: "Aiptasia-X",
    text: "Přípravek je určen k přímému hubení skelných sasanek rodu Aiptasia. Aplikuje se pomocí přiložené injekční stříkačky. Dodává se v balení 60 a 500 ml.",
  },
];
