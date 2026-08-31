import React from "react";
import Link from "next/link";
import { INTERNSHIP_TRACKS, INTERNSHIP_FAQ } from "@/data/internships";
import { ArrowRight, CheckCircle2, Code, Compass, GraduationCap, HelpCircle, Rocket, ShieldCheck, Users } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Engineering Internships | Norkl Studio",
  description: "Join Norkl's engineering talent acceleration program. Build real production Next.js, Python, Flutter, and AI agent systems with senior mentors.",
};

export default function InternshipsPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>TALENT ACCELERATION PROGRAM</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          BUILD. LEARN. <br />
          <span className="text-indigo-600">SHIP.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Our engineering internship program isn't about toy assignments. You will commit code to real production applications, receive daily PR reviews, and work alongside senior product architects.
        </p>
      </section>

      {/* Program Tracks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">// Available Programs</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">INTERNSHIP TRACKS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERNSHIP_TRACKS.map((track) => (
            <div key={track.id} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono text-indigo-600 font-bold uppercase">{track.format}</span>
                  <span className="text-xs font-mono text-slate-500">{track.duration}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{track.title}</h3>
                <p className="text-xs font-mono text-indigo-600 font-semibold">{track.tagline}</p>
                <p className="text-slate-600 text-xs leading-relaxed font-light">{track.description}</p>

                {/* Skills Learned */}
                <div className="pt-2">
                  <span className="text-xs font-mono text-slate-500 block mb-2">Key Skills Mastered:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.skillsLearned.map((skill) => (
                      <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wider uppercase transition-colors"
                >
                  <span>Apply for {track.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program FAQs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 py-16 space-y-8 border-t border-slate-200">
        <div className="text-center">
          <span className="text-xs font-mono text-indigo-600 uppercase tracking-widest">// Program FAQs</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">INTERNSHIP FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4">
          {INTERNSHIP_FAQ.map((faq, idx) => (
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

      <FinalCTA />
    </main>
  );
}
