"use client";

import { useMemo, useState } from "react";
import { AquariumColorSwitcher } from "./AquariumColorSwitcher";
import { AQUARIUM_CATALOG, type AquariumProduct } from "../data/aquariums";

function AquariumSidebar({
  products,
  selectedSlug,
  onSelect,
}: {
  products: AquariumProduct[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:w-[360px] lg:flex-shrink-0">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-3 shadow-2xl backdrop-blur">
        <div className="mb-3 hidden px-2 pt-1 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Catalog</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">Select a model to inspect cabinet colors, specs, and presentation state.</p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0">
          {products.map((product) => {
            const active = product.slug === selectedSlug;

            return (
              <button
                key={product.slug}
                type="button"
                onClick={() => onSelect(product.slug)}
                aria-pressed={active}
                className={`group flex min-w-[16.25rem] flex-col rounded-3xl border px-4 py-4 text-left transition-all duration-200 lg:min-w-0 lg:w-full ${
                  active
                    ? "border-amber-400 bg-white text-slate-950 shadow-[0_0_0_1px_rgba(251,191,36,0.45)]"
                    : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${active ? "text-slate-500" : "text-slate-400"}`}>
                    {product.series}
                  </p>
                  {product.featured ? (
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                        active ? "bg-amber-100 text-amber-900" : "bg-amber-400/10 text-amber-200"
                      }`}
                    >
                      Featured
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 text-lg font-semibold tracking-tight">{product.name}</h3>
                <p className={`mt-2 text-sm leading-6 ${active ? "text-slate-700" : "text-slate-300"}`}>{product.shortDescription}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.volume ? (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        active ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-200"
                      }`}
                    >
                      {product.volume}
                    </span>
                  ) : null}
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      active ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-200"
                    }`}
                  >
                    {product.status === "ready" ? "Ready" : "Preview coming soon"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export function AquariumCatalogClient() {
  const [selectedSlug, setSelectedSlug] = useState(AQUARIUM_CATALOG[0]?.slug ?? "");
  const selectedProduct = useMemo(
    () => AQUARIUM_CATALOG.find((product) => product.slug === selectedSlug) ?? AQUARIUM_CATALOG[0],
    [selectedSlug]
  );
  const hasUnverifiedContent = AQUARIUM_CATALOG.some(
    (product) => product.source?.status !== "verified" || product.shortDescription.includes("[i]") || product.specs.some((spec) => spec.value.includes("[i]"))
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
      <AquariumSidebar products={AQUARIUM_CATALOG} selectedSlug={selectedProduct.slug} onSelect={setSelectedSlug} />

      <div className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
        <AquariumColorSwitcher
          className="shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)]"
          eyebrow="Selected aquarium"
          heading={selectedProduct.name}
          intro="The explorer keeps the cabinet switcher reusable while the selected product changes from the sidebar."
          product={selectedProduct}
        />

        {selectedProduct.status === "placeholder" ? (
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Preview coming soon</p>
            <p className="mt-2 text-sm leading-6">
              This aquarium model is in the catalog, but the final converted imagery is not ready yet.
            </p>
          </div>
        ) : null}

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{selectedProduct.series}</p>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                selectedProduct.status === "ready"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {selectedProduct.status === "ready" ? "Ready" : "Preview coming soon"}
            </span>
          </div>

          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {selectedProduct.specs.map((spec) => (
              <SpecCard key={spec.label} label={spec.label} value={spec.value} />
            ))}
            {selectedProduct.highlights?.length ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Highlights</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {selectedProduct.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700">
                      {highlight}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>
        </div>

        {hasUnverifiedContent ? (
          <p className="px-1 text-xs leading-5 text-slate-400">
            [i] = orientační / neověřený údaj, bude doplněno podle oficiálních materiálů.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function SpecCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-slate-900">{value}</dd>
    </div>
  );
}
