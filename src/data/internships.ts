export interface InternshipTrack {
  id: string;
  title: string;
  duration: string;
  format: "Remote" | "Hybrid" | "On-Site";
  stipend: string;
  tagline: string;
  description: string;
  prerequisites: string[];
  skillsLearned: string[];
  realWorldProjects: string[];
}

export const INTERNSHIP_TRACKS: InternshipTrack[] = [
  {
    id: "web-engineering",
    title: "Full-Stack Web Engineering",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Build Production Next.js & React Systems with Senior Mentors",
    description: "Immerse yourself in modern full-stack web engineering. You won't build toy projects—you will commit code to real production Next.js apps, optimize Core Web Vitals, and build REST/GraphQL backends.",
    prerequisites: ["Strong JavaScript / TypeScript fundamentals", "Familiarity with React or Next.js basics", "Basic Git workflow knowledge"],
    skillsLearned: ["Next.js 16 App Router & Server Components", "TypeScript 5 strict typing", "PostgreSQL & Supabase data modeling", "Tailwind CSS & GSAP motion engineering", "CI/CD & Vercel edge deployment"],
    realWorldProjects: ["Contributing to production client web portals", "Building internal developer tool dashboards", "Engineering micro-interaction libraries"]
  },
  {
    id: "software-development",
    title: "Enterprise Software & Backend",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Master Microservices, Distributed Systems & Database Optimization",
    description: "Learn how senior engineers architect software that handles thousands of requests per second. Work directly with Node.js, Python, PostgreSQL, and Docker containerization.",
    prerequisites: ["Understanding of object-oriented / functional programming", "Basic SQL database query knowledge", "Command line proficiency"],
    skillsLearned: ["High-performance REST & FastAPI backends", "Database indexing & query optimization", "Docker containerization & orchestration", "Redis caching & rate limiting", "Test-driven engineering (TDD)"],
    realWorldProjects: ["Architecting background queue processors", "Writing automated integration test suites", "Designing database migration scripts"]
  },
  {
    id: "mobile-development",
    title: "Cross-Platform Mobile Engineering",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Craft 60fps Native & Flutter Apps for iOS & Android",
    description: "Develop touch-first mobile interfaces. Learn state management, local database caching, hardware sensor access, and app store deployment pipelines.",
    prerequisites: ["Basic Dart or JavaScript knowledge", "Object-oriented programming concepts", "Interest in mobile UI/UX design"],
    skillsLearned: ["Flutter & Dart architecture", "SQLite offline data synchronization", "Mobile state management (Bloc / Provider)", "Mobile performance profiling", "App Store & Play Store publishing"],
    realWorldProjects: ["Building offline-first mobile feature modules", "Integrating native push notifications", "Crafting custom 60fps UI motion widgets"]
  },
  {
    id: "ai-ml-agents",
    title: "AI, Machine Learning & Agentic Systems",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Engineer RAG Pipelines, Vector DBs & Autonomous AI Agents",
    description: "Step into the future of engineering. Learn to build vector search retrieval (RAG) pipelines, integrate LLM function calling, and engineer multi-agent workflows with Python and LangChain.",
    prerequisites: ["Proficiency in Python programming", "Basic linear algebra & data science concepts", "API consumption experience"],
    skillsLearned: ["Vector embedding search (Pinecone / pgvector)", "RAG architecture & chunking strategies", "LangChain & CrewAI agent frameworks", "FastAPI inference endpoint setup", "Model evaluation & prompt engineering"],
    realWorldProjects: ["Building autonomous document analysis bots", "Configuring vector database sync pipelines", "Fine-tuning open-source LLM adapters"]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Product Design Engineering",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Design Editorial Interfaces, Tokenized Systems & Prototypes",
    description: "Bridge the gap between design and code. Learn to create tokenized Figma design systems, craft editorial visual compositions, and write production CSS.",
    prerequisites: ["Proficiency with Figma", "Strong eye for typography & spatial layout", "Basic HTML/CSS understanding"],
    skillsLearned: ["Tokenized design system architecture", "Figma auto-layout & component variants", "Micro-animation & state transition design", "Accessibility (WCAG) standards", "Design token handoff to frontend engineers"],
    realWorldProjects: ["Building Figma component UI libraries", "Designing mobile app user journeys", "Conducting usability friction audits"]
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    duration: "3 - 6 Months",
    format: "Remote",
    stipend: "Performance Based Stipend",
    tagline: "Master Infrastructure as Code, AWS & CI/CD Pipelines",
    description: "Learn how modern cloud infrastructure is built and automated. Gain hands-on experience with AWS, Docker, Terraform scripts, and GitHub Actions pipelines.",
    prerequisites: ["Linux CLI & shell scripting basics", "Networking fundamentals (HTTP, DNS, IP)", "Git version control"],
    skillsLearned: ["AWS core services (EC2, S3, RDS, CloudFront)", "Docker container packaging & compose", "Terraform Infrastructure as Code (IaC)", "GitHub Actions CI/CD pipeline automation", "Grafana & Prometheus telemetry monitoring"],
    realWorldProjects: ["Automating staging server deployment pipelines", "Writing Terraform cloud provisioning modules", "Configuring SSL & Nginx load balancers"]
  }
];

export const INTERNSHIP_FAQ = [
  {
    question: "Who is eligible for the Norkl internship program?",
    answer: "Computer Science students, self-taught developers, recent graduates, and career switchers with strong foundational coding or design skills who want real production experience."
  },
  {
    question: "Is this internship remote or on-site?",
    answer: "The program is primarily remote with flexible scheduling, featuring async code reviews, daily standups, and direct 1-on-1 mentor check-ins via Discord and GitHub."
  },
  {
    question: "Will I work on real client projects?",
    answer: "Yes. We believe the only way to become a senior engineer is by shipping real production code under the guidance of senior architects."
  },
  {
    question: "Is there a certificate or job recommendation upon completion?",
    answer: "All successful graduates receive a formal Certificate of Completion, a detailed Senior Architect Reference Letter, and priority consideration for full-time engineering roles at Norkl."
  }
];
