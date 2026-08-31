export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  heroCopy: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  architectureSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  technologies: string[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom Enterprise Platforms & Resilient Business Systems",
    shortDescription: "End-to-end custom software engineering designed around complex business workflows, multi-tenant SaaS architecture, and high-load backend infrastructure.",
    heroCopy: "We engineer resilient software solutions from the ground up—building scalable SaaS platforms, automated internal workflows, and custom enterprise control centers that empower organizations to operate with precision.",
    iconName: "Cpu",
    capabilities: [
      { title: "Enterprise SaaS Platforms", description: "Multi-tenant architectures built with strict data isolation, role-based access control, and seamless billing integrations." },
      { title: "Custom Admin Panels & Dashboards", description: "High-density data visualization suites engineered for operational speed, telemetry, and business intelligence." },
      { title: "Internal Tools & Workflow Automation", description: "Replacing slow legacy spreadsheets with bespoke web systems that connect directly with core company APIs." },
      { title: "API Gateway & Microservices", description: "Decoupled microservice architectures designed for horizontal scalability, zero-downtime deployments, and high throughput." },
      { title: "ERP & CRM Engineering", description: "Custom resource planning and client relationship management engines tailored to proprietary operational processes." },
      { title: "Legacy System Modernization", description: "Refactoring monolithic legacy applications into modern cloud-native architectures without operational interruption." }
    ],
    architectureSteps: [
      { step: "01", title: "Domain Analysis", detail: "Mapping data models, security requirements, and transactional workflows." },
      { step: "02", title: "System Architecture", detail: "Designing microservices, database schemas, and caching strategy." },
      { step: "03", title: "Core Engineering", detail: "Test-driven development of APIs, background queues, and business logic." },
      { step: "04", title: "Security & QA", detail: "Penetration testing, load testing, and strict OWASP compliance validation." },
      { step: "05", title: "Deployment & Scale", detail: "Containerized deployments with automated CI/CD and telemetry monitoring." }
    ],
    technologies: ["Node.js", "TypeScript", "Python", "Go", "PostgreSQL", "Redis", "Docker", "AWS", "GraphQL", "Kafka"],
    deliverables: ["Production-ready Source Code", "Complete System Architecture Documentation", "REST / GraphQL API Specs", "Automated CI/CD Pipelines", "SLA & Maintenance Guidelines"],
    faqs: [
      { question: "How do you ensure data security in custom enterprise software?", answer: "We enforce end-to-end encryption at rest and in transit, strict RBAC, automated vulnerability scans, and SOC2/ISO-compliant infrastructure configurations." },
      { question: "Can you modernize our existing database and codebase without downtime?", answer: "Yes. We execute blue-green deployments and phased database migration strategies to ensure complete zero-downtime transitions." }
    ]
  },

  "web-development": {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-Performance Digital Products & Next.js Architecture",
    shortDescription: "Ultra-fast, SEO-optimized web applications, marketing flagships, and web portals crafted with Next.js, React, and modern edge infrastructure.",
    heroCopy: "We craft editorial web experiences and complex web applications that combine award-winning interaction design with sub-second page loads and robust technical scalability.",
    iconName: "Globe",
    capabilities: [
      { title: "Next.js App Router Engineering", description: "Server-side rendering, static site generation, and server actions optimized for extreme speed and search dominance." },
      { title: "Editorial Marketing Flagships", description: "Visual storytelling websites engineered to build immediate brand authority and convert visitors." },
      { title: "Headless Web Portals", description: "Decoupled web platforms drawing real-time content from GraphQL APIs, headless CMSs, and microservices." },
      { title: "Interactive Canvas & Motion", description: "Smooth micro-animations, custom SVG visualizations, and GSAP scroll experiences that captivate users." },
      { title: "Full-Stack Web Platforms", description: "End-to-end web apps featuring authentication, payments, real-time web-sockets, and responsive dashboard UIs." },
      { title: "Performance Optimization Audits", description: "Eliminating render blocking, optimizing Core Web Vitals, and maximizing lighthouse performance metrics." }
    ],
    architectureSteps: [
      { step: "01", title: "UX Wireframing", detail: "Structuring content hierarchy, user flow maps, and responsive layouts." },
      { step: "02", title: "Design System Integration", detail: "Establishing typographic scale, color tokens, and reusable UI components." },
      { step: "03", title: "Frontend Engineering", detail: "Building responsive React/Next.js pages with clean component modularity." },
      { step: "04", title: "API & State Management", detail: "Connecting backend endpoints, edge functions, and global application state." },
      { step: "05", title: "Core Web Vitals Tuning", detail: "Achieving 95+ performance scores and complete accessibility compliance." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Lenis", "Three.js", "Vercel Edge", "Supabase", "PostgreSQL"],
    deliverables: ["Responsive Next.js Codebase", "Core Web Vitals Optimization Report", "Structured Metadata & Schema Setup", "Design System Component Library", "CMS Integration"],
    faqs: [
      { question: "Why do you recommend Next.js for modern web applications?", answer: "Next.js provides server component rendering, automated code splitting, dynamic edge routing, and unmatched SEO performance out of the box." },
      { question: "Is the site fully responsive across all device sizes?", answer: "Yes, every layout is custom-tailored for mobile, tablet, desktop, and ultra-wide screens down to exact pixel specifications." }
    ]
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform iOS & Android Engineering",
    shortDescription: "Sleek, responsive iOS and Android applications built with Flutter and React Native for fluid 60fps animations and offline-first performance.",
    heroCopy: "From consumer mobile platforms to enterprise field tools, we design and build mobile apps that feel instantaneous, natural to touch, and rock-solid under offline conditions.",
    iconName: "Smartphone",
    capabilities: [
      { title: "Cross-Platform Flutter & React Native", description: "Single high-performance codebase targeting iOS and Android with 60fps native UI rendering." },
      { title: "Native iOS (Swift) & Android (Kotlin)", description: "Bespoke native mobile development for applications requiring deep hardware access or OS integration." },
      { title: "Offline-First Synchronization", description: "Local SQLite/Realm caching with seamless background synchronization when network connectivity restores." },
      { title: "Push Notification Systems", description: "Targeted push engines integrated with Firebase Cloud Messaging and Apple Push Notification service." },
      { title: "Mobile Payment & Subscriptions", description: "In-app purchases, Stripe Mobile SDKs, Apple Pay, and Google Pay integrations." },
      { title: "App Store Publishing & Compliance", description: "Navigating App Store Review Guidelines and Google Play Console policies for guaranteed deployment." }
    ],
    architectureSteps: [
      { step: "01", title: "Mobile UX Mapping", detail: "Designing thumb-friendly touch targets, gesture navigation, and screen flows." },
      { step: "02", title: "Mobile UI Kit", detail: "Crafting native iOS and Android visual assets, dark mode variants, and icons." },
      { step: "03", title: "Mobile Architecture", detail: "Setting up state management, local database storage, and secure key vaults." },
      { step: "04", title: "API Integration", detail: "Connecting REST/WebSockets endpoints with background synchronization loops." },
      { step: "05", title: "Store Submission", detail: "Managing certificates, beta distributions via TestFlight, and store releases." }
    ],
    technologies: ["Flutter", "Dart", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "GraphQL", "App Store Connect", "Play Console"],
    deliverables: ["iOS & Android Build Bundles (.ipa & .aab)", "Complete Mobile App Source Code", "TestFlight & Google Internal Track Deployments", "API Sync Architecture", "App Store Metadata Assets"],
    faqs: [
      { question: "Should we choose Flutter or Native mobile development?", answer: "Flutter allows us to ship to both iOS and Android simultaneously with 95%+ shared code while maintaining 60fps performance, making it optimal for most products." },
      { question: "Do you handle the entire Apple and Google app approval process?", answer: "Yes, we handle complete app store setup, asset preparation, review responses, and launch configuration." }
    ]
  },

  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Custom Intelligence Systems, Predictive Models & Fine-Tuning",
    shortDescription: "Engineered machine learning pipelines, fine-tuned LLM architectures, computer vision models, and natural language understanding for automated decisions.",
    heroCopy: "We build custom AI infrastructure into core business software—converting unstructured enterprise data into real-time operational insights, predictive models, and intelligent automated features.",
    iconName: "BrainCircuit",
    capabilities: [
      { title: "LLM Fine-Tuning & RAG Pipelines", description: "Retrieval-Augmented Generation (RAG) connecting open-source/proprietary LLMs directly to your private knowledge graph." },
      { title: "Predictive Analytics & Forecasting", description: "Custom regression and time-series models for demand forecasting, financial projections, and risk mitigation." },
      { title: "Computer Vision & Visual AI", description: "Automated object recognition, document processing, facial verification, and industrial quality inspection models." },
      { title: "Natural Language Processing (NLP)", description: "Sentiment analysis, multi-lingual document parsing, semantic entity extraction, and smart categorization." },
      { title: "Recommendation Engines", description: "Personalized user content and product recommendation algorithms driving higher user retention." },
      { title: "MLOps & Model Monitoring", description: "Automated model retraining pipelines, drift detection, and low-latency API inferencing setups." }
    ],
    architectureSteps: [
      { step: "01", title: "Data Audit & Preparation", detail: "Structuring, cleaning, and vectorizing raw enterprise datasets." },
      { step: "02", title: "Model Selection & Architecture", detail: "Choosing between fine-tuned foundational models and custom PyTorch architectures." },
      { step: "03", title: "Training & Validation", detail: "Hyperparameter tuning, cross-validation, and accuracy optimization." },
      { step: "04", title: "Vector DB & RAG Setup", detail: "Embedding enterprise knowledge into Pinecone, Qdrant, or pgvector." },
      { step: "05", title: "Production Deployment", detail: "Deploying high-throughput low-latency inference endpoints on GPU clusters." }
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "Hugging Face", "LangChain", "Pinecone", "pgvector", "FastAPI", "Docker GPU"],
    deliverables: ["Trained Model Checkpoints", "Vector Database Pipeline", "Inference API Specification", "Evaluation & Accuracy Metrics Report", "MLOps Infrastructure Setup"],
    faqs: [
      { question: "How do you protect our proprietary data when using AI models?", answer: "We deploy open-source models inside your private cloud VPC or use strict zero-data-retention enterprise API contracts, ensuring your data never trains external public models." },
      { question: "What is RAG and why does our business need it?", answer: "RAG allows an AI system to cite and reference your actual live company documents accurately, completely eliminating hallucinated answers." }
    ]
  },

  "ai-agents": {
    slug: "ai-agents",
    title: "AI Agents & Automation",
    tagline: "Autonomous Agentic Workflows & System Orchestration",
    shortDescription: "Multi-agent autonomous systems that execute multi-step workflows, manage customer operations, research market data, and automate manual business tasks.",
    heroCopy: "Transform manual organizational overhead into autonomous agent networks. We design self-correcting AI agents capable of planning, using software tools, searching systems, and completing complex operations 24/7.",
    iconName: "Bot",
    capabilities: [
      { title: "Multi-Agent Orchestration", description: "Coordinated systems of specialized AI agents working together (Researcher → Analyst → Executor → Reviewer)." },
      { title: "Custom Tool & API Integration", description: "Equipping agents with custom function-calling access to CRM, ERP, SQL databases, email, and external APIs." },
      { title: "Autonomous Customer Support Agents", description: "Context-aware support agents that resolve multi-step ticket inquiries, process refunds, and update accounts." },
      { title: "Sales & Lead Enrichment Agents", description: "Agents that scour public web sources, qualify incoming leads, format briefs, and trigger personalized outreach." },
      { title: "Automated Code & Testing Agents", description: "Autonomous bots that execute code audits, generate documentation, and run automated regression pipelines." },
      { title: "Human-in-the-Loop Safeguards", description: "Strict approval gates requiring human review before executing sensitive external transactions." }
    ],
    architectureSteps: [
      { step: "01", title: "Workflow Mapping", detail: "Deconstructing manual human workflows into programmatic agent decision trees." },
      { step: "02", title: "Agent Tooling Definition", detail: "Writing strict API definitions and schema parameters for agent execution tools." },
      { step: "03", title: "Prompt & Memory Tuning", detail: "Configuring long-term memory buffers, context windows, and fallback logic." },
      { step: "04", title: "Multi-Agent Simulation", detail: "Testing agent interaction loops under edge case scenarios and adversarial inputs." },
      { step: "05", title: "Production Orchestration", detail: "Deploying resilient agent execution environments with rate-limit monitoring." }
    ],
    technologies: ["LangChain", "CrewAI", "AutoGen", "Python", "FastAPI", "Redis", "PostgreSQL", "OpenAI Function Calling", "Claude Tools"],
    deliverables: ["Autonomous Agent Core Codebase", "Custom Tool Integration Suite", "Monitoring & Telemetry Dashboard", "Human Approval Gate System", "Agent Operational Playbook"],
    faqs: [
      { question: "What happens if an AI agent makes a mistake?", answer: "We build strict fallback rules and Human-in-the-Loop (HITL) approval thresholds for critical actions like money transfers or data deletion." },
      { question: "Can AI agents connect to our legacy software APIs?", answer: "Yes, as long as an API or database connection exists, we can wrap it into a secure tool accessible by the agent." }
    ]
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX & Product Design",
    tagline: "Editorial Aesthetics, Design Systems & Interaction Mastery",
    shortDescription: "Human-centered digital product design, sleek visual component systems, high-fidelity prototypes, and user workflow optimization.",
    heroCopy: "We craft digital products that captivate at first glance and feel intuitively natural to use. Our editorial design approach balances bold visual art direction with meticulous usability.",
    iconName: "Palette",
    capabilities: [
      { title: "Design System Architecture", description: "Comprehensive Figma libraries with atomic components, tokenized typography, spacing scales, and dark mode." },
      { title: "Web & Mobile Product UI", description: "High-end user interfaces for SaaS platforms, mobile applications, and web tools crafted with pixel perfection." },
      { title: "UX Research & User Journeys", description: "Deconstructing user friction points, creating persona maps, and designing frictionless navigation paths." },
      { title: "Interactive Motion Design", description: "Micro-animations, state transition specifications, and interactive component prototypes." },
      { title: "Wireframing & Rapid Prototyping", description: "Clickable prototypes for user testing and stakeholder validation before engineering begins." },
      { title: "Design Audits & Refactoring", description: "Evaluating existing software products to elevate visual tier, fix UX flaws, and modernize aesthetics." }
    ],
    architectureSteps: [
      { step: "01", title: "Product Discovery", detail: "Understanding brand positioning, target user mindsets, and functional requirements." },
      { step: "02", title: "UX Wireframing", detail: "Iterating low-fidelity page structures to optimize information hierarchy." },
      { step: "03", title: "Visual Art Direction", detail: "Developing bespoke typography rules, color palettes, and editorial layouts." },
      { step: "04", title: "Design System Build", detail: "Creating modular component libraries in Figma with auto-layout and design tokens." },
      { step: "05", title: "Engineering Handoff", detail: "Providing inspectable assets, motion specs, and design token JSON files." }
    ],
    technologies: ["Figma", "Design Tokens", "Framer", "Lottie", "Storybook", "Tailwind CSS", "SVG Animation", "Adobe CC"],
    deliverables: ["Complete Figma Design File & Components", "Interactive Clickable Prototype", "Design Tokens & Variable Specs", "UX User Journey Documentation", "Exported Asset Bundle"],
    faqs: [
      { question: "How do you ensure the final code matches the design exactly?", answer: "Our designers and frontend engineers work side-by-side. We build directly with tokenized design systems and perform strict visual QA before release." },
      { question: "Do you create design systems that our internal team can use?", answer: "Yes, every design system we deliver includes reusable Figma components, usage guidelines, and tokenized variables." }
    ]
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps Infrastructure",
    tagline: "High-Availability Infrastructure, Infrastructure as Code & Security",
    shortDescription: "AWS/GCP cloud engineering, Kubernetes container orchestration, automated CI/CD deployment pipelines, and zero-downtime scalability.",
    heroCopy: "Build infrastructure that scales effortlessly under unexpected traffic spikes. We design cloud architectures engineered for 99.99% uptime, automated failover, and strict enterprise security compliance.",
    iconName: "Cloud",
    capabilities: [
      { title: "Infrastructure as Code (Terraform)", description: "Declarative infrastructure configuration version-controlled, auditable, and reproducible in minutes." },
      { title: "Kubernetes & Container Orchestration", description: "Containerized application deployment with auto-scaling, service mesh networks, and pod health monitoring." },
      { title: "Automated CI/CD Pipelines", description: "GitHub Actions / GitLab pipelines enabling seamless automated testing, building, and deployment." },
      { title: "AWS / GCP Cloud Architecture", description: "VPC network setup, IAM security policies, load balancers, CDN edge caching, and serverless infrastructure." },
      { title: "Observability & Telemetry", description: "Centralized logging, real-time APM monitoring, Prometheus/Grafana dashboards, and automated alert systems." },
      { title: "Cloud Cost Optimization", description: "Audit cloud resource utilization, right-size compute clusters, and reduce monthly AWS/GCP bills by up to 40%." }
    ],
    architectureSteps: [
      { step: "01", title: "Infrastructure Audit", detail: "Analyzing existing server configurations, security bottlenecks, and cloud costs." },
      { step: "02", title: "VPC & Security Architecture", detail: "Designing isolated network subnets, firewalls, and IAM role hierarchies." },
      { step: "03", title: "Terraform IaC Scripting", detail: "Codifying all cloud resources into reusable Terraform modules." },
      { step: "04", title: "Pipeline Automation", detail: "Configuring multi-stage CI/CD environments (Dev, Staging, Production)." },
      { step: "05", title: "Monitoring & Alerting", detail: "Deploying Grafana dashboards, log aggregation, and 24/7 incident triggers." }
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "Prometheus", "Grafana", "Helm"],
    deliverables: ["Version-Controlled Terraform Repositories", "Automated Deployment Pipelines", "Cloud Architecture Blueprint", "Grafana Telemetry Dashboards", "Disaster Recovery Playbook"],
    faqs: [
      { question: "Can you help us migrate our on-premise servers to AWS?", answer: "Yes, we execute containerized cloud migrations with minimal downtime, preserving data integrity throughout the transition." },
      { question: "How do you handle cloud cost overruns?", answer: "We set up auto-scaling boundaries, spot instance pools, and automated resource shutdown schedules to ensure budgets are never exceeded." }
    ]
  },

  "seo": {
    slug: "seo",
    title: "SEO Engineering",
    tagline: "Technical SEO, Core Web Vitals & Organic Authority Growth",
    shortDescription: "Data-backed organic growth systems combining deep technical SEO architecture, structured metadata schema, site speed optimization, and content strategy.",
    heroCopy: "SEO is an engineering discipline. We build high-performance technical foundations that allow your brand to dominate organic search rankings, capture high-intent traffic, and maintain technical crawl perfection.",
    iconName: "Search",
    capabilities: [
      { title: "Technical SEO Architecture", description: "Fixing crawl errors, XML sitemap generation, canonical tag strategies, and robots.txt optimization." },
      { title: "Core Web Vitals & Speed Tuning", description: "Optimizing LCP, INP, and CLS scores to earn search engine algorithmic performance boosts." },
      { title: "Structured Data & JSON-LD Schema", description: "Implementing rich snippets for Organizations, Services, Products, FAQs, and Breadcrumbs." },
      { title: "Keyword Architecture & Intent Mapping", description: "Mapping search intent to high-converting landing pages and programmatic SEO directories." },
      { title: "Programmatic SEO Engineering", description: "Generating scalable, high-quality dynamic pages powered by structured databases." },
      { title: "Competitor Search Intelligence", description: "Reverse engineering competitor keyword dominance and discovering untapped organic gaps." }
    ],
    architectureSteps: [
      { step: "01", title: "Technical SEO Audit", detail: "Crawling site structure to identify indexation blockers and canonical issues." },
      { step: "02", title: "Site Speed Engineering", detail: "Eliminating render-blocking resources, un-used JS, and optimizing image delivery." },
      { step: "03", title: "Schema Integration", detail: "Injecting structured JSON-LD data into all dynamic page templates." },
      { step: "04", title: "Content Architecture", detail: "Structuring pillar pages, topic clusters, and semantic internal link graphs." },
      { step: "05", title: "Monitoring & Reporting", detail: "Tracking keyword rankings, GSC crawl stats, and organic conversion paths." }
    ],
    technologies: ["Google Search Console", "Screaming Frog", "Ahrefs", "Semrush", "Next.js Metadata", "JSON-LD Schema", "Lighthouse", "Google Tag Manager"],
    deliverables: ["Comprehensive Technical SEO Audit", "Optimized Next.js Metadata Implementation", "Structured Schema Markup Code", "Keyword Strategy & Content Map", "Monthly Ranking Dashboard"],
    faqs: [
      { question: "How long does it take to see results from technical SEO?", answer: "Technical fixes (like site speed and indexation repair) often result in positive rank updates within 3 to 6 weeks as search bots re-crawl the site." },
      { question: "Why is technical SEO important for Next.js applications?", answer: "Next.js requires precise server-side rendering setup and dynamic open graph configuration to ensure search crawlers index every dynamic route correctly." }
    ]
  }
};
