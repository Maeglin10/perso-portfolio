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
    handle: "@Maeglin10",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/valentin-milliand",
    handle: "/in/valentin-milliand",
    icon: LinkedinIcon,
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label-mono mb-4"
        >
          04 / 04 · Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="heading-display"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            maxWidth: "16ch",
          }}
        >
          Un projet, une mission, une idée&nbsp;?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
          className="prose-body mb-12"
          style={{ maxWidth: "52ch" }}
        >
          Je réponds en général sous 24 heures. Disponible pour des missions
          freelance ou un poste à temps plein, en remote depuis Paris.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          className="mb-16"
        >
          <a
            href="mailto:v.milliand@gmail.com"
            className="group inline-flex items-center gap-3"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.25rem, 2.8vw, 1.875rem)",
                fontWeight: 700,
                color: "var(--text)",
                letterSpacing: "-0.015em",
                borderBottom: "1px solid var(--border-strong)",
                paddingBottom: "4px",
                transition: "border-color 0.2s, color 0.2s",
              }}
              className="group-hover:!border-current"
            >
              v.milliand@gmail.com
            </span>
            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: "var(--text-muted)" }}
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.42, ease: EASE }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {LINKS.map(({ label, href, handle, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4"
              style={{
                borderTop: "1px solid var(--border)",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              }}
            >
              <div className="flex items-center gap-3">
                <Icon size={16} />
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      lineHeight: 1.2,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                      marginTop: "0.15rem",
                    }}
                  >
                    {handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: "var(--text-muted)" }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
