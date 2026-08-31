"use client";

import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] sm:max-w-[320px] ${className}`}>
      <div className="relative rounded-[40px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-800 shadow-indigo-950/30">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 w-24 h-5 rounded-full bg-slate-950 flex items-center justify-end px-2 gap-1.5 border border-slate-800">
          <div className="w-2 h-2 rounded-full bg-indigo-900/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
        </div>

        {/* Mobile Display */}
        <div className="relative w-full aspect-[9/19] bg-slate-950 rounded-[32px] overflow-hidden pt-8 text-white shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
}
