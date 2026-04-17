"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RedSeaLogo } from "./RedSeaLogo";

const NAV_ITEMS = [
  { label: "Salt", href: "/salt" },
  { label: "Reef Care Products", href: "/reef-care-products" },
  { label: "Aquariums", href: "/aquariums" },
  { label: "ReefBeat & Devices", href: "/reefbeat" },
  { label: "Accessories", href: "/accessories" },
  { label: "Wizards", href: "/wizards" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-8 py-4">
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <RedSeaLogo />
            <span className="hidden sm:block w-px h-8 bg-gray-200" />
            <span
              className="hidden sm:block text-sm font-bold tracking-tight"
              style={{ color: "#153156", fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", letterSpacing: "-0.01em" }}
            >
              red-sea.cz
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors rounded ${
                  pathname === item.href
                    ? "text-gray-900 border-b-2 border-[#153156]"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="mailto:info@red-sea.cz"
            className="ml-auto shrink-0 text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block"
          >
            info@red-sea.cz
          </a>
        </div>
      </div>
    </header>
  );
}
