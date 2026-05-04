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
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Everything you need to <span className="gradient-text">get hired</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed by recruiters and powered by the latest AI models to give you a competitive edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] glass glass-hover border-white/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
              
              <div className={`w-16 h-16 ${feature.bg} rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                <feature.icon className={`w-10 h-10 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
