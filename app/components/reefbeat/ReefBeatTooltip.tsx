"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { ReefBeatPlacement, ReefBeatPosterProduct } from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

type Props = {
  product: ReefBeatPosterProduct;
  placement: ReefBeatPlacement;
  ctaLabel: string;
  anchorEl: HTMLElement | null;
  posterEl: HTMLElement | null;
  /** mění se při přesunu v edit režimu / resize → přepočítá pozici */
  layoutKey: string;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  /** klik na CTA → poster zruší aktivní stav (scroll na sekci řeší nativní anchor) */
  onNavigate: () => void;
};

const GAP = 18;
const EDGE = 8;

const FALLBACKS: Record<ReefBeatPlacement, ReefBeatPlacement[]> = {
  right: ["right", "left", "top", "bottom"],
  left: ["left", "right", "top", "bottom"],
  top: ["top", "bottom", "right", "left"],
  bottom: ["bottom", "top", "right", "left"],
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, Math.max(min, max)));
}

export function ReefBeatTooltip({
  product,
  placement,
  ctaLabel,
  anchorEl,
  posterEl,
  layoutKey,
  onPointerEnter,
  onPointerLeave,
  onNavigate,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    const tooltip = ref.current;
    if (!tooltip || !anchorEl || !posterEl) return;

    const compute = () => {
      // rozměry v souřadnicích posteru; rect produktu bez hover transformace (ta je na vnitřním .visual)
      const poster = posterEl.getBoundingClientRect();
      const a = anchorEl.getBoundingClientRect();
      const box = {
        left: a.left - poster.left,
        top: a.top - poster.top,
        right: a.right - poster.left,
        bottom: a.bottom - poster.top,
      };
      const cx = (box.left + box.right) / 2;
      const cy = (box.top + box.bottom) / 2;
      const w = tooltip.offsetWidth;
      const h = tooltip.offsetHeight;
      const maxLeft = poster.width - w - EDGE;
      const maxTop = poster.height - h - EDGE;

      const candidates: Record<ReefBeatPlacement, { left: number; top: number; fits: boolean }> = {
        right: { left: box.right + GAP, top: cy - h / 2, fits: box.right + GAP + w <= poster.width - EDGE },
        left: { left: box.left - GAP - w, top: cy - h / 2, fits: box.left - GAP - w >= EDGE },
        top: { left: cx - w / 2, top: box.top - GAP - h, fits: box.top - GAP - h >= EDGE },
        bottom: { left: cx - w / 2, top: box.bottom + GAP, fits: box.bottom + GAP + h <= poster.height - EDGE },
      };

      const chosen = FALLBACKS[placement].find((p) => candidates[p].fits) ?? placement;
      const c = candidates[chosen];
      setPos({ left: clamp(c.left, EDGE, maxLeft), top: clamp(c.top, EDGE, maxTop) });
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(posterEl);
    return () => observer.disconnect();
  }, [anchorEl, posterEl, placement, layoutKey, product.id]);

  return (
    <div
      ref={ref}
      id={`reefbeat-tooltip-${product.id}`}
      className={styles.tooltip}
      data-reefbeat-tooltip=""
      data-measuring={pos ? undefined : "true"}
      style={pos ? { left: pos.left, top: pos.top } : { left: 0, top: 0 }}
      onPointerEnter={(e) => e.pointerType === "mouse" && onPointerEnter()}
      onPointerLeave={(e) => e.pointerType === "mouse" && onPointerLeave()}
    >
      <p className={styles.tooltipName}>{product.name}</p>
      <p className={styles.tooltipText}>{product.description}</p>
      <a className={styles.tooltipCta} href={`#${product.targetId}`} onClick={onNavigate}>
        {ctaLabel}
        <span className={styles.srOnly}> – detail {product.name}</span>
      </a>
    </div>
  );
}
