import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Cpu, Rocket, ShieldCheck, Users, Zap } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Careers & Culture | Norkl Studio",
  description: "Join Norkl's engineering team. Explore our engineering culture, career principles, and talent opportunities.",
};

export default function CareersPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Users className="w-3.5 h-3.5" />
          <span>JOIN THE TEAM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          ENGINEERING <br />
          <span className="text-indigo-600">CULTURE AT NORKL.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          We believe senior engineering is built on craft, autonomy, strict type safety, and zero administrative bureaucracy.
        </p>
      </section>

      {/* Engineering Culture Values */}
      <section id="culture" className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">// Culture Principles</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">WHAT WE VALUE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Technical Rigor</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              We write strictly typed TypeScript, comprehensive automated tests, and perform thorough code reviews.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Autonomous Execution</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Engineers own products end-to-end—from initial domain modeling and Figma review to CI/CD cloud deployment.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Continuous Growth</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Stay ahead of technology curves with dedicated R&D time for AI agents, WebGL shaders, and high-load backend tooling.
            </p>
          </div>
        </div>
      </section>

      {/* Talent Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white space-y-6">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// OPPORTUNITIES</span>
          <h2 className="text-3xl font-bold text-white">OPEN ROLES & TALENT APPLICATION</h2>
          <p className="text-slate-300 text-sm font-light leading-relaxed max-w-2xl">
            We are always seeking senior software architects, full-stack engineers, AI agent specialists, and product designers. If you take pride in technical mastery, introduce yourself.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase transition-colors"
            >
              <span>Submit General Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/internships"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase border border-white/15 transition-colors"
            >
              <span>Explore Internship Program</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
