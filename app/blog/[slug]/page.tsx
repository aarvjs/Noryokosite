import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { ArrowLeft, Cpu } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Norkl Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#F9F9FB] pt-32 pb-16">
      <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-6 border-b border-slate-200">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 hover:text-indigo-700 uppercase font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-100 text-indigo-700 font-semibold">
            {post.category}
          </span>
          <span className="text-xs font-mono text-slate-500">{post.readTime}</span>
          <span className="text-xs font-mono text-slate-500">{post.publishedAt}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
          {post.title}
        </h1>

        <div className="flex items-center gap-2 pt-2 border-t border-slate-200 text-xs font-mono text-slate-500">
          <span className="font-semibold text-slate-900">{post.author.name}</span>
          <span>•</span>
          <span>{post.author.role}</span>
        </div>
      </section>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-8 py-16 space-y-8 text-slate-800 leading-relaxed">
        <p className="text-lg text-slate-700 font-light italic border-l-4 border-indigo-600 pl-4 py-1">
          {post.content.intro}
        </p>

        {post.content.sections.map((section, idx) => (
          <div key={idx} className="space-y-3 pt-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{section.heading}</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-light">{section.body}</p>
          </div>
        ))}

        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm font-semibold text-slate-900">Summary:</p>
          <p className="text-xs text-slate-600 font-light mt-1">{post.content.conclusion}</p>
        </div>
      </article>

      <FinalCTA />
    </main>
  );
}
