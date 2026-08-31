"use client";

import React from "react";
import { Phone } from "lucide-react";

function WhatsappIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3 md:hidden pointer-events-auto">
      {/* Phone Call Floating CTA Button */}
      <a
        href="tel:+919876543210"
        aria-label="Call NORYOKO Engineering Studio"
        className="w-11 h-11 rounded-full bg-white text-amber-800 border border-amber-300 shadow-[0_8px_20px_rgba(217,119,6,0.22)] flex items-center justify-center transition-transform active:scale-90 hover:scale-105"
      >
        <Phone className="w-5 h-5 text-amber-700" />
      </a>

      {/* WhatsApp Floating CTA Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NORYOKO on WhatsApp"
        className="w-11 h-11 rounded-full bg-emerald-600 text-white border border-emerald-400 shadow-[0_8px_20px_rgba(16,185,129,0.3)] flex items-center justify-center transition-transform active:scale-90 hover:scale-105"
      >
        <WhatsappIcon className="w-5 h-5 text-white" />
      </a>
    </div>
  );
}
