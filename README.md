# Rohan Patil — Portfolio

Animated dark-theme personal portfolio built with Next.js (App Router), Tailwind CSS v4,
shadcn/ui components and Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Editing content

All profile content — bio, projects, skills, education, links — lives in a single file:
[`src/lib/profile.ts`](src/lib/profile.ts). Change it there and the whole site updates;
no component edits needed.

## Structure

```
src/app/layout.tsx        metadata, fonts, dark theme shell
src/app/page.tsx          section composition
src/components/           hero, about, projects, skills, education, contact + animation primitives
src/components/ui/        shadcn/ui components
src/lib/profile.ts        all site content
```

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — no configuration
or environment variables required.
