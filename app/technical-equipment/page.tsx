"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import { TECHNICAL_EQUIPMENT_INTRO, TECHNICAL_EQUIPMENT_PRODUCTS } from "../data/technicalEquipment";

export default function Page() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Technická zařízení</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Technická zařízení</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{TECHNICAL_EQUIPMENT_INTRO}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {TECHNICAL_EQUIPMENT_PRODUCTS.map((product) => {
            const imageSrc = product.image;
            const canOpen = Boolean(imageSrc);

            return (
              <article key={product.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]">
                <div className="border-b border-slate-100 p-4">
                  <div className="rounded-[1.5rem] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-3">
                    {canOpen && imageSrc ? (
                      <button
                        type="button"
                        onClick={() => setLightboxImage({ src: imageSrc, alt: product.imageAlt })}
                        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-white cursor-zoom-in"
                      >
                      <Image
                        src={imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain p-5 transition-transform duration-200 hover:scale-[1.01]"
                      />
                      </button>
                    ) : (
                      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-white text-slate-400">
                        [placeholder]
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">{product.title}</h2>
                  <p className="text-sm leading-6 text-slate-600">{product.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      <ProductImageLightbox
        open={Boolean(lightboxImage)}
        imageSrc={lightboxImage?.src ?? null}
        imageAlt={lightboxImage?.alt ?? ""}
        onClose={() => setLightboxImage(null)}
        ariaLabel={lightboxImage ? `Zvětšený náhled ${lightboxImage.alt}` : "Zvětšený náhled obrázku"}
      />
    </div>
  );
}
