import Link from "next/link";
import { Header } from "../components/Header";
import { AUDIENCE_LINKS } from "../data/partners";

const audienceItems = [
  "Akvaristiky a mořské akvaristiky",
  "Specializované prodejny",
  "Servisní a instalační firmy",
  "Veřejná akvária a ZOO",
];

const offerItems = [
  "Velkoobchodní spolupráci",
  "Individuální domluvu",
  "Podporu při výběru produktů",
  "Dlouhodobé partnerství",
  "Doporučení ověřených prodejců koncovým zákazníkům",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">B2B / Wholesale</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Pro partnery</h1>
            </div>

            <p className="text-base leading-7 text-slate-600">
              Jsme velkoobchodní partner pro akvaristiky, specializované prodejny, servisní firmy, veřejná akvária a ZOO. Zaměřujeme se na B2B spolupráci a produkty nedodáváme přímo koncovým zákazníkům.
            </p>

            <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-slate-800 shadow-sm">
              <p className="text-sm leading-7">
                Koncovým zákazníkům produkty přímo neprodáváme. Ověřené prodejce najdete na stránce{" "}
                <Link href={AUDIENCE_LINKS.customers.href} className="font-semibold text-[#153156] underline underline-offset-4">
                  Kde koupit
                </Link>
                .
              </p>
            </div>
          </div>

          <div id="kontakt" className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Kontakt pro partnery</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pokud provozujete akvaristiku, mořskou akvaristiku, servis akvárií, veřejné akvárium, ZOO nebo podobný provoz, napište nám.
              Rádi s vámi probereme možnosti spolupráce, dostupnost produktů a velkoobchodní podmínky.
            </p>
            <a
              href="mailto:info@red-sea.cz?subject=Pro%20partnery"
              className="mt-6 inline-flex rounded-full bg-[#153156] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f2745]"
            >
              Kontaktovat nás
            </a>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Pro koho je spolupráce určena</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {audienceItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Co nabízíme partnerům</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {offerItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* B2C cesta je oddělená — koncoví zákazníci jdou na /kde-koupit */}
        <section className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">Hledáte prodejce produktů Red Sea?</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Nákup, poradenství a podle rozsahu služeb i instalaci zajistí naši prodejní partneři.</p>
          </div>
          <Link
            href={AUDIENCE_LINKS.customers.href}
            className="inline-flex min-h-12 shrink-0 items-center self-start rounded-full bg-[#153156] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0f2745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156] sm:self-auto"
          >
            {AUDIENCE_LINKS.customers.label} →
          </Link>
        </section>

        <div className="pb-2">
          <Link href="/" className="text-sm font-medium text-[#153156] hover:underline">
            Zpět na úvod
          </Link>
        </div>
      </main>
    </div>
  );
}
