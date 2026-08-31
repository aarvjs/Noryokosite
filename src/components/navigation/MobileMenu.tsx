"use client";

import React from "react";
import Link from "next/link";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { X, ArrowUpRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0B0F19] text-white p-6 md:hidden animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <Link href="/" onClick={onClose} className="text-xl font-bold tracking-tight">
          NORYOKO<span className="text-indigo-400">.</span>
        </Link>
        <button
          onClick={onClose}
          className="p-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-center gap-6 my-6">
        {MAIN_NAVIGATION.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between text-2xl font-medium tracking-tight text-white/90 hover:text-indigo-400 transition-colors py-1"
          >
            <span>{item.label}</span>
            <ArrowUpRight className="w-5 h-5 opacity-40 text-indigo-400" />
          </Link>
        ))}
      </nav>

      <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
        <Link
          href="/contact"
          onClick={onClose}
          className="btn-water-fill flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-2xl bg-indigo-600 text-white font-medium text-center transition-all shadow-md shadow-indigo-600/30"
        >
          <div className="btn-water-bg" />
          <span className="relative z-10">Let's Talk</span>
          <ArrowUpRight className="w-4 h-4 relative z-10" />
        </Link>
        <p className="text-[11px] text-center text-slate-400 font-mono">
          NORYOKO • Digital Engineering Studio
        </p>
      </div>
    </div>
  );
}
