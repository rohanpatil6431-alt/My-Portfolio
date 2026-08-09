"use client";

import { profile } from "@/lib/profile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sectionIds = profile.navItems.map((item) => item.href.slice(1));

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          "w-full max-w-3xl rounded-full border border-white/10 px-3 py-2 transition-all duration-500",
          scrolled
            ? "bg-black/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "bg-white/[0.03] backdrop-blur-md",
        )}
      >
        <div className="flex items-center justify-between gap-2">
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight text-white"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            rohan<span className="text-violet-400">.dev</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {profile.navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    className={cn(
                      "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      isActive ? "text-white" : "text-white/55 hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="hidden rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.04] md:block"
            >
              Hire me
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              {profile.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="block rounded-xl px-4 py-2.5 text-sm text-violet-300"
                >
                  Hire me
                </a>
              </li>
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
