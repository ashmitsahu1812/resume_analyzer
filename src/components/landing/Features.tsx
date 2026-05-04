"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Target, 
  Sparkles, 
  FileText, 
  Cpu, 
  Search, 
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from "lucide-react";
import { useRef } from "react";

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="luxury-card p-16 rounded-[4rem] group relative overflow-hidden h-[600px] flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
      
      <div style={{ transform: "translateZ(80px)" }} className="relative z-10 space-y-12">
        <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all duration-700 shadow-2xl">
          <feature.icon className="w-10 h-10 text-white/20 group-hover:text-emerald-400 transition-colors" />
        </div>
        
        <div className="space-y-6">
          <h3 className="text-4xl font-black tracking-tighter text-white uppercase">{feature.title}</h3>
          <p className="text-xl text-white/30 font-medium leading-relaxed group-hover:text-white/60 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="pt-10 flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-emerald-400 transition-all">
        Execute Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform" />
      </div>

      {/* Internal Reflection */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );
}

const features = [
  {
    title: "Diagnostics",
    description: "Multi-layered semantic evaluation of your professional narrative across institutional rubrics.",
    icon: Activity,
  },
  {
    title: "Alignment",
    description: "Neural proximity mapping between your core competencies and high-stakes role requirements.",
    icon: Target,
  },
  {
    title: "Intelligence",
    description: "Generative behavioral simulations designed to test and optimize your interview performance.",
    icon: Zap,
  }
];

export default function Features() {
  return (
    <section id="features" className="py-80 px-6 relative bg-black">
      <div className="max-w-8xl mx-auto space-y-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end border-b border-white/10 pb-32">
          <div className="space-y-10 text-center lg:text-left">
            <span className="text-[14px] uppercase tracking-[0.8em] font-black text-emerald-500">Infrastructure</span>
            <h2 className="text-8xl md:text-[12rem] font-black tracking-tighter metallic-text uppercase leading-[0.8]">
              Standard <br /> 
              <span className="opacity-20 italic">Elite.</span>
            </h2>
          </div>
          <p className="max-w-xl text-3xl text-white/30 font-light leading-relaxed text-center lg:text-left">
            Our proprietary engine is engineered for high-stakes career transitions. Every module is built for zero-latency diagnostics.
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
