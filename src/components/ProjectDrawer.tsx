"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import MagneticButton from "./MagneticButton";
import type { Project } from "@/data/projects";

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const images = project
    ? [project.image, ...(project.screenshots ?? [])]
    : [];

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md"
          />
          <motion.aside
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 right-0 bottom-0 z-[61] h-[90vh] max-h-[90vh] bg-white dark:bg-neutral-900 shadow-2xl rounded-t-3xl overflow-hidden flex flex-col"
          >
            <div className="flex-1 overflow-y-auto">
              <div className="relative aspect-video w-full bg-neutral-100 dark:bg-neutral-800 shrink-0">
                <ProjectPreview
                  project={project}
                  aspectRatio="video"
                  className="w-full h-full"
                />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-[#86868b] dark:text-gray-400 text-sm mb-2">
                  {project.year}
                </p>
                <h2 className="text-3xl md:text-4xl font-medium text-[#1d1d1f] dark:text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-[#1d1d1f] dark:text-gray-200 leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-[#f5f5f7] dark:bg-neutral-800 text-[#1d1d1f] dark:text-gray-200 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.link && (
                    <MagneticButton
                      as="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1d1d1f] dark:bg-white dark:text-black text-white px-8 py-4 text-sm font-medium hover:bg-[#2d2d2f] dark:hover:bg-gray-200 transition-all"
                    >
                      Voir le site
                      <ExternalLink className="w-4 h-4" />
                    </MagneticButton>
                  )}
                  {project.codeUrl && (
                    <MagneticButton
                      as="a"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1d1d1f] dark:border-white text-[#1d1d1f] dark:text-white px-8 py-4 text-sm font-medium hover:bg-[#1d1d1f] dark:hover:bg-white dark:hover:text-black hover:text-white transition-all"
                    >
                      Code source
                      <Github className="w-4 h-4" />
                    </MagneticButton>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="mt-10 pt-8 border-t border-[#e8e8ed] dark:border-neutral-800">
                    <p className="text-sm text-[#86868b] dark:text-gray-400 mb-4">
                      Captures d&apos;écran
                    </p>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {images.map((src, i) => (
                        <div
                          key={i}
                          className="shrink-0 w-24 h-16 rounded-lg overflow-hidden border border-[#e8e8ed] dark:border-neutral-700"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={src}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
