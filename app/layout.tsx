import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-white antialiased">
        {children}
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
