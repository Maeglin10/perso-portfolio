import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valentin Milliand — Full-Stack Engineer & AI Builder",
  description:
    "Full-Stack Engineer & AI Systems Builder based in Paris. Building production-grade SaaS with Next.js, NestJS, and autonomous AI agents. Available for remote.",
  keywords: [
    "Full-Stack Engineer",
    "AI Systems",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Paris",
    "Founder",
    "SaaS",
    "Remote",
  ],
  authors: [{ name: "Valentin Milliand", url: "https://github.com/Maeglin10" }],
  openGraph: {
    title: "Valentin Milliand — Full-Stack Engineer & AI Builder",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
