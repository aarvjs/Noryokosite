"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Smartphone, Cpu, Sparkles } from "lucide-react";

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
        scrub: 0.1, // Fast, ultra-responsive scrub
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

  // EXACTLY 2 SCROLL SCENES (0: Scene 01 Wordmark & Statement, 1: Scene 02 AI Product Visuals)
  const activeScene = scrollProgress < 0.5 ? 0 : 1;

  return (
    <section ref={containerRef} className="relative w-full bg-[#FAF8F5] text-slate-900 min-h-[150vh] border-b border-amber-200/80">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between items-center px-4 sm:px-8 py-6 overflow-hidden bg-[#FAF8F5]">
        
        {/* Top Header Tag */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between pt-4 border-b border-amber-200/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono tracking-widest text-amber-800 font-bold uppercase">
              // SIGNATURE SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-600">
            <span className={activeScene === 0 ? "text-amber-800 font-bold" : "text-slate-400"}>01. DIGITAL PRODUCTS</span>
            <span className="text-amber-300">•</span>
            <span className={activeScene === 1 ? "text-amber-800 font-bold" : "text-slate-400"}>02. SHOWCASE</span>
          </div>
        </div>

        {/* Center Container */}
        <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center my-2 relative">
          
          {/* ==================================================================== */}
          {/* SCENE 01 — DIGITAL PRODUCTS & NORYOKO SVG WORDMARK */}
          {/* ==================================================================== */}
          <div
            className={`w-full text-center space-y-6 transition-all duration-400 ease-out transform ${
              activeScene === 0
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            {/* Bespoke NORYOKO SVG Wordmark (~68% Viewport Width) */}
            <div className="w-full flex justify-center py-2 overflow-hidden">
              <svg
                className="w-[68vw] max-w-4xl h-auto text-slate-900 transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${1 + scrollProgress * 0.04}) translateY(${scrollProgress * -10}px)`,
                }}
                viewBox="0 0 850 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="100"
                  fontWeight="900"
                  letterSpacing="16"
                  fontFamily="var(--font-geist-sans), system-ui, sans-serif"
                >
                  NORYOKO
                </text>
              </svg>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              DIGITAL PRODUCTS, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                ENGINEERED WITH INTENT.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We turn complex business requirements into scalable, resilient digital products, combining strategic architecture, bespoke UI design, and high-performance engineering.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-slate-700">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-amber-200/80 text-amber-900 font-medium shadow-sm">
                Enterprise SaaS Platforms
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-amber-200/80 text-amber-900 font-medium shadow-sm">
                Next.js Web Systems
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-amber-200/80 text-amber-900 font-medium shadow-sm">
                60fps Mobile Apps
              </span>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* SCENE 02 — REAL AI-GENERATED PRODUCT VISUAL SHOWCASE */}
          {/* ==================================================================== */}
          <div
            className={`w-full transition-all duration-400 ease-out transform ${
              activeScene === 1
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 translate-y-8 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="space-y-6 text-center max-w-6xl mx-auto">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                  // PRODUCTION PRODUCT VISUALS
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  PRODUCTION-GRADE SOFTWARE & DIGITAL SYSTEMS
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light max-w-xl mx-auto">
                  High-performance web platforms, 60fps mobile applications, and enterprise SaaS cloud dashboards.
                </p>
              </div>

              {/* 3 Large AI-Generated Product Mockup Visuals (Entering from Left & Right) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center pt-2">
                
                {/* Visual 1 (LEFT): AI Web Application Portal Mockup Image */}
                <div
                  className="rounded-3xl bg-white border border-amber-200/80 shadow-[0_20px_50px_rgba(217,119,6,0.12)] overflow-hidden transition-transform duration-400 group"
                  style={{
                    transform: `translateX(${(0.5 - scrollProgress) * 120}px) rotate(-1.5deg)`,
                  }}
                >
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                    <img
                      src="/images/showcase_web.jpg"
                      alt="Next.js Enterprise Web Platform"
                      className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white text-left space-y-0.5">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-600 font-bold uppercase">
                        WEB ARCHITECTURE
                      </span>
                      <div className="text-sm font-bold text-white">Next.js Web Portal</div>
                    </div>
                  </div>
                </div>

                {/* Visual 2 (CENTER STAGE): AI Mobile App Mockup Image */}
                <div className="rounded-3xl bg-white border border-amber-300 shadow-[0_30px_70px_rgba(217,119,6,0.18)] overflow-hidden relative z-20 scale-105 group">
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                    <img
                      src="/images/showcase_mobile.jpg"
                      alt="Flutter 60fps Native Mobile App"
                      className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-left space-y-0.5">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-600 font-bold uppercase">
                        60 FPS NATIVE TOUCH
                      </span>
                      <div className="text-base font-bold text-white">Flutter Mobile UX</div>
                    </div>
                  </div>
                </div>

                {/* Visual 3 (RIGHT): AI SaaS Cloud Analytics Dashboard Mockup Image */}
                <div
                  className="rounded-3xl bg-white border border-amber-200/80 shadow-[0_20px_50px_rgba(217,119,6,0.12)] overflow-hidden transition-transform duration-400 group"
                  style={{
                    transform: `translateX(${(scrollProgress - 0.5) * 120}px) rotate(1.5deg)`,
                  }}
                >
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                    <img
                      src="/images/showcase_saas.jpg"
                      alt="SaaS Cloud Analytics Dashboard"
                      className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white text-left space-y-0.5">
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-600 font-bold uppercase">
                        SAAS ENGINE
                      </span>
                      <div className="text-sm font-bold text-white">SaaS Cloud Telemetry</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
