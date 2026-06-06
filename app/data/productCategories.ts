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
    label: "Akvarijní systémy",
    href: "/aquariums",
    summary: "Akvarijní designové komplety se vyznačují nejen dokonalým vzhledem, ale i snadnou obsluhovatelností.",
    source: "Redsea.pages",
  },
  {
    slug: "salt",
    label: "Mořská sůl",
    href: "/salt",
    summary: "Red Sea salt – prémiová mořská sůl. Coral Pro Salt – prémiová mořská sůl s vyšší alkalinitou.",
    source: "Redsea.pages",
  },
  {
    slug: "supplements",
    label: "Přípravky",
    href: "/supplements",
    summary: "Na základě těchto poznání, jsou připravovány mořské soli a doplňkové přípravky zajišťující dobrý růst korálnatců a jejich skvělé vybarvení.",
    source: "Redsea.pages",
  },
  {
    slug: "tests",
    label: "Testy",
    href: "/tests",
    summary: "Přesné titrační testy pro mořskou akvaristiku – sady i jednotlivé testy pro měření Ca, KH, Mg, NO3, PO4, I2, K a Fe.",
    source: "Redsea.pages",
  },
  {
    slug: "technical-equipment",
    label: "Technická zařízení",
    href: "/technical-equipment",
    summary: "NanoMat roller filter – malý pásový mechanický předfiltr určený pro akvária řady Nano Max. REEFER AC Skimmer vysoce účinný odpěňovač v provedení podle výkonu 300,600,900.",
    source: "Redsea.pages",
  },
  {
    slug: "reefbeat",
    label: "Inteligentní technická zařízení",
    href: "/reefbeat",
    summary: "Zařízení z této skupiny se dají ovládat přes aplikaci The ReefBeat Ecosystem na mobilních telefonech či tabletech a uživatel je tak může ovládat či kontrolovat na dálku.",
    source: "Redsea.pages",
  },
  {
    slug: "pro-partners",
    label: "Pro partnery",
    href: "/pro-partners",
    summary: "B2B a wholesale kontakt pro partnery, kteří chtějí objednávat nebo řešit dostupnost produktů.",
    source: "Redsea.pages",
  },
];
