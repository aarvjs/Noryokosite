"use client";

import React from "react";

export type ServiceKey = "SOFTWARE" | "WEB" | "MOBILE" | "AI" | "GROWTH";

interface ServiceSelectorProps {
  activeService: ServiceKey;
  onSelectService: (key: ServiceKey) => void;
}

const SERVICES: { key: ServiceKey; label: string }[] = [
  { key: "SOFTWARE", label: "SOFTWARE" },
  { key: "WEB", label: "WEB" },
  { key: "MOBILE", label: "MOBILE" },
  { key: "AI", label: "AI" },
  { key: "GROWTH", label: "GROWTH" },
];

export default function ServiceSelector({ activeService, onSelectService }: ServiceSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto pt-6 border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
        {SERVICES.map((item) => {
          const isActive = activeService === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelectService(item.key)}
              className="relative group py-2 flex flex-col items-start transition-all text-left"
            >
              <span
                className={`text-xs font-mono tracking-widest transition-all ${
                  isActive ? "text-indigo-400 font-bold scale-105" : "text-white/50 group-hover:text-white/80 font-medium"
                }`}
              >
                {item.label}
              </span>

              {/* Active Underline Indicator */}
              <div
                className={`h-[2px] mt-1.5 transition-all duration-300 ${
                  isActive ? "w-full bg-indigo-500 shadow-sm shadow-indigo-500/50" : "w-0 bg-white/20 group-hover:w-1/2"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
