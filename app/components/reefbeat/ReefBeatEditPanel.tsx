"use client";

// Development-only layout editor pro /reefbeat?edit=1 — v produkci se nenačítá.

import { useState } from "react";
import type { ReefBeatBreakpoint, ReefBeatPosition, ReefBeatPosterProduct } from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

type Props = {
  breakpoint: ReefBeatBreakpoint;
  products: ReefBeatPosterProduct[];
  positions: Record<string, Record<ReefBeatBreakpoint, ReefBeatPosition>>;
  onResize: (id: string, delta: number) => void;
  onReset: () => void;
};

export function formatPositionsJson(
  products: ReefBeatPosterProduct[],
  positions: Record<string, Record<ReefBeatBreakpoint, ReefBeatPosition>>
) {
  const out: Record<string, Record<ReefBeatBreakpoint, ReefBeatPosition>> = {};
  for (const p of products) out[p.id] = positions[p.id];
  return JSON.stringify(out, null, 2);
}

export default function ReefBeatEditPanel({ breakpoint, products, positions, onResize, onReset }: Props) {
  const [copied, setCopied] = useState(false);
  const json = formatPositionsJson(products, positions);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <aside className={styles.editPanel} aria-label="ReefBeat layout editor">
      <h3>Layout editor · {breakpoint}</h3>
      <p style={{ opacity: 0.7, marginBottom: 6 }}>
        Táhni produkt myší/prstem. Kolečko = velikost (Shift = jemně). Upravuje se aktuální breakpoint.
      </p>
      {products.map((p) => {
        const pos = positions[p.id][breakpoint];
        return (
          <div key={p.id} className={styles.editRow}>
            <div>
              <strong>{p.name}</strong>
              <div>
                x: {pos.x.toFixed(1)} y: {pos.y.toFixed(1)} width: {pos.width.toFixed(1)}
              </div>
            </div>
            <div className={styles.editButtons}>
              <button type="button" onClick={() => onResize(p.id, -0.5)} aria-label={`${p.name} zmenšit`}>
                −
              </button>
              <button type="button" onClick={() => onResize(p.id, 0.5)} aria-label={`${p.name} zvětšit`}>
                +
              </button>
            </div>
          </div>
        );
      })}
      <textarea readOnly value={json} aria-label="JSON pozic" onFocus={(e) => e.currentTarget.select()} />
      <div className={styles.editButtons} style={{ marginTop: 6 }}>
        <button type="button" onClick={copy}>
          {copied ? "Zkopírováno ✓" : "Copy JSON"}
        </button>
        <button type="button" onClick={onReset}>
          Reset
        </button>
      </div>
    </aside>
  );
}
