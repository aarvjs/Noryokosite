import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { ArrowRight, CheckCircle2, Cpu, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Norkl Engineering`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* Service Page Unique Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>ENGINEERING DISCIPLINE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          {service.title}
        </h1>

        <p className="text-xs sm:text-sm font-mono text-indigo-600 uppercase tracking-widest font-bold">
          // {service.tagline}
        </p>

        <p className="text-lg text-slate-600 max-w-3xl font-light leading-relaxed">
          {service.heroCopy}
        </p>

        <div className="pt-4 flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs tracking-wider uppercase transition-colors"
          >
            <span>Consult Architecture Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 space-y-12">
        <div>
          <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">// Core Capabilities</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">WHAT WE ENGINEER & DELIVER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-mono text-indigo-600 font-bold">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Execution Phases */}
      <section className="w-full py-20 bg-slate-950 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">// Execution Methodology</span>
            <h2 className="text-3xl font-bold text-white mt-1">THE {service.title.toUpperCase()} PIPELINE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.architectureSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-2xl font-bold font-mono text-indigo-400">{step.step}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-xs font-light leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>Phase Deliverables</span>
          </h3>
          <div className="space-y-2 pt-2">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 space-y-8 border-t border-slate-200">
          <div className="text-center">
            <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">// Technical FAQs</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-indigo-600" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}
