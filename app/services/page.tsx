import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Engineering Services | Norkl Studio",
  description: "Explore Norkl's full spectrum of digital engineering services: Software, Web, Mobile, AI Agents, Cloud DevOps, UI/UX, SEO, and IT Consulting.",
};

export default function ServicesPage() {
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>CAPABILITIES & DISCIPLINE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          ENGINEERING <br />
          <span className="text-indigo-600">CAPABILITIES.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Full-cycle digital product design, systems software engineering, autonomous AI agent infrastructure, and data-driven organic growth.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.slug}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-500 hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono text-indigo-600 font-bold uppercase">
                    {service.slug.replace("-", " ")}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="text-xs font-mono text-slate-500">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider"
                >
                  Details →
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
