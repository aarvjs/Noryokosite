"use client";

import React from "react";
import {
  Activity,
  Bot,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Lock,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Zap
} from "lucide-react";

interface ServiceHeroVisualProps {
  slug: string;
  title: string;
}

export default function ServiceHeroVisual({ slug, title }: ServiceHeroVisualProps) {
  switch (slug) {
    // =========================================================================
    // 1. SOFTWARE / SAAS — LAPTOP DESKTOP PRODUCT MOCKUP
    // =========================================================================
    case "software-development":
      return (
        <div className="w-full max-w-xl mx-auto space-y-4">
          <div className="rounded-3xl bg-white border border-amber-300 shadow-[0_30px_70px_rgba(217,119,6,0.16)] p-3 space-y-2 group transition-all duration-500 hover:scale-[1.02]">
            {/* Laptop Safari Browser Frame Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-amber-50/80 rounded-xl border border-amber-200/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-0.5 rounded-md bg-white border border-amber-200 text-[10px] font-mono text-slate-600">
                https://app.noryoko.io/enterprise-saas
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-800">SaaS CORE</span>
            </div>

            {/* Laptop Display Screen */}
            <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-amber-200/60">
              <img
                src="/images/showcase_saas.jpg"
                alt="Enterprise SaaS Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-end">
                <div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-600 font-bold uppercase">
                    ENTERPRISE SAAS ENGINE
                  </span>
                  <div className="text-sm font-bold text-white mt-1">Multi-Tenant Architecture</div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/20">
                  12ms API Latency
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white border border-amber-200/80 text-xs font-mono text-amber-900 shadow-sm">
            <span className="flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-amber-700" />
              <span>Modular SaaS Backend</span>
            </span>
            <span className="text-emerald-700 font-bold">SOC2 & Multi-Tenant ✓</span>
          </div>
        </div>
      );

    // =========================================================================
    // 2. WEB DEVELOPMENT — BROWSER WINDOW MOCKUP WITH LAYERED SCREENS
    // =========================================================================
    case "web-development":
      return (
        <div className="w-full max-w-xl mx-auto relative pt-4 pb-2">
          {/* Back Layered Window */}
          <div className="absolute -top-1 right-2 w-[90%] h-64 rounded-2xl bg-amber-100/70 border border-amber-300/80 shadow-md transform rotate-2 z-0" />

          {/* Main Front Browser Window */}
          <div className="relative z-10 rounded-3xl bg-white border border-amber-300 shadow-[0_30px_70px_rgba(217,119,6,0.16)] p-3 space-y-2 group transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center justify-between px-3 py-2 bg-amber-50/80 rounded-xl border border-amber-200/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-0.5 rounded-md bg-white border border-amber-200 text-[10px] font-mono text-slate-600">
                https://keerat-tech.vercel.app
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-800">NEXT.JS 16</span>
            </div>

            <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-amber-200/60">
              <img
                src="/images/showcase_web.jpg"
                alt="Next.js Editorial Web Portal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white flex justify-between items-end">
                <div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-600 font-bold uppercase">
                    SUB-SECOND WEB PORTAL
                  </span>
                  <div className="text-sm font-bold text-white mt-1">Keerat Industrial Web Engine</div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/20">
                  0.8s LCP Speed
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    // =========================================================================
    // 3. MOBILE APP DEVELOPMENT — 3 PREMIUM SMARTPHONE MOCKUPS
    // =========================================================================
    case "mobile-app-development":
      return (
        <div className="w-full max-w-xl mx-auto relative flex items-center justify-center py-6">
          {/* Left Phone (Behind, Left Rotated) */}
          <div className="w-36 sm:w-44 h-64 sm:h-72 rounded-3xl bg-white border border-amber-200 shadow-lg overflow-hidden transform -rotate-12 -translate-x-8 opacity-85 z-0 transition-transform duration-500 hover:rotate-0">
            <img
              src="/images/showcase_mobile.jpg"
              alt="Mobile App Screen Left"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Phone (Main, Front, Larger) */}
          <div className="w-44 sm:w-52 h-76 sm:h-84 rounded-3xl bg-white border-2 border-amber-400 shadow-[0_30px_70px_rgba(217,119,6,0.2)] overflow-hidden z-20 transition-transform duration-500 hover:scale-105 relative">
            <img
              src="/images/showcase_mobile.jpg"
              alt="Flutter 60fps Mobile App"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-900 rounded-full" />
            <div className="absolute bottom-2 left-4 right-4 bg-slate-900/90 text-white p-2 rounded-xl text-center border border-white/20">
              <div className="text-[10px] font-bold">60 FPS NATIVE TOUCH</div>
              <div className="text-[8px] font-mono text-emerald-400">SQLite Offline Sync ✓</div>
            </div>
          </div>

          {/* Right Phone (Behind, Right Rotated) */}
          <div className="w-36 sm:w-44 h-64 sm:h-72 rounded-3xl bg-white border border-amber-200 shadow-lg overflow-hidden transform rotate-12 translate-x-8 opacity-85 z-0 transition-transform duration-500 hover:rotate-0">
            <img
              src="/images/showcase_mobile.jpg"
              alt="Mobile App Screen Right"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );

    // =========================================================================
    // 4. AI & MACHINE LEARNING — INTELLIGENT WORKFLOW & NEURAL NODES VISUAL
    // =========================================================================
    case "ai-solutions":
      return (
        <div className="w-full max-w-xl mx-auto space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-[0_20px_50px_rgba(217,119,6,0.12)] space-y-5 text-left relative overflow-hidden group">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-bold text-slate-900">AUTONOMOUS RAG & LLM PIPELINE</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                24/7 AGENT TELEMETRY
              </span>
            </div>

            {/* Neural Nodes SVG Flow Diagram */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-3 font-mono text-xs text-amber-900">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                <span>Vector Embeddings (pgvector)</span>
                <span className="text-emerald-700 font-bold">0.04s Retrieval</span>
              </div>
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                <span>Fine-Tuned LLM Model Context</span>
                <span className="text-amber-800 font-bold">OpenAI GPT-4o / Claude 3.5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Autonomous Action Execution</span>
                <span className="text-emerald-700 font-bold">Zero Human Intervention</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Agent Knowledge Base Sync</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">ACTIVE LOG</span>
              </div>
              <p className="text-[11px] text-slate-300 font-light">
                Continuous vector indexing of enterprise document stores, API endpoints, and SQL telemetry queues.
              </p>
            </div>
          </div>
        </div>
      );

    // =========================================================================
    // 5. CLOUD / DEVOPS — INFRASTRUCTURE ARCHITECTURE VISUAL
    // =========================================================================
    case "cloud-devops":
      return (
        <div className="w-full max-w-xl mx-auto space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-[0_20px_50px_rgba(217,119,6,0.12)] space-y-5 text-left relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-bold text-slate-900">AWS EKS & TERRAFORM CLOUD</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                99.99% UPTIME SLA
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                <div className="text-[10px] font-mono text-amber-900">KUBERNETES PODS</div>
                <div className="text-lg font-bold text-slate-900">128 Auto-Scale</div>
                <div className="text-[9px] text-slate-500 font-mono">Zero CPU Throttling</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                <div className="text-[10px] font-mono text-amber-900">TERRAFORM IaC</div>
                <div className="text-lg font-bold text-amber-800">100% Versioned</div>
                <div className="text-[9px] text-slate-500 font-mono">Multi-Region VPC</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-amber-400" />
                  <span>CI/CD Deployment Pipeline</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">BLUE-GREEN LAUNCH ✓</span>
              </div>
              <p className="text-[11px] text-slate-300 font-light">
                Automated regression testing, blue-green deployment switches, and real-time Datadog APM alerts.
              </p>
            </div>
          </div>
        </div>
      );

    // =========================================================================
    // 6. DEFAULT / OTHER SERVICES — EDITORIAL SPECIFICATION CARD
    // =========================================================================
    default:
      return (
        <div className="w-full max-w-xl mx-auto space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-[0_20px_50px_rgba(217,119,6,0.12)] space-y-4 text-left">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-700" />
                <span className="text-xs font-bold text-slate-900">{title.toUpperCase()} SPEC</span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                PRODUCTION AUDITED
              </span>
            </div>

            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Engineered using custom tokenized UI specifications, test-driven microservice contracts, and high-performance cloud backends.
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 space-y-2">
              <div className="flex items-center justify-between">
                <span>Core Deliverable SLA</span>
                <span className="text-emerald-700 font-bold">Guaranteed ✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Code Quality Index</span>
                <span className="text-slate-900 font-bold">100% Zero Tech Debt</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
