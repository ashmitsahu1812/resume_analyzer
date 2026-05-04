"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Target, 
  Sparkles, 
  FileText, 
  Cpu, 
  Search, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { useRef } from "react";

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="luxury-card p-12 rounded-[3rem] group relative overflow-hidden h-[450px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 space-y-8">
        <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-700">
          <feature.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-3xl font-black tracking-tighter text-white">{feature.title}</h3>
          <p className="text-lg text-white/30 font-medium leading-relaxed group-hover:text-white/60 transition-colors">
            {feature.description}
          </p>
        </div>

        <div className="pt-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-white transition-all">
          Initiate Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

const features = [
  {
    title: "Neural Match",
    description: "Calculates precise semantic alignment between your profile and institutional requirements.",
    icon: Target,
  },
  {
    title: "Interview Intel",
    description: "Generates high-stakes behavioral simulations and STAR-method response blueprints.",
    icon: Sparkles,
  },
  {
    title: "Infiltration Logic",
    description: "Reverse-engineered algorithms that score your narrative through the lens of modern gatekeepers.",
    icon: Cpu,
  }
];

export default function Features() {
  return (
    <section className="py-60 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-20">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30">System Infrastructure</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter metallic-text">
              Precision <br /> 
              <span className="opacity-20 italic">Architect.</span>
            </h2>
          </div>
          <p className="max-w-md text-2xl text-white/30 font-light leading-relaxed">
            Every module is engineered for zero-latency career diagnostics. No fluff. Just institutional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
