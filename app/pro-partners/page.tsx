import Link from "next/link";
import { Header } from "../components/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">B2B / Wholesale</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Pro partnery</h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Tyto stránky slouží pro velkoobchodní spolupráci. Pokud jste prodejce, distributor nebo servisní partner, napište nám
              stručně, co potřebujete, a ozveme se s dostupností, cenami a dalším postupem.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Objednávky na této stránce nejsou automatický e-shop. Jde o kontaktní B2B formulář pro wholesale komunikaci.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Kontakt pro partnery</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <p>• Nabídky pro obchody a distributory</p>
              <p>• Wholesale cenová hladina</p>
              <p>• Dostupnost produktů a objednávky</p>
              <p>• Technické dotazy a spolupráce</p>
            </div>
            <a
              href="mailto:info@red-sea.cz?subject=Pro%20partnery"
              className="mt-6 inline-flex rounded-full bg-[#153156] px-4 py-2 text-sm font-medium text-white"
            >
              Napsat na info@red-sea.cz
            </a>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Jak objednat</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Pošli nám poptávku</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Napiš název produktu, množství a zemi dodání. Přidat můžeš i poznámku k registraci firmy nebo požadavku na velkoobchodní
              spolupráci.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Poznámka</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Wholesalové stránky</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Tato sekce je určená pro B2B partnery, ne pro běžný retail nákup. Cílem je jednoduchý kontakt a domluva dalšího postupu.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Rychlý kontakt</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="mailto:info@red-sea.cz" className="inline-flex rounded-full bg-[#ef4444] px-4 py-2 text-sm font-semibold text-white">
              info@red-sea.cz
            </a>
            <Link href="/" className="text-sm font-medium text-[#153156] hover:underline">
              Zpět na úvod
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
