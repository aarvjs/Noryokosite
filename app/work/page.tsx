import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowUpRight, Cpu } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Selected Portfolio & Case Studies | Norkl Studio",
  description: "Explore Norkl's engineering case studies: Nexus AI Platform, Aura Mobile Health, Vortex Cloud Telemetry, and Strata E-Commerce.",
};

export default function WorkIndexPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>PORTFOLIO CASE STUDIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          SELECTED <br />
          <span className="text-indigo-600">ENGINEERING WORK.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Production digital platforms, mobile health tools, AI operating systems, and high-load web systems built for scale.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={project.slug}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-indigo-500 transition-all"
          >
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 font-semibold">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-slate-400">YEAR: {project.year}</span>
                <span className="text-xs font-mono text-slate-400">CLIENT: {project.client}</span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
              <p className="text-xs font-mono text-indigo-600">{project.tagline}</p>
              <p className="text-slate-600 text-sm font-light leading-relaxed max-w-2xl">{project.summary}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Read Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <FinalCTA />
    </main>
  );
}
