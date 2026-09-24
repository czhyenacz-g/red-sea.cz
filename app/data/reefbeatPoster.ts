// Konfigurace interaktivního plakátu ReefBeat (/reefbeat).
//
// Souřadnice produktů jsou v procentech vůči poster containeru:
//   x     = střed produktu vodorovně (% šířky containeru)
//   y     = střed produktu svisle (% výšky containeru)
//   width = šířka produktu (% šířky containeru); výška se dopočítá z poměru stran PNG
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

export type ReefBeatPosterProduct = {
  id: string;
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  description: string;
  url: string;
  position: Record<ReefBeatBreakpoint, ReefBeatPosition>;
  /** Preferovaná strana tooltipu; pokud se nevejde, automaticky se překlopí. */
  tooltipPlacement: Record<ReefBeatBreakpoint, ReefBeatPlacement>;
  /** Kam na akváriu vede spojnice — v % vůči obrázku pozadí (ne containeru). */
  anchor: { x: number; y: number };
};

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
  // Mobil: pozadí uprostřed, produkty ve dvou řadách nad a pod ním.
  mobile: { height: 150, backgroundTop: 40 },
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
  cta: "Zjistit více →",
};

export const REEFBEAT_POSTER_PRODUCTS: ReefBeatPosterProduct[] = [
  {
    id: "reefled",
    name: "ReefLED",
    image: "/reefbeatposter/1.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefLED",
    description: "Chytré REEF-SPEC LED osvětlení.",
    url: "https://redseafish.com/smart-hardware/reefled/",
    position: {
      desktop: { x: 11.5, y: 24.5, width: 15 },
      mobile: { x: 17, y: 13.5, width: 30 },
    },
    tooltipPlacement: { desktop: "right", mobile: "bottom" },
    anchor: { x: 28.6, y: 31.9 },
  },
  {
    id: "reefwave",
    name: "ReefWave",
    image: "/reefbeatposter/2.png",
    imageWidth: 1774,
    imageHeight: 887,
    alt: "Red Sea ReefWave",
    description: "Chytré proudové čerpadlo pro přirozenou cirkulaci vody.",
    url: "https://redseafish.com/smart-hardware/reefwave/",
    position: {
      desktop: { x: 88.5, y: 27, width: 16 },
      mobile: { x: 83, y: 13.5, width: 30 },
    },
    tooltipPlacement: { desktop: "left", mobile: "bottom" },
    anchor: { x: 70.7, y: 31.9 },
  },
  {
    id: "reefdose",
    name: "ReefDose 4",
    image: "/reefbeatposter/3.png",
    imageWidth: 2043,
    imageHeight: 770,
    alt: "Red Sea ReefDose 4",
    description: "Přesné automatické dávkování doplňků.",
    url: "https://redseafish.com/smart-hardware/reefdose/",
    position: {
      desktop: { x: 10, y: 58.5, width: 17 },
      mobile: { x: 50, y: 13.5, width: 30 },
    },
    tooltipPlacement: { desktop: "right", mobile: "bottom" },
    anchor: { x: 28.6, y: 45.3 },
  },
  {
    id: "reefmat",
    name: "ReefMat",
    image: "/reefbeatposter/4.png",
    imageWidth: 1145,
    imageHeight: 1374,
    alt: "Red Sea ReefMat",
    description: "Automatický fleece filtr pro mechanickou filtraci vody.",
    url: "https://redseafish.com/smart-hardware/reefmat/",
    position: {
      desktop: { x: 23.4, y: 72, width: 9 },
      mobile: { x: 17, y: 85.5, width: 20 },
    },
    tooltipPlacement: { desktop: "right", mobile: "top" },
    anchor: { x: 41.7, y: 55.7 },
  },
  {
    id: "reefato",
    name: "ReefATO+",
    image: "/reefbeatposter/5.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefATO+",
    description: "Automatické doplňování vody, monitoring teploty a detekce úniku.",
    url: "https://redseafish.com/smart-hardware/reefato_plus/",
    position: {
      desktop: { x: 90, y: 59, width: 15 },
      mobile: { x: 83, y: 85.5, width: 30 },
    },
    tooltipPlacement: { desktop: "left", mobile: "top" },
    anchor: { x: 70.7, y: 46.2 },
  },
  {
    id: "reefcontrol-power",
    name: "ReefControl Power",
    image: "/reefbeatposter/6.png",
    imageWidth: 1536,
    imageHeight: 1024,
    alt: "Red Sea ReefControl Power",
    description: "Chytré napájecí centrum ovládané přes ReefBeat.",
    url: "https://redseafish.com/smart-hardware/reefcontrol-power/",
    position: {
      desktop: { x: 78.5, y: 73, width: 15 },
      mobile: { x: 50, y: 85.5, width: 30 },
    },
    tooltipPlacement: { desktop: "top", mobile: "top" },
    anchor: { x: 64.2, y: 56 },
  },
];
