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
    if (!ok.includes(f.type)) { alert("Please upload a PDF or DOCX file."); return; }
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
      className={cn("upload-zone p-8 flex flex-col items-center justify-center text-center min-h-[180px]", drag && "drag")}
      onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrop}
      onClick={() => !file && ref.current?.click()}
    >
      <input ref={ref} type="file" accept=".pdf,.docx" className="hidden"
        onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-3 cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-[#1e1e1e] border border-white/8 flex items-center justify-center mx-auto">
              <Upload className="w-5 h-5 text-[#555]" />
            </div>
            <div>
              <p className="text-[14px] font-medium text-white">Drop your resume here</p>
              <p className="text-[12px] text-[#555] mt-1">or click to browse files</p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="badge badge-purple text-[11px]">PDF</span>
              <span className="badge badge-purple text-[11px]">DOCX</span>
            </div>
          </motion.div>
        ) : (
          <motion.div key="file" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-3 w-full">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mx-auto">
              {isLoading
                ? <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                : <FileText className="w-5 h-5 text-indigo-400" />
              }
            </div>
            <div>
              <p className="text-[14px] font-medium text-white truncate max-w-[200px] mx-auto">{file.name}</p>
              <p className="text-[12px] text-[#555] mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {isLoading ? (
              <p className="text-[13px] text-indigo-400 font-medium">Analyzing your resume...</p>
            ) : (
              <button onClick={clear} className="btn btn-ghost text-[12px] py-1.5 px-3 mx-auto">
                <X className="w-3.5 h-3.5" />
                Remove
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
