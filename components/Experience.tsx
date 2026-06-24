import { experience, experienceSection } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-anchor mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionLabel>{experienceSection.label}</SectionLabel>
        <h2 className="mt-5 font-heading text-3xl font-bold text-fg md:text-5xl">
          {experienceSection.heading}
        </h2>
      </Reveal>

      <div className="relative mt-14 max-w-3xl">
        {/* Vertical line */}
        <span
          className="absolute left-[7px] top-2 bottom-2 w-px bg-line"
          aria-hidden="true"
        />

        <ol className="space-y-12">
          {experience.map((entry, i) => (
            <Reveal
              as="li"
              key={entry.company}
              direction="left"
              delay={i * 0.1}
              className="relative pl-10"
            >
              {/* Accent dot */}
              <span
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg shadow-glow-sm"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-xl font-bold text-fg">
                  {entry.company}
                  <span className="text-muted"> · {entry.role}</span>
                </h3>
                <span className="font-mono text-xs text-accent">
                  {entry.period}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
