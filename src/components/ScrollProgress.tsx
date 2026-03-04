"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none overflow-hidden origin-left"
      aria-hidden
    >
      <motion.div
        className="h-full w-full rounded-r-full"
        style={{
          scaleX,
          transformOrigin: "left",
          background: "linear-gradient(90deg, #8b5cf6, #3b82f6)",
        }}
      />
    </div>
  );
}
