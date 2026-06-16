import { SectionHeading } from "./section-heading";
import { experience } from "@/data/resume";

// Deterministic short "commit hash" so it's stable across renders/builds.
function hashFor(id: string) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h.toString(16).slice(0, 7).padEnd(7, "0");
}

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="03" tag="experience" title="git log --roles" />

        <div className="mt-10 border-l border-line pl-6">
          {experience.map((job) => (
            <div key={job.id} className="relative pb-10 last:pb-0">
              <span
                className={
                  "absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ink " +
                  (job.current ? "bg-cyan" : "bg-line")
                }
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-xs text-violet">
                  {hashFor(job.id)}
                </span>
                <span className="font-display text-xs text-fog">
                  {job.start} — {job.end}
                </span>
                {job.current && (
                  <span className="rounded-full border border-green/30 px-2 py-0.5 font-display text-[10px] text-green">
                    current
                  </span>
                )}
              </div>

              <h3 className="mt-2 font-display text-base text-paper">
                {job.role} <span className="text-fog">@</span>{" "}
                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  {job.company}
                </a>              </h3>

              <ul className="mt-3 space-y-2">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-[14px] leading-6 text-fog"
                  >
                    <span className="mt-[2px] text-violet">+</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
