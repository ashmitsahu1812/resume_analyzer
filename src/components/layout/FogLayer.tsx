"use client";

import { motion } from "framer-motion";

export default function FogLayer() {
  return (
    <div className="fog-layer">
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="fog-blob fog-gold w-[600px] h-[600px] -top-20 -left-20"
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fog-blob fog-bronze w-[800px] h-[800px] -bottom-40 -right-40"
      />
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="fog-blob fog-gold w-[400px] h-[400px] top-1/2 left-1/3 opacity-[0.05]"
      />
    </div>
  );
}
