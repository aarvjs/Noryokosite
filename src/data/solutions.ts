export interface SolutionItem {
  slug: string;
  title: string;
  subtitle: string;
  heroCopy: string;
  targetAudience: string;
  keyBenefits: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  techStack: string[];
}

export const SOLUTIONS_DATA: Record<string, SolutionItem> = {
  "startups": {
    slug: "startups",
    title: "Startups & Venture Founders",
    subtitle: "Rapid MVP Engineering, Scalable Architecture & Speed to Market",
    heroCopy: "We partner with ambitious founders to engineer production-ready Minimum Viable Products (MVPs) that win early customers, secure venture backing, and scale seamlessly without technical debt.",
    targetAudience: "Early-stage & Seed-to-Series-A venture backed startups requiring world-class engineering execution.",
    keyBenefits: [
      "Ship zero-compromise MVPs in 6 to 12 weeks",
      "Clean, scalable architecture prepared for Series A scale",
      "Frictionless UX/UI that converts early adopters",
      "Investor-ready technical architecture documentation"
    ],
    capabilities: [
      { title: "Rapid MVP Sprint Engineering", description: "Turning initial product specs into deployed full-stack software applications in record turnaround time." },
      { title: "Venture Architecture & Data Modeling", description: "Designing database schemas and API boundaries built to withstand sudden user influxes." },
      { title: "Investor Technical Pitch Assets", description: "Interactive clickable prototypes and architecture diagrams designed for venture capital due diligence." }
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "AWS"]
  },
  "small-business": {
    slug: "small-business",
    title: "Small & Medium Enterprises",
    subtitle: "Digital Transformation, Operational Automation & Legacy Refactoring",
    heroCopy: "Modernize manual business workflows, eliminate spreadsheet dependencies, and create modern digital portals that save hundreds of staff hours every month.",
    targetAudience: "Established mid-market companies seeking to automate operations and modernize legacy IT infrastructure.",
    keyBenefits: [
      "Automate repetitive manual data entry tasks",
      "Unify fragmented business data into single dashboard portals",
      "Reduce software licensing overhead by building custom tools",
      "Elevate customer-facing digital touchpoints"
    ],
    capabilities: [
      { title: "Custom Workflow Automation Engines", description: "Connecting accounting, inventory, CRM, and customer portals into frictionless automated streams." },
      { title: "Legacy Software Refactoring", description: "Migrating outdated desktop or monolithic applications to secure cloud web platforms." },
      { title: "Internal Team Training", description: "Comprehensive documentation and hands-on onboarding for operational personnel." }
    ],
    techStack: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "REST APIs"]
  },
  "enterprise": {
    slug: "enterprise",
    title: "Enterprise Systems",
    subtitle: "High-Load Infrastructure, Security Compliance & Global Scale",
    heroCopy: "Engineered for massive transaction volume, multi-region redundancy, and stringent enterprise security compliance across international operations.",
    targetAudience: "Global enterprise organizations managing complex multi-department software ecosystems.",
    keyBenefits: [
      "SOC2, HIPAA, and ISO27001 compliant architecture",
      "Zero-downtime microservice deployments",
      "Granular role-based access control and audit logging",
      "Dedicated 24/7 SLA infrastructure support"
    ],
    capabilities: [
      { title: "Multi-Tenant Enterprise Platforms", description: "Strict multi-tenant data isolation with dynamic feature flags and SSO authentication." },
      { title: "Distributed Cloud Infrastructure", description: "Multi-region Kubernetes deployment across AWS and GCP with automated disaster recovery." },
      { title: "Legacy System Integration APIs", description: "Building high-speed bridge gateways to SAP, Salesforce, Oracle, and mainframes." }
    ],
    techStack: ["Kubernetes", "AWS", "Terraform", "Go", "Python", "Kafka", "PostgreSQL", "Redis"]
  },
  "ecommerce": {
    slug: "ecommerce",
    title: "Headless E-Commerce",
    subtitle: "Sub-Second Storefronts, Custom Checkout & Payment Engineering",
    heroCopy: "Break free from rigid monolithic e-commerce platforms. Build ultra-fast headless storefronts with Next.js, customized checkout flows, and real-time inventory management.",
    targetAudience: "Direct-to-Consumer (DTC) brands and B2B merchants aiming to maximize conversion rates.",
    keyBenefits: [
      "Sub-second page load times for product catalog pages",
      "Custom checkout experiences boosting conversion rates by 25%+",
      "Headless integration with Shopify, Commerce Layer, or custom backends",
      "Omnichannel inventory synchronization"
    ],
    capabilities: [
      { title: "Next.js Headless Storefronts", description: "Lightning-fast product listing pages with dynamic instant search and facet filtering." },
      { title: "Custom Stripe & Payment Gateways", description: "Multi-currency checkout engines with localized tax calculation and subscription handling." },
      { title: "Real-Time Inventory Sync", description: "Webhook-driven inventory tracking connecting warehouse ERPs to storefront stock counts." }
    ],
    techStack: ["Next.js", "Shopify Storefront API", "Stripe", "PostgreSQL", "Tailwind CSS", "Redis"]
  },
  "education": {
    slug: "education",
    title: "EdTech & Learning Systems",
    subtitle: "Interactive Learning Portals, Virtual Classrooms & Assessment Engines",
    heroCopy: "Power modern educational experiences with interactive web & mobile portals featuring live video classes, automated assessment grading, and student progress tracking.",
    targetAudience: "EdTech startups, universities, corporate training centers, and certification providers.",
    keyBenefits: [
      "Seamless live video streaming and interactive whiteboards",
      "Automated quiz grading and instant feedback engines",
      "Multi-tier student, instructor, and parent portals",
      "SCORM & LTI compliance standards"
    ],
    capabilities: [
      { title: "LMS & Learning Platforms", description: "Comprehensive course management suites with video progress tracking and downloadable resources." },
      { title: "AI-Powered Tutoring Assistant", description: "Intelligent study bots trained on course material to answer student questions 24/7." },
      { title: "Certificate Generation Engines", description: "Automated cryptographic certificate issue with social media sharing integration." }
    ],
    techStack: ["Next.js", "Flutter", "Node.js", "WebRTC", "PostgreSQL", "AWS S3"]
  },
  "healthcare": {
    slug: "healthcare",
    title: "HealthTech & Medical Portals",
    subtitle: "HIPAA-Compliant Platforms, Patient Portals & Telehealth Infrastructure",
    heroCopy: "Engineering secure, compliant healthcare platforms. We build patient portals, telehealth consultation apps, and electronic health record integrations that meet strict medical privacy standards.",
    targetAudience: "Healthcare providers, medical clinics, mental health platforms, and digital health innovators.",
    keyBenefits: [
      "Strict HIPAA & GDPR medical data privacy compliance",
      "End-to-end encrypted telehealth video sessions",
      "Seamless EHR/EMR FHIR API integrations",
      "Automated patient appointment scheduling & reminders"
    ],
    capabilities: [
      { title: "HIPAA-Compliant Telehealth Web/Mobile", description: "Encrypted patient-doctor consultation channels with digital prescription signing." },
      { title: "Patient Health Record Portals", description: "Secure portals for viewing lab results, medical history, and treatment plans." },
      { title: "Medical Device Bluetooth Connectivity", description: "Connecting mobile apps directly to glucose monitors, heart sensors, and wearables." }
    ],
    techStack: ["Flutter", "Next.js", "Node.js", "PostgreSQL (Encrypted)", "AWS HealthLake", "WebRTC"]
  },
  "real-estate": {
    slug: "real-estate",
    title: "PropTech & Real Estate",
    subtitle: "Property Listing Engines, Virtual Tours & Asset Management",
    heroCopy: "Transform real estate operations with high-speed listing portals, interactive 3D map views, automated lead qualification, and property management dashboards.",
    targetAudience: "Real estate brokerages, property management firms, and PropTech technology companies.",
    keyBenefits: [
      "MLS / RETS automated property data feeds",
      "Interactive map search with custom visual clustering",
      "Digital lease signing & tenant payment processing",
      "High-converting property landing pages"
    ],
    capabilities: [
      { title: "MLS Data Synchronization Engines", description: "Ingesting and indexing thousands of active property listings with real-time price update webhooks." },
      { title: "3D Virtual Tour Integration", description: "Embedding Matterport and WebGL virtual walkthroughs directly into property detail pages." },
      { title: "Tenant Portal & Rent Processing", description: "Online rent collection, maintenance request ticketing, and lease document storage." }
    ],
    techStack: ["Next.js", "Mapbox", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"]
  }
};
