"use client";

import React from "react";
import { TECH_STRIP_ITEMS } from "@/data/technologies";
import { Cpu } from "lucide-react";

export default function TechMarquee() {
  return (
    <section className="w-full py-12 bg-white border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 uppercase">
          <Cpu className="w-3.5 h-3.5 text-indigo-600" />
          <span>Core Technology Infrastructure & Stack</span>
        </div>
        <div className="text-xs font-mono text-slate-400 hidden sm:block">
          Production Ecosystem
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap py-2">
          {TECH_STRIP_ITEMS.concat(TECH_STRIP_ITEMS).map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-sm font-medium tracking-wide shadow-xs hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
