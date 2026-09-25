"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AUDIENCE_LINKS } from "../data/partners";

// Rozcestník B2C / B2B nad patičkou. Na cílových stránkách samotných se nezobrazuje.
const HIDDEN_ON = new Set<string>([AUDIENCE_LINKS.customers.href, AUDIENCE_LINKS.partners.href]);

export function AudienceCta() {
  const pathname = usePathname();
  if (HIDDEN_ON.has(pathname)) return null;

  return (
    <section aria-label="Pro zákazníky a pro partnery" className="border-t border-slate-200 bg-[#f6f2ea]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-14">
        <div className="flex flex-col items-start gap-4 rounded-[2rem] bg-white p-7 shadow-[0_24px_80px_-56px_rgba(15,23,42,0.4)] xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Pro zákazníky</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">Potřebujete poradit s výběrem?</h2>
            <p className="mt-1 text-base text-slate-600">Naši partneři pomohou s výběrem, prodejem a podle rozsahu služeb i s instalací.</p>
          </div>
          <Link
            href={AUDIENCE_LINKS.customers.href}
            className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-[#153156] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0f2745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
          >
            {AUDIENCE_LINKS.customers.label} →
          </Link>
        </div>

        <div className="flex flex-col items-start gap-4 rounded-[2rem] border border-amber-200 bg-amber-50/60 p-7 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Pro partnery</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">Jste prodejce nebo servisní partner?</h2>
            <p className="mt-1 text-base text-slate-600">Velkoobchodní spolupráce pro akvaristiky a servisy.</p>
          </div>
          <Link
            href={AUDIENCE_LINKS.partners.href}
            className="inline-flex min-h-12 shrink-0 items-center rounded-full border border-amber-500 px-6 text-base font-semibold text-amber-800 transition-colors hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            {AUDIENCE_LINKS.partners.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
