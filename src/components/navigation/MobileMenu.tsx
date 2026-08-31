"use client";

import React from "react";
import Link from "next/link";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { X, ArrowUpRight, Sparkles } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF8F5] text-slate-900 p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
      {/* Top Header Row */}
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-4">
        <Link href="/" onClick={onClose} className="flex items-center gap-2 font-bold tracking-tight text-xl">
          <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white text-xs font-mono font-bold shadow-sm">
            N
          </div>
          <span className="font-bold tracking-tight text-xl text-slate-900">
            NORYOKO<span className="text-amber-700">.</span>
          </span>
        </Link>

        <button
          onClick={onClose}
          className="p-2 rounded-full border border-amber-300 text-slate-900 bg-white hover:bg-amber-100/60 transition-colors shadow-sm"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 flex flex-col justify-center gap-4 my-8">
        {MAIN_NAVIGATION.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between text-2xl font-bold tracking-tight text-slate-900 hover:text-amber-800 transition-colors py-2 border-b border-amber-100"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="w-5 h-5 text-amber-700" />
          </Link>
        ))}
      </nav>

      {/* Bottom Action Row */}
      <div className="pt-4 border-t border-amber-200/80 flex flex-col gap-3">
        <Link
          href="/contact"
          onClick={onClose}
          className="btn-water-fill flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-amber-700 text-white font-bold text-center text-xs tracking-wider uppercase shadow-xl shadow-amber-700/20 transition-all"
        >
          <div className="btn-water-bg" />
          <span className="relative z-10">Start a Project</span>
          <ArrowUpRight className="w-4 h-4 relative z-10" />
        </Link>

        <p className="text-[11px] text-center text-slate-500 font-mono">
          NORYOKO STUDIO • DIGITAL PRODUCT ARCHITECTURE
        </p>
      </div>
    </div>
  );
}
