"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#0B0F19] text-white overflow-hidden border-b border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-indigo-300 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Initiate NORYOKO Engineering Project</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          LET'S BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400">
            WHAT'S NEXT.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Have a product idea, complex business challenge, or digital system in mind? Talk directly with our senior architecture team today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-water-fill inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-indigo-600/30 transition-all"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Start a Conversation</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </Link>
          <Link
            href="/services"
            className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:text-slate-900 text-white font-medium text-xs tracking-wider uppercase border border-white/15 backdrop-blur-sm"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Explore Capabilities</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
