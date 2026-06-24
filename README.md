# Yll Veliu — Portfolio

Personal portfolio site for Yll Veliu, full-stack developer. Single-page,
dark, with scroll-reveal animations and a custom desktop cursor.

**Live domain:** [yllveliu.com](https://yllveliu.com)

## Tech stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3** — design tokens defined in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, hero load sequence, mobile menu
- Fonts via `next/font/google`: **Syne** (headings), **Inter** (body),
  **JetBrains Mono** (tags / labels)
- Devicon stack logos vendored locally in `public/icons` (no CDN dependency)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx      fonts, metadata, global Cursor + Nav
  page.tsx        composes every section in order
  globals.css     base styles, scrollbar, cursor hide, overflow guard
components/
  Cursor.tsx      custom desktop cursor (dot + lagging ring)
  Nav.tsx         fixed nav, scroll-aware bg, mobile overlay
  Hero.tsx        hero + HeroShape.tsx (animated geometric element)
  About.tsx       bio + tech-stack icon grid
  Projects.tsx    2x2 project cards
  Experience.tsx  vertical timeline
  Skills.tsx      grouped tag cloud
  Contact.tsx     CTA section
  Footer.tsx      footer + social links
  Reveal.tsx      reusable scroll-reveal wrapper (Framer Motion useInView)
  SectionLabel.tsx, ui.tsx (Button, Tag), icons.tsx
lib/
  data.ts         ALL site content — edit copy here, not in components
```

## Editing content

All text, projects, experience, and skills live in [`lib/data.ts`](lib/data.ts).
Components never hardcode copy — change it there and every section updates.

## Design tokens

| Token   | Value     | Use                     |
| ------- | --------- | ----------------------- |
| bg      | `#0a0a0a` | page background         |
| surface | `#111111` | cards                   |
| line    | `#1e1e1e` | borders                 |
| fg      | `#f0f0f0` | primary text            |
| muted   | `#888888` | secondary text          |
| accent  | `#00D8FF` | links, highlights, CTAs |

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — framework is
   auto-detected as Next.js, no extra config needed.
3. Add the custom domain `yllveliu.com` in the project's Domains settings.
