"use client";

import { useRef, useCallback, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";

const SIZE = 64;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 24;
const START_ANGLE = 210;
const END_ANGLE = 330;
const SWEEP = END_ANGLE - START_ANGLE;
const ARC_LENGTH = (Math.PI * R * SWEEP) / 180;

// end-stop vibration tuning
const VIBRATE_AMPLITUDE = 12; // degrees of initial swing
const VIBRATE_FREQ = 16; // oscillations per second
const VIBRATE_DECAY = 4.5; // exponential decay rate
const VIBRATE_DURATION = 900; // ms
const RETRIGGER_COOLDOWN = 500; // ms

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(r: number, startDeg: number, endDeg: number) {
  const s = polar(CX, CY, r, startDeg);
  const e = polar(CX, CY, r, endDeg);
  return `M ${s.x} ${s.y} A ${r} ${r} 0 0 1 ${e.x} ${e.y}`;
}

export default function ScrollMeter() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 18,
    mass: 0.1,
  });

  const needleAngle = useTransform(
    smoothProgress,
    [0, 1],
    [START_ANGLE, END_ANGLE],
  );
  const dashOffset = useTransform(smoothProgress, [0, 1], [ARC_LENGTH, 0]);

  // End-stop vibration: decaying sine on a motion value, so the needle
  // buzzes against the stop without re-rendering the component per frame.
  const vibration = useMotionValue(0);
  const frameRef = useRef(0);
  const lastTrigger = useRef(0);

  const triggerVibration = useCallback(() => {
    const now = performance.now();
    if (now - lastTrigger.current < RETRIGGER_COOLDOWN) return;
    lastTrigger.current = now;

    cancelAnimationFrame(frameRef.current);
    const start = now;

    const step = (t: number) => {
      const elapsed = (t - start) / 1000;
      if (elapsed * 1000 >= VIBRATE_DURATION) {
        vibration.set(0);
        return;
      }
      const decay = Math.exp(-VIBRATE_DECAY * elapsed);
      vibration.set(
        VIBRATE_AMPLITUDE *
          decay *
          Math.sin(2 * Math.PI * VIBRATE_FREQ * elapsed),
      );
      frameRef.current = requestAnimationFrame(step);
    };
    frameRef.current = requestAnimationFrame(step);
  }, [vibration]);

  useEffect(() => {
    const atBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && atBottom()) triggerVibration();
    };
    const handleTouchMove = () => {
      if (atBottom()) triggerVibration();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [triggerVibration]);

  const needleRotation = useTransform(
    () => needleAngle.get() + vibration.get(),
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <motion.svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {/* arc track — the needle's motion range */}
        <path
          d={arcPath(R, START_ANGLE, END_ANGLE)}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={2.5}
          strokeLinecap="round"
        />

        {/* arc progress */}
        <motion.path
          d={arcPath(R, START_ANGLE, END_ANGLE)}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{ strokeDashoffset: dashOffset }}
          strokeDasharray={ARC_LENGTH}
        />

        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* needle */}
        <motion.line
          x1={CX}
          y1={CY}
          x2={CX + R - 2}
          y2={CY}
          stroke="#60a5fa"
          strokeWidth={2.5}
          strokeLinecap="round"
          style={{
            rotate: needleRotation,
            originX: `${CX}px`,
            originY: `${CY}px`,
          }}
        />

        {/* pivot */}
        <circle
          cx={CX}
          cy={CY}
          r={3.5}
          fill="#0f172a"
          stroke="rgba(59,130,246,0.6)"
          strokeWidth={1.5}
        />
        <circle cx={CX} cy={CY} r={1.2} fill="#60a5fa" />
      </motion.svg>
    </div>
  );
}
