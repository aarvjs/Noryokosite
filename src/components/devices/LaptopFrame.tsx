"use client";

import React from "react";

interface LaptopFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function LaptopFrame({ children, className = "", title = "Norkl Product System" }: LaptopFrameProps) {
  return (
    <div className={`relative mx-auto w-full max-w-4xl ${className}`}>
      {/* Outer Laptop Body */}
      <div className="relative rounded-t-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl border border-slate-700/50 shadow-indigo-950/40">
        {/* Camera Notch / WebCam */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
        </div>

        {/* Screen Header Bar */}
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950 rounded-t-xl border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="truncate max-w-[200px] text-slate-400 font-sans text-xs">
            {title}
          </div>
          <div className="text-[10px] text-slate-500">v2.4.0</div>
        </div>

        {/* Screen Display Area */}
        <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-b-xl overflow-hidden shadow-inner">
          {children}
        </div>
      </div>

      {/* Laptop Base / Keyboard Hinge */}
      <div className="relative mx-auto w-[105%] -ml-[2.5%] h-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-xl shadow-lg flex items-center justify-center border-t border-slate-600/50">
        <div className="w-20 h-1 rounded-full bg-slate-950/60" />
      </div>
    </div>
  );
}
