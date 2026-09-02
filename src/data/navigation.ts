export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

// EXACT NAVBAR ORDER: Home, About, Services, Product, Training, Career, FAQ, Contact
export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Product", href: "/product" },
  { label: "Training", href: "/training" },
  { label: "Career", href: "/careers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_NAV: NavItem[] = [
  {
    label: "Software Development",
    href: "/services/software-development",
    description: "Custom enterprise platforms, multi-tenant SaaS & core business engines."
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    description: "High-performance Next.js web applications, portals & marketing flagships."
  },
  {
    label: "Mobile Applications",
    href: "/services/mobile-app-development",
    description: "Native iOS & Android mobile platforms built with 60fps Flutter frameworks."
  },
  {
    label: "AI Solutions",
    href: "/services/ai-ml",
    description: "Intelligent AI systems, fine-tuned RAG models & autonomous agent networks."
  },
  {
    label: "SEO & Digital Growth",
    href: "/services/seo",
    description: "Technical SEO engineering, Core Web Vitals tuning & organic growth."
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops",
    description: "AWS cloud architecture, Kubernetes clusters & Terraform infrastructure."
  }
];

export const SOLUTIONS_NAV: NavItem[] = [
  { label: "Startups", href: "/solutions/startups", description: "Rapid zero-debt MVP engineering & venture architecture" },
  { label: "Small & Mid Business", href: "/solutions/small-business", description: "Workflow automation, legacy modernization & custom tools" },
  { label: "Enterprise Systems", href: "/solutions/enterprise", description: "High-availability cloud platforms & SOC2 security compliance" },
  { label: "E-Commerce", href: "/solutions/ecommerce", description: "Headless commerce, instant catalog search & custom checkout" },
  { label: "EdTech & Learning", href: "/solutions/education", description: "Interactive learning portals & automated assessment engines" },
  { label: "HealthTech", href: "/solutions/healthcare", description: "HIPAA-compliant platforms & telehealth consultation" },
  { label: "PropTech & Real Estate", href: "/solutions/real-estate", description: "Listing sync engines, Mapbox search & tenant portals" },
];

export const FOOTER_NAVIGATION = {
  services: SERVICES_NAV,
  solutions: SOLUTIONS_NAV,
  company: [
    { label: "About NORYOKO", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Product", href: "/product" },
    { label: "Training", href: "/training" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Blog & Insights", href: "/blog" },
    { label: "AI Agents Guide", href: "/services/ai-agents" },
    { label: "Engineering Culture", href: "/careers#culture" },
  ]
};
