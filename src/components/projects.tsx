"use client";

import { Reveal, SectionHeading } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/profile";
import { motion } from "motion/react";
import { GithubIcon } from "@/components/brand-icons";
import { Sparkles } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've designed, built and shipped."
          description="Real systems with real trade-offs — realtime media, computer vision, and production-shaped backends."
        />

        <div className="space-y-6">
          {profile.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <SpotlightCard className="p-7 sm:p-9">
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} blur-2xl`}
                />
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        {project.title}
                      </h3>
                      {"badge" in project && project.badge ? (
                        <Badge className="gap-1 border-violet-400/25 bg-violet-400/10 text-violet-200">
                          <Sparkles className="h-3 w-3" />
                          {project.badge}
                        </Badge>
                      ) : null}
                    </div>
                    <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/55">
                      {project.tagline}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/35">
                      {project.period}
                    </span>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-white/55"
                    >
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/60"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
