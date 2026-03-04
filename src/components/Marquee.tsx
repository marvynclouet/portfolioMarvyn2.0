"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  SiReact,
  SiSwift,
  SiJavascript,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiNestjs,
  SiHtml5,
  SiCss,
  SiPhp,
  SiDocker,
  SiSupabase,
  SiPython,
  SiKubernetes,
  SiLinux,
  SiGnubash,
} from "react-icons/si";

const techItems = [
  { name: "React", Icon: SiReact },
  { name: "Swift", Icon: SiSwift },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Flutter", Icon: SiFlutter },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "NestJS", Icon: SiNestjs },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "PHP", Icon: SiPhp },
  { name: "Docker", Icon: SiDocker },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Python", Icon: SiPython },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Linux", Icon: SiLinux },
  { name: "Bash", Icon: SiGnubash },
];

export default function Marquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const duplicated = [...techItems, ...techItems];
  return (
    <div
      className={`w-full overflow-hidden py-5 px-6 border-t shrink-0 ${
        isDark ? "border-neutral-800 bg-black/60" : "border-[#d2d2d7]/50 bg-transparent"
      }`}
    >
      <motion.div
        className="flex gap-16 items-center min-w-max"
        animate={{ x: [0, -1536] }}
        transition={{
          x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
        }}
      >
        {duplicated.map(({ name, Icon }, i) => (
          <span
            key={`${name}-${i}`}
            className={`flex items-center gap-2 shrink-0 transition-colors ${
              isDark ? "text-gray-400 hover:text-white" : "text-[#86868b] hover:text-[#1d1d1f]"
            }`}
          >
            <Icon className="w-8 h-8 md:w-9 md:h-9" />
            <span className="text-sm font-medium hidden sm:inline">{name}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
