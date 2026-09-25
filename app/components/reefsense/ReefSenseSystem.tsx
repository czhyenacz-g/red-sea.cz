import Image from "next/image";
import type { CSSProperties } from "react";
import { REEFSENSE_IMAGES, REEFSENSE_REACTION, REEFSENSE_ROLES } from "../../data/reefsense";
import styles from "./reefsense.module.css";

// Ilustrační hodnoty pro ukázku — nejde o kopii UI aplikace ani o reálná data.
const DEMO_READINGS = [
  { label: "pH", value: "8.2", unit: "", spark: "M0 14 C8 10 14 16 22 12 S36 6 44 10 S58 14 64 9" },
  { label: "Teplota", value: "25.4", unit: "°C", spark: "M0 10 C8 12 14 8 22 10 S36 13 44 9 S58 8 64 11" },
  { label: "Salinita", value: "35", unit: "ppt", spark: "M0 11 C8 11 14 10 22 11 S36 12 44 10 S58 11 64 10" },
  { label: "ORP", value: "380", unit: "mV", spark: "M0 15 C8 12 14 13 22 9 S36 11 44 7 S58 9 64 6" },
];

export function ReefSenseSystem() {
  const { reefcontrolLite, reefcontrolPro, reefbeatMonitor, reefcontrolPower } = REEFSENSE_IMAGES;

  return (
    <>
      {/* Metafora — jediné místo, kde ji používáme naplno */}
      <section className={`${styles.section} ${styles.roles}`} aria-labelledby="roles-title">
        <div className={styles.container}>
          <h2 id="roles-title" className={styles.srOnly}>
            Role jednotlivých částí systému
          </h2>
          <ol className={styles.roleList} data-reveal="">
            {REEFSENSE_ROLES.map((item, index) => (
              <li key={item.name} className={styles.role} style={{ "--step": index } as CSSProperties}>
                <span className={styles.roleName}>{item.role}</span>
                <span className={styles.roleProduct}>{item.name}</span>
                <span className={styles.roleText}>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ReefControl */}
      <section id="reefcontrol" className={`${styles.section} ${styles.brain}`} aria-labelledby="brain-title">
        <div className={styles.container}>
          <div className={styles.split}>
            <div data-reveal="">
              <p className={styles.eyebrow}>ReefControl</p>
              <h2 id="brain-title" className={styles.h2}>
                Mozek mezi senzorem a akcí.
              </h2>
              <p className={styles.lead}>
                ReefControl sbírá data z ReefSense sond a senzorů, poskytuje jejich monitoring, historii a upozornění a umožňuje je použít pro
                automatické řízení zařízení.
              </p>
            </div>
            <div className={styles.bigStat} data-reveal="">
              <span className={styles.bigStatValue}>až 7</span>
              <span className={styles.bigStatLabel}>digitálních sond a senzorů ReefSense na jednom ReefControl</span>
            </div>
          </div>

          <div className={styles.models}>
            {[
              { name: "ReefControl Lite", image: reefcontrolLite, text: "Až 2 ReefSense sondy a jedno 12V DC zařízení – pro menší rozsah monitoringu a řízení." },
              { name: "ReefControl Pro", image: reefcontrolPro, text: "4 ReefSense sondy, s rozšiřujícím portem ReefSense až 7, a dvě 12V DC zařízení." },
            ].map((model) => (
              <article key={model.name} className={styles.model} data-reveal="">
                <div className={styles.modelMedia}>
                  <Image src={model.image.src} alt={model.image.alt} width={model.image.width} height={model.image.height} sizes="(min-width: 900px) 480px, 90vw" />
                </div>
                <h3 className={styles.h3}>{model.name}</h3>
                <p className={styles.text}>{model.text}</p>
              </article>
            ))}
          </div>

          <ul className={styles.facts} data-reveal="">
            <li>Oba modely jsou centrem ReefSense systému.</li>
            <li>Oba pracují se stejnými digitálními ReefSense sondami.</li>
            <li>Volba modelu závisí na tom, kolik chcete monitorovat a řídit.</li>
          </ul>
        </div>
      </section>

      {/* ReefBeat */}
      <section className={`${styles.section} ${styles.app}`} aria-labelledby="app-title">
        <div className={`${styles.container} ${styles.split} ${styles.splitWide}`}>
          <div data-reveal="">
            <p className={styles.eyebrow}>ReefBeat</p>
            <h2 id="app-title" className={styles.h2}>
              Všechno vidíte v&nbsp;ReefBeat
            </h2>
            <p className={styles.lead}>Naměřené hodnoty, grafy, historie a upozornění jsou dostupné v aplikaci ReefBeat.</p>
            <ul className={styles.checks}>
              <li>aktuální hodnota každé sondy</li>
              <li>grafy a historie pro sledování trendů</li>
              <li>vlastní pravidla pro upozornění</li>
            </ul>
          </div>

          <div className={styles.appVisual} data-reveal="">
            <Image src={reefbeatMonitor.src} alt={reefbeatMonitor.alt} width={reefbeatMonitor.width} height={reefbeatMonitor.height} sizes="(min-width: 1000px) 620px, 92vw" />
          </div>
        </div>

        <div className={styles.container}>
          <figure className={styles.demo} data-reveal="">
            <div className={styles.demoGrid}>
              {DEMO_READINGS.map((reading, index) => (
                <div key={reading.label} className={styles.reading} style={{ "--step": index } as CSSProperties}>
                  <span className={styles.readingLabel}>{reading.label}</span>
                  <span className={styles.readingValue}>
                    {reading.value}
                    {reading.unit ? <small>{reading.unit}</small> : null}
                  </span>
                  <svg className={styles.spark} viewBox="0 0 64 20" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                    <path d={reading.spark} />
                  </svg>
                </div>
              ))}
              <div className={`${styles.reading} ${styles.readingAlert}`} style={{ "--step": 4 } as CSSProperties}>
                <span className={styles.readingLabel}>Upozornění</span>
                <span className={styles.alertText}>Teplota mimo nastavený rozsah</span>
              </div>
            </div>
            <figcaption className={styles.demoCaption}>Ilustrační hodnoty – nejde o skutečná data ani o přesnou podobu aplikace.</figcaption>
          </figure>
        </div>
      </section>

      {/* Nestačí jen vědět */}
      <section className={`${styles.section} ${styles.react}`} aria-labelledby="react-title">
        <div className={styles.container}>
          <div className={styles.split}>
            <div data-reveal="">
              <h2 id="react-title" className={styles.h2}>
                Nestačí jen vědět.
                <br />
                <span className={styles.accent}>Důležité je umět reagovat.</span>
              </h2>
              <p className={styles.lead}>
                Senzor něco změří. ReefControl vyhodnotí podmínku. ReefControl Power může zapnout nebo vypnout připojené zařízení – Red Sea i
                jiných výrobců.
              </p>
            </div>
            <div className={styles.powerVisual} data-reveal="">
              <Image src={reefcontrolPower.src} alt={reefcontrolPower.alt} width={reefcontrolPower.width} height={reefcontrolPower.height} sizes="(min-width: 1000px) 460px, 80vw" />
            </div>
          </div>

          <ol className={`${styles.rail} ${styles.railReaction}`} data-reveal="">
            {REEFSENSE_REACTION.map((node, index) => (
              <li key={node.label} className={styles.railNode} style={{ "--step": index } as CSSProperties}>
                <span className={styles.railDot} aria-hidden="true" />
                <span className={styles.railLabel}>{node.label}</span>
                <span className={styles.railRole}>{node.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
