import RevealWrapper from "./RevealWrapper";

// ─── CONFIGURE YOUR EMAIL HERE ────────────────────────────────
const EMAIL = "samehmay7@gmail.com";
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const emailHref = EMAIL ? `mailto:${EMAIL}` : undefined;

  return (
    <section id="contact" className="py-20 bg-[var(--ink)] text-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-12">
          <p
            className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[var(--ink-faint)] mb-4"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            05 / Contact
          </p>
          <h2
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
            }}
          >
            Get in touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <RevealWrapper direction="left">
            <p
              className="text-[var(--ink-faint)] text-sm leading-relaxed max-w-sm mb-8"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              Looking for a PFE / final-year internship in 2027 — AI, backend, or
              full-stack. If you&apos;re building something interesting, reach out.
            </p>

            <div className="space-y-5 mb-8">
              {/* Email row */}
              <div className="border-b border-[var(--ink-faint)] pb-4">
                <p
                  className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)] mb-1"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  Email
                </p>
                {EMAIL ? (
                  <a
                    href={emailHref}
                    className="font-mono text-sm text-[var(--paper)] hover:text-[var(--red)] transition-colors"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {EMAIL}
                  </a>
                ) : (
                  <span
                    className="font-mono text-sm text-[var(--ink-faint)] italic"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    — add your email in Contact.tsx
                  </span>
                )}
              </div>

              <ContactRow
                label="LinkedIn"
                value="linkedin.com/in/m-semah-aab032263"
                href="https://linkedin.com/in/m-semah-aab032263/"
              />
              <ContactRow
                label="GitHub"
                value="github.com/semahmay"
                href="https://github.com/semahmay"
              />
              <ContactRow
                label="Phone"
                value="+216 20 432 066"
                href="tel:+21620432066"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {EMAIL && (
                <a
                  href={emailHref}
                  className="bg-[var(--red)] text-[var(--paper)] font-mono text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-[var(--paper)] hover:text-[var(--ink)] transition-colors"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  Send a message ↗
                </a>
              )}
              <a
                href="/assets/May_Semah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--ink-faint)] text-[var(--paper)] font-mono text-xs tracking-widest uppercase px-7 py-3.5 hover:border-[var(--paper)] transition-colors"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                Download CV ↗
              </a>
            </div>
          </RevealWrapper>

          {/* Right: availability card */}
          <RevealWrapper delay={100}>
            <div className="border border-[var(--ink-faint)] p-7">
              <div className="flex items-center gap-2 mb-5">
                <span className="availability-dot" />
                <span
                  className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-[var(--paper)]"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  Available
                </span>
              </div>

              <h3
                className="mb-5"
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "var(--paper)",
                }}
              >
                PFE / Final-Year Internship
              </h3>

              <ul
                className="space-y-3 text-[var(--ink-faint)] text-xs"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                <li className="flex items-start gap-3">
                  <span className="text-[var(--red)] shrink-0">→</span>
                  <span>~4–6 months · 2027</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--red)] shrink-0">→</span>
                  <span>Tunis-based · remote-friendly · open to relocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--red)] shrink-0">→</span>
                  <span>AI systems, backend engineering, automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--red)] shrink-0">→</span>
                  <span>Arabic · French · English</span>
                </li>
              </ul>
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-20 pt-6 border-t border-[var(--ink-faint)] flex flex-wrap justify-between items-center gap-3">
        <span
          className="text-sm font-bold text-[var(--paper)]"
          style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}
        >
          May Semah
        </span>
        <span
          className="font-mono text-[0.62rem] text-[var(--ink-faint)] tracking-widest"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          Internet Personality · ESPRIT · Tunisia
        </span>
        <span
          className="font-mono text-[0.62rem] text-[var(--ink-faint)]"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          2026
        </span>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <div className="border-b border-[var(--ink-faint)] pb-4">
      <p
        className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)] mb-1"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {label}
      </p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="font-mono text-sm text-[var(--paper)] hover:text-[var(--red)] transition-colors"
        style={{ fontFamily: "var(--font-mono), monospace" }}
      >
        {value}
      </a>
    </div>
  );
}
