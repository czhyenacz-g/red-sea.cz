import Image from "next/image";
import { Header } from "../components/Header";
import { SUPPLEMENTS_CATALOG_IMAGES } from "../data/supplements";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Reef Care Program</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Obrázky a názvy produktů</h1>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Přehled slouží jako index obrázků ze složky `supplements`, očíslovaný pro snadný výběr a přiřazení.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SUPPLEMENTS_CATALOG_IMAGES.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_-42px_rgba(15,23,42,0.35)]"
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  <Image src={image.src} alt={image.name} fill sizes="(max-width: 1280px) 50vw, 25vw" className="object-contain p-4" />
                </div>
                <div className="border-t border-slate-100 px-4 py-3">
                  <p className="text-sm font-semibold text-amber-700">{image.number}.</p>
                  <p className="text-sm font-medium text-slate-700">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
