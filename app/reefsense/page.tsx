import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { ReefSenseHero } from "../components/reefsense/ReefSenseHero";
import { ReefSenseReveal } from "../components/reefsense/ReefSenseReveal";
import { ReefSenseScenarios } from "../components/reefsense/ReefSenseScenarios";
import { ReefSenseSensors } from "../components/reefsense/ReefSenseSensors";
import { ReefSenseSystem } from "../components/reefsense/ReefSenseSystem";
import { ReefSenseTech } from "../components/reefsense/ReefSenseTech";
import styles from "../components/reefsense/reefsense.module.css";
import { REEFSENSE_CTA, REEFSENSE_OFFICIAL_URL } from "../data/reefsense";

const title = "ReefSense – chytré senzory a monitoring mořského akvária | Red Sea";
const description =
  "Poznejte systém ReefSense a ReefControl pro monitoring pH, teploty, salinity, ORP, hladiny vody a úniku. Data, upozornění a automatické reakce v ekosystému ReefBeat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://red-sea.cz/reefsense" },
  openGraph: {
    title,
    description,
    url: "https://red-sea.cz/reefsense",
    siteName: "Red Sea CZ",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ReefSensePage() {
  return (
    <div className={`reefsense-page ${styles.page}`}>
      <Header />
      <main>
        <ReefSenseHero />
        <ReefSenseSensors />
        <ReefSenseSystem />
        <ReefSenseScenarios />
        <ReefSenseTech />

        <section className={`${styles.section} ${styles.finale}`} aria-labelledby="finale-title">
          <div className={styles.finaleInner} data-reveal="">
            <h2 id="finale-title" className={styles.h2}>
              {REEFSENSE_CTA.title}
            </h2>
            <p className={styles.lead}>{REEFSENSE_CTA.text}</p>
            <div className={styles.heroActions}>
              <Link href={REEFSENSE_CTA.primary.href} className={styles.btnPrimary}>
                {REEFSENSE_CTA.primary.label}
              </Link>
              <Link href={REEFSENSE_CTA.secondary.href} className={styles.btnGhost}>
                {REEFSENSE_CTA.secondary.label}
              </Link>
            </div>
            <a className={styles.official} href={REEFSENSE_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
              {REEFSENSE_CTA.official}
              <span className={styles.srOnly}> (otevře se v novém okně)</span>
            </a>
          </div>
        </section>
      </main>
      <ReefSenseReveal />
    </div>
  );
}
