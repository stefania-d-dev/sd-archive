'use client';

import { motion } from 'framer-motion';
import { CpuIcon, PaintBrushIcon, CodeIcon, CaretRightIcon } from '@phosphor-icons/react';
import chibiDevImg from './../../assets/stickers/ste_dev.webp';
import chibiDesignImg from './../../assets/stickers/ste_des.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#030014] text-white flex flex-col border-b border-white/10 overflow-hidden">
      
      {/* Specs Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 tracking-tighter uppercase text-[10px] font-mono z-30 bg-[#030014]">
        <div className="p-4 border-r border-white/10 flex items-center gap-3">
          <CpuIcon size={14} weight="thin" className="text-blue-500" />
          <span className="opacity-40">System:</span> <span>Senior Hybrid</span>
        </div>
        <div className="p-4 border-r border-white/10 flex items-center gap-3">
          <PaintBrushIcon size={14} weight="thin" className="text-blue-500" />
          <span className="opacity-40">Focus:</span> <span>UI Engineering</span>
        </div>
        <div className="p-4 border-r border-white/10 hidden md:flex items-center gap-3">
          <CodeIcon size={14} weight="thin" className="text-blue-500" />
          <span className="opacity-40">Stack:</span> <span>React / TS</span>
        </div>
        <div className="p-4 text-right flex items-center justify-end gap-3">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
          <span>Status: Available</span>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
        {/* Typo Area */}
        <div className="lg:col-span-8 p-10 md:p-24 border-r border-white/10 flex flex-col justify-center relative">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[9px] uppercase tracking-[0.3em] mb-10 font-mono">
              <CaretRightIcon size={8} weight="bold" /> Release_2026.v1
            </div>
            <h1 className="text-[14vw] lg:text-[11rem] font-bold leading-[0.8] tracking-tighter uppercase select-none">
              Digital<br />Crafting<span className="text-blue-500">_</span>
            </h1>
            <div className="mt-16 space-y-8 max-w-xl">
              <p className="text-3xl md:text-5xl italic font-light text-white/90 leading-tight tracking-tight border-l border-blue-500 pl-8">
                "Non è un bug, è una feature mal progettata."
              </p>
              <p className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] leading-relaxed">
                Risolvo problemi complessi attraverso il design e l'ingegneria.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Modules Area */}
        <div className="lg:col-span-4 flex flex-col bg-[#050505]">
          {[
            { id: '01', label: 'Design', img: chibiDesignImg, color: 'rgba(59,130,246,0.1)' },
            { id: '02', label: 'Engineering', img: chibiDevImg, color: 'rgba(168,85,247,0.1)' }
          ].map((mod) => (
            <motion.div key={mod.id} whileHover="hover" className="flex-1 border-b border-white/10 last:border-b-0 p-12 flex items-center justify-center relative group overflow-hidden cursor-crosshair">
              <span className="absolute top-6 left-6 font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">Module_{mod.id}_{mod.label}</span>
              <motion.img 
                variants={{ hover: { scale: 1.1, rotate: mod.id === '01' ? 5 : -5 } }}
                src={mod.img} className="w-56 h-56 object-contain z-10 drop-shadow-2xl" 
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${mod.color} 0%, transparent 70%)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator riga 212 fixata */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-mono">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}