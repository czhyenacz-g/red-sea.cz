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
          <div className="relative aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 13vw"
              className="object-contain p-2.5"
            />
          </div>
        </button>
      ) : (
        <div className="border-b border-slate-100 bg-slate-50/50 aspect-square flex flex-col items-center justify-center gap-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-slate-300"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span className="text-[10px] text-slate-400 text-center leading-tight px-2">
            Čeká na<br />přiřazení
          </span>
        </div>
      )}
      <div className="px-2.5 py-2">
        {image ? (
          <p className="text-[10px] font-semibold text-amber-500 mb-0.5">#{image.number}</p>
        ) : (
          <p className="text-[10px] font-semibold text-slate-300 mb-0.5">#—</p>
        )}
        <p className="text-[11px] font-medium leading-snug text-slate-700">{title}</p>
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
  const hasItems = group.items.length > 0;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_32px_-12px_rgba(15,23,42,0.18)]">
      {hasItems ? (
        /* Two-column layout: left = info + image, right = product cards */
        <div className="grid lg:grid-cols-[5fr_7fr] divide-y divide-slate-100 lg:divide-y-0 lg:divide-x">
          {/* Left: flex column so image fills remaining height */}
          <div className="flex flex-col p-5 lg:p-6">
            <div>
              <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                {group.badge}
              </span>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">{group.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{group.text}</p>
            </div>

            {group.image && (
              <button
                type="button"
                onClick={() =>
                  onOpen({ src: group.image!.src, alt: group.image!.alt, title: group.title, label: `#${group.image!.number}` })
                }
                className="mt-4 flex flex-1 flex-col cursor-zoom-in text-left"
              >
                <div className="relative flex-1 min-h-[10rem] overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 transition-transform duration-200 hover:scale-[1.02]">
                  <Image
                    src={group.image.src}
                    alt={group.image.alt}
                    fill
                    sizes="(max-width: 1024px) 80vw, 33vw"
                    className="object-contain p-5"
                  />
                </div>
                <p className="mt-1.5 text-[10px] font-semibold text-amber-500">#{group.image.number}</p>
              </button>
            )}
          </div>

          {/* Right: product cards */}
          <div className="p-5 lg:p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item) => (
                <ItemCard
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  onOpen={
                    item.image
                      ? (img) => onOpen({ src: img.src, alt: img.alt, title: item.title, label: `#${img.number}` })
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* No items: badge + text on left, kit image on right */
        <div className="grid lg:grid-cols-[3fr_2fr] lg:items-start">
          <div className="p-5 lg:p-6">
            <span className="inline-block rounded-full border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
              {group.badge}
            </span>
            <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">{group.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{group.text}</p>
          </div>

          {group.image && (
            <button
              type="button"
              onClick={() =>
                onOpen({ src: group.image!.src, alt: group.image!.alt, title: group.title, label: `#${group.image!.number}` })
              }
              className="px-5 pb-5 pt-0 lg:p-6 cursor-zoom-in text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 transition-transform duration-200 hover:scale-[1.02]">
                <Image
                  src={group.image.src}
                  alt={group.image.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-contain p-5"
                />
              </div>
              <p className="mt-1.5 text-[10px] font-semibold text-amber-500">#{group.image.number}</p>
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default function Page() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        {/* Intro — text only, constrained width for readability */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{TESTS_TITLE}</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">{TESTS_INTRO}</p>
        </div>

        {/* Group sections */}
        <div className="mt-8 space-y-4">
          {TEST_GROUPS.map((group) => (
            <GroupSection key={group.slug} group={group} onOpen={setLightbox} />
          ))}
        </div>

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
