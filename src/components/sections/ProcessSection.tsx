"use client";

import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Domain Audit & Technical Blueprint",
    description: "We map business domain constraints, data schemas, API boundaries, security requirements, and operational goals before writing a single line of code.",
    deliverables: ["Technical Architecture Specification", "Data Model Schemas", "Security & Risk Matrix"]
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Editorial UX & Design Systems",
    description: "Crafting tokenized component libraries in Figma, responsive UI layouts, micro-animations, and high-fidelity clickable user flows.",
    deliverables: ["Tokenized Figma Design System", "Interactive Clickable Prototypes", "Design Token Specs"]
  },
  {
    number: "03",
    title: "ENGINEER",
    subtitle: "Modular Core System Engineering",
    description: "Test-driven development of full-stack applications, microservices, Next.js frontend components, and database migrations.",
    deliverables: ["Modular Source Codebase", "REST / GraphQL API Contracts", "Database Migration Scripts"]
  },
  {
    number: "04",
    title: "TEST",
    subtitle: "Automated QA & Security Audits",
    description: "Rigorous automated integration tests, OWASP security audits, load testing under high concurrency, and Core Web Vitals optimization.",
    deliverables: ["Automated Test Suite Coverage", "Security Vulnerability Scan", "Lighthouse 95+ Audit Report"]
  },
  {
    number: "05",
    title: "DEPLOY",
    subtitle: "CI/CD & Cloud Orchestration",
    description: "Zero-downtime blue-green deployments on AWS / GCP using Terraform Infrastructure as Code and automated container pipelines.",
    deliverables: ["Version-Controlled Terraform IaC", "Automated CI/CD Pipelines", "Telemetry Monitoring Dashboards"]
  },
  {
    number: "06",
    title: "GROW",
    subtitle: "Continuous Optimization & Scaling",
    description: "Post-launch monitoring, real-time APM telemetry, feature enhancements, and technical SEO scaling for ongoing market expansion.",
    deliverables: ["24/7 Telemetry Alert Triggers", "Monthly Performance Reports", "SLA Maintenance Support"]
  }
];

export default function ProcessSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#0B0F19] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
              // Methodology & Workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              HOW WE ENGINEER
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            A disciplined six-phase engineering pipeline designed for predictable delivery, zero technical debt, and maximum reliability.
          </p>
        </div>

        {/* Editorial Vertical Staggered Process List */}
        <div className="space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group"
            >
              {/* Step Number & Title */}
              <div className="lg:col-span-5 flex items-start gap-6">
                <span className="text-4xl sm:text-6xl font-bold font-mono text-indigo-400 group-hover:scale-105 transition-transform">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-300 mt-1">
                    {step.subtitle}
                  </p>
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-7 space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400 block mb-2">Phase Deliverables:</span>
                  <div className="flex flex-wrap gap-3">
                    {step.deliverables.map((deliv, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-200 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
