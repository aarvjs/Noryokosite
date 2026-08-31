import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingNavbar from "@/components/navigation/FloatingNavbar";
import MobileFloatingCTA from "@/components/common/MobileFloatingCTA";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NORYOKO | Digital Engineering Studio & Product Architect",
    template: "%s | NORYOKO Studio",
  },
  description: "We engineer digital products, platforms, and AI agent systems that help businesses grow. Software, web, mobile, AI, cloud, and digital growth.",
  keywords: ["NORYOKO", "Software Development", "Web Development", "Mobile Apps", "AI Agents", "Next.js", "Cloud DevOps", "SEO Engineering"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-slate-900 selection:bg-amber-600 selection:text-white">
        <SmoothScroll>
          <FloatingNavbar />
          <div className="flex-1">{children}</div>
          <MobileFloatingCTA />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
