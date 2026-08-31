"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowUpRight, Building2, CheckCircle, GraduationCap, HeartPulse, Home, ShoppingBag, Zap } from "lucide-react";

export default function IndustriesSection() {
  const [activeSolutionKey, setActiveSolutionKey] = useState<string>("startups");

  const solutionList = Object.values(SOLUTIONS_DATA);
  const activeSolution = SOLUTIONS_DATA[activeSolutionKey] || solutionList[0];

  return (
    <section className="w-full py-24 sm:py-32 bg-[#F9F9FB] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase">
              // Industry Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              TARGETED INDUSTRY PLATFORMS
            </h2>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Composition: Left Pill Switcher, Right Detail Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vertical Industry Buttons */}
          <div className="lg:col-span-5 space-y-2">
            {solutionList.map((sol) => {
              const isActive = activeSolutionKey === sol.slug;
              return (
                <button
                  key={sol.slug}
                  onClick={() => setActiveSolutionKey(sol.slug)}
                  onMouseEnter={() => setActiveSolutionKey(sol.slug)}
                  className={`w-full p-4 rounded-xl border transition-all text-left flex items-center justify-between group ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-indigo-400" : "bg-slate-300"}`} />
                    <span className="text-sm font-bold tracking-tight">{sol.title}</span>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? "text-indigo-400 translate-x-0.5" : "text-slate-400 group-hover:text-slate-700"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Industry Blueprint Details */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 text-white shadow-2xl space-y-6 border border-slate-800 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-indigo-400">
                <span>INDUSTRY ARCHITECTURE SPEC</span>
                <span>PRODUCTION GRADE</span>
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white">{activeSolution.title}</h3>
                <p className="text-xs font-mono text-slate-400 mt-1">{activeSolution.subtitle}</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {activeSolution.heroCopy}
              </p>

              {/* Target Audience */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="font-mono text-indigo-300 block mb-1">TARGET AUDIENCE:</span>
                <span className="text-slate-300">{activeSolution.targetAudience}</span>
              </div>

              {/* Key Benefits */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 block">Core Benefits:</span>
                {activeSolution.keyBenefits.map((ben, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/solutions/${activeSolution.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-wider"
                >
                  <span>Explore {activeSolution.title} Platform</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-[10px] text-slate-500 font-mono">NORKL SOLUTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
