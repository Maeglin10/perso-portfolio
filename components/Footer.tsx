export default function Footer() {
  return (
    <footer
      className="py-8 px-6 md:px-12 lg:px-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.62rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          © 2026 Valentin Milliand
        </p>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.62rem",
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
          }}
        >
          Paris, France · Remote First
        </p>
      </div>
    </footer>
  );
}
