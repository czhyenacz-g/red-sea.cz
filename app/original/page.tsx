import { Header } from "../components/Header";
import Link from "next/link";
import { COMPANY_INTRO } from "../data/company";
import { PRODUCT_CATEGORIES } from "../data/productCategories";

export default function OriginalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.14),_transparent_28%),linear-gradient(160deg,#162235_0%,#0e1723_45%,#090d15_100%)]" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Redsea</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{COMPANY_INTRO.heading}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">{COMPANY_INTRO.paragraphs[0]}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {PRODUCT_CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    href={category.href}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">RedSea</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Red Sea</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{COMPANY_INTRO.paragraphs[1]}</p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {COMPANY_INTRO.paragraphs.slice(2).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Produkty RedSea</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{category.label}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{category.summary}</p>
                <span className="mt-5 inline-flex text-sm font-medium text-[#153156] group-hover:underline">Zobrazit</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 pb-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Akvarijní systémy</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{PRODUCT_CATEGORIES[0]?.label ?? "Akvarijní systémy"}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{COMPANY_INTRO.paragraphs[2]}</p>
            <Link href="/aquariums" className="mt-6 inline-flex rounded-full bg-[#153156] px-4 py-2 text-sm font-medium text-white">
              Akvarijní systémy
            </Link>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Inteligentní technická zařízení</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">ReefBeat</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Zařízení z této skupiny se dají ovládat přes aplikaci The ReefBeat Ecosystem na mobilních telefonech či tabletech a uživatel je tak může ovládat či kontrolovat na dálku.</p>
            <Link href="/reefbeat" className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
              ReefBeat
            </Link>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Kontakt</p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a href="mailto:info@red-sea.cz" className="inline-flex rounded-full bg-[#ef4444] px-4 py-2 text-sm font-semibold text-white">
                info@red-sea.cz
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
