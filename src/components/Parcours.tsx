"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const scolaire = [
  { period: "2015-2016", title: "Brevet des collèges", place: "Lycée Paul Bert, Drancy" },
  { period: "2018", title: "BAC STMG SIG", place: "Lycée Voillaume, Aulnay-Sous-Bois" },
  { period: "2023-2025", title: "BTS SIO", place: "IPSSI Yvelines" },
  { period: "2025-2026", title: "Licence Admin Sys, Réseaux et SecOps DevOps", place: "" },
];

const pro = [
  { period: "2023-2025", title: "Développeur Web/Mobile et Chef de Projet Junior", place: "KBH CORPORATE", desc: "Développement et gestion de projets : sites vitrines, applications mobiles et sites e-commerce." },
  { period: "2024", title: "Freelance — App Flutter", place: "Free Agent", desc: "Application mobile pour trouver des opportunités dans le basket pro." },
  { period: "2024", title: "Freelance — Site vitrine", place: "RF Studi", desc: "Conception et développement d'un site vitrine sur mesure." },
  { period: "2024", title: "Freelance — App de réservation", place: "ADM", desc: "Application de réservation de services développée en React." },
  { period: "2024-2025", title: "Freelance — CRM & IA", place: "BPM Tools", desc: "CRM avec intelligence artificielle intégrée pour la gestion et l'automatisation des processus." },
  { period: "2025", title: "Freelance — SaaS IA", place: "Flow IA", desc: "SaaS de gestion et de démarche : automatisation des clients sur TikTok, Instagram et LinkedIn." },
  { period: "2025", title: "Freelance — Site vitrine", place: "The French Family Consulting", desc: "Création d'un site web vitrine pour un cabinet de consulting familial." },
];

function TimelineItem({
  period,
  title,
  place,
  desc,
  index,
  direction,
  isInView,
}: {
  period: string;
  title: string;
  place: string;
  desc?: string;
  index: number;
  direction: "left" | "right";
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      <motion.span
        className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[#1d1d1f] dark:bg-white z-10"
        animate={isInView ? { scale: [1, 1.4, 1], boxShadow: ["0 0 0 0 rgba(29,29,31,0.3)", "0 0 0 8px rgba(29,29,31,0)", "0 0 0 0 rgba(29,29,31,0)"] } : {}}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
      <span className="absolute left-[5px] top-4 w-px h-[calc(100%+1rem)] bg-[#d2d2d7] dark:bg-gray-700 origin-top" />
      <p className="text-[#86868b] dark:text-gray-400 text-sm mb-1">{period}</p>
      <h3 className="font-medium text-[#1d1d1f] dark:text-white">{title}</h3>
      {place && <p className="text-[#86868b] dark:text-gray-400 text-sm">{place}</p>}
      {desc && <p className="text-[#86868b] dark:text-gray-400 text-sm mt-2 leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

export default function Parcours() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-20%", once: true });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="parcours"
      className="py-24 md:py-32 px-6 scroll-mt-20 bg-gray-50/50 dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#86868b] dark:text-gray-400 text-xs uppercase tracking-widest mb-2"
        >
          Parcours
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light text-[#1d1d1f] dark:text-white mb-16"
        >
          Scolaire & Professionnel
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-medium text-[#1d1d1f] dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#86868b] dark:text-gray-400" />
              Scolaire
            </h3>
            {scolaire.map((item, i) => (
              <TimelineItem
                key={item.period + item.title}
                index={i}
                direction="left"
                period={item.period}
                title={item.title}
                place={item.place}
                isInView={isInView}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-medium text-[#1d1d1f] dark:text-white mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#86868b] dark:text-gray-400" />
              Professionnel
            </h3>
            {pro.map((item, i) => (
              <TimelineItem
                key={item.period + item.place}
                index={i}
                direction="right"
                period={item.period}
                title={item.title}
                place={item.place}
                desc={item.desc}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
