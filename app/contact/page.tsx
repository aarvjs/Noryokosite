"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

function WhatsappIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

// Carousel Images for Contact Hero
const CONTACT_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop", // Engineering Team Collaboration
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop", // Product Architecture Strategy
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop", // Technology Workshop
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"  // Developer Systems
];

export default function ContactPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Software Development",
    budget: "$25,000 - $50,000",
    timeline: "1 - 2 Months",
    message: "",
  });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CONTACT_HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose formatted WhatsApp Message with all inquiry details
    const textMessage =
      `*NEW PROJECT INQUIRY — NORYOKO STUDIO*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Company:* ${encodeURIComponent(formData.company || "N/A")}%0A` +
      `*Service Required:* ${encodeURIComponent(formData.projectType)}%0A` +
      `*Budget Range:* ${encodeURIComponent(formData.budget)}%0A` +
      `*Timeline:* ${encodeURIComponent(formData.timeline)}%0A` +
      `*Project Overview:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/918800185776?text=${textMessage}`;
    setLastWaUrl(whatsappUrl);
    setSubmitted(true);

    // Redirect user to WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900">
      
      {/* ==================================================================== */}
      {/* CONTACT HERO — CINEMATIC IMAGE CAROUSEL */}
      {/* ==================================================================== */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden bg-slate-950 text-white">
        {/* Carousel Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {CONTACT_HERO_IMAGES.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentImageIndex ? "opacity-60 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <img
                src={imgUrl}
                alt="NORYOKO Project Collaboration"
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
            <span>LET'S BUILD SOMETHING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            HAVE A PROJECT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-400">
              IN MIND?
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Tell us what you're building. We'll turn the idea into a practical digital product.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#project-brief-form"
              className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-600 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-600/30"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Fill Out Project Brief</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <a
              href="mailto:info@noryoko.com"
              className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:text-slate-900 text-white font-medium text-xs tracking-wider uppercase border border-white/20 backdrop-blur-sm"
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Direct Email Inquiry</span>
              <ArrowUpRight className="w-4 h-4 relative z-10" />
            </a>
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {CONTACT_HERO_IMAGES.map((_, idx) => (
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
      {/* FORM & DIRECT CONTACT INFO GRID */}
      {/* ==================================================================== */}
      <section id="project-brief-form" className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Project Brief Form Container */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-amber-200/80 shadow-[0_15px_40px_rgba(217,119,6,0.06)] space-y-6">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <WhatsappIcon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Redirecting to WhatsApp...</h3>
                <p className="text-slate-600 text-xs font-light max-w-md mx-auto leading-relaxed">
                  Your inquiry details have been formatted and prepared for WhatsApp (+91 8800185776). If WhatsApp did not open automatically, click the button below:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={lastWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 8800185776)</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-2xl bg-white border border-amber-200 text-slate-800 font-semibold text-xs hover:bg-amber-50"
                  >
                    Edit Inquiry Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-amber-100 pb-4">
                  <span className="text-xs font-mono text-amber-800 uppercase tracking-widest font-bold">
                    // CONSULTATION INQUIRY
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    PROJECT BRIEF
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Service Requirement</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    >
                      <option>Software Development</option>
                      <option>Web Development (Next.js)</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>Autonomous AI Agents</option>
                      <option>Cloud & DevOps Infrastructure</option>
                      <option>UI/UX Product Design</option>
                      <option>SEO & Digital Growth</option>
                      <option>Career Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    >
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                    >
                      <option>Immediate (&lt; 1 Month)</option>
                      <option>1 - 2 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-600 uppercase font-semibold">Project Overview & Goals *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your product requirements, business objectives, or technical challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-amber-200/80 text-slate-900 text-sm focus:outline-none focus:border-amber-600"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-water-fill w-full py-4 px-8 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20"
                >
                  <div className="btn-water-bg" />
                  <WhatsappIcon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Send Inquiry via WhatsApp (+91 8800185776)</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF8F5] text-slate-900 border border-amber-200/80 shadow-[0_15px_40px_rgba(217,119,6,0.06)] space-y-6">
              <div className="flex items-center justify-between border-b border-amber-200/60 pb-4 text-xs font-mono text-amber-800 font-bold">
                <span>DIRECT CONTACT</span>
                <span>LUCKNOW TECH STUDIO</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">NORYOKO STUDIO</h3>
                <p className="text-xs font-mono text-slate-500 mt-1">Digital Engineering & Product Architecture</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Mail className="w-4 h-4 text-amber-700" />
                  <a href="mailto:info@noryoko.com" className="font-mono font-bold hover:text-amber-800 transition-colors">
                    info@noryoko.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <Phone className="w-4 h-4 text-amber-700" />
                  <a href="tel:+918800185776" className="font-mono font-bold hover:text-amber-800 transition-colors">
                    +91 8800185776
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-slate-600 leading-relaxed font-light">
                We sign mutual NDA agreements prior to reviewing confidential proprietary technical specifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
