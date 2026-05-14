import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GOATCOUNTER_CODE } from "./config/analytics";
import { BrandIntroDock } from "./components/BrandIntroDock";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <BrandIntroDock />
          <div className="flex-1">{children}</div>
          <footer className="border-t border-slate-200 bg-white px-6 py-4">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
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
