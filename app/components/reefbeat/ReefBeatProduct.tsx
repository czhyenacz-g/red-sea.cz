"use client";

import Image from "next/image";
import { forwardRef, type CSSProperties, type PointerEvent as ReactPointerEvent, type MouseEvent as ReactMouseEvent, type FocusEvent as ReactFocusEvent } from "react";
import type { ReefBeatBreakpoint, ReefBeatPosition, ReefBeatPosterCategory, ReefBeatPosterItem } from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

type Props = {
  product: ReefBeatPosterItem;
  index: number;
  position: Record<ReefBeatBreakpoint, ReefBeatPosition>;
  active: boolean;
  editing: boolean;
  editLabel?: string;
  onPointerEnter: (e: ReactPointerEvent<HTMLAnchorElement>) => void;
  onPointerLeave: (e: ReactPointerEvent<HTMLAnchorElement>) => void;
  onPointerMove: (e: ReactPointerEvent<HTMLAnchorElement>) => void;
  onPointerDown: (e: ReactPointerEvent<HTMLAnchorElement>) => void;
  onClick: (e: ReactMouseEvent<HTMLAnchorElement>) => void;
  onFocus: () => void;
  onBlur: (e: ReactFocusEvent<HTMLAnchorElement>) => void;
};

function AquariumIcon() {
  return (
    <svg className={styles.categoryIcon} viewBox="0 0 48 40" fill="none" aria-hidden="true" focusable="false">
      <path d="M10 3h28" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M17 3v4M31 3v4" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="4" y="8" width="40" height="22" rx="2.5" strokeWidth="2" />
      <path d="M4.8 14.5c3.2-1.8 6.4-1.8 9.6 0s6.4 1.8 9.6 0 6.4-1.8 9.6 0 6.4 1.8 9.6 0" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M13 29v-5c0-2 1.5-3.5 1.5-5.5M20 29v-3.5M30 29v-6c0-1.5 1.2-2.5 1.2-4" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
      <path d="M8 30v7M40 30v7M6 37h36" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CategoryCard({ item }: { item: ReefBeatPosterCategory }) {
  return (
    <span className={styles.categoryCard}>
      <AquariumIcon />
      <span className={styles.categoryBody}>
        <span className={styles.categoryTitle}>{item.name}</span>
        <span className={styles.categoryText}>{item.summary}</span>
      </span>
    </span>
  );
}

export const ReefBeatProduct = forwardRef<HTMLAnchorElement, Props>(function ReefBeatProduct(
  { product, index, position, active, editing, editLabel, ...handlers },
  ref
) {
  const style = {
    "--i": index,
    "--x-d": position.desktop.x,
    "--y-d": position.desktop.y,
    "--w-d": position.desktop.width,
    "--x-m": position.mobile.x,
    "--y-m": position.mobile.y,
    "--w-m": position.mobile.width,
  } as CSSProperties;

  const descriptionId = `reefbeat-desc-${product.id}`;
  const isCategory = product.type === "category";

  return (
    <a
      ref={ref}
      href={isCategory ? product.href : `#${product.targetId}`}
      className={styles.product}
      style={style}
      data-reefbeat-product={product.id}
      data-type={product.type}
      data-active={active}
      aria-label={`${product.name} – zobrazit informace`}
      aria-describedby={descriptionId}
      draggable={false}
      {...handlers}
    >
      <span className={styles.visual}>
        {isCategory ? (
          <CategoryCard item={product} />
        ) : (
          <Image
            src={product.image}
            alt=""
            width={product.imageWidth}
            height={product.imageHeight}
            loading="eager"
            sizes="(min-width: 1700px) 300px, (min-width: 900px) 18vw, 32vw"
            draggable={false}
          />
        )}
      </span>
      <span id={descriptionId} className={styles.srOnly}>
        {product.description}{" "}
        {isCategory ? "Odkaz vede na přehled akvarijních systémů." : "Odkaz přejde na detail produktu níže na stránce."}
      </span>
      {editing && editLabel ? <span className={styles.editLabel}>{editLabel}</span> : null}
    </a>
  );
});
