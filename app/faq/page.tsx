"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HelpCircle, Search, Sparkles } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// Carousel Images for FAQ Hero
const FAQ_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop", // Global Technology Network
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop", // Digital Communication Architecture
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop", // Technical Strategy & Planning
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"  // Developer Systems
];

const FAQ_ITEMS = [
  {
    category: "General & Process",
    question: "What is NORYOKO's core engineering focus?",
    answer: "NORYOKO is a digital engineering studio. We partner with growth businesses and enterprise teams to design and build custom software, Next.js web applications, mobile platforms, autonomous AI systems, and cloud infrastructure."
  },
  {
    category: "General & Process",
    question: "How does project engagement work from start to finish?",
    answer: "Our process begins with domain analysis & system design, followed by iterative development in 2-week sprints with continuous staging deployments, daily progress updates, penetration testing, and final launch support."
  },
  {
    category: "Software & Web",
    question: "Why do you use Next.js for web application development?",
    answer: "Next.js 16 provides server-side rendering, static generation, server actions, and automatic bundle optimization out of the box, delivering sub-second page loads and superior SEO performance."
  },
  {
    category: "Software & Web",
    question: "Do you build native mobile applications or cross-platform?",
    answer: "We primarily engineer cross-platform mobile apps using Flutter and Dart, allowing 95%+ shared codebase targeting iOS and Android simultaneously with 60fps native rendering."
  },
  {
    category: "AI & Intelligence",
    question: "How do you protect private company data when building AI systems?",
    answer: "We deploy open-source models inside your private cloud VPC or use strict zero-data-retention enterprise API contracts, ensuring your proprietary data is never used to train public LLM models."
  },
  {
    category: "AI & Intelligence",
    question: "What is RAG and why is it essential for enterprise search?",
    answer: "Retrieval-Augmented Generation (RAG) grounds AI models in your actual live company knowledge base, enabling zero-hallucination, highly accurate responses with direct source citation."
  },
  {
    category: "Engagement & Security",
    question: "Who owns the source code and IP after project completion?",
    answer: "You own 100% of the IP, source code repositories, design tokens, database schemas, and cloud deployment pipelines upon project completion and payment."
  },
  {
    category: "Engagement & Security",
    question: "How do you handle post-launch maintenance and SLAs?",
    answer: "We offer dedicated SLA support packages including 24/7 telemetry monitoring, automated security patching, database backup validation, and continuous feature expansion."
  }
];

export default function FAQPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % FAQ_HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900">
      
      {/* ==================================================================== */}
      {/* FAQ HERO — CINEMATIC IMAGE CAROUSEL */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {FAQ_HERO_IMAGES.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-60 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={imgUrl}
                alt="NORYOKO FAQ Knowledge"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Warm Neutral Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-slate-950/60 to-slate-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>NEED ANSWERS?</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            EVERYTHING YOU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
              NEED TO KNOW.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Clear answers about our services, process, technology and working with NORYOKO.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#faq-list"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-600/30"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Browse Questions</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <Link
              href="/contact"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:text-slate-900 text-white font-medium text-xs tracking-wider uppercase border border-white/20 backdrop-blur-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Contact Team</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </Link>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {FAQ_HERO_IMAGES.map((_, idx) => (
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
      {/* FAQ LIST SECTION WITH SEARCH FILTER */}
      {/* ==================================================================== */}
      <section id="faq-list" className="max-w-5xl mx-auto px-4 sm:px-8 py-24 space-y-12">
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            QUESTIONS & ANSWERS
          </h2>
          
          {/* Search Filter Input */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-7" />
            <input
              type="text"
              placeholder="Search questions (e.g. Next.js, AI, IP ownership)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-amber-200/80 text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-3 hover:border-amber-400 transition-all"
            >
              <div className="flex items-center justify-between text-xs font-mono text-amber-800">
                <span>{faq.category}</span>
                <HelpCircle className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500 font-mono text-xs">
              No questions found matching "{searchQuery}". Contact our architecture team directly.
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
