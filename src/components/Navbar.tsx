"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={
          "flex w-full max-w-3xl items-center justify-between rounded-full border px-4 py-2.5 transition-colors " +
          (scrolled
            ? "border-line bg-panel/80 backdrop-blur-md"
            : "border-transparent bg-transparent")
        }
      >
        <a
          href="#top"
          className="font-display text-sm tracking-tight text-paper hover:text-cyan transition-colors"
        >
          {"<AS />"}
        </a>
        <ul className="hidden sm:flex items-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-display text-xs text-fog hover:text-cyan transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-display text-xs rounded-full border border-cyan/40 px-3.5 py-1.5 text-cyan hover:bg-cyan/10 transition-colors"
        >
          contact
        </a>
      </nav>
    </header>
  );
}
