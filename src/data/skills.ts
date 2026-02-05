import { Code, Database, Layout, Terminal, Cpu, Box } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    [span_1](start_span)// CV'ndeki ana diller ve projelerinde kullandığın diller[span_1](end_span)
    skills: ["Java", "Python", "C#", "Flutter (Dart)", "PHP", "TypeScript"],
  },
  {
    name: "Mobile & Game Dev",
    icon: Cpu,
    [span_2](start_span)[span_3](start_span)[span_4](start_span)[span_5](start_span)// Stajlarındaki ve projelerindeki uzmanlık alanların[span_2](end_span)[span_3](end_span)[span_4](end_span)[span_5](end_span)
    skills: ["Unity 3D", "Android Studio", "Flutter", "Firebase", "C# Scripting"],
  },
  {
    name: "Frontend & Web",
    icon: Layout,
    [span_6](start_span)// Şu anki portfolyo projen ve önceki web projelerin[span_6](end_span)
    skills: ["React", "Vite", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    name: "Backend & Systems",
    icon: Code,
    [span_7](start_span)// Shut The Box projen ve şu anki backend çalışmaların[span_7](end_span)
    skills: ["Flask", "RESTful APIs", "Node.js", "Python Backend"],
  },
  {
    name: "DevOps & Self-Hosting",
    icon: Box,
    // Şu an ASUS laptopunda kurduğun ve Coolify ile yönettiğin yeni stack
    skills: ["Linux (Mint/XFCE)", "Docker", "Coolify", "Cloudflare Tunnels", "Self-Hosting"],
  },
  {
    name: "Databases & Tools",
    icon: Database,
    [span_8](start_span)[span_9](start_span)[span_10](start_span)// Projelerinde kullandığın veritabanları ve araçlar[span_8](end_span)[span_9](end_span)[span_10](end_span)
    skills: ["MySQL", "Firebase Realtime DB", "Git", "UFW Firewall", "SSH"],
  },
];
