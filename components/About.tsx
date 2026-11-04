import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

const skills: Record<string, string[]> = {
  "Languages & Backend": [
    "Python",
    "TypeScript / JavaScript",
    "Java",
    "NestJS",
    "Spring Boot",
    "Flask",
    "FastAPI",
    "Symfony & PHP",
    "REST APIs",
  ],
  "AI & Automation": [
    "Generative AI",
    "LLM Integration",
    "AI Agents",
    "OpenAI API",
    "n8n",
    "MCP",
    "Prompt Engineering",
  ],
  "Frontend & Mobile": [
    "Flutter & Dart",
    "Kotlin & Android",
    "Swift & SwiftUI",
    "React",
    "Electron",
    "Next.js",
    "Tailwind CSS",
  ],
  "Infrastructure": [
    "Docker",
    "Azure",
    "MongoDB",
    "PostgreSQL & MySQL",
    "Redis",
    "Jenkins",
    "Git",
    "Linux",
  ],
  "Other": [
    "C++ & Java",
    "Unity & C#",
    "Blender 3D",
    "Arduino / Embedded C",
  ],
};

const internships = [
  {
    role: "Full-Stack Developer Intern",
    company: "Vertex Solutions",
    period: "2026 · 2 months",
    accent: "#3159E8",
    bullets: [
      "Built a full-stack desktop application with an Electron frontend and FastAPI backend.",
      "Containerised with Docker and deployed to Microsoft Azure.",
      "Covered the full delivery pipeline — local development to cloud deployment.",
    ],
  },
  {
    role: "Founder & AI Automation Engineer",
    company: "AI Automation Initiative",
    period: "2025 – Present",
    accent: "#E65335",
    bullets: [
      "Built workflow automation systems using OpenAI APIs and LLM integrations.",
      "Designed n8n pipelines for customer support, lead generation, and task automation.",
      "Deployed custom AI agents for client companies.",
    ],
  },
  {
    role: "Network Engineering Intern",
    company: "Orange Tunisia",
    period: "2025 · 4 months",
    accent: "#E65335",
    bullets: [
      "Worked on networking infrastructure and telecommunications systems.",
      "Observed enterprise network deployment and maintenance workflows.",
    ],
  },
  {
    role: "Mobile Developer",
    company: "Cross-Platform Mobile Projects",
    period: "2025",
    accent: "#3159E8",
    bullets: [
      "Developed Flutter applications using clean architecture and BLoC.",
      "Built Android applications in Kotlin with Jetpack Compose.",
      "Worked with REST APIs, authentication systems, and PostgreSQL backends.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Symfony & Java Projects",
    period: "2024 – 2025",
    accent: "#6B6457",
    bullets: [
      "Built web and desktop applications using Symfony, JavaFX, and MySQL.",
    ],
  },
  {
    role: "3D Artist & Game Developer",
    company: "Personal Projects",
    period: "2019 – Present",
    accent: "#6B6457",
    bullets: [
      "Created 3D assets and animations using Blender.",
      "Developed Unity games using C# and gameplay systems.",
    ],
  },
  {
    role: "Web Developer Intern — Initiation",
    company: "SBT, Bizerte-Mateur",
    period: "2023 · 1 month",
    accent: "#6B6457",
    bullets: [
      "Designed and built a company website as an introductory internship project.",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-12 border-b border-[var(--border)] pb-5">
          <div>
            <p
              className="section-label mb-2"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              04 / About
            </p>
            <h2
              className="leading-none tracking-tight text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              }}
            >
              Who I Am
            </h2>
          </div>
        </div>

        {/* ── Bio + availability + education ── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start mb-16">

          <RevealWrapper direction="left">
            <div className="space-y-4 text-sm text-[var(--ink-muted)] leading-relaxed">
              <p>
                Software engineering student at{" "}
                <span className="text-[var(--ink)]">ESPRIT, Tunisia</span>
                {" "}(Engineering Cycle, Mobile Specialisation). I work across
                backend systems, mobile, AI tooling, automation, and cloud deployments.
              </p>
              <p>
                I also run an AI automation agency, building custom AI agents and
                LLM-powered workflows for clients. I&apos;m interested in generative AI
                and agent systems as practical software — not demos.
              </p>
              <p>
                Outside engineering, I use Blender for 3D modelling and rendering as
                a personal creative practice. I also experiment with quantum computing
                using IBM Quantum platforms.
              </p>
            </div>

            {/* Availability card */}
            <div className="mt-8 border border-[var(--border)] bg-[var(--paper)] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="availability-dot" />
                <span
                  className="font-mono text-xs tracking-widest uppercase text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  Open to opportunities
                </span>
              </div>
              <ul
                className="space-y-1.5 text-xs text-[var(--ink-muted)]"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                <li>→ PFE / final-year internship, 2027</li>
                <li>→ Mateur, Tunisia · remote-friendly · open to relocation</li>
                <li>→ AI, backend, mobile, full-stack</li>
                <li>→ Arabic (native) · English (professional) · French (intermediate)</li>
              </ul>
            </div>

            {/* Education */}
            <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-4">
              <p
                className="section-label"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                Education
              </p>
              {[
                {
                  degree: "Engineering Cycle — Mobile Specialisation",
                  school: "ESPRIT School of Engineering",
                  period: "2025 – Present",
                },
                {
                  degree: "Integrated Preparatory Engineering Cycle",
                  school: "ESPRIT School of Engineering",
                  period: "2023 – 2025",
                },
                {
                  degree: "Baccalauréat — Informatique",
                  school: "Lycée Route Tabarka",
                  period: "2022",
                },
              ].map((e) => (
                <div key={e.degree}>
                  <p
                    className="font-bold text-[var(--ink)] text-sm leading-snug"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    {e.degree}
                  </p>
                  <p
                    className="font-mono text-xs text-[var(--ink-muted)] mt-0.5"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {e.school} · {e.period}
                  </p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Skills */}
          <RevealWrapper delay={80}>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p
                    className="section-label mb-2"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="tag hover:border-[var(--ink)] transition-colors"
                        style={{ fontFamily: "var(--font-mono), monospace" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/assets/May_Semah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[var(--ink)] text-[var(--ink)] font-mono text-xs tracking-widest uppercase px-6 py-3 hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                Full CV ↗
              </a>
            </div>
          </RevealWrapper>
        </div>

        {/* ── Certifications ── */}
        <div className="border-t border-[var(--border)] pt-12 mb-0">
          <p
            className="section-label mb-8"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Certifications & Badges
          </p>

          <div className="grid sm:grid-cols-2 gap-4">

            {/* AWS Academy */}
            <RevealWrapper delay={0}>
              <a
                href="https://www.credly.com/badges/98bc0ec9-63b6-496e-a3e4-40265628a2bc/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[var(--paper)] border border-[var(--border)] p-6 flex gap-5 items-start hover:border-[var(--ink)] transition-colors group"
              >
                <div className="relative shrink-0 w-[64px] h-[64px]">
                  <Image
                    src="/assets/badge-aws.png"
                    alt="AWS Academy Cloud Foundations badge"
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p
                    className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)] mb-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    Amazon Web Services
                  </p>
                  <p
                    className="text-[var(--ink)] leading-snug font-bold text-sm mb-1 group-hover:text-[var(--red)] transition-colors"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    AWS Academy Graduate — Cloud Foundations
                  </p>
                  <p
                    className="font-mono text-[0.65rem] text-[var(--ink-muted)] mb-2"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    Cloud computing fundamentals, AWS core services, security, architecture, pricing.
                  </p>
                  <span
                    className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)] group-hover:text-[var(--red)] transition-colors"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    Verify on Credly ↗
                  </span>
                </div>
              </a>
            </RevealWrapper>

            {/* NVIDIA */}
            <RevealWrapper delay={60}>
              <div className="bg-[var(--paper)] border border-[var(--border)] p-6 flex gap-5 items-start">
                {/* NVIDIA logo as SVG wordmark */}
                <div
                  className="shrink-0 w-[64px] h-[64px] flex items-center justify-center border border-[var(--border)]"
                  style={{ background: "#76b900" }}
                >
                  <span
                    className="font-mono font-bold text-white text-[0.55rem] tracking-widest text-center leading-tight px-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    NVIDIA
                  </span>
                </div>
                <div>
                  <p
                    className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)] mb-1"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    NVIDIA Deep Learning Institute
                  </p>
                  <p
                    className="text-[var(--ink)] leading-snug font-bold text-sm mb-1"
                    style={{ fontFamily: "var(--font-syne), sans-serif" }}
                  >
                    NVIDIA Learning Certificate
                  </p>
                  <p
                    className="font-mono text-[0.65rem] text-[var(--ink-muted)] mb-2"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    AI and deep learning training via NVIDIA&apos;s learning platform.
                  </p>
                  <a
                    href="/assets/cert-nvidia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.62rem] tracking-widest uppercase hover:text-[var(--red)] transition-colors"
                    style={{ fontFamily: "var(--font-mono), monospace", color: "var(--ink-muted)" }}
                  >
                    View Certificate ↗
                  </a>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </div>

        {/* ── Experience / Internships ── */}
        <div className="border-t border-[var(--border)] pt-12">

          <div className="flex items-baseline justify-between mb-10">
            <p
              className="section-label"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              Experience
            </p>
            <span
              className="font-mono text-[0.62rem] text-[var(--ink-faint)]"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              {internships.length} positions
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {internships.map((job, i) => (
              <RevealWrapper key={job.role} delay={i * 60}>
                <div
                  className="group bg-[var(--paper)] border border-[var(--border)] overflow-hidden"
                  style={{ borderLeft: `4px solid ${job.accent}` }}
                >
                  {/* Top bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-[var(--border)] bg-[var(--cream)]">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-[0.6rem] text-[var(--ink-faint)] tabular-nums tracking-widest"
                        style={{ fontFamily: "var(--font-mono), monospace" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {/* Company badge */}
                      <span
                        className="font-mono text-[0.68rem] tracking-widest uppercase px-2.5 py-0.5 border"
                        style={{
                          fontFamily: "var(--font-mono), monospace",
                          borderColor: job.accent,
                          color: job.accent,
                        }}
                      >
                        {job.company}
                      </span>
                    </div>
                    <span
                      className="font-mono text-[0.62rem] tracking-widest uppercase text-[var(--ink-faint)]"
                      style={{ fontFamily: "var(--font-mono), monospace" }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-5">
                    <h3
                      className="text-[var(--ink)] mb-4 leading-snug"
                      style={{
                        fontFamily: "var(--font-syne), sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                      }}
                    >
                      {job.role}
                    </h3>
                    <ul className="space-y-2">
                      {job.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm text-[var(--ink-muted)] leading-relaxed flex gap-3"
                        >
                          <span
                            className="shrink-0 mt-[5px] w-1 h-1 rounded-full"
                            style={{ background: job.accent }}
                            aria-hidden="true"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
