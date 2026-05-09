import type { AquariumVariant } from "../components/AquariumColorSwitcher";

export const AQUARIUM_VARIANTS: Record<"white" | "black", AquariumVariant> = {
  white: {
    color: "white",
    label: "White cabinet",
    title: "White cabinet on a dark showcase",
    description:
      "Bright cabinet finish needs a dark presentation surface so the aquarium silhouette and cabinet lines stay legible and premium.",
    image: "/assets/aquariums/max-nano-xl-white.webp",
    imageAlt: "White aquarium cabinet showcase",
  },
  black: {
    color: "black",
    label: "Black cabinet",
    title: "Black cabinet on a light showcase",
    description:
      "Dark cabinet finish is shown on a light theme to keep contrast high and make the product stand out clearly on mobile and desktop.",
    image: "/assets/aquariums/max-nano-xl-black.webp",
    imageAlt: "Black aquarium cabinet showcase",
  },
};
