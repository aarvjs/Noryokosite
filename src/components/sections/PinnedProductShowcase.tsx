"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  Layout,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Zap
} from "lucide-react";

const AGILE_STEPS = [
  { step: "01", name: "DISCOVER", desc: "Domain analysis, security mapping & workflow audit", icon: Search },
  { step: "02", name: "DESIGN", desc: "Tokenized UI systems & clickable wireframes", icon: Layout },
  { step: "03", name: "BUILD", desc: "Test-driven engineering & API microservices", icon: Code2 },
  { step: "04", name: "TEST", desc: "Penetration testing & Core Web Vitals QA", icon: ShieldCheck },
  { step: "05", name: "ITERATE", desc: "Continuous CI/CD releases & telemetry tuning", icon: RefreshCw },
];

export default function PinnedProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      return () => {
        trigger.kill();
      };
    } else {
      setScrollProgress(0.5);
    }
  }, []);

  // Determine current active state (0: Products, 1: Agile, 2: Scale)
  const activeState = scrollProgress < 0.33 ? 0 : scrollProgress < 0.66 ? 1 : 2;

  // Interpolated progress for step 2 agile animation (0 to 1 inside state 2)
  const agileProgress = Math.min(1, Math.max(0, (scrollProgress - 0.33) / 0.33));

  return (
    <section ref={containerRef} className="relative w-full bg-[#FAF8F5] text-slate-900 min-h-[300vh] border-b border-amber-900/10">
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 py-8 overflow-hidden bg-[#FAF8F5]">
        
        {/* Top Header Bar with NORYOKO SVG Wordmark */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pt-4 border-b border-amber-900/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest font-mono text-slate-900 uppercase">
              NORYOKO
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/40">
              ARCHITECTURAL SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className={activeState === 0 ? "text-amber-700 font-bold" : ""}>01</span>
            <span className="text-slate-300">•</span>
            <span className={activeState === 1 ? "text-amber-700 font-bold" : ""}>02</span>
            <span className="text-slate-300">•</span>
            <span className={activeState === 2 ? "text-amber-700 font-bold" : ""}>03</span>
          </div>
        </div>

        {/* Dynamic Center Scroll Viewport Container */}
        <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center items-center my-4 relative">
          
          {/* ==================================================================== */}
          {/* STATE 01: DIGITAL PRODUCTS */}
          {/* ==================================================================== */}
          <div
            className={`w-full transition-all duration-700 transform ${
              activeState === 0
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Headline & Narrative */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/50 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>STATE 01 — DIGITAL PRODUCTS</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                  DIGITAL PRODUCTS, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                    ENGINEERED WITH INTENT.
                  </span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base max-w-lg font-light leading-relaxed">
                  We turn complex business ideas into scalable digital products, combining strategy, design and engineering.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-700">
                  <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">Multi-Tenant SaaS</span>
                  <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">Next.js Web Apps</span>
                  <span className="px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">Flutter Mobile</span>
                </div>
              </div>

              {/* Right Column: Layered Editorial Product Cards (Entering from LEFT) */}
              <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] w-full flex items-center justify-center">
                {/* Layer 1: Bottom Card */}
                <div
                  className="absolute left-2 top-4 w-[85%] p-4 rounded-2xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.08)] space-y-2 transition-transform duration-700"
                  style={{
                    transform: `translateX(${(0.33 - scrollProgress) * 120}px) rotate(-3deg)`,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-amber-800 border-b border-amber-100 pb-2">
                    <span>FINTECH ENGINE</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">LIVE</span>
                  </div>
                  <div className="text-base font-bold text-slate-900">Strata Corporate Wallet</div>
                  <div className="text-xs text-slate-500 font-light">Real-time ledger processing with multi-currency payout routing.</div>
                </div>

                {/* Layer 2: Top Card (Main Editorial Frame) */}
                <div
                  className="absolute right-2 bottom-4 w-[90%] p-6 rounded-3xl bg-white border border-amber-300/80 shadow-[0_20px_50px_rgba(217,119,6,0.12)] space-y-4 transition-transform duration-700"
                  style={{
                    transform: `translateX(${(0.33 - scrollProgress) * 60}px) rotate(1.5deg)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                        N
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Aura Health & Biometrics</div>
                        <div className="text-[10px] text-slate-500 font-mono">Mobile App Architecture</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      60 FPS NATIVE
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-amber-900">
                      <span>SYNC LATENCY</span>
                      <span className="text-emerald-700 font-bold">12ms • Zero Downtime</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-600 h-full w-[88%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* STATE 02: AGILE METHODOLOGY */}
          {/* ==================================================================== */}
          <div
            className={`w-full transition-all duration-700 transform ${
              activeState === 1
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="space-y-8 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/50 text-xs font-mono">
                <Layers className="w-3.5 h-3.5 text-amber-700" />
                <span>STATE 02 — AGILE METHODOLOGY</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  AGILE BY DESIGN. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                    BUILT TO EVOLVE.
                  </span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
                  From first prototype to production, we work in focused iterations, continuously testing, refining and improving the product.
                </p>
              </div>

              {/* Connected Agile Flow Diagram */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                {AGILE_STEPS.map((item, idx) => {
                  const Icon = item.icon;
                  const stepActive = agileProgress >= idx * 0.2;

                  return (
                    <div
                      key={item.step}
                      className={`p-4 rounded-2xl border text-left space-y-3 transition-all duration-500 ${
                        stepActive
                          ? "bg-white border-amber-400 shadow-[0_10px_25px_rgba(217,119,6,0.15)] scale-105"
                          : "bg-white/60 border-amber-200/60 opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-800">{item.step}</span>
                        <div className={`p-1.5 rounded-lg ${stepActive ? "bg-amber-600 text-white" : "bg-amber-100 text-amber-800"}`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="text-xs font-bold text-slate-900">{item.name}</div>
                      <p className="text-[10px] text-slate-600 font-light leading-snug line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* STATE 03: ENGINEERED FOR SCALE */}
          {/* ==================================================================== */}
          <div
            className={`w-full transition-all duration-700 transform ${
              activeState === 2
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              {/* Left Column: Headline */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/50 text-xs font-mono">
                  <Cpu className="w-3.5 h-3.5 text-amber-700" />
                  <span>STATE 03 — ENGINEERED FOR SCALE</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
                  ENGINEERED FOR SCALE. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                    READY FOR WHAT'S NEXT.
                  </span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                  Architecture, performance and reliability designed into every layer of the product.
                </p>

                <div className="space-y-2 pt-2 border-t border-amber-900/10">
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Multi-Region AWS & Cloud Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>SOC2 Type II & OWASP Security Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Sub-Second Response Times & High Concurrency</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero 3D Dimensional Technology Visual */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-md p-6 rounded-3xl bg-white border border-amber-300/80 shadow-[0_30px_80px_rgba(217,119,6,0.18)] space-y-5 relative overflow-hidden group">
                  {/* Subtle Champagne Golden Ambient Light Glow */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

                  {/* Header Bar */}
                  <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-amber-700" />
                      <span className="text-xs font-bold text-slate-900">NORYOKO CLOUD NODE</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                      99.99% UPTIME
                    </span>
                  </div>

                  {/* Layered Metric Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                      <div className="text-[10px] font-mono text-amber-900">EDGE LATENCY</div>
                      <div className="text-xl font-bold text-slate-900">11.8 ms</div>
                      <div className="text-[9px] text-slate-500 font-mono">Global CDN Edge</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1">
                      <div className="text-[10px] font-mono text-amber-900">THROUGHPUT</div>
                      <div className="text-xl font-bold text-amber-800">50,000 req/s</div>
                      <div className="text-[9px] text-slate-500 font-mono">Zero Loss Queue</div>
                    </div>
                  </div>

                  {/* Glass / Metal Feature Bar */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-slate-900 text-white space-y-2 shadow-md">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>ENTERPRISE BACKEND ARCHITECTURE</span>
                      <Activity className="w-4 h-4 text-amber-300" />
                    </div>
                    <div className="text-[11px] text-amber-100 font-light">
                      Automated blue-green deployments, containerized Kubernetes clusters & encrypted storage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Pinned Progress Indicator Bar */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between border-t border-amber-900/10 pt-4 font-mono text-xs">
          <div className="flex items-center gap-4 text-slate-600">
            <span className={activeState === 0 ? "text-amber-800 font-bold" : ""}>01. PRODUCTS</span>
            <span className={activeState === 1 ? "text-amber-800 font-bold" : ""}>02. METHODOLOGY</span>
            <span className={activeState === 2 ? "text-amber-800 font-bold" : ""}>03. SCALE</span>
          </div>

          <div className="w-32 bg-amber-200/60 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-amber-600 h-full transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
