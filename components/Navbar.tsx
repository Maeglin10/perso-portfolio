"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      const clamped = Math.min(v / 120, 1);
      setOpacity(clamped);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="relative mx-auto max-w-7xl flex items-center justify-between rounded-xl px-6 py-3 transition-all duration-300"
        style={{
          background: `rgba(3, 7, 18, ${opacity * 0.92})`,
          backdropFilter: opacity > 0.1 ? "blur(20px)" : "none",
          borderColor: `rgba(34, 211, 238, ${opacity * 0.15})`,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-widest transition-all duration-300 hover:opacity-80"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            color: "#22d3ee",
            textShadow: "0 0 20px rgba(34,211,238,0.5)",
          }}
        >
          VM
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-2">
          {["Projets", "Stack", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="px-4 py-2 text-sm transition-all duration-200 rounded-lg"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                color: "#64748b",
                fontSize: "0.75rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Maeglin10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200"
            style={{
              color: "#64748b",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.75rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
            }}
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: "rgba(168, 85, 247, 0.15)",
              border: "1px solid rgba(168, 85, 247, 0.4)",
              color: "#a855f7",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.75rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168, 85, 247, 0.25)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(168,85,247,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168, 85, 247, 0.15)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <Mail size={14} />
            Me contacter
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
