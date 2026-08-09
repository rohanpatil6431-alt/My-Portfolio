"use client";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { motion } from "motion/react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Copy, Mail } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 pb-28 pt-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] px-7 py-14 text-center sm:px-14">
            <motion.div
              aria-hidden
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/25 blur-[90px]"
            />
            <span className="relative font-mono text-xs uppercase tracking-[0.28em] text-violet-300/80">
              Contact
            </span>
            <h2 className="relative mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="relative mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/55">
              I&apos;m looking for internship and junior developer roles, and I&apos;m
              always up for interesting freelance work. My inbox is open.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<a href={`mailto:${profile.email}`} />}
                size="lg"
                className="h-11 rounded-full bg-white px-6 text-[15px] text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-white"
              >
                <Mail className="mr-1 h-4 w-4" />
                {profile.email}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  void navigator.clipboard.writeText(profile.email);
                  toast.success("Email copied to clipboard");
                }}
                className="h-11 rounded-full border-white/15 bg-white/[0.03] px-6 text-[15px] text-white hover:bg-white/10 hover:text-white"
              >
                <Copy className="mr-1 h-4 w-4" />
                Copy email
              </Button>
            </div>

            <div className="relative mt-8 flex items-center justify-center gap-2">
              {[
                { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: profile.github, icon: GithubIcon, label: "GitHub" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-white/35 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js, Tailwind CSS & shadcn/ui</p>
      </div>
    </footer>
  );
}
