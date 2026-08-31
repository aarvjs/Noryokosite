"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_NAVIGATION } from "@/data/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070A10] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Top Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Statement Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-xl">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-mono font-bold">
                N
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                NORYOKO<span className="text-indigo-400">.</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-sm">
              We engineer digital products, platforms and systems that help businesses grow. Premium software, web, mobile, AI agent infrastructure, and digital growth.
            </p>

            <div className="text-xs font-mono text-indigo-400">
              © {new Date().getFullYear()} NORYOKO STUDIO. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Services Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                SERVICES
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_NAVIGATION.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                SOLUTIONS
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_NAVIGATION.solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_NAVIGATION.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                RESOURCES
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {FOOTER_NAVIGATION.resources.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-indigo-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Large SVG NORYOKO Brand Mark Treatment */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center">
          <div className="w-full text-center text-slate-800/40 text-[11vw] sm:text-[13vw] font-bold tracking-tighter leading-none select-none font-mono uppercase">
            NORYOKO
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>NORYOKO ENGINEERING STUDIO • ZERO ARTIFICIAL TEMPLATES</div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
