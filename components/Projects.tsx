import { featuredProjects, moreProjects } from "../lib/projects";
import RevealWrapper from "./RevealWrapper";

// ── Accent dot ───────────────────────────────────────────────
function AccentDot({ color }: { color: string }) {
  return (
    <span
      className="inline-block w-2 h-2 rounded-full shrink-0"
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}

// ── Featured card (full-width horizontal) ───────────────────
function FeaturedCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) {
  return (
    <article
      className="project-card group bg-[var(--paper)] border border-[var(--border)] p-7 sm:p-8"
      style={{ borderLeft: `4px solid ${project.accent}` }}
    >
      {/* Top row */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[0.6rem] text-[var(--ink-faint)] tracking-widest tabular-nums"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="tag"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            {project.category}
          </span>
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex gap-5">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.68rem] tracking-widest uppercase transition-colors hover:text-[var(--red)]"
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  color: project.accent === "#242424" || project.accent === "#6B6457"
                    ? "var(--ink-muted)"
                    : project.accent,
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Name + tagline */}
      <h3
        className="group-hover:text-[var(--red)] transition-colors mb-1.5"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)",
          color: "var(--ink)",
          lineHeight: 1.1,
        }}
      >
        {project.name}
      </h3>
      <p
        className="font-mono text-[0.7rem] text-[var(--ink-muted)] tracking-wide mb-5"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {project.tagline}
      </p>

      {/* Description + stack */}
      <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
        <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:justify-end sm:max-w-[220px]">
          {project.stack.map((s) => (
            <span
              key={s}
              className="tag"
              style={{
                fontFamily: "var(--font-mono), monospace",
                borderColor: project.accent === "#242424" || project.accent === "#6B6457"
                  ? "var(--border)"
                  : project.accent,
                color: project.accent === "#242424" || project.accent === "#6B6457"
                  ? "var(--ink-muted)"
                  : project.accent,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

// ── Compact card (secondary grid) ───────────────────────────
function CompactCard({
  project,
  globalIndex,
}: {
  project: (typeof moreProjects)[number];
  globalIndex: number;
}) {
  return (
    <article
      className="project-card group bg-[var(--paper)] border border-[var(--border)] p-5 flex flex-col h-full"
      style={{ borderTop: `2px solid ${project.accent}` }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="tag"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          {project.category}
        </span>
        <span
          className="font-mono text-[0.6rem] text-[var(--ink-faint)] tabular-nums"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          {String(globalIndex + 1).padStart(2, "0")}
        </span>
      </div>

      <h3
        className="group-hover:text-[var(--red)] transition-colors mb-1"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "1.05rem",
          color: "var(--ink)",
          lineHeight: 1.15,
        }}
      >
        {project.name}
      </h3>
      <p
        className="font-mono text-[0.65rem] text-[var(--ink-muted)] tracking-wide mb-2"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {project.tagline}
      </p>
      <p className="text-xs text-[var(--ink-muted)] leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="tag"
            style={{
              fontFamily: "var(--font-mono), monospace",
              borderColor: "var(--border)",
              color: "var(--ink-muted)",
              fontSize: "0.62rem",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex gap-4 mt-3 pt-3 border-t border-[var(--border)]">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.65rem] tracking-widest uppercase hover:text-[var(--red)] transition-colors text-[var(--ink-muted)]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

// ── Main section ─────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="work" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* ── Header ── */}
        <div className="flex items-baseline justify-between mb-12 border-b border-[var(--border)] pb-5">
          <div>
            <p
              className="section-label mb-2"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              02 / Selected Work
            </p>
            <h2
              className="leading-none tracking-tight text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              }}
            >
              Projects
            </h2>
          </div>
        </div>

        {/* ── Featured cards ── */}
        <div className="flex flex-col gap-4 mb-16">
          {featuredProjects.map((project, i) => (
            <RevealWrapper key={project.id} delay={i * 50}>
              <FeaturedCard project={project} index={i} />
            </RevealWrapper>
          ))}
        </div>

        {/* ── More work section ── */}
        <div className="border-t border-[var(--border)] pt-12">
          <div className="flex items-baseline justify-between mb-8">
            <p
              className="section-label"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              More work / experiments
            </p>
            <span
              className="font-mono text-[0.62rem] text-[var(--ink-faint)]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {moreProjects.length} projects
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreProjects.map((project, i) => (
              <RevealWrapper key={project.id} delay={i * 40}>
                <CompactCard
                  project={project}
                  globalIndex={featuredProjects.length + i}
                />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
