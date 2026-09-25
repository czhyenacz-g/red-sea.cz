import Image from "next/image";
import { REEFBEAT_POSTER_PRODUCTS, REEFBEAT_POSTER_TEXT } from "../../data/reefbeatPoster";
import styles from "./reefbeatPoster.module.css";

// Detailní sekce pod plakátem — cíle interních odkazů #targetId.
export function ReefBeatDetails() {
  return (
    <div className={styles.details}>
      {REEFBEAT_POSTER_PRODUCTS.map((product, index) => {
        const headingId = `${product.targetId}-title`;
        return (
          <section
            key={product.id}
            id={product.targetId}
            tabIndex={-1}
            aria-labelledby={headingId}
            className={styles.detail}
            data-reversed={index % 2 === 1}
          >
            <div className={styles.detailInner}>
              <div className={styles.detailMedia}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  sizes="(min-width: 1250px) 560px, (min-width: 900px) 45vw, calc(100vw - 40px)"
                />
              </div>

              <div className={styles.detailBody}>
                <p className={styles.eyebrow}>ReefBeat · {String(index + 1).padStart(2, "0")}</p>
                <h2 id={headingId} className={styles.detailTitle}>
                  {product.name}
                </h2>
                <p className={styles.detailIntro}>{product.detail.intro}</p>
                <ul className={styles.detailPoints}>
                  {product.detail.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className={styles.detailOfficial} href={product.officialUrl} target="_blank" rel="noopener noreferrer">
                  {REEFBEAT_POSTER_TEXT.officialLink}
                  <span className={styles.srOnly}> – {product.name} na redseafish.com (otevře se v novém okně)</span>
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
