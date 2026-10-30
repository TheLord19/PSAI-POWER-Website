"use client";

import React from "react";
import styles from "@/app/home.module.css";

/**
 * Hero artwork: a single-line diagram of PSAI POWER's own scope of work.
 * A 115 kV utility supply is stepped down to a 25 kV bus, which feeds four
 * taps standing in for the firm's core practices. Wide layout for desktop,
 * a vertical riser variant for phones. Purely decorative (aria-hidden lives
 * on the wrapper's siblings via the visible heading/paragraph instead).
 */
export default function PowerDiagram() {
  return (
    <figure className={styles.sld}>
      <svg
        className={styles.sldWide}
        viewBox="0 0 1000 340"
        role="img"
        aria-labelledby="sldTitle sldDesc"
      >
        <title id="sldTitle">Single-line diagram of PSAI POWER&apos;s scope of work</title>
        <desc id="sldDesc">
          A 115 kV utility supply passes through a disconnect switch, a circuit breaker, and a
          115 to 25 kV step-down transformer onto a 25 kV distribution bus. Four feeders tap off
          that bus, each through its own breaker, standing for the firm&apos;s four areas of work:
          system studies, protection and control, substation design, and commissioning.
        </desc>

        <path className="conductor" pathLength={1} d="M46 46 V58 M46 78 V92 M46 110 V126 M46 168 V210" />
        <path className="conductor" pathLength={1} d="M46 78 L63 59" />

        <path className="bus" pathLength={1} d="M4 210 H986" />

        <path
          className="conductor tapRun"
          pathLength={1}
          d="M290 210 V240 M290 258 V280 M480 210 V240 M480 258 V280 M670 210 V240 M670 258 V280 M880 210 V240 M880 258 V280"
        />

        <rect className="sym" x="37" y="92" width="18" height="18" />
        <circle className="sym" cx="46" cy="139" r="13" />
        <circle className="sym" cx="46" cy="155" r="13" />
        <rect className="sym" x="281" y="240" width="18" height="18" />
        <rect className="sym" x="471" y="240" width="18" height="18" />
        <rect className="sym" x="661" y="240" width="18" height="18" />
        <rect className="sym" x="871" y="240" width="18" height="18" />

        <text className="lbl" x="78" y="42">115 kV utility supply</text>
        <text className="lblSoft" x="78" y="76">disconnect</text>
        <text className="lblSoft" x="78" y="107">breaker</text>
        <text className="lblSoft" x="78" y="152">115 / 25 kV transformer</text>
        <text className="lblSoft" x="4" y="233">25 kV distribution bus</text>

        <text className="lbl" x="290" y="304" textAnchor="middle">System studies</text>
        <text className="lblSoft" x="290" y="324" textAnchor="middle">load flow, short circuit, arc flash</text>

        <text className="lbl" x="480" y="304" textAnchor="middle">Protection &amp; control</text>
        <text className="lblSoft" x="480" y="324" textAnchor="middle">relay selection and settings</text>

        <text className="lbl" x="670" y="304" textAnchor="middle">Substation design</text>
        <text className="lblSoft" x="670" y="324" textAnchor="middle">single lines and layouts</text>

        <text className="lbl" x="880" y="304" textAnchor="middle">Commissioning</text>
        <text className="lblSoft" x="880" y="324" textAnchor="middle">testing to energization</text>
      </svg>

      <svg
        className={styles.sldTall}
        viewBox="0 0 380 540"
        role="img"
        aria-labelledby="sldTitleT sldDescT"
      >
        <title id="sldTitleT">Single-line riser diagram of PSAI POWER&apos;s scope of work</title>
        <desc id="sldDescT">
          The same circuit drawn vertically: a 115 kV utility supply through a disconnect,
          breaker and 115 to 25 kV transformer onto a 25 kV bus, with four feeders tapping off it.
        </desc>

        <path className="conductor" pathLength={1} d="M40 32 V44 M40 64 V78 M40 96 V112 M40 154 V180" />
        <path className="conductor" pathLength={1} d="M40 64 L57 45" />

        <path className="bus" pathLength={1} d="M40 180 V500" />

        <path
          className="conductor tapRun"
          pathLength={1}
          d="M40 220 H74 M92 220 H116 M40 300 H74 M92 300 H116 M40 380 H74 M92 380 H116 M40 460 H74 M92 460 H116"
        />

        <rect className="sym" x="31" y="78" width="18" height="18" />
        <circle className="sym" cx="40" cy="125" r="13" />
        <circle className="sym" cx="40" cy="141" r="13" />
        <rect className="sym" x="74" y="211" width="18" height="18" />
        <rect className="sym" x="74" y="291" width="18" height="18" />
        <rect className="sym" x="74" y="371" width="18" height="18" />
        <rect className="sym" x="74" y="451" width="18" height="18" />

        <text className="lbl" x="66" y="28">115 kV utility supply</text>
        <text className="lblSoft" x="66" y="62">disconnect</text>
        <text className="lblSoft" x="66" y="93">breaker</text>
        <text className="lblSoft" x="66" y="138">115 / 25 kV transformer</text>
        <text className="lblSoft" x="4" y="524">25 kV distribution bus</text>

        <text className="lbl" x="126" y="216">System studies</text>
        <text className="lblSoft" x="126" y="234">load flow, short circuit, arc flash</text>
        <text className="lbl" x="126" y="296">Protection &amp; control</text>
        <text className="lblSoft" x="126" y="314">relay selection and settings</text>
        <text className="lbl" x="126" y="376">Substation design</text>
        <text className="lblSoft" x="126" y="394">single lines and layouts</text>
        <text className="lbl" x="126" y="456">Commissioning</text>
        <text className="lblSoft" x="126" y="474">testing to energization</text>
      </svg>
    </figure>
  );
}
