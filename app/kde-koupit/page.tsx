import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { AUDIENCE_LINKS, RETAIL_PARTNERS } from "../data/partners";

const title = "Kde koupit Red Sea | Prodej, poradenství a partneři";
const description =
  "Najděte profesionální partnery Red Sea v Česku. Pomohou vám s výběrem akvária a techniky, odborným poradenstvím, prodejem a podle rozsahu služeb také s instalací.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://red-sea.cz/kde-koupit" },
  openGraph: {
    title,
    description,
    url: "https://red-sea.cz/kde-koupit",
    siteName: "Red Sea CZ",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const BENEFITS = [
  {
    title: "Odborné poradenství",
    text: "Pomohou vám vybrat vhodné řešení podle velikosti akvária a plánovaného provozu.",
  },
  {
    title: "Prodej techniky",
    text: "Produkty Red Sea zakoupíte přímo u našich partnerů.",
  },
  {
    title: "Návrh řešení",
    text: "Partner vám může pomoci sestavit vhodnou kombinaci akvária, osvětlení, filtrace a další techniky.",
  },
  {
    title: "Instalace",
    text: "Podle rozsahu služeb vám partner může pomoci také s instalací a uvedením systému do provozu.",
  },
];

// Jednoduchá strukturovaná data jen z ověřených údajů partnerů (název, web, adresa, telefon, e-mail).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Prodejní partneři Red Sea v Česku",
  itemListElement: RETAIL_PARTNERS.map((partner, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Store",
      name: partner.name,
      url: partner.url,
      telephone: partner.phone,
      email: partner.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: partner.address.street,
        postalCode: partner.address.postalCode,
        addressLocality: partner.address.locality,
        addressCountry: "CZ",
      },
    },
  })),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(21,49,86,0.12),transparent_65%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Pro zákazníky</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Kde koupit Red Sea</h1>
              <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-[#153156] sm:text-3xl">
                Vaše akvárium nemusíte řešit sami.
              </p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Naši profesionální partneři vám rádi pomohou s výběrem vhodného akvária a techniky, poradí s konfigurací a zajistí prodej –
                podle rozsahu svých služeb také instalaci.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#partneri"
                  className="inline-flex min-h-12 items-center rounded-full bg-[#153156] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0f2745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
                >
                  Zobrazit partnery ↓
                </a>
                <Link
                  href="/aquariums"
                  className="inline-flex min-h-12 items-center rounded-full border border-slate-300 bg-white/60 px-6 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
                >
                  Prohlédnout akvária
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-x-8 bottom-4 h-10 rounded-[50%] bg-slate-900/15 blur-2xl" />
              <Image
                src="/assets/aquariums/reefer-max-525-g3-white.webp"
                alt="Akvarijní systém Red Sea REEFER MAX 525 G3"
                width={2342}
                height={1960}
                priority
                sizes="(min-width: 1024px) 560px, 92vw"
                className="relative h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* BENEFITY */}
        <section aria-labelledby="benefity-title" className="border-y border-slate-200/80 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <h2 id="benefity-title" className="max-w-2xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              S čím vám partneři pomohou
            </h2>
            <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit, index) => (
                <li key={benefit.title} className="border-t border-slate-200 pt-5">
                  <span className="text-sm font-semibold tabular-nums text-amber-700">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{benefit.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">{benefit.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PARTNEŘI */}
        <section id="partneri" aria-labelledby="partneri-title" className="scroll-mt-28">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Prodej a poradenství</p>
              <h2 id="partneri-title" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Naši partneři
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vyberte si jednoho z našich profesionálních partnerů. Pomohou vám s výběrem vhodného řešení a poradí s nákupem produktů Red Sea.
                Podle rozsahu služeb vám mohou pomoci také s návrhem a instalací akvária.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {RETAIL_PARTNERS.map((partner) => (
                <article
                  key={partner.id}
                  aria-labelledby={`partner-${partner.id}`}
                  className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)] sm:p-9"
                >
                  <p className="text-sm font-medium text-slate-500">{partner.city}</p>
                  <h3 id={`partner-${partner.id}`} className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {partner.name}
                  </h3>
                  <p className="mt-3 text-base font-medium text-[#153156]">{partner.services}</p>
                  {partner.note ? <p className="mt-2 text-base leading-7 text-slate-600">{partner.note}</p> : null}

                  <dl className="mt-6 grid gap-3 border-t border-slate-100 pt-6 text-base">
                    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="text-slate-500">Adresa</dt>
                      <dd className="text-slate-800">
                        {partner.address.street}, {partner.address.postalCode} {partner.address.locality}
                      </dd>
                    </div>
                    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="text-slate-500">Telefon</dt>
                      <dd>
                        <a href={`tel:${partner.phone.replace(/\s/g, "")}`} className="text-slate-800 underline-offset-4 hover:underline">
                          {partner.phone}
                        </a>
                      </dd>
                    </div>
                    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <dt className="text-slate-500">E-mail</dt>
                      <dd>
                        <a href={`mailto:${partner.email}`} className="break-all text-slate-800 underline-offset-4 hover:underline">
                          {partner.email}
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-1 items-end">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center rounded-full bg-[#153156] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0f2745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
                    >
                      Navštívit partnera →<span className="sr-only"> {partner.name} (otevře se v novém okně)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* B2B CROSS CTA */}
        <section aria-labelledby="b2b-title" className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 rounded-[2rem] border border-amber-200 bg-amber-50/70 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <h2 id="b2b-title" className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                  Jste prodejce nebo servisní partner?
                </h2>
                <p className="mt-2 text-base leading-7 text-slate-600">Velkoobchodní spolupráci pro akvaristiky, prodejce a servisní firmy řešíme zvlášť.</p>
              </div>
              <Link
                href={AUDIENCE_LINKS.partners.href}
                className="inline-flex min-h-12 shrink-0 items-center self-start rounded-full border border-amber-500 px-6 text-base font-semibold text-amber-800 transition-colors hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 sm:self-auto"
              >
                Staňte se partnerem →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
