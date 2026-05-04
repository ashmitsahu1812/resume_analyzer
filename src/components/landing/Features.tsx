"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Sparkles, 
  FileText, 
  Cpu, 
  Search, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

const features = [
  {
    title: "Neural Job Match",
    description: "Our proprietary alignment engine calculates semantic proximity between your experience and any target job description.",
    icon: Target,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Interview Intel",
    description: "Generate high-probability interview questions and response blueprints tailored specifically to your unique profile.",
    icon: Sparkles,
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Smart Vault",
    description: "Securely archive and manage multiple resume iterations. Track your progress and iteration quality over time.",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "ATS Infiltration",
    description: "Reverse-engineered algorithms that score your resume exactly how top-tier ATS systems perceive your data.",
    icon: Cpu,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Keyword Gap Logic",
    description: "Automatically identify critical technical and soft skill gaps required to bypass initial automated filters.",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "High-Impact Rewrites",
    description: "AI-driven phrasing optimization that converts passive responsibilities into active, data-driven achievements.",
    icon: MessageSquare,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
  },
  {
    title: "Multi-Format Support",
    description: "Seamlessly upload PDF and DOCX files. Our parser extracts every detail with precision.",
    icon: FileText,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-60 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
          <div className="space-y-6">
            <span className="mono text-primary font-bold tracking-[0.3em]">Module Overview</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter font-heading leading-tight">
              Platform <br /> Infrastructure.
            </h2>
          </div>
          <p className="text-xl text-white/40 max-w-lg leading-relaxed font-body">
            A precision-engineered ecosystem designed to bypass automated filters and resonate with human gatekeepers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-px gap-y-px bg-white/5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-16 group hover:bg-white/[0.02] transition-colors relative"
            >
              <div className="absolute top-8 left-8 mono text-[10px] text-white/10 group-hover:text-primary transition-colors">
                MOD-0{i + 1}
              </div>
              
              <div className={`w-14 h-14 mb-10 flex items-center justify-center border border-white/5 group-hover:border-primary/30 transition-all duration-500`}>
                <feature.icon className={`w-6 h-6 text-white/20 group-hover:text-primary group-hover:gold-glow transition-all`} />
              </div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight font-heading">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed font-body text-sm group-hover:text-white/60 transition-colors">
                {feature.description}
              </p>
              
              <div className="mt-10 flex items-center gap-2 mono text-[9px] text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                Execute Module <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
