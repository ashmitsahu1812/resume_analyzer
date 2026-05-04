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
      className={cn("upload-zone p-8 flex flex-col items-center justify-center text-center min-h-[180px]", drag && "active")}
      onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrop}
      onClick={() => !file && ref.current?.click()}
    >
      <input ref={ref} type="file" accept=".pdf,.docx" className="hidden"
        onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-3 cursor-pointer">
            <div className="w-11 h-11 rounded-full bg-[#f5f5f7] flex items-center justify-center mx-auto">
              <Upload className="w-5 h-5 text-[#6e6e73]" />
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#1d1d1f]">Drop your resume here</p>
              <p className="label mt-1">or click to browse</p>
            </div>
          </motion.div>
        ) : (
          <motion.div key="file" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="space-y-3 w-full">
            <div className="w-11 h-11 rounded-full bg-[#0071e3]/10 flex items-center justify-center mx-auto">
              {isLoading
                ? <Loader2 className="w-5 h-5 text-[#0071e3] animate-spin" />
                : <FileText className="w-5 h-5 text-[#0071e3]" />
              }
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#1d1d1f] truncate max-w-[180px] mx-auto">{file.name}</p>
              <p className="label mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {isLoading ? (
              <p className="text-[13px] text-[#0071e3] font-medium">Analyzing...</p>
            ) : (
              <button onClick={clear} className="btn-ghost text-[13px] py-1.5 px-4 mx-auto">
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
