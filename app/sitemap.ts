import type { MetadataRoute } from "next";

const BASE_URL = "https://red-sea.cz";

// Jen veřejné stránky z menu a patičky. Interní a prázdné (/original, /wizards,
// /accessories, /reef-care-products) sem nepatří.
const PAGES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/aquariums", priority: 0.9 },
  { path: "/reefbeat", priority: 0.8 },
  { path: "/reefsense", priority: 0.8 },
  { path: "/salt", priority: 0.8 },
  { path: "/supplements", priority: 0.8 },
  { path: "/tests", priority: 0.8 },
  { path: "/technical-equipment", priority: 0.8 },
  { path: "/kde-koupit", priority: 0.7 },
  { path: "/pro-partners", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
