"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: 20, suffix: "+", label: "Projets réalisés" },
  { value: 5, suffix: "+", label: "Années d'expérience" },
  { value: 8, suffix: "+", label: "Technologies maîtrisées" },
  { value: 10, suffix: "+", label: "Clients freelance" },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-6 scroll-mt-20 bg-gray-50/50 dark:bg-black border-y border-[#d2d2d7]/40 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-center justify-items-center text-center"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-5xl md:text-6xl lg:text-7xl font-light tabular-nums text-[#1d1d1f] dark:text-white tracking-tight">
                <AnimatedCounter value={stat.value} duration={2} />
                {stat.suffix}
              </span>
              <span className="text-sm text-[#86868b] dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
