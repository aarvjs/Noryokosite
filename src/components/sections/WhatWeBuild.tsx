"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock,
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  RefreshCw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap
} from "lucide-react";

interface BuildCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  href: string;
  visualTag: string;
}

const BUILD_CATEGORIES: BuildCategory[] = [
  {
    id: "software",
    number: "01",
    title: "SOFTWARE",
    subtitle: "SaaS & Core Engines",
    description: "Build scalable enterprise platforms, SaaS products and business systems engineered around real operational requirements.",
    technologies: ["Node.js", "Python", "Go", "PostgreSQL", "Redis", "Docker"],
    href: "/services/software-development",
    visualTag: "SaaS & Core Engines"
  },
  {
    id: "web",
    number: "02",
    title: "WEB",
    subtitle: "High-Performance Next.js Digital Products",
    description: "Sub-second web applications, editorial flagships and headless web portals engineered with Next.js App Router.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "GSAP"],
    href: "/services/web-development",
    visualTag: "Next.js Web Platforms"
  },
  {
    id: "mobile",
    number: "03",
    title: "MOBILE",
    subtitle: "Native & Cross-Platform Applications",
    description: "60fps mobile applications engineered for iOS and Android with Flutter and offline-first synchronization.",
    technologies: ["Flutter", "Dart", "React Native", "Swift", "SQLite"],
    href: "/services/mobile-app-development",
    visualTag: "iOS & Android Apps"
  },
  {
    id: "ai",
    number: "04",
    title: "AI & AGENTS",
    subtitle: "Autonomous Workflows & Vector Intelligence",
    description: "Multi-agent autonomous systems, vector database RAG pipelines, and intelligent operational tools.",
    technologies: ["Python", "PyTorch", "LangChain", "Pinecone", "FastAPI"],
    href: "/services/ai-agents",
    visualTag: "Agent Orchestration"
  },
  {
    id: "cloud",
    number: "05",
    title: "CLOUD & DEVOPS",
    subtitle: "Resilient Infrastructure & Container Pipelines",
    description: "AWS cloud architecture, Terraform Infrastructure as Code, Kubernetes clusters, and 99.99% uptime SLA.",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    href: "/services/cloud-devops",
    visualTag: "Infrastructure & CI/CD"
  },
  {
    id: "growth",
    number: "06",
    title: "GROWTH",
    subtitle: "Technical SEO & Conversion Engineering",
    description: "Structured schema markup, site speed tuning, organic search indexation graphs, and conversion optimization.",
    technologies: ["Technical SEO", "GA4 CAPI", "Conversion Funnels", "A/B Testing"],
    href: "/services/seo",
    visualTag: "Acquisition & Conversion"
  }
];

export default function WhatWeBuild() {
  const [activeCategory, setActiveCategory] = useState<string>("software");
  const currentCategory = BUILD_CATEGORIES.find((c) => c.id === activeCategory) || BUILD_CATEGORIES[0];

  return (
    <section className="w-full py-24 sm:py-32 bg-[#F9F9FB] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Eyebrow & Header (UNTOUCHED) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase">
              // Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              WHAT WE BUILD
            </h2>
          </div>
          <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm leading-relaxed">
            We avoid generic templates. Every product, platform, and system is custom-engineered to solve complex operational challenges.
          </p>
        </div>

        {/* Editorial Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Category Selection List (UNTOUCHED STRUCTURE & STYLING) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200">
            {BUILD_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setActiveCategory(category.id)}
                  className={`group py-6 flex items-start justify-between text-left transition-all px-4 rounded-xl ${
                    isActive ? "bg-white shadow-sm border border-slate-200/80" : "hover:bg-slate-100/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xs font-mono transition-colors mt-1 ${isActive ? "text-indigo-600 font-bold" : "text-slate-400"}`}>
                      {category.number}
                    </span>
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"}`}>
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`p-2 rounded-full transition-transform ${isActive ? "bg-indigo-600 text-white translate-x-1" : "bg-slate-100 text-slate-400 group-hover:text-slate-700"}`}>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium Warm White / Ivory Capability Showcase Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              key={currentCategory.id}
              className="p-7 sm:p-8 rounded-3xl bg-[#FAF8F5] text-slate-900 border border-amber-200/80 shadow-[0_20px_50px_rgba(217,119,6,0.08)] space-y-6 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden"
            >
              {/* Subtle Champagne Golden Glow Element */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-amber-400/15 blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="flex items-center justify-between text-xs font-mono text-amber-800 border-b border-amber-200/60 pb-4">
                <span className="font-bold">{currentCategory.number} / {currentCategory.title}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 text-[10px] font-semibold border border-amber-300/40">
                  {currentCategory.visualTag.toUpperCase()}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  {currentCategory.subtitle}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {currentCategory.description}
                </p>
              </div>

              {/* DYNAMIC ABSTRACT TECHNICAL VISUAL PER CAPABILITY */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/60 shadow-sm space-y-3 relative overflow-hidden">
                {currentCategory.id === "software" && (
                  /* 01 SOFTWARE: Architectural Layers & Microservices Nodes */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-amber-700" />
                        <span>SaaS Engine Architecture</span>
                      </span>
                      <span className="text-emerald-700 font-bold">12ms API Gateway</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                      <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-slate-800 font-semibold">
                        Microservice A
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-slate-800 font-semibold">
                        Queue Engine
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-slate-800 font-semibold">
                        PostgreSQL DB
                      </div>
                    </div>
                  </div>
                )}

                {currentCategory.id === "web" && (
                  /* 02 WEB: Next.js Rendering & Core Web Vitals Latency Meters */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-amber-700" />
                        <span>Next.js App Router Pipeline</span>
                      </span>
                      <span className="text-emerald-700 font-bold">99/100 Speed</span>
                    </div>
                    <div className="space-y-1.5 text-[10px] font-mono">
                      <div className="flex justify-between text-slate-700">
                        <span>LCP (Largest Contentful Paint)</span>
                        <span className="font-bold text-amber-800">0.8s</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-600 h-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                )}

                {currentCategory.id === "mobile" && (
                  /* 03 MOBILE: 60fps Native Touch & Local SQLite Sync */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                        <span>Flutter 60 FPS Native UX</span>
                      </span>
                      <span className="text-emerald-700 font-bold">Offline-First</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-[10px] font-mono">
                      <span>SQLite Local DB Cache</span>
                      <span className="text-amber-800 font-bold">Background Sync ✓</span>
                    </div>
                  </div>
                )}

                {currentCategory.id === "ai" && (
                  /* 04 AI & AGENTS: Neural Node Network & Vector Embeddings */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-amber-700" />
                        <span>RAG Vector Embedding Matrix</span>
                      </span>
                      <span className="text-amber-800 font-bold">24/7 Agent</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60">
                        <div className="text-slate-500">KNOWLEDGE VECTOR</div>
                        <div className="font-bold text-slate-900">pgvector 1536d</div>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60">
                        <div className="text-slate-500">ACCURACY SCORE</div>
                        <div className="font-bold text-emerald-700">99.4% Zero-Hallucination</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentCategory.id === "cloud" && (
                  /* 05 CLOUD & DEVOPS: Kubernetes Clusters & Terraform IaC */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5 text-amber-700" />
                        <span>Kubernetes & Terraform IaC</span>
                      </span>
                      <span className="text-emerald-700 font-bold">99.99% Uptime</span>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-[10px] font-mono flex items-center justify-between">
                      <span>AWS VPC + Auto-Scaling Pods</span>
                      <span className="text-amber-800 font-bold">Blue-Green CI/CD</span>
                    </div>
                  </div>
                )}

                {currentCategory.id === "growth" && (
                  /* 06 GROWTH: Technical SEO Crawl & Schema Markup */
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-amber-900 border-b border-amber-100 pb-2">
                      <span className="flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-amber-700" />
                        <span>Technical SEO & Schema Markup</span>
                      </span>
                      <span className="text-emerald-700 font-bold">Search Dominance</span>
                    </div>
                    <div className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/60 text-[10px] font-mono flex items-center justify-between">
                      <span>JSON-LD Schema + Canonical Maps</span>
                      <span className="text-amber-800 font-bold">100% Indexation</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Technologies Tags */}
              <div className="pt-1">
                <span className="text-xs font-mono text-slate-500 block mb-2">Primary Engineering Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-lg bg-amber-100/70 text-amber-900 border border-amber-300/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <Link
                  href={currentCategory.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-800 hover:text-amber-900 transition-colors uppercase tracking-wider"
                >
                  <span>Explore Capability Details</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-700" />
                </Link>
                <span className="text-[10px] text-slate-400 font-mono">NORYOKO STUDIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
