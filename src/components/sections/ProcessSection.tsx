"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  Cpu,
  FileCode,
  Layout,
  Rocket,
  Search,
  ShieldCheck
} from "lucide-react";

interface ProcessPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

const METHODOLOGY_PHASES: ProcessPhase[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "System Audit & Domain Mapping",
    description: "Mapping business domain constraints, data schemas, API boundaries, security rules, and operational requirements.",
    icon: Search,
    deliverables: ["Architecture Specification", "Data Model Schemas", "Security Matrix"]
  },
  {
    number: "02",
    title: "DEFINE",
    subtitle: "Technical Architecture & Schemas",
    description: "Defining microservice contracts, database migration scripts, state topology, and cloud VPC networks.",
    icon: FileCode,
    deliverables: ["OpenAPI Contracts", "Postgres Schemas", "VPC Topology"]
  },
  {
    number: "03",
    title: "DESIGN",
    subtitle: "Bespoke UI/UX & Design Tokens",
    description: "Crafting tokenized component design systems in Figma, responsive UI layouts, and interactive prototypes.",
    icon: Layout,
    deliverables: ["Tokenized Design Specs", "Figma Design System", "Interactive UX"]
  },
  {
    number: "04",
    title: "BUILD",
    subtitle: "Sprint Engineering & Code Review",
    description: "Test-driven development of full-stack Next.js web applications, Flutter mobile binaries, and API microservices.",
    icon: Cpu,
    deliverables: ["Modular Source Code", "Next.js App Router", "Flutter Mobile Binary"]
  },
  {
    number: "05",
    title: "TEST",
    subtitle: "QA, Penetration Audit & Stress Test",
    description: "Automated integration suites, OWASP vulnerability scans, load testing under high concurrency, and speed audits.",
    icon: ShieldCheck,
    deliverables: ["Automated Test Coverage", "OWASP Security Scan", "Lighthouse 95+ Score"]
  },
  {
    number: "06",
    title: "DEPLOY",
    subtitle: "Zero-Downtime Launch & SLA Telemetry",
    description: "Zero-downtime blue-green deployments on AWS using Terraform Infrastructure as Code and automated CI/CD.",
    icon: Rocket,
    deliverables: ["Terraform IaC Scripts", "Automated CI/CD", "24/7 APM Telemetry"]
  }
];

export default function ProcessSection() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF8F5] text-slate-900 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-amber-200/60 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-800 font-bold uppercase">
              // METHODOLOGY & WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              HOW WE ENGINEER
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            A disciplined six-phase engineering pipeline designed for predictable delivery, zero technical debt, and maximum reliability.
          </p>
        </div>

        {/* Clean Editorial Engineering Phase Grid (No horizontal line behind cards!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {METHODOLOGY_PHASES.map((phase, idx) => {
            const Icon = phase.icon;
            const isActive = activePhase === idx;

            return (
              <div
                key={phase.number}
                onClick={() => setActivePhase(idx)}
                onMouseEnter={() => setActivePhase(idx)}
                className={`p-6 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between h-[300px] cursor-pointer group ${
                  isActive
                    ? "bg-white border-amber-400 shadow-[0_15px_35px_rgba(217,119,6,0.14)] scale-105"
                    : "bg-white/80 border-amber-200/60 hover:bg-white hover:border-amber-300"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                    <span className={`text-2xl font-mono font-bold ${isActive ? "text-amber-800" : "text-slate-400"}`}>
                      {phase.number}
                    </span>
                    <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-amber-700 text-white" : "bg-amber-50 text-amber-800"}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-base font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                    {phase.title}
                  </div>
                  <div className="text-[10px] font-mono text-amber-800 font-medium line-clamp-1">
                    {phase.subtitle}
                  </div>
                  <p className="text-[11px] text-slate-600 font-light leading-relaxed line-clamp-3">
                    {phase.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-100 flex items-center justify-between text-[9px] font-mono text-slate-500">
                  <span>{phase.deliverables[0]}</span>
                  <span className="text-amber-700 font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Phase Specification Card */}
        <div className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-100 pb-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-amber-100/90 text-amber-900 font-bold border border-amber-300/60 uppercase">
                PHASE {METHODOLOGY_PHASES[activePhase].number} — {METHODOLOGY_PHASES[activePhase].title}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {METHODOLOGY_PHASES[activePhase].subtitle}
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-700 font-bold">PRODUCTION GRADE SLA ✓</span>
          </div>

          <p className="text-slate-600 text-sm font-light leading-relaxed">
            {METHODOLOGY_PHASES[activePhase].description}
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            {METHODOLOGY_PHASES[activePhase].deliverables.map((deliv, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-mono text-amber-900 bg-amber-50 px-3.5 py-1.5 rounded-xl border border-amber-200/80 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-amber-700" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
