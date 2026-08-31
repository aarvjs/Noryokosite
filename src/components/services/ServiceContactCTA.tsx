"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageSquare, Sparkles } from "lucide-react";

interface ServiceContactCTAProps {
  serviceTitle: string;
}

export default function ServiceContactCTA({ serviceTitle }: ServiceContactCTAProps) {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF8F5] text-slate-900 border-t border-amber-200/80 relative overflow-hidden">
      {/* Soft Ambient Warm Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        
        {/* Service Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>INITIATE {serviceTitle.toUpperCase()} ARCHITECTURE</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
          READY TO BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
            YOUR NEXT DIGITAL PRODUCT?
          </span>
        </h2>

        {/* Description */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Partner directly with NORYOKO senior software architects to scope your {serviceTitle.toLowerCase()} platform, outline system deliverables, and launch with zero technical debt.
        </p>

        {/* Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-water-fill inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </Link>
          <Link
            href="/contact"
            className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Talk to Our Team</span>
            <MessageSquare className="w-4 h-4 text-amber-700 relative z-10" />
          </Link>
        </div>

        {/* Direct Contact & Location Info */}
        <div className="pt-8 border-t border-amber-200/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-amber-700" />
            <a href="mailto:hello@noryoko.com" className="hover:text-amber-800 transition-colors font-bold">
              hello@noryoko.com
            </a>
          </div>
          <span className="text-amber-300">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-700" />
            <span>Lucknow, Uttar Pradesh, India</span>
          </div>
          <span className="text-amber-300">•</span>
          <span className="text-amber-800 font-bold">Response within 24h</span>
        </div>

      </div>
    </section>
  );
}
