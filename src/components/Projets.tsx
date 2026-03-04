"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectDrawer from "./ProjectDrawer";
import ProjectPreview from "./ProjectPreview";
import TiltCard from "./TiltCard";
import type { Project } from "@/data/projects";

const filterOptions = [
  "Tous",
  ...Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  ).sort(),
].slice(0, 8);

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState("Tous");

  const filtered = useMemo(
    () =>
      filter === "Tous"
        ? projects
        : projects.filter((p) => p.technologies.includes(filter)),
    [filter]
  );

  return (
    <section id="projets" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#86868b] dark:text-gray-400 text-xs uppercase tracking-widest mb-2"
        >
          Mon portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light text-[#1d1d1f] dark:text-white mb-4"
        >
          Projets
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#86868b] dark:text-gray-400 mb-8"
        >
          {projects.length} projets
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === option
                  ? "bg-[#1d1d1f] dark:bg-white dark:text-black text-white"
                  : "bg-[#f5f5f7] dark:bg-neutral-800 dark:text-gray-300 dark:border dark:border-neutral-700 text-[#86868b] hover:bg-[#e8e8ed] dark:hover:bg-neutral-700 hover:text-[#1d1d1f] dark:hover:text-white"
              }`}
            >
              {option}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="group"
              >
                <TiltCard
                  onClick={() => setSelectedProject(project)}
                  className="block rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 dark:border-neutral-800 border border-[#e8e8ed]/80 shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ProjectPreview
                        project={project}
                        aspectRatio="card"
                        priority={false}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                      <span className="text-white font-medium text-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </span>
                      <span className="text-white/90 text-sm mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        Voir le projet →
                      </span>
                    </div>
                  </div>
                  <div className="p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="font-medium text-[#1d1d1f] dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-[#f5f5f7] dark:bg-neutral-800 text-[#86868b] dark:text-gray-300 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
