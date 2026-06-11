"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductImageLightbox } from "./ProductImageLightbox";
import { REEFER_G3_MAX_GALLERY, type GalleryItem } from "../data/reeferG3MaxGallery";

type LightboxState = { item: GalleryItem; groupSlug: string };

export function ReeferG3MaxGallery() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const allItems = REEFER_G3_MAX_GALLERY.flatMap((g) => g.items);
  const currentIndex = lightbox ? allItems.findIndex((i) => i.id === lightbox.item.id) : -1;

  function openItem(item: GalleryItem, groupSlug: string) {
    setLightbox({ item, groupSlug });
  }

  function navigate(delta: number) {
    if (currentIndex < 0) return;
    const next = allItems[(currentIndex + delta + allItems.length) % allItems.length];
    const group = REEFER_G3_MAX_GALLERY.find((g) => g.items.some((i) => i.id === next.id));
    if (next && group) setLightbox({ item: next, groupSlug: group.slug });
  }

  return (
    <div className="mt-16 border-t border-slate-700 pt-14">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Interní reference</p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-300">REEFER G3 MAX — referenční galerie</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Produktová galerie pro interní referenci, komunikaci s dodavatelem a budoucí vývoj obsahu.
        </p>
      </div>

      {REEFER_G3_MAX_GALLERY.map((group) => (
        <div key={group.slug} className="mb-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            {group.label}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.items.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900/70">
                <button
                  type="button"
                  onClick={() => openItem(item, group.slug)}
                  className="block w-full cursor-zoom-in text-left"
                >
                  <div className="relative aspect-[4/3] bg-slate-800/50">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-contain p-3"
                    />
                  </div>
                </button>
                <div className="border-t border-slate-700 px-3 py-2">
                  <p className="text-[11px] font-semibold text-amber-400">#{item.id}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-slate-400">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}

      <ProductImageLightbox
        open={Boolean(lightbox)}
        imageSrc={lightbox?.item.src ?? null}
        imageAlt={lightbox?.item.title ?? ""}
        onClose={() => setLightbox(null)}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.item.title}` : "Zvětšený náhled obrázku"}
        title={lightbox?.item.title}
        imageLabel={lightbox ? String(lightbox.item.id) : undefined}
        imageIndex={currentIndex}
        imageCount={allItems.length}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
      />
    </div>
  );
}
