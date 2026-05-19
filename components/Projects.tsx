"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Project {
  num: string;
  name: string;
  tagline: string;
  tech: string[];
  url: string | null;
  year: string;
  status: "live" | "in-progress" | "personal";
}

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "Aevia Ecosystem",
    tagline:
      "Suite SaaS complète pour TPE/PME — 3 produits intégrés, multi-tenant, production",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
    url: "https://aevia.vercel.app",
    year: "2025",
    status: "live",
  },
  {
    num: "02",
    name: "AeviaLaunch",
    tagline: "201+ templates web professionnels avec preview live et marketplace intégrée",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript", "WebP"],
    url: "https://aevia-launch.vercel.app",
    year: "2025",
    status: "live",
  },
  {
    num: "03",
    name: "AeviaSecurity",
    tagline: "Audit de sécurité web en 60s — HTTPS, OWASP, score IA, Stripe",
    tech: ["Next.js", "NestJS", "Fastify", "Anthropic API", "Stripe"],
    url: "https://aevia-security.vercel.app",
    year: "2025",
    status: "live",
  },
  {
    num: "04",
    name: "Skybot Inbox",
    tagline:
      "Inbox IA multicanal — WhatsApp, Telegram, Email, LinkedIn unifiés en une interface",
    tech: ["NestJS", "Next.js", "WebSockets", "n8n", "Redis", "BullMQ", "Anthropic API"],
    url: null,
    year: "2025",
    status: "in-progress",
  },
  {
    num: "05",
    name: "OpenClaw",
    tagline: "16 agents IA autonomes — QA, Dev, Management, tournent 24h/24 sur Render",
    tech: ["Node.js", "Anthropic Claude", "Haiku 3.5", "Sonnet 4.5", "PostgreSQL"],
    url: null,
    year: "2025",
    status: "personal",
  },
  {
    num: "06",
    name: "Jarvis",
    tagline:
      "Assistant IA personnel vocal — interface HUD sci-fi, Web Speech API, Anthropic",
    tech: ["Next.js", "Web Speech API", "Anthropic API", "TypeScript", "Framer Motion"],
    url: null,
    year: "2025",
    status: "personal",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  const isClickable = !!project.url;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.055, ease: EASE }}
    >
      <div
        onClick={() => {
          if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="py-7"
        style={{
          borderTop: "1px solid var(--border)",
          cursor: isClickable ? "pointer" : "default",
          transition: "border-color 0.2s",
          borderColor: hovered && isClickable ? "rgba(10,10,10,0.2)" : "var(--border)",
        }}
      >
        <div className="flex items-start justify-between gap-6">
          {/* Left */}
          <div className="flex items-start gap-6 min-w-0">
            {/* Number */}
            <span
              className="flex-shrink-0 mt-1.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.62rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                minWidth: "1.75rem",
              }}
            >
              {project.num}
            </span>

            {/* Content */}
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(1.05rem, 2.2vw, 1.4rem)",
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1,
                    transition: "color 0.2s",
                  }}
                >
                  {project.name}
                </h3>

                {project.status === "live" && (
                  <span
                    className="flex items-center gap-1.5 flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.52rem",
                      color: "#16a34a",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full"
                      style={{ background: "#16a34a" }}
                    />
                    Live
                  </span>
                )}

                {project.status === "in-progress" && (
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.52rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    En cours
                  </span>
                )}
              </div>

              <p
                className="mb-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  maxWidth: "62ch",
                }}
              >
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6rem",
                      color: "rgba(10,10,10,0.3)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: year + arrow */}
          <div className="flex-shrink-0 flex flex-col items-end gap-3 mt-1">
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.62rem",
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
            {isClickable && (
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                style={{
                  color: hovered ? "var(--text)" : "var(--text-muted)",
                  transform: hovered ? "translate(1px, -1px)" : "none",
                  transition: "color 0.2s, transform 0.2s",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projets" className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="mb-16">
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
            Travaux sélectionnés
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              fontWeight: 800,
              color: "var(--text)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            Projets
          </motion.h2>
        </div>

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
          <div className="section-divider" />
        </div>
      </div>
    </section>
  );
}
