"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export const GLOW_COLORS: Record<string, string> = {
  SiHtml5: "#e34c26",
  SiCss: "#264de4",
  SiJavascript: "#f7df1e",
  SiSwift: "#fa7343",
  SiReact: "#61dafb",
  SiNextdotjs: "#000",
  SiFlutter: "#02569B",
  SiNodedotjs: "#339933",
  SiNestjs: "#e0234e",
  SiPhp: "#777BB4",
  SiPython: "#3776ab",
  SiDocker: "#2496ed",
  SiKubernetes: "#326ce5",
  SiSupabase: "#3ecf8e",
  default: "#8b5cf6",
};

interface SkillCardProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
  style?: React.CSSProperties;
  initial?: React.ComponentProps<typeof motion.div>["initial"];
  whileInView?: React.ComponentProps<typeof motion.div>["whileInView"];
  viewport?: React.ComponentProps<typeof motion.div>["viewport"];
  transition?: React.ComponentProps<typeof motion.div>["transition"];
}

export default function SkillCard({
  children,
  glowColor,
  className = "",
  style,
  initial,
  whileInView,
  viewport,
  transition,
}: SkillCardProps) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  const color = glowColor ?? GLOW_COLORS.default;
  const rgb = hexToRgb(color);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
      className={`relative rounded-2xl overflow-hidden group ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle 100px at ${pos.x}% ${pos.y}%, ${rgb}, transparent 70%)`,
          opacity: 0.2,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

function hexToRgb(hex: string): string {
  if (hex === "#000") return "rgba(139, 92, 246, 0.2)";
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "rgba(139, 92, 246, 0.2)";
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, 0.25)`;
}
