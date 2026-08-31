"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { INTERNSHIP_TRACKS, INTERNSHIP_FAQ } from "@/data/internships";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code, Compass, GraduationCap, HelpCircle, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

// Carousel Images for Internships Hero
const INTERNSHIPS_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop", // Engineering Team Workspace
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop", // Developer Mentorship & Code Review
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1600&auto=format&fit=crop", // Software Pair Programming
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"  // Tech Workshop & Product Strategy
];

export default function InternshipsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % INTERNSHIPS_HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900">
      
      {/* ==================================================================== */}
      {/* INTERNSHIPS HERO — CINEMATIC IMAGE CAROUSEL */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {INTERNSHIPS_HERO_IMAGES.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-60 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={imgUrl}
                alt="NORYOKO Engineering Internship"
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
            <span>BUILD YOUR CAREER</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            LEARN. BUILD. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
              GROW WITH NORYOKO.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Work on real products, solve real engineering problems and grow alongside an ambitious technology team.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-600/30"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Apply for Internship</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </Link>
            <a
              href="#tracks"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:text-slate-900 text-white font-medium text-xs tracking-wider uppercase border border-white/20 backdrop-blur-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">View Tracks</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </a>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {INTERNSHIPS_HERO_IMAGES.map((_, idx) => (
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
      {/* PROGRAM TRACKS SECTION */}
      {/* ==================================================================== */}
      <section id="tracks" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-amber-200/80">
        <div className="space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            // AVAILABLE ENGINEERING TRACKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
            INTERNSHIP TRACKS
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-light">
            Our talent acceleration program pairs junior developers with senior architects to ship real production code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERNSHIP_TRACKS.map((track) => (
            <div
              key={track.id}
              className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 font-bold border border-amber-300/40 uppercase">
                    {track.format}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{track.duration}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{track.title}</h3>
                <p className="text-xs font-mono text-amber-800 font-semibold">{track.tagline}</p>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{track.description}</p>

                {/* Skills Learned */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-500 block mb-2">Key Skills Mastered:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.skillsLearned.map((skill) => (
                      <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-50 text-slate-700 border border-amber-200/60">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <Link
                  href="/contact"
                  className="btn-water-fill inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-xs tracking-wider uppercase shadow-md"
                >
                  <div className="btn-water-bg" />
                  <span className="relative z-10">Apply for {track.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 relative z-10" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program FAQs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-20 space-y-8 border-t border-amber-200/80">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-amber-800 uppercase tracking-widest font-bold">// Program FAQs</span>
          <h2 className="text-3xl font-bold text-slate-900">INTERNSHIP FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4">
          {INTERNSHIP_FAQ.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-amber-200/80 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light pl-6">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
