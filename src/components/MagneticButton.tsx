"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

const RADIUS = 100;
const STRENGTH = 0.25;

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a" | "div";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  [key: string]: unknown;
}

export default function MagneticButton({
  children,
  className = "",
  as: Component = "button",
  href,
  type,
  onClick,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < RADIUS) {
      const force = (RADIUS - distance) / RADIUS;
      setOffset({
        x: dx * STRENGTH * force,
        y: dy * STRENGTH * force,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {Component === "a" ? (
          <a href={href} className={className} onClick={onClick} {...rest}>
            {children}
          </a>
        ) : Component === "button" ? (
          <button type={type} className={className} onClick={onClick} {...rest}>
            {children}
          </button>
        ) : (
          <div className={className} onClick={onClick} {...rest}>
            {children}
          </div>
        )}
      </motion.div>
    </div>
  );
}
