export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  category: string;
  accent: string;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

// ── Featured projects (homepage, full cards) ─────────────────
export const featuredProjects: Project[] = [
  {
    id: "medidesk",
    name: "MediDesk AI",
    tagline: "Healthcare software platform",
    description:
      "Desktop and web platform for medical clinic management, built during an internship at Vertex Solutions. Electron desktop app with a React frontend, backed by a multi-tenant Flask API on PostgreSQL, Redis, and MinIO. Features role-based access for doctors and secretaries, offline sync, real-time WebSocket updates, and Docker deployment on Azure.",
    stack: ["Electron", "React", "Flask", "PostgreSQL", "Redis", "Docker", "Azure"],
    category: "Healthcare / Software",
    accent: "#242424",
    links: [
      { label: "GitHub", url: "https://github.com/semahmay/medidesk" },
    ],
    featured: true,
  },
  {
    id: "skuu",
    name: "SKUU Engineering Exercise",
    tagline: "Inventory intelligence for fashion retail",
    description:
      "Collects product inventory from e-commerce storefronts via scraping and Shopify APIs, extracts size-level stock, normalises SKUs, and matches the same product across 13 shops. Detects back-in-stock opportunities. 62,000+ SKUs ingested, 363 backend tests passing. Includes a Next.js dashboard and a demo snapshot so the frontend runs without scraping.",
    stack: ["Python", "FastAPI", "Playwright", "MongoDB", "Next.js", "TypeScript"],
    category: "Data / Backend",
    accent: "#3159E8",
    links: [
      { label: "Live Demo", url: "https://skuu-engineering-exercise.vercel.app/" },
      { label: "GitHub", url: "https://github.com/semahmay/skuu-engineering-exercise" },
    ],
    featured: true,
  },
  {
    id: "shopbot",
    name: "ShopBot",
    tagline: "Product search and price comparison",
    description:
      "Mobile and backend platform for product discovery in the Tunisian market. Scrapes listings from multiple retailers, normalises and deduplicates products, and presents price comparisons. Built with Flutter for mobile, NestJS for the backend, and MongoDB for storage. Main challenges: entity matching across inconsistent data and scraper maintenance.",
    stack: ["Flutter", "NestJS", "MongoDB", "Web Scraping"],
    category: "Full-Stack / Mobile",
    accent: "#E65335",
    featured: true,
  },
  {
    id: "byteos",
    name: "ByteOS",
    tagline: "Local personal AI assistant",
    description:
      "A personal AI assistant that runs entirely on your machine. Persistent memory across sessions, local inference, and desktop interaction. Built to explore what a private, offline-capable AI layer looks like without sending data to a cloud API.",
    stack: ["Python", "Local LLM", "Persistent Memory"],
    category: "AI / Systems",
    accent: "#3159E8",
    featured: true,
  },
];

// ── Additional projects (secondary section) ──────────────────
export const moreProjects: Project[] = [
  {
    id: "appgamer2",
    name: "Gamer App 2",
    tagline: "Android app with Jetpack Compose",
    description:
      "Android gaming application built with Kotlin and Jetpack Compose.",
    stack: ["Kotlin", "Jetpack Compose", "Android"],
    category: "Mobile",
    accent: "#3159E8",
    links: [
      { label: "GitHub", url: "https://github.com/semahmay/APPGAMER2" },
    ],
  },
  {
    id: "bicycle-game",
    name: "Bicycle Game",
    tagline: "Unity 3D · Android",
    description:
      "3D bicycle game for Android. Tilt steering via device sensors, boost mechanic, and collision feedback. Built in Unity with C#.",
    stack: ["Unity", "C#", "Android"],
    category: "Interactive / Game",
    accent: "#E65335",
    links: [
      { label: "GitLab", url: "https://gitlab.com/gymapp6850642/user" },
    ],
  },
  {
    id: "ai-social-brain",
    name: "AI Social Brain",
    tagline: "Flutter + Firebase",
    description:
      "Mobile application combining Flutter and Firebase with AI-related features. Part of a social or productivity workflow — repository is not yet publicly verifiable in full detail.",
    stack: ["Flutter", "Firebase", "AI"],
    category: "Mobile / AI",
    accent: "#242424",
  },
  {
    id: "govora-mcp",
    name: "MCP Server — Govora",
    tagline: "Model Context Protocol server",
    description:
      "An MCP (Model Context Protocol) server built for Govora. Exposes structured context to AI models. Implementation details depend on the Govora platform specifics.",
    stack: ["MCP", "AI Integration", "TypeScript"],
    category: "AI / Tooling",
    accent: "#3159E8",
  },
  {
    id: "devops-java",
    name: "DevOps Pipeline — Java/Maven",
    tagline: "CI/CD with Docker and Jenkins",
    description:
      "Academic DevOps project: Java/Maven application with a Docker-based build and Jenkins CI/CD pipeline. Part of coursework at ESPRIT.",
    stack: ["Java", "Maven", "Docker", "Jenkins"],
    category: "DevOps · Academic",
    accent: "#6B6457",
  },
  {
    id: "n8n-agents",
    name: "AI Automation Workflows",
    tagline: "OpenAI APIs · n8n",
    description:
      "Automation workflows and AI agents built with OpenAI APIs and n8n. Covers practical AI automation: data pipelines, triggered actions, and agent orchestration.",
    stack: ["n8n", "OpenAI API", "Python", "Automation"],
    category: "AI / Automation",
    accent: "#E65335",
  },
];

// ── Combined for legacy compatibility ───────────────────────
export const projects: Project[] = [...featuredProjects, ...moreProjects];
