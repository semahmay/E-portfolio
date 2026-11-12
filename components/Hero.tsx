import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-[var(--paper)] pt-14"
    >
      {/* ── Main area ──────────────────────────────────────── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-5 sm:px-8 flex flex-col justify-center py-12 sm:py-16">

        {/* Availability badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="availability-dot" />
          <span
            className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[var(--ink-muted)]"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Open · PFE / Internship 2027
          </span>
        </div>

        {/* Two-column layout: text | photo */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-12">

          {/* ── Left: identity block ── */}
          <div className="flex-1 min-w-0">
            <p
              className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-[var(--ink-muted)] mb-3"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              May Semah
            </p>

            <h1
              className="leading-[0.9] tracking-tight text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
              }}
            >
              Software<br />Engineer
            </h1>

            {/* Supporting line */}
            <p
              className="mt-5 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-[var(--ink-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              AI Systems · Mobile · Backend<br className="sm:hidden" />
              {" "}· Automation · Creative Technology
            </p>

            {/* Intro */}
            <p
              className="mt-7 text-[var(--ink-muted)] text-sm leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              Software engineering student at ESPRIT, Tunisia. I build
              AI-powered tools, backend systems, and mobile apps.
              Founder of an AI automation agency. I also create 3D
              artwork in Blender.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <ScrollButton
                targetId="work"
                className="bg-[var(--ink)] text-[var(--paper)] font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--red)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                See Work ↓
              </ScrollButton>
              <a
                href="/assets/May_Semah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--ink)] text-[var(--ink)] font-mono text-xs tracking-widest uppercase px-6 py-3 hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                CV ↗
              </a>
            </div>
          </div>

          {/* ── Right: photo ── */}
          <div className="shrink-0 sm:self-start">
            <div className="relative w-[200px] sm:w-[240px] overflow-hidden border border-[var(--border)]" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/assets/may-photo.png"
                alt="May Semah"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 200px, 240px"
              />
            </div>
          </div>
        </div>

        {/* Graphic rule */}
        <div className="mt-16 sm:mt-20 flex items-center" aria-hidden="true">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 shrink-0">
            <rect x="0.5" y="0.5" width="31" height="31" stroke="var(--border)" />
            <rect x="8" y="8" width="16" height="16" fill="var(--red)" />
          </svg>
          <div className="h-px flex-1 bg-[var(--border)]" />
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2 shrink-0">
            <rect x="0.5" y="0.5" width="31" height="31" stroke="var(--border)" />
            <circle cx="16" cy="16" r="8" fill="var(--blue)" />
          </svg>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>
      </div>

      {/* ── Footer strip ──────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 py-4 flex flex-wrap justify-between items-center gap-3 border-t border-[var(--border)]">
        <div className="flex items-center gap-4">
          <span className="section-label" style={{ fontFamily: "var(--font-mono), monospace" }}>
            Mateur, Tunisia
          </span>
          <span className="text-[var(--border)]">·</span>
          <span className="section-label" style={{ fontFamily: "var(--font-mono), monospace" }}>
            ESPRIT &rsquo;27
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/semahmay"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label hover:text-[var(--ink)] transition-colors"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            GitHub ↗
          </a>
          <a
            href="https://linkedin.com/in/m-semah-aab032263/"
            target="_blank"
            rel="noopener noreferrer"
            className="section-label hover:text-[var(--ink)] transition-colors"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:samehmay7@gmail.com"
            className="section-label hover:text-[var(--ink)] transition-colors"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
