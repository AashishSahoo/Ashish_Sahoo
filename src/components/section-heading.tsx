interface SectionHeadingProps {
  index: string; // e.g. "02"
  tag: string; // e.g. "experience"
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  tag,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="font-display text-xs tracking-wide text-cyan-dim">
        <span className="text-fog">{`// `}</span>
        <span className="text-cyan">{index}</span>
        <span className="text-fog">{` — ${tag}`}</span>
      </p>
      <h2 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-paper">
        {title}
      </h2>
    </div>
  );
}
