"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// Hero Carousel Images for Training (High Quality Technology & Mentorship Environments)
const TRAINING_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
];

// 8 Training Programs (Including Cloud Infrastructure & DevOps)
const TRAINING_PROGRAMS = [
  {
    number: "01",
    title: "HTML, CSS & Web Development",
    desc: "Master modern responsive web development, CSS Flexbox/Grid, semantic HTML5, and tokenized design systems.",
    duration: "6 Weeks • Live Coding Lab",
    icon: Globe,
  },
  {
    number: "02",
    title: "Full-Stack Development",
    desc: "End-to-end full-stack engineering with Next.js 16, React 19, TypeScript, REST APIs, and PostgreSQL backends.",
    duration: "12 Weeks • Project Track",
    icon: Code2,
  },
  {
    number: "03",
    title: "Database & MySQL",
    desc: "Relational database schema design, SQL queries, index optimization, transactions, and migration pipelines.",
    duration: "6 Weeks • Database Lab",
    icon: Database,
  },
  {
    number: "04",
    title: "AI Agents with n8n",
    desc: "Build autonomous AI workflow agents, n8n automation pipelines, RAG vector search, and LLM integrations.",
    duration: "8 Weeks • AI Specialization",
    icon: Bot,
  },
  {
    number: "05",
    title: "Python Development",
    desc: "Core Python 3 programming, data structures, FastAPI microservices, web scraping, and automation scripts.",
    duration: "8 Weeks • Backend Track",
    icon: Terminal,
  },
  {
    number: "06",
    title: "JavaScript Development",
    desc: "Deep dive into ES6+ modern JavaScript, asynchronous promises, Node.js event loops, and DOM engines.",
    duration: "6 Weeks • Core Engineering",
    icon: Cpu,
  },
  {
    number: "07",
    title: "Blockchain Development",
    desc: "Decentralized Smart Contract engineering, Solidity, Ethereum Web3 integration, and security auditing.",
    duration: "10 Weeks • Web3 Track",
    icon: ShieldCheck,
  },
  {
    number: "08",
    title: "Cloud Infrastructure & DevOps",
    desc: "AWS cloud architecture, Terraform IaC, Docker containerization, Kubernetes clusters, and automated CI/CD pipelines.",
    duration: "8 Weeks • Cloud DevOps Lab",
    icon: Cloud,
  },
];

export default function TrainingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TRAINING_HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900 font-sans">
      
      {/* ==================================================================== */}
      {/* HERO SECTION — HIGH-VISIBILITY CINEMATIC IMAGE CAROUSEL */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-[#FAF8F5]">
        {/* Background Image Carousel (Crisp, High Visibility) */}
        <div className="absolute inset-0 z-0">
          {TRAINING_HERO_IMAGES.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-65 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={img}
                alt="NORYOKO Training Academy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Warm Light Cream Translucent Overlay (Crisp Readability & High Image Visibility) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/70 to-[#FAF8F5]/85 backdrop-blur-[1px]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>NORYOKO ACADEMY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            LEARN THE TECHNOLOGY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
              BUILD THE FUTURE.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
            Hands-on, practical software engineering training led by senior architects. Master production tech stacks, ship real software, and get certified.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#programs"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Explore Training Programs</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <Link
              href="/contact"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Enroll Now</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </Link>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {TRAINING_HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-amber-700" : "w-2 bg-amber-200"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CERTIFICATION / TRAINING OUTCOME SECTION */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-amber-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Realistic SVG/CSS NORYOKO Certificate Design */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-300/80 shadow-[0_25px_60px_rgba(217,119,6,0.12)] space-y-6 relative overflow-hidden group">
              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-500" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-500" />

              {/* Certificate Header */}
              <div className="flex items-center justify-between border-b border-amber-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center text-white text-xs font-mono font-bold">
                    N
                  </div>
                  <span className="font-extrabold text-lg tracking-wider font-mono text-slate-900">
                    NORYOKO<span className="text-amber-700">.</span>
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300/60">
                  VERIFIED CERTIFICATE
                </span>
              </div>

              {/* Title & Recipient */}
              <div className="space-y-2 text-center py-2">
                <div className="text-xs font-mono tracking-widest text-amber-800 font-bold uppercase">
                  CERTIFICATE OF COMPLETION
                </div>
                <div className="text-xs text-slate-500 font-light">THIS IS PROUDLY PRESENTED TO</div>
                <div className="text-2xl font-bold font-serif text-slate-900 tracking-tight underline decoration-amber-400 decoration-2 underline-offset-4">
                  Alexander R. Vance
                </div>
                <p className="text-xs text-slate-600 font-light max-w-sm mx-auto pt-1 leading-relaxed">
                  for successfully mastering the advanced production curriculum in
                </p>
                <div className="text-sm font-bold font-mono text-amber-900 bg-amber-50 py-1.5 px-3 rounded-lg border border-amber-200 inline-block">
                  FULL-STACK SOFTWARE & CLOUD ARCHITECTURE
                </div>
              </div>

              {/* Signatures & Seal Bar */}
              <div className="pt-4 border-t border-amber-100 grid grid-cols-2 gap-4 items-end text-xs font-mono">
                <div className="text-left space-y-1">
                  <div className="font-serif italic text-sm text-slate-800 border-b border-slate-300 pb-0.5">
                    Senior Architect
                  </div>
                  <div className="text-[9px] text-slate-500 uppercase">Authorized Director</div>
                </div>

                <div className="text-right space-y-1">
                  <div className="text-[10px] font-bold text-slate-900">ID: NRY-CERT-2026-8942</div>
                  <div className="text-[9px] text-slate-500 uppercase">Issued: September 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
              // VERIFIED CREDENTIALS
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              LEARN. BUILD. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
                GET CERTIFIED.
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              Every NORYOKO Academy student completes real production software projects, builds live portfolio systems, and earns an officially verifiable engineering certificate.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span>Hands-on production project building (No toy assignments)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span>Mentorship from senior software architects & lead developers</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
                <span>Sharable verified digital certificate ID for career applications</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* 8 TRAINING PROGRAMS GRID (INCLUDING CLOUD DEVOPS) */}
      {/* ==================================================================== */}
      <section id="programs" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 space-y-16 border-b border-amber-200/80">
        <div className="space-y-3 text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // ACADEMY CURRICULUM
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            TECHNICAL TRAINING PROGRAMS
          </h2>
          <p className="text-slate-600 text-sm font-light leading-relaxed">
            Choose your specialized engineering track and master the technologies powering modern software companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_PROGRAMS.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.number}
                className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] flex flex-col justify-between hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                    <span className="text-xl font-bold font-mono text-amber-800">
                      {prog.number}
                    </span>
                    <div className="p-2 rounded-xl bg-amber-50 text-amber-800 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors leading-snug">
                    {prog.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-amber-100 flex items-center justify-between">
                  <span className="text-[9px] font-mono px-2 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/60 font-bold">
                    {prog.duration}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-900 uppercase tracking-wider"
                  >
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </main>
  );
}
