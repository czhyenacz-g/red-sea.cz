"use client";

import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { COMPANY_INTRO } from "../data/company";

const STORAGE_KEY = "redsea-home-intro-dismissed";
const SHOWN_KEY = "redsea-home-intro-shown";
const DURATION_MS = 6000;

type HomeIntroOverlayProps = {
  children: ReactNode;
};

export function HomeIntroOverlay({ children }: HomeIntroOverlayProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [shown, setShown] = useState(false);
  const [active, setActive] = useState(false);
  const [remainingMs, setRemainingMs] = useState(DURATION_MS);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [home, setHome] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const deadlineRef = useRef<number | null>(null);
  const remainingRef = useRef(DURATION_MS);
  const activeRef = useRef(false);
  const headerObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const setCountdown = useCallback((duration = DURATION_MS) => {
    deadlineRef.current = performance.now() + duration;
    remainingRef.current = duration;
    setRemainingMs(duration);
  }, []);

  useEffect(() => {
    setDismissed(sessionStorage.getItem(STORAGE_KEY) === "1");
    setShown(sessionStorage.getItem(SHOWN_KEY) === "1");
  }, []);

  useEffect(() => {
    setHome(pathname === "/");

    const header = document.getElementById("site-header");
    const syncHeaderHeight = () => {
      setHeaderHeight(header?.getBoundingClientRect().height ?? 0);
    };

    syncHeaderHeight();

    if (header && "ResizeObserver" in window) {
      headerObserverRef.current?.disconnect();
      headerObserverRef.current = new ResizeObserver(syncHeaderHeight);
      headerObserverRef.current.observe(header);
    }

    window.addEventListener("resize", syncHeaderHeight);

    return () => {
      window.removeEventListener("resize", syncHeaderHeight);
      headerObserverRef.current?.disconnect();
      headerObserverRef.current = null;
    };
  }, [pathname]);

  useEffect(() => {
    if (!home || dismissed || shown) {
      return;
    }

    setOpen(true);
    setShown(true);
    sessionStorage.setItem(SHOWN_KEY, "1");
    setCountdown();
    return clearTimer;
  }, [clearTimer, dismissed, home, setCountdown, shown]);

  useEffect(() => {
    if (!open) {
      clearTimer();
      return;
    }

    if (activeRef.current) {
      clearTimer();
      return;
    }

    const tick = () => {
      if (!deadlineRef.current) {
        deadlineRef.current = performance.now() + remainingRef.current;
      }

      const nextRemaining = Math.max(0, deadlineRef.current - performance.now());
      remainingRef.current = nextRemaining;
      setRemainingMs(nextRemaining);

      if (nextRemaining <= 0) {
        timeoutRef.current = null;
        setOpen(false);
        return;
      }

      timeoutRef.current = window.setTimeout(tick, 100);
    };

    tick();
    return clearTimer;
  }, [active, clearTimer, open]);

  const handleClose = useCallback(() => {
    clearTimer();
    deadlineRef.current = null;
    setOpen(false);
    setDismissed(true);
    setShown(true);
    sessionStorage.setItem(STORAGE_KEY, "1");
    sessionStorage.setItem(SHOWN_KEY, "1");
  }, [clearTimer]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose, open]);

  const handleOpen = useCallback(() => {
    clearTimer();
    setDismissed(false);
    setOpen(true);
    setShown(true);
    sessionStorage.setItem(SHOWN_KEY, "1");
    setCountdown();
  }, [clearTimer, setCountdown]);

  const introLines = useMemo(
    () => [COMPANY_INTRO.paragraphs[0], COMPANY_INTRO.paragraphs[1], COMPANY_INTRO.paragraphs[2]].filter(Boolean),
    []
  );

  const overlayStyle = {
    top: headerHeight ? `${headerHeight}px` : "0px",
    height: headerHeight ? `calc(100vh - ${headerHeight}px)` : "100vh",
  } as CSSProperties;

  return (
    <div className="relative min-h-screen">
      {children}

      {home && open ? (
        <div
          className="fixed left-0 right-0 z-[60] flex justify-center bg-slate-950/92 px-4 pb-4 pt-3 text-white backdrop-blur-md transition-all duration-500"
          style={overlayStyle}
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
          <div className="relative flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.85)] backdrop-blur">
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
            <div className="flex-1 space-y-4 overflow-auto px-5 py-6 sm:px-6 sm:py-7">
              {introLines.map((line) => (
                <p key={line} className="max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  {line}
                </p>
              ))}

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Zavře se za {Math.max(1, Math.ceil(remainingMs / 1000))} s</span>
                  <span>{Math.max(0, Math.min(100, Math.round((remainingMs / DURATION_MS) * 100)))}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-amber-300 transition-[width] duration-100"
                    style={{ width: `${Math.max(0, Math.min(100, (remainingMs / DURATION_MS) * 100))}%` }}
                  />
                </div>
              </div>

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

      {(!home || (home && !open)) ? (
        <button
          type="button"
          onClick={handleOpen}
          className={`fixed right-4 z-40 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-950/10 transition-colors hover:bg-slate-50 ${
            home ? "bottom-4 sm:bottom-6" : "bottom-4"
          }`}
          aria-label="Otevřít informace o Red Sea"
        >
          Info o Red Sea
        </button>
      ) : null}
    </div>
  );
}
