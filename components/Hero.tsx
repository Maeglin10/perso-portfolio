"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20 pt-32 pb-20"
    >
      <div className="mx-auto max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5 mb-12"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span className="label-mono">
            Disponible · Paris · Remote
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="heading-display"
          style={{
            fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)",
            letterSpacing: "-0.028em",
            lineHeight: 1.02,
            maxWidth: "18ch",
            marginBottom: "2rem",
          }}
        >
          Développeur full-stack indépendant.{" "}
          <span style={{ color: "var(--text-muted)" }}>Je code, je déploie, j&apos;opère.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
          className="prose-body"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.125rem)",
            maxWidth: "56ch",
            marginBottom: "3.5rem",
          }}
        >
          Valentin Milliand — disponible pour vos missions freelance et CDI.
          Backend NestJS, frontend Next.js, automatisation n8n, intégration IA
          Claude. Je livre des produits production-grade, pas des prototypes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
          className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12"
        >
          <a
            href="#projets"
            className="group inline-flex items-center gap-2.5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                borderBottom: "1px solid var(--text)",
                paddingBottom: "3px",
              }}
            >
              Voir les projets
            </span>
            <ArrowDownRight
              size={16}
              strokeWidth={1.75}
              className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="mailto:v.milliand@gmail.com"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.95rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
            }}
          >
            v.milliand@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20"
      >
        <div className="mx-auto max-w-5xl flex items-end justify-between">
          <span className="label-mono">
            01 / 04 · Présentation
          </span>
          <span className="label-mono hidden md:inline">
            Défilement
          </span>
        </div>
      </motion.div>
    </section>
  );
}
