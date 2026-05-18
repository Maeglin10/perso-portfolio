"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ROW_1 = [
  "NestJS", "Next.js 15", "TypeScript", "React 19", "PostgreSQL", "Prisma ORM",
  "Docker", "Vercel", "Render", "GitHub Actions", "JWT Auth", "OAuth 2.0",
];

const ROW_2 = [
  "Redis", "BullMQ", "WebSockets", "n8n Workflows", "Anthropic Claude API",
  "OpenAI API", "Framer Motion", "Tailwind CSS", "Puppeteer", "REST API",
];

// Color assignment per tech for variety
const CHIP_COLORS: Record<string, { border: string; text: string; bg: string }> = {
  "NestJS": { border: "#ef444440", text: "#ef4444", bg: "#ef444410" },
  "Next.js 15": { border: "#f1f5f930", text: "#f1f5f9", bg: "#f1f5f908" },
  "TypeScript": { border: "#3b82f640", text: "#60a5fa", bg: "#3b82f610" },
  "React 19": { border: "#22d3ee40", text: "#22d3ee", bg: "#22d3ee10" },
  "PostgreSQL": { border: "#a855f740", text: "#a855f7", bg: "#a855f710" },
  "Prisma ORM": { border: "#22d3ee35", text: "#67e8f9", bg: "#22d3ee0d" },
  "Docker": { border: "#3b82f640", text: "#93c5fd", bg: "#3b82f610" },
  "Vercel": { border: "#f1f5f930", text: "#f1f5f9", bg: "#f1f5f908" },
  "Render": { border: "#22c55e35", text: "#86efac", bg: "#22c55e10" },
  "GitHub Actions": { border: "#a855f740", text: "#c084fc", bg: "#a855f710" },
  "JWT Auth": { border: "#f59e0b40", text: "#fcd34d", bg: "#f59e0b10" },
  "OAuth 2.0": { border: "#f59e0b35", text: "#fbbf24", bg: "#f59e0b0d" },
  "Redis": { border: "#ef444440", text: "#fca5a5", bg: "#ef444410" },
  "BullMQ": { border: "#f97316 40", text: "#fb923c", bg: "#f9731610" },
  "WebSockets": { border: "#22d3ee40", text: "#22d3ee", bg: "#22d3ee10" },
  "n8n Workflows": { border: "#ec489940", text: "#f472b6", bg: "#ec489910" },
  "Anthropic Claude API": { border: "#a855f740", text: "#a855f7", bg: "#a855f710" },
  "OpenAI API": { border: "#22c55e40", text: "#4ade80", bg: "#22c55e10" },
  "Framer Motion": { border: "#ec489940", text: "#f9a8d4", bg: "#ec489910" },
  "Tailwind CSS": { border: "#22d3ee40", text: "#67e8f9", bg: "#22d3ee10" },
  "Puppeteer": { border: "#22c55e40", text: "#86efac", bg: "#22c55e10" },
  "REST API": { border: "#f1f5f930", text: "#94a3b8", bg: "#f1f5f908" },
};

function Chip({ label }: { label: string }) {
  const c = CHIP_COLORS[label] ?? { border: "#ffffff20", text: "#94a3b8", bg: "#ffffff08" };

  return (
    <div
      className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg mx-2 transition-all duration-200 cursor-default select-none"
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.72rem",
        letterSpacing: "0.05em",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = `0 0 16px ${c.text}30`;
        el.style.borderColor = c.text + "70";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.borderColor = c.border;
      }}
    >
      {label}
    </div>
  );
}

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const tripleRow1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const tripleRow2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section id="stack" ref={ref} className="relative z-10 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "#a855f7",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          — Technologies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            fontWeight: 700,
            color: "#f1f5f9",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          TECH STACK
        </motion.h2>
      </div>

      {/* Fade edges */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, #030712, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #030712, transparent)",
          }}
        />

        {/* Row 1 — left */}
        <div className="overflow-hidden mb-4">
          <div className="marquee-track py-2">
            {tripleRow1.map((label, i) => (
              <Chip key={`r1-${label}-${i}`} label={label} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="overflow-hidden">
          <div className="marquee-track-reverse py-2">
            {tripleRow2.map((label, i) => (
              <Chip key={`r2-${label}-${i}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
