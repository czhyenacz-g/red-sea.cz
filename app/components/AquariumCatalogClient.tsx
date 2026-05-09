"use client";

import { useEffect, useMemo, useState } from "react";
import { AquariumColorSwitcher } from "./AquariumColorSwitcher";
import { AQUARIUM_GROUPS, type AquariumGroup, type AquariumProduct } from "../data/aquariums";

function hasUnverifiedMarkers(item: AquariumGroup | AquariumProduct) {
  const textFields = [
    "sidebarSummary" in item ? item.sidebarSummary : "",
    "fullDescription" in item ? item.fullDescription : "",
    "shortDescription" in item ? item.shortDescription : "",
    "longDescription" in item ? item.longDescription ?? "" : "",
  ];

  return (
    item.source?.status !== "verified" ||
    textFields.some((value) => value.includes("[i]")) ||
    ("specs" in item ? item.specs.some((spec) => spec.value.includes("[i]")) : false) ||
    ("highlights" in item ? item.highlights?.some((highlight) => highlight.includes("[i]")) ?? false : false)
  );
}

function AquariumSidebar({
  groups,
  selectedGroupSlug,
  onSelectGroup,
}: {
  groups: AquariumGroup[];
  selectedGroupSlug: string;
  onSelectGroup: (slug: string) => void;
}) {
  return (
    <aside className="lg:sticky lg:top-24 lg:w-[360px] lg:flex-shrink-0">
      <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-2.5 shadow-2xl backdrop-blur">
        <div className="mb-3 hidden px-2 pt-1 lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Catalog</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Select a family first, then choose a model variant underneath.</p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
          {groups.map((group) => {
            const active = group.slug === selectedGroupSlug;

            return (
              <button
                key={group.slug}
                type="button"
                onClick={() => onSelectGroup(group.slug)}
                aria-pressed={active}
                className={`flex min-w-[16.25rem] flex-col rounded-3xl border px-4 py-4 text-left transition-all duration-200 lg:min-w-0 lg:w-full ${
                  active
                    ? "border-amber-400 bg-white text-slate-950 shadow-[0_0_0_1px_rgba(251,191,36,0.45)]"
                    : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/8"
                }`}
              >
                <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${active ? "text-slate-500" : "text-slate-400"}`}>
                  Product family
                </p>
                <h3 className="mt-2.5 text-lg font-semibold tracking-tight">{group.name}</h3>
                <p className={`mt-1.5 line-clamp-2 text-sm leading-5 ${active ? "text-slate-600" : "text-slate-400"}`}>
                  {group.sidebarSummary}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      active ? "bg-slate-100 text-slate-700" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    {group.products.length} modely
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                      active ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {active ? "Vybraná rodina" : "Vybrat rodinu"}
                    <span className="text-sm">⌄</span>
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

function ModelSelector({
  products,
  selectedProductSlug,
  onSelectProduct,
}: {
  products: AquariumProduct[];
  selectedProductSlug: string;
  onSelectProduct: (slug: string) => void;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Models</p>
          <p className="mt-1 text-sm text-slate-600">Choose a width, shape or size variant for the selected family.</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{products.length} variants</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 overflow-x-auto pb-1 lg:overflow-visible">
        {products.map((product) => {
          const active = product.slug === selectedProductSlug;
          return (
            <button
              key={product.slug}
              type="button"
              onClick={() => onSelectProduct(product.slug)}
              aria-pressed={active}
              className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active
                  ? "border-amber-400 bg-slate-950 text-white shadow-[0_0_0_1px_rgba(251,191,36,0.35)]"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white"
              }`}
            >
              {product.volume ?? product.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FamilyDetail({
  group,
  selectedProduct,
  onSelectProduct,
}: {
  group: AquariumGroup;
  selectedProduct: AquariumProduct;
  onSelectProduct: (slug: string) => void;
}) {
  return (
    <div className="space-y-6">
      <AquariumColorSwitcher
        className="shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)]"
        eyebrow={group.name}
        heading={selectedProduct.name}
        intro={group.fullDescription}
        product={selectedProduct}
      />

      <ModelSelector products={group.products} selectedProductSlug={selectedProduct.slug} onSelectProduct={onSelectProduct} />

      {selectedProduct.status === "placeholder" ? (
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 px-5 py-4 text-amber-900">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Preview coming soon</p>
          <p className="mt-2 text-sm leading-6">
            This model is listed in the catalog, but the final converted imagery is not ready yet.
          </p>
        </div>
      ) : null}

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{selectedProduct.series}</p>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
              selectedProduct.status === "ready" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
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

export function AquariumCatalogClient() {
  const [selectedGroupSlug, setSelectedGroupSlug] = useState(AQUARIUM_GROUPS[0]?.slug ?? "");
  const selectedGroup = useMemo(
    () => AQUARIUM_GROUPS.find((group) => group.slug === selectedGroupSlug) ?? AQUARIUM_GROUPS[0],
    [selectedGroupSlug]
  );
  const [selectedProductSlug, setSelectedProductSlug] = useState(selectedGroup?.products[0]?.slug ?? "");

  useEffect(() => {
    const firstProductSlug = selectedGroup?.products[0]?.slug ?? "";
    if (!selectedGroup.products.some((product) => product.slug === selectedProductSlug)) {
      setSelectedProductSlug(firstProductSlug);
    }
  }, [selectedGroup, selectedProductSlug]);

  const selectedProduct = useMemo(
    () => selectedGroup.products.find((product) => product.slug === selectedProductSlug) ?? selectedGroup.products[0],
    [selectedGroup, selectedProductSlug]
  );

  const hasUnverifiedContent = hasUnverifiedMarkers(selectedGroup) || hasUnverifiedMarkers(selectedProduct);

  return (
    <div className="grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
      <AquariumSidebar groups={AQUARIUM_GROUPS} selectedGroupSlug={selectedGroup.slug} onSelectGroup={(slug) => {
        const nextGroup = AQUARIUM_GROUPS.find((group) => group.slug === slug);
        setSelectedGroupSlug(slug);
        setSelectedProductSlug(nextGroup?.products[0]?.slug ?? "");
      }} />

      <div className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto lg:pr-2">
        <FamilyDetail group={selectedGroup} selectedProduct={selectedProduct} onSelectProduct={setSelectedProductSlug} />

        {hasUnverifiedContent ? (
          <p className="px-1 text-xs leading-5 text-slate-400">
            [i] = orientační / neověřený údaj, bude doplněno podle oficiálních materiálů.
          </p>
        ) : null}
      </div>
    </div>
  );
}
