"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, Loader2 } from "lucide-react";

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
      onClick={() => !file && ref.current?.click()}
      onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrop}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", minHeight: 180, borderRadius: 12, cursor: "pointer", padding: 32,
        border: `2px dashed ${drag ? "#6366f1" : "rgba(255,255,255,0.1)"}`,
        background: drag ? "rgba(99,102,241,0.06)" : "rgba(39,39,42,0.3)",
        transition: "all 0.2s",
      }}
    >
      <input ref={ref} type="file" accept=".pdf,.docx" style={{ display: "none" }}
        onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "#27272a", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Upload size={20} color="#52525b" />
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 500, color: "white", marginBottom: 4 }}>Drop your resume here</p>
              <p style={{ fontSize: 12, color: "#52525b" }}>or click to browse files</p>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              {["PDF", "DOCX"].map(t => (
                <span key={t} style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", fontSize: 11, fontWeight: 500, color: "#a5b4fc" }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="file" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {isLoading ? <Loader2 size={20} color="#818cf8" className="animate-spin" /> : <FileText size={20} color="#818cf8" />}
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 500, color: "white", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{file.name}</p>
              <p style={{ fontSize: 12, color: "#52525b", marginTop: 2 }}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {isLoading
              ? <p style={{ fontSize: 13, color: "#818cf8", fontWeight: 500 }}>Analyzing your resume...</p>
              : (
                <button onClick={clear} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", fontSize: 12, fontWeight: 500, color: "#71717a", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, cursor: "pointer" }}>
                  <X size={13} /> Remove
                </button>
              )
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
