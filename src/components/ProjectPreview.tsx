"use client";

import Image from "next/image";
import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import type { Project } from "@/data/projects";

/** Gradients pour les projets sans image (dérivés de l'id pour cohérence) */
const PLACEHOLDER_GRADIENTS = [
  "from-violet-500/20 to-indigo-600/20 dark:from-violet-500/30 dark:to-indigo-600/30",
  "from-emerald-500/20 to-teal-600/20 dark:from-emerald-500/30 dark:to-teal-600/30",
  "from-amber-500/20 to-orange-600/20 dark:from-amber-500/30 dark:to-orange-600/30",
  "from-rose-500/20 to-pink-600/20 dark:from-rose-500/30 dark:to-pink-600/30",
  "from-blue-500/20 to-cyan-600/20 dark:from-blue-500/30 dark:to-cyan-600/30",
  "from-slate-500/20 to-zinc-600/20 dark:from-slate-500/30 dark:to-zinc-600/30",
];

function getPlaceholderGradient(projectId: string): string {
  let n = 0;
  for (let i = 0; i < projectId.length; i++) n += projectId.charCodeAt(i);
  return PLACEHOLDER_GRADIENTS[n % PLACEHOLDER_GRADIENTS.length];
}

interface ProjectPreviewProps {
  project: Project;
  className?: string;
  aspectRatio?: "video" | "card";
  priority?: boolean;
}

export default function ProjectPreview({
  project,
  className = "",
  aspectRatio = "card",
  priority = false,
}: ProjectPreviewProps) {
  const [apiFailed, setApiFailed] = useState(false);
  const [localFailed, setLocalFailed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const hasVideo = project.video && project.video.startsWith("/") && !videoFailed;
  const useLocal = project.image.startsWith("/") && !localFailed;
  const useApi = project.link && !apiFailed && (!useLocal || localFailed);
  const showPlaceholder = !hasVideo && !useLocal && !useApi;

  const aspectClass =
    aspectRatio === "video" ? "aspect-video" : "aspect-[4/3]";
  const baseClass = `${aspectClass} relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#e8e8ed] to-[#d2d2d7] dark:from-gray-800 dark:to-gray-900 ${className}`;

  if (project.video && project.video.startsWith("/") && !videoFailed) {
    return (
      <div className={baseClass}>
        <video
          src={project.video}
          className="absolute inset-0 h-full w-full object-cover object-center"
          muted
          loop
          playsInline
          autoPlay
          onError={() => setVideoFailed(true)}
        />
      </div>
    );
  }

  if (showPlaceholder) {
    const gradient = getPlaceholderGradient(project.id);
    return (
      <div
        className={`${baseClass} flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient} p-6`}
      >
        <LayoutGrid className="w-10 h-10 md:w-12 md:h-12 text-[#86868b] dark:text-gray-500" strokeWidth={1.2} />
        <span className="text-sm md:text-base font-medium text-[#1d1d1f] dark:text-white text-center line-clamp-3 px-2">
          {project.title}
        </span>
      </div>
    );
  }

  if (useLocal) {
    return (
      <div className={baseClass}>
        {/* img natif pour vignettes locales (évite échec Next/Image sur certains webp) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading={priority ? "eager" : "lazy"}
          onError={() => setLocalFailed(true)}
        />
      </div>
    );
  }

  const apiSrc = `/api/preview?url=${encodeURIComponent(project.link!)}`;
  return (
    <div className={baseClass}>
      {/* img pour URL dynamique (redirect API) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={apiSrc}
        alt={`Aperçu ${project.title}`}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading={priority ? "eager" : "lazy"}
        onError={() => setApiFailed(true)}
      />
    </div>
  );
}
