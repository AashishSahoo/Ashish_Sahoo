import { GraduationCap, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { education, certifications } from "@/data/resume";
import { ExternalLink } from "lucide-react";
export function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="05" tag="education" title="Education & Certifications" />

        <div className="mt-10 space-y-4">
          {education.map((ed) => (
            <div
              key={ed.id}
              className="flex flex-col gap-1 rounded-lg border border-line bg-panel px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="mt-0.5 text-cyan" />
                <div>
                  <p className="font-display text-sm text-paper">{ed.degree}</p>
                  <p className="mt-1 text-[13px] text-fog">{ed.school}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pl-8 sm:pl-0">
                <span className="font-display text-xs text-fog">
                  {ed.start} – {ed.end}
                </span>
                <span className="rounded-full border border-line-soft px-2.5 py-1 font-display text-[11px] text-violet">
                  {ed.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 font-display text-[11px] uppercase tracking-[0.2em] text-fog">
          Certifications
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-panel/80"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-soft bg-canvas/40">
                <BadgeCheck
                  size={15}
                  className="text-green transition-transform group-hover:scale-110"
                />
              </span>

              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-[13px] text-paper">
                  {cert.label}
                </p>

                {cert.meta && (
                  <p className="truncate font-display text-[11px] text-fog">
                    {cert.meta}
                  </p>
                )}
              </div>

              <ExternalLink
                size={14}
                className="text-fog opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}