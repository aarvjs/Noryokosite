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
            scrolled
              ? "bg-[#0B0F19]/90 text-white backdrop-blur-xl border border-white/15 w-full max-w-5xl py-2.5 shadow-2xl"
              : "bg-transparent text-white border-0 shadow-none w-full max-w-6xl"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-lg group">
            <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform shadow-sm">
              N
            </div>
            <span className="font-bold tracking-tight text-lg text-white">
              NORYOKO<span className="text-indigo-400">.</span>
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
                        ? "bg-white/20 text-white font-semibold"
                        : scrolled
                        ? "text-slate-300 hover:text-white hover:bg-white/10"
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
                scrolled
                  ? "bg-indigo-600 text-white shadow-indigo-600/20"
                  : "bg-white text-slate-950 hover:bg-slate-100 shadow-lg"
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
            className="md:hidden p-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Services Mega Menu Dropdown (Centered Header Level Position) */}
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
