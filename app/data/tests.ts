export type TestImage = {
  number: number;
  src: string;
  alt: string;
};

export type TestItem = {
  title: string;
  image?: TestImage;
};

export type TestGroup = {
  slug: string;
  title: string;
  badge: string;
  text: string;
  image?: TestImage;
  items: TestItem[];
};

export const TESTS_TITLE = "Testy";

export const TESTS_INTRO =
  "Firma RedSea vyrábí všechny druhy přesných, titračních testů používaných v mořské akvaristice. Jsou dodávány buď jednotlivě nebo v sadách. Po spotřebování reagencii, není nutné kupovat celý test, ale pouze doplňovací sadu činidel (Refill test).";

export const TEST_GROUPS: TestGroup[] = [
  {
    slug: "reef-foundation-pro",
    title: "Reef Foundation Pro test kit (Ca, KH, Mg)",
    badge: "Ca · KH · Mg",
    text: "Vysoce přesná testovací sada pro přesné měření úrovně základních prvků - Ca, Mg a KH.",
    image: {
      number: 14,
      src: "/supplements_tmp/Foundation_Pro_multi_TestKit.webp",
      alt: "Reef Foundation Pro multi TestKit",
    },
    items: [
      {
        title: "Calcium Pro TitratorTest Kit",
        image: {
          number: 5,
          src: "/supplements_tmp/Calcium_Pro_TestKit.webp",
          alt: "Calcium Pro TitratorTest Kit",
        },
      },
      {
        title: "Calcium Pro-Reagent Refill",
        // image #16 in source is Iodine-Trace-Colors-A-500ml — does not match product; omitted
      },
      {
        title: "Alkalinity Pro Titrator Test Kit",
        image: {
          number: 63,
          src: "/supplements_tmp/khAlkalinity_Pro_TestKit.webp",
          alt: "Alkalinity Pro Titrator Test Kit",
        },
      },
      {
        title: "Alkalinity Pro – Refills",
        image: {
          number: 47,
          src: "/supplements_tmp/R21411.webp",
          alt: "Alkalinity Pro Refills",
        },
      },
      {
        title: "Magnesium Pro-Titrator Test Kit",
        image: {
          number: 25,
          src: "/supplements_tmp/Magnesium_Pro_Testkit.webp",
          alt: "Magnesium Pro-Titrator Test Kit",
        },
      },
      {
        title: "Magnesium Pro – Refill",
        image: {
          number: 48,
          src: "/supplements_tmp/R21416.webp",
          alt: "Magnesium Pro Refill",
        },
      },
    ],
  },
  {
    slug: "algae-control-pro",
    title: "Algae Control Pro Test Kit (NO3, PO4)",
    badge: "NO3 · PO4",
    text: "Přesná testovací sada na dusičnany a fosforečnany. Název sady je odvozen od sloučenin ovlivňujících růst řas v akváriu.",
    image: {
      number: 1,
      src: "/supplements_tmp/Algae_Control_Pro_Multi_TestKit.webp",
      alt: "Algae Control Pro Multi TestKit",
    },
    items: [
      {
        title: "Nitrate Pro (NO3) Comparator Test Kit",
        image: {
          number: 31,
          src: "/supplements_tmp/Nitrate_Pro_Testkit.webp",
          alt: "Nitrate Pro (NO3) Comparator Test Kit",
        },
      },
      {
        title: "Nitrate Pro – Reagent Refill",
        image: {
          number: 49,
          src: "/supplements_tmp/R21422.webp",
          alt: "Nitrate Pro Reagent Refill",
        },
      },
      {
        title: "Phosphate Pro Comparator Test Kit",
        image: {
          number: 39,
          src: "/supplements_tmp/Phosphate_Pro_Testkit.webp",
          alt: "Phosphate Pro Comparator Test Kit",
        },
      },
      {
        title: "Phosphate Pro – Refill",
        image: {
          number: 50,
          src: "/supplements_tmp/R21426.webp",
          alt: "Phosphate Pro Refill",
        },
      },
    ],
  },
  {
    slug: "trace-colors-pro",
    title: "Trace-Colors Pro MultiTest Kit (I2, K, Fe)",
    badge: "I2 · K · Fe",
    text: "Pokročilé testy s vysokou přesností měření úrovně jódu, draslíku a železa.",
    image: {
      number: 61,
      src: "/supplements_tmp/Trace_Colors_Pro_Multi_TestKit.webp",
      alt: "Trace Colors Pro Multi TestKit",
    },
    items: [],
  },
];
