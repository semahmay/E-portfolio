import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "May Semah — Internet Personality",
  description:
    "Software engineering student at ESPRIT. I build AI systems, backend infrastructure, and Blender 3D art. Looking for a final-year internship (PFE) 2027.",
  keywords: [
    "May Semah",
    "software engineer",
    "AI",
    "generative AI",
    "backend",
    "ESPRIT",
    "Tunisia",
    "Blender",
    "3D art",
    "portfolio",
  ],
  authors: [{ name: "May Semah" }],
  openGraph: {
    title: "May Semah — Internet Personality",
    description:
      "Software engineering student, AI builder, Blender artist. Based in Tunisia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFF9F0" />
      </head>
      <body className="bg-[var(--paper)] text-[var(--ink)]">{children}</body>
    </html>
  );
}
