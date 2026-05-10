import { COMPANY_INTRO } from "./company";
import { PRODUCT_CATEGORIES } from "./productCategories";

export const SITE_SECTIONS = {
  source: "Redsea.pages" as const,
  company: COMPANY_INTRO,
  categories: PRODUCT_CATEGORIES,
  featuredAquariumSlug: "/aquariums" as const,
} as const;
