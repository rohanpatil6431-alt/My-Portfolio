"use client";

import { Reveal, SectionHeading } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { profile } from "@/lib/profile";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FileText, GraduationCap } from "lucide-react";
import { useRef } from "react";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  const entries = [
    {
      icon: GraduationCap,
      title: profile.education.degree,
      subtitle: profile.education.school,
      period: profile.education.period,
      body:
        "Four years of core computer engineering — data structures, operating systems, databases and networks — alongside self-driven full-stack development.",
      link: null as null | { label: string; href: string },
    },
    {
      icon: FileText,
      title: profile.publication.title,
      subtitle: profile.publication.venue,
      period: "May 2026",
      body: `Peer-reviewed paper on real-time ASL hand recognition for accessible human-computer interaction. DOI ${profile.publication.doi}.`,
      link: { label: "Read the paper", href: profile.publication.url },
    },
  ];

  return (
    <section id="education" className="scroll-mt-28 px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education & Research"
          title="Where the foundation came from."
        />

        <div ref={ref} className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
          <motion.div
            style={{ scaleY, opacity }}
            className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-violet-400 via-fuchsia-400 to-cyan-400"
          />

          <div className="space-y-6">
            {entries.map((entry, index) => (
              <Reveal key={entry.title} delay={index * 0.1}>
                <div className="relative">
                  <span className="absolute -left-8 top-7 grid h-4 w-4 place-items-center rounded-full border border-white/15 bg-[#0b0b12] sm:-left-10">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  </span>
                  <SpotlightCard className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <entry.icon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight text-white">
                            {entry.title}
                          </h3>
                          <p className="mt-1 text-sm text-white/50">
                            {entry.subtitle}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-white/55">
                      {entry.body}
                    </p>
                    {entry.link ? (
                      <a
                        href={entry.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block text-sm text-violet-300 underline-offset-4 hover:underline"
                      >
                        {entry.link.label} →
                      </a>
                    ) : null}
                  </SpotlightCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
