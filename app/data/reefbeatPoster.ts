// Konfigurace interaktivního plakátu ReefBeat (/reefbeat).
//
// Souřadnice produktů jsou v procentech vůči poster containeru:
//   x     = střed produktu vodorovně (% šířky containeru)
//   y     = střed produktu svisle (% výšky containeru)
//   width = šířka produktu (% šířky containeru); výška se dopočítá z poměru stran PNG
//           (u category karty z obsahu — písmo se škáluje s šířkou karty)
//
// Položky plakátu jsou dvou typů:
//   type: "product"  — PNG produktu, odkaz na detailní sekci #targetId na téže stránce
//   type: "category" — textová karta s ikonou, odkaz ven (href), bez detailní sekce
//
// Pozice se nejsnáz ladí v dev režimu: /reefbeat?edit=1 (jen `npm run dev`).
// Editor vypíše JSON, který stačí vložit do `position` níže.

export type ReefBeatBreakpoint = "desktop" | "mobile";
export type ReefBeatPlacement = "top" | "bottom" | "left" | "right";

export type ReefBeatPosition = {
  x: number;
  y: number;
  width: number;
};

type ReefBeatPosterItemBase = {
  id: string;
  name: string;
  /** Text tooltipu. */
  description: string;
  position: Record<ReefBeatBreakpoint, ReefBeatPosition>;
  /** Preferovaná strana tooltipu; pokud se nevejde, automaticky se překlopí. */
  tooltipPlacement: Record<ReefBeatBreakpoint, ReefBeatPlacement>;
  /** Kam na akváriu vede spojnice — v % vůči obrázku pozadí (ne containeru). */
  anchor: { x: number; y: number };
  /** Breakpointy, kde se spojnice této položky nekreslí. */
  hideConnectionOn?: ReefBeatBreakpoint[];
};

export type ReefBeatPosterCategory = ReefBeatPosterItemBase & {
  type: "category";
  /** Krátký text přímo na kartě v plakátu. */
  summary: string;
  cta: string;
  href: string;
};

export type ReefBeatPosterProduct = ReefBeatPosterItemBase & {
  type: "product";
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  /** ID detailní sekce na stejné stránce — poster odkazuje výhradně sem (#targetId). */
  targetId: string;
  /** Oficiální stránka Red Sea — jen jako sekundární odkaz v detailní sekci. */
  officialUrl: string;
  detail: {
    intro: string;
    points: string[];
  };
};

export type ReefBeatPosterItem = ReefBeatPosterProduct | ReefBeatPosterCategory;

export type ReefBeatLayout = {
  /** Výška containeru v jednotkách, kde šířka = 100 (desktop = poměr stran back.png). */
  height: number;
  /** Svislý offset pozadí v containeru ve stejných jednotkách. */
  backgroundTop: number;
};

export const REEFBEAT_POSTER_BREAKPOINT = 900;

export const REEFBEAT_POSTER_BACKGROUND = {
  src: "/reefbeatposter/back.png",
  width: 1536,
  height: 1024,
  alt: "Reef akvárium propojené s chytrými zařízeními Red Sea přes aplikaci ReefBeat",
};

const BACKGROUND_HEIGHT = (REEFBEAT_POSTER_BACKGROUND.height / REEFBEAT_POSTER_BACKGROUND.width) * 100;

export const REEFBEAT_POSTER_LAYOUTS: Record<ReefBeatBreakpoint, ReefBeatLayout> = {
  // Desktop: container = přesně pozadí, produkty leží přímo na plakátu.
  desktop: { height: BACKGROUND_HEIGHT, backgroundTop: 0 },
  // Mobil: pozadí uprostřed, produkty ve dvou řadách nad a pod ním, category karta úplně dole.
  mobile: { height: 178, backgroundTop: 40 },
};

export const REEFBEAT_POSTER_SETTINGS = {
  showConnections: true,
};

export const REEFBEAT_POSTER_TEXT = {
  title: "ReefBeat ekosystém",
  intro:
    "ReefBeat propojuje chytrá zařízení Red Sea do jednoho ekosystému a umožňuje jejich nastavení, automatizaci a monitoring z jedné aplikace.",
  hintDesktop: "Najetím na zařízení zjistíte, jak zapadá do chytrého reef akvária.",
  hintMobile: "Klepněte na zařízení pro více informací.",
  cta: "Zjistit více ↓",
  officialLink: "Oficiální informace ↗",
};

export const REEFBEAT_POSTER_ITEMS: ReefBeatPosterItem[] = [
  {
    type: "category",
    id: "aquariums",
    name: "Akvarijní systémy",
    summary: "Designové akvarijní komplety spojují čistý vzhled se snadnou obsluhou.",
    description:
      "Akvarijní designové komplety se vyznačují nejen dokonalým vzhledem, ale i snadnou obsluhovatelností.",
    cta: "Prohlédnout akvária →",
    href: "https://red-sea-cz.vercel.app/aquariums",
    position: {
      desktop: { x: 13.5, y: 24.5, width: 14 },
      mobile: { x: 50, y: 88.8, width: 88 },
    },
    tooltipPlacement: { desktop: "right", mobile: "top" },
    anchor: { x: 28.6, y: 31.9 },
    hideConnectionOn: ["mobile"],
  },
  {
    type: "product",
    id: "reefled",
    name: "ReefLED",
    image: "/reefbeatposter/1.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefLED",
    description: "Chytré REEF-SPEC LED osvětlení.",
    targetId: "reefled",
    officialUrl: "https://redseafish.com/smart-hardware/reefled/",
    detail: {
      intro: "Chytré LED osvětlení navržené pro reef akvária a ovládané přes ReefBeat.",
      points: ["Nastavení světelného programu", "Denní cyklus osvětlení", "Ovládání z aplikace ReefBeat"],
    },
    position: {
      desktop: { x: 50, y: 12.3, width: 12 },
      mobile: { x: 18, y: 11.4, width: 29 },
    },
    tooltipPlacement: { desktop: "right", mobile: "bottom" },
    // horní kruh nad akváriem → čára končí u svítidla
    anchor: { x: 53.5, y: 20.2 },
  },
  {
    type: "product",
    id: "reefwave",
    name: "ReefWave",
    image: "/reefbeatposter/2.png",
    imageWidth: 1774,
    imageHeight: 887,
    alt: "Red Sea ReefWave",
    description: "Chytré proudové čerpadlo pro přirozenou cirkulaci vody.",
    targetId: "reefwave",
    officialUrl: "https://redseafish.com/smart-hardware/reefwave/",
    detail: {
      intro: "Chytré proudové čerpadlo pro tvorbu přirozenější cirkulace vody v reef akváriu.",
      points: ["Různé režimy proudění", "Plánování přes ReefBeat", "Propojení s režimy Feed / Maintenance"],
    },
    position: {
      desktop: { x: 86.5, y: 27, width: 16 },
      mobile: { x: 82, y: 11.4, width: 29 },
    },
    tooltipPlacement: { desktop: "left", mobile: "bottom" },
    anchor: { x: 70.7, y: 31.9 },
  },
  {
    type: "product",
    id: "reefdose",
    name: "ReefDose 4",
    image: "/reefbeatposter/3.png",
    imageWidth: 2043,
    imageHeight: 770,
    alt: "Red Sea ReefDose 4",
    description: "Přesné automatické dávkování doplňků.",
    targetId: "reefdose",
    officialUrl: "https://redseafish.com/smart-hardware/reefdose/",
    detail: {
      intro: "Automatické dávkování doplňků v přesně nastavených intervalech.",
      points: ["Více dávkovacích hlav", "Plánování dávek", "Řízení přes ReefBeat"],
    },
    position: {
      desktop: { x: 12, y: 58.5, width: 17 },
      mobile: { x: 50, y: 11.4, width: 29 },
    },
    tooltipPlacement: { desktop: "right", mobile: "bottom" },
    anchor: { x: 28.6, y: 45.3 },
  },
  {
    type: "product",
    id: "reefmat",
    name: "ReefMat",
    image: "/reefbeatposter/4.png",
    imageWidth: 1145,
    imageHeight: 1374,
    alt: "Red Sea ReefMat",
    description: "Automatický fleece filtr pro mechanickou filtraci vody.",
    targetId: "reefmat",
    officialUrl: "https://redseafish.com/smart-hardware/reefmat/",
    detail: {
      intro: "Automatický fleece filtr, který průběžně odstraňuje nečistoty z vody.",
      points: ["Automatický posun filtrační role", "Méně ruční údržby", "Monitoring přes ReefBeat"],
    },
    position: {
      desktop: { x: 23.4, y: 72, width: 9 },
      mobile: { x: 18, y: 72.1, width: 20 },
    },
    tooltipPlacement: { desktop: "right", mobile: "top" },
    anchor: { x: 41.7, y: 55.7 },
  },
  {
    type: "product",
    id: "reefato",
    name: "ReefATO+",
    image: "/reefbeatposter/5.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefATO+",
    description: "Automatické doplňování vody, monitoring teploty a detekce úniku.",
    targetId: "reefato",
    officialUrl: "https://redseafish.com/smart-hardware/reefato_plus/",
    detail: {
      intro: "Systém pro automatické doplňování odpařené vody a monitoring některých provozních stavů akvária.",
      points: ["Automatické doplňování vody", "Monitoring", "Upozornění přes ReefBeat"],
    },
    position: {
      desktop: { x: 88, y: 59, width: 15 },
      mobile: { x: 82, y: 72.1, width: 29 },
    },
    tooltipPlacement: { desktop: "left", mobile: "top" },
    anchor: { x: 70.7, y: 46.2 },
  },
  {
    type: "product",
    id: "reefcontrol-power",
    name: "ReefControl Power",
    image: "/reefbeatposter/6.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefControl Power",
    description: "Chytré napájecí centrum ovládané přes ReefBeat.",
    targetId: "reefcontrol-power",
    officialUrl: "https://redseafish.com/smart-hardware/reefcontrol-power/",
    detail: {
      intro: "Chytré napájecí centrum umožňující zapínání a vypínání připojených zařízení přes ReefBeat.",
      points: ["Řízení připojených zařízení", "Časové plány", "Automatizace", "Možnost řídit i zařízení jiných výrobců"],
    },
    position: {
      desktop: { x: 77.5, y: 73, width: 15 },
      mobile: { x: 50, y: 72.1, width: 29 },
    },
    tooltipPlacement: { desktop: "top", mobile: "top" },
    anchor: { x: 64.2, y: 56 },
  },
];

export const REEFBEAT_POSTER_PRODUCTS = REEFBEAT_POSTER_ITEMS.filter(
  (item): item is ReefBeatPosterProduct => item.type === "product"
);
