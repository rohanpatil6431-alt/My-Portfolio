"use client";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile";
import { motion, useReducedMotion } from "motion/react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const words = profile.roles;

function Typewriter() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }
        if (cleared) {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
          return;
        }
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1),
        );
      },
      done ? 1600 : deleting ? 35 : 70,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, reduce]);

  const shown = reduce ? words[0] : text;

  return (
    <span className="inline-flex items-baseline">
      <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
        {shown || "\u00A0"}
      </span>
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0.15, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="ml-1 inline-block h-[1em] w-[3px] translate-y-[0.08em] rounded-full bg-violet-300"
      />
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-6 pb-20 pt-32 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.7)]" />
            {profile.status}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/45">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m {profile.firstName}.
          <span className="block text-white/35">I build things for the web.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          <Typewriter />
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg"
        >
          Computer Engineering graduate turning ideas into fast, real-time
          full-stack products with React, Node.js and MongoDB.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            render={<a href="#projects" />}
            size="lg"
            className="group h-11 rounded-full px-6 text-[15px] bg-white text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-white"
          >
            View my work
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            render={<a href={`mailto:${profile.email}`} />}
            size="lg"
            variant="outline"
            className="h-11 rounded-full border-white/15 bg-white/[0.03] px-6 text-[15px] text-white hover:bg-white/10 hover:text-white"
          >
            <Mail className="mr-1 h-4 w-4" />
            Get in touch
          </Button>
          <div className="ml-1 flex items-center gap-1">
            {[
              { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: profile.github, icon: GithubIcon, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/35 hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
