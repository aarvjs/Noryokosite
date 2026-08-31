"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Cpu,
  Globe,
  Layout,
  Palette,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

// Carousel Hero Images (Curated high-end editorial tech photography matching prompt specification)
const HERO_CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop", // Modern Software Engineering Studio
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop", // Code Architecture & Developer Workstation
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop", // Global Cloud Infrastructure System
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop", // Digital Product Strategy
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1600&auto=format&fit=crop"  // Mobile Touch UX & Interface Design
];

// Circular Service Categories Data
const CIRCULAR_SERVICES = [
  { name: "SOFTWARE", icon: Cpu, desc: "SaaS & Core Engines", href: "/services/software-development" },
  { name: "WEB", icon: Globe, desc: "Next.js Web Applications", href: "/services/web-development" },
  { name: "MOBILE APPS", icon: Smartphone, desc: "iOS & Android Platforms", href: "/services/mobile-app-development" },
  { name: "BUSINESS WEBSITES", icon: Layout, desc: "Editorial Flagships", href: "/services/web-development" },
  { name: "AI & ML", icon: Bot, desc: "Autonomous AI Agents", href: "/services/ai-ml" },
  { name: "CLOUD & DEVOPS", icon: Cloud, desc: "AWS & Kubernetes IaC", href: "/services/cloud-devops" },
  { name: "SEO & DIGITAL GROWTH", icon: TrendingUp, desc: "Technical SEO & Conversions", href: "/services/seo" },
  { name: "UI/UX & DESIGN", icon: Palette, desc: "Product Design Systems", href: "/services/ui-ux-design" },
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto crossfade image carousel interval (5 seconds)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900">
      
      {/* ==================================================================== */}
      {/* 1. ABOUT HERO — PREMIUM CINEMATIC IMAGE CAROUSEL */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Carousel Background Images with Ken Burns Zoom & Smooth Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {HERO_CAROUSEL_IMAGES.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-60 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={imgUrl}
                alt="NORYOKO Engineering Studio"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Warm Neutral Overlay for Crisp Readable Typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-slate-950/60 to-slate-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ABOUT NORYOKO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            ENGINEERING DIGITAL PRODUCTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
              THAT MOVE BUSINESSES FORWARD.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            We design, engineer and scale software, websites, mobile applications and digital systems for ambitious businesses.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-600/30"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <Link
              href="/services"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:text-slate-900 text-white font-medium text-xs tracking-wider uppercase border border-white/20 backdrop-blur-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Explore Capabilities</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </Link>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {HERO_CAROUSEL_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? "w-8 bg-amber-400" : "w-2 bg-white/30"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* 2. COMPANY PROOF SECTION — 100+ PROJECTS & 100+ CLIENTS */}
      {/* ==================================================================== */}
      <section className="w-full py-24 sm:py-32 bg-[#FAF8F5] text-slate-900 border-b border-amber-200/80 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-16 text-center">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              // COMPANY PROOF & TRACK RECORD
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              PROVEN RESULTS. PRODUCTION ENGINEERING.
            </h2>
          </div>

          {/* Large Visual Stat Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* Stat 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/80 shadow-[0_15px_40px_rgba(217,119,6,0.08)] space-y-2 text-center group hover:border-amber-400 transition-all duration-300">
              <div className="text-6xl sm:text-8xl font-extrabold font-mono text-amber-700 tracking-tight group-hover:scale-105 transition-transform">
                100+
              </div>
              <div className="text-sm font-bold font-mono tracking-widest text-slate-900 uppercase pt-2">
                PROJECTS DELIVERED
              </div>
              <p className="text-xs text-slate-500 font-light">
                Enterprise software, web portals, mobile apps & AI systems.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/80 shadow-[0_15px_40px_rgba(217,119,6,0.08)] space-y-2 text-center group hover:border-amber-400 transition-all duration-300">
              <div className="text-6xl sm:text-8xl font-extrabold font-mono text-amber-700 tracking-tight group-hover:scale-105 transition-transform">
                100+
              </div>
              <div className="text-sm font-bold font-mono tracking-widest text-slate-900 uppercase pt-2">
                CLIENTS & BUSINESSES SERVED
              </div>
              <p className="text-xs text-slate-500 font-light">
                Ambitious startups, mid-market leaders & enterprise brands.
              </p>
            </div>
          </div>

          {/* Supporting Copy */}
          <div className="max-w-2xl mx-auto pt-4">
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              From websites and mobile applications to enterprise software, cloud infrastructure, AI and digital growth systems — we build technology that businesses can rely on.
            </p>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3. CIRCULAR SERVICES SLIDER */}
      {/* ==================================================================== */}
      <section className="w-full py-24 bg-white text-slate-900 border-b border-amber-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // CAPABILITIES SPECTRUM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            OUR DIGITAL DISCIPLINES
          </h2>
          <p className="text-xs text-slate-500 font-light max-w-md mx-auto">
            Drag or hover to explore NORYOKO's core engineering capabilities.
          </p>
        </div>

        {/* Circular Slider Continuous Marquee */}
        <div className="w-full flex items-center overflow-x-auto no-scrollbar py-6 px-4 gap-6 sm:gap-8 justify-start sm:justify-center">
          {CIRCULAR_SERVICES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#FAF8F5] border border-amber-200/80 shadow-md flex flex-col justify-center items-center text-center p-3 transition-all duration-300 hover:scale-110 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer"
              >
                <div className="p-2.5 rounded-full bg-amber-100/80 text-amber-900 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[10px] sm:text-xs font-bold tracking-tight text-slate-900 mt-2 font-mono uppercase group-hover:text-amber-800 transition-colors">
                  {item.name}
                </div>
                <div className="text-[8px] text-slate-500 line-clamp-1 font-light mt-0.5">
                  {item.desc}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
