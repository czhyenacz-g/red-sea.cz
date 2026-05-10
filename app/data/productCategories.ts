export type ProductCategory = {
  slug: string;
  label: string;
  href: string;
  summary: string;
  source: "Redsea.pages";
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "aquariums",
    label: "Akvária",
    href: "/aquariums",
    summary: "[placeholder]",
    source: "Redsea.pages",
  },
  {
    slug: "salt",
    label: "Mořská sůl",
    href: "/salt",
    summary: "[placeholder]",
    source: "Redsea.pages",
  },
  {
    slug: "supplements",
    label: "Přípravky / doplňky",
    href: "/supplements",
    summary: "[placeholder]",
    source: "Redsea.pages",
  },
  {
    slug: "technical-equipment",
    label: "Technická zařízení",
    href: "/technical-equipment",
    summary: "[placeholder]",
    source: "Redsea.pages",
  },
  {
    slug: "reefbeat",
    label: "Inteligentní technická zařízení",
    href: "/reefbeat",
    summary: "[placeholder]",
    source: "Redsea.pages",
  },
];
