"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type CabinetColor = "white" | "black";

export type AquariumVariant = {
  color: CabinetColor;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type AquariumColorSwitcherProps = {
  variants: Record<CabinetColor, AquariumVariant>;
  eyebrow?: string;
  heading: string;
  intro: string;
};

const SWITCHER_OPTIONS: Array<{ color: CabinetColor; label: string }> = [
  { color: "white", label: "White cabinet" },
  { color: "black", label: "Black cabinet" },
];

export function AquariumColorSwitcher({ variants, eyebrow, heading, intro }: AquariumColorSwitcherProps) {
  const [selectedColor, setSelectedColor] = useState<CabinetColor>("white");
  const selected = useMemo(() => variants[selectedColor], [selectedColor, variants]);

  const theme =
    selectedColor === "white"
      ? {
          shell: "bg-[#09121d] text-white",
          panel: "border-white/10 bg-white/5",
          muted: "text-slate-300",
          button: "border-white/10 bg-white/5 text-white hover:bg-white/10",
          buttonActive: "border-amber-400 bg-amber-400 text-slate-950",
          accent: "text-amber-300",
        }
      : {
          shell: "bg-white text-slate-900",
          panel: "border-slate-200 bg-slate-50",
          muted: "text-slate-600",
          button: "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
          buttonActive: "border-slate-900 bg-slate-900 text-white",
          accent: "text-sky-700",
        };

  return (
    <section className={`overflow-hidden rounded-[2rem] border ${theme.panel} ${theme.shell}`}>
      <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            {eyebrow ? <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${theme.accent}`}>{eyebrow}</p> : null}
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
            <p className={`max-w-2xl text-base leading-7 sm:text-lg ${theme.muted}`}>{intro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {SWITCHER_OPTIONS.map((option) => {
              const active = selectedColor === option.color;
              return (
                <button
                  key={option.color}
                  type="button"
                  onClick={() => setSelectedColor(option.color)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active ? theme.buttonActive : theme.button}`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      option.color === "white" ? (active ? "bg-slate-950" : "bg-white") : active ? "bg-white" : "bg-slate-900"
                    }`}
                  />
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className={`rounded-3xl border p-5 md:p-6 ${theme.panel}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-current/60">Selected variant</p>
            <h3 className="mt-2 text-2xl font-semibold">{selected.title}</h3>
            <p className={`mt-3 max-w-xl text-sm leading-6 sm:text-base ${theme.muted}`}>{selected.description}</p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl" />
          <div className={`relative overflow-hidden rounded-[2rem] border p-4 shadow-2xl ${theme.panel}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black/10">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-contain p-2 sm:p-4"
              />
            </div>
            <div className={`mt-4 flex items-center justify-between gap-4 text-sm ${theme.muted}`}>
              <span className="font-medium">Cabinet color</span>
              <span className="capitalize">{selected.color}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
