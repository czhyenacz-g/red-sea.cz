"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { DelayedImageTooltip } from "./DelayedImageTooltip";
import { ProductImageLightbox } from "./ProductImageLightbox";
import type { AquariumProduct, CabinetColor } from "../data/aquariums";

type AquariumColorSwitcherProps = {
  product: AquariumProduct;
  modelOptions?: Array<{ slug: string; label: string }>;
  modelGroups?: Array<{ label: string; options: Array<{ slug: string; label: string }> }>;
  selectedModelSlug?: string;
  onSelectModel?: (slug: string) => void;
  eyebrow?: string;
  heading: string;
  intro: string;
  className?: string;
};

const SWITCHER_OPTIONS: Array<{ color: CabinetColor; label: string }> = [
  { color: "white", label: "Bílá skříňka" },
  { color: "black", label: "Černá skříňka" },
];

export function AquariumColorSwitcher({
  product,
  modelOptions,
  modelGroups,
  selectedModelSlug,
  onSelectModel,
  eyebrow,
  heading,
  intro,
  className,
}: AquariumColorSwitcherProps) {
  const [selectedColor, setSelectedColor] = useState<CabinetColor>("white");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const selected = useMemo(() => product.variants[selectedColor], [product.variants, selectedColor]);
  const selectedImage = selected.images[galleryIndex] ?? selected.images[0] ?? null;

  const theme =
    selectedColor === "white"
      ? {
          shell: "bg-[#09121d] text-white",
          panel: "border-white/10 bg-white/5",
          muted: "text-slate-300",
          button: "border-white/10 bg-white/5 text-white hover:bg-white/10",
          buttonActive: "border-amber-400 bg-amber-400 text-slate-950",
          accent: "text-amber-300",
          imageBackdrop: "bg-white",
          imageFrame: "border-white/10",
        }
      : {
          shell: "bg-white text-slate-900",
          panel: "border-slate-200 bg-slate-50",
          muted: "text-slate-600",
          button: "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
          buttonActive: "border-slate-900 bg-slate-900 text-white",
          accent: "text-sky-700",
          imageBackdrop: "bg-white",
          imageFrame: "border-slate-200",
        };

  const hasImage = Boolean(selectedImage);
  const imageSrc = selectedImage?.src ?? null;
  const imageFilename = selectedImage?.src.split("/").pop() ?? "";

  useEffect(() => {
    setGalleryIndex(0);
  }, [product.slug, selectedColor]);

  const handlePrevImage = () => {
    if (!selected.images.length) {
      return;
    }
    setGalleryIndex((current) => (current - 1 + selected.images.length) % selected.images.length);
  };

  const handleNextImage = () => {
    if (!selected.images.length) {
      return;
    }
    setGalleryIndex((current) => (current + 1) % selected.images.length);
  };

  return (
    <section className={`overflow-hidden rounded-[2rem] border ${theme.panel} ${theme.shell} ${className ?? ""}`}>
      <div className="grid gap-8 p-5 md:p-7 lg:grid-cols-[0.95fr_1.15fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            {eyebrow ? <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${theme.accent}`}>{eyebrow}</p> : null}
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
            <p className={`max-w-2xl text-sm leading-6 sm:text-base ${theme.muted}`}>{intro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {SWITCHER_OPTIONS.map((option) => {
              const active = selectedColor === option.color;
              return (
                <button
                  key={option.color}
                  type="button"
                  onClick={() => setSelectedColor(option.color)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? theme.buttonActive : theme.button}`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      option.color === "white" ? (active ? "bg-slate-950" : "bg-white") : active ? "bg-white" : "bg-slate-900"
                    }`}
                  />
                  {option.label}
                </button>
              );
            })}

            {modelOptions && onSelectModel && !modelGroups ? (
              <label
                className="relative inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-200 px-4 py-2 text-sm font-medium text-slate-950 transition-colors"
              >
                <span className="pointer-events-none absolute left-4 text-slate-700">Seznam modelů</span>
                <select
                  value={selectedModelSlug ?? modelOptions[0]?.slug ?? ""}
                  onChange={(event) => onSelectModel(event.target.value)}
                  className="min-w-[7.5rem] appearance-none bg-slate-200 pr-5 text-sm font-medium text-transparent outline-none caret-transparent"
                  aria-label="Seznam modelů akvária"
                >
                  {modelOptions.map((option) => (
                    <option key={option.slug} value={option.slug} className="bg-slate-200 text-slate-950">
                      {option.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 text-current/70">⌄</span>
              </label>
            ) : null}
          </div>

          {modelGroups && onSelectModel ? (
            <div className="space-y-2">
              {modelGroups.map((group) => (
                <div
                  key={group.label}
                  className={`rounded-2xl border px-3 py-3 ${selectedColor === "white" ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"}`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${theme.muted}`}>{group.label}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.options.map((option) => {
                      const active = option.slug === selectedModelSlug;
                      return (
                        <button
                          key={option.slug}
                          type="button"
                          onClick={() => onSelectModel(option.slug)}
                          aria-pressed={active}
                          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                            active ? theme.buttonActive : theme.button
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/*
          <div className={`rounded-3xl border p-4 md:p-5 ${theme.panel}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-current/60">Vybraný model</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{product.name}</h3>
            <p className={`mt-1 text-sm font-medium uppercase tracking-[0.2em] ${theme.muted}`}>{product.series}</p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec.label} className={`rounded-2xl border px-4 py-3 ${theme.panel}`}>
                  <dt className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.muted}`}>{spec.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          */}
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl" />
          <div className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl ${theme.panel} ${theme.imageFrame}`}>
            <div className={`relative aspect-[10/9] overflow-hidden rounded-[1.5rem] ${theme.imageBackdrop}`}>
              {hasImage && imageSrc ? (
                <DelayedImageTooltip label={imageFilename || product.name} className="absolute inset-0">
                  <>
                    {selected.images.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          aria-label="Předchozí varianta obrázku"
                          className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white shadow-lg transition-colors hover:bg-slate-900"
                        >
                          <span className="text-2xl leading-none">‹</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          aria-label="Další varianta obrázku"
                          className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/75 text-white shadow-lg transition-colors hover:bg-slate-900"
                        >
                          <span className="text-2xl leading-none">›</span>
                        </button>
                        <div className="absolute bottom-3 right-3 z-10 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1 text-xs font-medium text-white shadow-lg">
                          {galleryIndex + 1} / {selected.images.length}
                        </div>
                      </>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      aria-label={`Open larger preview of ${product.name}`}
                      className="group absolute inset-0 cursor-zoom-in"
                    >
                      <Image
                        src={imageSrc}
                        alt={selectedImage?.alt ?? product.name}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-contain p-2 transition-transform duration-200 group-hover:scale-[1.01] sm:p-3"
                      />
                    </button>
                  </>
                </DelayedImageTooltip>
              ) : (
                <div className={`flex h-full w-full items-center justify-center p-6 text-center ${theme.muted}`}>
                  <div className="max-w-sm space-y-3">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border ${theme.panel}`}>
                      <span className="text-2xl">+</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && hasImage && imageSrc ? (
        <ProductImageLightbox
          open={lightboxOpen}
          imageSrc={imageSrc}
          imageAlt={selectedImage?.alt ?? product.name}
          onClose={() => setLightboxOpen(false)}
          ariaLabel={`Zvětšený náhled ${product.name}`}
          title={product.name}
          imageLabel={selectedImage?.label}
          imageIndex={galleryIndex}
          imageCount={selected.images.length}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
        />
      ) : null}
    </section>
  );
}
