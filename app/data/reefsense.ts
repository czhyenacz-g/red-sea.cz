// Obsah stránky /reefsense (ReefSense + ReefControl).
//
// Fakta jsou ověřená proti oficiálním zdrojům Red Sea:
//   - https://redseafish.com/smart-hardware/reefcontrol/
//   - distributorský dokument „ReefControl + ReefControl Power“ (tmp_photos/ReefControl 2)
// Nevymýšlet technické parametry (přesnost, rozsah, výkon, spotřeba, rozměry).
// Obrázky: oficiální produktové fotky Red Sea, ořezané do public/assets/reefsense/.

export type ReefSenseIconName = "temperature" | "ph" | "salinity" | "orp" | "level" | "leak";

export type ReefSenseImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type ReefSenseSensor = {
  id: string;
  /** Oficiální název produktu. */
  officialName: string;
  title: string;
  icon: ReefSenseIconName;
  /** Jedna věta „co hlídá“. */
  lead: string;
  body: string;
  /** Doplňující poznámka (volitelně). */
  note?: string;
  /** Mini-flow jako příklad použití (volitelně). */
  flow?: string[];
  /** Alternativní konec flow („nebo …“). */
  flowAlt?: string;
  images: ReefSenseImage[];
};

export const REEFSENSE_OFFICIAL_URL = "https://redseafish.com/smart-hardware/reefcontrol/";

export const REEFSENSE_HERO = {
  eyebrow: "ReefSense · ReefControl",
  titleTop: "ReefSense",
  titleBottom: "oči a uši vašeho reefu",
  lead: "Sledujte klíčové parametry vody, dostávejte upozornění a nechte akvárium reagovat dřív, než problém vůbec uvidíte.",
  ctaPrimary: "Jak systém funguje ↓",
  ctaSecondary: "Zpět na ReefBeat",
};

/** Hlavní osa stránky: od měření k akci. */
export const REEFSENSE_CHAIN = [
  { id: "sense", label: "ReefSense", role: "měří" },
  { id: "control", label: "ReefControl", role: "vyhodnocuje" },
  { id: "beat", label: "ReefBeat", role: "ukazuje a upozorňuje" },
  { id: "power", label: "ReefControl Power", role: "spíná" },
  { id: "devices", label: "Zařízení v akváriu", role: "reagují" },
];

export const REEFSENSE_SIGNALS: { label: string; icon: ReefSenseIconName }[] = [
  { label: "Teplota", icon: "temperature" },
  { label: "pH", icon: "ph" },
  { label: "Salinita", icon: "salinity" },
  { label: "ORP", icon: "orp" },
  { label: "Hladina vody", icon: "level" },
  { label: "Únik vody", icon: "leak" },
];

export const REEFSENSE_GROUPS = [
  {
    title: "Chemie vody",
    items: [
      { label: "pH + teplota", officialName: "ReefSense pH & Temperature Probe" },
      { label: "salinita + teplota", officialName: "ReefSense Salinity & Temperature Probe" },
      { label: "ORP", officialName: "ReefSense ORP Probe" },
    ],
  },
  {
    title: "Provoz akvária",
    items: [
      { label: "teplota", officialName: "ReefSense Temperature Probe" },
      { label: "hladina vody", officialName: "ReefSense ATO Level Sensor" },
      { label: "detekce úniku", officialName: "ReefSense Leak Detector" },
    ],
  },
];

const img = (name: string, width: number, height: number, alt: string): ReefSenseImage => ({
  src: `/assets/reefsense/${name}.webp`,
  width,
  height,
  alt,
});

export const REEFSENSE_IMAGES = {
  heroReef: img("hero-reef", 628, 266, ""),
  probesOverview: img("probes-overview", 742, 445, "Sondy ReefSense – Temperature, ORP, pH & Temp a Salinity & Temp"),
  reefcontrolPro: img("reefcontrol-pro", 955, 577, "ReefControl Pro s rozbočovačem ReefSense"),
  reefcontrolLite: img("reefcontrol-lite", 822, 582, "ReefControl Lite s rozbočovačem ReefSense"),
  reefbeatMonitor: img("reefbeat-monitor", 1022, 541, "Monitoring hodnot ReefSense v aplikaci ReefBeat"),
  reefsensePort: img("reefsense-4-port", 493, 279, "Čtyřportový rozbočovač ReefSense"),
  reefcontrolPower: {
    src: "/reefbeatposter/6.png",
    width: 1536,
    height: 1024,
    alt: "ReefControl Power",
  } satisfies ReefSenseImage,
};

export const REEFSENSE_SENSORS: ReefSenseSensor[] = [
  {
    id: "ph-temperature",
    officialName: "ReefSense pH & Temperature Probe",
    title: "pH + teplota",
    icon: "ph",
    lead: "Jedna digitální sonda sleduje současně pH i teplotu vody.",
    body: "Pokud teplota překročí nastavený rozsah, ReefControl může upozornit uživatele nebo spustit navázanou automatizaci.",
    note: "Kombinovaná sonda pH & teplota je součástí balení ReefControl Lite i Pro.",
    images: [img("probe-ph", 1140, 565, "ReefSense pH & Temperature Probe a graf pH v aplikaci ReefBeat")],
  },
  {
    id: "salinity-temperature",
    officialName: "ReefSense Salinity & Temperature Probe",
    title: "Salinita + teplota",
    icon: "salinity",
    lead: "Sleduje stabilitu slanosti a zároveň teplotu vody.",
    body: "Odpařování vody, změny při doplňování nebo chyby při míchání nové vody se mohou projevit změnou salinity. Sonda pomáhá tyto změny zachytit včas.",
    images: [img("probe-salinity", 1142, 565, "ReefSense Salinity & Temperature Probe a graf salinity v aplikaci ReefBeat")],
  },
  {
    id: "orp",
    officialName: "ReefSense ORP Probe",
    title: "ORP",
    icon: "orp",
    lead: "Pomáhá sledovat oxidačně-redukční stav vody.",
    body: "Sleduje redox potenciál vody a může být součástí automatického řízení zařízení, například ozonizéru.",
    images: [img("probe-orp", 1134, 565, "ReefSense ORP Probe a graf ORP v aplikaci ReefBeat")],
  },
  {
    id: "temperature",
    officialName: "ReefSense Temperature Probe",
    title: "Teplota",
    icon: "temperature",
    lead: "Jednoduchý a důležitý parametr, který může přímo spouštět reakci systému.",
    body: "Teplotu lze navázat na pravidlo v ReefControl – například zapnout ventilátor, když voda začne stoupat nad nastavenou hodnotu.",
    flow: ["Teplota stoupá", "ReefControl", "Ventilátor zapnout"],
    flowAlt: "nebo topítko vypnout",
    images: [img("probe-temp", 966, 565, "ReefSense Temperature Probe a graf teploty v aplikaci ReefBeat")],
  },
  {
    id: "ato",
    officialName: "ReefSense ATO Level Sensor",
    title: "Hladina vody",
    icon: "level",
    lead: "Digitální ATO senzor sleduje hladinu vody.",
    body: "Spolu s pumpou může automaticky doplňovat odpařenou vodu. ATO senzor a DC pumpa z ReefControl ATO Module se připojují přímo k ReefControl Lite nebo Pro – bez samostatného ATO controlleru.",
    images: [
      img("ato-sensor", 75, 537, "Digitální ATO senzor hladiny z ReefControl ATO Module"),
      img("ato-pump", 166, 468, "DC pumpa z ReefControl ATO Module"),
    ],
  },
  {
    id: "leak",
    officialName: "ReefSense Leak Detector",
    title: "Únik vody",
    icon: "leak",
    lead: "Malý senzor, který může odhalit vodu mimo akvárium.",
    body: "Upozorní dřív, než se z malého problému stane velký. Detektorů lze k systému připojit i víc.",
    flow: ["Únik vody", "Upozornění", "Volitelně vypnutí vybraných zařízení"],
    images: [img("leak-detector", 877, 565, "ReefSense Leak Detector a nastavení detektoru úniku v aplikaci ReefBeat")],
  },
];

/** Metafora — používat střídmě, jen v jedné sekci. */
export const REEFSENSE_ROLES = [
  { role: "Oči a uši", name: "ReefSense", text: "Digitální sondy a senzory měří stav vody i okolí akvária." },
  { role: "Mozek", name: "ReefControl", text: "Sbírá data, hlídá pravidla a rozhoduje o reakci." },
  { role: "Ruce", name: "ReefControl Power", text: "Zapíná a vypíná připojená zařízení – Red Sea i jiných výrobců." },
  { role: "Přehled", name: "ReefBeat", text: "Hodnoty, grafy, historie a upozornění v jedné aplikaci." },
];

export const REEFSENSE_REACTION = [
  { label: "Senzor", text: "něco změří" },
  { label: "ReefControl", text: "vyhodnotí podmínku" },
  { label: "Pravidlo", text: "které si nastavíte" },
  { label: "ReefControl Power", text: "sepne zásuvku" },
  { label: "Akce", text: "zařízení reaguje" },
];

export type ReefSenseStepKind = "trigger" | "sensor" | "control" | "notify" | "power" | "device" | "action";

export type ReefSenseScenario = {
  id: string;
  tab: string;
  icon: ReefSenseIconName;
  title: string;
  text: string;
  steps: { kind: ReefSenseStepKind; label: string }[];
  /** Výsledné akce (poslední krok může mít víc výstupů). */
  outcomes: string[];
};

export const REEFSENSE_SCENARIOS: ReefSenseScenario[] = [
  {
    id: "overheat",
    tab: "Teplota",
    icon: "temperature",
    title: "Akvárium se přehřívá",
    text: "Systém může reagovat automaticky ještě předtím, než si změny všimnete.",
    steps: [
      { kind: "trigger", label: "Teplota stoupne" },
      { kind: "sensor", label: "ReefSense Temperature Probe" },
      { kind: "control", label: "ReefControl" },
      { kind: "power", label: "ReefControl Power" },
    ],
    outcomes: ["Ventilátor ON", "Topítko OFF"],
  },
  {
    id: "level",
    tab: "Hladina",
    icon: "level",
    title: "Pokles hladiny vody",
    text: "Doplňování vody může proběhnout automaticky – bez samostatného ATO controlleru.",
    steps: [
      { kind: "trigger", label: "Hladina vody klesne" },
      { kind: "sensor", label: "ReefSense ATO Level Sensor" },
      { kind: "control", label: "ReefControl" },
      { kind: "device", label: "ATO pumpa" },
    ],
    outcomes: ["Doplnění vody"],
  },
  {
    id: "leak",
    tab: "Únik",
    icon: "leak",
    title: "Voda tam, kde nemá být",
    text: "Upozornění přijde do telefonu a vybraná zařízení lze nastavit tak, aby se při úniku vypnula.",
    steps: [
      { kind: "sensor", label: "ReefSense Leak Detector" },
      { kind: "control", label: "ReefControl" },
      { kind: "notify", label: "Upozornění v ReefBeat" },
      { kind: "power", label: "ReefControl Power" },
    ],
    outcomes: ["Vypnutí vybraného zařízení"],
  },
  {
    id: "orp",
    tab: "ORP",
    icon: "orp",
    title: "ORP mimo požadovaný rozsah",
    text: "Ozonizér připojený do ReefControl Power může být nakonfigurován tak, aby ho řídila hodnota ORP.",
    steps: [
      { kind: "sensor", label: "ReefSense ORP Probe" },
      { kind: "control", label: "ReefControl" },
      { kind: "power", label: "ReefControl Power" },
    ],
    outcomes: ["Řízení ozonizéru"],
  },
];

export const REEFSENSE_DIGITAL_BENEFITS = [
  "Menší vliv elektromagnetického rušení v kabelu – v sumpu plném čerpadel to je znát.",
  "Kalibrační data jsou uložená přímo v sondě.",
  "Zkalibrovanou sondu lze přesunout mezi kompatibilními controllery bez nové kalibrace.",
  "Všechny ReefSense sondy používají společné digitální rozhraní.",
];

export const REEFSENSE_PORTS = ["pH", "Salinita", "ORP", "Teplota"];

export const REEFSENSE_CTA = {
  title: "Akvárium, které vás dokáže upozornit dřív.",
  text: "ReefSense, ReefControl a ReefBeat společně proměňují měření v informace a informace v automatické reakce.",
  primary: { label: "Prozkoumat ReefBeat", href: "/reefbeat" },
  secondary: { label: "Akvarijní systémy", href: "/aquariums" },
  official: "Oficiální ReefControl informace ↗",
};
