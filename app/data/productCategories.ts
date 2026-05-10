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
    label: "Aquariums",
    href: "/aquariums",
    summary: "Aquarium systems and families from MAX NANO G2 to REEFER G3. [i]",
    source: "Redsea.pages",
  },
  {
    slug: "salt",
    label: "Salt",
    href: "/salt",
    summary: "Salt mixes for reef aquariums, including Coral Pro Salt. [i]",
    source: "Redsea.pages",
  },
  {
    slug: "supplements",
    label: "Supplements / additives",
    href: "/supplements",
    summary: "4-part supplements, starter packs and colors support. [i]",
    source: "Redsea.pages",
  },
  {
    slug: "technical-equipment",
    label: "Technical equipment",
    href: "/technical-equipment",
    summary: "Skimmers, pumps and flow equipment. [i]",
    source: "Redsea.pages",
  },
  {
    slug: "reefbeat",
    label: "Smart / ReefBeat equipment",
    href: "/reefbeat",
    summary: "ReefBeat ecosystem and smart devices for remote control. [i]",
    source: "Redsea.pages",
  },
];
