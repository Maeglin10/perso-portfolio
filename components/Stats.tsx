"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FACTS = [
  { label: "Basé à", value: "Paris, France" },
  { label: "Disponible", value: "Remote · Freelance ou plein-temps" },
  { label: "Expérience", value: "3+ ans en production" },
  { label: "Stack principale", value: "TypeScript, NestJS, Next.js" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="apropos"
      className="relative py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="section-divider mb-24" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="label-mono mb-6">02 / 04 · À propos</p>
            <h2
              className="heading-display"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
              }}
            >
              Ingénieur, opérateur,
              <br />
              fondateur.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <p
              className="prose-body mb-10"
              style={{ maxWidth: "60ch" }}
            >
              Je construis des SaaS production-grade que j&apos;opère moi-même.
              Mon approche : architecture multi-tenant, observabilité,
              tests, sécurité par défaut. Je conçois aussi bien la couche
              backend (NestJS, Prisma, PostgreSQL) que l&apos;interface
              (Next.js, React, Tailwind), et j&apos;orchestre des agents IA
              avec l&apos;API Anthropic et n8n.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06, ease: EASE }}
                  className="border-t pt-3"
                  style={{ borderColor: "var(--border)" }}
                >
                  <dt className="label-mono mb-1.5">{fact.label}</dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      lineHeight: 1.4,
                    }}
                  >
                    {fact.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
}
