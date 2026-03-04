"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
        >
          <div className="p-6 md:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#f5f5f7] transition-colors text-[#86868b]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <ProjectPreview
                project={project}
                aspectRatio="video"
                className="w-full"
              />
            </div>

            <h3 className="text-2xl font-medium text-[#1d1d1f] mb-2">
              {project.title}
            </h3>
            <p className="text-[#86868b] text-sm mb-4 flex items-center gap-1">
              {project.year}
            </p>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] text-white px-6 py-3 text-sm font-medium hover:bg-[#2d2d2f] transition-colors"
              >
                Voir le projet
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
