"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ITEMS = [
  { label: "Projets", href: "#projets" },
  { label: "Stack", href: "#stack" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

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
        background: scrolled ? "rgba(252,252,250,0.85)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2"
          style={{
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "var(--text)",
              letterSpacing: "-0.015em",
            }}
          >
            Valentin Milliand
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.85rem",
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
              {label}
            </a>
          ))}
        </div>

        <a
          href="mailto:v.milliand@gmail.com"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.85rem",
            color: "var(--text)",
            textDecoration: "none",
            borderBottom: "1px solid var(--border-strong)",
            paddingBottom: "2px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
          }}
        >
          Me contacter
        </a>
      </div>
    </motion.nav>
  );
}
