"use client";

import Image from "next/image";
import { useEffect } from "react";

type ProductImageLightboxProps = {
  open: boolean;
  imageSrc: string | null;
  imageAlt: string;
  onClose: () => void;
  ariaLabel: string;
};

export function ProductImageLightbox({ open, imageSrc, imageAlt, onClose, ariaLabel }: ProductImageLightboxProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

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
