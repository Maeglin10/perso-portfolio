"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface Project {
  num: string;
  name: string;
  tagline: string;
  tech: string[];
  url: string | null;
  github: string | null;
  year: string;
  role: string;
}

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "Aevia Inbox",
    tagline:
      "Boîte de réception unifiée pour TPE/PME — WhatsApp, Instagram, LinkedIn, e-mail, webchat. Multi-tenant, IA conversationnelle Claude, agents n8n.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Redis", "Anthropic", "n8n"],
    url: "https://aevia-inbox.vercel.app",
    github: "https://github.com/Maeglin10/aevia-inbox",
    year: "2026",
    role: "Conception · Implémentation · Opérations",
  },
  {
    num: "02",
    name: "Aevia Launch",
    tagline:
      "Création de sites professionnels en 2 heures — paiement Stripe, génération de contenu par Claude, livraison email avec preview live.",
    tech: ["Next.js", "Stripe", "Claude API", "Vercel Blob", "Resend"],
    url: "https://aevia-launch.vercel.app",
    github: "https://github.com/Maeglin10/aevia-launch",
    year: "2026",
    role: "Produit · Stack complète · Automatisation",
  },
  {
    num: "03",
    name: "Aevia Security",
    tagline:
      "Audit de sécurité web en moins d’une minute — scan HTTPS, OWASP top 10, scoring IA, rapport PDF. Abonnement Stripe.",
    tech: ["NestJS", "Next.js", "Fastify", "Claude API", "Stripe"],
    url: "https://aevia-security.vercel.app",
    github: "https://github.com/Maeglin10/aevia-security",
    year: "2026",
    role: "Backend · Sécurité · Intégration paiement",
  },
  {
    num: "04",
    name: "Aevia Market",
    tagline:
      "Marketplace de services freelance — Stripe Connect, escrow, gestion des litiges, payouts hebdomadaires. Multi-vendeurs.",
    tech: ["Next.js", "Stripe Connect", "Prisma", "UploadThing", "PostgreSQL"],
    url: "https://aevia-market.vercel.app",
    github: "https://github.com/Maeglin10/marketplace",
    year: "2026",
    role: "Architecture · Paiements · Modération",
  },
  {
    num: "05",
    name: "Aevia Live",
    tagline:
      "Plateforme de streaming live avec tips en temps réel pour créateurs. HLS basse latence, chat modéré IA, payouts Stripe Connect.",
    tech: ["NestJS", "Next.js", "Socket.io", "Stripe Connect", "HLS"],
    url: "https://aevia-live.vercel.app",
    github: "https://github.com/Maeglin10/aevia-live",
    year: "2026",
    role: "Streaming · Real-time · Monétisation",
  },
  {
    num: "06",
    name: "OpenClaw",
    tagline:
      "Système autonome de 16 agents IA — QA, développement, management. Tourne 24h/24 sur Render, modèles Haiku et Sonnet.",
    tech: ["Node.js", "Anthropic", "PostgreSQL", "Render"],
    url: null,
    github: null,
    year: "2026",
    role: "Architecture · Orchestration",
  },
  {
    num: "07",
    name: "Hub Aevia",
    tagline:
      "Site commercial de l’écosystème Aevia — i18n 5 langues, blog technique SEO, pages produits, intégration newsletter.",
    tech: ["Next.js 16", "next-intl", "Tailwind", "MDX"],
    url: "https://aevia.vercel.app",
    github: "https://github.com/Maeglin10/portfolio",
    year: "2026",
    role: "Design · Implémentation · Contenu",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  const isClickable = !!project.url;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.04, ease: EASE }}
    >
      <a
        href={project.url ?? undefined}
        target={project.url ? "_blank" : undefined}
        rel={project.url ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="block py-8"
        style={{
          borderTop: "1px solid var(--border)",
          cursor: isClickable ? "pointer" : "default",
          transition: "background 0.25s",
          background: hovered && isClickable ? "var(--accent-soft)" : "transparent",
          marginLeft: hovered && isClickable ? "-1rem" : "0",
          marginRight: hovered && isClickable ? "-1rem" : "0",
          paddingLeft: hovered && isClickable ? "1rem" : "0",
          paddingRight: hovered && isClickable ? "1rem" : "0",
          textDecoration: "none",
        }}
      >
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
          <span
            className="label-mono pt-1.5"
            style={{ fontSize: "0.65rem", minWidth: "1.75rem" }}
          >
            {project.num}
          </span>

          <div className="min-w-0">
            <h3
              className="heading-display mb-2.5"
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
              }}
            >
              {project.name}
            </h3>

            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: "62ch",
              }}
            >
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {project.tech.map((t, i) => (
                <span key={t} className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-soft)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t}
                  </span>
                  {i < project.tech.length - 1 && (
                    <span
                      style={{
                        color: "var(--text-soft)",
                        fontSize: "0.5rem",
                      }}
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-3 pt-1.5 flex-shrink-0">
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.github!, "_blank", "noopener,noreferrer");
                  }}
                  title="Voir sur GitHub"
                  style={{
                    color: hovered ? "var(--text)" : "var(--text-muted)",
                    transition: "color 0.2s",
                    cursor: "pointer",
                    display: "inline-flex",
                  }}
                >
                  <GithubIcon size={15} />
                </span>
              )}
              {isClickable && (
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  style={{
                    color: hovered ? "var(--accent)" : "var(--text-muted)",
                    transform: hovered ? "translate(2px, -2px)" : "none",
                    transition: "color 0.2s, transform 0.2s",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projets"
      className="relative py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <div ref={ref} className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="label-mono mb-4"
          >
            03 / 04 · Projets sélectionnés
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="heading-display"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.05,
            }}
          >
            Travaux récents
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
