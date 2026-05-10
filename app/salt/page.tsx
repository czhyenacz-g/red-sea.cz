import Image from "next/image";
import { Header } from "../components/Header";
import { SALT_PRODUCTS } from "../data/saltProducts";

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
      </main>
    </div>
  );
}
