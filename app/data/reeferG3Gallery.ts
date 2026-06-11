import type { GalleryGroup } from "./reeferG3MaxGallery";

const BLACK_NO_DOORS = [
  { id: 33, src: "/assets/aquariums/reefer-g3/black-no-doors/170-200-g3_black.webp",  title: "REEFER 170–200 G3 Black" },
  { id: 34, src: "/assets/aquariums/reefer-g3/black-no-doors/250-300-g3-black.webp",  title: "REEFER 250–300 G3 Black" },
  { id: 35, src: "/assets/aquariums/reefer-g3/black-no-doors/350-g3_black.webp",      title: "REEFER 350 G3 Black" },
  { id: 36, src: "/assets/aquariums/reefer-g3/black-no-doors/425-g3_black.webp",      title: "REEFER 425 G3 Black" },
  { id: 37, src: "/assets/aquariums/reefer-g3/black-no-doors/525-625-g3_black.webp",  title: "REEFER 525–625 G3 Black" },
  { id: 38, src: "/assets/aquariums/reefer-g3/black-no-doors/750-g3_black.webp",      title: "REEFER 750 G3 Black" },
  { id: 39, src: "/assets/aquariums/reefer-g3/black-no-doors/p350-g3_black.webp",     title: "REEFER Peninsula 350 G3 Black" },
  { id: 40, src: "/assets/aquariums/reefer-g3/black-no-doors/p500-g3_black.webp",     title: "REEFER Peninsula 500 G3 Black" },
  { id: 41, src: "/assets/aquariums/reefer-g3/black-no-doors/ps-700-g3_black.webp",   title: "REEFER Peninsula S-700 G3 Black" },
  { id: 42, src: "/assets/aquariums/reefer-g3/black-no-doors/ps-950-g3_black.webp",   title: "REEFER Peninsula S-950 G3 Black" },
  { id: 43, src: "/assets/aquariums/reefer-g3/black-no-doors/s-550-g3_black.webp",    title: "REEFER S-550 G3 Black" },
  { id: 44, src: "/assets/aquariums/reefer-g3/black-no-doors/s-700-g3_black.webp",    title: "REEFER S-700 G3 Black" },
  { id: 45, src: "/assets/aquariums/reefer-g3/black-no-doors/s-850-g3_black.webp",    title: "REEFER S-850 G3 Black" },
  { id: 46, src: "/assets/aquariums/reefer-g3/black-no-doors/s-1000-g3_black.webp",   title: "REEFER S-1000 G3 Black" },
];

const BLACK_DOORS = [
  { id: 47, src: "/assets/aquariums/reefer-g3/black-doors/170_b-doors_no-label.webp",   title: "REEFER 170 G3 Black Doors" },
  { id: 48, src: "/assets/aquariums/reefer-g3/black-doors/200_b-doors_no-label.webp",   title: "REEFER 200 G3 Black Doors" },
  { id: 49, src: "/assets/aquariums/reefer-g3/black-doors/250_b-doors_no-label.webp",   title: "REEFER 250 G3 Black Doors" },
  { id: 50, src: "/assets/aquariums/reefer-g3/black-doors/300_b-doors_no-label.webp",   title: "REEFER 300 G3 Black Doors" },
  { id: 51, src: "/assets/aquariums/reefer-g3/black-doors/350_b-doors_no-label.webp",   title: "REEFER 350 G3 Black Doors" },
  { id: 52, src: "/assets/aquariums/reefer-g3/black-doors/425_b-doors_no-label.webp",   title: "REEFER 425 G3 Black Doors" },
  { id: 53, src: "/assets/aquariums/reefer-g3/black-doors/525_b-doors_no-label.webp",   title: "REEFER 525 G3 Black Doors" },
  { id: 54, src: "/assets/aquariums/reefer-g3/black-doors/625_b-doors_no-label.webp",   title: "REEFER 625 G3 Black Doors" },
  { id: 55, src: "/assets/aquariums/reefer-g3/black-doors/750_b-doors_no-label.webp",   title: "REEFER 750 G3 Black Doors" },
  { id: 56, src: "/assets/aquariums/reefer-g3/black-doors/p350_b-doors_no-label.webp",  title: "REEFER Peninsula 350 G3 Black Doors" },
  { id: 57, src: "/assets/aquariums/reefer-g3/black-doors/p500_b-doors_no-label.webp",  title: "REEFER Peninsula 500 G3 Black Doors" },
  { id: 58, src: "/assets/aquariums/reefer-g3/black-doors/ps-700_b-doors_no-label.webp",title: "REEFER Peninsula S-700 G3 Black Doors" },
  { id: 59, src: "/assets/aquariums/reefer-g3/black-doors/ps-950_b-doors_no-label.webp",title: "REEFER Peninsula S-950 G3 Black Doors" },
  { id: 60, src: "/assets/aquariums/reefer-g3/black-doors/s-550-g2-_w-doors.webp",      title: "REEFER S-550 G2+ Black Doors" },
  { id: 61, src: "/assets/aquariums/reefer-g3/black-doors/s-700-g2-_w-doors.webp",      title: "REEFER S-700 G2+ Black Doors" },
  { id: 62, src: "/assets/aquariums/reefer-g3/black-doors/s-850_b-doors_no-label.webp", title: "REEFER S-850 G3 Black Doors" },
  { id: 63, src: "/assets/aquariums/reefer-g3/black-doors/s-1000_b-doors_no-label.webp",title: "REEFER S-1000 G3 Black Doors" },
];

const WHITE_NO_DOORS = [
  { id: 64, src: "/assets/aquariums/reefer-g3/white-no-doors/170-200-g3_white.webp",  title: "REEFER 170–200 G3 White" },
  { id: 65, src: "/assets/aquariums/reefer-g3/white-no-doors/250-300-g3-white.webp",  title: "REEFER 250–300 G3 White" },
  { id: 66, src: "/assets/aquariums/reefer-g3/white-no-doors/350-g3_white.webp",      title: "REEFER 350 G3 White" },
  { id: 67, src: "/assets/aquariums/reefer-g3/white-no-doors/425-g3_white.webp",      title: "REEFER 425 G3 White" },
  { id: 68, src: "/assets/aquariums/reefer-g3/white-no-doors/525-625-g3_white.webp",  title: "REEFER 525–625 G3 White" },
  { id: 69, src: "/assets/aquariums/reefer-g3/white-no-doors/750-g3_white.webp",      title: "REEFER 750 G3 White" },
  { id: 70, src: "/assets/aquariums/reefer-g3/white-no-doors/p350-g3_white.webp",     title: "REEFER Peninsula 350 G3 White" },
  { id: 71, src: "/assets/aquariums/reefer-g3/white-no-doors/p500-g3_white.webp",     title: "REEFER Peninsula 500 G3 White" },
  { id: 72, src: "/assets/aquariums/reefer-g3/white-no-doors/ps-700-g3_white.webp",   title: "REEFER Peninsula S-700 G3 White" },
  { id: 73, src: "/assets/aquariums/reefer-g3/white-no-doors/ps-950-g3_white.webp",   title: "REEFER Peninsula S-950 G3 White" },
  { id: 74, src: "/assets/aquariums/reefer-g3/white-no-doors/s-550-g3_white.webp",    title: "REEFER S-550 G3 White" },
  { id: 75, src: "/assets/aquariums/reefer-g3/white-no-doors/s-700-g3_white.webp",    title: "REEFER S-700 G3 White" },
  { id: 76, src: "/assets/aquariums/reefer-g3/white-no-doors/s-850-g3_white.webp",    title: "REEFER S-850 G3 White" },
  { id: 77, src: "/assets/aquariums/reefer-g3/white-no-doors/s-1000-g3_white.webp",   title: "REEFER S-1000 G3 White" },
];

const WHITE_DOORS = [
  { id: 78, src: "/assets/aquariums/reefer-g3/white-doors/170_w-doors.webp",          title: "REEFER 170 G3 White Doors" },
  { id: 79, src: "/assets/aquariums/reefer-g3/white-doors/200_w-doors.webp",          title: "REEFER 200 G3 White Doors" },
  { id: 80, src: "/assets/aquariums/reefer-g3/white-doors/250_w-doors.webp",          title: "REEFER 250 G3 White Doors" },
  { id: 81, src: "/assets/aquariums/reefer-g3/white-doors/300_w-doors.webp",          title: "REEFER 300 G3 White Doors" },
  { id: 82, src: "/assets/aquariums/reefer-g3/white-doors/350_w-doors.webp",          title: "REEFER 350 G3 White Doors" },
  { id: 83, src: "/assets/aquariums/reefer-g3/white-doors/425_w-doors.webp",          title: "REEFER 425 G3 White Doors" },
  { id: 84, src: "/assets/aquariums/reefer-g3/white-doors/525_w-doors.webp",          title: "REEFER 525 G3 White Doors" },
  { id: 85, src: "/assets/aquariums/reefer-g3/white-doors/625_w-doors.webp",          title: "REEFER 625 G3 White Doors" },
  { id: 86, src: "/assets/aquariums/reefer-g3/white-doors/750_w-doors.webp",          title: "REEFER 750 G3 White Doors" },
  { id: 87, src: "/assets/aquariums/reefer-g3/white-doors/p350_w-doors.webp",         title: "REEFER Peninsula 350 G3 White Doors" },
  { id: 88, src: "/assets/aquariums/reefer-g3/white-doors/p500_w-doors.webp",         title: "REEFER Peninsula 500 G3 White Doors" },
  { id: 89, src: "/assets/aquariums/reefer-g3/white-doors/ps-700_w-doors.webp",       title: "REEFER Peninsula S-700 G3 White Doors" },
  { id: 90, src: "/assets/aquariums/reefer-g3/white-doors/ps-950_w-doors.webp",       title: "REEFER Peninsula S-950 G3 White Doors" },
  { id: 91, src: "/assets/aquariums/reefer-g3/white-doors/s-550-g2-_w-doors.webp",    title: "REEFER S-550 G2+ White Doors" },
  { id: 92, src: "/assets/aquariums/reefer-g3/white-doors/s-700-g2-_w-doors.webp",    title: "REEFER S-700 G2+ White Doors" },
  { id: 93, src: "/assets/aquariums/reefer-g3/white-doors/s850_w-doors.webp",         title: "REEFER S-850 G3 White Doors" },
  { id: 94, src: "/assets/aquariums/reefer-g3/white-doors/s1000_w-doors.webp",        title: "REEFER S-1000 G3 White Doors" },
];

export const REEFER_G3_GALLERY: GalleryGroup[] = [
  { slug: "black-no-doors", label: "Black bez dveří · #33–46",  items: BLACK_NO_DOORS },
  { slug: "black-doors",    label: "Black se dveřmi · #47–63",  items: BLACK_DOORS },
  { slug: "white-no-doors", label: "White bez dveří · #64–77",  items: WHITE_NO_DOORS },
  { slug: "white-doors",    label: "White se dveřmi · #78–94",  items: WHITE_DOORS },
];
