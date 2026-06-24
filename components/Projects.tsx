"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects, projectsSection, type Project } from "@/lib/data";
import SectionLabel from "@/components/SectionLabel";
import { Tag } from "@/components/ui";
import { ArrowUpRight, GitHubIcon } from "@/components/icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: ((e.clientY - cy) / (rect.height / 2)) * -6,
      y: ((e.clientX - cx) / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const cardContent = (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface transition-colors duration-300 ease-out hover:border-accent/70 hover:shadow-card overflow-hidden">
      <div className={`relative w-full h-64 md:h-72 overflow-hidden ${project.imageFit === "contain" ? "bg-white" : "bg-white/5"}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`${project.imageFit === "contain" ? "object-contain scale-[1.55] translate-y-4 group-hover:scale-[1.58]" : "object-cover object-top group-hover:scale-[1.05]"} transition-transform duration-500`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-5xl font-bold text-white/5 select-none">
              {project.number}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface to-transparent" />
      </div>

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

  return (
    <motion.div
      ref={ref}
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="h-full"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {project.live ? (
          <Link href={project.live} target="_blank" rel="noopener noreferrer" className="h-full block">
            {cardContent}
          </Link>
        ) : (
          <div className="h-full">{cardContent}</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      className="section-anchor mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <SectionLabel>{projectsSection.label}</SectionLabel>
        <h2 className="mt-5 font-heading text-3xl font-bold text-fg md:text-5xl">
          {projectsSection.heading}
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href={projectsSection.allLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors duration-200 hover:text-accent"
        >
          {projectsSection.allLink.label}
        </Link>
      </motion.div>
    </section>
  );
}
