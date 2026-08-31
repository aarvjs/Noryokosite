import React from "react";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowUpRight, Cpu } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Industry Solutions | Norkl Studio",
  description: "Targeted digital platform solutions for Startups, Small & Mid Business, Enterprise, E-Commerce, EdTech, HealthTech, and PropTech.",
};

export default function SolutionsPage() {
  const solutionsList = Object.values(SOLUTIONS_DATA);

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>INDUSTRY ARCHITECTURE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          TARGETED <br />
          <span className="text-indigo-600">SOLUTIONS.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Tailored engineering architectures and product platforms designed to solve unique industry challenges.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsList.map((sol) => (
            <div
              key={sol.slug}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-500 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono text-indigo-600 font-bold uppercase">
                    {sol.slug}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {sol.title}
                </h2>

                <p className="text-xs font-mono text-slate-500">
                  {sol.subtitle}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {sol.heroCopy}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {sol.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider"
                >
                  Blueprint →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
