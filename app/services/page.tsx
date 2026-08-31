"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { ArrowRight, ArrowUpRight, Bot, Cloud, Cpu, Globe, Search, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// Service Hero Image Carousel
const SERVICES_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
];

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const servicesList = Object.values(SERVICES_DATA);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % SERVICES_HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900">
      
      {/* ==================================================================== */}
      {/* SERVICES HERO — CINEMATIC IMAGE CAROUSEL WITH WARM OFF-WHITE OVERLAY */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {SERVICES_HERO_IMAGES.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-30 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={imgUrl}
                alt="NORYOKO Engineering Services"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Warm Cream Translucent Overlay for Crisp Readable Typography (NO DARK BLUE) */}
          <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>WHAT WE BUILD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            DIGITAL PRODUCTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
              ENGINEERED FOR SCALE.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Software, websites, mobile applications, AI systems and cloud infrastructure built around real operational needs.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <a
              href="#capabilities-grid"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">View Capabilities</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </a>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {SERVICES_HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? "w-8 bg-amber-700" : "w-2 bg-amber-200"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SERVICES GRID SECTION */}
      {/* ==================================================================== */}
      <section id="capabilities-grid" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-amber-200/80">
        <div className="space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // FULL SPECTRUM DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            ENGINEERING CAPABILITIES
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            Every digital product, platform, and infrastructure system is custom-built by senior architects to drive operational growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.slug}
              className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] flex flex-col justify-between hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 font-bold border border-amber-300/40 uppercase">
                    {service.slug.replace("-", " ")}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-xs font-mono text-amber-800 font-medium">
                  {service.tagline}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-slate-700 border border-amber-200/60">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-bold text-amber-800 hover:text-amber-900 uppercase tracking-wider"
                >
                  Explore →
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
