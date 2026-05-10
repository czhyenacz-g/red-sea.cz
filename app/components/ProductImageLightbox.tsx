"use client";

import Image from "next/image";
import { useEffect } from "react";

type ProductImageLightboxProps = {
  open: boolean;
  imageSrc: string | null;
  imageAlt: string;
  onClose: () => void;
  ariaLabel: string;
  title?: string;
  imageLabel?: string;
  imageIndex?: number;
  imageCount?: number;
  onPrev?: () => void;
  onNext?: () => void;
};

export function ProductImageLightbox({
  open,
  imageSrc,
  imageAlt,
  onClose,
  ariaLabel,
  title,
  imageLabel,
  imageIndex,
  imageCount,
  onPrev,
  onNext,
}: ProductImageLightboxProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && onPrev && (imageCount ?? 0) > 1) {
        event.preventDefault();
        onPrev();
      } else if (event.key === "ArrowRight" && onNext && (imageCount ?? 0) > 1) {
        event.preventDefault();
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, imageCount, onNext, onPrev]);

  if (!open || !imageSrc) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6"
      onClick={onClose}
    >
        <div className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center" onClick={(event) => event.stopPropagation()}>
          {title ? (
            <div className="absolute -top-14 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/90 px-4 py-2 text-center text-white shadow-xl">
              <p className="text-sm font-semibold leading-5">{title}</p>
              <div className="mt-0.5 flex items-center justify-center gap-2 text-xs text-slate-300">
                {imageLabel ? <span>{imageLabel}</span> : null}
                {typeof imageIndex === "number" && typeof imageCount === "number" && imageCount > 1 ? (
                  <span>
                    {imageIndex + 1} / {imageCount}
                  </span>
                ) : null}
              </div>
            </div>
          ) : null}

          {typeof imageCount === "number" && imageCount > 1 && onPrev && onNext ? (
            <>
              <button
                type="button"
                onClick={onPrev}
                aria-label="Předchozí obrázek"
                className="absolute left-[-3.25rem] top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/90 text-white shadow-lg transition-colors hover:bg-slate-900"
              >
                <span className="text-2xl leading-none">‹</span>
              </button>
              <button
                type="button"
                onClick={onNext}
                aria-label="Další obrázek"
                className="absolute right-[-3.25rem] top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/90 text-white shadow-lg transition-colors hover:bg-slate-900"
              >
                <span className="text-2xl leading-none">›</span>
              </button>
            </>
          ) : null}

          <button
            type="button"
            onClick={onClose}
          aria-label="Zavřít náhled obrázku"
          className="absolute -right-2 -top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/90 text-white shadow-lg transition-colors hover:bg-slate-900"
        >
          <span className="text-xl leading-none">×</span>
        </button>
        <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-3 shadow-2xl">
          <div className="relative h-[80vh] w-[80vw] max-h-[90vh] max-w-[90vw]">
            <Image src={imageSrc} alt={imageAlt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
