"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const NUMBERS = [
  { value: "6", label: "Projets en production" },
  { value: "201+", label: "Templates web" },
  { value: "16", label: "Agents IA autonomes" },
  { value: "3+", label: "Années d'expérience" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="section-divider mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p
              className="mb-6"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              À propos
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Bâtisseur de systèmes
              <br />
              plutôt que développeur
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.85,
                maxWidth: "50ch",
              }}
            >
              Je conçois des systèmes complets — du backend NestJS à
              l'orchestration d'agents IA autonomes. Fondateur de l'écosystème
              Aevia, je construis des SaaS production-ready que j'opère
              moi-même : multi-tenant, observabilité, workflows n8n, Claude API.
            </p>
          </motion.div>

          {/* Right: Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="grid grid-cols-2 gap-x-8 gap-y-10 content-start"
          >
            {NUMBERS.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.22 + i * 0.08, ease: EASE }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                    fontWeight: 800,
                    color: "var(--text)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {n.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {n.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
