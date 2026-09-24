import type { Metadata } from "next";

// page.tsx je client component, proto metadata stránky /reefbeat žijí zde.
const title = "ReefBeat – chytrý ekosystém pro mořské akvárium";
const description =
  "Interaktivní přehled chytrého ekosystému Red Sea ReefBeat – osvětlení, proudění, dávkování, filtrace, automatické doplňování vody a chytré řízení napájení.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://red-sea.cz/reefbeat" },
  openGraph: {
    title,
    description,
    url: "https://red-sea.cz/reefbeat",
    siteName: "Red Sea CZ",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ReefbeatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
