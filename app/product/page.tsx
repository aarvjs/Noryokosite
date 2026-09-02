"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import LaptopFrame from "@/components/devices/LaptopFrame";
import PhoneFrame from "@/components/devices/PhoneFrame";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  Globe,
  Heart,
  Layers,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  User,
  Wallet
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// 5 Mobile Showcase Websites
const MOBILE_SHOWCASE = [
  { id: "01", name: "Coaching Platform", url: "https://couching-mu.vercel.app/", category: "Education & Coaching" },
  { id: "02", name: "Salon & Wellness", url: "https://salonaarvjs.vercel.app/", category: "Beauty & Lifestyle" },
  { id: "03", name: "Jewellery Flagship", url: "https://jewellery-website-neon.vercel.app/", category: "Luxury Retail" },
  { id: "04", name: "School Academy", url: "https://school-website-aarvjs.vercel.app/", category: "Institutional K-12" },
  { id: "05", name: "Healthcare Clinic", url: "https://clinic-website-aarvjs.vercel.app/", category: "Medical & Clinical" },
];

// 3 Native App Products
const APP_PRODUCTS = [
  {
    name: "Barber & Salon App",
    desc: "Bespoke appointment scheduling, stylist roster management, and instant booking workflows for modern salons.",
    image: "/images/app_barber_salon.jpg",
    tag: "FLUTTER 60 FPS • iOS & ANDROID",
  },
  {
    name: "Food Ordering App",
    desc: "Real-time restaurant culinary menu, live Mapbox GPS order tracking, and instant multi-wallet checkout.",
    image: "/images/app_food_ordering.jpg",
    tag: "LIVE TELEMETRY • HIGH CONCURRENCY",
  },
  {
    name: "Student Local Market",
    desc: "Hyperlocal campus marketplace engineered for peer-to-peer textbook, electronics, and dorm gear trading.",
    image: "/images/app_student_market.jpg",
    tag: "CAMPUS NETWORK • P2P WALLET",
  },
];

export default function ProductPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900 font-sans">
      
      {/* ==================================================================== */}
      {/* HERO SECTION — BALANCED HERO WITH DUMMY APP MOCKUPS */}
      {/* ==================================================================== */}
      <section className="relative w-full pt-32 pb-20 px-4 sm:px-8 border-b border-amber-200/80 overflow-hidden bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>NORYOKO PRODUCT STUDIO</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              PRODUCTS BUILT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                FOR THE REAL WORLD.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-xl">
              We design and ship production-grade digital products — from high-concurrency web systems and multi-tenant SaaS to native 60fps mobile applications.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#laptop-showcase"
                className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
              >
                <div className="btn-water-bg" />
                <span className="relative z-10">Explore Live Products</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </a>
              <Link
                href="/contact"
                className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
              >
                <div className="btn-water-bg" />
                <span className="relative z-10">Start a Project</span>
                <ArrowUpRight className="w-4 h-4 relative z-10" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: 3 Balanced Dummy Mobile App UI Screens */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className={`relative w-full max-w-md h-[360px] sm:h-[400px] flex items-center justify-center transition-all duration-700 ease-out transform ${
                mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
              }`}
            >
              {/* Left Phone */}
              <div className="absolute left-2 sm:left-4 top-6 z-10 w-32 sm:w-38 h-56 sm:h-64 rounded-3xl bg-white border border-amber-200 shadow-xl overflow-hidden transform -rotate-6 transition-all duration-500 hover:rotate-0 hover:z-30 p-2.5 space-y-2 text-left">
                <div className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="w-3 h-3 text-amber-700" />
                    <span className="text-[9px] font-bold text-slate-900">STORE</span>
                  </div>
                  <span className="text-[7px] font-mono px-1 py-0.5 rounded bg-amber-100 text-amber-900 font-bold">LIVE</span>
                </div>

                <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/60 space-y-1">
                  <div className="text-[8px] font-bold text-slate-900">Artisan Leather Wallet</div>
                  <div className="text-[7px] text-slate-500">$64.00 • In Stock</div>
                  <div className="w-full bg-amber-200 h-1 rounded-full overflow-hidden mt-1">
                    <div className="bg-amber-600 h-full w-[80%]" />
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-amber-50/60 border border-amber-100 text-[7px] text-slate-600">
                  Sub-second checkout & Apple Pay ready
                </div>
              </div>

              {/* Center Phone */}
              <div className="relative z-30 w-38 sm:w-46 h-64 sm:h-74 rounded-3xl bg-white border-2 border-amber-400 shadow-[0_20px_50px_rgba(217,119,6,0.18)] overflow-hidden transition-transform duration-500 hover:scale-105 p-3 space-y-2.5 text-left">
                <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                  <div className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-amber-700" />
                    <span className="text-[10px] font-bold text-slate-900">AURA HEALTH</span>
                  </div>
                  <Bell className="w-3 h-3 text-slate-400" />
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                  <div className="flex items-center justify-between text-[8px] font-mono text-amber-900 font-bold">
                    <span>HEART RATE PULSE</span>
                    <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500 animate-pulse" />
                  </div>
                  <div className="text-sm font-bold text-slate-900">72 BPM • Optimal</div>
                  <div className="w-full bg-amber-200 h-1 rounded-full overflow-hidden mt-1">
                    <div className="bg-amber-600 h-full w-[88%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 text-[8px]">
                  <div className="p-1.5 rounded-lg bg-amber-50/70 border border-amber-100">
                    <span className="text-slate-500 block">STEPS</span>
                    <span className="font-bold text-slate-900">8,420</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-amber-50/70 border border-amber-100">
                    <span className="text-slate-500 block">CALORIES</span>
                    <span className="font-bold text-amber-800">540 kcal</span>
                  </div>
                </div>

                <div className="w-full py-1.5 rounded-lg bg-amber-700 text-white text-[8px] font-bold text-center uppercase tracking-wider shadow-sm">
                  60 FPS NATIVE TOUCH
                </div>
              </div>

              {/* Right Phone */}
              <div className="absolute right-2 sm:right-4 top-6 z-10 w-32 sm:w-38 h-56 sm:h-64 rounded-3xl bg-white border border-amber-200 shadow-xl overflow-hidden transform rotate-6 transition-all duration-500 hover:rotate-0 hover:z-30 p-2.5 space-y-2 text-left">
                <div className="flex items-center justify-between border-b border-amber-100 pb-1.5">
                  <div className="flex items-center gap-1">
                    <Wallet className="w-3 h-3 text-amber-700" />
                    <span className="text-[9px] font-bold text-slate-900">STRATA PAY</span>
                  </div>
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </div>

                <div className="p-2 rounded-xl bg-amber-50 border border-amber-200/60 space-y-0.5">
                  <div className="text-[7px] text-amber-900 font-mono">TOTAL BALANCE</div>
                  <div className="text-xs font-bold text-slate-900">$14,280.50</div>
                </div>

                <div className="space-y-1 text-[7px] font-mono">
                  <div className="p-1 rounded bg-amber-50/60 border border-amber-100 flex justify-between">
                    <span>Cloud API</span>
                    <span className="text-slate-900 font-bold">-$42.00</span>
                  </div>
                  <div className="p-1 rounded bg-amber-50/60 border border-amber-100 flex justify-between">
                    <span>Payout Sync</span>
                    <span className="text-emerald-700 font-bold">+$2,400</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 3-LAPTOP SHOWCASE — REALISTIC LAPTOP FRAMES (LIKE HOME PAGE) IN HORIZONTAL ROW */}
      {/* ==================================================================== */}
      <section id="laptop-showcase" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 space-y-16 border-b border-amber-200/80">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // LIVE DESKTOP PORTALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            PRODUCTION WEB SYSTEMS
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Interact directly with live web platforms engineered for speed, responsiveness, and zero downtime.
          </p>
        </div>

        {/* 3 Metallic Laptops (Same as Home Page LaptopFrame) in 1 Horizontal Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LAPTOP 01: E-Commerce Platform */}
          <div className="space-y-4 flex flex-col justify-between group">
            <LaptopFrame title="E-Commerce Platform">
              <div className="w-full h-full bg-slate-950 overflow-hidden relative">
                <iframe
                  src="https://ecommerce-one-fawn-42.vercel.app/"
                  title="E-Commerce Platform Preview"
                  className="w-full h-full border-0 pointer-events-auto overflow-auto"
                  loading="lazy"
                />
              </div>
            </LaptopFrame>

            <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-2">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  E-Commerce Platform
                </span>
                <a
                  href="https://ecommerce-one-fawn-42.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-900"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Flagship E-Commerce Web Portal</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Headless shopping architecture with instant catalog search, sub-second page loads, and multi-currency checkout.
              </p>
            </div>
          </div>

          {/* LAPTOP 02: ProRoute Fleet Monitoring */}
          <div className="space-y-4 flex flex-col justify-between group">
            <LaptopFrame title="ProRoute Fleet Telematics">
              <div className="w-full h-full bg-slate-950 overflow-hidden relative">
                <iframe
                  src="https://proroute.in/"
                  title="ProRoute Fleet System Preview"
                  className="w-full h-full border-0 pointer-events-auto overflow-auto"
                  loading="lazy"
                />
              </div>
            </LaptopFrame>

            <div className="p-6 rounded-3xl bg-white border border-amber-300 shadow-[0_15px_35px_rgba(217,119,6,0.1)] space-y-2">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  ProRoute Fleet Telematics
                </span>
                <a
                  href="https://proroute.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-900"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Secure your Fleet with India's Best Dashcam Based Fleet Monitoring System
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Real-time tracking, AI alerts, night vision & 4G connectivity — complete vehicle protection solution.
              </p>
            </div>
          </div>

          {/* LAPTOP 03: Guruji Trimbakeshwar */}
          <div className="space-y-4 flex flex-col justify-between group">
            <LaptopFrame title="Guruji Trimbakeshwar Portfolio">
              <div className="w-full h-full bg-slate-950 overflow-hidden relative">
                <iframe
                  src="https://gurujitrimbakeshwar.com/"
                  title="Guruji Trimbakeshwar Portfolio"
                  className="w-full h-full border-0 pointer-events-auto overflow-auto"
                  loading="lazy"
                />
              </div>
            </LaptopFrame>

            <div className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-2">
              <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  Digital Portfolio Experience
                </span>
                <a
                  href="https://gurujitrimbakeshwar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-800 hover:text-amber-900"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Guruji Trimbakeshwar Platform</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Bespoke digital booking platform with multilingual localization, automated slots & instant consultation schedules.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 5 SMARTPHONE SHOWCASE ROW — REALISTIC PHONE FRAMES (LIKE HOME PAGE) IN HORIZONTAL ROW */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 space-y-16 border-b border-amber-200/80">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // MOBILE RESPONSIVE PLATFORMS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            5 LIVE MOBILE WEB EXPERIENCES
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Scroll or swipe through live mobile-responsive platforms built for coaching, salons, luxury retail, schools, and medical clinics.
          </p>
        </div>

        {/* Horizontal Row of 5 Realistic Smartphone Frames */}
        <div className="flex items-center gap-8 overflow-x-auto snap-x pb-8 scrollbar-none">
          {MOBILE_SHOWCASE.map((item) => (
            <div
              key={item.id}
              className="shrink-0 snap-center w-[260px] sm:w-[280px] space-y-4"
            >
              {/* Phone Frame (Same as Home Page PhoneFrame) */}
              <PhoneFrame className="max-w-[260px] sm:max-w-[280px]">
                <div className="w-full h-full bg-slate-950 overflow-hidden relative rounded-[28px]">
                  <iframe
                    src={item.url}
                    title={item.name}
                    className="w-full h-full border-0 pointer-events-auto overflow-auto"
                    loading="lazy"
                  />
                </div>
              </PhoneFrame>

              <div className="p-3 rounded-2xl bg-white border border-amber-200/80 text-center space-y-1 shadow-sm">
                <div className="text-[10px] font-mono text-amber-800 font-bold">
                  {item.id} • {item.category}
                </div>
                <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1">
                  <span>{item.name}</span>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-amber-800">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* APP PRODUCTS SECTION — 3 LARGE APP CARDS WITH AI-GENERATED VISUALS */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 space-y-16 border-b border-amber-200/80">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // NATIVE NORYOKO APPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            NATIVE APP PRODUCTS
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            High-performance iOS and Android mobile products engineered with 60fps Flutter native SDKs and offline SQLite engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APP_PRODUCTS.map((app) => (
            <div
              key={app.name}
              className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-[0_20px_50px_rgba(217,119,6,0.08)] space-y-5 group hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-amber-200/60">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-600 font-bold uppercase">
                      {app.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{app.name}</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">{app.desc}</p>
              </div>

              <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs font-mono text-amber-900 font-bold">
                <span>PRODUCTION ARCHITECTURE</span>
                <span className="text-emerald-700">60 FPS NATIVE ✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
