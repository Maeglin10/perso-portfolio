"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Maeglin10",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/valentin-milliand",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: 800,
            color: "var(--text)",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "2rem",
          }}
        >
          Travaillons
          <br />
          ensemble
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="flex items-center gap-2.5 mb-14"
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#16a34a" }}
          />
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
            }}
          >
            Disponible pour missions remote · Temps plein ou freelance
          </span>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-16"
        >
          <EmailLink />
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.52, ease: EASE }}
          className="flex items-center gap-10"
        >
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.875rem",
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
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function EmailLink() {
  return (
    <a
      href="mailto:v.milliand@gmail.com"
      className="group flex items-center gap-4"
      style={{ textDecoration: "none", width: "fit-content" }}
      onMouseEnter={(e) => {
        const underline = (e.currentTarget as HTMLAnchorElement).querySelector<HTMLSpanElement>(".email-text");
        if (underline) underline.style.borderColor = "rgba(10,10,10,0.6)";
        const arrow = (e.currentTarget as HTMLAnchorElement).querySelector<SVGElement>(".email-arrow");
        if (arrow) {
          arrow.style.color = "var(--text)";
          arrow.style.transform = "translate(2px, -2px)";
        }
      }}
      onMouseLeave={(e) => {
        const underline = (e.currentTarget as HTMLAnchorElement).querySelector<HTMLSpanElement>(".email-text");
        if (underline) underline.style.borderColor = "rgba(10,10,10,0.15)";
        const arrow = (e.currentTarget as HTMLAnchorElement).querySelector<SVGElement>(".email-arrow");
        if (arrow) {
          arrow.style.color = "var(--text-muted)";
          arrow.style.transform = "none";
        }
      }}
    >
      <span
        className="email-text"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(1rem, 2.8vw, 1.65rem)",
          fontWeight: 700,
          color: "var(--text)",
          borderBottom: "1px solid rgba(10,10,10,0.15)",
          paddingBottom: "4px",
          transition: "border-color 0.2s",
        }}
      >
        v.milliand@gmail.com
      </span>
      <ArrowUpRight
        size={20}
        strokeWidth={1.5}
        className="email-arrow"
        style={{
          color: "var(--text-muted)",
          transition: "color 0.2s, transform 0.2s",
        }}
      />
    </a>
  );
}
