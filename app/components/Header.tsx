"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RedSeaLogo } from "./RedSeaLogo";
import { PRODUCT_CATEGORIES } from "../data/productCategories";
import { AUDIENCE_LINKS } from "../data/partners";

// „Pro partnery“ je v headeru samostatné CTA tlačítko, ne položka kategorií.
const NAV_ITEMS = PRODUCT_CATEGORIES.filter((item) => item.slug !== "pro-partners");

const CTA_BASE =
  "inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const CTA_CUSTOMERS = `${CTA_BASE} bg-[#153156] text-white hover:bg-[#0f2745] focus-visible:outline-[#153156]`;
const CTA_PARTNERS = `${CTA_BASE} border border-amber-500 text-amber-700 hover:bg-amber-50 focus-visible:outline-amber-600`;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // po navigaci menu zavřít
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header id="site-header" className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl min-[1360px]:max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-6 py-4">
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <span className="flex flex-col items-center leading-none">
              <RedSeaLogo />
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-gray-500">
                czech distributor
              </span>
            </span>
            {/* wordmark jen na širokých obrazovkách — místo pro menu a CTA tlačítka */}
            <span className="hidden 2xl:block w-px h-8 bg-gray-200" />
            <span className="hidden 2xl:block">
              <span
                className="text-sm font-bold tracking-tight"
                style={{ color: "#153156", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", letterSpacing: "-0.01em" }}
              >
                red-sea.cz
              </span>
            </span>
          </Link>

          {/* plné menu kategorií od 1360 px; pod tím v rozbalovacím menu */}
          <nav aria-label="Hlavní navigace" className="hidden min-[1360px]:flex items-center gap-x-0.5 flex-1 min-w-0">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current(item.href)}
                className={`px-2 py-2 text-sm font-medium whitespace-nowrap transition-colors rounded ${
                  pathname === item.href ? "text-gray-900 border-b-2 border-[#153156]" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            {/* dva hlavní vstupy — viditelné na desktopu i tabletu, na mobilu v menu */}
            <Link href={AUDIENCE_LINKS.customers.href} aria-current={current(AUDIENCE_LINKS.customers.href)} className={`hidden sm:inline-flex ${CTA_CUSTOMERS}`}>
              {AUDIENCE_LINKS.customers.label}
            </Link>
            <Link href={AUDIENCE_LINKS.partners.href} aria-current={current(AUDIENCE_LINKS.partners.href)} className={`hidden sm:inline-flex ${CTA_PARTNERS}`}>
              {AUDIENCE_LINKS.partners.label}
            </Link>

            <button
              ref={toggleRef}
              type="button"
              className="min-[1360px]:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div id="site-menu" className="min-[1360px]:hidden absolute inset-x-0 top-full max-h-[calc(100vh-96px)] overflow-y-auto border-b border-gray-200 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)]">
          <div className="mx-auto grid max-w-3xl gap-6 px-4 py-5 sm:px-6">
            <nav aria-label="Kategorie">
              <ul className="divide-y divide-gray-100">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current(item.href)}
                      className={`flex min-h-12 items-center justify-between text-base font-medium ${pathname === item.href ? "text-[#153156]" : "text-gray-800"}`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-gray-400">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={AUDIENCE_LINKS.customers.href}
                aria-current={current(AUDIENCE_LINKS.customers.href)}
                className="rounded-2xl bg-[#153156] p-5 text-white transition-colors hover:bg-[#0f2745] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#153156]"
              >
                <span className="block text-lg font-semibold">{AUDIENCE_LINKS.customers.label} →</span>
                <span className="mt-1 block text-sm text-white/75">Kde koupit, poradenství a instalace</span>
              </Link>
              <Link
                href={AUDIENCE_LINKS.partners.href}
                aria-current={current(AUDIENCE_LINKS.partners.href)}
                className="rounded-2xl border border-amber-400 bg-amber-50/60 p-5 text-amber-800 transition-colors hover:bg-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                <span className="block text-lg font-semibold">{AUDIENCE_LINKS.partners.label} →</span>
                <span className="mt-1 block text-sm text-amber-900/70">B2B spolupráce pro prodejce a servisy</span>
              </Link>
            </div>

            <a href="mailto:info@red-sea.cz" className="text-sm text-gray-500 hover:text-gray-900">
              info@red-sea.cz
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
