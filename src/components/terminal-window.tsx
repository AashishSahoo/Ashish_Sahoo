"use client";

import { useTypewriter } from "./use-typewriter";
import { profile } from "@/data/resume";

const lines = [
  { prompt: "$", text: "whoami" },
  { text: profile.name, className: "text-paper pl-0" },
  { prompt: "$", text: "cat role.txt" },
  { text: `${profile.role} @ Waybeyond.tech`, className: "text-cyan pl-0" },
  { prompt: "$", text: "echo $STATUS" },
  { text: profile.status, className: "text-green pl-0" },
];

export function TerminalWindow() {
  const { done, inProgress, finished } = useTypewriter(lines, 26, 500);

  function renderLine(
    line: { prompt?: string; rendered: string; className?: string },
    key: string | number
  ) {
    if (line.prompt) {
      return (
        <div key={key} className="flex gap-2">
          <span className="text-violet">{line.prompt}</span>
          <span className="text-paper">{line.rendered}</span>
        </div>
      );
    }
    return (
      <div key={key} className={line.className ?? "text-fog"}>
        {line.rendered}
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl rounded-lg border border-line bg-panel/90 shadow-[0_0_60px_-15px_rgba(57,225,212,0.25)] backdrop-blur">
      {/* tab bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-display text-xs text-fog">ashish.sh</span>
        <span className="w-10" />
      </div>

      {/* body */}
      <div className="min-h-[200px] p-5 font-display text-sm leading-7">
        {done.map((l, i) => renderLine(l, i))}
        {inProgress && (
          <div className={inProgress.prompt ? "flex gap-2" : inProgress.className ?? "text-fog"}>
            {inProgress.prompt && <span className="text-violet">{inProgress.prompt}</span>}
            <span className={inProgress.prompt ? "text-paper" : undefined}>
              {inProgress.rendered}
              <span className="caret-blink text-cyan">▍</span>
            </span>
          </div>
        )}
        {finished && (
          <div className="flex gap-2">
            <span className="text-violet">$</span>
            <span className="caret-blink text-cyan">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}
