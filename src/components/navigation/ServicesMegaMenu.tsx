"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_NAV } from "@/data/navigation";
import { ArrowUpRight, Bot, Cloud, Cpu, Globe, Search, Smartphone, Sparkles } from "lucide-react";

interface ServicesMegaMenuProps {
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  "software-development": Cpu,
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "ai-ml": Bot,
  "seo": Search,
  "cloud-devops": Cloud,
};

const SERVICE_PREVIEWS: Record<string, { image: string; tag: string; title: string; desc: string; tech: string[] }> = {
  "software-development": {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tag: "SOFTWARE ENGINEERING",
    title: "Custom SaaS & Enterprise Systems",
    desc: "Architecting resilient multi-tenant SaaS backends, workflow automation engines, and internal tools.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis"]
  },
  "web-development": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tag: "WEB ARCHITECTURE",
    title: "Next.js Web Applications & Portals",
    desc: "Sub-second editorial web applications engineered with Next.js App Router and server components.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS", "GSAP"]
  },
  "mobile-app-development": {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tag: "MOBILE ENGINEERING",
    title: "Native iOS & Android Mobile Apps",
    desc: "60fps mobile applications engineered with Flutter and native mobile SDKs for fluid touch UX.",
    tech: ["Flutter", "Dart", "iOS", "Android"]
  },
  "ai-ml": {
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop",
    tag: "AI & INTELLIGENCE",
    title: "Autonomous AI Agents & ML Models",
    desc: "Fine-tuned LLM architectures, RAG knowledge bases, and 24/7 autonomous workflow agents.",
    tech: ["PyTorch", "LangChain", "OpenAI", "pgvector"]
  },
  "seo": {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tag: "GROWTH & SEO",
    title: "Technical SEO & Core Web Vitals",
    desc: "Optimizing indexation architecture, structured JSON-LD schemas, and organic ranking growth.",
    tech: ["Lighthouse", "Schema.org", "GSC", "Ahrefs"]
  },
  "cloud-devops": {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    tag: "CLOUD & DEVOPS",
    title: "AWS Cloud Infrastructure & IaC",
    desc: "Terraform automated IaC scripts, Kubernetes pod orchestration, and zero-downtime CI/CD.",
    tech: ["AWS", "Terraform", "Docker", "Kubernetes"]
  }
};

export default function ServicesMegaMenu({ onClose, onMouseEnter, onMouseLeave }: ServicesMegaMenuProps) {
  const [activeSlug, setActiveSlug] = useState<string>("software-development");
  const activePreview = SERVICE_PREVIEWS[activeSlug] || SERVICE_PREVIEWS["software-development"];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[860px] max-w-[92vw] p-6 rounded-3xl bg-[#090D16]/98 text-white shadow-[0_30px_80px_rgba(0,0,0,0.85)] border border-white/20 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 pointer-events-auto"
    >
      {/* Invisible hover bridge to prevent mouse leave gap */}
      <div className="absolute -top-4 left-0 right-0 h-4" />

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* LEFT SIDE (40% Width): Large Software Preview Image Card */}
        <div className="w-full lg:w-[330px] shrink-0 relative rounded-2xl overflow-hidden min-h-[300px] border border-white/15 flex flex-col justify-end p-5 group">
          {/* Background Image */}
          <img
            src={activePreview.image}
            alt={activePreview.title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/75 to-transparent" />

          {/* Content Overlay */}
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[9px] font-mono uppercase tracking-widest border border-indigo-400/40 shadow-sm">
              <Sparkles className="w-3 h-3 text-indigo-200" />
              <span>{activePreview.tag}</span>
            </div>

            <h4 className="text-base font-bold tracking-tight text-white leading-snug">
              {activePreview.title}
            </h4>

            <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-2">
              {activePreview.desc}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {activePreview.tech.map((t) => (
                <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-indigo-200 border border-white/15">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (60% Width): 2-Column Professional Services Layout */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SERVICES_NAV.map((item) => {
            const slug = item.href.replace("/services/", "");
            const isActive = activeSlug === slug;
            const Icon = ICON_MAP[slug] || Cpu;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setActiveSlug(slug)}
                className={`p-3.5 rounded-2xl transition-all flex flex-col justify-between group border ${
                  isActive
                    ? "bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-600/20 scale-[1.02]"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isActive ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40" : "bg-white/10 text-slate-300 group-hover:text-white group-hover:bg-indigo-600/80"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-xs font-bold transition-colors ${isActive ? "text-white" : "text-slate-200 group-hover:text-white"}`}>
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? "text-indigo-400 translate-x-0.5 -translate-y-0.5 opacity-100" : "text-slate-500 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>

                {item.description && (
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
