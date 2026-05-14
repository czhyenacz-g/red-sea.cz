"use client";

import { useEffect, useMemo, useState } from "react";
import { COMPANY_INTRO } from "../data/company";

const STORAGE_KEY = "redsea-home-intro-dismissed";
const SHOWN_KEY = "redsea-home-intro-shown";

type HomeIntroOverlayProps = {
  children: React.ReactNode;
};

export function HomeIntroOverlay({ children }: HomeIntroOverlayProps) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
    setShown(sessionStorage.getItem(SHOWN_KEY) === "1");
  }, []);

  useEffect(() => {
    if (dismissed || shown) {
      return;
    }

    setOpen(true);
    setShown(true);
    sessionStorage.setItem(SHOWN_KEY, "1");
  }, [dismissed, shown]);

  useEffect(() => {
    if (!open || active) {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(false);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [active, open]);

  const handleClose = () => {
    setOpen(false);
    setDismissed(true);
    setShown(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    sessionStorage.setItem(SHOWN_KEY, "1");
  };

  const introLines = useMemo(
    () => [COMPANY_INTRO.paragraphs[0], COMPANY_INTRO.paragraphs[1], COMPANY_INTRO.paragraphs[2]].filter(Boolean),
    []
  );

  return (
    <div className="relative min-h-screen">
      {children}

      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/92 px-4 py-6 text-white backdrop-blur-md transition-all duration-500"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onFocusCapture={() => setActive(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setActive(false);
            }
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),_transparent_28%),linear-gradient(160deg,#162235_0%,#0e1723_45%,#090d15_100%)]" />
          <div className="relative mx-auto flex w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.85)] backdrop-blur">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300">Red Sea CZ</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Red Sea</h1>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Přeskočit intro"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 px-5 py-6 sm:px-6 sm:py-7">
              {introLines.map((line) => (
                <p key={line} className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  {line}
                </p>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex rounded-full bg-[#ef4444] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#dc2626]"
                >
                  Přejít na akvária
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
