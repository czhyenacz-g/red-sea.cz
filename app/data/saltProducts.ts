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
    image: "/assets/salt/candidates/05-red-sea-salt-2023.webp",
  },
  {
    slug: "coral-pro-salt",
    title: "Coral Pro Salt",
    description: "Prémiová mořská sůl s vyšší alkalinitou.",
    image: "/assets/salt/candidates/04-coral-pro-salt-2023.webp",
  },
  {
    slug: "salt-packaging",
    title: "Balení",
    description: "Mořské soli jsou dodávány v balení 7 kg, 22 kg (kýbl), 20,1 kg (krabice) a 25 kg – pytel pro profesionální použití.",
    image: "/assets/salt/candidates/02-buckets-with-salt-outside-big.webp",
  },
];
