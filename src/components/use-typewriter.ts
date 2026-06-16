"use client";

import { useEffect, useState } from "react";

interface Line {
  prompt?: string; // shown before the typed text, e.g. "$"
  text: string;
  className?: string;
}

/**
 * Types out a sequence of lines one character at a time, line by line.
 * Returns the lines completed so far, the in-progress line, and whether
 * the whole sequence has finished (for cursor placement).
 */
export function useTypewriter(lines: Line[], speed = 28, startDelay = 300) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (lineIndex >= lines.length) return;

    const current = lines[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 420);
    return () => clearTimeout(t);
  }, [started, charIndex, lineIndex, lines, speed]);

  const done = lines
    .slice(0, lineIndex)
    .map((l) => ({ ...l, rendered: l.text }));

  const inProgress =
    lineIndex < lines.length
      ? { ...lines[lineIndex], rendered: lines[lineIndex].text.slice(0, charIndex) }
      : null;

  const finished = lineIndex >= lines.length;

  return { done, inProgress, finished };
}
