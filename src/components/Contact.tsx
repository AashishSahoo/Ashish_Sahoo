import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/resume";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-xl border border-line bg-panel/70 p-10 text-center">
        <p className="font-display text-xs text-fog">
          <span className="text-violet">$</span> contact --email {profile.email}
        </p>
        <h2 className="mt-4 font-display text-2xl text-paper sm:text-3xl">
          Let&apos;s build something.
        </h2>
        <p className="mt-3 text-[15px] text-fog">
          Open to full-stack and backend-leaning roles, freelance builds, and
          interesting technical problems.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-2.5 font-display text-xs font-medium text-ink hover:opacity-90"
          >
            <Mail size={14} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 font-display text-xs text-paper hover:border-cyan/50 hover:text-cyan"
          >
            <Phone size={14} /> {profile.phone}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5 text-fog">
          <a href={profile.github} aria-label="GitHub" className="hover:text-cyan transition-colors">
            <GithubIcon width={18} height={18} />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-cyan transition-colors">
            <LinkedinIcon width={18} height={18} />
          </a>
        </div>
      </div>

      <p className="mt-10 text-center font-display text-[11px] text-fog">
        {"// built by "}
        {profile.name}
        {" · 2026"}
      </p>
    </section>
  );
}
