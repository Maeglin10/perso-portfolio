"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.65rem",
          color: "var(--text-muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
        }}
      >
        Erreur
      </p>
      <h2
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 1,
          letterSpacing: "-0.03em",
          marginBottom: "2rem",
        }}
      >
        Quelque chose s'est mal passé
      </h2>
      <button
        onClick={reset}
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          background: "none",
          border: "none",
          borderBottom: "1px solid rgba(10,10,10,0.2)",
          paddingBottom: "2px",
          cursor: "pointer",
        }}
      >
        Réessayer
      </button>
    </div>
  );
}
