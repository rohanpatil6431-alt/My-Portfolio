---
name: testing-portfolio-ui
description: How to run and browser-test the animated Next.js portfolio (dev/prod servers, mobile viewport emulation, known animation/nav pitfalls).
---

# Browser-testing the portfolio

## Serving the app
- `npm run dev` may find port 3000 already taken and silently move to 3001 — always read the dev server output for the real URL.
- For clean console/hydration assertions, prefer a production server: `npm run build && PORT=3002 npx next start`.
  Dev mode injects HMR/overlay code and any DOM instrumentation from the testing harness can produce
  "A tree hydrated but some attributes ... didn't match" warnings that do NOT reproduce in production.
- Base UI may log a dev-only warning ("a component that acts as a button expected a native `<button>`")
  wherever `Button render={<a .../>}` is used (`src/components/ui/button.tsx`, hero, contact). It does not appear in prod.

## Getting a real ~390px mobile viewport without devtools
The window manager usually refuses to shrink Chrome below ~500 CSS px. Instead, shrink the window as far as it
will go, then zoom **in** with `ctrl+equal` (xdotool: `ctrl+equal`, not `ctrl+plus`) a couple of steps — each step
divides the CSS viewport. Verify with `window.innerWidth` / `document.documentElement.clientWidth`.
Reset afterwards with `ctrl+0`.

## Things worth checking every time (they have broken before)
- **Mobile hamburger links**: with `<html class="scroll-smooth">`, an in-menu anchor whose `onClick` also collapses
  an animated (height auto→0) menu can have its smooth scroll aborted — the hash changes but the page never moves.
  Assert `window.scrollY` against `getElementById(id).offsetTop`, not just `location.hash`.
- **Mobile menu legibility**: the menu list inherits the nav's translucent background; at the top of the page
  (unscrolled state) page content can bleed through the open menu. Screenshot the open menu at scroll 0.
- **Active nav pill (IntersectionObserver)**: with `rootMargin: "-40% 0px -50% 0px"` the observation band is only
  ~10% of the viewport, so a section taller than ~10x that band can never reach `threshold: 0.1` and will never
  become active. Compare each section's height to the band size before trusting the pill.
- **Clipboard**: `xclip` is not installed; verify a copy button by pasting into the browser address bar.

## Devin Secrets Needed
None — the site is fully static, no env vars or credentials.
