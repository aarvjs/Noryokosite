import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import LaptopFrame from "@/components/devices/LaptopFrame";
import { ArrowRight, CheckCircle2, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} Case Study | Norkl Architecture`,
    description: project.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* Case Study Unique Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 font-semibold">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500">YEAR: {project.year}</span>
          <span className="text-xs font-mono text-slate-500">CLIENT: {project.client}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          {project.title}
        </h1>

        <p className="text-xs sm:text-sm font-mono text-indigo-600 uppercase tracking-widest font-bold">
          // {project.tagline}
        </p>

        <p className="text-lg text-slate-600 max-w-3xl font-light leading-relaxed">
          {project.summary}
        </p>
      </section>

      {/* Showcase Visual */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <LaptopFrame title={project.title}>
          <div className="w-full h-full bg-slate-950 p-8 flex flex-col justify-between text-white font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-sm font-bold text-indigo-400">{project.title}</span>
              <span className="text-xs font-mono text-slate-400">{project.client.toUpperCase()}</span>
            </div>
            <div className="my-6 space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 font-mono">SYSTEM SPECIFICATION</div>
                <div className="text-lg font-bold text-white mt-1">{project.tagline}</div>
              </div>
            </div>
            <div className="flex gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </LaptopFrame>
      </section>

      {/* Case Study Details Grid: Overview, Challenge, Approach, Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span>01 / The Technical Challenge</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">{project.challenge}</p>
          </div>

          {/* Approach */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              <span>02 / Architecture & Approach</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">{project.approach}</p>
          </div>
        </div>

        {/* Core Solution & Key Features */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white space-y-8">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// DEPLOYED SOLUTION</span>
            <h3 className="text-3xl font-bold text-white mt-1">ENGINEERING OUTCOME</h3>
            <p className="text-slate-300 text-sm font-light mt-3 leading-relaxed max-w-3xl">
              {project.solution}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <span className="text-xs font-mono text-slate-400 block mb-4">Core Deployed Features:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-slate-200 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
