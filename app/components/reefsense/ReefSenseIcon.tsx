import type { ReactNode } from "react";
import type { ReefSenseIconName } from "../../data/reefsense";

// Jednoduché liniové ikony — vždy dekorativní, text je vždy vedle nich.
const PATHS: Record<ReefSenseIconName, ReactNode> = {
  temperature: (
    <>
      <path d="M10 4a2 2 0 1 1 4 0v9.3a4 4 0 1 1-4 0V4Z" />
      <path d="M12 9v7" />
      <path d="M16.5 6h2M16.5 9h2" />
    </>
  ),
  ph: (
    <>
      <path d="M9 3h6M10 3v6.5L5.2 17.8A2.1 2.1 0 0 0 7 21h10a2.1 2.1 0 0 0 1.8-3.2L14 9.5V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  salinity: (
    <>
      <path d="M12 3.5c3 3.6 5.5 6.9 5.5 10a5.5 5.5 0 0 1-11 0c0-3.1 2.5-6.4 5.5-10Z" />
      <path d="M9.5 14.5h.01M12.5 16.5h.01M13.5 12.5h.01" strokeWidth="2.4" />
    </>
  ),
  orp: (
    <>
      <path d="M3 12h3l2-5 4 10 2.5-7 1.5 2h5" />
    </>
  ),
  level: (
    <>
      <path d="M4 5v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5" />
      <path d="M4 11c2.7-1.3 5.3-1.3 8 0s5.3 1.3 8 0" />
      <path d="M12 3v4M10.5 5.5 12 7l1.5-1.5" />
    </>
  ),
  leak: (
    <>
      <path d="M12 3c2.6 3.1 4.5 5.8 4.5 8.4a4.5 4.5 0 0 1-9 0C7.5 8.8 9.4 6.1 12 3Z" />
      <path d="M4 20h16M6.5 17.5c1.2.8 2.3.8 3.5 0M14 17.5c1.2.8 2.3.8 3.5 0" />
    </>
  ),
};

export function ReefSenseIcon({ name, className }: { name: ReefSenseIconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
