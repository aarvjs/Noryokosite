"use client";

import React from "react";
import Link from "next/link";
import { INTERNSHIP_TRACKS } from "@/data/internships";
import { ArrowUpRight, Award, Code, Compass, GraduationCap, Rocket, Users } from "lucide-react";

export default function InternshipSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#F9F9FB] text-slate-900 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-600 uppercase">
              // Talent Acceleration Program
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              BUILD. LEARN. SHIP.
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mt-2 font-light leading-relaxed">
              Our engineering internship program isn't about toy assignments. You will write and ship real production code alongside senior architects.
            </p>
          </div>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium uppercase tracking-wider transition-colors mt-4 md:mt-0"
          >
            <span>View All Internship Tracks</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Real Production Exposure</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Commit code to live Next.js platforms, FastAPI microservices, and Flutter mobile applications serving active users.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">1-on-1 Senior Mentorship</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Receive daily async pull request reviews, architecture feedback, and career guidance directly from lead engineers.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Fast-Track Full-Time Offers</h3>
            <p className="text-slate-600 text-xs leading-relaxed font-light">
              Top program graduates receive formal reference recommendations and priority placement for full-time engineering roles.
            </p>
          </div>
        </div>

        {/* Tracks List Summary */}
        <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono text-indigo-400">
            <span>AVAILABLE ENGINEERING TRACKS</span>
            <span>REMOTE / HYBRID</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERNSHIP_TRACKS.map((track) => (
              <Link
                key={track.id}
                href="/internships"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500 transition-colors group block"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {track.title}
                  </h4>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-300" />
                </div>
                <p className="text-[11px] text-slate-400 font-mono mt-1">{track.duration} • {track.format}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
