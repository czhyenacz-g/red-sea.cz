// Prodejní partneři Red Sea pro koncové zákazníky — jediný zdroj dat (dřív natvrdo v /pro-partners).
//
// Údaje jsou převzaté z webů partnerů (ověřeno 09/2026). Nevymýšlet chybějící údaje ani služby:
// instalaci/servis uvádět jen tam, kde je partner sám nabízí.

export type RetailPartner = {
  id: string;
  name: string;
  /** Krátké shrnutí služeb na kartě. */
  services: string;
  /** Doplňující praktická poznámka (volitelně). */
  note?: string;
  url: string;
  city: string;
  address: {
    street: string;
    postalCode: string;
    locality: string;
  };
  phone: string;
  email: string;
  /** Partner sám uvádí instalaci akvárií. */
  offersInstallation: boolean;
};

export const RETAIL_PARTNERS: RetailPartner[] = [
  {
    id: "pepinuv-utes",
    name: "Pepinův útes",
    services: "Prodej a odborné poradenství",
    note: "Návštěva prodejny po předchozí telefonické domluvě.",
    url: "https://www.morskeakvarium.eu/",
    city: "Kutná Hora",
    address: { street: "Starokolínská 328", postalCode: "284 01", locality: "Kutná Hora" },
    phone: "+420 604 176 384",
    email: "info@pepinuvutes.cz",
    offersInstallation: false,
  },
  {
    id: "akvarium-uruguajska",
    name: "Akvárium Uruguajská",
    services: "Prodej • instalace • servis akvárií",
    url: "https://www.morskeakvarium.cz/",
    city: "Praha – Vinohrady",
    address: { street: "Uruguayská 230/22", postalCode: "120 00", locality: "Praha – Vinohrady" },
    phone: "+420 774 820 536",
    email: "info@morskeakvarium.cz",
    offersInstallation: true,
  },
];

export const AUDIENCE_LINKS = {
  customers: { label: "Pro zákazníky", href: "/kde-koupit" },
  partners: { label: "Pro partnery", href: "/pro-partners" },
} as const;
