"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Marquee from "./Marquee";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import { useTheme } from "@/context/ThemeContext";

const ROLES = [
  "AI SaaS Developer",
  "Full Stack Engineer",
  "Mobile Developer",
  "DevOps Enthusiast",
];

function useIsDark() {
  const { theme } = useTheme();
  const [domDark, setDomDark] = useState(false);

  const syncFromDom = () =>
    setDomDark(
      document.documentElement.classList.contains("dark") ||
        document.documentElement.getAttribute("data-theme") === "dark"
    );

  useLayoutEffect(() => {
    syncFromDom();
  }, []);

  useEffect(() => {
    syncFromDom();
    const observer = new MutationObserver(syncFromDom);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return theme === "dark" || domDark;
}

export default function Hero() {
  const isDark = useIsDark();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="accueil"
      className={`relative min-h-[100vh] min-h-[100dvh] flex flex-col px-6 pt-20 overflow-hidden ${isDark ? "bg-black" : "bg-white"}`}
      style={isDark ? { backgroundColor: "#000" } : undefined}
    >
      {/* Gradient uniquement en mode clair */}
      {!isDark && (
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(240,240,245,0.6) 0%, #ffffff 70%)",
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(235,235,242,0.8) 0%, #ffffff 70%)",
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(240,240,245,0.6) 0%, #ffffff 70%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto pb-6"
      >
        <div className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-10">
          <motion.div
            className="w-full h-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/avataar.webp"
              alt="Marvyn Clouet"
              width={256}
              height={256}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </div>

        <div className="min-h-[2.5rem] flex items-center justify-center mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`text-sm md:text-base lg:text-lg tracking-widest uppercase font-medium ${isDark ? "text-purple-400" : "text-gray-600"}`}
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 text-balance w-full flex justify-center">
          <span className="text-gradient-animated">
            <TextReveal text="Marvyn Clouet" delay={0.2} />
          </span>
        </h1>

        <p className={`flex items-center gap-2 mt-4 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Disponible pour des missions freelance
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4 mt-8">
          <MagneticButton
            as="a"
            href="#projets"
            className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 text-sm font-medium hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all duration-300"
          >
            Voir mes projets
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="rounded-full border-2 border-violet-500 text-violet-600 dark:text-violet-400 dark:border-violet-400 bg-transparent px-6 py-3 text-sm font-medium hover:bg-violet-500/10 transition-all duration-300"
          >
            Me contacter
          </MagneticButton>
        </div>

        <MagneticButton as="a" href="#a-propos" className={`group flex flex-col items-center gap-1 transition-colors cursor-pointer mt-6 ${isDark ? "text-gray-400 hover:text-white" : "text-[#86868b] hover:text-[#1d1d1f]"}`}>
          <span className="text-sm font-medium">Découvrir</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className={isDark ? "text-gray-400" : "text-[#86868b]"}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        </MagneticButton>
      </motion.div>

      <Marquee />
    </section>
  );
}
