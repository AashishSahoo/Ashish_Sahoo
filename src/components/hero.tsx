// import { Mail, Phone } from "lucide-react";
// import { GithubIcon, LinkedinIcon } from "./icons";
// import { Spotlight } from "./spotlight";
// import { TerminalWindow } from "./terminal-window";
// import { profile } from "@/data/resume";

// export function Hero() {
//   return (
//     <section
//       id="top"
//       className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
//     >
//       <Spotlight />

//       <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
//         <div>
//           <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1">
//             <span className="dot-pulse h-2 w-2 rounded-full bg-green" />
//             <span className="font-display text-xs text-fog">{profile.status}</span>
//           </div>

//           <h1 className="mt-6 font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
//             {profile.name}
//           </h1>
//           <p className="mt-2 font-display text-lg text-cyan">{profile.role}</p>

//           <p className="mt-5 max-w-md text-[15px] leading-7 text-fog">
//             {profile.tagline}
//           </p>

//           <div className="mt-8 flex flex-wrap items-center gap-3">
//             <a
//               href="#projects"
//               className="rounded-md bg-cyan px-5 py-2.5 font-display text-xs font-medium text-ink transition-opacity hover:opacity-90"
//             >
//               view projects
//             </a>
//             <a
//               href={`mailto:${profile.email}`}
//               className="rounded-md border border-line px-5 py-2.5 font-display text-xs text-paper transition-colors hover:border-cyan/50 hover:text-cyan"
//             >
//               get in touch
//             </a>
//           </div>

//           <div className="mt-8 flex items-center gap-4 text-fog">
//             <a href={`tel:${profile.phone}`} aria-label="Phone" className="hover:text-cyan transition-colors">
//               <Phone size={18} />
//             </a>
//             <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-cyan transition-colors">
//               <Mail size={18} />
//             </a>
//             <a href={profile.github} aria-label="GitHub" className="hover:text-cyan transition-colors">
//               <GithubIcon width={18} height={18} />
//             </a>
//             <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-cyan transition-colors">
//               <LinkedinIcon width={18} height={18} />
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           <TerminalWindow />
//         </div>
//       </div>
//     </section>
//   );
// }


import { Mail, Phone, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Spotlight } from "./spotlight";
import { TerminalWindow } from "./terminal-window";
import { profile } from "@/data/resume";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <Spotlight />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1">
            <span className="dot-pulse h-2 w-2 rounded-full bg-green" />
            <span className="font-display text-xs text-fog">{profile.status}</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-display text-lg text-cyan">{profile.role}</p>

          <p className="mt-5 max-w-md text-[15px] leading-7 text-fog">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-md bg-cyan px-5 py-2.5 font-display text-xs font-medium text-ink transition-opacity hover:opacity-90"
            >
              view projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-line px-5 py-2.5 font-display text-xs text-paper transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              get in touch
            </a>
            <a
              href={profile.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 font-display text-xs text-paper transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Download size={14} />
              resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-fog">
            <a href={`tel:${profile.phone}`} aria-label="Phone" className="hover:text-cyan transition-colors">
              <Phone size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-cyan transition-colors">
              <Mail size={18} />
            </a>
            <a href={profile.github} aria-label="GitHub" className="hover:text-cyan transition-colors">
              <GithubIcon width={18} height={18} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-cyan transition-colors">
              <LinkedinIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}