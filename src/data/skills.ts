export interface Skill {
  name: string;
  icon: string; // react-icons Si* key
  projectCount: number;
}

export const skills: Skill[] = [
  { name: "HTML/CSS", icon: "SiHtml5", projectCount: 15 },
  { name: "JavaScript", icon: "SiJavascript", projectCount: 15 },
  { name: "Swift / SwiftUI", icon: "SiSwift", projectCount: 5 },
  { name: "React", icon: "SiReact", projectCount: 3 },
  { name: "React Native", icon: "SiReact", projectCount: 2 },
  { name: "Next.js", icon: "SiNextdotjs", projectCount: 4 },
  { name: "Flutter", icon: "SiFlutter", projectCount: 4 },
  { name: "Node.js", icon: "SiNodedotjs", projectCount: 3 },
  { name: "NestJS", icon: "SiNestjs", projectCount: 2 },
  { name: "PHP", icon: "SiPhp", projectCount: 4 },
  { name: "BDD / SQL", icon: "SiMysql", projectCount: 4 },
  { name: "Bootstrap", icon: "SiBootstrap", projectCount: 6 },
  { name: "Python", icon: "SiPython", projectCount: 4 },
  { name: "Docker", icon: "SiDocker", projectCount: 5 },
  { name: "Kubernetes", icon: "SiKubernetes", projectCount: 2 },
  { name: "Linux", icon: "SiLinux", projectCount: 6 },
  { name: "Bash", icon: "SiGnubash", projectCount: 4 },
  { name: "Supabase", icon: "SiSupabase", projectCount: 3 },
];
