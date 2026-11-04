import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

const artworks = [
  {
    src: "/assets/artwork-1.webp",
    alt: "3D render by May Semah — personal work",
    index: "01",
  },
  {
    src: "/assets/artwork-2.png",
    alt: "3D render by May Semah — personal work",
    index: "02",
  },
  {
    src: "/assets/artwork-3.webp",
    alt: "3D render by May Semah — personal work",
    index: "03",
  },
];

export default function Artwork() {
  return (
    <section id="artwork" className="py-20 bg-[var(--paper)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-12 border-b border-[var(--border)] pb-5">
          <div>
            <p
              className="section-label mb-2"
              style={{ fontFamily: "var(--font-mono), monospace" }}
            >
              05 / 3D Artwork
            </p>
            <h2
              className="leading-none tracking-tight text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              }}
            >
              Made in Blender
            </h2>
          </div>
          <p
            className="font-mono text-[0.68rem] text-[var(--ink-muted)] hidden sm:block"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Personal work · 3D renders
          </p>
        </div>

        {/* Three equal columns, left to right */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {artworks.map((art, i) => (
            <RevealWrapper key={art.src} delay={i * 80}>
              <figure className="artwork-item border border-[var(--border)]">
                <div
                  className="relative w-full bg-[var(--cream)]"
                  style={{ aspectRatio: "1 / 1" }}
                >
                  <Image
                    src={art.src}
                    alt={art.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 400px"
                    loading="lazy"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-3 py-2 border-t border-[var(--border)]">
                  <span
                    className="font-mono text-[0.62rem] tracking-widest text-[var(--ink-faint)] uppercase"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    {art.index}
                  </span>
                  <span
                    className="font-mono text-[0.62rem] tracking-widest text-[var(--ink-faint)] uppercase"
                    style={{ fontFamily: "var(--font-mono), monospace" }}
                  >
                    Blender
                  </span>
                </figcaption>
              </figure>
            </RevealWrapper>
          ))}
        </div>

        {/* Note */}
        <RevealWrapper className="mt-10">
          <p
            className="font-mono text-xs text-[var(--ink-muted)] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-mono), monospace" }}
          >
            Personal renders made in Blender. Modelling, shading, and lighting as a
            creative practice alongside engineering.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
