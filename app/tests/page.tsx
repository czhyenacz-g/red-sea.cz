"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { ProductImageLightbox } from "../components/ProductImageLightbox";
import { TESTS_TITLE, TESTS_INTRO, TEST_GROUPS, type TestImage, type TestGroup } from "../data/tests";

type LightboxState = {
  src: string;
  alt: string;
  title: string;
  label?: string;
};

function ItemCard({
  title,
  image,
  onOpen,
}: {
  title: string;
  image?: TestImage;
  onOpen?: (image: TestImage) => void;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {image ? (
        <button
          type="button"
          onClick={() => onOpen?.(image)}
          className="block w-full border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 cursor-zoom-in"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-contain p-3"
            />
          </div>
        </button>
      ) : (
        <div className="border-b border-slate-100 bg-slate-50/60 aspect-[4/3] flex items-center justify-center">
          <span className="text-[11px] text-slate-300 font-medium uppercase tracking-widest">bez fotografie</span>
        </div>
      )}
      <div className="px-3 py-2.5">
        {image && (
          <p className="text-[10px] font-semibold text-amber-500 mb-0.5">#{image.number}</p>
        )}
        <p className="text-[12px] font-medium leading-snug text-slate-700">{title}</p>
      </div>
    </article>
  );
}

function GroupSection({
  group,
  onOpen,
}: {
  group: TestGroup;
  onOpen: (state: LightboxState) => void;
}) {
  return (
    <section className="mt-12">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start">
        {/* Left: group header + image */}
        <div>
          <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
            {group.badge}
          </span>
          <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{group.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{group.text}</p>

          {group.image && (
            <button
              type="button"
              onClick={() =>
                onOpen({
                  src: group.image!.src,
                  alt: group.image!.alt,
                  title: group.title,
                  label: `#${group.image!.number}`,
                })
              }
              className="mt-5 block w-full max-w-xs cursor-zoom-in overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 lg:max-w-full"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 33vw"
                  className="object-contain p-6"
                />
              </div>
              <div className="border-t border-slate-100 px-4 py-2 text-left">
                <span className="text-[10px] font-semibold text-amber-500">#{group.image.number}</span>
              </div>
            </button>
          )}
        </div>

        {/* Right: individual test items */}
        {group.items.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:self-start">
            {group.items.map((item) => (
              <ItemCard
                key={item.title}
                title={item.title}
                image={item.image}
                onOpen={
                  item.image
                    ? (img) =>
                        onOpen({
                          src: img.src,
                          alt: img.alt,
                          title: item.title,
                          label: `#${img.number}`,
                        })
                    : undefined
                }
              />
            ))}
          </div>
        ) : (
          <div className="lg:self-start">
            <p className="text-sm text-slate-400 italic">Sada bez dílčích položek v tomto katalogu.</p>
          </div>
        )}
      </div>

      <div className="mt-10 border-b border-slate-100" />
    </section>
  );
}

export default function Page() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{TESTS_TITLE}</h1>
            <p className="mt-5 text-base leading-7 text-slate-600">{TESTS_INTRO}</p>
          </div>

          {TEST_GROUPS[0].image && (
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: TEST_GROUPS[0].image!.src,
                  alt: TEST_GROUPS[0].image!.alt,
                  title: TEST_GROUPS[0].title,
                  label: `#${TEST_GROUPS[0].image!.number}`,
                })
              }
              className="group block rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 cursor-zoom-in lg:self-start p-4"
            >
              <Image
                src={TEST_GROUPS[0].image.src}
                alt={TEST_GROUPS[0].image.alt}
                width={800}
                height={600}
                sizes="(max-width: 1024px) 60vw, 33vw"
                className="w-full h-auto rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>
          )}
        </section>

        {/* Group sections */}
        {TEST_GROUPS.map((group) => (
          <GroupSection
            key={group.slug}
            group={group}
            onOpen={setLightbox}
          />
        ))}

      </main>

      <ProductImageLightbox
        open={Boolean(lightbox)}
        imageSrc={lightbox?.src ?? null}
        imageAlt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
        ariaLabel={lightbox ? `Zvětšený náhled ${lightbox.title}` : "Zvětšený náhled obrázku"}
        title={lightbox?.title}
        imageLabel={lightbox?.label}
      />
    </div>
  );
}
