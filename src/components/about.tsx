import { SectionHeading } from "./section-heading";
import { stats } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="01" tag="about" title="A bit about how I work" />

        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-fog">
          I&apos;m a full-stack developer who spends most of my time in the
          MERN stack — wiring up React interfaces, designing REST APIs in
          Express, and modeling data in MongoDB. I care about the parts
          that don&apos;t show up in a demo: response times, duplicate
          code, auth edge cases. Lately I&apos;ve also been folding LLMs
          into product features — FAQ automation, financial insights —
          rather than bolting on a chatbot for its own sake.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-panel px-5 py-6 text-center transition-colors hover:bg-panel-2"
            >
              <div className="font-display text-2xl text-cyan">{s.value}</div>
              <div className="mt-1 font-display text-[11px] text-fog">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
