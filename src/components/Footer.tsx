"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

const GITHUB_REPO = "https://github.com"; // à remplacer par l'URL du repo portfolio

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <Link
            href="#accueil"
            className="flex items-center shrink-0"
            aria-label="Accueil"
          >
            <Image
              src="/logodarkmode.png"
              alt="CLOU.ET"
              width={160}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <nav className="flex flex-wrap justify-center md:justify-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center md:justify-end gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-white/50 text-sm">
            © 2025 Marvyn Clouet — Fait avec ❤️ et beaucoup de café
          </p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-violet-400 transition-colors inline-flex items-center gap-1.5"
          >
            <Github className="w-4 h-4" />
            Voir le code source
          </a>
        </div>
      </div>
    </footer>
  );
}
