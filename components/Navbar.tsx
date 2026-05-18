"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { GithubIcon } from "./icons";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 60));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <a
          href="#"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.05rem",
            fontWeight: 800,
            color: "var(--text)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          VM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Projets", href: "#projets" },
            { label: "Stack", href: "#stack" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
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

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Maeglin10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
            }}
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.82rem",
              color: "var(--text)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              padding: "6px 16px",
              borderRadius: "6px",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(255,255,255,0.22)";
              el.style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border)";
              el.style.background = "transparent";
            }}
          >
            Hire me
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
