import Image from "next/image";
import type { CSSProperties } from "react";
import { REEFSENSE_GROUPS, REEFSENSE_IMAGES, REEFSENSE_SENSORS, REEFSENSE_SIGNALS } from "../../data/reefsense";
import { ReefSenseIcon } from "./ReefSenseIcon";
import styles from "./reefsense.module.css";

export function ReefSenseSensors() {
  const overview = REEFSENSE_IMAGES.probesOverview;

  return (
    <>
      {/* Akvárium mluví */}
      <section className={`${styles.section} ${styles.talk}`} aria-labelledby="talk-title">
        <div className={`${styles.container} ${styles.split}`}>
          <div data-reveal="">
            <h2 id="talk-title" className={styles.h2}>
              Akvárium mluví.
              <br />
              <span className={styles.accent}>ReefSense poslouchá.</span>
            </h2>
            <p className={styles.lead}>
              Teplota, pH, salinita nebo únik vody nejsou jen čísla. Jsou to signály o tom, co se v akváriu právě děje.
            </p>
          </div>

          <ul className={styles.signals} data-reveal="">
            {REEFSENSE_SIGNALS.map((signal, index) => (
              <li key={signal.label} className={styles.signal} style={{ "--step": index } as CSSProperties}>
                <span className={styles.signalPulse} aria-hidden="true" />
                <ReefSenseIcon name={signal.icon} className={styles.signalIcon} />
                <span>{signal.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Oči a uši reefu */}
      <section className={`${styles.section} ${styles.family}`} aria-labelledby="family-title">
        <div className={styles.container}>
          <div className={styles.familyHead} data-reveal="">
            <p className={styles.eyebrow}>ReefSense</p>
            <h2 id="family-title" className={styles.h2}>
              Oči a uši reefu
            </h2>
            <p className={styles.lead}>
              ReefSense je rodina digitálních sond a senzorů, které sledují stav akvária v reálném čase.
            </p>
          </div>

          <div className={styles.familyBody}>
            <div className={styles.familyVisual} data-reveal="">
              <Image src={overview.src} alt={overview.alt} width={overview.width} height={overview.height} sizes="(min-width: 1000px) 520px, 90vw" />
            </div>

            <div className={styles.groups}>
              {REEFSENSE_GROUPS.map((group) => (
                <div key={group.title} className={styles.group} data-reveal="">
                  <h3 className={styles.groupTitle}>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.officialName}>
                        <span className={styles.groupLabel}>{item.label}</span>
                        <span className={styles.groupName}>{item.officialName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jednotlivé sondy — střídavý editorial layout */}
      <div className={styles.sensors}>
        {REEFSENSE_SENSORS.map((sensor, index) => {
          const titleId = `sensor-${sensor.id}-title`;
          const multi = sensor.images.length > 1;
          return (
            <section key={sensor.id} id={sensor.id} className={styles.sensor} data-reversed={index % 2 === 1} aria-labelledby={titleId}>
              <div className={styles.sensorInner}>
                <div className={`${styles.sensorMedia} ${multi ? styles.sensorMediaMulti : ""}`} data-reveal="">
                  {sensor.images.map((image) => (
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes={multi ? "(min-width: 1000px) 140px, 25vw" : "(min-width: 1000px) 560px, 92vw"}
                    />
                  ))}
                </div>

                <div className={styles.sensorBody} data-reveal="">
                  <p className={styles.sensorKicker}>
                    <ReefSenseIcon name={sensor.icon} className={styles.kickerIcon} />
                    {sensor.officialName}
                  </p>
                  <h3 id={titleId} className={styles.h3}>
                    {sensor.title}
                  </h3>
                  <p className={styles.sensorLead}>{sensor.lead}</p>
                  <p className={styles.text}>{sensor.body}</p>

                  {sensor.flow ? (
                    <div className={styles.miniFlowWrap}>
                      <p className={styles.miniFlowLabel}>Příklad</p>
                      <ol className={styles.miniFlow}>
                        {sensor.flow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                      {sensor.flowAlt ? <p className={styles.miniFlowAlt}>{sensor.flowAlt}</p> : null}
                    </div>
                  ) : null}

                  {sensor.note ? <p className={styles.note}>{sensor.note}</p> : null}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
