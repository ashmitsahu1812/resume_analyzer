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
  Cell
} from "recharts";
import { AnalysisResult } from "@/lib/types";
import { Target, TrendingUp } from "lucide-react";

export default function ScoreCards({ data }: { data: AnalysisResult }) {
  const chartData = [
    { name: "ATS Score", value: data.ats_score, color: "#fbbf24" },
    { name: "Content", value: data.content_score, color: "#f59e0b" },
    { name: "Formatting", value: data.format_score, color: "#d97706" },
    { name: "Skills", value: data.skills_match, color: "#b45309" },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-8 rounded-xl glass border-white/5 relative overflow-hidden"
        >
          <div 
            className="absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32 rounded-full opacity-20"
            style={{ backgroundColor: `#fbbf24` }}
          />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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
          className="p-8 rounded-xl glass flex flex-col justify-between border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
          
          <div className="relative z-10 flex items-center justify-between mb-8">
            <span className="mono text-primary font-bold">Role Match</span>
            <Target className="w-5 h-5 text-primary gold-glow" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="text-6xl font-bold tracking-tighter font-heading text-primary gold-glow">
              {data.skills_match}%
            </div>
            <p className="text-sm text-white/40 font-body leading-relaxed">
              System analysis shows a high-confidence alignment with the target role parameters.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Breakdown Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 rounded-xl glass border-white/5 h-[400px]"
      >
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-bold font-heading flex items-center gap-2">
            <TrendingUp className="text-primary w-5 h-5" />
            Performance Matrix
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="mono text-[10px] text-white/40">Score Value</span>
            </div>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#525252", fontSize: 10, fontFamily: "monospace" }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#525252", fontSize: 10, fontFamily: "monospace" }}
              domain={[0, 100]}
            />
            <Tooltip 
              cursor={{ fill: "rgba(251,191,36,0.05)" }}
              contentStyle={{ 
                backgroundColor: "#0a0a0a", 
                border: "1px solid rgba(251,191,36,0.1)",
                borderRadius: "8px",
                padding: "12px"
              }}
              labelStyle={{ color: "#fbbf24", fontWeight: "bold", marginBottom: "4px" }}
              itemStyle={{ color: "#fff", fontSize: "12px" }}
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]} barSize={40}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
