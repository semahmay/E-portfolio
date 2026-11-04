"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Work", href: "#work" },
  { label: "3D", href: "#artwork" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--paper)]/95 backdrop-blur-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-sm tracking-widest uppercase text-[var(--ink)] hover:text-[var(--red)] transition-colors"
            style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}
          >
            MS
          </Link>

          {/* Desktop links */}
          <ul className="hidden sm:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="nav-link font-mono text-xs tracking-widest uppercase text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors pb-1"
                  style={{ fontFamily: "var(--font-mono), monospace" }}
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/assets/May_Semah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase bg-[var(--ink)] text-[var(--paper)] px-4 py-2 hover:bg-[var(--red)] transition-colors"
                style={{ fontFamily: "var(--font-mono), monospace" }}
              >
                CV ↗
              </a>
            </li>
          </ul>

          {/* Mobile burger */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[var(--ink)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--paper)] flex flex-col justify-center items-start px-8 sm:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 mb-12">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="font-display text-4xl font-extrabold text-[var(--ink)] hover:text-[var(--red)] transition-colors"
                style={{ fontFamily: "var(--font-syne), sans-serif", fontWeight: 800 }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/assets/May_Semah_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase bg-[var(--ink)] text-[var(--paper)] px-6 py-3"
          style={{ fontFamily: "var(--font-mono), monospace" }}
        >
          Download CV ↗
        </a>
      </div>
    </>
  );
}
