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
    title: "ATS Optimization",
    description: "Our AI checks your resume against common Applicant Tracking Systems to ensure you pass the first filter.",
    icon: BarChart3,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Smart Suggestions",
    description: "Get line-by-line recommendations for bullet points that lack impact or quantification.",
    icon: Brain,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Instant Scoring",
    description: "Receive a comprehensive score breakdown based on formatting, keywords, and relevance.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Job Matching",
    description: "Paste a job description and see exactly how your resume matches up and what's missing.",
    icon: Target,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Grammar Check",
    description: "Eliminate embarrassing typos and improve readability with our professional tone analyzer.",
    icon: CheckCircle2,
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
