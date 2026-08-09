"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

export function SpotlightCard({
  children,
  className,
  glow = "rgba(167,139,250,0.16)",
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
}) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const background = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 72%)`;

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-500 hover:border-white/20",
        className,
      )}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
