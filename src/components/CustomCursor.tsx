"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function CustomCursor() {
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const rafId = useRef<number | null>(null);
  const latestRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      latestRef.current = { x: e.clientX, y: e.clientY };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          setPos(latestRef.current);
          rafId.current = null;
        });
      }
    };
    const enter = () => setHover(true);
    const leave = () => setHover(false);
    window.addEventListener("mousemove", onMove, { passive: true });
    const clickables = document.querySelectorAll("a, button, [role='button']");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40 ${theme === "dark" ? "bg-white" : "bg-[#1d1d1f]"}`}
      style={{ x: pos.x, y: pos.y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        scale: hover ? 5 : 1,
        opacity: 0.5,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
