"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, Loader2 } from "lucide-react";

const BORDER = "rgba(255,255,255,0.07)";
const MUTED = "rgba(255,255,255,0.4)";

interface Props { onFileSelect: (file: File) => void; isLoading?: boolean; }

export default function FileUpload({ onFileSelect, isLoading }: Props) {
  const [drag, setDrag] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  const onDrag = (e: React.DragEvent) => { e.preventDefault(); e.stopPropagation(); setDrag(e.type === "dragenter" || e.type === "dragover"); };
  const onDrop = (e: React.DragEvent) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files[0]) pick(e.dataTransfer.files[0]); };
  const pick = (f: File) => {
    const ok = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!ok.includes(f.type)) { alert("PDF or DOCX only."); return; }
    setFile(f); onFileSelect(f);
  };
  const clear = (e: React.MouseEvent) => { e.stopPropagation(); setFile(null); if (ref.current) ref.current.value = ""; };

  return (
    <div
      onClick={() => !file && ref.current?.click()}
      onDragEnter={onDrag} onDragLeave={onDrag} onDragOver={onDrag} onDrop={onDrop}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", minHeight: 180,
        borderRadius: 12, cursor: "pointer", padding: 28,
        border: `1.5px dashed ${drag ? "rgba(255,255,255,0.3)" : BORDER}`,
        background: drag ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        transition: "all 0.2s",
      }}
    >
      <input ref={ref} type="file" accept=".pdf,.docx" style={{ display: "none" }}
        onChange={(e) => e.target.files?.[0] && pick(e.target.files[0])} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, border: `1px solid ${BORDER}`, background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Upload size={18} color={MUTED} />
            </div>
            <div>
              <p style={{ fontSize: 13.5, fontWeight: 400, color: "#ffffff", marginBottom: 4, fontFamily: "var(--font-body)" }}>Drop your resume here</p>
              <p style={{ fontSize: 11.5, color: MUTED, fontFamily: "var(--font-body)" }}>or click to browse files</p>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
              {["PDF", "DOCX"].map(t => (
                <span key={t} className="liquid-glass" style={{ padding: "3px 12px", borderRadius: 999, fontSize: 10, color: MUTED, fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="file" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, width: "100%" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, border: `1px solid rgba(255,255,255,0.15)`, background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {isLoading ? <Loader2 size={18} color="rgba(255,255,255,0.7)" className="animate-spin" /> : <FileText size={18} color="rgba(255,255,255,0.7)" />}
            </div>
            <div>
              <p style={{ fontSize: 13.5, color: "#ffffff", maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-body)" }}>{file.name}</p>
              <p style={{ fontSize: 11, color: MUTED, marginTop: 2, fontFamily: "var(--font-body)" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            {isLoading
              ? <p style={{ fontSize: 12, color: MUTED, fontFamily: "var(--font-body)" }}>Analyzing...</p>
              : <button onClick={clear} className="liquid-glass" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", fontSize: 11, color: MUTED, background: "rgba(255,255,255,0.01)", border: "none", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-body)" }}>
                <X size={11} /> Remove
              </button>
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
