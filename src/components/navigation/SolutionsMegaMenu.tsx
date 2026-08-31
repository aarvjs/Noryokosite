"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOLUTIONS_NAV } from "@/data/navigation";
import { ArrowUpRight, Building2, GraduationCap, HeartPulse, Home, ShoppingBag, Zap } from "lucide-react";

interface SolutionsMegaMenuProps {
  onClose: () => void;
}

export default function SolutionsMegaMenu({ onClose }: SolutionsMegaMenuProps) {
  const [activeSlug, setActiveSlug] = useState<string>("startups");

  const previews: Record<string, { title: string; subtitle: string; tag: string }> = {
    "startups": {
      title: "Venture Founders & Rapid MVPs",
      subtitle: "Ship zero-compromise production MVPs in 6 to 12 weeks.",
      tag: "FOUNDER PLATFORM"
    },
    "small-business": {
      title: "Digital Transformation & Automation",
      subtitle: "Replace slow legacy manual workflows with custom internal tools.",
      tag: "SMB AUTOMATION"
    },
    "enterprise": {
      title: "Enterprise Multi-Tenant Systems",
      subtitle: "High-load microservice architectures with SOC2 security compliance.",
      tag: "ENTERPRISE GRADE"
    },
    "ecommerce": {
      title: "Headless E-Commerce Storefronts",
      subtitle: "Sub-second product catalog search & instant multi-currency checkout.",
      tag: "COMMERCE ENGINE"
    },
    "education": {
      title: "EdTech & Interactive Learning",
      subtitle: "Live WebRTC video classrooms & automated assessment grading.",
      tag: "EDTECH PLATFORM"
    },
    "healthcare": {
      title: "HIPAA-Compliant HealthTech",
      subtitle: "Encrypted patient portals & telemedicine video consultations.",
      tag: "HEALTHCARE PLATFORM"
    },
    "real-estate": {
      title: "PropTech & Property Listing Systems",
      subtitle: "Automated MLS sync feeds & interactive Mapbox property search.",
      tag: "PROPTECH PLATFORM"
    }
  };

  const activePreview = previews[activeSlug] || previews["startups"];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-full max-w-5xl p-6 rounded-3xl bg-slate-950 text-white shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side (40% Width): Dynamic Visual Preview */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-black border border-white/10 flex flex-col justify-between relative overflow-hidden min-h-[300px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">
              {activePreview.tag}
            </span>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          </div>

          <div className="space-y-2 my-auto py-4">
            <h4 className="text-xl font-bold tracking-tight text-white">
              {activePreview.title}
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {activePreview.subtitle}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>NORYOKO BLUEPRINT</span>
            <span className="text-indigo-400 font-semibold">CUSTOM TAILORED</span>
          </div>
        </div>

        {/* Right Side (60% Width): Solutions Items List */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SOLUTIONS_NAV.map((item) => {
            const slug = item.href.replace("/solutions/", "");
            const isActive = activeSlug === slug;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                onMouseEnter={() => setActiveSlug(slug)}
                className={`p-3 rounded-xl transition-all flex flex-col justify-between group ${
                  isActive ? "bg-white/10 border border-indigo-500/40" : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold transition-colors ${isActive ? "text-indigo-300" : "text-white group-hover:text-indigo-300"}`}>
                    {item.label}
                  </span>
                  <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "text-indigo-400 translate-x-0.5" : "text-slate-500 opacity-0 group-hover:opacity-100"}`} />
                </div>
                {item.description && (
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-light">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
