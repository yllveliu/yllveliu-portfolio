# Yll Veliu — Portfolio

[![Live](https://img.shields.io/badge/Live-yllveliu.com-00D8FF?style=flat-square&logo=vercel&logoColor=white)](https://yllveliu.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Personal portfolio for Yll Veliu — full-stack developer. Single-page, dark-themed, with scroll-reveal animations and a custom desktop cursor.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) · React 18 · TypeScript |
| Styling | Tailwind CSS 3 — design tokens in `tailwind.config.ts` |
| Animation | Framer Motion — scroll reveals, hero sequence, mobile menu |
| Fonts | Syne (headings) · Inter (body) · JetBrains Mono (labels) via `next/font` |
| Icons | Devicon stack logos vendored in `public/icons` (no CDN dependency) |

---

## Getting Started

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint check
```

---

## Project Structure

```
app/
  layout.tsx        fonts, metadata, global Cursor + Nav
  page.tsx          composes every section in order
  globals.css       base styles, scrollbar, cursor hide, overflow guard

components/
  Cursor.tsx        custom desktop cursor (dot + lagging ring)
  Nav.tsx           fixed nav, scroll-aware bg, mobile overlay
  Hero.tsx          hero + HeroShape.tsx (animated geometric element)
  About.tsx         bio + tech-stack icon grid
  Projects.tsx      project cards
  Experience.tsx    vertical timeline
  Skills.tsx        grouped tag cloud
  Contact.tsx       CTA section
  Footer.tsx        footer + social links
  Reveal.tsx        reusable scroll-reveal wrapper (Framer Motion useInView)
  SectionLabel.tsx  section heading label
  ui.tsx            Button, Tag primitives
  icons.tsx         SVG icon set

lib/
  data.ts           ALL site content — edit copy here, never in components
```

---

## Editing Content

Everything — copy, projects, experience, skills, links — lives in [`lib/data.ts`](lib/data.ts).
No component hardcodes text. Change it there and every section updates automatically.

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#0a0a0a` | Page background |
| `surface` | `#111111` | Cards |
| `line` | `#1e1e1e` | Borders |
| `fg` | `#f0f0f0` | Primary text |
| `muted` | `#888888` | Secondary text |
| `accent` | `#00D8FF` | Links, highlights, CTAs |

---

## Deployment

The site runs on **Vercel** with a custom domain. To deploy your own fork:

1. Push to GitHub.
2. Import at [vercel.com/new](https://vercel.com/new) — Next.js is auto-detected, no extra config needed.
3. Add your custom domain in **Project → Settings → Domains**.
