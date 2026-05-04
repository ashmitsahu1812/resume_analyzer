"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, CheckCircle2, Loader2, AlertCircle, Crown, Sparkles } from "lucide-react";
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
      alert("Please upload a PDF or DOCX file for premium analysis.");
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
          dragActive ? "border-yellow-400 bg-yellow-400/10 scale-[1.02] luxury-glow" : "border-yellow-400/30 hover:border-yellow-400/50",
          file ? "bg-yellow-400/5 border-yellow-400/60 luxury-glow" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {/* Luxury Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5 pointer-events-none" />

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
                  boxShadow: [
                    "0 0 0px rgba(212,175,55,0)",
                    "0 0 30px rgba(212,175,55,0.4)",
                    "0 0 0px rgba(212,175,55,0)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl"
              >
                <Upload className="w-12 h-12 text-black" />
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs uppercase tracking-[0.3em] font-black gold-text-static">Premium Upload</span>
                </div>
                <h3 className="text-3xl font-luxury font-black tracking-tight gold-text-static">Deploy Document</h3>
                <p className="text-white/60 max-w-sm mx-auto font-elegant leading-relaxed">
                  Upload your professional document for luxury-grade AI analysis and optimization.
                </p>
              </div>

              <div className="flex items-center justify-center gap-8 pt-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
                  <div className="status-dot" />
                  <span>PDF</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
                  <div className="status-dot" />
                  <span>DOCX</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="selected"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border-2 border-yellow-400/30 luxury-glow">
                <FileText className="w-10 h-10 text-yellow-400" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-luxury font-bold truncate max-w-[300px] mx-auto gold-text-static">{file.name}</h3>
                <p className="text-sm text-white/50 font-elegant">{(file.size / 1024 / 1024).toFixed(2)} MB • Premium Ready</p>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center gap-3 text-yellow-400 font-bold">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="font-elegant">Analyzing with Elite AI...</span>
                </div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearFile();
                  }}
                  className="btn-outline-gold text-sm flex items-center gap-2 mx-auto"
                >
                  <X className="w-4 h-4" />
                  Change Document
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
