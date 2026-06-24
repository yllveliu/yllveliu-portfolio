"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups, skillsSection } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

const directions = [
  { x: -180, y: -80 },
  { x: 180, y: -100 },
  { x: -120, y: 120 },
  { x: 180, y: 80 },
  { x: 0, y: -150 },
  { x: 0, y: 150 },
  { x: -220, y: 0 },
  { x: 220, y: 0 },
];

function SkillGroup({ group, groupIndex }: { group: { label: string; skills: string[] }; groupIndex: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Reveal delay={groupIndex * 0.05}>
      <div
        ref={ref}
        className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8"
      >
        <dt className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
          {group.label}
        </dt>
        <dd>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill, si) => {
              const dir = directions[si % directions.length];
              const rotate = (si % 2 === 0 ? 1 : -1) * ((si % 4) + 1) * 18;
              return (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: dir.x, y: dir.y, scale: 0.3, rotate }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: si * 0.07,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <span className="inline-block rounded-full border border-accent/60 px-2 py-0.5 font-mono text-[11px] leading-tight text-accent">
                    {skill}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </dd>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-anchor mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionLabel>{skillsSection.label}</SectionLabel>
        <h2 className="mt-5 font-heading text-3xl font-bold text-fg md:text-5xl">
          {skillsSection.heading}
        </h2>
      </Reveal>

      <dl className="mt-12 divide-y divide-line border-y border-line">
        {skillGroups.map((group, gi) => (
          <SkillGroup key={group.label} group={group} groupIndex={gi} />
        ))}
      </dl>
    </section>
  );
}
