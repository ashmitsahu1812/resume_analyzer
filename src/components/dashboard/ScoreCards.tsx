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
    { name: "ATS Score", value: data.ats_score, color: "#8b5cf6" },
    { name: "Content", value: data.content_score, color: "#3b82f6" },
    { name: "Formatting", value: data.format_score, color: "#10b981" },
    { name: "Skills", value: data.skills_match, color: "#f59e0b" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {chartData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 rounded-[2rem] glass border-white/5 relative overflow-hidden group"
        >
          <div 
            className="absolute top-0 right-0 w-24 h-24 blur-[60px] -mr-12 -mt-12 rounded-full transition-all group-hover:blur-[40px]"
            style={{ backgroundColor: `${item.color}20` }}
          />
          <p className="text-sm font-semibold text-muted-foreground mb-1">{item.name}</p>
          <div className="flex items-end gap-2">
            <h3 className="text-4xl font-bold">{item.value}</h3>
            <span className="text-muted-foreground text-sm font-medium mb-1.5">/100</span>
          </div>
          
          <div className="mt-4 h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </div>
        </motion.div>
      ))}

      {/* Main Analysis Chart */}
      <div className="md:col-span-2 lg:col-span-3 p-8 rounded-[2rem] glass border-white/5 h-[400px]">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="text-primary" />
          Score Breakdown
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#a3a3a3", fontSize: 12 }}
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
