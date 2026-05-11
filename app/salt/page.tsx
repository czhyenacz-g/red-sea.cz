"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { DelayedImageTooltip } from "../components/DelayedImageTooltip";
import { ProductImageLightbox } from "../components/ProductImageLightbox";

const TOP_CARDS = [
  {
    slug: "red-sea-salt-small-bucket",
    title: "Red Sea salt",
    description: "Prémiová mořská sůl.",
    image: "/assets/salt/candidates/06-rs-salt-7kg-bucket-with-salt.webp",
  },
    {
        slug: "bridge",
        title: "Mořská sůl",
        description: "Coral Pro Salt a Red Sea salt",
        image: "/assets/salt/candidates/02-buckets-with-salt-outside-big.webp",
    },
  {
    slug: "coral-pro-salt-small-bucket",
    title: "Coral Pro Salt",
    description: "Prémiová mořská sůl s vyšší alkalinitou.",
    image: "/assets/salt/candidates/01-cp-salt-7kg-bucket.webp",
  },

];

export default function Page() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Mořská sůl</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Red Sea salt</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {TOP_CARDS.map((product, index) => {
            const canOpen = Boolean(product.image);
            const imageFilename = product.image.split("/").pop() ?? product.title;
            const tone = index === 1 ? "border-amber-100 bg-[#fbf7ef]" : "border-slate-200 bg-white";

            return (
              <article key={product.slug} className={`overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] ${tone}`}>
                <div className={`border-b p-4 ${index === 1 ? "border-amber-100" : "border-slate-100"}`}>
                  {canOpen ? (
                    <DelayedImageTooltip label={imageFilename} className="block w-full">
                      <button
                        type="button"
                        onClick={() => setLightboxImage({ src: product.image, alt: product.title })}
                        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-white cursor-zoom-in"
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-contain p-5 transition-transform duration-200 hover:scale-[1.01]"
                        />
                      </button>
                    </DelayedImageTooltip>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-white cursor-default"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-contain p-5 transition-transform duration-200 hover:scale-[1.01]"
                      />
                    </button>
                  )}
                </div>

                <div className="space-y-3 p-5">
                  <h2 className="text-xl font-semibold tracking-tight text-slate-950">{product.title}</h2>
                  <p className="text-sm leading-6 text-slate-600">{product.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-12">
          <div className="mb-4 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Balení</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Mořské soli jsou dodávány v balení 7 kg, 22 kg (kýbl), 20,1 kg (krabice) a 25 kg – pytel pro profesionální použití.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { id: 1, label: "Sůl Coral Pro, malý kýbl - 7 kg", image: "/assets/salt/candidates/01-cp-salt-7kg-bucket.webp" },
              { id: 2, label: "Sůl Red Sea, malý kýbl - 7 kg", image: "/assets/salt/candidates/06-rs-salt-7kg-bucket-with-salt.webp" },
              { id: 3, label: "Sůl Coral Pro, klasický kýbl - 22 kg", image: "/assets/salt/candidates/03-cp-salt-bucket-with-salt.webp" },
              { id: 4, label: "Sůl Red Sea, klasický kýbl - 22 kg", image: "/assets/salt/candidates/07-rs-salt-bucket-with-salt.webp" },
              { id: 5, label: "Sůl Coral Pro, krabice - 20,1 kg", image: "/assets/salt/candidates/08-cp-20kg-160gal.webp" },
              { id: 6, label: "Sůl Red Sea, krabice - 20,1 kg", image: "/assets/salt/candidates/09-rs-20kg-160gal.webp" },
              { id: 7, label: "Sůl Coral Pro, pytel - 25 kg", image: "/assets/salt/candidates/10-coral-pro-25kg-bag.webp" },
              { id: 8, label: "Sůl Red Sea, pytel - 25 kg", image: "/assets/salt/candidates/11-red-sea-25kg-bag.webp" },
            ].map((candidate) => {
              const imageFilename = candidate.image.split("/").pop() ?? candidate.label;

              return (
                <article key={candidate.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)]">
                  <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                      {candidate.id}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Balení</span>
                  </div>
                  <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-3">
                    <DelayedImageTooltip label={imageFilename} className="block w-full">
                      <button
                        type="button"
                        onClick={() => setLightboxImage({ src: candidate.image, alt: candidate.label })}
                        className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-white cursor-zoom-in"
                      >
                        <Image
                          src={candidate.image}
                          alt={candidate.label}
                          fill
                          sizes="(max-width: 1280px) 100vw, 33vw"
                          className="object-contain p-4 transition-transform duration-200 hover:scale-[1.01]"
                        />
                      </button>
                    </DelayedImageTooltip>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm leading-6 text-slate-700">{candidate.label}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
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
