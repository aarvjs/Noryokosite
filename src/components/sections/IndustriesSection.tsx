"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SOLUTIONS_DATA } from "@/data/solutions";
import { ArrowUpRight, Building2, CheckCircle, GraduationCap, HeartPulse, Home, ShoppingBag, Sparkles } from "lucide-react";

// Curated high-resolution editorial industry images matching prompt requirements
const INDUSTRY_VISUALS: Record<string, { image: string; tag: string; title: string; subtitle: string; desc: string; audience: string; benefits: string[] }> = {
  startups: {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    tag: "FINTECH & BANKING",
    title: "FinTech & Digital Banking Platforms",
    subtitle: "High-throughput ledger engines, wallet microservices & multi-currency APIs.",
    desc: "We engineer zero-latency financial ledger backends, automated payment gateways, PCI-DSS compliance frameworks, and real-time transaction telemetry.",
    audience: "Growth FinTechs, Neobanks, Payment Processors & Crypto Wallets",
    benefits: [
      "Sub-15ms Payment Gateway API Routing",
      "PCI-DSS & SOC2 Security Audit Readiness",
      "Real-time WebSocket Transaction Telemetry"
    ]
  },
  "small-business": {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    tag: "HEALTHCARE & TELEHEALTH",
    title: "Healthcare & HIPAA Telehealth Systems",
    subtitle: "Secure patient portals, video consultation engines & EHR data pipelines.",
    desc: "HIPAA-compliant telehealth platforms featuring encrypted video stream channels, electronic health record (EHR) integrations, and patient scheduling.",
    audience: "Telehealth Networks, Medical Clinics, Biotech & Digital Health Startups",
    benefits: [
      "100% HIPAA-Compliant Encrypted Patient Data",
      "WebRTC Low-Latency Consultation Video Stream",
      "HL7 / FHIR Electronic Health Record Integration"
    ]
  },
  enterprise: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tag: "E-COMMERCE & RETAIL",
    title: "Headless E-Commerce & Retail Commerce",
    subtitle: "Sub-second product catalog search, multi-currency checkout & inventory sync.",
    desc: "Headless commerce architectures engineered with Next.js App Router, instant Algolia/Elasticsearch indexing, and custom checkout funnels.",
    audience: "Global D2C Brands, Omnichannel Retailers & Multi-Vendor Marketplaces",
    benefits: [
      "Sub-Second Page Loads & Instant Catalog Search",
      "Headless Shopify / Custom Commerce Architecture",
      "Multi-Currency Dynamic Localized Checkout"
    ]
  },
  ecommerce: {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    tag: "LOGISTICS & SUPPLY CHAIN",
    title: "Logistics & Fleet Dispatch Automation",
    subtitle: "Real-time GPS vehicle tracking, route optimization & warehouse ERPs.",
    desc: "Automated logistics management platforms featuring live vehicle telematics, route optimization algorithms, and inventory warehouse controls.",
    audience: "Freight Carriers, Logistics Operators & Supply Chain Managers",
    benefits: [
      "Real-Time Mapbox Fleet GPS Telemetry",
      "AI-Powered Route Optimization & Fuel Savings",
      "Automated Warehouse WMS & ERP Sync"
    ]
  },
  education: {
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    tag: "EDTECH & LEARNING",
    title: "Interactive EdTech & LMS Platforms",
    subtitle: "Scalable video learning portals, automated grading & student dashboards.",
    desc: "Digital learning platforms engineered for high-concurrency video streaming, interactive quizzes, automated certification, and instructor tools.",
    audience: "EdTech Companies, Universities, K-12 Academies & Corporate Learning",
    benefits: [
      "High-Concurrency HLS Video Stream Distribution",
      "Automated Quiz Evaluation & Instant Certificate Engine",
      "Student Engagement Analytics & Progress Dashboards"
    ]
  },
  healthcare: {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    tag: "REAL ESTATE & PROPTECH",
    title: "PropTech & Real Estate Portals",
    subtitle: "MLS listing sync engines, interactive map search & tenant management.",
    desc: "Next-generation real estate portals with instant property search, MLS feed integration, virtual 3D tour embeds, and digital lease workflows.",
    audience: "Real Estate Agencies, Property Developers & Asset Managers",
    benefits: [
      "Instant MLS / RETS Listing Sync Pipelines",
      "Interactive Mapbox Property Spatial Search",
      "Digital Tenant Lease Application & Signature Engine"
    ]
  }
};

export default function IndustriesSection() {
  const [activeKey, setActiveKey] = useState<string>("startups");
  const solutionList = Object.values(SOLUTIONS_DATA);
  const currentVisual = INDUSTRY_VISUALS[activeKey] || INDUSTRY_VISUALS["startups"];

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF8F5] text-slate-900 border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-amber-200/60 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-800 font-bold uppercase">
              // INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              TARGETED INDUSTRY PLATFORMS
            </h2>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 uppercase tracking-wider mt-4 md:mt-0"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Editorial Layout (LEFT: Category Switcher, RIGHT: Industry Visual & Blueprint) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Vertical Industry Category Selector */}
          <div className="lg:col-span-5 space-y-3">
            {solutionList.map((sol) => {
              const isActive = activeKey === sol.slug;
              return (
                <button
                  key={sol.slug}
                  onClick={() => setActiveKey(sol.slug)}
                  onMouseEnter={() => setActiveKey(sol.slug)}
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? "bg-white border-amber-400 shadow-[0_10px_30px_rgba(217,119,6,0.12)] scale-[1.02]"
                      : "bg-white/70 border-amber-200/60 hover:bg-white hover:border-amber-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isActive ? "bg-amber-600" : "bg-slate-300"}`} />
                    <div>
                      <span className={`text-sm font-bold tracking-tight transition-colors ${isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>
                        {sol.title}
                      </span>
                      <p className="text-[11px] text-slate-500 font-light line-clamp-1">
                        {sol.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? "text-amber-800 translate-x-0.5" : "text-slate-400 opacity-0 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Large Premium Visual & Detail Spec Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/80 shadow-[0_20px_50px_rgba(217,119,6,0.08)] space-y-6 animate-in fade-in duration-300 relative overflow-hidden">
              
              {/* Image Preview Canvas */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-amber-200/60 group">
                <img
                  src={currentVisual.image}
                  alt={currentVisual.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-amber-600 text-white font-bold tracking-widest uppercase">
                    {currentVisual.tag}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight text-white">
                    {currentVisual.title}
                  </h4>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {currentVisual.desc}
                </p>
              </div>

              {/* Target Audience */}
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60 text-xs">
                <span className="font-mono text-amber-900 font-bold block mb-1">TARGET CLIENTS:</span>
                <span className="text-slate-700">{currentVisual.audience}</span>
              </div>

              {/* Core Benefits */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono text-slate-500 block">Engineering Deliverables:</span>
                {currentVisual.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <Link
                  href={`/solutions/${activeKey}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors uppercase tracking-wider"
                >
                  <span>Explore {currentVisual.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <span className="text-[10px] text-slate-400 font-mono">NORYOKO SOLUTIONS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
