"use client";

import React, { useEffect, useState } from "react";
import PhoneFrame from "./PhoneFrame";
import { Activity, Bell, ChevronRight, Clock, Heart, Home, Search, ShieldCheck, ShoppingBag, User, Wallet } from "lucide-react";

export default function ThreePhonesFrame() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Fast, smooth spring animation on page load, refresh or navigation back
    const timer = setTimeout(() => {
      setMounted(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative w-full max-w-2xl mx-auto h-[400px] sm:h-[460px] flex items-center justify-center my-2 overflow-visible transition-all duration-700 ease-out transform ${
        mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95"
      }`}
    >
      {/* Phone 1: Left Phone (Slightly Behind - z-10 max z-20) */}
      <div className="absolute left-1 sm:left-4 top-8 sm:top-10 z-10 scale-90 sm:scale-95 opacity-90 -rotate-6 transition-all duration-500 hover:scale-100 hover:z-20 hover:opacity-100">
        <PhoneFrame className="max-w-[195px] sm:max-w-[235px]">
          <div className="p-3 space-y-2.5 bg-slate-950 text-white text-left h-full flex flex-col justify-between">
            {/* Top Status & App Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-bold text-white tracking-wide">FOOD RUNNER</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300">LIVE</span>
            </div>

            {/* Delivery Card */}
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                <span>ESTIMATED ARRIVAL</span>
                <Clock className="w-2.5 h-2.5 text-amber-400" />
              </div>
              <div className="text-xs font-bold text-emerald-400">18 Mins • Live Tracking</div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-1">
                <div className="bg-emerald-400 h-full w-[70%]" />
              </div>
            </div>

            {/* Product Item Card */}
            <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold text-white">Artisan Neapolitan Pizza</div>
                <div className="text-[8px] text-slate-400">Extra Mozzarella & Basil</div>
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-400">$18.50</span>
            </div>

            {/* Bottom Nav Icons */}
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-around text-slate-400">
              <Home className="w-3.5 h-3.5 text-amber-400" />
              <Search className="w-3.5 h-3.5" />
              <ShoppingBag className="w-3.5 h-3.5" />
              <User className="w-3.5 h-3.5" />
            </div>
          </div>
        </PhoneFrame>
      </div>

      {/* Phone 2: CENTER PHONE (ALWAYS IN FRONT - z-40) */}
      <div className="relative z-40 scale-105 sm:scale-115 shadow-2xl transition-transform duration-500 hover:scale-120 hover:z-50">
        <PhoneFrame className="max-w-[225px] sm:max-w-[265px]">
          <div className="p-3.5 space-y-3 bg-slate-950 text-white text-left h-full flex flex-col justify-between">
            {/* Top App Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-white tracking-wide">AURA HEALTH</span>
              </div>
              <Bell className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* Biometric Card */}
            <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-900/50 via-slate-900 to-slate-950 border border-indigo-500/40 space-y-1.5 shadow-md">
              <div className="flex items-center justify-between text-[9px] font-mono text-indigo-300">
                <span>HEART RATE PULSE</span>
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400 animate-pulse" />
              </div>
              <div className="text-lg font-bold text-emerald-400">72 BPM • Resting</div>
              <div className="text-[9px] text-slate-300 font-mono">Syncing Apple Watch & HealthKit</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-emerald-400 h-full w-[85%]" />
              </div>
            </div>

            {/* Daily Activity Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] text-slate-400 font-mono">STEPS TODAY</div>
                <div className="text-xs font-bold text-white mt-0.5">8,420 / 10k</div>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[8px] text-slate-400 font-mono">ACTIVE CAL</div>
                <div className="text-xs font-bold text-indigo-400 mt-0.5">540 kcal</div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="w-full py-2 rounded-xl bg-indigo-600 text-white text-[10px] font-bold text-center uppercase tracking-wider shadow-sm flex items-center justify-center gap-1">
              <span>View Biometric Trends</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </PhoneFrame>
      </div>

      {/* Phone 3: Right Phone (Slightly Behind - z-10 max z-20) */}
      <div className="absolute right-1 sm:right-4 top-8 sm:top-10 z-10 scale-90 sm:scale-95 opacity-90 rotate-6 transition-all duration-500 hover:scale-100 hover:z-20 hover:opacity-100">
        <PhoneFrame className="max-w-[195px] sm:max-w-[235px]">
          <div className="p-3 space-y-2.5 bg-slate-950 text-white text-left h-full flex flex-col justify-between">
            {/* Top Status Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[10px] font-bold text-white tracking-wide">STRATA PAY</span>
              </div>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>

            {/* Wallet Card */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-slate-900 border border-purple-500/30 space-y-1">
              <div className="text-[8px] text-purple-300 font-mono">TOTAL BALANCE</div>
              <div className="text-sm font-bold text-white">$14,280.50</div>
              <div className="text-[8px] text-slate-400 font-mono">•••• 4829 Visa Corporate</div>
            </div>

            {/* Transaction Feed */}
            <div className="space-y-1">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[9px]">
                <span>Cloud API Server</span>
                <span className="text-rose-400 font-mono">-$42.00</span>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[9px]">
                <span>Client Payout Received</span>
                <span className="text-emerald-400 font-mono">+$2,400.00</span>
              </div>
            </div>

            {/* Bottom Nav */}
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-around text-slate-400">
              <Wallet className="w-3.5 h-3.5 text-purple-400" />
              <Activity className="w-3.5 h-3.5" />
              <User className="w-3.5 h-3.5" />
            </div>
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
