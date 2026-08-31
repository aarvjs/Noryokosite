import React from "react";
import { TECHNOLOGIES_DATA } from "@/data/technologies";
import { Cpu, Layers, ShieldCheck } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Technology Stack & Ecosystem | Norkl Studio",
  description: "Explore Norkl's engineering tech stack across Frontend, Backend, AI/ML, Cloud DevOps, Databases, and Mobile frameworks.",
};

export default function TechnologiesPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>PRODUCTION ECOSYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          ENGINEERING <br />
          <span className="text-indigo-600">TECHNOLOGY STACK.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          We maintain strict criteria when adopting production tools. Every layer of our technology ecosystem is vetted for performance, type safety, and scalability.
        </p>
      </section>

      {/* Technology Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
        {TECHNOLOGIES_DATA.map((category) => (
          <div key={category.id} className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-mono text-indigo-600 font-bold uppercase">// {category.id}</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">{category.name}</h2>
              <p className="text-slate-600 text-sm font-light mt-1 max-w-2xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div key={item.name} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-semibold">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <FinalCTA />
    </main>
  );
}
