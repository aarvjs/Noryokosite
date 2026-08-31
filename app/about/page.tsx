import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck, Sparkles, Zap } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "About NORYOKO | Digital Engineering Studio",
  description: "Learn about NORYOKO - a modern digital engineering studio building resilient software, web products, mobile platforms, and AI agent infrastructure.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>ABOUT NORYOKO STUDIO</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          WE ENGINEER <br />
          <span className="text-indigo-600">DIGITAL SYSTEMS.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl font-light leading-relaxed">
          NORYOKO is a modern technology company and digital engineering studio. We partner with ambitious startups, growth-stage businesses, and enterprise teams to design and build digital products that move businesses forward.
        </p>
      </section>

      {/* Core Principles */}
      <section id="architecture" className="w-full py-20 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// Engineering Principles</span>
            <h2 className="text-3xl font-bold text-white mt-1">HOW WE THINK & BUILD</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 w-fit">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Performance-First Architecture</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Sub-second response times, zero bundle bloat, and optimized Core Web Vitals are foundational requirements, not afterthoughts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Production-Grade Security</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Role-based access controls, encrypted transport, and strict vulnerability audits built into every microservice.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
              <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Human-Centric Art Direction</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-light">
                Rejecting generic SaaS templates in favor of intentional typography, spatial rhythm, and bespoke interaction design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">OUR DIGITAL DISCIPLINES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Custom Software & Enterprise Platforms</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Designing multi-tenant SaaS backends, custom CRM engines, and operational control centers.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">High-Performance Web Products</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Crafting Next.js 16 applications, editorial marketing flagships, and headless web portals.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Autonomous AI Agents & ML</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              Building multi-agent autonomous workflows, RAG vector pipelines, and real-time model inferencing.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Mobile & Cross-Platform</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-light">
              60fps iOS and Android mobile platforms engineered with Flutter and native mobile SDKs.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
