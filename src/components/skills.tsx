"use client";

import { useRef } from "react";
import { SectionHeading } from "./section-heading";
import { skillGroups } from "@/data/resume";

function GlowCard({ children }: { children: React.ReactNode }) {
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
      className="group relative overflow-hidden rounded-lg border border-line bg-panel p-5 transition-colors hover:border-cyan/30"
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx) var(--my), rgba(57,225,212,0.10), transparent 70%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="02" tag="skills" title="What I build with" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <GlowCard key={group.id}>
              <p className="truncate font-display text-[11px] text-fog">
                {group.importLine}
              </p>
              <h3 className="mt-3 font-display text-sm text-paper">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line-soft bg-panel-2 px-2.5 py-1 font-display text-[11px] text-fog"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
