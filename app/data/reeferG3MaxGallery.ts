export type GalleryGroup = {
  slug: string;
  label: string;
  items: GalleryItem[];
};

export type GalleryItem = {
  id: number;
  src: string;
  title: string;
};

const BLACK: GalleryItem[] = [
  { id: 1,  src: "/assets/aquariums/reefer-g3-max/black/rmax-170-200-g3_black.webp", title: "RMAX 170+200 G3 Black" },
  { id: 2,  src: "/assets/aquariums/reefer-g3-max/black/rmax-250-g3_black.webp",     title: "RMAX 250 G3 Black" },
  { id: 3,  src: "/assets/aquariums/reefer-g3-max/black/rmax-300-g3_black.webp",     title: "RMAX 300 G3 Black" },
  { id: 4,  src: "/assets/aquariums/reefer-g3-max/black/rmax-350-g3_black.webp",     title: "RMAX 350 G3 Black" },
  { id: 5,  src: "/assets/aquariums/reefer-g3-max/black/rmax-425-g3_black.webp",     title: "RMAX 425 G3 Black" },
  { id: 6,  src: "/assets/aquariums/reefer-g3-max/black/rmax-525-g3_black.webp",     title: "RMAX 525 G3 Black" },
  { id: 7,  src: "/assets/aquariums/reefer-g3-max/black/rmax-625-g3_black.webp",     title: "RMAX 625 G3 Black" },
  { id: 8,  src: "/assets/aquariums/reefer-g3-max/black/rmax-750-g3_black.webp",     title: "RMAX 750 G3 Black" },
  { id: 9,  src: "/assets/aquariums/reefer-g3-max/black/rmax-p350-g3_black.webp",    title: "RMAX Peninsula 350 G3 Black" },
  { id: 10, src: "/assets/aquariums/reefer-g3-max/black/rmax-p500-g3_black.webp",    title: "RMAX Peninsula 500 G3 Black" },
  { id: 11, src: "/assets/aquariums/reefer-g3-max/black/rmax-ps-700-g3_black.webp",  title: "RMAX Peninsula S-700 G3 Black" },
  { id: 12, src: "/assets/aquariums/reefer-g3-max/black/rmax-ps-950-g3_black.webp",  title: "RMAX Peninsula S-950 G3 Black" },
  { id: 13, src: "/assets/aquariums/reefer-g3-max/black/rmax-s-550-g3_black.webp",   title: "RMAX S-550 G3 Black" },
  { id: 14, src: "/assets/aquariums/reefer-g3-max/black/rmax-s-700-g3_black.webp",   title: "RMAX S-700 G3 Black" },
  { id: 15, src: "/assets/aquariums/reefer-g3-max/black/rmax-s-850-g3_black.webp",   title: "RMAX S-850 G3 Black" },
  { id: 16, src: "/assets/aquariums/reefer-g3-max/black/rmax-s-1000-g3_black.webp",  title: "RMAX S-1000 G3 Black" },
];

const WHITE: GalleryItem[] = [
  { id: 17, src: "/assets/aquariums/reefer-g3-max/white/rmax-170-200-g3_white.webp", title: "RMAX 170+200 G3 White" },
  { id: 18, src: "/assets/aquariums/reefer-g3-max/white/rmax-250-g3_white.webp",     title: "RMAX 250 G3 White" },
  { id: 19, src: "/assets/aquariums/reefer-g3-max/white/rmax-300-g3_white.webp",     title: "RMAX 300 G3 White" },
  { id: 20, src: "/assets/aquariums/reefer-g3-max/white/rmax-350-g3_white.webp",     title: "RMAX 350 G3 White" },
  { id: 21, src: "/assets/aquariums/reefer-g3-max/white/rmax-425-g3_white.webp",     title: "RMAX 425 G3 White" },
  { id: 22, src: "/assets/aquariums/reefer-g3-max/white/rmax-525-g3_white.webp",     title: "RMAX 525 G3 White" },
  { id: 23, src: "/assets/aquariums/reefer-g3-max/white/rmax-625-g3_white.webp",     title: "RMAX 625 G3 White" },
  { id: 24, src: "/assets/aquariums/reefer-g3-max/white/rmax-750-g3_white.webp",     title: "RMAX 750 G3 White" },
  { id: 25, src: "/assets/aquariums/reefer-g3-max/white/rmax-p350-g3_white.webp",    title: "RMAX Peninsula 350 G3 White" },
  { id: 26, src: "/assets/aquariums/reefer-g3-max/white/rmax-p500-g3_white.webp",    title: "RMAX Peninsula 500 G3 White" },
  { id: 27, src: "/assets/aquariums/reefer-g3-max/white/rmax-ps-700-g3_white.webp",  title: "RMAX Peninsula S-700 G3 White" },
  { id: 28, src: "/assets/aquariums/reefer-g3-max/white/rmax-ps-950-g3_white.webp",  title: "RMAX Peninsula S-950 G3 White" },
  { id: 29, src: "/assets/aquariums/reefer-g3-max/white/rmax-s-550-g3_white.webp",   title: "RMAX S-550 G3 White" },
  { id: 30, src: "/assets/aquariums/reefer-g3-max/white/rmax-s-700-g3_white.webp",   title: "RMAX S-700 G3 White" },
  { id: 31, src: "/assets/aquariums/reefer-g3-max/white/rmax-s-850-g3_white.webp",   title: "RMAX S-850 G3 White" },
  { id: 32, src: "/assets/aquariums/reefer-g3-max/white/rmax-s-1000-g3_white.webp",  title: "RMAX S-1000 G3 White" },
];

export const REEFER_G3_MAX_GALLERY: GalleryGroup[] = [
  { slug: "black", label: "Black · #1–16", items: BLACK },
  { slug: "white", label: "White · #17–32", items: WHITE },
];
