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
  Activity,
  Crown,
  Award,
  TrendingUp
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
      className="card-premium p-16 group relative overflow-hidden h-[600px] flex flex-col justify-between"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

      <div style={{ transform: "translateZ(80px)" }} className="relative z-10 space-y-12">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border-2 border-yellow-400/30 flex items-center justify-center group-hover:border-yellow-400/60 group-hover:bg-gradient-to-br group-hover:from-yellow-400/30 group-hover:to-yellow-600/20 transition-all duration-700 shadow-2xl luxury-glow">
          <feature.icon className="w-12 h-12 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl font-luxury font-black tracking-tighter text-white uppercase">{feature.title}</h3>
          <p className="text-xl text-white/60 font-elegant font-light leading-relaxed group-hover:text-white/80 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="pt-10 flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-yellow-400 transition-all">
        <Crown className="w-5 h-5" />
        Premium Access
        <ArrowRight className="w-5 h-5 group-hover:translate-x-4 transition-transform" />
      </div>

      {/* Luxury Reflection Effect */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-yellow-400/10 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

      {/* Golden Border Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

const features = [
  {
    title: "Elite Diagnostics",
    description: "Multi-dimensional analysis of your professional narrative using advanced AI algorithms and luxury-grade precision metrics.",
    icon: Activity,
  },
  {
    title: "Neural Alignment",
    description: "Sophisticated matching between your core competencies and premium role requirements using proprietary intelligence systems.",
    icon: Target,
  },
  {
    title: "Executive Intelligence",
    description: "Advanced behavioral simulations and interview optimization designed for C-suite and executive-level positions.",
    icon: Crown,
  }
];

export default function Features() {
  return (
    <section id="features" className="py-80 px-6 relative">
      <div className="max-w-8xl mx-auto space-y-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end">
          <div className="space-y-10 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="text-[14px] uppercase tracking-[0.8em] font-black gold-text-static">Premium Suite</span>
            </div>
            <h2 className="text-6xl md:text-[8rem] lg:text-[12rem] font-luxury font-black tracking-tighter gold-text leading-[0.8]">
              Luxury <br />
              <span className="opacity-30 italic font-light">Standard.</span>
            </h2>
          </div>
          <div className="space-y-8 text-center lg:text-left">
            <p className="max-w-xl text-2xl md:text-3xl text-white/60 font-elegant font-light leading-relaxed">
              Our proprietary intelligence engine is crafted for the most discerning professionals. Every algorithm is optimized for excellence.
            </p>
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold gold-text-static">Award Winning</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-bold gold-text-static">98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-gold"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Premium Statistics Section */}
        <div className="glass-panel rounded-[4rem] p-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="text-6xl font-luxury font-black gold-text">500K+</div>
              <div className="text-lg font-elegant text-white/60">Elite Professionals</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-luxury font-black gold-text">98%</div>
              <div className="text-lg font-elegant text-white/60">Success Rate</div>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-luxury font-black gold-text">24/7</div>
              <div className="text-lg font-elegant text-white/60">Premium Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
