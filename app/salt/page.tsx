import Image from "next/image";
import { Header } from "../components/Header";
import { SALT_PRODUCTS } from "../data/saltProducts";

const SALT_CANDIDATES = [
  { id: 1, label: "CP SALT 7kg bucket with salt", image: "/assets/salt/candidates/01-cp-salt-7kg-bucket.webp" },
  { id: 2, label: "RS SALT 7kg bucket with salt", image: "/assets/salt/candidates/06-rs-salt-7kg-bucket-with-salt.webp" },
  { id: 3, label: "CP 20KG160gal", image: "/assets/salt/candidates/08-cp-20kg-160gal.webp" },
  { id: 4, label: "RS 20KG160gal", image: "/assets/salt/candidates/09-rs-20kg-160gal.webp" },
  { id: 5, label: "R11232 25kg_200gall Coral Pro Salt", image: "/assets/salt/candidates/10-coral-pro-25kg-bag.webp" },
  { id: 6, label: "R11072 25kg_200gall Red Sea Salt", image: "/assets/salt/candidates/11-red-sea-25kg-bag.webp" },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Mořská sůl</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Red Sea salt</h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SALT_PRODUCTS.map((product) => (
            <article
              key={product.slug}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-5"
                  />
                </div>
              </div>

              <div className="space-y-3 p-5">
                <h2 className="text-xl font-semibold tracking-tight text-slate-950">{product.title}</h2>
                <p className="text-sm leading-6 text-slate-600">{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12">
          <div className="mb-4 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Balení</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              Mořské soli jsou dodávány v balení 7 kg, 22 kg (kýbl), 20,1 kg (krabice) a 25 kg – pytel pro profesionální použití.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {SALT_CANDIDATES.map((candidate) => (
              <article key={candidate.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)]">
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                    {candidate.id}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Balení</span>
                </div>
                <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white">
                    <Image
                      src={candidate.image}
                      alt={candidate.label}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-sm leading-6 text-slate-700">{candidate.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {candidate.image.split("/").pop()?.replace(".webp", "")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
