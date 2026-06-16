"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { projects } from "@/data/resume";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-cyan/30"
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(280px circle at var(--mx) var(--my), rgba(57,225,212,0.10), transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-display text-xs text-fog">{project.file}</span>
        <span className="font-display text-[10px] text-violet">{project.type}</span>
      </div>

      <div className="relative p-5">
        <h3 className="font-display text-base text-paper">{project.title}</h3>
        <p className="mt-2 text-[14px] leading-6 text-fog">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.points.map((point, i) => (
            <li key={i} className="flex gap-2 text-[13.5px] leading-6 text-fog">
              <span className="mt-[2px] text-cyan">›</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-line-soft bg-panel-2 px-2 py-1 font-display text-[10.5px] text-fog"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 font-display text-xs text-cyan hover:underline"
          >
            live demo <ArrowUpRight size={13} />
          </a>
          <a
            href={project.codeUrl}
            className="inline-flex items-center gap-1.5 font-display text-xs text-fog hover:text-paper"
          >
            <GithubIcon width={13} height={13} /> source
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" tag="projects" title="Things I've shipped" />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
