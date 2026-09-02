"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_NAVIGATION } from "@/data/navigation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] text-slate-900 pt-20 pb-12 border-t border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Top Footer Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Studio Information */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-tight text-2xl">
              <div className="w-9 h-9 rounded-xl bg-amber-700 flex items-center justify-center text-white text-sm font-mono font-bold shadow-md shadow-amber-700/20">
                N
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">
                NORYOKO<span className="text-amber-700">.</span>
              </span>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed font-light max-w-sm">
              NORYOKO is a digital engineering studio & product platform architect building resilient software, web applications, mobile platforms, and AI agent systems.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-700" />
                <a href="mailto:info@noryoko.com" className="hover:text-amber-800 transition-colors font-semibold">
                  info@noryoko.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <a href="tel:+918800185776" className="hover:text-amber-800 transition-colors font-semibold">
                  +91 8800185776
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="text-xs font-mono text-amber-800 font-bold">
              © {new Date().getFullYear()} NORYOKO STUDIO. ALL RIGHTS RESERVED.
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Services Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-widest border-b border-amber-200/80 pb-2">
                SERVICES
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {FOOTER_NAVIGATION.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-amber-800 transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-widest border-b border-amber-200/80 pb-2">
                SOLUTIONS
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {FOOTER_NAVIGATION.solutions.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-amber-800 transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-widest border-b border-amber-200/80 pb-2">
                COMPANY
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {FOOTER_NAVIGATION.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-amber-800 transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-widest border-b border-amber-200/80 pb-2">
                RESOURCES
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {FOOTER_NAVIGATION.resources.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-amber-800 transition-colors font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Large Watermark NORYOKO SVG Brand Mark */}
        <div className="pt-8 border-t border-amber-200/80 flex items-center justify-center">
          <div className="w-full text-center text-amber-900/10 text-[11vw] sm:text-[13vw] font-bold tracking-tighter leading-none select-none font-mono uppercase">
            NORYOKO
          </div>
        </div>

        {/* Bottom Legal & Security Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 pt-4 border-t border-amber-200/60">
          <div>NORYOKO ENGINEERING STUDIO • LUCKNOW, INDIA</div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-800 transition-colors">Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
