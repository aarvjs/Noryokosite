"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/navigation";
import ServicesMegaMenu from "./ServicesMegaMenu";
import MobileMenu from "./MobileMenu";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isLightPage = pathname !== "/" && pathname !== "/home";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col items-center px-4 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
        {/* Main Floating Pill Container */}
        <div
          className={`pointer-events-auto relative flex items-center justify-between gap-6 px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled || isLightPage
              ? "bg-[#FAF8F5]/90 text-slate-900 backdrop-blur-xl border border-amber-200/80 w-full max-w-5xl py-2.5 shadow-[0_10px_30px_rgba(217,119,6,0.1)]"
              : "bg-transparent text-white border-0 shadow-none w-full max-w-6xl"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-lg group">
            <div className="w-7 h-7 rounded-full bg-amber-700 flex items-center justify-center text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform shadow-sm">
              N
            </div>
            <span className={`font-bold tracking-tight text-lg transition-colors ${scrolled || isLightPage ? "text-slate-900" : "text-white"}`}>
              NORYOKO<span className={scrolled || isLightPage ? "text-amber-700" : "text-amber-400"}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {MAIN_NAVIGATION.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const isServices = item.href === "/services";

              return (
                <div
                  key={item.href}
                  onMouseEnter={isServices ? handleServicesEnter : undefined}
                  onMouseLeave={isServices ? handleServicesLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                      isActive
                        ? scrolled || isLightPage
                          ? "bg-amber-200/80 text-slate-900 font-bold"
                          : "bg-white/20 text-white font-semibold"
                        : scrolled || isLightPage
                        ? "text-slate-700 hover:text-slate-900 hover:bg-amber-100/60"
                        : "text-white/90 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isServices && <ChevronDown className="w-3 h-3 opacity-60" />}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action CTA (Let's Talk) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className={`btn-water-fill flex items-center gap-1.5 px-6 py-2 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm ${
                scrolled || isLightPage
                  ? "bg-amber-700 text-white hover:bg-amber-800 shadow-amber-700/20"
                  : "bg-amber-600 text-white hover:bg-amber-500 shadow-lg shadow-amber-600/30"
              }`}
            >
              <div className="btn-water-bg" />
              <span className="relative z-10">Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-2 rounded-full border transition-colors ${
              scrolled || isLightPage
                ? "border-amber-300 text-slate-900 hover:bg-amber-100/60"
                : "border-white/15 text-white hover:bg-white/10"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Services Mega Menu Dropdown */}
        {servicesOpen && (
          <div
            className="relative w-full flex justify-center pointer-events-auto"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <ServicesMegaMenu
              onClose={() => setServicesOpen(false)}
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            />
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
