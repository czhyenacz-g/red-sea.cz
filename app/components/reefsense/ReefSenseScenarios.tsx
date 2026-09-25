"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { REEFSENSE_SCENARIOS, type ReefSenseStepKind } from "../../data/reefsense";
import { ReefSenseIcon } from "./ReefSenseIcon";
import styles from "./reefsense.module.css";

const KIND_LABEL: Record<ReefSenseStepKind, string> = {
  trigger: "Situace",
  sensor: "Senzor",
  control: "Mozek",
  notify: "Upozornění",
  power: "Spínání",
  device: "Zařízení",
  action: "Akce",
};

// Interaktivní mini-příběhy: přepínač scénářů (ARIA tabs) + postupně se rozsvěcující cesta signálu.
export function ReefSenseScenarios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scenario = REEFSENSE_SCENARIOS[activeIndex];

  const select = (index: number, focus = false) => {
    const count = REEFSENSE_SCENARIOS.length;
    const next = (index + count) % count;
    setActiveIndex(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => select(activeIndex + 1, true),
      ArrowDown: () => select(activeIndex + 1, true),
      ArrowLeft: () => select(activeIndex - 1, true),
      ArrowUp: () => select(activeIndex - 1, true),
      Home: () => select(0, true),
      End: () => select(REEFSENSE_SCENARIOS.length - 1, true),
    };
    const action = keys[e.key];
    if (!action) return;
    e.preventDefault();
    action();
  };

  const steps: { kind: ReefSenseStepKind; label: string }[] = [...scenario.steps, { kind: "action", label: scenario.outcomes.join(" · ") }];

  return (
    <section id="scenare" className={`${styles.section} ${styles.scenarios}`} aria-labelledby="scenarios-title">
      <div className={styles.container}>
        <div data-reveal="">
          <p className={styles.eyebrow}>Praktické scénáře</p>
          <h2 id="scenarios-title" className={styles.h2}>
            Co se stane, když…
          </h2>
          <p className={styles.lead}>Vyberte situaci a sledujte, kudy signál putuje – od senzoru až k akci.</p>
        </div>

        <div className={styles.scenarioShell} data-reveal="">
          <div className={styles.tabs} role="tablist" aria-label="Scénáře automatizace">
            {REEFSENSE_SCENARIOS.map((item, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`scenario-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`scenario-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={styles.tab}
                  onClick={() => select(index)}
                  onKeyDown={onKeyDown}
                >
                  <ReefSenseIcon name={item.icon} className={styles.tabIcon} />
                  <span>{item.tab}</span>
                </button>
              );
            })}
          </div>

          <div
            key={scenario.id}
            role="tabpanel"
            id={`scenario-panel-${scenario.id}`}
            aria-labelledby={`scenario-tab-${scenario.id}`}
            tabIndex={0}
            className={styles.panel}
          >
            <div className={styles.panelCopy}>
              <h3 className={styles.h3}>{scenario.title}</h3>
              <p className={styles.text}>{scenario.text}</p>
            </div>

            <ol className={styles.path} aria-label={`Cesta signálu: ${steps.map((s) => s.label).join(", ")}`}>
              {steps.map((step, index) => (
                <li key={`${step.kind}-${step.label}`} className={styles.pathStep} data-kind={step.kind} style={{ "--step": index } as CSSProperties}>
                  <span className={styles.pathKind}>{KIND_LABEL[step.kind]}</span>
                  {step.kind === "action" ? (
                    <span className={styles.pathOutcomes}>
                      {scenario.outcomes.map((outcome) => (
                        <span key={outcome} className={styles.outcome}>
                          {outcome}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <span className={styles.pathLabel}>{step.label}</span>
                  )}
                </li>
              ))}
            </ol>
            <p className={styles.panelNote}>Chování závisí na pravidlech, která si v ReefControl nastavíte.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
