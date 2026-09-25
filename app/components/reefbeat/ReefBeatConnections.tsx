import {
  REEFBEAT_POSTER_BACKGROUND,
  type ReefBeatBreakpoint,
  type ReefBeatLayout,
  type ReefBeatPosition,
  type ReefBeatPosterItem,
} from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

type Props = {
  breakpoint: ReefBeatBreakpoint;
  layout: ReefBeatLayout;
  products: ReefBeatPosterItem[];
  positions: Record<string, Record<ReefBeatBreakpoint, ReefBeatPosition>>;
  activeId: string | null;
};

// Souřadnice SVG: šířka = 100, výška = layout.height (stejné jednotky jako poster container).
function buildPath(
  product: ReefBeatPosterItem,
  position: ReefBeatPosition,
  layout: ReefBeatLayout,
  breakpoint: ReefBeatBreakpoint
) {
  const backgroundHeight = (REEFBEAT_POSTER_BACKGROUND.height / REEFBEAT_POSTER_BACKGROUND.width) * 100;
  const px = position.x;
  const py = (position.y / 100) * layout.height;
  const ax = product.anchor.x;
  const ay = layout.backgroundTop + (product.anchor.y / 100) * backgroundHeight;

  // desktop: vodorovná S-křivka jako čáry v back.png; mobil: svislá (produkty jsou nad/pod pozadím)
  if (breakpoint === "desktop") {
    const mx = (px + ax) / 2;
    return `M${px},${py} C${mx},${py} ${mx},${ay} ${ax},${ay}`;
  }
  const my = (py + ay) / 2;
  return `M${px},${py} C${px},${my} ${ax},${my} ${ax},${ay}`;
}

export function ReefBeatConnections({ breakpoint, layout, products, positions, activeId }: Props) {
  return (
    <svg
      className={`${styles.connections} ${breakpoint === "desktop" ? styles.connectionsDesktop : styles.connectionsMobile}`}
      viewBox={`0 0 100 ${layout.height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {products.map((product) => {
        if (product.hideConnectionOn?.includes(breakpoint)) return null;
        const d = buildPath(product, positions[product.id][breakpoint], layout, breakpoint);
        const active = product.id === activeId;
        return (
          <g key={product.id}>
            <path className={styles.line} d={d} data-active={active} />
            <path className={styles.pulse} d={d} data-active={active} />
          </g>
        );
      })}
    </svg>
  );
}
