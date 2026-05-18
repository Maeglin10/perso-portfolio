"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "6", label: "Projets construits", color: "#22d3ee" },
  { value: "201+", label: "Templates web", color: "#a855f7" },
  { value: "16", label: "Agents IA autonomes", color: "#ec4899" },
  { value: "∞", label: "Café", color: "#22c55e" },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative z-10 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Neon top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px mb-12"
          style={{
            background: "linear-gradient(90deg, transparent, #22d3ee, #a855f7, #ec4899, transparent)",
            transformOrigin: "left",
          }}
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: EASE,
              }}
              className="text-center group cursor-default"
            >
              <div
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-3 transition-all duration-300 group-hover:scale-110"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,0.6))`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: `drop-shadow(0 0 20px ${stat.color}50)`,
                }}
              >
                {stat.value}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.7rem",
                  color: "#64748b",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Neon bottom line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-px mt-12"
          style={{
            background: "linear-gradient(90deg, transparent, #ec4899, #a855f7, #22d3ee, transparent)",
            transformOrigin: "right",
          }}
        />
      </div>
    </section>
  );
}
