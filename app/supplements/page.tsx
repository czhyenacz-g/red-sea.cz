"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import {
  SUPPLEMENTS_ITEMS,
  SUPPLEMENTS_INTRO,
  SUPPLEMENTS_TMP_IMAGES,
  SUPPLEMENTS_TITLE,
  SEVEN_PART_FOUNDATION,
  SEVEN_PART_TRACE_COLORS,
  FOUR_PART_SIZES,
  FOUR_PART_CLARIFICATION,
  NUTRITION_TITLE,
  NUTRITION_ITEMS,
  type SupplementImage,
  type ProgramSubBlock,
} from "../data/supplements";
import { TESTS_TITLE, TESTS_INTRO, TEST_GROUPS } from "../data/tests";
import { RCP_FOUR_PART_GALLERY } from "../data/rcpFourPartGallery";

type LightboxState = {
  src: string;
  alt: string;
  title: string;
  label?: string | null;
};

function PackCard({
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
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)]">
      {primaryImage ? (
        <button
          type="button"
          onClick={() => onOpen?.(primaryImage)}
          className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-4 text-left cursor-zoom-in"
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-slate-100 bg-white">
            <Image src={primaryImage.src} alt={primaryImage.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain p-3" />
          </div>
        </button>
      ) : null}
      <div className="space-y-2 p-4">
        <h3 className="text-base font-semibold tracking-tight text-slate-950">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </article>
  );
}

function SubBlock({
  block,
  onOpen,
}: {
  block: ProgramSubBlock;
  onOpen: (image: SupplementImage, title: string) => void;
}) {
  const [activeView, setActiveView] = useState(0);
  const view = block.views[activeView];

  return (
    <div className="flex flex-col p-6 lg:p-8">
      <span className="self-start rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
        {block.badge}
      </span>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{block.title}</h3>
      <p className="mt-0.5 text-sm text-slate-500">{block.detail}</p>

      <div className="mt-5 h-36">
        {view.bottles ? (
          <div className="h-full grid grid-cols-4 gap-2">
            {view.bottles.map((bottle) => (
              <button
                key={bottle.src}
                type="button"
                onClick={() => onOpen(bottle, block.title)}
                className="relative h-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50"
              >
                <Image
                  src={bottle.src}
                  alt={bottle.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 15vw"
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>
        ) : view.image ? (
          <button
            type="button"
            onClick={() => onOpen(view.image!, block.title)}
            className="relative block h-full w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 text-left"
          >
            <Image
              src={view.image.src}
              alt={view.image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </button>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {block.views.map((v, i) => (
          <button
            key={v.label}
            type="button"
            onClick={() => setActiveView(i)}
            className={`rounded border px-2 py-0.5 text-[11px] font-medium transition-colors ${
              i === activeView
                ? "border-amber-600 bg-amber-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const fourPartImageData = SUPPLEMENTS_ITEMS[0].image;
  const fourPartImages = Array.isArray(fourPartImageData) ? fourPartImageData : fourPartImageData ? [fourPartImageData] : [];

  function openLightbox(src: string, alt: string, title: string, label?: string) {
    setLightbox({ src, alt, title, label });
  }

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Hero — intro + starter kit */}
        <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Přípravky</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{SUPPLEMENTS_TITLE}</h1>
            <div className="mt-5 space-y-4 text-base leading-7 text-slate-600">
              {SUPPLEMENTS_INTRO.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => openLightbox("/assets/supplements/rcp-starter-kit.webp", "RCP Starter Kit", "Reef Care Program Starter Kit")}
            className="group block rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 cursor-zoom-in lg:self-start p-4"
          >
            <Image
              src="/assets/supplements/rcp-starter-kit.webp"
              alt="RCP Starter Kit"
              width={1308}
              height={902}
              sizes="(max-width: 1024px) 60vw, 33vw"
              className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>
        </section>

        {/* Complete 4-part Supplement Program */}
        <section className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">{SUPPLEMENTS_ITEMS[0].title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{SUPPLEMENTS_ITEMS[0].text}</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{FOUR_PART_CLARIFICATION}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
              {FOUR_PART_SIZES.map((size) => (
                <span key={size.label} className="text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{size.label}</span>
                  {" · akvárium "}{size.volume}
                </span>
              ))}
            </div>
          </div>

          {fourPartImages.length > 0 ? (
            <div className={`grid gap-3 lg:self-start ${fourPartImages.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {fourPartImages.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => openLightbox(img.src, img.alt, SUPPLEMENTS_ITEMS[0].title)}
                  className="group block overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 cursor-zoom-in"
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 20vw"
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              ))}
            </div>
          ) : null}
        </section>

        {/* Complete 7-part Supplement Program */}
        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{SUPPLEMENTS_ITEMS[1].title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{SUPPLEMENTS_ITEMS[1].text}</p>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <SubBlock
                block={SEVEN_PART_FOUNDATION}
                onOpen={(image, title) => openLightbox(image.src, image.alt, title)}
              />
              <SubBlock
                block={SEVEN_PART_TRACE_COLORS}
                onOpen={(image, title) => openLightbox(image.src, image.alt, title)}
              />
            </div>
          </article>
        </section>

        {/* Balení */}
        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Balení</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Starter pack, Colors starter pack, Skeletal elements</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {SUPPLEMENTS_ITEMS.slice(2).map((item) => (
              <PackCard
                key={item.slug}
                title={item.title}
                text={item.text}
                image={item.image}
                onOpen={item.image ? (image) => openLightbox(image.src, image.alt, item.title) : undefined}
              />
            ))}
          </div>
        </section>

        {/* Výživa korálnatců */}
        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{NUTRITION_TITLE}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {NUTRITION_ITEMS.map((item) => (
              <PackCard
                key={item.slug}
                title={item.title}
                text={item.text}
                image={item.image}
                onOpen={item.image ? (img) => openLightbox(img.src, img.alt, item.title) : undefined}
              />
            ))}
          </div>
        </section>

        {/* Testy */}
        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{TESTS_TITLE}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{TESTS_INTRO}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {TEST_GROUPS.map((group) => (
              <article key={group.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)]">
                {group.image && (
                  <button
                    type="button"
                    onClick={() => openLightbox(group.image!.src, group.image!.alt, group.title, `#${group.image!.number}`)}
                    className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 cursor-zoom-in p-4"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-100 bg-white">
                      <Image
                        src={group.image.src}
                        alt={group.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-contain p-3"
                      />
                    </div>
                  </button>
                )}
                <div className="p-4">
                  <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                    {group.badge}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold leading-snug tracking-tight text-slate-950">{group.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600">{group.text}</p>

                  {group.items.length > 0 && (
                    <table className="mt-3 w-full border-collapse text-xs">
                      <tbody>
                        {group.items.map((item) => (
                          <tr key={item.title} className="border-t border-slate-100">
                            <td className="py-1.5 pr-2 text-slate-700 leading-snug">{item.title}</td>
                            <td className="py-1.5 text-right font-semibold text-amber-500 whitespace-nowrap">
                              {item.image ? `#${item.image.number}` : "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Reference gallery */}
        <div className="mt-16 border-t border-slate-200 pt-14">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Interní reference</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-600">Referenční galerie produktů</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Produktová galerie pro interní referenci, komunikaci s dodavatelem a budoucí vývoj obsahu.
            </p>
          </div>

          {/* 4-part program (#51–84) */}
          <div className="mb-10">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">4-part program · #80–113</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {RCP_FOUR_PART_GALLERY.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white/70">
                  <button
                    type="button"
                    onClick={() => openLightbox(item.image.src, item.image.alt, item.title, String(item.id))}
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <div className="relative aspect-[4/3] bg-slate-50/70">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-contain p-3"
                      />
                    </div>
                  </button>
                  <div className="border-t border-slate-100 px-3 py-2">
                    <p className="text-[11px] font-semibold text-amber-600">#{item.id}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{item.title}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Reef Care Program (#1–69) */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">Reef Care Program · #1–69</p>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {SUPPLEMENTS_TMP_IMAGES.filter((image) => image.number !== 57).map((image) => (
                <article key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white/70">
                  <button
                    type="button"
                    onClick={() => openLightbox(image.src, image.name, `${image.number}. ${image.name}`)}
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <div className="relative aspect-[4/3] bg-slate-50/70">
                      <Image
                        src={image.src}
                        alt={image.name}
                        fill
                        sizes="(max-width: 1280px) 50vw, 25vw"
                        className="object-contain p-3"
                      />
                    </div>
                  </button>
                  <div className="border-t border-slate-100 px-3 py-2">
                    <p className="text-[11px] font-semibold text-amber-600">{image.number}.</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{image.name}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </main>

      <ProductImageLightbox
        open={Boolean(lightbox)}
        imageSrc={lightbox?.src ?? null}
        imageAlt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.title}` : "Zvětšený náhled obrázku"}
        title={lightbox?.title}
        imageLabel={lightbox?.label ?? undefined}
      />
    </div>
  );
}
