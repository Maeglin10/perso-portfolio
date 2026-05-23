"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CATEGORIES = [
  {
    name: "Langages",
    items: ["TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    name: "Backend",
    items: ["NestJS", "Node.js", "Prisma ORM", "PostgreSQL", "Redis", "BullMQ"],
  },
  {
    name: "Frontend",
    items: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Plateforme",
    items: ["Vercel", "Render", "GitHub Actions", "Docker", "OAuth 2.0 · JWT"],
  },
  {
    name: "IA & Automatisation",
    items: ["Anthropic Claude", "n8n", "Vector search", "Multi-agent"],
  },
  {
    name: "Outillage",
    items: ["Jest · Vitest", "ESLint · Prettier", "Sentry", "Playwright"],
  },
];

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stack"
      ref={ref}
      className="relative py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label-mono mb-4"
          >
            Compétences techniques
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="heading-display"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
            }}
          >
            Stack technique
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
            >
              <p
                className="label-mono pb-3 mb-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {cat.name}
              </p>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.92rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="section-divider mt-28" />
      </div>
    </section>
  );
}
