import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowRight, CheckCircle2, Cpu, Layers, ShieldCheck } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];
  if (!solution) return { title: "Solution Not Found" };

  return {
    title: `${solution.title} Solution | Norkl Architecture`,
    description: solution.heroCopy,
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];

  if (!solution) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>INDUSTRY SOLUTION BLUEPRINT</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          {solution.title}
        </h1>

        <p className="text-xs sm:text-sm font-mono text-indigo-600 uppercase tracking-widest font-bold">
          // {solution.subtitle}
        </p>

        <p className="text-lg text-slate-600 max-w-3xl font-light leading-relaxed">
          {solution.heroCopy}
        </p>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase transition-colors"
          >
            <span>Discuss Solution Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Target Audience & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Ideal For:</h3>
          <p className="text-slate-600 text-sm leading-relaxed font-light">{solution.targetAudience}</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900">Key Business Impact</h3>
          <div className="space-y-2">
            {solution.keyBenefits.map((ben, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full py-20 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// System Capabilities</span>
            <h2 className="text-3xl font-bold text-white mt-1">PLATFORM ARCHITECTURE FEATURES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.capabilities.map((cap, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-mono text-indigo-400">0{idx + 1}</span>
                <h3 className="text-xl font-bold text-white">{cap.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed font-light">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
