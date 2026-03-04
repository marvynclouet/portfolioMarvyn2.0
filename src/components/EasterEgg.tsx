"use client";

import { useEffect, useState } from "react";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];

const CONSOLE_MSG = `
  ╔═══════════════════════════════════════════════════════════╗
  ║  Hey ! Tu regardes mon code ? 👀                           ║
  ║  Contacte-moi : clouetmarvyn@gmail.com                    ║
  ║  — Marvyn Clouet | AI SaaS Developer                      ║
  ╚═══════════════════════════════════════════════════════════╝
`;

export default function EasterEgg() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    console.log(CONSOLE_MSG);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          setShowCelebration(true);
          setKonamiIndex(0);
          setTimeout(() => setShowCelebration(false), 3000);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(0);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [konamiIndex]);

  if (!showCelebration) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
      aria-hidden
    >
      <div className="text-6xl md:text-8xl animate-bounce" role="img" aria-label="Célébration">
        🎉
      </div>
    </div>
  );
}
