"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";

const CTA_CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
];

export default function FinalCTA() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CTA_CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-28 sm:py-36 text-slate-900 overflow-hidden border-b border-amber-200/80 bg-[#FAF8F5]">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {CTA_CAROUSEL_IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <img
              src={img}
              alt="NORYOKO Engineering Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Soft Warm Cream Overlay for 100% Typography Readability (NO DARK BLUE) */}
        <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Initiate NORYOKO Engineering Project</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08]">
          LET'S BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-amber-900 to-amber-700">
            WHAT'S NEXT.
          </span>
        </h2>

        <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Tell us about your product idea, enterprise challenge, or digital transformation goals. Our architecture team will review and respond within 24 hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-water-fill inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-medium text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Start a Project</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </Link>
          <a
            href="tel:+918800185776"
            className="btn-water-fill btn-water-fill-white inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-amber-50 text-slate-900 font-medium text-xs tracking-wider uppercase border border-amber-200/80 shadow-sm"
          >
            <div className="btn-water-bg" />
            <span className="relative z-10">Call +91 8800185776</span>
            <Phone className="w-4 h-4 text-amber-700 relative z-10" />
          </a>
        </div>

        {/* Contact Info Footer Bar */}
        <div className="pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-600">
          <a href="mailto:info@noryoko.com" className="flex items-center gap-1.5 hover:text-amber-800 transition-colors font-bold">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>info@noryoko.com</span>
          </a>
          <span className="text-amber-300">•</span>
          <a href="tel:+918800185776" className="flex items-center gap-1.5 hover:text-amber-800 transition-colors font-bold">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>+91 8800185776</span>
          </a>
        </div>
      </div>
    </section>
  );
}
