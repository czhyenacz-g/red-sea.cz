"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { COMPANY_INTRO } from "../data/company";

const STORAGE_KEY = "redsea-brand-dock-dismissed";
const SHOWN_KEY = "redsea-brand-dock-shown";

export function BrandIntroDock() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
    setShown(sessionStorage.getItem(SHOWN_KEY) === "1");
  }, []);

  useEffect(() => {
    if (initializedRef.current) {
      return;
    }

    initializedRef.current = true;

    if (!isHome || dismissed || shown) {
      return;
    }

    setOpen(true);
    setShown(true);
    sessionStorage.setItem(SHOWN_KEY, "1");
  }, [isHome, dismissed, shown]);

  useEffect(() => {
    if (!isHome || dismissed || !open || active) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [active, dismissed, isHome, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
    setShown(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    sessionStorage.setItem(SHOWN_KEY, "1");
  };

  const handleOpen = () => {
    setDismissed(false);
    setOpen(true);
    setShown(true);
    sessionStorage.setItem(SHOWN_KEY, "1");
  };

  const introLines = useMemo(
    () => [COMPANY_INTRO.paragraphs[0], COMPANY_INTRO.paragraphs[1], COMPANY_INTRO.paragraphs[2]].filter(Boolean),
    []
  );

  const dockClassName = isHome
    ? "fixed right-4 bottom-4 z-40 w-[calc(100vw-2rem)] max-w-[24rem] sm:right-4 sm:top-24 sm:bottom-auto sm:w-[22rem]"
    : "fixed right-4 bottom-4 z-40 w-[calc(100vw-2rem)] max-w-[16rem] sm:w-auto";

  return (
    <>
      {open ? (
        <aside
          className={`${dockClassName} overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 text-white shadow-[0_24px_80px_-36px_rgba(15,23,42,0.75)] backdrop-blur`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onFocusCapture={() => setActive(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setActive(false);
            }
          }}
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300">Red Sea</p>
              <h2 className="mt-1 text-base font-semibold">Brand intro</h2>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Zavřít brand intro"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              ×
            </button>
          </div>
          <div className="space-y-3 px-4 py-4 text-sm leading-6 text-slate-200">
            {introLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </aside>
      ) : (
        <button
          type="button"
          onClick={handleOpen}
          className={`fixed right-4 z-40 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-950/10 transition-colors hover:bg-slate-50 ${
            isHome ? "bottom-4 sm:bottom-6" : "bottom-4"
          }`}
          aria-label="Otevřít informace o Red Sea"
        >
          Info o Red Sea
        </button>
      )}
    </>
  );
}
