import Image from "next/image";
import Link from "next/link";
import { projects, projectsSection, type Project } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { Tag } from "@/components/ui";
import { ArrowUpRight, GitHubIcon } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/70 hover:shadow-card overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-48 bg-white/5 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-5xl font-bold text-white/5 select-none">
              {project.number}
            </span>
          </div>
        )}
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm text-accent">{project.number}</span>
          <div className="flex items-center gap-3 text-muted">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — live site`}
                className="transition-colors duration-200 hover:text-accent"
              >
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} — GitHub repository`}
                className="transition-colors duration-200 hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
              </Link>
            )}
          </div>
        </div>

        <h3 className="mt-4 font-heading text-2xl font-semibold text-fg">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );

  return project.live ? (
    <Link href={project.live} target="_blank" rel="noopener noreferrer" className="h-full block">
      {cardContent}
    </Link>
  ) : (
    <div className="h-full">{cardContent}</div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="section-anchor mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionLabel>{projectsSection.label}</SectionLabel>
        <h2 className="mt-5 font-heading text-3xl font-bold text-fg md:text-5xl">
          {projectsSection.heading}
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.number} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Link
          href={projectsSection.allLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
        >
          {projectsSection.allLink.label}
        </Link>
      </Reveal>
    </section>
  );
}
