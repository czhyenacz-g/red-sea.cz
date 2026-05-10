export type SaltProduct = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const SALT_PRODUCTS: SaltProduct[] = [
  {
    slug: "red-sea-salt",
    title: "Red Sea salt",
    description: "Prémiová mořská sůl.",
    image: "/assets/salt/red-sea-salt.webp",
  },
  {
    slug: "coral-pro-salt",
    title: "Coral Pro Salt",
    description: "Prémiová mořská sůl s vyšší alkalinitou.",
    image: "/assets/salt/coral-pro-salt.webp",
  },
  {
    slug: "salt-packaging",
    title: "Balení",
    description: "Mořské soli jsou dodávány v balení 7 kg, 22 kg (kýbl), 20,1 kg (krabice) a 25 kg – pytel pro profesionální použití.",
    image: "/assets/salt/salt-packaging.webp",
  },
];
