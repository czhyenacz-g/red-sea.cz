"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type FocusEvent as ReactFocusEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  REEFBEAT_POSTER_BACKGROUND,
  REEFBEAT_POSTER_BREAKPOINT,
  REEFBEAT_POSTER_LAYOUTS,
  REEFBEAT_POSTER_PRODUCTS,
  REEFBEAT_POSTER_SETTINGS,
  REEFBEAT_POSTER_TEXT,
  type ReefBeatBreakpoint,
  type ReefBeatPosition,
} from "../../data/reefbeatPoster";
import { ReefBeatConnections } from "./ReefBeatConnections";
import { ReefBeatProduct } from "./ReefBeatProduct";
import { ReefBeatTooltip } from "./ReefBeatTooltip";
import styles from "./reefbeatPoster.module.css";

type Positions = Record<string, Record<ReefBeatBreakpoint, ReefBeatPosition>>;

const IS_DEV = process.env.NODE_ENV === "development";

// Editor se do produkčního bundlu vůbec nedostane.
const ReefBeatEditPanel = IS_DEV ? dynamic(() => import("./ReefBeatEditPanel"), { ssr: false }) : null;

const LEAVE_DELAY = 180;
const PARALLAX_MAX = 4;

function initialPositions(): Positions {
  return Object.fromEntries(
    REEFBEAT_POSTER_PRODUCTS.map((p) => [p.id, { desktop: { ...p.position.desktop }, mobile: { ...p.position.mobile } }])
  );
}

function useMediaQuery(query: string, serverValue: boolean) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}

const round1 = (n: number) => Math.round(n * 10) / 10;

export function ReefBeatPoster() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [positions, setPositions] = useState<Positions>(initialPositions);
  const [editing, setEditing] = useState(false);

  const isDesktop = useMediaQuery(`(min-width: ${REEFBEAT_POSTER_BREAKPOINT}px)`, true);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", false);
  const breakpoint: ReefBeatBreakpoint = isDesktop ? "desktop" : "mobile";

  const posterRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const leaveTimer = useRef<number | undefined>(undefined);
  const lastPointerType = useRef<string | null>(null);
  const drag = useRef<{ id: string; startX: number; startY: number; origin: ReefBeatPosition; moved: boolean } | null>(null);

  // Edit mode: pouze development + ?edit=1
  useEffect(() => {
    if (!IS_DEV) return;
    setEditing(new URLSearchParams(window.location.search).get("edit") === "1");
  }, []);

  const cancelLeave = useCallback(() => window.clearTimeout(leaveTimer.current), []);
  const scheduleLeave = useCallback(() => {
    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setActiveId(null), LEAVE_DELAY);
  }, []);

  useEffect(() => () => window.clearTimeout(leaveTimer.current), []);

  // Tap / klik mimo produkt a tooltip → zavřít; Escape → zavřít
  useEffect(() => {
    if (!activeId) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-reefbeat-product], [data-reefbeat-tooltip]")) return;
      setActiveId(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeId]);

  const updatePosition = useCallback(
    (id: string, patch: (p: ReefBeatPosition) => ReefBeatPosition) => {
      setPositions((prev) => ({ ...prev, [id]: { ...prev[id], [breakpoint]: patch(prev[id][breakpoint]) } }));
    },
    [breakpoint]
  );

  const resize = useCallback(
    (id: string, delta: number) =>
      updatePosition(id, (p) => ({ ...p, width: round1(Math.min(80, Math.max(3, p.width + delta))) })),
    [updatePosition]
  );

  // Edit mode: kolečko mění velikost (nativní listener kvůli preventDefault)
  useEffect(() => {
    const poster = posterRef.current;
    if (!editing || !poster) return;
    const onWheel = (e: WheelEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-reefbeat-product]");
      if (!el) return;
      e.preventDefault();
      const step = e.shiftKey ? 0.1 : 0.5;
      resize(el.dataset.reefbeatProduct!, e.deltaY < 0 ? step : -step);
    };
    poster.addEventListener("wheel", onWheel, { passive: false });
    return () => poster.removeEventListener("wheel", onWheel);
  }, [editing, resize]);

  const resetParallax = (el: HTMLElement) => {
    el.style.removeProperty("--px");
    el.style.removeProperty("--py");
  };

  const handlersFor = (id: string) => ({
    onPointerEnter: (e: ReactPointerEvent<HTMLAnchorElement>) => {
      if (e.pointerType !== "mouse") return;
      cancelLeave();
      setActiveId(id);
    },
    onPointerLeave: (e: ReactPointerEvent<HTMLAnchorElement>) => {
      resetParallax(e.currentTarget);
      if (e.pointerType !== "mouse" || drag.current) return;
      scheduleLeave();
    },
    onPointerDown: (e: ReactPointerEvent<HTMLAnchorElement>) => {
      lastPointerType.current = e.pointerType;
      if (!editing || e.button !== 0) return;
      e.preventDefault();
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // pointer už nemusí být aktivní — drag funguje i bez capture
      }
      drag.current = { id, startX: e.clientX, startY: e.clientY, origin: positions[id][breakpoint], moved: false };
      setActiveId(id);
    },
    onPointerMove: (e: ReactPointerEvent<HTMLAnchorElement>) => {
      const d = drag.current;
      const poster = posterRef.current;
      if (editing && d && d.id === id && poster) {
        const rect = poster.getBoundingClientRect();
        const dx = ((e.clientX - d.startX) / rect.width) * 100;
        const dy = ((e.clientY - d.startY) / rect.height) * 100;
        if (Math.abs(dx) + Math.abs(dy) > 0.1) d.moved = true;
        updatePosition(id, (p) => ({ ...p, x: round1(d.origin.x + dx), y: round1(d.origin.y + dy) }));
        return;
      }
      // jemný parallax jen pro myš
      if (editing || reducedMotion || e.pointerType !== "mouse" || activeId !== id) return;
      const r = e.currentTarget.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      e.currentTarget.style.setProperty("--px", `${(nx * 2 * PARALLAX_MAX).toFixed(2)}px`);
      e.currentTarget.style.setProperty("--py", `${(ny * 2 * PARALLAX_MAX).toFixed(2)}px`);
    },
    onClick: (e: ReactMouseEvent<HTMLAnchorElement>) => {
      const pointerType = lastPointerType.current;
      lastPointerType.current = null;
      // edit mode: klik nikdy neotevírá odkaz (drag)
      if (editing) {
        e.preventDefault();
        return;
      }
      // dotyk: tap jen aktivuje produkt; odkaz otevírá CTA v tooltipu
      if (pointerType === "touch" || pointerType === "pen") {
        e.preventDefault();
        cancelLeave();
        setActiveId(id);
      }
    },
    onFocus: () => {
      cancelLeave();
      setActiveId(id);
    },
    onBlur: (e: ReactFocusEvent<HTMLAnchorElement>) => {
      const next = e.relatedTarget as Element | null;
      if (next?.closest("[data-reefbeat-product], [data-reefbeat-tooltip]")) return;
      setActiveId((current) => (current === id ? null : current));
    },
  });

  const endDrag = () => {
    drag.current = null;
  };

  const activeProduct = REEFBEAT_POSTER_PRODUCTS.find((p) => p.id === activeId) ?? null;
  const activePos = activeProduct ? positions[activeProduct.id][breakpoint] : null;

  const posterStyle = {
    "--poster-h-d": REEFBEAT_POSTER_LAYOUTS.desktop.height,
    "--bg-top-d": REEFBEAT_POSTER_LAYOUTS.desktop.backgroundTop,
    "--poster-h-m": REEFBEAT_POSTER_LAYOUTS.mobile.height,
    "--bg-top-m": REEFBEAT_POSTER_LAYOUTS.mobile.backgroundTop,
  } as CSSProperties;

  return (
    <section className={`reefbeat-poster ${styles.section}`} aria-labelledby="reefbeat-poster-title">
      <div className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>Red Sea · Smart reef ecosystem</p>
          <h1 id="reefbeat-poster-title" className={styles.title}>
            {REEFBEAT_POSTER_TEXT.title}
          </h1>
          <p className={styles.lead}>{REEFBEAT_POSTER_TEXT.intro}</p>
        </div>
        <p className={`${styles.hint} ${styles.hintDesktop}`}>{REEFBEAT_POSTER_TEXT.hintDesktop}</p>
        <p className={`${styles.hint} ${styles.hintMobile}`}>{REEFBEAT_POSTER_TEXT.hintMobile}</p>
      </div>

      <div className={styles.stage}>
        <div
          ref={posterRef}
          className={`${styles.poster} ${editing ? styles.editing : ""}`}
          style={posterStyle}
          data-active={activeId ? "" : undefined}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className={styles.background}>
            <Image
              src={REEFBEAT_POSTER_BACKGROUND.src}
              alt={REEFBEAT_POSTER_BACKGROUND.alt}
              width={REEFBEAT_POSTER_BACKGROUND.width}
              height={REEFBEAT_POSTER_BACKGROUND.height}
              priority
              sizes="(min-width: 1632px) 1600px, calc(100vw - 32px)"
            />
          </div>

          {REEFBEAT_POSTER_SETTINGS.showConnections
            ? (["desktop", "mobile"] as const).map((bp) => (
                <ReefBeatConnections
                  key={bp}
                  breakpoint={bp}
                  layout={REEFBEAT_POSTER_LAYOUTS[bp]}
                  products={REEFBEAT_POSTER_PRODUCTS}
                  positions={positions}
                  activeId={activeId}
                />
              ))
            : null}

          {REEFBEAT_POSTER_PRODUCTS.map((product, index) => {
            const pos = positions[product.id][breakpoint];
            return (
              <ReefBeatProduct
                key={product.id}
                ref={(el) => {
                  productRefs.current[product.id] = el;
                }}
                product={product}
                index={index}
                position={positions[product.id]}
                active={product.id === activeId}
                editing={editing}
                editLabel={`x ${pos.x.toFixed(1)} · y ${pos.y.toFixed(1)} · w ${pos.width.toFixed(1)}`}
                {...handlersFor(product.id)}
              />
            );
          })}

          {activeProduct && activePos ? (
            <ReefBeatTooltip
              key={activeProduct.id}
              product={activeProduct}
              placement={activeProduct.tooltipPlacement[breakpoint]}
              ctaLabel={REEFBEAT_POSTER_TEXT.cta}
              anchorEl={productRefs.current[activeProduct.id] ?? null}
              posterEl={posterRef.current}
              layoutKey={`${breakpoint}:${activePos.x}:${activePos.y}:${activePos.width}`}
              onPointerEnter={cancelLeave}
              onPointerLeave={scheduleLeave}
            />
          ) : null}
        </div>
      </div>

      {editing && ReefBeatEditPanel ? (
        <ReefBeatEditPanel
          breakpoint={breakpoint}
          products={REEFBEAT_POSTER_PRODUCTS}
          positions={positions}
          onResize={resize}
          onReset={() => setPositions(initialPositions())}
        />
      ) : null}
    </section>
  );
}
