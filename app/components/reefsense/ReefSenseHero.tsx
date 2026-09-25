import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { REEFSENSE_CHAIN, REEFSENSE_HERO, REEFSENSE_IMAGES } from "../../data/reefsense";
import styles from "./reefsense.module.css";

export function ReefSenseHero() {
  const { heroReef, reefcontrolPro, probesOverview, reefbeatMonitor } = REEFSENSE_IMAGES;

  return (
    <>
      <section className={styles.hero} aria-labelledby="reefsense-title">
        <div className={styles.heroInner}>
          <nav className={styles.crumbs} aria-label="Související stránky">
            <Link href="/reefbeat">← ReefBeat ekosystém</Link>
            <Link href="/aquariums">Akvarijní systémy</Link>
          </nav>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{REEFSENSE_HERO.eyebrow}</p>
            <h1 id="reefsense-title" className={styles.heroTitle}>
              <span className={styles.heroTitleTop}>{REEFSENSE_HERO.titleTop}</span>
              <span className={styles.srOnly}> – </span>
              <span className={styles.heroTitleBottom}>{REEFSENSE_HERO.titleBottom}</span>
            </h1>
            <p className={styles.heroLead}>{REEFSENSE_HERO.lead}</p>
            <div className={styles.heroActions}>
              <a href="#jak-to-funguje" className={styles.btnPrimary}>
                {REEFSENSE_HERO.ctaPrimary}
              </a>
              <Link href="/reefbeat" className={styles.btnGhost}>
                {REEFSENSE_HERO.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className={styles.heroStage}>
            <div className={styles.heroReef} aria-hidden="true">
              <Image src={heroReef.src} alt="" width={heroReef.width} height={heroReef.height} priority sizes="(min-width: 1100px) 60vw, 100vw" />
            </div>

            {/* nervová dráha: sondy → controller → aplikace */}
            <svg className={styles.heroNerve} viewBox="0 0 100 62" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path className={styles.nerveBase} d="M22 50 C 30 40, 30 30, 40 27 S 58 24, 66 33 S 78 50, 86 44" />
              <path className={styles.nervePulse} d="M22 50 C 30 40, 30 30, 40 27 S 58 24, 66 33 S 78 50, 86 44" />
            </svg>
            <span className={styles.heroDot} style={{ left: "22%", top: "80.6%" }} aria-hidden="true" />
            <span className={styles.heroDot} style={{ left: "40%", top: "43.5%", animationDelay: "0.6s" }} aria-hidden="true" />
            <span className={styles.heroDot} style={{ left: "86%", top: "71%", animationDelay: "1.2s" }} aria-hidden="true" />

            <div className={`${styles.heroItem} ${styles.heroController}`}>
              <Image src={reefcontrolPro.src} alt={reefcontrolPro.alt} width={reefcontrolPro.width} height={reefcontrolPro.height} priority sizes="(min-width: 1100px) 26vw, 50vw" />
            </div>
            <div className={`${styles.heroItem} ${styles.heroProbes}`}>
              <Image src={probesOverview.src} alt={probesOverview.alt} width={probesOverview.width} height={probesOverview.height} priority sizes="(min-width: 1100px) 24vw, 50vw" />
            </div>
            <div className={`${styles.heroItem} ${styles.heroApp}`}>
              <Image src={reefbeatMonitor.src} alt={reefbeatMonitor.alt} width={reefbeatMonitor.width} height={reefbeatMonitor.height} sizes="(min-width: 1100px) 22vw, 45vw" />
            </div>
          </div>
        </div>
      </section>

      <section id="jak-to-funguje" className={`${styles.section} ${styles.axis}`} aria-labelledby="axis-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>Jak systém funguje</p>
          <h2 id="axis-title" className={styles.h2}>
            Od měření k akci.
          </h2>
          <p className={styles.lead}>
            Akvárium něco „cítí“. ReefSense to změří, ReefControl údaj zpracuje, ReefBeat ho ukáže a upozorní vás – a ReefControl Power může
            automaticky zareagovat.
          </p>

          <ol className={styles.rail} data-reveal="">
            {REEFSENSE_CHAIN.map((node, index) => (
              <li key={node.id} className={styles.railNode} style={{ "--step": index } as CSSProperties}>
                <span className={styles.railDot} aria-hidden="true" />
                <span className={styles.railLabel}>{node.label}</span>
                <span className={styles.railRole}>{node.role}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
