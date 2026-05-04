"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
}

export default function FileUpload({ onFileSelect, isLoading }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      onFileSelect(selectedFile);
    } else {
      alert("Please upload a PDF or DOCX file.");
    }
  };

  const clearFile = () => {
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={cn(
          "relative border-2 border-dashed rounded-[3rem] p-16 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden",
          dragActive ? "border-primary bg-primary/10 scale-[1.05] neo-shadow" : "border-white/10 hover:border-white/20 glass-hover",
          file ? "bg-white/5 border-primary/50 neo-shadow" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Animated Background for upload */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.05),transparent_70%)] pointer-events-none" />
        
        <input
          ref={inputRef}
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          onChange={handleChange}
          accept=".pdf,.docx"
          disabled={isLoading}
        />

        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="space-y-6 relative z-10"
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  filter: ["drop-shadow(0 0 0px rgba(217,70,239,0))", "drop-shadow(0 0 20px rgba(217,70,239,0.5))", "drop-shadow(0 0 0px rgba(217,70,239,0))"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 gradient-bg rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Upload className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Deploy Resume</h3>
              <p className="text-white/60 max-w-sm mx-auto font-medium">
                Drop your PDF/DOCX here to begin hyper-analysis.
              </p>
              <div className="flex items-center justify-center gap-6 pt-6 text-xs font-black uppercase tracking-widest text-primary">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" /> PDF
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" /> DOCX
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="selected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-primary/30">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold truncate max-w-[300px] mx-auto">{file.name}</h3>
                <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center gap-2 text-primary font-bold">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing with AI...
                </div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFile();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-bold flex items-center gap-2 mx-auto transition-all"
                >
                  <X className="w-4 h-4" /> Change File
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
