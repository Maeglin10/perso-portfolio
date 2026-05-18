import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valentin Milliand — Full-Stack Engineer",
  description:
    "Full-Stack Engineer & AI Systems Builder based in Paris. Founder of Aevia ecosystem. Building production-grade SaaS with Next.js, NestJS, and autonomous AI agents.",
  keywords: [
    "Full-Stack Engineer",
    "AI Systems",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Paris",
    "Founder",
    "SaaS",
  ],
  authors: [{ name: "Valentin Milliand", url: "https://github.com/Maeglin10" }],
  openGraph: {
    title: "Valentin Milliand — Full-Stack Engineer & AI Systems Builder",
    description: "Building production-grade SaaS and autonomous AI systems.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Milliand — Full-Stack Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
