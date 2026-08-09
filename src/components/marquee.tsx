"use client";

import { profile } from "@/lib/profile";
import { motion, useReducedMotion } from "motion/react";

export function Marquee() {
  const reduce = useReducedMotion();
  const items = [...profile.marquee, ...profile.marquee];

  return (
    <div className="relative flex overflow-hidden border-y border-white/[0.07] bg-white/[0.02] py-5 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <motion.div
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-white/35"
          >
            {tech}
            <span className="h-1 w-1 rounded-full bg-violet-400/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
