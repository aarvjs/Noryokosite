import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowUpRight, Cpu } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Blog & Technical Insights | Norkl Studio",
  description: "Read technical articles on RAG architecture, Next.js 16 performance, vector search optimization, and editorial UI design.",
};

export default function BlogIndexPage() {
  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>INSIGHTS & PUBLICATIONS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          TECHNICAL BLOG & <br />
          <span className="text-indigo-600">ENGINEERING ESSAYS.</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
          Deep dives into vector database optimization, multi-agent orchestration pipelines, Next.js server component boundaries, and editorial product design.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-500 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono text-indigo-600 font-bold uppercase">{post.category}</span>
                  <span className="text-[11px] font-mono text-slate-400">{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-600 text-xs font-light leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{post.publishedAt}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
