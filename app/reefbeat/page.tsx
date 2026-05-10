"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import { REEFBEAT_APP_SCREENSHOTS, REEFBEAT_HERO_IMAGE, REEFBEAT_INTRO, REEFBEAT_PRODUCTS, type ReefbeatImage } from "../data/reefbeatProducts";

function ProductCard({
  title,
  text,
  image,
  onOpen,
}: {
  title: string;
  text: string;
  image?: ReefbeatImage;
  onOpen?: (image: ReefbeatImage) => void;
}) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
      {image ? (
        <button
          type="button"
          onClick={() => onOpen?.(image)}
          className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-sky-50 p-4 text-left cursor-zoom-in"
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
  const [lightbox, setLightbox] = useState<{
    title: string;
    image: ReefbeatImage;
    imageIndex: number;
    images: ReefbeatImage[];
  } | null>(null);

  const openLightbox = (title: string, image: ReefbeatImage, images: ReefbeatImage[]) => {
    const imageIndex = Math.max(
      0,
      images.findIndex((item) => item.src === image.src)
    );
    setLightbox({ title, image, imageIndex, images });
  };

  const moveLightbox = (direction: -1 | 1) => {
    setLightbox((current) => {
      if (!current || current.images.length <= 1) {
        return current;
      }

      const nextIndex = (current.imageIndex + direction + current.images.length) % current.images.length;
      return {
        ...current,
        imageIndex: nextIndex,
        image: current.images[nextIndex],
      };
    });
  };

  const activeImage = lightbox?.image ?? null;

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Inteligentní technická zařízení</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Inteligentní technická zařízení</h1>
            <p className="mt-5 text-base leading-7 text-slate-600">{REEFBEAT_INTRO}</p>
          </div>

          <button
            type="button"
            onClick={() => openLightbox("ReefBeat App", REEFBEAT_HERO_IMAGE, [REEFBEAT_HERO_IMAGE])}
            className="group relative block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] cursor-zoom-in"
          >
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              ReefBeat App
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={REEFBEAT_HERO_IMAGE.src}
                alt={REEFBEAT_HERO_IMAGE.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">ReefBeat App</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Aplikace a obrazovky</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {REEFBEAT_APP_SCREENSHOTS.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox("ReefBeat App", image, REEFBEAT_APP_SCREENSHOTS)}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)] cursor-zoom-in"
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="border-t border-slate-100 px-4 py-3">
                  <p className="text-sm font-medium text-slate-700">{image.label ?? `Screenshot ${index + 1}`}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Produkty</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Vybrané produkty ReefBeat</h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {REEFBEAT_PRODUCTS.map((product) => (
              <ProductCard
                key={product.slug}
                title={product.title}
                text={product.text}
                image={product.images[0]}
                onOpen={(image) => openLightbox(product.title, image, product.images)}
              />
            ))}
          </div>
        </section>
      </main>

      <ProductImageLightbox
        open={Boolean(activeImage)}
        imageSrc={activeImage?.src ?? null}
        imageAlt={activeImage?.alt ?? ""}
        onClose={() => setLightbox(null)}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.title}` : "Zvětšený náhled obrázku"}
        title={lightbox?.title}
        imageLabel={activeImage?.label}
        imageIndex={lightbox?.imageIndex}
        imageCount={lightbox?.images.length}
        onPrev={lightbox ? () => moveLightbox(-1) : undefined}
        onNext={lightbox ? () => moveLightbox(1) : undefined}
      />
    </div>
  );
}
