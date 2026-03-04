"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

function useLogoDark() {
  const { theme } = useTheme();
  const [domDark, setDomDark] = useState(false);
  useLayoutEffect(() => {
    setDomDark(
      document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark"
    );
  }, []);
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDomDark(
        document.documentElement.classList.contains("dark") ||
          document.documentElement.getAttribute("data-theme") === "dark"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, []);
  return theme === "dark" || domDark;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const logoDark = useLogoDark();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const y = window.scrollY;
        setScrolled(y > 40);
        if (y > lastYRef.current && y > 80) setVisible(false);
        else if (y <= lastYRef.current || y < 80) setVisible(true);
        lastYRef.current = y;
        const sections = navItems.map((item) =>
          document.querySelector(item.href)
        );
        const scrollY = y + 120;
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = sections[i] as HTMLElement | null;
          if (el && el.offsetTop <= scrollY) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: visible ? 0 : -120,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "backdrop-blur-xl bg-black/70 border-b border-neutral-800 py-3"
            : "backdrop-blur-xl bg-white/70 border-b border-gray-200/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="#accueil"
          className="flex items-center hover:opacity-80 transition-opacity"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={logoDark ? "/logodarkmode.png" : "/logoclouet.webp"}
            alt="CLOUET"
            width={260}
            height={72}
            className="h-14 w-auto md:h-[4.5rem] min-[900px]:h-20"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative text-sm transition-colors py-1 ${
                  activeSection === item.href
                    ? theme === "dark"
                      ? "text-white font-bold"
                      : "text-[#1d1d1f] font-bold"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-[#86868b] hover:text-[#1d1d1f]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px transition-transform duration-300 origin-left ${
                    activeSection === item.href ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  } ${theme === "dark" ? "bg-white" : "bg-[#1d1d1f]"}`}
                  style={{ width: "100%" }}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1.5 text-xs text-[#86868b] dark:text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible
          </span>
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
            aria-label={theme === "light" ? "Mode sombre" : "Mode clair"}
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex p-2 rounded-full transition-colors ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex p-2 rounded-full transition-colors ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            type="button"
            className={`md:hidden p-2 ${theme === "dark" ? "text-white" : "text-[#1d1d1f]"}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t backdrop-blur-nav ${
              theme === "dark" ? "border-neutral-800 bg-black/95" : "border-[#d2d2d7] bg-white/95"
            }`}
          >
            <ul className="py-4 px-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-sm ${
                      activeSection === item.href
                        ? theme === "dark"
                          ? "text-white font-medium"
                          : "text-[#1d1d1f] font-medium"
                        : theme === "dark"
                          ? "text-gray-300"
                          : "text-[#86868b]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className={`flex gap-3 pt-2 border-t mt-2 ${theme === "dark" ? "border-neutral-800" : "border-[#d2d2d7]"}`}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors ${theme === "dark" ? "text-white hover:bg-gray-800" : "text-[#1d1d1f] hover:bg-[#f5f5f7]"}`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
