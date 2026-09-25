import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import Script from "next/script";
import { AudienceCta } from "./components/AudienceCta";
import { GOATCOUNTER_CODE } from "./config/analytics";

export const metadata: Metadata = {
  title: "Red Sea CZ — B2B velkoobchod akvarijní techniky",
  description: "Velkoobchodní distribuce akvarijní techniky Red Sea Fish pro český trh. Profesionální vybavení pro obchody a akvaristická studia.",
  openGraph: {
    title: "Red Sea CZ — B2B velkoobchod akvarijní techniky",
    description: "Velkoobchodní distribuce akvarijní techniky Red Sea Fish pro český trh.",
    url: "https://red-sea.cz",
    siteName: "Red Sea CZ",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Sea CZ — B2B velkoobchod akvarijní techniky",
    description: "Velkoobchodní distribuce akvarijní techniky Red Sea Fish pro český trh.",
  },
};

const FOOTER_CUSTOMERS = [
  { label: "Kde koupit", href: "/kde-koupit" },
  { label: "Akvarijní systémy", href: "/aquariums" },
  { label: "ReefBeat", href: "/reefbeat" },
  { label: "ReefSense", href: "/reefsense" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <AudienceCta />
          <footer className="border-t border-slate-200 bg-white px-6">
            <div className="mx-auto grid w-full max-w-7xl gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div>
                <p className="text-sm font-bold tracking-tight text-[#153156]">Red Sea CZ</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Český distributor akvarijní techniky Red Sea.</p>
              </div>
              <nav aria-labelledby="footer-customers">
                <p id="footer-customers" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-900">
                  Pro zákazníky
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  {FOOTER_CUSTOMERS.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-600 hover:text-slate-950">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <nav aria-labelledby="footer-partners">
                <p id="footer-partners" className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                  Pro partnery
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link href="/pro-partners" className="text-slate-600 hover:text-slate-950">
                      B2B spolupráce
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:info@red-sea.cz?subject=Pro%20partnery" className="text-slate-600 hover:text-slate-950">
                      Kontakt: info@red-sea.cz
                    </a>
                  </li>
                  <li>
                    <Link href="/pro-partners#kontakt" className="text-slate-600 hover:text-slate-950">
                      Staňte se partnerem
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 border-t border-slate-100 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Red Sea CZ</p>
              <p>
                Webdesign: <a href="mailto:hynek@darbujan.com" className="hover:text-slate-900">hynek@darbujan.com</a>
              </p>
            </div>
          </footer>
        </div>
        <Analytics />
        {GOATCOUNTER_CODE && (
          <Script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="//gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
