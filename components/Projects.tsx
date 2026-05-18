"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Zap, Clock, User, Activity } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type ProjectStatus = "live" | "in-progress" | "personal" | "running";

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  url: string | null;
  tech: string[];
  fromColor: string;
  toColor: string;
  status: ProjectStatus;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Aevia Ecosystem",
    tagline: "Suite d'outils digitaux pour PME",
    description:
      "Plateforme SaaS complète — site web en 7 jours, audit sécurité en 60s, gestion client IA multicanal. 3 produits intégrés, centaines de clients TPE/PME.",
    url: "https://aevia.vercel.app",
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
    fromColor: "#a855f7",
    toColor: "#d946ef",
    status: "live",
  },
  {
    id: 2,
    name: "AeviaLaunch",
    tagline: "201+ templates web professionnels",
    description:
      "Galerie de templates Next.js (landing pages, e-commerce, vitrines, SaaS) avec preview live, système de thèmes et marketplace intégrée.",
    url: "https://aevia-launch.vercel.app/themes",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion", "WebP"],
    fromColor: "#8b5cf6",
    toColor: "#ec4899",
    status: "live",
  },
  {
    id: 3,
    name: "AeviaSecurity",
    tagline: "Audit de sécurité web en 60 secondes",
    description:
      "SaaS d'analyse de sécurité des sites web — HTTPS, en-têtes, vulnérabilités OWASP, score de sécurité global. Audit instantané sans installation.",
    url: "https://aevia-security.vercel.app",
    tech: ["Next.js", "NestJS", "Security Headers", "OWASP"],
    fromColor: "#10b981",
    toColor: "#14b8a6",
    status: "live",
  },
  {
    id: 4,
    name: "Skybot Inbox",
    tagline: "Inbox IA multicanal avec agents autonomes",
    description:
      "Plateforme de gestion client IA — unification WhatsApp, Telegram, Email, LinkedIn en une seule interface. 16 agents IA OpenClaw autonomes, n8n workflows, réponses IA en temps réel.",
    url: null,
    tech: ["NestJS", "Next.js", "WebSockets", "n8n", "PostgreSQL", "Anthropic API", "Redis", "BullMQ"],
    fromColor: "#22d3ee",
    toColor: "#3b82f6",
    status: "in-progress",
  },
  {
    id: 5,
    name: "Jarvis — IA Personnelle",
    tagline: "Assistant IA personnel à commande vocale",
    description:
      "Interface HUD sci-fi pour dialoguer avec Claude. Commande vocale (Web Speech API), TTS, surveillance de projets en temps réel, design retro-futurisme avec anneaux orbitaux animés.",
    url: null,
    tech: ["Next.js", "TypeScript", "Web Speech API", "Anthropic API", "Share Tech Mono"],
    fromColor: "#f59e0b",
    toColor: "#f97316",
    status: "personal",
  },
  {
    id: 6,
    name: "OpenClaw",
    tagline: "16 agents IA qui tournent 24h/24",
    description:
      "Système multi-agents autonomes sur Render Background Worker — équipes Sentinelles (QA), Avengers Tech (Dev), Management. Analysent le code, créent des tickets, génèrent des rapports. Anthropic Haiku/Sonnet.",
    url: null,
    tech: ["Node.js", "Anthropic Claude", "Render", "PostgreSQL", "NestJS API"],
    fromColor: "#ef4444",
    toColor: "#f97316",
    status: "running",
  },
];

const STATUS_CONFIG: Record<ProjectStatus, { label: string; color: string; pulse: boolean; icon: React.ComponentType<{ size: number }> }> = {
  live: { label: "LIVE", color: "#22c55e", pulse: true, icon: Zap },
  "in-progress": { label: "EN COURS", color: "#f59e0b", pulse: false, icon: Clock },
  personal: { label: "PERSONNEL", color: "#22d3ee", pulse: false, icon: User },
  running: { label: "ACTIF", color: "#ef4444", pulse: true, icon: Activity },
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
      style={{
        background: `${config.color}18`,
        border: `1px solid ${config.color}50`,
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.6rem",
        color: config.color,
        letterSpacing: "0.12em",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: config.color,
          boxShadow: `0 0 6px ${config.color}`,
          animation: config.pulse ? "pulse-ring 1.4s ease-out infinite" : "none",
        }}
      />
      <Icon size={10} />
      {config.label}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl h-full min-h-[200px] md:min-h-0"
      style={{
        background: `radial-gradient(ellipse at 30% 30%, ${project.fromColor}15, transparent 60%), radial-gradient(ellipse at 70% 70%, ${project.toColor}10, transparent 60%)`,
        border: `1px solid ${project.fromColor}20`,
      }}
    >
      {/* Corner decorations */}
      <div
        className="absolute top-3 left-3 w-4 h-4"
        style={{
          borderTop: `2px solid ${project.fromColor}60`,
          borderLeft: `2px solid ${project.fromColor}60`,
        }}
      />
      <div
        className="absolute bottom-3 right-3 w-4 h-4"
        style={{
          borderBottom: `2px solid ${project.toColor}60`,
          borderRight: `2px solid ${project.toColor}60`,
        }}
      />

      {/* Floating dots */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + i,
            height: 3 + i,
            background: i === 0 ? project.fromColor : i === 1 ? project.toColor : "#f1f5f9",
            top: `${25 + i * 22}%`,
            right: `${15 + i * 10}%`,
            opacity: 0.6,
            animation: `float ${3 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Project name big */}
      <div className="text-center px-4">
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            fontWeight: 700,
            background: `linear-gradient(135deg, ${project.fromColor}, ${project.toColor})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: `drop-shadow(0 0 12px ${project.fromColor}60)`,
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </p>
      </div>

      {/* Grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${project.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={project.fromColor} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: EASE,
      }}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "#0a0f1e",
        border: `1px solid ${project.fromColor}18`,
        minHeight: 380,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = `${project.fromColor}45`;
        el.style.boxShadow = `0 0 40px ${project.fromColor}12, 0 0 80px ${project.fromColor}06`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = `${project.fromColor}18`;
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.fromColor}60, ${project.toColor}60, transparent)`,
        }}
      />

      <div className={`grid grid-cols-1 md:grid-cols-2 h-full gap-0 ${isEven ? "" : "md:[direction:rtl]"}`}>
        {/* Info side */}
        <motion.div
          initial={{ x: isEven ? -60 : 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="flex flex-col justify-center p-8 md:p-10"
          style={{ direction: "ltr" }}
        >
          {/* Status */}
          <div className="mb-4">
            <StatusBadge status={project.status} />
          </div>

          {/* Name */}
          <h3
            className="mb-2"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.2,
            }}
          >
            {project.name}
          </h3>

          {/* Tagline */}
          <p
            className="mb-4"
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.75rem",
              background: `linear-gradient(135deg, ${project.fromColor}, ${project.toColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.05em",
            }}
          >
            {project.tagline}
          </p>

          {/* Description */}
          <p
            className="mb-6 leading-relaxed"
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md"
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.6rem",
                  background: `${project.fromColor}0e`,
                  border: `1px solid ${project.fromColor}25`,
                  color: project.fromColor,
                  letterSpacing: "0.05em",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit transition-all duration-200"
              style={{
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.75rem",
                color: project.fromColor,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = "none";
              }}
            >
              Voir le projet
              <ExternalLink size={12} />
            </a>
          )}
        </motion.div>

        {/* Visual side */}
        <motion.div
          initial={{ x: isEven ? 60 : -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="p-6 md:p-8 flex"
          style={{ direction: "ltr" }}
        >
          <div className="flex-1">
            <ProjectVisual project={project} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section id="projets" className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <div ref={titleRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              color: "#22d3ee",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            — Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(3rem, 10vw, 7rem)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            PROJETS
          </motion.h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
