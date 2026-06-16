"use client";

import { useRef } from "react";

/**
 * A radial glow that follows the cursor, masked to a dot-grid backdrop.
 * Pure CSS custom-property update on pointer move — no re-renders.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ "--x": "50%", "--y": "20%" } as React.CSSProperties}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          background:
            "radial-gradient(550px circle at var(--x) var(--y), rgba(57,225,212,0.14), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at var(--x) var(--y), rgba(156,140,251,0.10), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  );
}
