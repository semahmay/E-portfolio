// A single thin marquee strip used once between Hero and Projects.
// Keeps the page's rhythmic break without spamming every section.
const items = [
  "Software Engineering",
  "AI Systems",
  "Backend",
  "Automation",
  "Generative AI",
  "Blender",
  "ESPRIT",
  "Tunisia",
];

export default function Divider() {
  return (
    <div
      className="overflow-hidden bg-[var(--ink)] py-2"
      aria-hidden="true"
    >
      <div className="marquee-inner">
        {Array.from({ length: 4 }).flatMap((_, i) =>
          items.map((item) => (
            <span
              key={`${i}-${item}`}
              className="font-mono text-[0.62rem] tracking-[0.18em] uppercase px-6 text-[var(--paper)]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {item} ·
            </span>
          ))
        )}
      </div>
    </div>
  );
}
