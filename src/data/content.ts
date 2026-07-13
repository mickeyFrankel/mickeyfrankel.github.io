export type Category = "ai" | "infra" | "fullstack";

export interface Project {
  name: string;
  repo: string; // display name of repo or org
  url: string;
  description: string;
  tech: string[];
  categories: Category[];
}

export interface ExperienceEntry {
  role: string;
  org: string;
  dates: string;
  line: string;
}

export const site = {
  name: "Mickey Frankel",
  eyebrow: "Full-Stack Engineer · Central Israel",
  positioningPre: "Full-stack engineer — I build ",
  positioningAccent: "AI agents",
  positioningPost: " into real products.",
  subline:
    "React · Node.js · TypeScript · Go · Python  |  Ex-Safer  |  B.Sc. Computer Science, Hebrew University of Jerusalem",
  github: "https://github.com/mickeyFrankel",
  linkedin: "https://linkedin.com/in/mickey-frankel-1384211a6",
  email: "Mickey.115533@gmail.com",
  cvPath: "/Mickey-Frankel-CV.pdf",
};

export const filterLabels: Record<Category | "all", string> = {
  all: "All",
  ai: "AI & Agents",
  infra: "Infra & SRE",
  fullstack: "Full-Stack",
};

export const projects: Project[] = [
  {
    name: "Kubernetes Zero-Trust Health Monitoring Platform",
    repo: "k8s-health-monitor",
    url: "https://github.com/mickeyFrankel/k8s-health-monitor",
    description:
      "Three Go microservices with RS256 JWT auth, JWKS key rotation, and an AWS SQS audit trail — deployed via 8 Kubernetes manifests with zero-trust NetworkPolicy isolation.",
    tech: ["Go", "Kubernetes", "JWT/JWKS", "AWS SQS", "Docker"],
    categories: ["infra"],
  },
  {
    name: "BizUp MCP Integrations — Safer",
    repo: "Safer (internship)",
    url: "https://linkedin.com/company/safer-kiosk",
    description:
      "MCP server integrations for BizUp, an AI agent platform: Microsoft Graph calendar tools with MSAL delegated OAuth on a multi-tenant Azure application.",
    tech: ["MCP", "Microsoft Graph", "MSAL/OAuth 2.0", "TypeScript", "Node.js"],
    categories: ["ai", "fullstack"],
  },
  {
    name: "AI-Powered SRE & Observability Platform",
    repo: "helfy-sre-assignment",
    url: "https://github.com/mickeyFrankel/helfy-sre-assignment",
    description:
      "Full observability stack — Prometheus, Grafana, Elasticsearch, Fluent Bit — plus a Python multi-turn LLM agent that performs root-cause investigation from live metrics and logs.",
    tech: ["Prometheus", "Grafana", "Elasticsearch", "Python", "FastAPI", "LLM tool-calling"],
    categories: ["infra", "ai"],
  },
  {
    name: "Enterprise Health Analytics Platform",
    repo: "Customer-Health-Score-API-Dashboard",
    url: "https://github.com/mickeyFrankel/Customer-Health-Score-API-Dashboard",
    description:
      "TypeScript monorepo — React dashboard, Prisma/PostgreSQL API with Zod validation, and 110+ automated tests, fully containerized.",
    tech: ["TypeScript", "React", "Prisma", "PostgreSQL", "Zod", "Docker"],
    categories: ["fullstack"],
  },
  {
    name: "MedicalTaskFlow",
    repo: "MedicalTaskFlow",
    url: "https://github.com/mickeyFrankel/MedicalTaskFlow",
    description:
      "Enterprise task-management desktop app in C#/.NET 7 — WPF with MVVM, EF Core over SQLite, Serilog, and 75%+ test coverage with xUnit and Moq.",
    tech: ["C#", ".NET 7", "WPF", "EF Core", "xUnit"],
    categories: ["fullstack"],
  },
  {
    name: "AI Chatbot with Semantic Search",
    repo: "AI-powered-chatbot",
    url: "https://github.com/mickeyFrankel/AI-powered-chatbot",
    description:
      "AI assistant with semantic vector search, OpenAI API chat, and MCP tool actions — built under the mentorship of a senior software architect.",
    tech: ["Python", "OpenAI API", "Vector search", "MCP"],
    categories: ["ai"],
  },
];

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Engineer (Internship)",
    org: "Safer · Tel Aviv",
    dates: "Feb – May 2026",
    line: "Built MCP server integrations for BizUp, Safer's AI agent platform; 16+ features across 5+ repositories, 80+ PRs reviewed by senior engineers.",
  },
  {
    role: "AI Development — Mentored Project",
    org: "Under senior software architect",
    dates: "Aug – Nov 2025",
    line: "AI chatbot with semantic vector search and MCP tool actions; weekly design and code reviews.",
  },
  {
    role: "NOC Investigator",
    org: "Israel Lands Authority",
    dates: "2022 – Jan 2025",
    line: "Monitored and supported national-scale production systems; investigated incidents across critical infrastructure.",
  },
  {
    role: "Intelligence Researcher",
    org: "Israel Defense Forces",
    dates: "2014 – 2016",
    line: "Data analysis and query engineering over large-scale intelligence datasets.",
  },
];

export const skills: string[] = [
  "Python",
  "TypeScript",
  "Go",
  "C++17",
  "React",
  "Node.js / Express",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "AWS SQS",
  "Prometheus / Grafana",
  "Elasticsearch",
  "MCP",
  "OpenAI & Anthropic APIs",
];
