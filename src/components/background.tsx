"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function Background() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07070b]"
    >
      <motion.div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]"
        animate={reduce ? undefined : { x: [-60, 60, -60], y: [0, 50, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-52 -left-32 h-[36rem] w-[36rem] rounded-full bg-cyan-500/15 blur-[130px]"
        animate={reduce ? undefined : { x: [0, 90, 0], y: [0, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/15 blur-[130px]"
        animate={reduce ? undefined : { x: [0, -70, 0], y: [0, 70, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_55%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light [background-image:url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)'/%3E%3C/svg%3E&quot;)]" />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400"
      style={{ scaleX }}
    />
  );
}
