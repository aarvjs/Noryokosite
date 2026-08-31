export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "AI" | "Architecture" | "Design" | "Growth";
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
    }[];
    conclusion: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-zero-latency-rag-architecture-with-vector-databases",
    title: "Engineering Zero-Latency RAG Architecture with Vector Databases",
    excerpt: "How we reduced semantic vector retrieval latency from 450ms to sub-35ms usingpgvector indexing, semantic caching, and streaming LLM responses.",
    category: "AI",
    readTime: "7 min read",
    publishedAt: "August 24, 2026",
    author: {
      name: "Engineering Team",
      role: "AI Architecture Group"
    },
    content: {
      intro: "Retrieval-Augmented Generation (RAG) has quickly become the industry standard for connecting Large Language Models to enterprise knowledge bases. However, naive RAG implementations often introduce unacceptable 500ms+ retrieval bottlenecks.",
      sections: [
        {
          heading: "1. The Vector Search Bottleneck",
          body: "When querying millions of text embeddings, unindexed exact nearest neighbor search scales linearly with corpus size O(N). To achieve predictable real-time response times, HNSW (Hierarchical Navigable Small World) indexing is mandatory."
        },
        {
          heading: "2. Implementing In-Memory Semantic Caching",
          body: "Over 40% of user queries in enterprise knowledge bases exhibit high semantic similarity to recent queries. By inserting a Redis semantic cache layer ahead of the vector database, we serve recurring intent matches in under 4ms."
        },
        {
          heading: "3. Streaming Token Delivery via Server-Sent Events",
          body: "Rather than waiting for the entire LLM response completion before rendering, we stream tokens chunk-by-chunk using HTTP Server-Sent Events (SSE) directly to React components."
        }
      ],
      conclusion: "Combining HNSW vector indexes, semantic Redis caching, and edge token streaming yields an exceptionally fast user experience that feels completely instantaneous."
    }
  },
  {
    slug: "mastering-nextjs-16-app-router-performance-and-server-components",
    title: "Mastering Next.js 16 App Router Performance & Server Components",
    excerpt: "Architectural patterns for eliminating client bundle bloat, optimizing Core Web Vitals, and implementing clean data fetching boundaries.",
    category: "Architecture",
    readTime: "9 min read",
    publishedAt: "August 18, 2026",
    author: {
      name: "Frontend Studio",
      role: "Web Architecture Lead"
    },
    content: {
      intro: "Next.js App Router represents a fundamental paradigm shift in React application development. By defaulting components to the server, we move heavy data fetching and parsing away from the browser.",
      sections: [
        {
          heading: "1. Decoupling Interactive Islands from Static Layouts",
          body: "A common anti-pattern is placing `'use client'` at the root of a page layout. Instead, push client boundaries down to the smallest interactive leaf nodes (such as a floating button or modal toggle)."
        },
        {
          heading: "2. Parallel and Intercepted Routing",
          body: "Next.js parallel routes allow simultaneous rendering of independent sub-pages inside the same viewport without waterfall blocking."
        }
      ],
      conclusion: "Adopting strict server-first component boundaries drastically improves Lighthouse performance scores while keeping JavaScript bundles minimal."
    }
  },
  {
    slug: "designing-editorial-ui-systems-that-dont-look-like-saas-templates",
    title: "Designing Editorial UI Systems That Don't Look Like SaaS Templates",
    excerpt: "Why modern websites are beginning to look identical, and how editorial layout compositions, spatial rhythm, and curated typography restore distinct brand personality.",
    category: "Design",
    readTime: "6 min read",
    publishedAt: "August 10, 2026",
    author: {
      name: "Product Design",
      role: "Design System Lead"
    },
    content: {
      intro: "Over-reliance on generic UI component libraries has created a homogeneous web landscape dominated by repetitive 3-column card grids, soft floating blobs, and identical blue rounded buttons.",
      sections: [
        {
          heading: "1. Typographic Hierarchy over Decorative Blobs",
          body: "Great visual design relies on typography, whitespace, and structural contrast. By establishing sharp contrast between small technical labels and bold editorial headlines, a site achieves instant authority."
        },
        {
          heading: "2. Intentional Asymmetry and Editorial Layouts",
          body: "Breaking away from symmetrical grid cards allows key content to command visual attention. Staggered imagery, large section numbers, and subtle hairline borders create a refined publication aesthetic."
        }
      ],
      conclusion: "A human-designed website communicates confidence through restraint, exceptional spatial rhythm, and purposeful motion."
    }
  }
];
