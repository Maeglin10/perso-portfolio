import Link from "next/link";

export default function NotFound() {
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
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          fontWeight: 800,
          color: "var(--text)",
          lineHeight: 0.9,
          letterSpacing: "-0.035em",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Page
        <br />
        introuvable
      </h1>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.875rem",
          color: "var(--text-muted)",
          textDecoration: "none",
          borderBottom: "1px solid rgba(10,10,10,0.2)",
          paddingBottom: "2px",
          transition: "color 0.2s, border-color 0.2s",
        }}
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
