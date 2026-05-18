"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-20"
      style={{ background: "var(--bg)" }}
    >
      {/* Availability badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-14 flex items-center gap-2.5"
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: "var(--accent)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.68rem",
            color: "var(--text-muted)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Disponible · Paris, France · Remote
        </span>
      </motion.div>

      {/* Giant name */}
      <div className="mb-10 -ml-1">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(4rem, 17vw, 17rem)",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
              color: "var(--text)",
              userSelect: "none",
            }}
          >
            VALENTIN
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.34, ease: EASE }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(4rem, 17vw, 17rem)",
              fontWeight: 800,
              lineHeight: 0.88,
              letterSpacing: "-0.035em",
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "1.5px",
              WebkitTextStrokeColor: "rgba(240, 240, 240, 0.28)",
              userSelect: "none",
            }}
          >
            MILLIAND
          </motion.h1>
        </div>
      </div>

      {/* Role + CTAs */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: "30ch",
          }}
        >
          Full-Stack Engineer · AI Systems Builder
          <br />
          Founder — NestJS, Next.js, Claude API
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
          className="flex items-center gap-10"
        >
          <a
            href="#projets"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(240,240,240,0.18)",
              paddingBottom: "2px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,240,240,0.75)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(240,240,240,0.18)";
            }}
          >
            Voir le travail →
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.875rem",
              fontWeight: 500,
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
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex flex-col items-center gap-2"
      >
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, transparent, rgba(240,240,240,0.18))",
          }}
        />
        <ArrowDown size={11} strokeWidth={1.5} style={{ color: "var(--text-muted)" }} />
      </motion.div>
    </section>
  );
}
