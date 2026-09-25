import Image from "next/image";
import type { CSSProperties } from "react";
import { REEFSENSE_DIGITAL_BENEFITS, REEFSENSE_IMAGES, REEFSENSE_PORTS } from "../../data/reefsense";
import styles from "./reefsense.module.css";

export function ReefSenseTech() {
  const port = REEFSENSE_IMAGES.reefsensePort;

  return (
    <>
      {/* Proč digitální? */}
      <section className={`${styles.section} ${styles.digital}`} aria-labelledby="digital-title">
        <div className={`${styles.container} ${styles.split}`}>
          <div data-reveal="">
            <p className={styles.eyebrow}>Digitální sondy</p>
            <h2 id="digital-title" className={styles.h2}>
              Proč digitální?
            </h2>
            <p className={styles.lead}>ReefSense převádí měření na digitální hodnotu přímo v sondě. Do controlleru už putuje hotové číslo.</p>
            <ul className={styles.checks}>
              {REEFSENSE_DIGITAL_BENEFITS.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className={styles.signalCompare} data-reveal="">
            <div className={styles.signalRow}>
              <span className={styles.signalTag}>Analog</span>
              <div className={styles.signalLine}>
                <span className={styles.signalEnd}>senzor</span>
                <svg viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true" focusable="false" className={styles.noise}>
                  <path d="M0 12 L10 9 L18 15 L26 7 L34 16 L42 10 L50 14 L58 5 L66 18 L74 11 L82 13 L90 6 L98 17 L106 9 L114 15 L122 8 L130 16 L138 10 L146 14 L154 6 L162 17 L170 11 L178 13 L186 8 L194 15 L200 12" />
                </svg>
                <span className={styles.signalEnd}>controller</span>
              </div>
              <p className={styles.signalText}>Dlouhý analogový signál v kabelu může zachytit rušení z čerpadel a dalších zařízení v sumpu.</p>
            </div>

            <div className={`${styles.signalRow} ${styles.signalRowDigital}`}>
              <span className={styles.signalTag}>Digital</span>
              <div className={styles.signalLine}>
                <span className={styles.signalEnd}>senzor</span>
                <svg viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true" focusable="false" className={styles.bits}>
                  <path d="M0 12 H200" />
                </svg>
                <span className={styles.signalEnd}>controller</span>
              </div>
              <p className={styles.signalText}>Sonda pošle hotovou digitální hodnotu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jeden port. Různé senzory. */}
      <section className={`${styles.section} ${styles.ports}`} aria-labelledby="ports-title">
        <div className={`${styles.container} ${styles.split} ${styles.splitReverse}`}>
          <div data-reveal="">
            <h2 id="ports-title" className={styles.h2}>
              Jeden port.
              <br />
              <span className={styles.accent}>Různé senzory.</span>
            </h2>
            <p className={styles.lead}>
              ReefSense sondy používají společné digitální rozhraní, takže kompatibilní sondu lze připojit do dostupného ReefSense portu bez
              nutnosti určovat konkrétní typ portu.
            </p>
            <p className={styles.text}>Připojit lze i víc sond stejného typu.</p>
          </div>

          <figure className={styles.portVisual} data-reveal="">
            <Image src={port.src} alt={port.alt} width={port.width} height={port.height} sizes="(min-width: 1000px) 360px, 70vw" />
            <ul className={styles.portList}>
              {REEFSENSE_PORTS.map((sensor, index) => (
                <li key={sensor} style={{ "--step": index } as CSSProperties}>
                  <span className={styles.portId}>Port {index + 1}</span>
                  <span className={styles.portArrow} aria-hidden="true" />
                  <span>{sensor}</span>
                </li>
              ))}
            </ul>
            <figcaption className={styles.demoCaption}>Ilustrace principu – počet portů se liší podle modelu a zapojení.</figcaption>
          </figure>
        </div>
      </section>

      {/* Bluetooth */}
      <section className={`${styles.section} ${styles.remote}`} aria-labelledby="remote-title">
        <div className={styles.container}>
          <div className={styles.remoteCard} data-reveal="">
            <div>
              <p className={styles.eyebrow}>Doplňková funkce · Bluetooth</p>
              <h2 id="remote-title" className={styles.h2Small}>
                Sonda nemusí zůstat jen u akvária.
              </h2>
              <p className={styles.text}>
                ReefSense sondy lze použít i dočasně mimo ReefControl – přes Bluetooth v aplikaci ReefBeat. Třeba při kontrole nově namíchané
                mořské vody. A protože kalibrační data jsou uložená v sondě, můžete ji čistit a kalibrovat pohodlně u umyvadla.
              </p>
            </div>
            <ol className={styles.miniFlow}>
              <li>Míchací stanice</li>
              <li>ReefSense Salinity &amp; Temperature Probe</li>
              <li>ReefBeat</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
