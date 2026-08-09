"use client";

import { Reveal, SectionHeading } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { profile } from "@/lib/profile";
import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix, raw }: { value: number; suffix?: string; raw?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {raw ? String(display) : display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Engineer by degree, builder by habit."
        />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-5">
            {profile.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.1}>
                <p className="text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <p className="text-pretty text-base leading-relaxed text-white/60 sm:text-lg">
                I care about the details that make software feel good — clean
                architecture, honest error handling, and interfaces that respond
                the instant you touch them.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profile.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 + index * 0.1}>
                <SpotlightCard className="p-6">
                  <p className="text-4xl font-semibold tracking-tight text-white">
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      raw={"raw" in stat ? stat.raw : false}
                    />
                  </p>
                  <p className="mt-2 text-sm leading-snug text-white/45">
                    {stat.label}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
