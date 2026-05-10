"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import { SUPPLEMENTS_ITEMS, SUPPLEMENTS_INTRO, SUPPLEMENTS_TITLE, type SupplementImage } from "../data/supplements";

function Card({
  title,
  text,
  image,
  onOpen,
}: {
  title: string;
  text: string;
  image?: SupplementImage;
  onOpen?: (image: SupplementImage) => void;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
      {image ? (
        <button
          type="button"
          onClick={() => onOpen?.(image)}
          className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-4 text-left cursor-zoom-in"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white">
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
          </div>
        </button>
      ) : null}

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-950">{title}</h2>
        <p className="text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </article>
  );
}

export default function Page() {
  const [lightbox, setLightbox] = useState<SupplementImage | null>(null);

  const heroImage = SUPPLEMENTS_ITEMS[0]?.image ?? null;

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Přípravky</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{SUPPLEMENTS_TITLE}</h1>
            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              {SUPPLEMENTS_INTRO.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {heroImage ? (
            <button
              type="button"
              onClick={() => setLightbox(heroImage)}
              className="group relative block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] cursor-zoom-in"
            >
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                Supplement Program
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>
          ) : null}
        </section>

        <section className="mt-12">
          <div className="grid gap-5 lg:grid-cols-2">
            {SUPPLEMENTS_ITEMS.slice(0, 2).map((item) => (
              <Card
                key={item.slug}
                title={item.title}
                text={item.text}
                image={item.image}
                onOpen={(image) => setLightbox(image)}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Balení</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Starter pack, Colors starter pack, Skeletal elements</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {SUPPLEMENTS_ITEMS.slice(2).map((item) => (
              <Card
                key={item.slug}
                title={item.title}
                text={item.text}
                image={item.image}
                onOpen={item.image ? (image) => setLightbox(image) : undefined}
              />
            ))}
          </div>
        </section>
      </main>

      <ProductImageLightbox
        open={Boolean(lightbox)}
        imageSrc={lightbox?.src ?? null}
        imageAlt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.alt}` : "Zvětšený náhled obrázku"}
      />
    </div>
  );
}
