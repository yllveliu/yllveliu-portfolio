import { skillGroups, skillsSection } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { Tag } from "@/components/ui";

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
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
                {group.label}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
