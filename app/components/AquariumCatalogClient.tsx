"use client";

import { useMemo, useState } from "react";
import { AquariumColorSwitcher } from "./AquariumColorSwitcher";
import { AQUARIUM_CATALOG, type AquariumProduct } from "../data/aquariums";

function AquariumSelector({
  products,
  selectedSlug,
  onSelect,
}: {
  products: AquariumProduct[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => {
        const active = product.slug === selectedSlug;

        return (
          <button
            key={product.slug}
            type="button"
            onClick={() => onSelect(product.slug)}
            className={`rounded-3xl border p-4 text-left transition-colors ${
              active ? "border-amber-400 bg-amber-50 text-slate-950" : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-current/60">{product.series}</p>
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm leading-6 text-current/70">{product.shortDescription}</p>
          </button>
        );
      })}
    </div>
  );
}

export function AquariumCatalogClient() {
  const [selectedSlug, setSelectedSlug] = useState(AQUARIUM_CATALOG[0]?.slug ?? "");
  const selectedProduct = useMemo(
    () => AQUARIUM_CATALOG.find((product) => product.slug === selectedSlug) ?? AQUARIUM_CATALOG[0],
    [selectedSlug]
  );

  return (
    <div className="space-y-8">
      <AquariumSelector products={AQUARIUM_CATALOG} selectedSlug={selectedProduct.slug} onSelect={setSelectedSlug} />
      <AquariumColorSwitcher
        eyebrow="Selected aquarium"
        heading={selectedProduct.name}
        intro="The product viewer below keeps the cabinet color switcher reusable while the catalog data stays separate from the UI."
        product={selectedProduct}
      />
    </div>
  );
}
