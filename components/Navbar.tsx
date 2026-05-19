"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 40));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(250,250,249,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.35s, border-color 0.35s",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <a
          href="#"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1rem",
            fontWeight: 800,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          VM
        </a>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Work", href: "#projets" },
            { label: "Stack", href: "#stack" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.825rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:v.milliand@gmail.com"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.825rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.2s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
          }}
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
