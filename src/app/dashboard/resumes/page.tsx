"use client";

import { motion } from "framer-motion";
import { FileText, Download, Trash2, Calendar, Search, Filter, HardDrive } from "lucide-react";

const mockResumes = [
  { id: 1, name: "Software_Engineer_v1.pdf", date: "2024-05-04", score: 85, size: "1.2 MB" },
  { id: 2, name: "Product_Manager_Final.docx", date: "2024-04-28", score: 92, size: "0.8 MB" },
  { id: 3, name: "Data_Analyst_Google.pdf", date: "2024-04-15", score: 78, size: "2.1 MB" },
];

export default function ResumeVaultPage() {
  return (
    <div className="space-y-12 pb-20">
      <header className="border-b border-white/5 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="mono text-primary mb-2 flex items-center gap-2">
              <HardDrive className="w-3 h-3" />
              Encrypted Archive / 0X-102
          </div>
          <h1 className="text-5xl font-bold tracking-tighter font-heading">
            Resume <br /> Vault.
          </h1>
          <p className="text-white/40 max-w-md mt-4">
            Manage your historical analysis data and resume iterations within the encrypted vault.
          </p>
        </div>

        <div className="flex items-center gap-4">
           <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search archive..." 
                className="pl-12 pr-6 py-4 bg-white/[0.02] border border-white/5 rounded-sm mono text-[10px] w-64 focus:outline-none focus:border-primary/30 transition-all"
              />
           </div>
           <button className="p-4 bg-white/[0.02] border border-white/5 rounded-sm hover:border-primary/30 transition-colors">
              <Filter className="w-4 h-4 text-white/40" />
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
         <div className="grid grid-cols-12 px-8 py-4 mono text-[10px] text-white/20 uppercase tracking-widest border-b border-white/5">
            <div className="col-span-5">Document Name</div>
            <div className="col-span-2 text-center">Score</div>
            <div className="col-span-2 text-center">Modified</div>
            <div className="col-span-1 text-center">Size</div>
            <div className="col-span-2 text-right">Actions</div>
         </div>

         <div className="space-y-4 pt-4">
            {mockResumes.map((resume, i) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-12 items-center px-8 py-6 glass border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="col-span-5 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-bold font-heading truncate">{resume.name}</span>
                      <span className="mono text-[8px] text-white/20">UUID: {resume.id}-FA32-88</span>
                   </div>
                </div>
                
                <div className="col-span-2 text-center">
                   <span className="px-3 py-1 rounded-full bg-primary/10 text-primary mono text-[10px] font-bold">
                     {resume.score} pts
                   </span>
                </div>

                <div className="col-span-2 text-center flex flex-col items-center">
                   <span className="text-[10px] text-white/40 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {resume.date}
                   </span>
                </div>

                <div className="col-span-1 text-center">
                   <span className="mono text-[10px] text-white/20">{resume.size}</span>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-2">
                   <button className="p-2.5 rounded-sm hover:bg-white/5 transition-colors text-white/40 hover:text-white">
                      <Download className="w-4 h-4" />
                   </button>
                   <button className="p-2.5 rounded-sm hover:bg-rose-500/10 transition-colors text-white/40 hover:text-rose-500">
                      <Trash2 className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
