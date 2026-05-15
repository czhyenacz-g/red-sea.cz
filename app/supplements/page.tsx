"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import { SUPPLEMENTS_ITEMS, SUPPLEMENTS_INTRO, SUPPLEMENTS_TMP_IMAGES, SUPPLEMENTS_TITLE, type SupplementImage } from "../data/supplements";

type LightboxState = {
  src: string;
  alt: string;
  title: string;
  label?: string | null;
};

function Card({
  title,
  text,
  image,
  onOpen,
}: {
  title: string;
  text: string;
  image?: SupplementImage | SupplementImage[];
  onOpen?: (image: SupplementImage) => void;
}) {
  const primaryImage = Array.isArray(image) ? image[0] : image;
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
      {primaryImage ? (
        <button
          type="button"
          onClick={() => onOpen?.(primaryImage)}
          className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-4 text-left cursor-zoom-in"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white">
            <Image src={primaryImage.src} alt={primaryImage.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
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
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const heroImage = SUPPLEMENTS_TMP_IMAGES.find((image) => image.number === 38) ?? null;

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
              onClick={() => {
                setLightbox({ src: heroImage.src, alt: heroImage.name, title: heroImage.name, label: "38" });
              }}
              className="group relative block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] cursor-zoom-in"
            >
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                Supplement Program
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>
          ) : null}
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{SUPPLEMENTS_ITEMS[1].title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{SUPPLEMENTS_ITEMS[1].text}</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {(Array.isArray(SUPPLEMENTS_ITEMS[1].image) ? SUPPLEMENTS_ITEMS[1].image : []).map((image) => (
              <article key={image.src} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]">
                <button
                  type="button"
                  onClick={() => {
                    setLightbox({ src: image.src, alt: image.alt, title: SUPPLEMENTS_ITEMS[1].title, label: image.alt });
                  }}
                  className="block w-full cursor-zoom-in bg-slate-50 p-4 text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-4" />
                  </div>
                </button>
              </article>
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
                onOpen={item.image ? (image) => {
                  setLightbox({ src: image.src, alt: image.alt, title: item.title });
                } : undefined}
              />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Všechny fotky z tmp_photos/Reef Care Program</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SUPPLEMENTS_TMP_IMAGES.filter((image) => image.number !== 57).map((image) => (
              <article key={image.src} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]">
                <button
                  type="button"
                  onClick={() => {
                    setLightbox({ src: image.src, alt: image.name, title: `${image.number}. ${image.name}` });
                  }}
                  className="block w-full cursor-zoom-in bg-slate-50 text-left"
                >
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <Image src={image.src} alt={image.name} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-contain p-4" />
                  </div>
                </button>
                <div className="border-t border-slate-100 px-4 py-3">
                  <p className="text-sm font-semibold text-amber-700">{image.number}.</p>
                  <p className="text-sm font-medium text-slate-700">{image.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <ProductImageLightbox
        open={Boolean(lightbox)}
        imageSrc={lightbox?.src ?? null}
        imageAlt={lightbox?.alt ?? ""}
        onClose={() => {
          setLightbox(null);
        }}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.title}` : "Zvětšený náhled obrázku"}
        title={lightbox?.title}
        imageLabel={lightbox?.label ?? undefined}
      />
    </div>
  );
}
