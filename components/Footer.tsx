export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 px-6 md:px-12 lg:px-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="label-mono">
          © {year} · Valentin Milliand
        </p>
        <p className="label-mono">
          Paris · Conçu et codé à la main
        </p>
      </div>
    </footer>
  );
}
