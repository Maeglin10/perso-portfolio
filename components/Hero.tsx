"use client";

import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

const TICKER_TEXT =
  "NESTJS · NEXT.JS · TYPESCRIPT · POSTGRESQL · ANTHROPIC · DOCKER · N8N · REDIS · FRAMER MOTION · VERCEL · ";

/* ─── Particles — pure CSS, no library ─── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 7) % 100}%`,
  bottom: `${(i * 19 + 3) % 40}%`,
  delay: `${(i * 0.7) % 8}s`,
  duration: `${12 + (i % 7) * 2}s`,
  size: i % 3 === 0 ? 2 : 1,
  drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 8)}px`,
}));

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const wordVariants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.18,
      ease: EASE,
    },
  }),
};

const fadeInUp = (delay: number) => ({
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, delay, ease: EASE },
  },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col min-h-screen overflow-hidden"
      style={{ background: "#030712" }}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              background: p.id % 3 === 0 ? "#22d3ee" : p.id % 3 === 1 ? "#a855f7" : "#ec4899",
              animationName: "particle-rise",
              animationDuration: p.duration,
              animationDelay: p.delay,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              ["--drift" as string]: p.drift,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Radial glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.04) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-24 pb-8 text-center">
        {/* Location badge */}
        <motion.div
          {...fadeInUp(0.1)}
          className="flex items-center gap-2 mb-10"
        >
          <span
            className="font-mono-custom text-xs tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              background: "rgba(34, 211, 238, 0.06)",
              border: "1px solid rgba(34, 211, 238, 0.2)",
              color: "#22d3ee",
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
            }}
          >
            Paris, France &nbsp;·&nbsp; Remote
          </span>
        </motion.div>

        {/* Giant name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            custom={0}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            className="glitch-hover select-none"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(4rem, 16vw, 13rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              background: "linear-gradient(135deg, #f1f5f9 30%, #a855f7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VALENTIN
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={1}
            variants={wordVariants}
            initial="initial"
            animate="animate"
            className="glitch-hover select-none"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(4rem, 16vw, 13rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              background: "linear-gradient(135deg, #22d3ee 0%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MILLIAND
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          {...fadeInUp(0.7)}
          className="mb-10"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
            color: "#64748b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Full-Stack Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI Systems Builder&nbsp;&nbsp;·&nbsp;&nbsp;Founder
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeInUp(0.9)} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projets"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium transition-all duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.875rem",
              border: "1px solid rgba(34, 211, 238, 0.5)",
              color: "#22d3ee",
              background: "rgba(34, 211, 238, 0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(34, 211, 238, 0.14)";
              el.style.boxShadow = "0 0 30px rgba(34,211,238,0.25), 0 0 60px rgba(34,211,238,0.1)";
              el.style.borderColor = "rgba(34,211,238,0.8)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(34, 211, 238, 0.06)";
              el.style.boxShadow = "none";
              el.style.borderColor = "rgba(34, 211, 238, 0.5)";
            }}
          >
            Voir mes projets
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium transition-all duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "0.875rem",
              background: "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(168,85,247,0.7))",
              color: "#f1f5f9",
              border: "1px solid rgba(168,85,247,0.6)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.15)";
              el.style.background = "linear-gradient(135deg, rgba(168,85,247,1), rgba(168,85,247,0.85))";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.boxShadow = "none";
              el.style.background = "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(168,85,247,0.7))";
            }}
          >
            Me contacter
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div {...fadeInUp(1.2)} className="flex flex-col items-center gap-2">
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.6rem",
              color: "#64748b",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            scroll
          </span>
          <div className="bounce-arrow" style={{ color: "#22d3ee" }}>
            <ArrowDown size={16} />
          </div>
        </motion.div>
      </div>

      {/* Tech ticker */}
      <motion.div
        {...fadeInUp(1.4)}
        className="relative z-10 w-full overflow-hidden border-t border-b py-3"
        style={{
          borderColor: "rgba(255,255,255,0.05)",
          background: "rgba(10, 15, 30, 0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="marquee-track">
          {[TICKER_TEXT, TICKER_TEXT].map((text, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-6"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.65rem",
                color: "#64748b",
                letterSpacing: "0.15em",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
