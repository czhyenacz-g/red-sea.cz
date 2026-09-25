"use client";

import Image from "next/image";
import { forwardRef, type CSSProperties, type PointerEvent as ReactPointerEvent, type MouseEvent as ReactMouseEvent, type FocusEvent as ReactFocusEvent } from "react";
import type { ReefBeatBreakpoint, ReefBeatPosition, ReefBeatPosterProduct } from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

type Props = {
  product: ReefBeatPosterProduct;
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

  return (
    <a
      ref={ref}
      href={`#${product.targetId}`}
      className={styles.product}
      style={style}
      data-reefbeat-product={product.id}
      data-active={active}
      aria-label={`${product.name} – zobrazit informace`}
      aria-describedby={descriptionId}
      draggable={false}
      {...handlers}
    >
      <span className={styles.visual}>
        <Image
          src={product.image}
          alt=""
          width={product.imageWidth}
          height={product.imageHeight}
          loading="eager"
          sizes="(min-width: 1700px) 300px, (min-width: 900px) 18vw, 32vw"
          draggable={false}
        />
      </span>
      <span id={descriptionId} className={styles.srOnly}>
        {product.description} Odkaz přejde na detail produktu níže na stránce.
      </span>
      {editing && editLabel ? <span className={styles.editLabel}>{editLabel}</span> : null}
    </a>
  );
});
