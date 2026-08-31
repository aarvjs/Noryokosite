"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Cpu, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Software Development",
    budget: "$25,000 - $50,000",
    timeline: "1 - 2 Months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* Contact Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>PROJECT INQUIRY & ARCHITECTURE CONSULTATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          LET'S BUILD <br />
          <span className="text-indigo-600">WHAT'S NEXT.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Tell us about your product idea, complex business challenge, or digital system requirements. Our architecture team will review and respond within 24 hours.
        </p>
      </section>

      {/* Form & Direct Contact Info Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Received</h3>
                <p className="text-slate-600 text-xs font-light max-w-md mx-auto">
                  Thank you for reaching out to Norkl Studio. Our engineering leads will review your project brief and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-indigo-600 underline font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                  Project Brief
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    >
                      <option>Software Development</option>
                      <option>Web Development (Next.js)</option>
                      <option>Mobile App Development</option>
                      <option>AI & Machine Learning</option>
                      <option>AI Agents & Automation</option>
                      <option>Cloud & DevOps Infrastructure</option>
                      <option>UI/UX Product Design</option>
                      <option>SEO & Digital Growth</option>
                      <option>IT & Tech Consulting</option>
                      <option>Internship Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    >
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000 - $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-600 uppercase">Target Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                    >
                      <option>Immediate (&lt; 1 Month)</option>
                      <option>1 - 2 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-600 uppercase">Project Overview & Goals *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your product requirements, business objectives, or technical challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <span>Start a Conversation</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-950 text-white shadow-2xl space-y-6 border border-slate-800">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-indigo-400">
                <span>DIRECT CONTACT</span>
                <span>ENGINEERING HQ</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">NORKL STUDIO</h3>
                <p className="text-xs font-mono text-slate-400 mt-1">Digital Engineering & Product Architecture</p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>hello@norkl.com</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>+1 (800) 555-NORKL</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  <span>Digital Studio • Global Remote Operations</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 leading-relaxed font-light">
                We sign NDA agreements prior to reviewing confidential proprietary technical specifications.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
