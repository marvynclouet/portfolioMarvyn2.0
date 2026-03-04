"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiSwift,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiGnubash,
  SiSupabase,
} from "react-icons/si";
import { skills } from "@/data/skills";
import { stacks } from "@/data/stacks";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";
import SkillCard, { GLOW_COLORS } from "./SkillCard";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiSwift,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiLinux,
  SiGnubash,
  SiSupabase,
};

const stackColors: Record<string, string> = {
  "Infrastructure": "bg-blue-100 text-blue-800 border-blue-200/60 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
  "DevOps": "bg-violet-100 text-violet-800 border-violet-200/60 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
  "Observabilité / SecOps": "bg-emerald-100 text-emerald-800 border-emerald-200/60 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
  "Dev & IA": "bg-amber-100 text-amber-800 border-amber-200/60 dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-700",
};

export default function About() {
  return (
    <section
      id="a-propos"
      className="py-24 md:py-32 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-[#86868b] dark:text-gray-400 text-xs uppercase tracking-widest mb-2"
        >
          Qui suis-je
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light text-[#1d1d1f] dark:text-white mb-16"
        >
          À propos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            <p className="text-[#1d1d1f] dark:text-gray-200 text-lg leading-relaxed">
              Je suis <strong>SaaS builder</strong> et <strong>AI engineer</strong>, spécialisé dans la conception d&apos;applications, d&apos;outils automatisés et de produits basés sur l&apos;intelligence artificielle.
            </p>
            <p className="text-[#1d1d1f] dark:text-gray-200 text-base leading-relaxed">
              Je développe des applications depuis le lycée, avec 5 ans d&apos;expérience en développement mobile (Swift) et plusieurs années en développement web, backend et infrastructure.
            </p>
            <p className="text-[#1d1d1f] dark:text-gray-200 text-base leading-relaxed">
              Aujourd&apos;hui, je conçois des produits complets, de l&apos;idée jusqu&apos;au déploiement :
            </p>
            <ul className="text-[#1d1d1f] dark:text-gray-200 space-y-1.5 text-base list-none">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" />
                applications web et mobiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" />
                outils SaaS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" />
                automatisation de processus
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#86868b]" />
                intégration de solutions d&apos;intelligence artificielle
              </li>
            </ul>
            <p className="text-[#86868b] dark:text-gray-400 text-base leading-relaxed">
              Mon travail consiste à transformer des idées en produits fonctionnels, en combinant développement logiciel, infrastructure et IA.
            </p>
            <ul className="text-[#86868b] dark:text-gray-400 space-y-2 text-sm pt-2">
              <li>Localisation : Le Chesnay, France</li>
              <li>E-mail : clouetmarvyn@gmail.com</li>
              <li>Téléphone : 06 58 36 49 15</li>
            </ul>
            <MagneticButton
              as="a"
              href="/cv-marvyn-clouet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#1d1d1f] dark:bg-white dark:text-black text-white px-8 py-3.5 text-sm font-medium hover:bg-[#2d2d2f] dark:hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              Télécharger mon CV
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              return (
                <SkillCard
                  key={skill.name}
                  glowColor={GLOW_COLORS[skill.icon]}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-white/80 dark:bg-neutral-900 dark:border-neutral-800 backdrop-blur-md border border-gray-200/80 shadow-sm p-5 transition-all duration-300 hover:shadow-lg hover:border-blue-300/50 dark:hover:border-neutral-700"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
                >
                  {Icon && <Icon className="w-6 h-6 text-[#1d1d1f] dark:text-gray-300 mb-2" />}
                  <p className="font-medium text-[#1d1d1f] dark:text-white text-sm">
                    {skill.name}
                  </p>
                  <p className="text-[#86868b] dark:text-gray-400 text-xs mt-0.5">
                    <AnimatedCounter value={skill.projectCount} /> projets
                  </p>
                </SkillCard>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 pt-16 border-t border-[#d2d2d7]/60 dark:border-neutral-800"
        >
          <h3 className="text-[#86868b] dark:text-gray-400 text-xs uppercase tracking-widest mb-8">
            Stack technique
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stacks.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white/80 dark:bg-neutral-900 dark:border-neutral-800 backdrop-blur-md border border-gray-200/80 shadow-sm p-5"
              >
                <p className="font-medium text-[#1d1d1f] dark:text-white text-sm mb-3">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${stackColors[category.title] ?? "bg-gray-100 dark:bg-neutral-800 dark:text-gray-300 text-gray-800 border-gray-200/60 dark:border-neutral-700"}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
