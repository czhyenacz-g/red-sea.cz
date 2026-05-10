"use client";

import { useEffect, useMemo, useState } from "react";
import { AquariumColorSwitcher } from "./AquariumColorSwitcher";
import { AQUARIUM_GROUPS, type AquariumGroup, type AquariumProduct } from "../data/aquariums";

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
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Akvarijní systémy</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Akvarijní designové komplety se vyznačují nejen dokonalým vzhledem, ale i snadnou obsluhovatelností.</p>
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
    <div className="space-y-4">
      <AquariumColorSwitcher
        className="shadow-[0_30px_80px_-30px_rgba(15,23,42,0.65)]"
        eyebrow={group.name}
        heading={selectedProduct.name}
        intro={group.fullDescription}
        product={selectedProduct}
        modelOptions={group.products.map((product) => ({ slug: product.slug, label: product.volume ?? product.name }))}
        selectedModelSlug={selectedProduct.slug}
        onSelectModel={onSelectProduct}
      />
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

  return (
    <div className="grid gap-8 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-start">
      <AquariumSidebar groups={AQUARIUM_GROUPS} selectedGroupSlug={selectedGroup.slug} onSelectGroup={(slug) => {
        const nextGroup = AQUARIUM_GROUPS.find((group) => group.slug === slug);
        setSelectedGroupSlug(slug);
        setSelectedProductSlug(nextGroup?.products[0]?.slug ?? "");
      }} />

      <div className="space-y-5 lg:sticky lg:top-24">
        <FamilyDetail group={selectedGroup} selectedProduct={selectedProduct} onSelectProduct={setSelectedProductSlug} />
      </div>
    </div>
  );
}
