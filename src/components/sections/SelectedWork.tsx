"use client";

import React from "react";
import Link from "next/link";
import PhoneFrame from "../devices/PhoneFrame";
import LaptopFrame from "../devices/LaptopFrame";
import { ArrowUpRight, CheckCircle2, Globe, ShieldCheck } from "lucide-react";

export default function SelectedWork() {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#F9F9FB] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase">
              // Editorial Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              SELECTED WORK
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider mt-4 sm:mt-0"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project 1: Keerat Electech (Laptop Visual on Left, Editorial Text on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Realistic Laptop Mockup with Live Interactive iframe */}
          <div className="lg:col-span-7">
            <LaptopFrame title="Keerat Electech — Industrial Structural Fixings">
              <div className="w-full h-full bg-slate-950 overflow-hidden relative">
                <iframe
                  src="https://keerat-tech.vercel.app/"
                  title="Keerat Electech"
                  className="w-full h-full border-0 pointer-events-auto overflow-auto"
                  loading="lazy"
                />
              </div>
            </LaptopFrame>
          </div>

          {/* Right Side Content: Keerat Electech Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold border border-amber-300/40">
                INDUSTRIAL & INFRASTRUCTURE
              </span>
              <span className="text-xs font-mono text-slate-400">2026</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              KEERAT ELECTECH
            </h3>

            <div className="text-sm font-semibold text-indigo-700 font-mono">
              Building the Future with Industrial Strength
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Keerat Electech delivers ETA Option 1 certified wedge anchors, pure epoxy injection mortars, power tools, and heavy structural fixings for major infrastructure.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                <span>ETA Option 1 Certified Anchors & Epoxy Mortars</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                <span>Heavy Infrastructure Fixings & Industrial Tools</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                <span>High-Load Engineering Specification Catalog</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://keerat-tech.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-md"
              >
                <span>Visit Live Platform</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Project 2: The Sizzling Plate (Text on Left, Phone Display with Live iframe on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300/40">
                FOOD & CULINARY PLATFORM
              </span>
              <span className="text-xs font-mono text-slate-400">2026</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              THE SIZZLING PLATE
            </h3>

            <div className="text-sm font-semibold text-emerald-700 font-mono">
              Modern Culinary Digital Experience
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-light">
              An interactive digital culinary portal featuring live sizzler menus, table reservations, and seamless online ordering engineered for fluid mobile interaction.
            </p>

            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Live Interactive Digital Sizzler Menu</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>60 FPS Mobile Touch UX & Table Booking</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Instant Order & Reservation Engine</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://thesizzlingplate.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-md"
              >
                <span>Visit Live Platform</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: Phone Frame with Live Interactive iframe */}
          <div className="lg:col-span-7 lg:order-2 order-1 flex justify-center">
            <PhoneFrame>
              <div className="w-full h-full bg-slate-950 overflow-hidden relative rounded-[28px]">
                <iframe
                  src="https://thesizzlingplate.vercel.app/"
                  title="The Sizzling Plate"
                  className="w-full h-full border-0 pointer-events-auto overflow-auto"
                  loading="lazy"
                />
              </div>
            </PhoneFrame>
          </div>
        </div>

        {/* Project 3: Enterprise Control Platform Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                // ENTERPRISE CONTROL PLATFORM
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-white mt-1">
                Nexus AI Operating System
              </h3>
            </div>
            <Link
              href="/work/nexus-ai-operating-system"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase transition-colors"
            >
              <span>Explore Platform Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400">MICROSERVICES MANAGED</div>
              <div className="text-3xl font-bold text-indigo-400 mt-2">1,240+</div>
              <p className="text-xs text-slate-400 mt-2">Kubernetes pod clusters deployed across multi-cloud regions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400">WEBSOCKET STREAM</div>
              <div className="text-3xl font-bold text-emerald-400 mt-2">&lt; 5ms</div>
              <p className="text-xs text-slate-400 mt-2">Real-time metric telemetry streamed to browser canvas.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs font-mono text-slate-400">SYSTEM AVAILABILITY</div>
              <div className="text-3xl font-bold text-blue-400 mt-2">99.99%</div>
              <p className="text-xs text-slate-400 mt-2">High availability with automated disaster failover gates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
