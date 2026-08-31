export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "Software" | "Web" | "Mobile" | "AI" | "Cloud";
  year: string;
  tagline: string;
  summary: string;
  technologies: string[];
  challenge: string;
  approach: string;
  solution: string;
  keyFeatures: string[];
  uiTheme: {
    primaryColor: string;
    accentColor: string;
    bgGradient: string;
  };
  metrics?: { label: string; value: string }[];
  showcaseStep?: number;
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "nexus-ai-operating-system",
    title: "Nexus AI Platform",
    client: "Nexus Enterprise Systems",
    category: "AI",
    year: "2026",
    tagline: "Autonomous Agent Orchestration & Knowledge Graph Architecture",
    summary: "A multi-agent AI operating platform engineered for enterprise workflow automation, vector search over millions of documents, and real-time agent telemetry.",
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Pinecone", "OpenAI", "Tailwind CSS", "Docker"],
    challenge: "Enterprise operations teams were manually processing over 50,000 complex multi-format compliance documents per month, causing operational backlogs and costly human errors.",
    approach: "We designed a multi-agent orchestration architecture featuring custom vector retrieval (RAG) and autonomous agents capable of analyzing, cross-referencing, and generating compliant summaries in real-time.",
    solution: "A sleek, dark-mode technical dashboard interface connected to a high-throughput Python backend, enabling enterprise administrators to inspect agent reasoning chains step-by-step.",
    keyFeatures: [
      "Real-Time Agent Execution Graph",
      "Vector Semantic Search across 5M+ Records",
      "Human-in-the-Loop Approval Gates",
      "Role-Based Multi-Tenant Access Control",
      "Custom Fine-Tuned Domain LLM Adapters"
    ],
    uiTheme: {
      primaryColor: "#6366F1",
      accentColor: "#818CF8",
      bgGradient: "from-indigo-950 via-slate-900 to-black"
    },
    showcaseStep: 1
  },
  {
    slug: "aura-health-mobile",
    title: "Aura Mobile Health Platform",
    client: "Aura Digital Health",
    category: "Mobile",
    year: "2025",
    tagline: "Fluid iOS & Android Digital Health Companion App",
    summary: "A high-performance Flutter mobile application delivering real-time biometric tracking, telehealth video consultations, and personalized AI wellness insights.",
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC", "SQLite", "GraphQL", "Tailwind CSS"],
    challenge: "Existing health tracking applications felt sluggish, consumed excessive battery, and lacked seamless offline synchronization for users with intermittent network coverage.",
    approach: "We built a 60fps Flutter application utilizing an offline-first SQLite database architecture with background synchronization loops and zero-latency UI reactivity.",
    solution: "An intuitive mobile interface with ultra-smooth biometric motion graphs, custom health metrics logging, and encrypted video streaming powered by WebRTC.",
    keyFeatures: [
      "Offline-First SQLite Biometric Caching",
      "Encrypted Telehealth Video Consultations",
      "Sub-Second Motion-Gated Charts",
      "Apple HealthKit & Google Fit Integration",
      "Automated Medication Reminders"
    ],
    uiTheme: {
      primaryColor: "#10B981",
      accentColor: "#34D399",
      bgGradient: "from-emerald-950 via-slate-900 to-black"
    },
    showcaseStep: 2
  },
  {
    slug: "vortex-cloud-analytics",
    title: "Vortex Cloud Control Center",
    client: "Vortex Infrastructure Inc.",
    category: "Software",
    year: "2025",
    tagline: "Real-Time Cloud Infrastructure & Kubernetes Telemetry",
    summary: "An enterprise-grade control portal for monitoring Kubernetes clusters, tracking microservice latencies, and managing cloud resource scaling in real-time.",
    technologies: ["Next.js", "React", "Go", "PostgreSQL", "Kafka", "Prometheus", "Tailwind CSS", "GSAP"],
    challenge: "Engineering leads struggled to diagnose cross-microservice latency spikes across complex multi-cloud Kubernetes clusters due to fragmented logging dashboards.",
    approach: "We architected a unified telemetry control plane that aggregates real-time metrics over high-frequency WebSocket streams into intuitive visual heatmaps.",
    solution: "A ultra-responsive web control panel engineered with Next.js, custom canvas data graphs, and instantaneous search indexing over cloud logs.",
    keyFeatures: [
      "Real-Time WebSocket Metric Streams",
      "Interactive Kubernetes Cluster Topology Graph",
      "Automated Incident Trigger Rules",
      "Cost Allocation & Capacity Planning",
      "One-Click Microservice Deployment Controls"
    ],
    uiTheme: {
      primaryColor: "#3B82F6",
      accentColor: "#60A5FA",
      bgGradient: "from-blue-950 via-slate-900 to-black"
    },
    showcaseStep: 3
  },
  {
    slug: "strata-fintech-portal",
    title: "Strata Global Commerce Platform",
    client: "Strata Financial Technologies",
    category: "Web",
    year: "2026",
    tagline: "Headless E-Commerce & Financial Settlement Portal",
    summary: "A modern B2B financial settlement engine and digital commerce portal enabling multi-currency transactions, automated invoicing, and real-time ledger accounting.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe Connect", "Redis", "Tailwind CSS"],
    challenge: "B2B buyers experienced friction during multi-currency invoicing, resulting in delayed settlement cycles averaging 14+ business days.",
    approach: "We built a high-speed headless web platform integrating instant Stripe Connect multi-currency settlements and automated ledger reconciliation.",
    solution: "An editorial, high-trust web product that streamlined enterprise invoicing down to sub-minute checkout execution.",
    keyFeatures: [
      "Multi-Currency Automated Settlement Engine",
      "Real-Time Ledger Transaction Feed",
      "Headless Catalog & Instant Search",
      "Custom PDF Invoicing Generation",
      "Enterprise Compliance Audit Trail"
    ],
    uiTheme: {
      primaryColor: "#8B5CF6",
      accentColor: "#A78BFA",
      bgGradient: "from-purple-950 via-slate-900 to-black"
    },
    showcaseStep: 4
  }
];

export const PINNED_SHOWCASE_ITEMS = PROJECTS_DATA;
