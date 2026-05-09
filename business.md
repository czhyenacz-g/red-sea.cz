# red-sea.cz Business Specification

## Project Purpose

`red-sea.cz` is a Czech B2B and brand presentation site for Red Sea aquarium products.

The current purpose is to present the brand, its product families, and distributor-facing content in a clear and maintainable way.

This is not an e-shop. It should not imply direct consumer checkout, pricing cart flows, or retail ordering logic.

Longer term, the site should evolve into a product catalog and knowledge hub for aquariums, reef care, accessories, and supporting products.

## Target Audiences

- Czech retailers and resellers
- Aquarium and marine-aquarium studios
- B2B customers evaluating Red Sea product lines
- Internal sales or distribution teams who need a clean reference site
- Future visitors looking for product details, guides, and catalog context

## Content Strategy

- Keep the tone professional, clear, and Czech-first.
- Focus on product families, technical explanation, and distributor value.
- Prioritize clarity over marketing fluff.
- Use structured content so pages can be expanded into detailed product and knowledge pages later.
- Prefer reusable content data over duplicated page copy.
- Keep the site ready for future editorial growth, such as guides, product pages, and comparison content.

## Product Catalog Strategy

- Treat product families as a structured catalog, not as one-off landing pages.
- Store aquarium catalog data in `app/data/aquariums.ts`.
- Add new aquarium models by updating catalog data, not by duplicating UI components.
- Keep content separated from presentation components.
- Use reusable UI for catalog browsing, product selection, and cabinet color switching.
- Support future CMS integration by keeping product data normalized and typed.

## Aquarium Catalog Rules

- Aquarium content must be data-driven.
- Each aquarium product should be represented by a typed catalog entry.
- Required aquarium fields:
  - `slug`
  - `name`
  - `series`
  - `shortDescription`
  - optional `longDescription`
  - `variants.white.image`
  - `variants.black.image`
  - `imageAlt` per variant
  - `specs`
- Product pages or catalog views should reuse the same components and read from catalog data.
- Missing product images must use `null` plus a graceful placeholder UI.
- Never reference `tmp_photos` from runtime aquarium code.

## Image Workflow

- `tmp_photos` is a raw local source asset bank only.
- Do not use `tmp_photos` directly in runtime code.
- Selected images must be copied into `public/assets/...`.
- Runtime images should be optimized and converted to `webp` where possible.
- Keep asset naming consistent and predictable.
- For aquarium assets, use:
  - `public/assets/aquariums/{slug}-white.webp`
  - `public/assets/aquariums/{slug}-black.webp`
- If an asset is not ready, use `null` in the catalog and render a placeholder.

## tmp_photos Rules

- `tmp_photos` may stay on disk as a local source archive.
- It must remain ignored by Git.
- It must never be referenced by runtime code.
- It must not be used as the source path for public-facing pages.
- Any content migrated from `tmp_photos` must be copied into `public/assets` first.

## Cabinet Color / Theme Logic

- Cabinet variants are always:
  - `white`
  - `black`
- White cabinet must be shown on a dark presentation surface for contrast.
- Black cabinet must be shown on a light presentation surface for contrast.
- The switcher must remain reusable across aquarium products.
- The cabinet color selection changes both:
  - the displayed product image
  - the page or component theme
- The UI should remain readable on mobile and desktop in both modes.

## SEO Direction

- Use descriptive Czech metadata for brand and product pages.
- Keep product names, series, and page titles explicit.
- Prefer indexable, crawlable content instead of JS-only UI where possible.
- Build pages that can later support:
  - product detail SEO
  - category pages
  - comparison pages
  - editorial guides
- Avoid thin pages that only expose a single image with little context.

## Future Roadmap

- Expand the aquarium catalog to cover more models.
- Add real product detail pages from catalog data.
- Prepare for CMS-backed content if editorial scale grows.
- Add knowledge-hub content:
  - setup guides
  - maintenance guides
  - product comparisons
  - product family overviews
- Potentially add filtering, model lookup, and richer catalog navigation.
- Keep the codebase ready for future product metadata, related products, and image galleries.

## Technical Guardrails

- Use Next.js App Router patterns.
- Keep UI components reusable and typed.
- Keep data in `app/data/` or another dedicated data layer, not inside UI components.
- Avoid duplicating aquarium product UI per model.
- Use `Image` from `next/image` for public assets when appropriate.
- Do not add runtime references to `tmp_photos`.
- Prefer graceful fallbacks over broken image links.
- Keep styling maintainable with Tailwind.
- Keep changes small and data-driven when expanding product coverage.

