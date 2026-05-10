"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DelayedImageTooltipProps = {
  label: string;
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export function DelayedImageTooltip({ label, children, delayMs = 5000, className = "relative inline-block" }: DelayedImageTooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setVisible(true);
      timerRef.current = null;
    }, delayMs);
  };

  return (
    <div
      className={`group ${className}`}
      onMouseEnter={startTimer}
      onMouseLeave={() => {
        clearTimer();
        setVisible(false);
      }}
      onFocus={startTimer}
      onBlur={() => {
        clearTimer();
        setVisible(false);
      }}
    >
      {children}
      {visible ? (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none absolute inset-x-3 bottom-3 z-20 rounded-full border border-slate-200 bg-slate-950/95 px-3 py-2 text-center text-xs font-medium text-white shadow-lg"
        >
          {label}
        </div>
      ) : null}
    </div>
  );
}
