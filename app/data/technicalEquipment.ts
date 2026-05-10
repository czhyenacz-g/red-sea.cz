export type TechnicalEquipmentProduct = {
  slug: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
};

export const TECHNICAL_EQUIPMENT_INTRO = "Běžná zařízení – nelze je ovládat přes telefon";

export const TECHNICAL_EQUIPMENT_PRODUCTS: TechnicalEquipmentProduct[] = [
  {
    slug: "nanomat-roller-filter",
    title: "NanoMat roller filter",
    description: "Malý pásový mechanický předfiltr určený pro akvária řady Nano Max",
    image: "/assets/technical-equipment/nanomat.webp",
    imageAlt: "NanoMat roller filter",
  },
  {
    slug: "reefer-ac-skimmer",
    title: "REEFER AC Skimmer",
    description: "Vysoce účinný odpěňovač v provedení podle výkonu 300,600,900",
    image: "/assets/technical-equipment/rsk-ac-skimmer-family.webp",
    imageAlt: "REEFER AC Skimmer",
  },
];
