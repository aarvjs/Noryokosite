import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, HelpCircle, Layers, ShieldCheck, Sparkles } from "lucide-react";
import ServiceHeroVisual from "@/components/services/ServiceHeroVisual";
import ServiceContactCTA from "@/components/services/ServiceContactCTA";

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | NORYOKO Engineering`,
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
    <main className="w-full min-h-screen bg-[#FAF8F5] text-slate-900 pt-28 pb-16">
      
      {/* ==================================================================== */}
      {/* SERVICE PAGE HERO — BALANCED 2-COLUMN PREMIUM LIGHT LAYOUT WITH UNIQUE VISUAL */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 border-b border-amber-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/60 text-xs font-mono uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>NORYOKO ENGINEERING DISCIPLINE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-xs sm:text-sm font-mono text-amber-800 uppercase tracking-widest font-bold">
              // {service.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              {service.heroCopy}
            </p>

            {/* Metadata Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-700">
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200/80 text-amber-900 shadow-sm font-medium">
                100% Bespoke Architecture
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200/80 text-amber-900 shadow-sm font-medium">
                Zero Technical Debt
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-amber-200/80 text-amber-900 shadow-sm font-medium">
                Production SLA
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-water-fill inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
              >
                <div className="btn-water-bg" />
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
              </Link>
              <Link
                href="/work"
                className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
              >
                <div className="btn-water-bg" />
                <span className="relative z-10">View Our Work</span>
                <ArrowUpRight className="w-4 h-4 relative z-10" />
              </Link>
            </div>
          </div>

          {/* Right Column: Unique 3D / Product Mockup Visual per Service */}
          <div className="lg:col-span-5 flex justify-center">
            <ServiceHeroVisual slug={slug} title={service.title} />
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* CAPABILITIES SECTION */}
      {/* ==================================================================== */}
      <section id="capabilities" className="max-w-7xl mx-auto px-4 sm:px-8 py-20 space-y-12">
        <div>
          <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest">// CORE DELIVERABLES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">WHAT WE ENGINEER & SHIP</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.capabilities.map((cap, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-[0_10px_30px_rgba(217,119,6,0.06)] space-y-3 hover:border-amber-400 hover:shadow-xl transition-all">
              <div className="text-xs font-mono text-amber-800 font-bold">0{idx + 1}</div>
              <h3 className="text-xl font-bold text-slate-900">{cap.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed font-light">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* ARCHITECTURE EXECUTION PIPELINE — WARM OFF-WHITE THEME */}
      {/* ==================================================================== */}
      <section className="w-full py-20 bg-[#FAF8F5] text-slate-900 border-y border-amber-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="border-b border-amber-200/60 pb-6">
            <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest">// EXECUTION METHODOLOGY</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-1">THE {service.title.toUpperCase()} PIPELINE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.architectureSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-3 hover:border-amber-400 transition-colors">
                <span className="text-2xl font-bold font-mono text-amber-800">{step.step}</span>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-xs font-light leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* TECHNOLOGIES & DELIVERABLES */}
      {/* ==================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-700" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/80 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-700" />
            <span>Phase Deliverables</span>
          </h3>
          <div className="space-y-2 pt-2">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* TECHNICAL FAQS */}
      {/* ==================================================================== */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 space-y-8 border-t border-amber-200/80">
          <div className="text-center">
            <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest">// TECHNICAL FAQS</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Service-Specific Contact CTA */}
      <ServiceContactCTA serviceTitle={service.title} />

    </main>
  );
}
