"use client";

import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie
} from "recharts";
import { AnalysisResult } from "@/lib/types";
import { CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";

export default function ScoreCards({ data }: { data: AnalysisResult }) {
  const chartData = [
    { name: "ATS Score", value: data.ats_score, color: "#fbbf24" },
    { name: "Content", value: data.content_score, color: "#f59e0b" },
    { name: "Formatting", value: data.format_score, color: "#d97706" },
    { name: "Skills", value: data.skills_match, color: "#b45309" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {chartData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:col-span-2 p-8 rounded-xl glass border-white/5"
      >
        <div 
          className="absolute top-0 right-0 w-24 h-24 blur-[60px] -mr-12 -mt-12 rounded-full transition-all group-hover:blur-[40px]"
          style={{ backgroundColor: `#fbbf2420` }}
        />
        <div className="flex-1 grid grid-cols-2 gap-8">
          {chartData.map((item) => (
            <div key={item.name} className="space-y-3">
              <div className="flex justify-between items-end">
                <span className="mono text-[10px] text-white/40">{item.name}</span>
                <span className="text-xl font-bold font-heading">{item.value}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Match Rate Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="p-8 rounded-xl glass flex flex-col justify-between border-primary/20"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="mono text-primary font-bold">Role Match</span>
          <Target className="w-5 h-5 text-primary gold-glow" />
        </div>
        
        <div className="space-y-6">
          <div className="text-6xl font-bold tracking-tighter font-heading text-primary gold-glow">
            {data.skills_match}%
          </div>
          <p className="text-sm text-white/40 font-body leading-relaxed">
            Your profile alignment with the target role requirements.
          </p>
        </div>
      </motion.div>

      {/* Main Analysis Chart */}
      <div className="lg:col-span-3 p-8 rounded-[2rem] glass border-white/5 h-[400px]">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          Score Breakdown
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#a3a3a3", fontSize: 10, fontFamily: "monospace" }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip 
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              contentStyle={{ 
                backgroundColor: "#1a1a1a", 
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "#fff"
              }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Match Percentage Card */}
      <div className="lg:col-span-1 p-8 rounded-[2rem] glass border-white/5 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-bold mb-6">Job Match</h3>
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-white/5"
            />
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={440}
              initial={{ strokeDashoffset: 440 }}
              animate={{ strokeDashoffset: 440 - (440 * data.job_match_percentage) / 100 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{data.job_match_percentage}%</span>
            <span className="text-xs text-muted-foreground font-semibold">Match Rate</span>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed px-4">
          Based on the provided job description and your technical skills.
        </p>
      </div>
    </div>
  );
}
