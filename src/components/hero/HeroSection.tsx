"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThreePhonesFrame from "../devices/ThreePhonesFrame";
import { MapPin } from "lucide-react";

// SVG Icon definitions for Social Media Group
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z" />
    </svg>
  );
}

function WhatsappIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterXIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { name: "WhatsApp", href: "https://whatsapp.com", icon: WhatsappIcon },
  { name: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { name: "X / Twitter", href: "https://x.com", icon: TwitterXIcon },
  { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

export default function HeroSection() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-[#0A0D14] text-white overflow-hidden pt-28 pb-8 px-4 sm:px-8">
      {/* Background Video Layer — Instant Video Preload & Rendering (Zero Dark Blue Flash) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0D14]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-75 scale-105 transition-opacity duration-300"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_075824_7c8a2ef3-826c-43ca-81a1-162429faa306.mp4"
            type="video/mp4"
          />
          <source src="/heosection.mp4" type="video/mp4" />
        </video>

        {/* Subtle Neutral Overlay */}
        <div className="absolute inset-0 hero-video-overlay" />
      </div>

      {/* Left-Side Lucknow Software Company Badge Card */}
      <div className="absolute left-3 sm:left-16 top-[72%] -translate-y-1/2 z-30 hidden lg:flex w-[240px] flex-col p-4 rounded-2xl bg-white/15 text-white backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(255,255,255,0.18)] text-left gap-2">
        <div className="flex items-center gap-2 text-[9px] font-mono font-semibold uppercase tracking-widest text-white/80">
          <MapPin className="w-3.5 h-3.5" />
          <span>LUCKNOW, INDIA</span>
        </div>

        <div className="h-px bg-white/20" />

        <h3 className="text-sm font-semibold leading-snug">
          Software Built for Your Business
        </h3>

        <p className="text-[11px] text-white/75 leading-relaxed">
          We build websites, apps and digital solutions for growing businesses.
        </p>

        <span className="text-[10px] font-medium text-white/90">
          Let’s build something great →
        </span>
      </div>

      {/* Right-Side Vertical Social Media Icon Bar — Adaptive Color */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3 transition-all duration-300">
        {SOCIAL_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${
                scrolledPastHero
                  ? "bg-white text-slate-800 border border-amber-300/80 shadow-md hover:bg-amber-600 hover:text-white hover:border-amber-500"
                  : "bg-white/10 text-white border border-white/15 backdrop-blur-md hover:bg-amber-600 hover:text-white hover:border-amber-500"
              }`}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>

      {/* Main Centered Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center items-center py-6 text-center space-y-6">
        {/* Top-Centered NORYOKO Clean Wordmark Branding */}
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-widest text-white font-mono uppercase">
            NORYOKO
          </h1>

          {/* Subtitle */}
          <div className="text-xs sm:text-sm font-mono tracking-widest text-amber-400 font-bold uppercase pt-1">
            DIGITAL SOFTWARE & TECHNOLOGY COMPANY
          </div>
        </div>

        {/* Short Premium Supporting Copy */}
        <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light leading-relaxed">
          We design and build software, websites, mobile apps and digital solutions for modern businesses.
        </p>

        {/* 3-Phone Smartphone Stack Showcase */}
        <div className="w-full pt-2">
          <ThreePhonesFrame />
        </div>
      </div>
    </section>
  );
}
