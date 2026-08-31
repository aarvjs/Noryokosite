export interface TechCategory {
  id: string;
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    badge?: string;
    level: "Core" | "Advanced" | "Specialized";
  }[];
}

export const TECHNOLOGIES_DATA: TechCategory[] = [
  {
    id: "frontend",
    name: "Frontend & Web Architecture",
    description: "Modern, type-safe frontend stack engineered for sub-second performance, editorial design systems, and seamless interactive visual experiences.",
    items: [
      { name: "Next.js 16 / App Router", description: "Server Components, dynamic edge rendering, and optimized routing.", level: "Core" },
      { name: "React 19", description: "Concurrent rendering, server actions, and modern hook state architectures.", level: "Core" },
      { name: "TypeScript 5", description: "Strict static typing, interface contracts, and zero-runtime safety.", level: "Core" },
      { name: "Tailwind CSS v4", description: "Utility-first design token styling with CSS variable integration.", level: "Core" },
      { name: "GSAP & ScrollTrigger", description: "Award-winning smooth scroll animations, timeline sequencing, and pinning.", level: "Advanced" },
      { name: "Three.js / WebGL", description: "Custom 3D canvas rendering, shader effects, and interactive data visualization.", level: "Specialized" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems Engineering",
    description: "Robust microservice and API backends built for fault tolerance, ultra-low latency transaction processing, and horizontal scale.",
    items: [
      { name: "Node.js & Express / NestJS", description: "High-throughput asynchronous event loops and enterprise microservices.", level: "Core" },
      { name: "Python / FastAPI", description: "Low-latency REST & WebSocket services optimized for AI model inferencing.", level: "Core" },
      { name: "Go (Golang)", description: "High-performance compiled systems programming for concurrency pipelines.", level: "Advanced" },
      { name: "GraphQL & REST APIs", description: "Strict schema contracts, optimistic response caching, and query federation.", level: "Core" }
    ]
  },
  {
    id: "database",
    name: "Databases & Vector Storage",
    description: "Relational, document, and vector database architectures optimized for zero-loss transactions and vector similarity search.",
    items: [
      { name: "PostgreSQL", description: "Rock-solid relational database with JSONB support and pgvector embeddings.", level: "Core" },
      { name: "Redis", description: "In-memory caching layer, rate-limiting, and pub/sub message queuing.", level: "Core" },
      { name: "Pinecone / Qdrant", description: "Dedicated high-performance vector databases for sub-millisecond semantic search.", level: "Specialized" },
      { name: "Supabase", description: "Open-source Firebase alternative with real-time subscriptions and Postgres storage.", level: "Core" }
    ]
  },
  {
    id: "ai-ml",
    name: "AI, ML & Agentic Frameworks",
    description: "Cutting-edge artificial intelligence models, vector embedding pipelines, and multi-agent orchestration tools.",
    items: [
      { name: "PyTorch & TensorFlow", description: "Deep learning model development, fine-tuning, and neural network training.", level: "Advanced" },
      { name: "LangChain & CrewAI", description: "Agentic workflow frameworks, memory buffers, and multi-agent orchestration.", level: "Advanced" },
      { name: "OpenAI & Anthropic APIs", description: "Integration with foundational LLMs (GPT-4o, Claude 3.5 Sonnet) via function calling.", level: "Core" },
      { name: "Hugging Face Models", description: "Deploying open-source LLMs (Llama 3, Mistral) on private cloud GPU nodes.", level: "Specialized" }
    ]
  },
  {
    id: "mobile",
    name: "Mobile & Cross-Platform",
    description: "Cross-platform and native mobile frameworks delivering fluid 60fps user experiences across iOS and Android.",
    items: [
      { name: "Flutter & Dart", description: "Google's UI toolkit for compiling native ARM mobile binaries from a single codebase.", level: "Core" },
      { name: "React Native", description: "Cross-platform mobile framework powered by JavaScript/TypeScript bridges.", level: "Core" },
      { name: "Swift (iOS)", description: "Native Apple iOS development for hardware-level system access.", level: "Specialized" },
      { name: "Kotlin (Android)", description: "Native Android development optimized for Android Jetpack SDKs.", level: "Specialized" }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud, Infrastructure & Security",
    description: "Cloud-native infrastructure, automated CI/CD pipelines, container orchestration, and continuous security monitoring.",
    items: [
      { name: "Amazon Web Services (AWS)", description: "EC2, EKS, Lambda, S3, RDS, CloudFront, and VPC enterprise network setups.", level: "Core" },
      { name: "Docker & Kubernetes", description: "Containerized application packaging, pod auto-scaling, and service meshes.", level: "Core" },
      { name: "Terraform IaC", description: "Declarative infrastructure as code for auditable cloud environment provisioning.", level: "Advanced" },
      { name: "GitHub Actions CI/CD", description: "Automated continuous integration, unit test execution, and deployment pipelines.", level: "Core" }
    ]
  }
];

export const TECH_STRIP_ITEMS = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Flutter",
  "PostgreSQL", "AWS", "Docker", "AI Agents", "Tailwind CSS", "GSAP", "Three.js", "Redis"
];
