"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { useTranslation } from "react-i18next";
import ProjectPortfolio from "@/components/sections/ProjectPortfolio";
import PowerDiagram from "@/components/sections/home/PowerDiagram";
import { CONTACT } from "@/lib/constants";
import styles from "./home.module.css";

// Scoped to this page only — the rest of the site keeps the Outfit typeface.
// Loaded with the `wdth` axis so the drafting-paper micro-typography (tight
// numerals, condensed labels) actually has a width axis to move along.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"] });

/* ------------------------------------------------------------------ */
/*  Home Page — drawn as a single-line diagram, not a SaaS landing page */
/* ------------------------------------------------------------------ */
export default function Home() {
  const { t } = useTranslation();

  const services = [
    { title: t("home-service-1-title"), desc: t("home-service-1-desc"), href: "/services/power-system-design" },
    { title: t("home-service-5-title"), desc: t("home-service-5-desc"), href: "/services/electrical-protection" },
    { title: t("home-service-4-title"), desc: t("home-service-4-desc"), href: "/services/system-analysis" },
    { title: t("home-service-3-title"), desc: t("home-service-3-desc"), href: "/services/renewable-integration" },
    { title: t("home-service-2-title"), desc: t("home-service-2-desc"), href: "/services/grid-modernization" },
    { title: t("home-service-6-title"), desc: t("home-service-6-desc"), href: "/services/energy-audits" },
  ];

  const sectors = [
    { tag: t("wws-ugo-title"), title: "Reliability at network scale", desc: t("wws-ugo-desc"), href: "/who-we-serve/utilities-grid-operators" },
    { tag: t("wws-mi-title"), title: "Power that cannot stop", desc: t("wws-mi-desc"), href: "/who-we-serve/mining-industry" },
    { tag: t("wws-re-title"), title: "Getting connected", desc: t("wws-re-desc"), href: "/who-we-serve/renewable-energy" },
    { tag: t("wws-im-title"), title: "Continuous process loads", desc: t("wws-im-desc"), href: "/who-we-serve/industrial-manufacturing" },
    { tag: t("wws-og-title"), title: "Hazardous and remote", desc: t("wws-og-desc"), href: "/who-we-serve/oil-gas" },
    { tag: t("wws-gr-title"), title: "Infrastructure and compliance", desc: t("wws-gr-desc"), href: "/who-we-serve/government-regulatory" },
  ];

  const badges: Array<{ label: string; sub: string; img?: boolean }> = [
    { label: "PEO", sub: "Ontario" },
    { label: "EGBC", sub: "British Columbia", img: true },
    { label: "WSIB", sub: "Safety" },
    { label: "EGM", sub: "Manitoba" },
    { label: "IEEE", sub: "Member" },
  ];

  return (
    <div className={`${styles.theme} ${archivo.className}`}>
      {/* ============================================================ */}
      {/*  HERO — the diagram is the illustration                      */}
      {/* ============================================================ */}
      <section className={`${styles.hero} ${styles.shell}`}>
        <h1>
          {t("home-hero-title")} <span className={styles.accent}>{t("home-hero-title-highlight")}</span>
        </h1>
        <p>{t("home-hero-subtitle")}</p>
        <div className={styles.actions}>
          <Link href="/services" className={`${styles.btn} ${styles.btnSolid}`}>
            {t("home-hero-cta-primary")}
          </Link>
          <Link href="/contact-us" className={`${styles.btn} ${styles.btnLine}`}>
            {t("home-hero-cta-secondary")}
          </Link>
        </div>

        <PowerDiagram />
      </section>

      {/* ============================================================ */}
      {/*  RECORD — the numbers, set as engineering quantities          */}
      {/* ============================================================ */}
      <section className={styles.record}>
        <div className={styles.shell}>
          <dl className={styles.recordGrid}>
            <div>
              <dt>{t("home-stats-projects")}</dt>
              <dd className="qty"><span className="qty__val">75</span><span className="qty__unit">+</span></dd>
            </div>
            <div>
              <dt>{t("home-stats-years")}</dt>
              <dd className="qty"><span className="qty__val">22</span><span className="qty__unit">yrs</span></dd>
            </div>
            <div>
              <dt>Largest DER interconnection delivered</dt>
              <dd className="qty"><span className="qty__val">150</span><span className="qty__unit">MW</span></dd>
            </div>
            <div>
              <dt>Professional licensure</dt>
              <dd className="qty"><span className="qty__val">EGBC</span></dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SERVICES — six taps off a single bus                        */}
      {/* ============================================================ */}
      <section className={`${styles.band} ${styles.shell}`} id="services">
        <div className={styles.bandHead}>
          <h2>{t("home-services-title")}</h2>
          <p>{t("home-services-subtitle")}</p>
        </div>

        <div className={styles.taps}>
          {services.map((svc) => (
            <Link key={svc.href} href={svc.href} className={styles.tap}>
              <div className={styles.tapRow}>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SECTORS                                                      */}
      {/* ============================================================ */}
      <section className={`${styles.band} ${styles.shell}`} id="sectors">
        <div className={styles.bandHead}>
          <h2>{t("home-sectors-title")}</h2>
          <p>{t("home-sectors-subtitle")}</p>
        </div>

        <div className={styles.sectors}>
          {sectors.map((sec) => (
            <Link key={sec.href} href={sec.href} className={styles.sector}>
              <span className={styles.sectorTag}>{sec.tag}</span>
              <h3>{sec.title}</h3>
              <p>{sec.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CREDENTIALS                                                  */}
      {/* ============================================================ */}
      <section className={styles.credentials}>
        <div className={`${styles.shell} ${styles.band}`}>
          <div className={styles.credentialsGrid}>
            <Image
              src="/images/logos/egbc.png"
              alt="Engineers and Geoscientists British Columbia"
              width={112}
              height={112}
              className="object-contain"
            />
            <div>
              <h3 style={{ margin: "0 0 .5rem", fontSize: "clamp(1.375rem,1.1rem + .9vw,1.75rem)" }}>
                {t("home-credentials-title")}
              </h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", maxWidth: "56ch" }}>
                {t("home-credentials-desc")}
              </p>
              <div className={styles.badgeRow}>
                {badges.map((b) => (
                  <span key={b.label} className={styles.badge}>
                    {b.label}
                    <span>{b.sub}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROJECT PORTFOLIO — real work, kept as-is                    */}
      {/* ============================================================ */}
      <ProjectPortfolio />

      {/* ============================================================ */}
      {/*  REACH                                                        */}
      {/* ============================================================ */}
      <section className={`${styles.reach} ${styles.band}`} id="reach">
        <div className={`${styles.shell} ${styles.reachGrid}`}>
          <div>
            <h2 style={{ margin: "0 0 .75rem", fontSize: "clamp(1.75rem,1.3rem + 1.6vw,2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              {t("home-reach-title")}
            </h2>
            <p style={{ margin: 0, color: "var(--ink-soft)", maxWidth: "52ch" }}>{t("home-reach-subtitle")}</p>
          </div>
          <ul className={styles.regions}>
            <li>North America <span>utilities, mining, industrial</span></li>
            <li>Latin America <span>generation and transmission</span></li>
            <li>Caribbean <span>grid reliability and integration</span></li>
            <li>Asia <span>industrial and renewable</span></li>
          </ul>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CLOSE                                                        */}
      {/* ============================================================ */}
      <section className={`${styles.band} ${styles.shell} ${styles.close}`} id="contact">
        <h2>{t("home-close-title")}</h2>
        <p>{t("home-close-subtitle")}</p>
        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.btnSolid}`} href={`mailto:${CONTACT.EMAIL}`}>
            {CONTACT.EMAIL}
          </a>
          <a className={`${styles.btn} ${styles.btnLine}`} href={`tel:${CONTACT.PHONE.replace(/[^\d+]/g, "")}`}>
            {CONTACT.PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
