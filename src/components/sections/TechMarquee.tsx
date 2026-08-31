"use client";

import React from "react";

// ============================================================================
// Small Clean Monochromatic SVG Logos for 14 Core Technologies
// ============================================================================

function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="currentColor" />
      </mask>
      <g mask="url(#mask-next)">
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.8136V70.2641L138.86 163.666C142.668 161.854 146.236 159.8 149.508 157.52Z" fill="white" />
        <rect x="115" y="54" width="13" height="72" fill="white" />
      </g>
    </svg>
  );
}

function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 3h21A1.5 1.5 0 0124 4.5v15a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 19.5v-15A1.5 1.5 0 011.5 3zM10.8 10.9V9.2H4.6v1.7h2v7h2.2v-7h2zM18.8 13.9c-.3-.5-.7-.9-1.3-1.1l-1.3-.4c-.5-.2-.8-.3-1-.5s-.3-.4-.3-.7c0-.3.1-.5.4-.7.3-.2.7-.3 1.2-.3.6 0 1.1.2 1.5.5.4.3.6.7.7 1.2h2c-.1-1-.6-1.8-1.4-2.4-.8-.6-1.8-.9-3-.9-1.2 0-2.2.3-2.9.9s-1.1 1.4-1.1 2.3c0 .7.2 1.3.7 1.8.5.5 1.2.9 2.2 1.2l1.1.4c.5.2.9.4 1.1.6.2.2.3.5.3.9 0 .4-.2.7-.5 1-.4.2-1 .4-1.6.4-.7 0-1.3-.2-1.8-.6s-.8-1-1-1.7h-2.1c.1 1.2.7 2.2 1.6 2.8.9.6 2.1.9 3.4.9 1.4 0 2.5-.3 3.3-1s1.2-1.5 1.2-2.6c0-.8-.3-1.5-.7-2z" />
    </svg>
  );
}

function NodejsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7.7v10.6L12 24l10-5.7V7.7L12 2zm-1.8 14.8h-1.6v-5.2h1.6v5.2zm4.8 0h-1.6v-2.7c0-.7-.3-1.1-.9-1.1-.7 0-1.1.4-1.1 1.1v2.7h-1.6v-5.2h1.6v.7c.3-.5.9-.8 1.6-.8 1.3 0 2 0.8 2 2.3v3z" />
    </svg>
  );
}

function PythonIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.87 1.05c-4.14 0-3.87 1.8-3.87 1.8l.01 1.87h3.93v.56H6.38S3.5 4.96 3.5 9.1c0 4.14 2.5 3.99 2.5 3.99h1.5v-2.12c0-2.42 2.05-2.42 2.05-2.42h3.93s1.95.03 1.95-1.92V3.88c0-1.95-1.95-2.83-3.56-2.83zm-2.07 1.3a.68.68 0 1 1 0 1.36.68.68 0 0 1 0-1.36zm2.33 20.6c4.14 0 3.87-1.8 3.87-1.8l-.01-1.87h-3.93v-.56h5.56s2.88.32 2.88-3.82c0-4.14-2.5-3.99-2.5-3.99h-1.5v2.12c0 2.42-2.05 2.42-2.05 2.42h-3.93s-1.95-.03-1.95 1.92v2.75c0 1.95 1.95 2.83 3.56 2.83zm2.07-1.3a.68.68 0 1 1 0-1.36.68.68 0 0 1 0 1.36z" />
    </svg>
  );
}

function FlutterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.314 0L2.3 12 6 15.7 18.014 3.686zM6 15.7l6.014 6.014H18.02L12.007 15.7zM18.014 15.7l-3.714 3.714 3.714 3.714h6.014l-3.714-3.714 3.714-3.714z" />
    </svg>
  );
}

function ReactNativeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <ReactIcon className={className} />;
}

function PostgresIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93c-3.95 0-6.14-2.51-6.14-5.26 0-3.32 2.94-5.67 6.45-5.67 3.32 0 5.69 2.05 5.69 4.88 0 3.26-2.55 6.05-6 6.05zm.05-9.17c-2.3 0-4.22 1.48-4.22 3.86 0 1.95 1.39 3.56 3.98 3.56 2.37 0 4.1-1.68 4.1-4.14 0-1.92-1.46-3.28-3.86-3.28z" />
    </svg>
  );
}

function MongodbIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5c-4.5 5.7-6 9.4-6 12.3 0 4.3 3 7.7 6 8.7 3-1 6-4.4 6-8.7 0-2.9-1.5-6.6-6-12.3zm.5 17.8V6.2c2.8 3.7 3.8 6.5 3.8 8.6 0 2.7-1.8 5.1-3.8 5.7z" />
    </svg>
  );
}

function FirebaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.89 15.67L6.7 3.01c.06-.28.43-.36.6-.13l2.84 3.91-6.25 8.88zm16.14.07L17.7 3.01c-.06-.28-.43-.36-.6-.13l-1.98 2.73 4.91 10.13zM13.78 7.37L12.3.93c-.08-.34-.54-.34-.62 0L9.93 8.35l3.85-0.98zm-8.8 9.94l6.57 3.72c.28.16.63.16.91 0l6.57-3.72-2.14-10.4-11.91 10.4z" />
    </svg>
  );
}

function AwsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.75 14.86c-2.4 1.77-5.88 2.7-8.88 2.7-4.22 0-8.02-1.55-10.87-4.13-.23-.21-.03-.49.25-.33 3.08 1.79 6.89 2.87 10.62 2.87 2.66 0 5.62-.64 8.28-1.97.4-.2.78.29.6.86zm1.75-2.06c-.31-.4-2.02-.19-2.79-.1-.23.03-.27-.16-.06-.31 1.36-.95 3.58-.68 3.83-.37.26.32-.07 2.54-1.35 3.59-.2.16-.38.07-.28-.15.34-.73.96-2.26.65-2.66z" />
    </svg>
  );
}

function DockerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.98 11.08h1.94v1.83h-1.94zm-2.44 0h1.94v1.83h-1.94zm-2.45 0h1.94v1.83H9.09zm-2.44 0h1.94v1.83H6.65zm7.33-2.34h1.94v1.83h-1.94zm-2.44 0h1.94v1.83h-1.94zm-2.45 0h1.94v1.83H9.09zm7.33-2.34h1.94v1.83h-1.94zm-14.7 9.87c.36.96 1.04 1.83 1.95 2.53 2.12 1.63 5.4 2.12 8.7 1.88 3.53-.26 6.8-1.78 8.73-4.52.26-.37.49-.77.67-1.18.23-.52-.07-.76-.58-.76h-2.12c-.52 0-.82.28-1.04.75-.45.96-1.3 1.63-2.32 1.95-1.08.34-2.28.34-3.36 0-1.08-.34-1.94-.99-2.4-1.95-.21-.47-.51-.75-1.03-.75H1.47c-.52 0-.8.24-.58.76z" />
    </svg>
  );
}

function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function GitIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.71 2.71c.643-.227 1.385-.088 1.9.428.724.724.724 1.9 0 2.624-.724.723-1.9.723-2.623 0-.54-.54-.672-1.32-.397-1.986l-2.52-2.52v6.67c.18.085.348.21.49.352.723.724.723 1.9 0 2.624-.724.723-1.9.723-2.624 0-.724-.724-.724-1.9 0-2.624.185-.186.4-.316.63-.396V8.657c-.23-.08-.445-.21-.63-.396-.54-.54-.67-1.32-.397-1.987l-2.73-2.73L.452 14.022c-.603.604-.603 1.582 0 2.188l10.48 10.48c.604.603 1.582.603 2.187 0l10.427-10.427c.604-.604.604-1.582 0-2.188z" />
    </svg>
  );
}

const LOGO_ITEMS = [
  { name: "Next.js", icon: NextjsIcon },
  { name: "React", icon: ReactIcon },
  { name: "TypeScript", icon: TsIcon },
  { name: "Node.js", icon: NodejsIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "React Native", icon: ReactNativeIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "MongoDB", icon: MongodbIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "AWS", icon: AwsIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Tailwind CSS", icon: TailwindIcon },
  { name: "Git", icon: GitIcon },
];

export default function TechMarquee() {
  return (
    <section className="w-full py-5 bg-white border-y border-amber-200/60 overflow-hidden text-slate-900 select-none">
      {/* Infinite Horizontal Marquee Track (Seamless Duplicate for 100% Zero-Jump Loop) */}
      <div className="relative flex overflow-x-hidden w-full">
        <div className="animate-marquee-track flex items-center gap-10 sm:gap-14 whitespace-nowrap">
          {[...LOGO_ITEMS, ...LOGO_ITEMS].map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 shrink-0 px-2 cursor-pointer group transition-transform duration-200 hover:scale-105"
              >
                <Icon className="w-5 h-5 text-slate-700 group-hover:text-amber-800 transition-colors" />
                <span className="text-xs font-mono font-medium tracking-wide text-slate-700 group-hover:text-amber-900 transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
