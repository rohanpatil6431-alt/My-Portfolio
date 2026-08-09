"use client";

import { Reveal, SectionHeading } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { profile } from "@/lib/profile";
import { motion } from "motion/react";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I reach for."
          description="Comfortable across the whole request lifecycle — UI state, API design, data modelling and the realtime bits in between."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <SpotlightCard
                glow="rgba(34,211,238,0.14)"
                className="h-full p-6"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ y: -2, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 400, damping: 24 }}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-[13px] text-white/65"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
