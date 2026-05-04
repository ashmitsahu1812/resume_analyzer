"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Brain, 
  CheckCircle2, 
  FileText, 
  Zap, 
  Target 
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
    <section id="features" className="py-40 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-24 space-y-4">
          <span className="mono text-secondary">Core Capabilities</span>
          <h2 className="text-5xl font-bold tracking-tighter font-heading">The platform <br /> infrastructure.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border-white/5 border-r border-b group hover:bg-white/[0.02] transition-colors relative"
            >
              <div className="absolute top-4 left-4 mono text-[10px] text-white/20 group-hover:text-secondary transition-colors">
                0{i + 1} //
              </div>
              
              <div className={`w-12 h-12 mb-8 flex items-center justify-center transition-transform group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 text-white/40 group-hover:text-secondary transition-colors`} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight font-heading">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
