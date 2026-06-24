"use client";

import { motion } from "framer-motion";
import { about, ICON_BASE, techStack } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

const ICON_WIDTH = 80;
const GAP = 12;
const ITEM_SIZE = ICON_WIDTH + GAP;
const TOTAL_WIDTH = techStack.length * ITEM_SIZE;

export default function About() {
  return (
    <section
      id="about"
      className="section-anchor mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Left column */}
        <Reveal direction="left" className="flex flex-col">
          <SectionLabel>{about.label}</SectionLabel>
          <h2 className="mt-5 max-w-md font-heading text-3xl font-bold leading-tight text-fg md:text-4xl">
            {about.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {about.bio}
          </p>
          <p className="mt-6 font-mono text-sm text-fg/80">{about.detail}</p>
        </Reveal>

        {/* Right column: stack */}
        <Reveal direction="right">
          {/* Mobile: infinite marquee */}
          <div className="overflow-hidden md:hidden">
            <motion.div
              className="flex gap-3"
              animate={{ x: [0, -TOTAL_WIDTH] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              style={{ width: TOTAL_WIDTH * 2 }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-20 flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-line bg-surface p-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ICON_BASE}${tech.icon}`}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    width={28}
                    height={28}
                    className={`h-7 w-7 ${tech.invert ? "invert" : ""}`}
                  />
                  <span className="text-center font-mono text-[10px] text-muted">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop: grid */}
          <ul className="hidden grid-cols-3 gap-3 sm:grid-cols-4 md:grid md:grid-cols-3 lg:grid-cols-5">
            {techStack.map((tech) => (
              <li key={tech.name}>
                <div className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-xl border border-line bg-surface p-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-glow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${ICON_BASE}${tech.icon}`}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    width={32}
                    height={32}
                    className={`h-7 w-7 md:h-8 md:w-8 ${tech.invert ? "invert" : ""}`}
                  />
                  <span className="text-center font-mono text-[10px] text-muted transition-colors group-hover:text-fg">
                    {tech.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
