"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CATEGORIES = [
  {
    name: "Backend",
    items: ["NestJS", "Node.js", "PostgreSQL", "Prisma ORM", "Redis", "BullMQ"],
  },
  {
    name: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "Vercel", "Render", "GitHub Actions", "JWT · OAuth 2.0"],
  },
  {
    name: "AI / Agents",
    items: ["Anthropic Claude", "n8n Workflows", "OpenAI API", "Multi-agent", "Puppeteer"],
  },
];

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Technologies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 800,
            color: "var(--text)",
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            marginBottom: "4rem",
          }}
        >
          Stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: EASE }}
            >
              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "0.75rem",
                }}
              >
                {cat.name}
              </p>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
