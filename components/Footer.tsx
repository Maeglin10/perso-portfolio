"use client";

import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-8 px-6"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(10, 15, 30, 0.4)",
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.7rem",
            color: "#64748b",
            letterSpacing: "0.05em",
          }}
        >
          &copy; 2026 Valentin Milliand &nbsp;·&nbsp; v.milliand@gmail.com &nbsp;·&nbsp; Paris, France
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Maeglin10"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#f1f5f9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
            }}
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/valentin-milliand"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200"
            style={{ color: "#64748b" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#60a5fa";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
            }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
