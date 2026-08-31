"use client";

import React from "react";
import { Bot, Cpu, Globe, Smartphone, TrendingUp } from "lucide-react";

export type HeroServiceKey = "SOFTWARE" | "WEB" | "APP" | "AI" | "GROWTH";

interface OrbServiceSelectorProps {
  activeService: HeroServiceKey;
  onSelectService: (key: HeroServiceKey) => void;
}

const ORB_ITEMS: { key: HeroServiceKey; label: string; icon: any }[] = [
  { key: "SOFTWARE", label: "SOFTWARE", icon: Cpu },
  { key: "WEB", label: "WEB", icon: Globe },
  { key: "APP", label: "APP", icon: Smartphone },
  { key: "AI", label: "AI", icon: Bot },
  { key: "GROWTH", label: "GROWTH", icon: TrendingUp },
];

export default function OrbServiceSelector({ activeService, onSelectService }: OrbServiceSelectorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto pt-6 border-t border-white/10">
      <div className="flex items-center justify-between gap-4 sm:gap-8 overflow-x-auto pb-2 px-2 no-scrollbar">
        {ORB_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeService === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onSelectService(item.key)}
              className="flex flex-col items-center gap-2 group focus:outline-none flex-shrink-0"
            >
              {/* Circular Orb */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50 scale-110 border-2 border-indigo-400 ring-4 ring-indigo-500/20"
                    : "bg-white/10 text-white/70 hover:text-white hover:bg-white/20 border border-white/15 scale-100"
                }`}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />

                {/* Animated Pulsing Ring for Active Orb */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-indigo-400/60 animate-ping opacity-40 pointer-events-none" />
                )}
              </div>

              {/* Service Label */}
              <span
                className={`text-[11px] font-mono tracking-widest uppercase transition-all ${
                  isActive ? "text-indigo-400 font-bold" : "text-white/60 group-hover:text-white font-medium"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
