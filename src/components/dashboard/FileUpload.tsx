"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  onFileSelect: (file: File) => void;
  isLoading?: boolean;
}

export default function FileUpload({ onFileSelect, isLoading }: Props) {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDrag(e.type === "dragenter" || e.type === "dragover");
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDrag(false);
    if (e.dataTransfer.files[0]) pick(e.dataTransfer.files[0]);
  };

  const pick = (f: File) => {
    const ok = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!ok.includes(f.type)) { alert("PDF or DOCX only."); return; }
    setFile(f);
    onFileSelect(f);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (ref.current) ref.current.value = "";
  };

  return (
    <div
      className={cn("upload-zone relative p-10 flex flex-col items-center justify-center text-center min-h-[200px] cursor-pointer rounded-sm", drag && "active")}
      onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrop}
      onClick={() => ref.current?.click()}
    >
      <input ref={ref} type="file" accept=".pdf,.docx" className="hidden"
        onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-4">
            <div className="w-12 h-12 border border-cyan-400/30 flex items-center justify-center mx-auto">
              <Upload className="w-5 h-5 text-cyan-400/60" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Drop file or click to upload</p>
              <p className="cyber-label">PDF · DOCX supported</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="file" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-3">
            <div className="w-12 h-12 border border-cyan-400/40 flex items-center justify-center mx-auto bg-cyan-400/5">
              {isLoading
                ? <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                : <FileText className="w-5 h-5 text-cyan-400" />
              }
            </div>
            <div>
              <p className="text-sm font-semibold text-white truncate max-w-[200px] mx-auto">{file.name}</p>
              <p className="cyber-label mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {!isLoading && (
              <button onClick={clear} className="btn-cyber text-xs px-4 py-2 mx-auto">
                <X className="w-3 h-3" /> Remove
              </button>
            )}
            {isLoading && (
              <p className="cyber-label text-cyan-400">Analyzing...</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
