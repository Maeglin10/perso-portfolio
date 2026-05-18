"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Terminal } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { GithubIcon, LinkedinIcon } from "./icons";

const TYPING_SEQUENCE = [
  "$ whoami",
  "valentin.milliand",
  "$ cat skills.txt",
  "Full-Stack · AI · Founder · Paris",
  "$ echo $STATUS",
  "Open to remote opportunities",
  "$ ping v.milliand@gmail.com",
  "PONG 1ms — available now!",
];

function TerminalCard() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [seqIdx, setSeqIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let seq = 0;
    let char = 0;
    let linesArr: string[] = [];
    let pauseTimeout: ReturnType<typeof setTimeout>;
    let typeTimeout: ReturnType<typeof setTimeout>;

    function type() {
      if (seq >= TYPING_SEQUENCE.length) return;

      const target = TYPING_SEQUENCE[seq];

      if (char < target.length) {
        char++;
        setCurrentLine(target.slice(0, char));
        typeTimeout = setTimeout(type, 38 + Math.random() * 30);
      } else {
        // Line complete, push and move on
        linesArr = [...linesArr, target];
        setLines([...linesArr]);
        setCurrentLine("");
        seq++;
        char = 0;
        pauseTimeout = setTimeout(type, seq % 2 === 0 ? 180 : 500);
      }
    }

    typeTimeout = setTimeout(type, 600);

    return () => {
      clearTimeout(typeTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden"
      style={{
        background: "#070d1a",
        border: "1px solid rgba(34,211,238,0.2)",
        boxShadow: "0 0 40px rgba(34,211,238,0.06)",
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.8rem",
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "rgba(34,211,238,0.06)",
          borderBottom: "1px solid rgba(34,211,238,0.1)",
        }}
      >
        <div className="flex gap-1.5">
          {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
            <div
              key={c}
              className="w-3 h-3 rounded-full"
              style={{ background: c, opacity: 0.7 }}
            />
          ))}
        </div>
        <span
          className="ml-2 flex items-center gap-1.5"
          style={{ color: "#64748b", fontSize: "0.7rem" }}
        >
          <Terminal size={11} />
          terminal — valentin@portfolio
        </span>
      </div>

      {/* Content */}
      <div className="p-6 min-h-[200px]">
        {lines.map((line, i) => {
          const isCommand = line.startsWith("$");
          return (
            <p
              key={i}
              style={{
                color: isCommand ? "#22d3ee" : "#94a3b8",
                marginBottom: "0.25rem",
                lineHeight: 1.6,
              }}
            >
              {isCommand && (
                <span style={{ color: "#22c55e", marginRight: "0.5rem" }}>›</span>
              )}
              {line}
            </p>
          );
        })}

        {/* Current typing line */}
        <p style={{ color: "#22d3ee", lineHeight: 1.6 }}>
          {currentLine.startsWith("$") && (
            <span style={{ color: "#22c55e", marginRight: "0.5rem" }}>›</span>
          )}
          {currentLine}
          <span
            className="inline-block w-2 h-4 ml-0.5 align-middle"
            style={{
              background: "#22d3ee",
              animation: "blink 1s step-end infinite",
              verticalAlign: "text-bottom",
            }}
          />
        </p>
      </div>
    </div>
  );
}

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Maeglin10",
    icon: GithubIcon,
    color: "#f1f5f9",
    border: "rgba(255,255,255,0.15)",
    bg: "rgba(255,255,255,0.04)",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/valentin-milliand",
    icon: LinkedinIcon,
    color: "#60a5fa",
    border: "rgba(96,165,250,0.3)",
    bg: "rgba(96,165,250,0.06)",
  },
  {
    label: "v.milliand@gmail.com",
    href: "mailto:v.milliand@gmail.com",
    icon: Mail,
    color: "#22d3ee",
    border: "rgba(34,211,238,0.3)",
    bg: "rgba(34,211,238,0.06)",
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative z-10 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.65rem",
              color: "#ec4899",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            — Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(2rem, 7vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "#f1f5f9" }}>DISPONIBLE</span>
            <span style={{ color: "#64748b", margin: "0 0.5rem" }}>·</span>
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              REMOTE
            </span>
          </motion.h2>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full"
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.7rem",
              color: "#22c55e",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                animation: "pulse-ring 1.4s ease-out infinite",
              }}
            />
            Open to remote opportunities
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mb-10"
        >
          <TerminalCard />
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {LINKS.map(({ label, href, icon: Icon, color, border, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto justify-center"
              style={{
                background: bg,
                border: `1px solid ${border}`,
                color,
                fontFamily: "var(--font-jetbrains-mono)",
                fontSize: "0.78rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = `0 0 24px ${color}25`;
                el.style.borderColor = color + "60";
                el.style.background = `${bg.replace(/0\.\d+\)$/, "0.12)")}`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow = "none";
                el.style.borderColor = border;
                el.style.background = bg;
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
